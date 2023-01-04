import path from "path";
import fs from "fs";

function buildPath() {
  /* path is imported as a module 
    cwd = current working directory to access the directory we are working on, 
    so we tell the PATH TO FOLLOW, in this case process on cwd (EVENTS_APP), to go folder data,
    and access data.json file 
    fs module allows to read and overwrite data in files*/
  return path.join(process.cwd(), "data", "data.json");
}

//first we need to extract the data so we can find the rest and overwrite it

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData); // <-- this is to convert data into js object
  return data;
}

export default function handler(req, res, next) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath); //this is how we extract data

  //this is how we send 404 message in case of no data
  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: " Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

  if( !email || !email.include('@')){
    res.status(422).json({message: 'invalid email address'});
    return;
  }


    const newAllEvents = allEvents.map( ev => {
        if(ev.id === eventId){
            if(ev.emails_registered.includes(email)){
                res.status(409).json({message: 'this email is already registered'})
                return ev;
            }
            return {
                ...ev, emails_registered: [...ev.emails_registered, email],
            };
        }
        return ev;
    })

    fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))


    res.status(201).json({
      message: `you have been registed succesfuly with the email: ${email} 
       for the event: ${eventId}`,
    });
  }
}
