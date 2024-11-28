"use client"

import React, { useEffect } from "react";
import WebFont from "webfontloader";
import data from './USERS.json'; 


import CardContainer from './components/cardcontainer'; 


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
  }, []);

  return (
  
      <CardContainer data={data} />
    
  );
}
