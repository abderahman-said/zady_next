"use client";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRef } from "react";
import Imagegal1 from "../../../public/img/security.png";
import Imagegal2 from "../../../public/img/security2.png";
// import Image from 'next/image';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-bootstrap/Modal";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import { Image } from "primereact/image";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "swiper/css";
import { useRouter } from "next/router";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "../../../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import ImageViewer from "react-simple-image-viewer";
import Aos from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  getUserOrderDetails,
} from "../../../Components/redux/reducers/lorem/loremSlice";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper";
import { Toast } from "primereact/toast";
import { addToCart } from "../../../Components/redux/reducers/ShopSlice";

const about = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const router = useRouter();
  const productId = router.query.id;

  const [selectedImageId, setSelectedImageId] = useState(null);

  const productData = useSelector((state) => state.lorem.getProductDetailsData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(getProductDetails({ productId }));
    }
    Aos.init({ duration: 1000 });
    SwiperCore.use([Navigation]);
  }, [productId, dispatch]);

  const [value2, setValue2] = useState(1);

  async function handleAddToCart(catId, productId, productName, productImage) {
    showSuccess();
    const localStorageData = window.localStorage.getItem("zayadyStorage");
    const finishLocalStorage = localStorageData
      ? JSON.parse(localStorageData)
      : [];

    const newData = {
      productId: productId,
      name: productName,
      image: productImage,
      code: "QXA930B",
      count: 1,
    };

    // تحديث localStorage
    const updatedLocalStorageData = [...finishLocalStorage, newData];
    window.localStorage.setItem(
      "zayadyStorage",
      JSON.stringify(updatedLocalStorageData)
    );

    // تحديث عداد السلة في الواجهة
    window.localStorage.setItem("cartCount", updatedLocalStorageData.length);

    // الحصول على userId من localStorage
    const userId = window.localStorage.getItem("ib_ID");

    if (userId) {
      try {
        await dispatch(getUserOrderDetails({ id: userId }));
        await dispatch(addToCart({ UserId: userId, productId, count: 1 })).then(
          () => {
            dispatch(getCart());
            showSuccess();
          }
        );
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  }
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "تم",
      detail: "تم اضافة المنتج بنجاح",
    });
  };

  if (!productData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "55.7vh",
        }}
      >
        <div className={styles.ui_abstergo}>
          <div className={styles.abstergo_loader}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.ui_text}>
            Loading
            <div className={styles.ui_dot}></div>
            <div className={styles.ui_dot}></div>
            <div className={styles.ui_dot}></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Container style={{ maxWidth: "1800px" }}>
      <Row className={`${styles.imageGallery} ${styles.imageGallery_padding}`}>
        <Col md={7} className={styles.imageGallery_left}>
          <div className={styles.imageGallery_left_button12}>
            <div className={styles.sala_contantp}>
              <div className="heart-card">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="productData_name">
                {productData && (
                  <>
                    <h5>{productData?.catName}</h5>
                    <h2>{productData?.name}</h2>

                    <p>{productData?.shortDescription}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.imageGallery_left_button12}>
            <div className="">
              <label htmlFor="minmax-buttons" className="count">
                <h5> الكميه :</h5>
              </label>
              <InputNumber
                inputId="horizontal-buttons"
                value={value2}
                onValueChange={(e) => setValue2(e.value)}
                showButtons
                buttonLayout="horizontal"
                step={1}
                min={1}
                decrementButtonClassName="p-button-danger"
                incrementButtonClassName="p-button-success"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
              />
            </div>
            <button
              className="add-cart"
              onClick={() =>
                handleAddToCart(
                  productData.catId,
                  productData.id,
                  productData.name,
                  productData.mainImage
                )
              }
            >
              <i className="fa-solid fa-cart-shopping"></i>
              اضف الى السله
            </button>
            {/* <button className={styles.imageGallery_left_button2}> 
              اضافه الى المقارنه       
                     </button> */}
          </div>
          <div className="imageGallery_left_button12">
            <div
              style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              <Image
                loading="lazy"
                alt=""
                src={Imagegal1}
                style={{ height: " fit-content" }}
              ></Image>
              <div>
                <h6 style={{ color: "#0382b1" }}>الضمان</h6>
                <p> سنوات3</p>
              </div>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              <Image
                loading="lazy"
                alt=""
                src={Imagegal2}
                style={{ height: " fit-content" }}
              ></Image>
              <div>
                <h6 style={{ color: "#0382b1" }}>الدفع الامن </h6>
                <p> الدفع عند الاستلام</p>
              </div>
            </div>
          </div>
        </Col>

        <Col md={4} className="img_left  ">
          {productData && (
            <>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {productData?.imgs?.imgs?.map((image, index) => (
                  <div key={index}>
                    <SwiperSlide>
                      <Image
                        loading="lazy"
                        src={`/api/images?id=${image.medium}`}
                        zoomSrc={`/api/images?id=${image.large}`}
                        alt="Image"
                        width="auto"
                        height="auto"
                        preview
                      />
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {productData?.imgs?.imgs?.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      border:
                        selectedImageId === image.medium
                          ? "1px solid #ccc"
                          : "",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <SwiperSlide>
                      <Image
                        loading="lazy"
                        alt=""
                        style={{
                          boxShadow: "0 0 50px #f3f2f2",
                          borderRadius: "1.4pc",
                        }}
                        src={`/api/images?id=${image.small}`}
                        width={90}
                        height={80}
                      />
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </>
          )}
        </Col>
      </Row>

      {/* ===================== */}
      <div style={{ direction: "rtl" }} className={styles.imageGallery_padding}>
        <div>
          <h2 style={{ color: "#0382b1" }}>تفاصيل المنتج</h2>
          <div style={{ paddingTop: "10px" }}>
            {productData && (
              <p style={{ color: "rgb(137 137 137)" }}>
                {productData.description}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* ========================== */}
      <section style={{ padding: "20px 80px" }} className="taps-products">
        <div className="allabouttwo-fqu">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            fill
            className="mb-3"
          >
            <Tab eventKey="profile" title="المزيد من المعلومات">
              <div className="m-0">
                {productData && (
                  <>
                    {productData.specs?.map((mat, index) => (
                      <div key={index} style={{ padding: ".5rem" }}>
                        <h6 className="product_details_h6">
                          {mat.name} : <p> {mat.val} </p>{" "}
                        </h6>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title=" مراجعات">
              <div style={{ direction: "rtl", gap: "2rem" }}>
                {/* ======= */}
                <div className={styles.Imagegallary_comment}>
                  <div>
                    {/* ======= */}
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div>
                        <i
                          className="fa-solid fa-circle-user"
                          style={{ color: "#0790ec", fontSize: "1.5rem" }}
                        ></i>
                      </div>
                      <div className="flex-user">
                        <h6>mohamed rady</h6>
                        <div className="star-products">
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                        </div>
                        <h6> 5 سبتمبر 2015</h6>

                        <h5>
                          اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى
                          فى وقت قصير
                        </h5>
                      </div>
                    </div>
                    {/* ====== */}
                  </div>
                  {/* ========== */}
                  <div>
                    {/* ======= */}
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div>
                        <i
                          className="fa-solid fa-circle-user"
                          style={{ color: "#0790ec", fontSize: "1.5rem" }}
                        ></i>
                      </div>
                      <div className="flex-user">
                        <h6>mohamed rady</h6>
                        <div className="star-products">
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                        </div>
                        <h6> 5 سبتمبر 2015</h6>

                        <h5>
                          اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى
                          فى وقت قصير
                        </h5>
                      </div>
                    </div>
                    {/* ====== */}
                  </div>
                  {/* ========== */}
                </div>
                <hr style={{ margin: "1rem 0 0 0 " }}></hr>
                {/* ================= */}
                <div
                  className={styles.Imagegallary_comment}
                  style={{ paddingTop: "2rem" }}
                >
                  <div>
                    {/* ======= */}
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div>
                        <i
                          className="fa-solid fa-circle-user"
                          style={{ color: "#0790ec", fontSize: "1.5rem" }}
                        ></i>
                      </div>
                      <div className="flex-user">
                        <h6>mohamed rady</h6>
                        <div className="star-products">
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                        </div>
                        <h6> 5 سبتمبر 2015</h6>

                        <h5>
                          اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى
                          فى وقت قصير
                        </h5>
                      </div>
                    </div>
                    {/* ====== */}
                  </div>
                  {/* ========== */}
                  <div>
                    {/* ======= */}
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div>
                        <i
                          className="fa-solid fa-circle-user"
                          style={{ color: "#0790ec", fontSize: "1.5rem" }}
                        ></i>
                      </div>
                      <div className="flex-user">
                        <h6>mohamed rady</h6>
                        <div className="star-products">
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-solid fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                          <i className="fa-regular fa-star "></i>
                        </div>
                        <h6> 5 سبتمبر 2015</h6>

                        <h5>
                          اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى
                          فى وقت قصير
                        </h5>
                      </div>
                    </div>
                    {/* ====== */}
                  </div>
                  {/* ========== */}
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </section>
      {/* ========================== */}
      <div style={{ direction: "rtl" }} className={styles.imageGallery_padding}>
        <textarea
          rows="4"
          cols="50"
          className={styles.textarea}
          placeholder="   اضف تعليقك..."
          data-aos="fade-up"
        ></textarea>
      </div>
      {/* ============ */}
      <div
        className={styles.gal}
        data-aos="fade-up"
        style={{ padding: "60px 0 60px 0" }}
      >
        <Swiper
          breakpoints={{
            100: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          loop={"true"}
          autoplay
          spaceBetween={30}
          slidesPerView={5}
        >
          {productData && (
            <>
              {productData.matched?.map((mat, index) => (
                <SwiperSlide key={mat.id} className="card-cat-productData">
                  <Link
                    href={`/product/id/${mat.id}`}
                    as={`/product/${mat.id}/${encodeURIComponent(
                      mat.name.replace(/\s+/g, "-")
                    )}`}
                  >
                    <div key={index} className="card-cat">
                      <LazyLoadImage
                        loading="lazy"
                        src={`/api/images?id=${mat.image}`}
                        alt={mat.name}
                        width={190}
                        height={170}
                      />
                      <h6>{mat.name.slice(0, 30) + "..."}</h6>
                      <p>{mat.catName}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
      {/* ======= */}
      <Toast ref={toast} />
    </Container>
  );
};

export default about;
