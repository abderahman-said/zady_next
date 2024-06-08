'use client'
import react ,{ useEffect, useState } from "react"
import blogs from "../public/img/Untitled-3.png";
import Image from "next/image";
import styles from '../styles/Home.module.css';

function App() {
 
   

  return (
    <section className={styles.hometwo}>

    <div   className={styles.padding_blog_phone}>
      <Image loading="lazy" src={blogs} alt="" className="w-100  "></Image>
    </div>
  </section>
    
  )
  
}

export default App