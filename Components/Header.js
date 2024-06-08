'use client'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLorems } from "./redux/reducers/lorem/loremSlice";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import allleft2 from "../public/img/tv.png";
import allleft3 from "../public/img/50b2c98d-4694-4e36-a872-79812d24a365.png";
import allleft5 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";
import allleft6 from "../public/img/Group 41300.png";
import Link from 'next/link';
import axios from "axios";
import Head_sub from "../pages/head_sub"

function Header(props) {

  const dispatch = useDispatch();
  const Lorem1 = useSelector((state) => state.lorem.loremsData);
  useEffect(() => {
    dispatch(getLorems());
  }, []);
 
    const [hoveredId, setHoveredId] = useState(null);
    const handleMouseEnter = (id) => {
     setHoveredId(id);
   };


  return (
    <>
      <div className={styles.ruby_menu_demo_header}>

        <div className={styles.ruby_wrapper}>

          <ul className={styles.ruby_menu}>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega_blog}><Link  href="#">كل المنتجات</Link>
              <div className="z-header">
        <ul className={styles.ruby_menu_mega_blog_nav}>
          <li className={styles.ruby_active_menu_item}>
            <Link href="#">
              {Lorem1?.cats?.map((e, index) => (
                <div key={e.id} >
                  <li className="li-hero-hover" onMouseEnter={() => handleMouseEnter(e.id)}> 
                    <p>{e.name}</p>
                    <i className="fa-solid fa-caret-left"></i>
                  </li>
                </div>
              ))}
            </Link>
            <div style={{ height: '264.359px' }}>
               <Head_sub id={hoveredId} />  
            </div>
            <span className={styles.ruby_dropdown_toggle}></span>
          </li>
        </ul>
      </div>
              <span className={styles.ruby_dropdown_toggle}></span>
              </li>
            {/* __________________________________________________________ */}


            <li className={styles.ruby_menu_mega}><Link href="/store">الماركات</Link>
              <div style={{ height: '500px', zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row} style={{

                }}>
                  <div>
                    <Image loading="lazy"alt="" src={allleft3} style={{ maxWidth: '70%' }}></Image>
                    <ul>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>

                    </ul>
                  </div>
                  <div className={styles.ruby_col_2}>
                    <Image loading="lazy"alt="" src={allleft3} style={{ maxWidth: '70%' }}></Image>
                    <ul>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>

                    </ul>
                  </div>
                  <div className={styles.ruby_col_2}>
                    <Image loading="lazy"alt="" src={allleft3} style={{ maxWidth: '70%' }}></Image>
                    <ul>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>

                    </ul>
                  </div>
                  <div className={styles.ruby_col_2}>
                    <Image loading="lazy"alt="" src={allleft3} style={{ maxWidth: '70%' }}></Image>
                    <ul>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>

                    </ul>
                  </div>
                  <div className={styles.ruby_col_2}>
                    <Image loading="lazy"alt="" src={allleft3} style={{ maxWidth: '70%' }}></Image>
                    <ul>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>

                    </ul>
                  </div>
                  <div className={styles.ruby_col_2}>
                    <Image loading="lazy"alt="" src={allleft3} style={{ maxWidth: '70%' }}></Image>
                    <ul>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>
                      <li>toSHIBA</li>

                    </ul>
                  </div>
                </div>
              </div>
              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}

            <li className={styles.ruby_menu_mega}><Link href="/store">العروض</Link>
              <div style={{ height: '510px', zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}>
                  <div className={styles.ruby_col_3}>
                    <h3 style={{ color: "#107eec", fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}>عروض على الشاشات</h3>
                    <Image loading="lazy"alt="" src={allleft5} style={{ maxWidth: "100%" }} ></Image>
                    <Image loading="lazy"alt="" src={allleft6} style={{ maxWidth: "100%" }} ></Image>
                  </div>
                  <div className={`${styles["ruby_col_3"]} ${styles["hidden_md"]}`} >
                    <h3 style={{ color: "#107eec", fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}>عروض على الشاشات</h3>
                    <Image loading="lazy"alt="" src={allleft5} style={{ maxWidth: "100%" }} ></Image>
                    <Image loading="lazy"alt="" src={allleft6} style={{ maxWidth: "100%" }} ></Image>

                  </div>
                  <div className={styles.ruby_col_3}>
                    <h3 style={{ color: "#107eec", fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}>عروض على الشاشات</h3>
                    <Image loading="lazy"alt="" src={allleft5} style={{ maxWidth: "100%" }} ></Image>
                    <Image loading="lazy"alt="" src={allleft6} style={{ maxWidth: "100%" }} ></Image>
                  </div>
                  <div className={styles.ruby_col_3}>
                    <h3 style={{ color: "#107eec", fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}>عروض على الشاشات</h3>
                    <Image loading="lazy"alt="" src={allleft5} style={{ maxWidth: "100%" }} ></Image>
                    <Image loading="lazy"alt="" src={allleft6} style={{ maxWidth: "100%" }} ></Image>
                  </div>
                </div>
              </div>
              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega} ><Link href="/store">اجهزه كبيره</Link>
              <div style={{ height: '500px', padding: "20px", zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}  >

                  <div >
                    <h3 style={{ color: "#107eec", fontSize: "1.4rem", fontWeight: "bold" }}> شاشات سامسونج</h3>
                    <p>  شاشات lg </p>
                    <p> شاشات توشيبا</p>
                    <p> شاشات تورنيدو</p>
                    <p> شاشات سونى</p>
                    <p> شاشات سونى </p>
                    <p> شاشات سارى</p>
                    <p> Castle TV</p>
                    {/* <div className='allright2 'style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>

                   </div>
                   <div className='allright3' style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                   </div> */}
                  </div>
                  <div >
                    <Image loading="lazy"alt="" src={allleft2} style={{ position: "relative", width: '100%' }} ></Image>
                  </div>


                </div>
              </div>

              <span className={styles.ruby_dropdown_toggle}></span>
            </li>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega}><Link href="/store">اجهزه صغيره</Link>
              <div style={{ height: '500px', padding: "20px", zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}  >

                  <div >
                    <h3 style={{ color: "#107eec", fontSize: "1.4rem", fontWeight: "bold" }}> شاشات سامسونج</h3>
                    <p>  شاشات lg </p>
                    <p> شاشات توشيبا</p>
                    <p> شاشات تورنيدو</p>
                    <p> شاشات سونى</p>
                    <p> شاشات سونى </p>
                    <p> شاشات سارى</p>
                    <p> Castle TV</p>
                    {/* <div className='allright2 'style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>

                   </div>
                   <div className='allright3' style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                   </div> */}
                  </div>
                  <div >
                    <Image loading="lazy"alt="" src={allleft2} style={{ position: "relative", width: '100%' }} ></Image>
                  </div>


                </div>
              </div>

              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega}><Link href="/store">اجهزه صغيره</Link>
              <div style={{ height: '500px', padding: "20px", zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}  >

                  <div >
                    <h3 style={{ color: "#107eec", fontSize: "1.4rem", fontWeight: "bold" }}> شاشات سامسونج</h3>
                    <p>  شاشات lg </p>
                    <p> شاشات توشيبا</p>
                    <p> شاشات تورنيدو</p>
                    <p> شاشات سونى</p>
                    <p> شاشات سونى </p>
                    <p> شاشات سارى</p>
                    <p> Castle TV</p>
                    {/* <div className='allright2 'style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>

                   </div>
                   <div className='allright3' style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                   </div> */}
                  </div>
                  <div >
                    <Image loading="lazy"alt="" src={allleft2} style={{ position: "relative", width: '100%' }} ></Image>
                  </div>


                </div>
              </div>

              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega}><Link href="/store">اجهزه المطبخ</Link>
              <div style={{ height: '500px', padding: "20px", zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}  >

                  <div >
                    <h3 style={{ color: "#107eec", fontSize: "1.4rem", fontWeight: "bold" }}> شاشات سامسونج</h3>
                    <p>  شاشات lg </p>
                    <p> شاشات توشيبا</p>
                    <p> شاشات تورنيدو</p>
                    <p> شاشات سونى</p>
                    <p> شاشات سونى </p>
                    <p> شاشات سارى</p>
                    <p> Castle TV</p>
                    {/* <div className='allright2 'style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>

                   </div>
                   <div className='allright3' style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                   </div> */}
                  </div>
                  <div >
                    <Image loading="lazy"alt="" src={allleft2} style={{ position: "relative", width: '100%' }} ></Image>
                  </div>


                </div>
              </div>

              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega}><Link href="/store">الكترونيات</Link>
              <div style={{ height: '500px', padding: "20px", zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}  >

                  <div >
                    <h3 style={{ color: "#107eec", fontSize: "1.4rem", fontWeight: "bold" }}> شاشات سامسونج</h3>
                    <p>  شاشات lg </p>
                    <p> شاشات توشيبا</p>
                    <p> شاشات تورنيدو</p>
                    <p> شاشات سونى</p>
                    <p> شاشات سونى </p>
                    <p> شاشات سارى</p>
                    <p> Castle TV</p>
                    {/* <div className='allright2 'style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>

                   </div>
                   <div className='allright3' style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                   </div> */}
                  </div>
                  <div >
                    <Image loading="lazy"alt="" src={allleft2} style={{ position: "relative", width: '100%' }} ></Image>
                  </div>


                </div>
              </div>

              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega}><Link href="/store">كمبيوتر</Link>
              <div style={{ height: '500px', padding: "20px", zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}  >

                  <div >
                    <h3 style={{ color: "#107eec", fontSize: "1.4rem", fontWeight: "bold" }}> شاشات سامسونج</h3>
                    <p>  شاشات lg </p>
                    <p> شاشات توشيبا</p>
                    <p> شاشات تورنيدو</p>
                    <p> شاشات سونى</p>
                    <p> شاشات سونى </p>
                    <p> شاشات سارى</p>
                    <p> Castle TV</p>

                  </div>
                  <div >
                    <Image loading="lazy"alt="" src={allleft2} style={{ position: "relative", width: '100%' }}   ></Image>
                  </div>


                </div>
              </div>

              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}
            <li className={styles.ruby_menu_mega}><Link href="/store">الصحه والجمال</Link>
              <div style={{ height: '500px', padding: "20px", zIndex: "999999999999999999" }}>
                <div className={styles.ruby_row}  >

                  <div >
                    <h3 style={{ color: "#107eec", fontSize: "1.4rem", fontWeight: "bold" }}> شاشات سامسونج</h3>
                    <p>  شاشات lg </p>
                    <p> شاشات توشيبا</p>
                    <p> شاشات تورنيدو</p>
                    <p> شاشات سونى</p>
                    <p> شاشات سونى </p>
                    <p> شاشات سارى</p>
                    <p> Castle TV</p>
                    {/* <div className='allright2 'style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>اكسسوارات التلفزيون</h3>

                   </div>
                   <div className='allright3' style={{width:"7%" }}>
                     <h3 style={{color:"#107eec", fontSize:"1.2rem", fontWeight:"bold"}}>رسيفر</h3>
                   </div> */}
                  </div>
                  <div >
                    <Image loading="lazy"alt="" src={allleft2} style={{ position: "relative", width: '100%' }} ></Image>
                  </div>


                </div>
              </div>

              <span className={styles.ruby_dropdown_toggle}></span></li>
            {/* __________________________________________________________ */}


          </ul>
        </div>


      </div>
    </>
  )
}

export default Header;
