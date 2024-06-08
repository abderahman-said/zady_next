import React ,{ useState ,useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from "react-redux";
import { getLorems, getSubCategories, searchProducts } from "./redux/reducers/lorem/loremSlice";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../public/img/logo.png";
import menu from "../public/img/icons8-menu-bar-80.png";
 
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useRouter } from "next/router";
import { Logout } from './redux/reducers/AuthSlice';



function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults , setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const loremsData = useSelector((state) => state.lorem.loremsData);
     const getSubCategoriesData = useSelector((state) => state.lorem.getSubCategoriesData);  
     const getUserOrderDetailsData = useSelector((state) => state.lorem.getUserOrderDetailsData);
  
 
  const { CartsArr } = useSelector((state) => state.ShopSlice);
  const [scrollY, setScrollY] = useState(0);
   const [userId , setUserId] = useState(false)
  useEffect(() => {
    window.localStorage.getItem('ib_ID') != 0 ? setUserId(true) : setUserId(false)
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },);  

  const isFixed = scrollY > 100;
  const router = useRouter();
  // const Log =
  //     !userId ? (
  //   <Link href={"/auth"}  className={router.pathname == "/auth" ? styles.active : styles.link2} >
  //        تسجيل الدخول
  //   </Link>
  // ) : (
  //   <Link href={"/auth"}  onClick={() => {
  //     dispatch(Logout());
  //     window.localStorage.setItem('ib_ID' , 0)
  //   }}   className={router.pathname == "/auth" ? styles.active : styles.link2} >
  //       تسجيل الخروج
  //   </Link>
  // );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(searchProducts(searchTerm));
  
        setSearchResults(response.payload);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    dispatch(getLorems());
    dispatch(getSubCategories({ id: props.id }));
    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, dispatch   , props.id]);

  const [localStorageData, setLocalStorageData] = useState([]);

  const [cart, setCart] = useState(0);

  useEffect(() => {
    const localStorageData = window.localStorage.getItem('zayadyStorage');
    const userId = window.localStorage.getItem('ib_ID');
    setUserId(userId);
    
    setLocalStorageData(JSON.parse(localStorageData));
  }, []);
  


  useEffect(() => {
    const handelGetOrder = getUserOrderDetailsData?.lines || [];
    const AllData = getUserOrderDetailsData ? [...localStorageData, ...handelGetOrder] : [];
    
    const newCart = userId ? AllData.length : (CartsArr?.lines.length || 0);
    setCart(newCart);
  }, [localStorageData, getUserOrderDetailsData]);
  
 
 
  // const cart = userId ? AllData.length : CartsArr?.lines.length;

console.log("CartsArr" , localStorageData.length)



  return (
    <>
  <div className={`fixed-nav-div ${isFixed ? 'fixed-nav' : ''}`}>

    
<div className={styles.navbar}  >


       
      <Container  style={{maxWidth: "1800px" }} className={styles.container}>
         <div className='nav-flex-between'>
         <Link href='/Home'><Image loading="lazy"alt="" src={logo} width={130} height={60}></Image></Link> 

         <div className={styles.group}>
          <div   className={styles.icon_g}>
      <i className="fa-solid fa-magnifying-glass "></i>
          </div>
      <input
        placeholder="بحث"
        type="search"
        className={styles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='result-search'>
        {searchResults.products?.slice(0, 5).map((result) => (
            <p className='flex-search-gap' key={result.id}>
            <Link   >
                 <LazyLoadImage loading="lazy"src={`/api/images?id=${result.mainImage}`} alt={result.name} width={50} height={50} />
                 {result.name}
            </Link>
            </p>
        ))}
      </div>
    </div>

       <div className="listmenu">

            <Link href='/sala' className={styles.navleft1} >
              <h6 > السله</h6>
              <div className='sala'>
              <i className="fa-solid fa-cart-shopping"></i>
              
                 <div className='sala-span' ><span>{cart}</span> </div>  
              </div> 
            </Link>
            <div  className={styles.navleft1}> 
            {
              !userId ? (
                <Link href={"/auth"}  className={router.pathname == "/auth" ? styles.active : styles.link2} >
                    تسجيل الدخول
                </Link>
              ) : (
                <Link href={"/auth"}  onClick={() => {
                  dispatch(Logout());
                }}   className={router.pathname == "/auth" ? styles.active : styles.link2} >
                    تسجيل الخروج
                </Link>)
            }
              <div className='sala'>
            <i className="fa-regular fa-user"  ></i>
            </div> 
      </div> 
           
         </div> 
             
             
         </div> 
      
     </Container>
    </div> 

    
 
    <div className={styles.navbuttom}>
        <div  onClick={handleShow} className={styles.m}>
        <Image loading="lazy"alt="" src={menu} width={25} height={25}></Image>
      </div>
      <div className={styles.footerIconButtom}><i className="fa-solid fa-cart-shopping"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-regular fa-heart"></i></div>
      <div className={styles.footerIconButtom}><i className="fa-regular fa-user"></i></div>
      </div>
      
      </div>








      <Offcanvas show={show} onHide={handleClose} {...props} className="nav-mob" >
        <Offcanvas.Header closeButton >
            <Image loading="lazy"alt="" src={logo} width={130} height={60}></Image> 
        </Offcanvas.Header>
         <Offcanvas.Body>

 
         <ul className="ul"> 
        { 
  loremsData?.cats?.map((e) => { 
    return ( 
      <li key={e.id}>
            <p>{e.name}</p>
            <LazyLoadImage loading="lazy" src={`/api/images?id=${e.image}`} alt={e.name} width={30} height={30} />
      </li>
    );
  }) 
} 
</ul>
      
        </Offcanvas.Body>
        
      </Offcanvas>
      
    </>
  );
}

function Example() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Example;


