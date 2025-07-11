import React from 'react'
import { Search } from 'lucide-react' // Make sure this is installed or replace with your icon

const card = [
  { id: 1, image: "/t1.jpeg", title: "Farhan Alam Siddique" },
  { id: 2, image: "/t2.jpeg", title: "Manal Siddiqui" },
  { id: 3, image: "/t3.jpeg", title: "Retro Qawals" },
  { id: 4, image: "/t4.png", title: "Rushdi Rafiq" },
  { id: 5, image: "/t5.png", title: "Subhan AHmed Nizami Qawals and Brothers" },
  { id: 6, image: "/t6.jpg", title: "Yasir Hussain" },
  { id: 7, image: "/t7.jpg", title: "360 The Band" },
  { id: 8, image: "/t8.jpg", title: "39 Kingdom" },
  { id: 9, image: "/t9.jpeg", title: "A.R Rahman" },
  { id: 10, image: "/t10.jpg", title: "Abbas Raza Bukhari" },
  { id: 11, image: "/t11.jpg", title: "Abdul Hannan" },
  { id: 12, image: "/t12.png", title: "Abdul Hannan" },
]
const formFields = [
  {
    id: 1,
    type: "text",
    placeholder: "Select Category",
  },
  {
    id: 2,
    type: "text",
    placeholder: "Enter postal code",
  },
  {
    id: 3,
    type: "text",
    placeholder: "Search events",
    withIcon: true,
  },
];


const Talents = () => {
  return (
    <div>
      <div className="bg-[#1D1E20] rounded-2xl py-4 px-4">
        <div className="flex justify-center">
          <div className="bg-black font-bold text-center px-110 py-2 rounded-[30px] text-[#2ECC71] text-3xl">
            Talents
          </div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
  {formFields.map((field) => (
    <div key={field.id} className="bg-black p-2 rounded-full relative">
      <input
        type={field.type}
        placeholder={field.placeholder}
        className={`w-full rounded-full border border-gray-600 bg-white placeholder-black text-black px-4 py-2 ${field.withIcon ? 'pr-12' : ''} focus:outline-none`}
      />
      {field.withIcon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2ECC71] p-2 rounded-full cursor-pointer">
          <Search className="w-4 h-4 text-black" />
        </span>
      )}
    </div>
  ))}
</form>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {card.map((card) => (
            <div key={card.id} className="relative group overflow-hidden rounded-md shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-70 h-70 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1D1E20] md:opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end md:items-center justify-center">
                <div className="text-white font-bold mb-2 text-center z-10">
                  <h3>{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4 pb-2">
          <div className="bg-black rounded-full px-1 py-1">
            <button className="bg-[#2ECC71] text-black px-20 py-1 rounded-full text-xl hover:bg-white hover:text-[#2ECC71] transition">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Talents
