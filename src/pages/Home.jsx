import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import EventCard from "../components/EventCard";
import { fetchEvents } from "../api/ticketmaster";

const Home = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sliderEvents, setSliderEvents] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [cityList, setCityList] = useState([]);

  const [filters, setFilters] = useState({
    keyword: "",
    city: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents({ countryCode: "US", size: 200 });

      const formatted = data.map((event) => ({
        id: event.id,
        title: event.name,
        date: event.dates?.start?.localDate || "No Date",
        location: `${event._embedded?.venues?.[0]?.name || "Unknown Venue"}, ${event._embedded?.venues?.[0]?.city?.name || "Unknown City"}`,
        city: event._embedded?.venues?.[0]?.city?.name || "Unknown",
        image: event.images?.[0]?.url,
        url: event.url,
      }));

      const shuffled = [...formatted].sort(() => 0.5 - Math.random());
      const cities = Array.from(new Set(formatted.map((e) => e.city))).sort();

      setCityList(cities);
      setSliderEvents(shuffled.slice(0, 5));
      setAllEvents(formatted);
      setFiltered(shuffled.slice(5));
    };

    getEvents();
  }, []);

  useEffect(() => {
    let list = [...allEvents];
    const { keyword, city, start, end } = filters;

    if (keyword) {
      list = list.filter((e) =>
        e.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (city) {
      list = list.filter((e) =>
        e.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (start && end) {
      list = list.filter((e) => e.date >= start && e.date <= end);
    }

    setFiltered(list);
    setVisibleCount(10);
  }, [filters, allEvents]);

  return (
    <div className="w-full px-4 py-6 max-w-[1150px] mx-auto">
      
      <Hero events={sliderEvents} />
      <Filters filters={filters} setFilters={setFilters} cityList={cityList} />
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-[#1D1E20] p-4 rounded-2xl">
        
        {filtered.length ? (
          filtered.slice(0, visibleCount).map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-white text-center col-span-2 py-8">
            No events found.
          </p>
        )}

        {visibleCount < filtered.length && (
          <div className="col-span-1 md:col-span-2 flex justify-center items-center pt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="bg-[#2ECC71] text-black px-20 py-2 rounded-full hover:bg-white hover:text-[#2ECC71] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
