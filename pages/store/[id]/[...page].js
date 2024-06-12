'use client'
import 'swiper/css';
import Aos from "aos";
import "aos/dist/aos.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";                   
import "primeicons/primeicons.css";                                 

import Accordion from 'react-bootstrap/Accordion';
import styles from '../../../styles/Home.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Toast } from 'primereact/toast';
import React, { useState, useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { addToCart, getFullCategory, getUserOrderDetails } from "../../../Components/redux/reducers/lorem/loremSlice.js"
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'primereact/image';
import { InputNumber } from 'primereact/inputnumber';
import axios from 'axios';
import { Paginator } from 'primereact/paginator';
import Hero_store from "../../hero_store.js"

function LeftTabsExample() {
  const [searchValue, setSearchValue] = useState('');
  const [search_Value, setSearch_Value] = useState("");

  const [specs, setSpecs] = useState([]);
  const [selectedSpecs, setSelectedSpecs] = useState([]);
  // const [show, setShow] = useState(false);
  //  const router = useRouter();
  //   const productId = router.query.id;
  const router = useRouter();
  const prod = router.query.id;
  const productId = parseInt(prod, 10);
  // const [show, setShow] = useState(false);


  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ id: null, name: null });
  const [items, setItems] = useState([])

  const handleShow = (productId, productName, imageId, catIdID) => {
    setSelectedProduct({ id: productId, name: productName, image: imageId, catId: catIdID });
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };




  const handleAddSpec = (id, name) => {
    const existingSpec = selectedSpecs.find((spec) => spec.id === id);

    if (!existingSpec) {
      setSelectedSpecs([...selectedSpecs, { id, name }]);
    } else {
      const updatedSpecs = selectedSpecs.filter((spec) => spec.id !== id);
      setSelectedSpecs(updatedSpecs);
    }

    const existingSpecInAllSpecs = specs.find((spec) => spec.id === id);
    if (!existingSpecInAllSpecs && !existingSpec) {
      setSpecs([...specs, { id, name }]);
    } else if (!existingSpec) {
      const updatedAllSpecs = specs.filter((spec) => spec.id !== id);
      setSpecs(updatedAllSpecs);
    }

    if (productId) {
      let requestSpecsEmbty = specs;

      if (requestSpecsEmbty.length === 0) {
        requestSpecsEmbty = null;
      }
      const pathName = name.replace(/\s+/g, '-');
      const url = `/store?id=${productId}/${pathName}`;
      window.history.pushState({}, '', url);
    }
  };

  const [value2, setValue2] = useState(1);
  const getFullCategoryData = useSelector((state) => state.lorem.getFullCategoryData);
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'تم', detail: 'تم اضافة المنتج بنجاح' });
  }

  const dispatch = useDispatch();


  const handleBrand = (brandId) => {
    console.log("brandId" , brandId)
    dispatch(getFullCategory({ productId, specs, page: 0 , brandId:brandId }));
   };

  useEffect(() => {
   
    // if (productId) {
      dispatch(getFullCategory({ productId, specs, page: 0 }));
    // }
    Aos.init({ duration: 1000 });
    SwiperCore.use([Navigation]);
  }, [productId, specs    ]);

