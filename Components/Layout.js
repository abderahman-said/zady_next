'use client'
import dynamic from 'next/dynamic';
import Loading from "./Loading"
const NavBar = dynamic(() => import("./NavBar" , { ssr: false }), {
  loading: () =>  <Loading /> ,
});
const Footer = dynamic(() => import("./Footer" , { ssr: false }), {
  loading: () =>  <Loading /> ,
});
const Header = dynamic(() => import("./Header" , { ssr: false }), {
  loading: () =>  <Loading /> ,
});
const Meta = dynamic(() => import("./Meta" , { ssr: false }), {
  loading: () =>  <Loading /> ,
});

 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "aos/dist/aos.css";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'swiper/css';
import { useEffect } from 'react';
 
const Layout = ({ children }) => {
  useEffect(()=>{
    window.localStorage.getItem('zayadyStorage') ? null 
    :
    window.localStorage.setItem('zayadyStorage' , JSON.stringify([]))

    window.localStorage.getItem('ib_ID') ? null 
    :
    window.localStorage.setItem('ib_ID' , JSON.stringify(0))

   },[])
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

















 