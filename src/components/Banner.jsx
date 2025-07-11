import React from 'react'
const events = [
  {
    id: 1,
    image: "/artist.jpg",
    link: "/event/geek-con-lahore-2872",
  },
];
const Banner = () => {
  return (
    <div>
      <div className="bg-[#1D1E20] rounded-4xl p-3">
        {events.map((event) => (
          <div key={event.id} className="p-3 rounded-2xl">
            <a href={event.link} className="block">
              <div className="border border-gray-700 rounded-2xl overflow-hidden">
                <img
                  src={event.image}
                  alt="event"
                  className="w-full object-cover max-h-[500px]"
                />
              </div>
            </a>
          </div>
        ))}
        <div className="flex justify-center pt-4">
          <button className="bg-[#2ECC71] text-black px-10 py-2 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2ECC71] transition">
            Get in Touch
          </button>
        </div>
      </div>

    </div>
  )
}

export default Banner
