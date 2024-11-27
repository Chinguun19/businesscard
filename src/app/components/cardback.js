
import React from "react";
import './style.css';

const CardBack = ({ person }) => {
  return (
  
    <div className="cardBack">
      <img src="/shape.png" className="cardBackBackground" />
      <div className="Backbackground">
        <div className="backCompanyName">{person.companyName}</div>
        <div className="backTagLine">Tag Line Goes Here</div>
        <img src="/logo2.png" className="backCompanyLogo" />
      </div>
    </div>
  
  );
};

export default CardBack;
