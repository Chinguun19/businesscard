
import React from "react";
import './style.css';

const CardFront = ({ person }) => {
  return (
  
    <div className="cardFront">
      <img src="/phone.png" className="phone" />
      <img src="/location2.png" className="location" />
      <img src="/mail.png" className="mail" />
      <img src="/background.png" className="cardimage" />
      <div className="background">
        <div className="companyName">{person.companyName}</div>
        <div className="tagLine">Tag Line Goes Here</div>
        <img src="/logo2.png" className="companyLogo" />
        <img src="/QR.png" className="qr" />
      </div>

      <div className="Name">
        <span className="firstName">{person.firstName}</span>{" "}
        <span className="lastName">{person.lastName}</span>
      </div>
      <div className="profession">Developer</div>
      <div className="phoneNumber">{person.phoneNumber}</div>
      <div className="email">{person.email}</div>
      <div className="address">{person.address}</div>
    </div>
  
  );
};

export default CardFront;
