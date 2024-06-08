import styles from '../styles/Home.module.css';
import React, { useRef, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import salla from "../public/img/shopping-cart.png"
import { useEffect } from 'react';
import { getUserOrderDetails } from '../Components/redux/reducers/lorem/loremSlice';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Container, Row } from 'react-bootstrap';
import { finishCart } from '../Components/redux/reducers/ShopSlice';
import { useRouter } from 'next/navigation';
import { Toast } from 'primereact/toast';

function sala() {
  const [localStorageData, setLocalStorageData] = useState([])
  const [userId, setUserId] = useState([])
  const router = useRouter()
  const getUserOrderDetailsData = useSelector((state) => state.lorem.getUserOrderDetailsData);
  // const finishCart = useSelector((state) => state.lorem.finishCartData);
  const id = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID");
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageData = window.localStorage.getItem('zayadyStorage')
    setUserId(window.localStorage.getItem('ib_ID'))
    setLocalStorageData(JSON.parse(localStorageData))
  }, [])

  useEffect(() => {
    if (userId !== 0) {
      dispatch(getUserOrderDetails({ id: window.localStorage.getItem('ib_ID') }));
      Aos.init({ duration: 1000 });
    } else {
      null
    }
  }, [dispatch]);

  useEffect(() => {
    if (!getUserOrderDetails) {
      dispatch(getUserOrderDetails(window.localStorage.getItem('ib_ID')));
    }

  }, [dispatch]);

 
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'تم', detail: 'تم طلب المننج بنجاح' });
  }
 
  const handleDelete = (productId) => {
    const updatedData = localStorageData.filter(item => item.productId !== productId);
    window.localStorage.setItem('zayadyStorage', JSON.stringify(updatedData));
    setLocalStorageData(updatedData);
  };

 
  

  
  const FinishCart = () => {
    if (userId == 0) {
      router.push('/auth')
    } else {
      dispatch(finishCart(userId))
        .unwrap()
        .then(() => {
          dispatch(getUserOrderDetails(userId));
          showSuccess();
        })
        .catch((rejectedValueOrSerializedError) => {
          console.log(rejectedValueOrSerializedError);
        });
    }
  };
  // const handelGetOrder = getUserOrderDetailsData.lines == undefined ? '' : [...getUserOrderDetailsData.lines]
  const handelGetOrder = getUserOrderDetailsData?.lines || [];
  const AllData = getUserOrderDetailsData ? [...localStorageData, ...handelGetOrder] : [];
  const Data = userId !== 0 ?
    getUserOrderDetailsData &&
    AllData?.map((ele, idx) => {
      return (
        <div key={idx} className="item_product" >
          <div className="item_info_container">
            <div className="Card_image">
              <LazyLoadImage
                src={`/api/images?id=${ele.image}`}
                alt={ele.productName}
                width={150}
                height={150}
              />
            </div>
            <div className="item_info">
              <p>{ele.name}</p>
            </div>
          </div>
          <div className="delete_product" onClick={() => handleDelete(ele.productId)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      );
    })
    :
    localStorageData.map((ele ,idx ) => {
      return (
        <div key={ele.productId} className="item_product" >
          <div className="item_info_container">
            <div className="Card_image">
              <LazyLoadImage
                src={`/api/images?id=${ele.image}`}
                alt={ele.name}
                width={150}
                height={150}
              />
            </div>
            <div className="item_info">
              <p>{ele.name}</p>
            </div>
          </div>
          <div className="delete_product" onClick={() => handleDelete(ele.productId)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      )
    });

  const TotalPrice = getUserOrderDetails && (
    <div className="TotlaPrice">
      <h3>الملخص</h3>
      <div>
        <p>السعر ( {getUserOrderDetails.length} عناصر )</p>
        <p>0 ج</p>
      </div>
      <div>
        <p>الشحن</p>
        <p>15 ج</p>
      </div>
      <div>
        <p>السعر الكلي</p>
        <p>0</p>
      </div>
    </div>
  );
  return (
    <Container dir='rtl'>
      <Toast ref={toast} />
      {Data && Data.length > 0 ? (
        <div className='sala-data'>
          <div>
            <div className='h2-sala'>
              <div id='svgsala' >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>
              </div>
              السلة
            </div>
            <Row>

              <Col md={7} >
                <div className="item_info_gap">
                  {Data}
                </div>
              </Col>
              <Col md={5} >

                {TotalPrice}
                <button className="btn-save"
                  onClick={() => FinishCart()}
                >
                  حفظ
                </button>
              </Col>
            </Row>

          </div>
        </div>
      ) : (
        <div className='salaa'>
          <div className='h2-sala'>
            <div id='svgsala' >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg>
            </div>
            السلة
          </div>
          <div>
            <Image
              loading="lazy"
              alt=""
              src={salla}
              style={{ width: '500px', height: '100%' }}
              className={styles.salaimg}
            />
          </div>
          <p style={{ color: "#ccc" }}>لاتوجد منتجات في السلة حاليًا. تسوق الآن وأضف المنتجات.</p>
          <div style={{ padding: '20px 0 30px 0' }}>
            <button className={styles.salebtn}>
              <Link href="/Home">
                تسوق الآن
              </Link>
            </button>
          </div>
        </div>
      )}


    </Container>
  )
}
export default sala       










