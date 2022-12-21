import Image from "next/image";

function SingleEvent({ data }) {
    const onSubmit = () => {}
  return (
    <>
      <div className="event_single_page">
        <Image src={data.image} width={1000} height={500} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <form onSubmit={onSubmit} className='email_registration'>
          <label>Get registerd for this event </label>
          <input
            type="email"
            id="email"
            placeholder="Please insert your email here"
          />
          <button type="button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SingleEvent;
