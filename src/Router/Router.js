import { useState, useRef, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Trailer from "../components/Trailer";
import Footer from "../components/Footer";
import App from "../App";
import Header from "../components/Header";
import Body from '../components/Body'
import Home from '../Unilag/Home'


function Router (){
    return(
      <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Home/>}/>
       <Route path="/footer" exact element={<Footer/>}/>
       <Route path="/header" exact element={<Header/>}/>
       <Route path="/body" element={<Body/>}/>
       <Route path="/trailer" element={<Trailer/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router