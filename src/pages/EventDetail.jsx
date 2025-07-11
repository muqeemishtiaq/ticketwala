import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { fetchEventById } from "../api/ticketmaster";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetchEventById(id);
        setEvent(data);
      } catch (err) {
        console.error("Failed to load event", err);
      } finally {
        setLoading(false);
      }
    };
    getEvent();
  }, [id]);

  if (loading) return 
<div role="status" className="flex justify-center items-center h-64">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908..." fill="currentColor"/>
      <path d="M93.9676 39.0409..." fill="currentFill"/>
    </svg>
   
  </div>
;
  if (!event) return <p className="text-white text-center">Event not found.</p>;

  const venue = event._embedded?.venues?.[0];
  const genre = event.classifications?.[0]?.genre?.name;

  return (
    <div className=" max-w-[1150px] mx-auto space-y-8 px-2  text-white ">
      <div className="bg-[#1D1E20] rounded-4xl p-2">
      <div className=" bg-black rounded-2xl overflow-hidden p-2">
      <img src={event.images?.[0]?.url} alt={event.name} className="rounded-xl w-full max-h-[400px] object-cover " />
      </div>
      </div>
      <div className="bg-[#1D1E20] rounded-4xl p-2">
        <div className="bg-black rounded-4xl p-2 text-center text-[#2ECC71]">
      <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
      </div>
      <div className="grid grid-cols-2 mt-2 gap-4 text-2xl font-bold">
  <p className="mb-4 bg-black rounded-4xl text-center text-[#2ECC71] py-2 px-10">
    {event.dates?.start?.localDate}
  </p>
  <p className="mb-4 bg-black rounded-4xl text-center text-[#2ECC71] py-2 px-10">
    {event.dates?.start?.localTime}
  </p>
</div>
  
      </div>
      <div className="bg-[#1D1E20] p-4 rounded-4xl mt-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <p className="bg-black text-[#2ECC71] text-center rounded-4xl py-2 px-4">
      Venue: {venue?.name}, {venue?.city?.name}
    </p>
    <p className="bg-black text-[#2ECC71] text-center rounded-4xl py-2 px-4">
      Address: {venue?.address?.line1}
    </p>
  </div>
 <div className="mt-4 flex items-center justify-center">
  <a
    href={event.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#2ECC71] text-black px-20 py-2 rounded-full hover:bg-white hover:text-[#2ECC71] transition"
  >
    Buy Tickets
  </a>
</div>

</div>


      
      <div className="mt-6">
        <Link to="/" className="text-[#2ECC71] underline">Back to Events</Link>
      </div>
    </div>
  );
};

export default EventDetail;
