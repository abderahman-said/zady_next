"use client";
import dynamic from "next/dynamic";
import Loading from "./Loading";

import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";
import NavBar from "./NavBar";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
  
 
 
import { useEffect } from 'react';
 
const Layout = ({ children }) => {
  // useEffect(()=>{
  //   window.localStorage.getItem('zayadyStorage') ? null 
  //   :
  //   window.localStorage.setItem('zayadyStorage' , JSON.stringify([]))

  //   window.localStorage.getItem('ib_ID') ? null 
  //   :
  //   window.localStorage.setItem('ib_ID' , JSON.stringify(0))

  //  },[])

   useEffect(() => {
    if (!window.localStorage.getItem('zayadyStorage')) {
      window.localStorage.setItem('zayadyStorage', JSON.stringify([]));
    }

    if (!window.localStorage.getItem('ib_ID')) {
      window.localStorage.setItem('ib_ID', JSON.stringify(0));
    }
  }, []);
  return (
    <>
     <NavBar/>
      {/* <Meta /> */}
      <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Layout;
