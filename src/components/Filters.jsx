import React from "react";

const Filters = ({ filters, setFilters, cityList }) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-4 bg-[#1D1E20] p-2 rounded-4xl overflow-hidden">
      <div className="bg-black p-2 rounded-full ">
        <input
          type="text"
          placeholder="Search keyword"
          className="rounded-full px-4 py-2 border border-gray-600 placeholder-black text-black bg-white w-full"
          value={filters.keyword}
          onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
        />
      </div>

      <div className="bg-black p-2 rounded-full relative">
        <select
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          className="rounded-full px-4 py-2 border border-gray-600 text-black bg-white w-full"
        >
          <option value="">All Cities</option>
          {(cityList || []).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-black p-2 rounded-full relative">
        <input
          type="date"
          placeholder="Start Date"
          className="rounded-full px-4 py-2 border border-gray-600 text-black bg-white w-full"
          value={filters.start}
          onChange={(e) => setFilters({ ...filters, start: e.target.value })}
        />
      </div>

      <div className="bg-black p-2 rounded-full relative">
        <input
          type="date"
          placeholder="End Date"
          className="rounded-full px-4 py-2 border border-gray-600 text-black bg-white w-full"
          value={filters.end}
          onChange={(e) => setFilters({ ...filters, end: e.target.value })}
        />
      </div>
    </form>
  );
};

export default Filters;
