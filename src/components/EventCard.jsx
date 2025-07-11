import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/event/${event.id}`} className="block hover:scale-105 transition bg-black rounded-2xl p-2">
      
      <div className="relative w-full h-60 rounded-xl overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0  text-white p-3">
          <h3 className="text-lg font-bold truncate">{event.title}</h3>
          <div className="text-sm flex justify-between">
            <span>{event.date}</span>
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
