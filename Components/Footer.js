'use client'
import React , {useEffect , useState} from "react";
import logo from '../public/img/logo.png';
import footgoogle from "../public/img/app.png";
import footgoogle2 from "../public/img/ec749e1a-b2f7-4d82-b50a-39a856634f79.png";
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <>
    <div className={styles.footer}>
    <Container style={{maxWidth: "1800px" }}>
    <div className="footer">

        <div className={styles.foot} >
            <Image loading="lazy"alt=""  src={logo} ></Image>
            <div className={styles.footicon}>
            <i className="fa-brands fa-facebook-f "></i>
            <i className="fa-brands fa-instagram "></i>
            <i className="fa-brands fa-facebook-messenger"></i>
            </div>
          
        </div>
        <div className={styles.foot} >
        <h4>الصفحه الرئيسيه</h4>

            <h6>الرئيسيه</h6>
            <h6>المنتجات</h6>
            <h6>السله</h6>
            <h6> <Link href="/aboutUs" > 
            عن الموقع
            </Link>

            </h6>
        </div>
        <div className={styles.foot} >
        
        <h4>  منتجات الموقع</h4>
            <h6>شاشات</h6>
            <h6>لابتوب</h6>
            <h6>موبيلات</h6>
            <h6>اجهزه منزليه </h6>
      
          
        </div>
        <div className={styles.foot} >
        
        <h4>  منتجات الموقع</h4>
            <h6>شاشات</h6>
            <h6>لابتوب</h6>
            <h6>موبيلات</h6>
            <h6>اجهزه منزليه </h6>
      
          
        </div>
        <div className={styles.foot} >
        
        <h4>  منتجات الموقع</h4>
            <h6>شاشات</h6>
            <h6>لابتوب</h6>
            <h6>موبيلات</h6>
            <h6>اجهزه منزليه </h6>
      
          
        </div>
        <div className={styles.foot } >
        
        <h4>اشتراك  </h4>
        <h6>اشترك الان لمزيد من العروض والخصومات  </h6>
        <div  className={`${styles.inputGroup} ${styles.inputfooter}`}>
    <input type="email" className={styles.inputfoot }  id="Email" name="Email" placeholder="اكتب هنا"   />
    <input className={styles.buttonsubmit} value="اشترك" type="submit" />
</div>
        
<div className={styles.Imagefooter} style={{width:"100%" , display:'flex' , gap:"1rem" ,  justifyContent:'center'}}>
<Image loading="lazy"alt=""src={footgoogle} width={150} ></Image>
<Image loading="lazy"alt=""src={footgoogle2} width={150} ></Image>

</div>
          
    </div>
    </div>
    </Container>
        
    </div>
    {/* <div className="ball-fixed"> 
    <div className="glowing"> 
     
     <span style={{'--i':1}}></span> 
      
     <span style={{'--i':2}}></span> 
      
     <span style={{'--i':3}}></span> 
      
   </div> 
   
  <div className="glowing"> 
     
    <span style={{'--i':1}}></span> 
     
    <span style={{'--i':2}}></span> 
     
    <span style={{'--i':3}}></span> 
     
  </div> 
   
  <div className="glowing"> 
     
    <span style={{'--i':1}}></span> 
     
    <span style={{'--i':2}}></span> 
     
    <span style={{'--i':3}}></span> 
     
  </div> 
   
  <div className="glowing"> 
     
    <span style={{'--i':1}}></span> 
     
    <span style={{'--i':2}}></span> 
     
    <span style={{'--i':3}}></span> 
     
  </div> 
 
 
  </div> */}

    <div className={styles.footertwo}>
    <div className={styles.footertwotext}>
            <h6>  جميع الحقوق محفوظه لدى  Deltawy@</h6>

            </div>
            <div className='footertwoicon-d'>
            <i className="fa-solid fa-map-location-dot"></i>
            <i className="fa-brands fa-cc-visa " ></i>
            <i className="fa-brands fa-cc-mastercard "></i>
            </div>
            
    </div>
    
    </>
  );
}

export default Footer;
 