// }, [productId, specs  , dispatch  ]);
  


  async function handleAddToCart(catId, productId, productName, productImage) {
    setShow(false)
    showSuccess()
    const localStorageData = window.localStorage.getItem('zayadyStorage');
    const finishLocalStorage = JSON.parse(localStorageData);
    const data = [...finishLocalStorage, { productId: productId, name: productName, image: productImage, code: 'QXA930B', count: 1 }]
    // const userId = typeof window !== 'undefined' && window.localStorage.getItem("ib_ID") || 0;
    const userId = window.localStorage.getItem('ib_ID') == 0 ? null : window.localStorage.getItem('ib_ID')
    if (!userId) {
      window.localStorage.setItem('zayadyStorage', JSON.stringify(data))
    } else {
      try {
        await dispatch(getUserOrderDetails({ id: userId }));
        await dispatch(addToCart({ UserId: userId, productId, count: value2 }));
        dispatch(addToCart(data)).then(() => {
          getCart();
          showSuccess();
        });
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  }
  const getCart = () => {
    const ID = window.localStorage.getItem("ib_ID");
    dispatch(getUserOrderDetails(ID));
  };
  function renderCategories() {
    return getFullCategoryData?.cats?.map((cat, id) => (
      <div key={id} className={styles.article_blogs}>
        {renderProducts(cat)}
      </div>
    ));
  }

  function renderProducts(cat) {
    const filteredProducts = cat?.products?.filter((product) => product.catId === cat.id);

    return filteredProducts?.map((product, id) => (
      <div className="card-store" key={id} data-aos="fade-up" onClick={() => handleShow(product.id, product.name, product.image, product.catId)}>
        {/* <Link  key={product.catId} href={`/product/id/${product.id}`}  as={`/product/${product.id}/${encodeURIComponent(product.name.replace(/\s+/g, '-'))}`}> */}
        <div className='img'>
          <LazyLoadImage src={`/api/images?id=${product.image}`} alt={product.name} width={200} height={200} />
        </div>
        {/* </Link> */}
        <div className='div-back-top' >
          {/* <Link  key={product.catId} href={`/product/id/${product.id}`}  as={`/product/${product.id}/${encodeURIComponent(product.name.replace(/\s+/g, '-'))}`}>  */}
          <p>{product.name}</p>
          {/* </Link> */}
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
          {/* <button className='add-cart'  onClick={() => handleAddToCart(product.catId, product.id)}>
      <i className="fa-solid fa-cart-shopping"></i>
      <p>اضف  الى السله </p>
    </button> */}
        </div>
        {/* </Link> */}
      </div>
    ));
  }


  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(1);

  

  const onPageChange = (event) => {
    const { first: page, rows } = event;  
    setFirst(page);  
    setRows(rows);  
    dispatch(getFullCategory({ productId, specs, page }));
};
 

 




  if (!getFullCategoryData) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55.7vh" }}>
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

    < >

      {/* ==========================home=========================== */}
      <Toast ref={toast} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <div className='d-flex align-items-center gap-4 modal-flex' >

            <div className='flex-colum'>
              <p>{selectedProduct.name} </p>
              <div className='d-flex align-items-center gap-3  ' >
                <button className='add-cart'

                  onClick={
                    () => handleAddToCart(selectedProduct.catId, selectedProduct.id, selectedProduct.name, selectedProduct.image)
                  }>
                  <i className="fa-solid fa-cart-shopping"></i>
                  اضف  الى السله
                </button>
                <InputNumber
                  inputId="horizontal-buttons"
                  value={value2}
                  onValueChange={(e) => setValue2(e.value)}
                  showButtons
                  buttonLayout="horizontal"
                  step={1}
                  decrementButtonClassName="p-button-danger"
                  incrementButtonClassName="p-button-success"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                />

              </div>
            </div>
            <Image src={`/api/images?id=${selectedProduct.image}`} zoomSrc={`/api/images?id=${selectedProduct.image}`} alt="Image" width="auto" height="auto" preview />
          </div>
          {/* <Link className='add-cart' key={selectedProduct.id} href={`/product/id/${selectedProduct.id}`} as={`/product/${selectedProduct.id}/${encodeURIComponent(selectedProduct.name.replace(/\s+/g, '-'))}`} >
              صفحه المنتج
            </Link> */}
          {selectedProduct && selectedProduct.name && (
            <Link className='add-cart' key={selectedProduct.id} href={`/product/id/${selectedProduct.id}`} as={`/product/${selectedProduct.id}/${encodeURIComponent(selectedProduct.name.replace(/\s+/g, '-'))}`}>
              صفحة المنتج
            </Link>
          )}
        </Modal.Body>

      </Modal>
     {/*  */}

            <Hero_store />
     {/*  */}
      <div className={styles.padding_blog_phone} style={{ padding: " 20px 30px" }}>

        <Swiper
          breakpoints={{
            100: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            999: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            4100: {
              slidesPerView: 8,
              spaceBetween: 30,
            }

          }}
          loop
          autoplay
          spaceBetween={30}
          navigation
          slidesPerView={8}
        >
          {
            getFullCategoryData?.brands?.map((brand) => {
              return (
                <SwiperSlide>
                  <div key={brand.id} className="card-cat brands" data-aos="fade-up" onClick={() => handleBrand(brand.id) }   >
                   {/* <Link href={`/store/id/${brand.id}`} as={`/store/${brand.id}/${encodeURIComponent(brand.name.replace(/\s+/g, '-'))}`} >   */}
                      <div className='img-store-div' >
                        <LazyLoadImage loading="lazy" src={`/api/images?id=${brand.image}`} alt={brand.name} width={70} height={50} />
                      </div>
                      <h6>{brand.name}</h6>
                    {/* </Link>   */}
                  </div>

                </SwiperSlide>
              )
            })
          }



        </Swiper>
      </div>


      {/* ==========================about=========================== */}

 

      <section className={styles.page}>
        <div className={`${styles.sildebar} ${styles.sildebar_labtop}`}>
          <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header ><h3>السعر</h3></Accordion.Header>
                <Accordion.Body>
                  <div className="flex-range-price">
                    <div className='content' >
                      <p>من </p>
                      <input
                        placeholder=""
                        min={0}
                        type="number"
                      />
                    </div>
                    <div className='content' >
                      <p>الى </p>
                      <input
                        placeholder=""
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </div>

          <div className={styles.blog_ist} >

            <Accordion defaultActiveKey={['0']}  >
              <Accordion.Item >
                <Accordion.Header > <h3>التصنيفات</h3></Accordion.Header>
                <Accordion.Body>
                  <input
                    placeholder="بحث"
                    type="text"
                    className='search-subCats'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {getFullCategoryData?.subCats?.map((e) => (
                    <div key={e.id}>

                      {e.name.includes(searchValue) && (
                        <Link
                          href={`/store/id/${e.id}`}
                          as={`/store/${e.id}/${encodeURIComponent(e.name.replace(/\s+/g, '-'))}`} key={e.id} className='Specs-flex'>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column"
                            }}
                          >

                            <div className={styles.tas}  >
                              <p>{e.name}</p>
                              <p>({e.count})</p>
                            </div>
                          </div>
                        </Link>


                      )}
                    </div>
                  ))}

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {getFullCategoryData?.productSpecs?.map((e, index) => {
              const eventKey = index.toString();
              const uniqueSpecs = e.specs.filter((spec, specIndex) => {
                const index = e.specs.findIndex((s) => s.name === spec.name);
                return index === specIndex;
              });


              const handleSearchChange = (event) => {
                setSearch_Value(event.target.value);
              };

              return (
                <Accordion defaultActiveKey={['0']}   key={e.specId}>
                  <Accordion.Item >
                    <Accordion.Header>
                      <h3>{e.name}</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      <input
                        placeholder="بحث"
                        type="text"
                        className='search-subCats'
                        value={search_Value}
                        onChange={handleSearchChange}
                      />
                      {uniqueSpecs
                        .filter((spec) => spec.name.includes(search_Value))
                        .map((spec) => (
                          <div key={spec.id} className='Specs-flex'>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column"
                              }}
                            >

                              <div className={styles.tas} onClick={() => {handleAddSpec(e?.specId, spec?.name); }}>
                                <p>{spec.name}</p>
                                <p>({spec.count})</p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}

          </div>
        </div>
       <div className={styles.article}>
    {renderCategories(getFullCategoryData?.cats)}

</div>  


         



      </section>
    <Paginator first={first} rows={rows} totalRecords={50}   onPageChange={onPageChange} />

      {/* ==========================bannertwo=========================== */}
      <section className={`${styles.bannertwo} ${styles.padding_blog_phone}`}  >
        <h2 style={{ fontWeight: "bold" }}>تسوق حسب الماركه</h2>
        <div>
          {/* <a><Image loading="lazy"src={mark1} alt=""></Image></a>
    <a><Image loading="lazy"src={mark2}  alt="" ></Image></a>
    <a><Image loading="lazy"src={mark3}alt=""></Image></a>
    <a><Image loading="lazy"src={mark4}alt=""></Image></a>
    <a><Image loading="lazy"src={mark5}alt=""></Image></a> */}
        </div>
      </section>
      {/* ============= */}
      <Container style={{ maxWidth: "1800px" }}>

        <section className={styles.padding_blog_phone} style={{
          display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem", direction: "rtl", padding: "70px 30px", alignItems: "center"
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: "1.5rem", justifyContent: 'center' }}>

            <div style={{ padding: "15px", display: 'flex', fontSize: "1.7rem", color: "#0293C8", background: "#F6F6F6", borderRadius: '10px' }}>
              <i className="fa-solid fa-gear"></i>
            </div>
            <div>
              <h5>الدعم الفنى</h5>
              <p style={{ color: "#b6b6b6" }}>دعم فنى على مدار الساعه</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: "1.5rem", justifyContent: 'center' }}>

            <div style={{ padding: "15px", display: 'flex', fontSize: "1.7rem", color: "#0293C8", background: "#F6F6F6", borderRadius: '10px' }}>
              <i className="fa-brands fa-cc-visa"></i>
            </div>
            <div>
              <h5>الدعم الفنى</h5>

              <p style={{ color: "#b6b6b6" }}>دعم فنى على مدار الساعه</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: "1.5rem", justifyContent: 'center' }}>

            <div style={{ padding: "15px", display: 'flex', fontSize: "1.7rem", color: "#0293C8", background: "#F6F6F6", borderRadius: '10px' }}>

              <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div>
              <h5>الدعم الفنى</h5>

              <p style={{ color: "#b6b6b6" }}>دعم فنى على مدار الساعه</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: "1.5rem", justifyContent: 'center' }}>

            <div style={{ padding: "15px ", display: 'flex', fontSize: "1.7rem", color: "#0293C8", background: "#F6F6F6", borderRadius: '10px' }}>
              <i className="fa-solid fa-lock" ></i>
            </div>
            <div>
              <h5>الدعم الفنى</h5>

              <p style={{ color: "#b6b6b6" }}>دعم فنى على مدار الساعه</p>
            </div>
          </div>
        </section>
      </Container>
    </ >
  )
}

export default LeftTabsExample;
