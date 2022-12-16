import Image from "next/image";
import Link from "next/link";

function EventsCatPage({data, pageName}) {
  return (
    <>
      <h1> Events in {pageName.toUpperCase()} </h1><br /><br />

      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                
                  <Image width={200} height={200} src={ev.image} alt={ev.title} />
                  <h2>{ev.title}</h2>
                  <p>{ev.description}</p>
                  </Link>
 
        ) )}

      <a href="/events">Get back to events page</a><br /><br /><br />

      </div>

    </>
  );
}

export default EventsCatPage;

export async function getStaticPaths() {

  const { events_categories } = await import("/data/data.json"); //usamos await con import por ser funcion asincrona ya que devuelve una promise
  const allPaths = events_categories.map( ev => {
    return{
      params: {
      cat: ev.id.toString(),
    }
  }
  })
console.log("ESTO DE AQUI ES ALLPATHS",allPaths)

  return {
  paths: allPaths,
  fallback: false
}
}


export async function getStaticProps(context){
console.log("ESTO ES CONTEXT",context)
const id = context?.params.cat;
console.log("ESTO ES ID",id)
const { allEvents } = await import("/data/data.json"); 

const data = allEvents.filter(ev => ev.city === id )
console.log("ESTO DE AQUI ES DATA",data)
 return{

  props: {
    data,
    pageName: id,
  }
}
}
