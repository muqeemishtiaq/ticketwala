import React from 'react'

const cardData = [
  {
    title: "Source Top Talent",
    text: "Find the perfect talent for upcoming events including top artists, bands, comedians, DJs, and performers from the region!",
    image: "/h1.jpg",
    imageFirst: true,
  },
  {
    title: "Source Top Talent",
    text: "Find the perfect talent for upcoming events including top artists, bands, comedians, DJs, and performers from the region!",
    image: "/h2.jpg",
    imageFirst: false,
  },
]

const Card = () => {
  return (
    <div className="space-y-4">
      {cardData.map((item, index) => (
        <div key={index} className="bg-[#1D1E20] rounded-2xl py-4 px-4">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {item.imageFirst && (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-full md:w-[530px] h-60 object-cover"
              />
            )}

            <div className="text-white bg-black rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl text-[#2ECC71] font-bold mb-2">{item.title}</h2>
              <p className="text-sm">{item.text}</p>
            </div>

            {!item.imageFirst && (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-full md:w-[530px] h-60 object-cover"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
