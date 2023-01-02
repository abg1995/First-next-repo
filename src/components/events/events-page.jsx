import Link from "next/link";
import Image from "next/image";


function AllEvents({ data }) {
  return (
    <>
      <div className="events_page">
         <br />
        <br />
          {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                <div className="card">
              <Image src={ev.image} width={400} height={400} />
              <h2>{ev.title}</h2>
              </div>
            </Link>
          ))}

      </div>
    </>
  );
}

export default AllEvents;
