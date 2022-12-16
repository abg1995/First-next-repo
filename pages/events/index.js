import Image from "next/image";
import Link from "next/link";

function EventsPage({data}){

    return(
        <div>
         <h1>Events index</h1>

         <a href="/">Get home</a> <br /><br /><br />
        <div>
            {data.map( ev => (
                <Link key={ev.id} href={`/events/${ev.id}`}>
                <Image src={ev.image} width={300} height={300}  /> <h2>{ev.title}</h2></Link>
            ))}
    

        </div>
        </div>
    )
}


export default EventsPage;

export async function getStaticProps(){
    const {events_categories} = await import('/data/data.json')  //siempre que sea funcion ASYNC usamos await
    return{
        props:{
            data: events_categories,
        }
    }
}