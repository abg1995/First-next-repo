import Link from "next/link";
import Image from "next/image";
import react from "react";


function AllEvents({data}){

    return(
        <>
         <div className="events_page">
         <h1>Events index</h1>

         <a href="/">Get home</a> <br /><br /><br />
        <div>
            {data.map( ev => (
                <Link key={ev.id} href={`/events/${ev.id}`}>
                <Image src={ev.image} width={300} height={300}  /> <h2>{ev.title}</h2></Link>
            ))}
    

        </div>
        </div> 
        </>
    )
}

export default AllEvents;