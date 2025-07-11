import React from 'react';

const Footer = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-6 bg-black text-white">
      <div className="max-w-[1150px] mx-auto space-y-4">
        
 
        <div className="bg-[#1D1E20] rounded-4xl p-3 flex flex-col md:flex-row items-start gap-6 md:gap-10">
          
      
          <div className="flex-shrink-0 text-center md:text-left p-2">
      <img
  src="/logo.png"
  alt="MyApp Logo"
  width={280}
  height={120}
  className="mb-5 mx-auto md:mx-0 w-[170px] md:w-[220px] mt-9"
/>


          </div>

          
          <div className="bg-black rounded-4xl py-3 px-8 flex flex-wrap justify-between gap-3 w-full text-sm -ml-4">
            
            
            <div className="space-y-2 min-w-[120px]">
              <p className="font-bold text-[#2ECC71]">Socials</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>Twitter</p>
            </div>

           
            <div className="space-y-2 min-w-[120px]">
              <p className="font-semibold text-[#2ECC71]">Resources</p>
              <p>About Us</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Contact</p>
            </div>

           
            <div className="space-y-2 min-w-[120px]">
              <p className="font-bold text-[#2ECC71]">Contact</p>
              <p className="font-bold">Helpline</p>
              <p>0304-118427</p>
            </div>

          </div>
        </div>

       
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} YourEventApp. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
