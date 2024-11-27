"use client"

import React, { useEffect } from "react";
import WebFont from "webfontloader";
import data from './USERS.json';  // Correct if USERS.json is in the same folder as page.js


import CardContainer from './components/cardcontainer'; // Correct relative path


export default function Home() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Montserrat:ital,wght@0,100..900;1,100..900",
          "Syne:wght@400..800",
          "League Spartan:wght@400..900",
        ],
      },
    });
    console.log(data);  // Check if data is being loaded correctly
  }, []);

  return (
  
      <CardContainer data={data} />
    
  );
}
