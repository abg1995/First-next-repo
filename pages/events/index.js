import AllEvents from '../../src/components/events/events-page';

function EventsPage({data}){

    return(
      <>
      <AllEvents data={data}/> 
      </>
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