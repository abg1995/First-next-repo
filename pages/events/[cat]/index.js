
import CatEvent from "../../../src/components/events/catEvent";

function EventsCatPage({data, pageName}) {
  return (
    <>
      <CatEvent data={data} pageName={pageName}/>

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
