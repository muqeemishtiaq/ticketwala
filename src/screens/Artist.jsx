import React from "react";
import {  Search } from "lucide-react"; // Ensure you're using lucide-react
import Contact from "../components/Conact";
import Card from "../components/Card";
import Talents from "../components/Talents";
import Banner from "../components/Banner";

 

const Artist = () => {
  return (
    <>
    <div className="  max-w-[1150px] mx-auto space-y-8 px-2">
      <Banner/>

      <Card/>

      <Talents/>
   
       
     
    </div>
    <Contact/>
        
    </>
  );
};

export default Artist;

