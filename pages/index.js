import Head from "next/head";
import HomePage from "../src/components/home/home-page";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <HomePage data={data}/>
    </div>
  );
}

export async function getServerSideProps() {
  //async function por que tenemos que esperar a la respuesta
  const { events_categories } = await import("/data/data.json"); //usamos await con import por ser funcion asincrona ya que devuelve una promise
  return {
    props: {
      data: events_categories,
    },
  };
}
