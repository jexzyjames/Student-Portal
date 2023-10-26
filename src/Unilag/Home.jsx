import React, { useState } from "react";
import "./Home.css";
import Header from "./Header";
import Sidebar from "./Sidebars";
import Body from "./Body";
import Aside from "./Aside";
function Home() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="grids">
      <Header />

      <Sidebar  />
      <Body />
      <Aside />
    </div>
  );
}

export default Home;
