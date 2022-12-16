import Image from "next/image";

function EventPage({ data }) {
  console.log("esto es el clg de data", data);
  return (
    //<a href="/"> Ir al principio </a>
    <div>
        <Image src={data.image} width={1000} height={500} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </div>
  );
}

export default EventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("otro conext", context);
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);
  console.log("este es eventData", eventData)
  return {
    props: {
      data: eventData,
    },
  };
}
