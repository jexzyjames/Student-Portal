import React from "react";
import "./Home.css";
import menu from "../menuicon.png";
import { useState } from "react";
import close from "../closeicon.png";

function Sidebars({ click }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <>
        {!isOpen && (
          <img
            onClick={(e) => {
                setIsOpen(!isOpen)
            } }
            className="img"
            src={menu}
            alt=""
          />
        ) 
}
      </>
      
        {isOpen && (
          <img
        onClick={(e) => {
            {
                console.log(e.currentTarget);
                setIsOpen(!isOpen)
            } }
        }
                
            className="img close"
            src={close}
            alt="close"
          />
        )}
      
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="navs">
          <ul>
            <li>Dashboard</li>
            <li>Student Data</li>
            <li>Payments</li>
            <li>Course Registration</li>
            <li>Results</li>
            <li>Appointment</li>
            <li>Election</li>
            <li>Accommodation</li>
            <li>Student Applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebars;
