import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, useLocation } from "react-router";
 import './App.scss'
import Routess from "./config/Routess";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
function App() {
  const loc=window.location




  return (
    
    <BrowserRouter>
<>
 <Header/>
          <Routess/>
          <Footer/>
         
</>
         
         


    

 
        </BrowserRouter> 
    

  )
}



export default App;
