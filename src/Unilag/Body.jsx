import React from "react";
import home from "../homework.png";
import document from "../document.png";
import card from "../credit-card.png";
import refresh from "../refresh.png";
import "./Home.css";

function Body() {
  return (
    <div className="main">
      <div className="Top">
        <div className="Cards">
          <div className="names">
            <h1>James Jegede</h1>
            <br />
            <h4>Bachelor of Education in Chemistry</h4>
            <h5>SCIENCE EDUCATION</h5>
          </div>
          <div className="Courses">
            <div className="Lists">
              <h4>4</h4>
              <h4>Year</h4>
            </div>
            <div className="Lists">
              <h4>First</h4>
              <h4>Semestser</h4>
            </div>
            <div className="Lists">
              <h4>10</h4>
              <h4>Courses</h4>
            </div>
            <div className="Lists">
              <h4>13</h4>
              <h4>Units</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons doc">
          <img src={document} alt="" />
          <h3>Courses</h3>
          <h4>120/128 Completed</h4>
        </div>
        <div className="icons ref">
          <img src={refresh} alt="" />
          <h3>Refresh Payment Status</h3>
        </div>
        <div className="icons card">
          <img src={card} alt="" />
          <h3>Payments</h3>
        </div>
      </div>
      <div className="icons app">
        <img src={home} alt="" />
        <h3>Applications</h3>
      </div>
    </div>
    // </div>
  );
}

export default Body;
