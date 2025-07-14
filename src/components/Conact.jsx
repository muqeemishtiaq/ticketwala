import React from "react";

const contactFields = [
  { type: "text", placeholder: "Name" },
  { type: "email", placeholder: "Email" },
  { type: "Phone number", placeholder: "Phone Number" },
  { type: "text", placeholder: "Company" },
  { type: "text", placeholder: "Budget Range" },
  { type: "text", placeholder: "Select Desired Artist" },
  { type: "text", placeholder: "Select Date" },
  { type: "text", placeholder: "Event Type" },
  { type: "text", placeholder: "Select Cities" },
  { type: "text", placeholder: "Enter Venue" },
  { type: "text", placeholder: "Expected Attendee Number" },
];

const Conact = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-6 bg-black text-white">
      <div className="max-w-[1150px] mx-auto space-y-4">
        <div className="bg-[#1D1E20] rounded-4xl p-4 flex flex-col gap-6">
            <div className="flex justify-center">
        <div className="bg-black font-bold text-center px-110 py-2 rounded-[30px] text-[#2ECC71] text-3xl">
  Get in Touch
</div>

        </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactFields.map((field, index) => (
              <div key={index} className="bg-black p-1 rounded-full">
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-full border border-gray-600 bg-white placeholder-black text-black px-4 py-1 focus:outline-none"
                />
              </div>
            ))}
          </form>

          <div className="w-full bg-black p-1 rounded-2xl">
            <textarea
              placeholder="Tell Us About Your Event"
              className="w-full rounded-2xl border border-gray-600 bg-white placeholder-black text-black px-4 py-2 focus:outline-none resize-none"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-center pt-4 pb-2">
            <div className="bg-black rounded-full px-1 py-1">
              <button className="bg-[#2ECC71] text-black px-20 py-1 rounded-full text-xl hover:bg-white hover:text-[#2ECC71] transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conact;
