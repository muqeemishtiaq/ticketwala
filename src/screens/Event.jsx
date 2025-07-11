import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Contact from "../components/Conact";


  
const Event = () => {
  return (
    <>
    <div className="max-w-[1150px] mx-auto space-y-5">
      <Banner/>
      <Card/>
       
    </div>
   <Contact/>
</>
  );
};

export default Event;
