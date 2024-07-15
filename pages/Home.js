import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import carsol from "../public/img/carsol.png";
import leftcarsol from "../public/img/app.png";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import bannar1 from "../public/img/2374.png";
import bannar2 from "../public/img/app.png";
import Image from "next/image";
//  import { Image } from "primereact/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import {
  getLorems,
  getLastproduct,
  getBanners,
  getMostViewed,
  getClients,
} from "../Components/redux/reducers/lorem/loremSlice";

import LazyLoad from "react-lazy-load";

import Head_sub from "../pages/head_sub";

import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  const dispatch = useDispatch();
  const Lorem2 = useSelector((state) => state.lorem.loremsData);
  const lastProductData = useSelector((state) => state.lorem.lastProductData);
  const getBannersData = useSelector((state) => state.lorem.getBannersData);
  const getMostViewedData = useSelector(
    (state) => state.lorem.getMostViewedData
  );
  const getClientsData = useSelector((state) => state.lorem.getClientsData);
  useEffect(() => {
    dispatch(getLorems());
    dispatch(getLastproduct());
    dispatch(getBanners());
    dispatch(getMostViewed());
    dispatch(getClients());
  }, []);
  SwiperCore.use([Autoplay]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
    SwiperCore.use([Navigation]);
  }, []);
  const [selectedCatId, setSelectedCatId] = useState(null);

 

  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };
  return (
    <Container style={{ maxWidth: "1800px" }}>
      <Row className="home-carosel">
        <Col md={3}>
          <div className="flex-home-row">
            <div className="back-home">
              <h5>
                Everyday Fresh & <br />
                Clean with Our Products
              </h5>
              <button className="btn-donate  ">Donate now</button>
            </div>
            <div className="back-home-2 ">
              <h3>
                Everyday Fresh &
                <br />
                Clean with Our Products
              </h3>
              <button className="btn-donate  ">Donate now</button>
            </div>
          </div>
        </Col>
        <Col md={7} className="position-relative">
          <Carousel
            className={styles.Carousel}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={carsol}
                height={400}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={carsol}
                height={400}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                height={400}
                className="d-block w-100"
                src={carsol}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={2}>
          <ul className="menu">
            {Lorem2?.cats?.map((e) => {
              return (
                <li key={e.id}>
                  <div className="a">
                    <div
                      className="part"
                      
                      onMouseEnter={() => handleMouseEnter(e.id)}
                    >
                      <p>{e.name}</p>
                      <LazyLoadImage
                        loading="lazy"
                        src={`/api/images?id=${e.image}`}
                        alt={e.name}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>

                  <div className="megadrop">
                    <div className="col">
                      <Head_sub id={hoveredId} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>

      <div className={styles.home_main}>
        <div className={styles.about}>
          <Swiper
            breakpoints={{
              100: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              999: {
                slidesPerView: 5,
                spaceBetween: 20,
              },

              1100: {
                slidesPerView: 9,
                spaceBetween: 20,
              },
              4100: {
                slidesPerView: 9,
                spaceBetween: 20,
              },
            }}
            loop
            autoplay
            spaceBetween={20}
            slidesPerView={9}
            navigation
          >
            {Lorem2?.cats?.map((e) => (
              <SwiperSlide key={e.id}>
                <Link
                  href={`/store/id/${e.id}`}
                  as={`/store/${e.id}/${encodeURIComponent(
                    e.name.replace(/\s+/g, "-")
                  )}`}
                >
                  <div className="card-cat">
                    <LazyLoadImage
                      loading="lazy"
                      src={`/api/images?id=${e.image}`}
                      alt={e.name}
                      width={100}
                      height={100}
                    />
                    <p>{e.name}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ==============gallary============= */}
        <div className={styles.gal}>
          <div className={styles.Gallarytext}>
            <h2>وصل حديثا</h2>
            <h2>شاهد الكل</h2>
          </div>
          <Swiper
            breakpoints={{
              100: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              999: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1100: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            loop
            autoplay
            spaceBetween={20}
            slidesPerView={5}
            navigation
          >
            {lastProductData?.products?.map((e) => (
              <SwiperSlide key={e.id}>
                <Link
                  href={`/product/id/${e.id}`}
                  as={`/product/${e.id}/${encodeURIComponent(
                    e.name.replace(/\s+/g, "-")
                  )}`}
                >
                  <div className="flex-product" >
                    <LazyLoadImage
                      loading="lazy"
                      src={`/api/images?id=${
                        e.imgs.imgs.find((img) => img.main)?.small
                      }`}
                      alt={e.name}
                      width={100}
                      height={100}
                    />
                    <h5>{e.name.substring(0, 40) + "...."}</h5>
                    <div className="flex-product-star">
                      <p>علامته التجاريه</p>
                      <div className="iconaboutcp">
                        <i className="fa-solid fa-star iconpartt"></i>
                        <i className="fa-solid fa-star iconpartt"></i>
                        <i className="fa-solid fa-star iconpartt"></i>
                        <i className="fa-regular fa-star iconpartt"></i>
                        <i className="fa-regular fa-star iconpartt"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* ==============coffe 2============= */}
        <div className="BannersData">
          {getBannersData?.map((e) => (
            <div key={e.id}>
              <div className={styles.coffetwo}>
                <LazyLoadImage
                  loading="lazy"
                  src={`/api/images?id=${e.verticalImage}`}
                  alt={e.name}
                  width={67600}
                  height={67600}
                  className="img-verticalImage"
                  data-aos="zoom-in"
                />
              </div>
              {/* ==============abouthree============= */}
              <Row>
                <Col md={3}>
                  <LazyLoadImage
                    loading="lazy"
                    src={`/api/images?id=${e.horizontalImage}`}
                    alt={e.name}
                    width={67600}
                    height={67600}
                    className="img-horizontalImage"
                    data-aos="zoom-in"
                  />
                </Col>
                <Col md={9}>
                  <div className="taps-cats">
                    {e.cats.map((cat) => (
                      <div
                        className="taps-cats-Banners"
                        key={cat.id}
                        onClick={() => setSelectedCatId(cat.id)}
                        data-aos="zoom-in"
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>

                  <div className="aboutcp" data-aos="zoom-in">
                    {e.products
                      .filter(
                        (product) =>
                          selectedCatId === null ||
                          product.catId === selectedCatId
                      )
                      .map((product) => (
                        <Link
                          href={`/product/id/${product.id}`}
                          as={`/product/${product.id}/${encodeURIComponent(
                            product.name.replace(/\s+/g, "-")
                          )}`}
                          className="flex-product"
                          
                          key={product.catId}
                        >
                          <LazyLoadImage
                            loading="lazy"
                            src={`/api/images?id=${product.image}`}
                            alt={e.name}
                            width={100}
                            height={100}
                            className=" "
                          />
                          <h5>{product.name}</h5>
                          <div className="flex-product-star">
                            <p>علامته التجاريه</p>
                            <div className="iconaboutcp">
                              <i className="fa-solid fa-star iconpartt"></i>
                              <i className="fa-solid fa-star iconpartt"></i>
                              <i className="fa-solid fa-star iconpartt"></i>
                              <i className="fa-regular fa-star iconpartt"></i>
                              <i className="fa-regular fa-star iconpartt"></i>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>

        {/* =================================== */}
        <div className={styles.gal}>
          <div className={styles.Gallarytext}>
            <h2> الاكثر مشاهده</h2>
          </div>
          <Swiper
            breakpoints={{
              100: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              999: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1100: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            loop
            autoplay
            spaceBetween={20}
            slidesPerView={5}
            navigation
          >
            {getMostViewedData?.cats?.map((e) => (
              <SwiperSlide key={e.id} className="getMostViewedData">
                <Link
                  href={`/product/id/${e.id}`}
                  as={`/product/${e.id}/${encodeURIComponent(
                    e.name.replace(/\s+/g, "-")
                  )}`}
                >
                  <div className="flex-product" >
                    <div className="flex-product-img" >
                      <LazyLoadImage
                        loading="lazy"
                        src={`/api/images?id=${e.image}`}
                        alt={e.name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h5>{e.name}</h5>
                    <div className="flex-product-star">
                      <p>علامته التجاريه</p>
                      <div className="iconaboutcp">
                        <i className="fa-solid fa-star iconpartt"></i>
                        <i className="fa-solid fa-star iconpartt"></i>
                        <i className="fa-solid fa-star iconpartt"></i>
                        <i className="fa-regular fa-star iconpartt"></i>
                        <i className="fa-regular fa-star iconpartt"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* =================================== */}

        {/* ================marks============ */}
        <div className={styles.marks} >
          <div className={styles.markstext} >
            <h1>اشهر الماركات</h1>
          </div>
          <Swiper
            loop
            autoplay
            spaceBetween={20}
            breakpoints={{
              100: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              999: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1100: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {getClientsData?.data?.map((e) => (
              <SwiperSlide key={e.id}>
                <Link href={`/store/id=${e.id}`}>
                  <div className="card-cat">
                    <LazyLoadImage
                      loading="lazy"
                      src={`/api/images?id=${e.image}`}
                      alt={e.name}
                      width={100}
                      height={100}
                    />
                    <p>{e.name}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ==============banner============= */}
        <div className={styles.bannar}>
          <Image
            loading="lazy"
            alt=""
            src={bannar1}
            style={{ maxWidth: "40%", height: "100%" }}
            
          ></Image>

          <div className={styles.bannarleft} >
            <h2 style={{ fontSize: "bold" }}>حمل التطبيق الان</h2>
            <h6>واحصل على كل ما تحتاجه متى تحتاجه</h6>
            <div className={styles.bannerapp} >
              <Link href="#">
                <Image
                  loading="lazy"
                  alt=""
                  src={bannar2}
                  className="w-100 h-100"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        {/* ==============banner============= */}
      </div>
    </Container>
  );
}

export default Home;
