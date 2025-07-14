import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import EventCard from "../components/EventCard";
import { fetchEvents } from "../api/ticketmaster";

const Home = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [sliderEvents, setSliderEvents] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [filters, setFilters] = useState({
    keyword: "",
    city: "",
    start: "",
    end: "",
  });

  const fetchHeroEvents = async () => {
    try {
      const params = {
        countryCode: "US",
        size: 50, // Fetch more to ensure diverse locations
        sort: "random",
      };

      const data = await fetchEvents(params);
      
      const uniqueCityEvents = [];
      const cities = new Set();
      
      for (const event of data) {
        const city = event._embedded?.venues?.[0]?.city?.name || "Unknown";
        if (!cities.has(city)) {
          cities.add(city);
          uniqueCityEvents.push(formatEvent(event));
          if (uniqueCityEvents.length >= 5) break;
        }
      }

      setSliderEvents(uniqueCityEvents);
    } catch (error) {
      console.error("Error fetching hero events:", error);
    }
  };

  const formatEvent = (event) => ({
    id: event.id,
    title: event.name,
    date: event.dates?.start?.localDate || "No Date",
    location: `${event._embedded?.venues?.[0]?.name || "Unknown Venue"}, ${
      event._embedded?.venues?.[0]?.city?.name || "Unknown City"
    }`,
    city: event._embedded?.venues?.[0]?.city?.name || "Unknown",
    image: event.images?.find(img => img.width > 600)?.url || event.images?.[0]?.url,
    url: event.url,
  });

  const fetchAvailableCities = async () => {
    try {
      const params = {
        countryCode: "US",
        size: 200, // Fetch more to get comprehensive city list
      };
      
      const data = await fetchEvents(params);
      const cities = Array.from(
        new Set(
          data
            .map((event) => event._embedded?.venues?.[0]?.city?.name)
            .filter(city => city && city !== "Unknown")
        )
      ).sort();
      
      setCityList(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const loadFilteredEvents = async (reset = true) => {
    const loadPage = reset ? 0 : page + 1;
    const loader = reset ? setIsLoadingEvents : setIsLoadingMore;

    loader(true);
    try {
      const params = {
        countryCode: "US",
        size: 20, // Increased size to get more diverse results
        page: loadPage,
        keyword: filters.keyword || undefined,
        city: filters.city || undefined,
        startDateTime: filters.start ? `${filters.start}T00:00:00Z` : undefined,
        endDateTime: filters.end ? `${filters.end}T23:59:59Z` : undefined,
        sort: "date,asc", // Always sort by date for consistency
      };

      const data = await fetchEvents(params);
      
      // For city filter, we want all events from that city
      // For no city filter, we want diverse cities
      let formatted = data.map(formatEvent);
      
      if (!filters.city) {
        // When no city filter, ensure diverse cities in results
        const uniqueCityEvents = [];
        const cities = new Set();
        
        for (const event of formatted) {
          if (!cities.has(event.city)) {
            cities.add(event.city);
            uniqueCityEvents.push(event);
          } else {
            uniqueCityEvents.push(event);
          }
          if (uniqueCityEvents.length >= 10) break;
        }
        formatted = uniqueCityEvents;
      }

      setHasMore(data.length >= 20);

      if (reset) {
        setFilteredEvents(formatted);
        setPage(0);
      } else {
        setFilteredEvents(prev => [...prev, ...formatted]);
        setPage(loadPage);
      }
    } catch (error) {
      console.error("Error loading events:", error);
    } finally {
      loader(false);
      if (reset && isInitialLoad) setIsInitialLoad(false);
    }
  };

  // Initial load
  useEffect(() => {
    const initialize = async () => {
      setIsInitialLoad(true);
      await Promise.all([
        fetchHeroEvents(),
        fetchAvailableCities(),
        loadFilteredEvents(true),
      ]);
    };
    initialize();
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      loadFilteredEvents(true);
    }
  }, [filters]);

  return (
    <div className="w-full px-4 py-6 max-w-[1150px] mx-auto">
      {isInitialLoad ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Hero events={sliderEvents} />
          <Filters filters={filters} setFilters={setFilters} cityList={cityList} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-[#1D1E20] p-4 rounded-2xl">
            {isLoadingEvents ? (
              <div className="col-span-2 flex justify-center items-center h-64">
                <LoadingSpinner />
              </div>
            ) : filteredEvents.length === 0 ? (
              <p className="text-white text-center col-span-2 py-8">
                No events found. Try adjusting your filters.
              </p>
            ) : (
              filteredEvents.map((event) => (
                <EventCard 
                  key={`${event.id}-${event.date}`}
                  event={event} 
                />
              ))
            )}

            {hasMore && !isLoadingEvents && (
              <div className="col-span-1 md:col-span-2 flex justify-center items-center pt-4">
                <button
                  onClick={() => loadFilteredEvents(false)}
                  disabled={isLoadingMore}
                  className="bg-[#2ECC71] text-black px-20 py-2 rounded-full hover:bg-white hover:text-[#2ECC71] transition disabled:opacity-50 flex items-center justify-center min-w-[200px]"
                >
                  {isLoadingMore ? (
                    <>
                      <LoadingSpinner small />
                      <span className="ml-2">Loading...</span>
                    </>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const LoadingSpinner = ({ small = false }) => (
  <svg
    className={`${small ? "w-5 h-5" : "w-8 h-8"} animate-spin text-white`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default Home;