
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect ,useCallback } from 'react';
import axios from 'axios';                                
import shahn4 from "../public/img/photo_6012363210176445248_x.jpg";                                      
import shahn5 from "../public/img/Group 41409.png";
import shahn3 from "../public/img/35a18503-a6a0-4825-9e47-80e2e29690f4.png";     
import Imagegal1 from "../public/img/security.png";     
import Imagegal2 from "../public/img/security2.png";     
import Image from 'next/image';
import SwiperCore, { Autoplay , Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-bootstrap/Modal';
import { InputNumber } from 'primereact/inputnumber';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { TabView, TabPanel } from 'primereact/tabview';
import "primereact/resources/primereact.min.css";                                               
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { useRouter } from 'next/router';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../styles/Home.module.css';
import { Container } from "react-bootstrap";
import ImageViewer from 'react-simple-image-viewer';
import Aos from "aos";
const about = (props) => {
 const handleImageClick = (id) => {
   const selectedImage = productData.imgs.imgs?.find((img) => img.small === id);
   setSelectedImageId(selectedImage.large); 
 };
 const [currentImage, setCurrentImage] = useState(0);
 const [isViewerOpen, setIsViewerOpen] = useState(false);
 const openImageViewer = () => {
   setCurrentImage(0); 
   setIsViewerOpen(true); 
 };
   const [productData, setProductData] = useState(null);
   const [selectedImageId, setSelectedImageId] = useState(null);
  const router = useRouter();
   const productId = router.query.id;
   useEffect(() => {
     if (productId) {
       axios.post('https://zayady.deltawy.com/rest/test.product/getProductDetails/', {
         "id": productId
         })
         .then((response) => {
           setProductData(response.data);
           console.log(response.data);
         })
         .catch((error) => {
           console.error(error);
         });
     }
     Aos.init({duration: 1000});
     SwiperCore.use([Navigation]);
   }, [productId]);
 
  const [activeIndex, setActiveIndex] = useState(0);     
  const [show, setShow] = useState(false);
  const [value3, setValue3] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!productData) {
    return (
    <div  style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"55.7vh"}}>
      <div  className={styles.ui_abstergo}>
  <div  className={styles.abstergo_loader}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div  className={styles.ui_text}>
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
    <Container style={{maxWidth: "1800px" }}>   
    <div className={`${styles.imageGallery} ${styles.imageGallery_padding}`} >
    <div className={styles.imageGallery_left}>
            <div >
            <div className={styles.imageGallery_left_button12} >
            
             <div className={styles.sala_contantp}>
          <div className="heart-card" >
          <i className="fa-regular fa-heart"></i>
            </div>
            {productData && (
            <>
              <h2>{productData.name}</h2>
               <Link href="/" style={{color:'black ' , paddingTop:"1rem" }}>
                <h5 >
                  {productData.catName}
               </h5>
               </Link> 
               <h5 >
                  {productData.shortDescription}
               </h5>
            </>
          )}
            <div style={{display: 'flex',
            justifyContent: 'space-between',
              alignItems: 'center'}}>
            <h6 style={{color:'#0382b1' ,fontWeight:"bold"}}>15,555</h6>
              </div>        
              </div>
              </div>

              </div>
            <div className={styles.imageGallery_left_button12} style={{display:'flex' , justifyContent:'center' ,gap:"1rem", alignItems:'center' , flexDirection:'row'}}>
            <Modal show={show} onHide={handleClose}>
        
        <Modal.Body > 
          <div className={styles.modal_body}>
          <Image loading="lazy"alt=""  src={shahn3} style={{width:"100px", height:"100%" ,boxShadow:" 1px 3px 5px rgb(209, 209, 209)" ,padding: "5px"
    ,borderRadius: '20px'}}></Image>
    <div>
        <h5>  تلفزيون 50 بوصه فائق الجوده4kشاشه 
          فائق الجوده والسرعه
        </h5>
        <p style={{color:'#0382b1'}}>15,555</p>
        
        </div>
        
    </div></Modal.Body>
        <Modal.Footer>
        <button  className={`${styles.salebtn} ${styles.متابعه_الدفع}`}> 
        <Link href='/logintwo'>   
         متابعه الدفع
        </Link> 
      </button>
       </Modal.Footer>
      </Modal>
            <div className="flex-auto" style={{display: 'flex',
                alignItems: 'center',
                gap: '1rem',}}>
                <label htmlFor="minmax-buttons" className="font-bold block mb-2"> 
                  <h5 style={{margin:'0'}}>الكميه</h5>
                </label>
                <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={1} max={10000} />
            </div>
              <button className={styles.imageGallery_left_button1}  onClick={handleShow}>
                اضافه الى السله
          

     
     

              </button>     
              <button className={styles.imageGallery_left_button2}> 
              اضافه الى المقارنه       
                     </button>
            </div>
          <div className={styles.imageGallery_left_button12} style={{display:'flex' , gap:'3rem', padding:"30px 0", justifyContent:'center' ,  }}>     
            <div style={{display:'flex' , justifyContent:'center', gap:'1rem' }}>     
              <Image loading="lazy"alt=""  src={Imagegal1} style={{height:' fit-content'}}></Image>
              <div>
                <h6 style={{color:'#0382b1'}}>الضمان</h6>
                <p> سنوات3</p>
              </div>
            </div>
            <div style={{display:'flex' , justifyContent:'center', gap:'1rem' }}>     
              <Image loading="lazy"alt=""  src={Imagegal2} style={{height:' fit-content'}}></Image>
              <div>
                <h6 style={{color:'#0382b1'}}>الدفع الامن </h6>
                <p> الدفع عند الاستلام</p>
              </div>
            </div>

          </div>
          
            </div>
    
            <div className="img_left">   
{productData && (
  <div>    
    <div  onClick={openImageViewer} style={{display: 'flex',justifyContent: 'center' }} >
    {selectedImageId ? (
  <div onClick={openImageViewer} >
    <Image loading="lazy"alt="" 
      src={`/api/images?id=${selectedImageId}`}
      width={350}
      height={350}
      style={{
        boxShadow: '0 0 50px #f3f2f2',
        borderRadius:"1.4pc",
        marginBottom:"20px",
             }}
      className="replace_large"
    />
  </div>
) : (
  <div onClick={openImageViewer}>
    <Image loading="lazy"alt="" 
      src={`/api/images?id=${productData.imgs.imgs[0].large}`}
      width={350}
      height={350}
      style={{
        boxShadow: '0 0 50px #f3f2f2',
        borderRadius:"1.4pc",
        marginBottom:"20px"

             }}
      className="replace_large"
    />
  </div>
)}
    </div>
    
    <div style={{display:'flex' ,justifyContent:"center"}}  >
      {productData.imgs.imgs?.map((image, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(image.small)}
          style={{
            border: selectedImageId === image.medium ? '1px solid #ccc' : '',
            padding: '5px',
            cursor: 'pointer',
          }}
        >
          <Image loading="lazy"alt="" 
          style={{
     boxShadow: '0 0 50px #f3f2f2',
     borderRadius:"1.4pc"
          }}
            src={`/api/images?id=${image.small}`}
            width={90}
            height={80}
          />
        </div>
      ))}
    </div>
{isViewerOpen && (
        <Image loading="lazy"alt="" Viewer
        src={[`/api/images?id=${selectedImageId}`]}
        currentIndex={currentImage}
        onClose={() => setIsViewerOpen(false)}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "#000",
            zIndex:'99999999',
          }}
          closeOnClickOutside={true}
        />
      )}
  </div>
)}
    </div>   

     
    
  
    </div>
{/* ===================== */}
<div style={{direction:'rtl' }} className={styles.imageGallery_padding}>
  <div >
  <h2 style={{color:"#0382b1"}}>تفاصيل المنتج</h2>
  <p style={{paddingTop:'10px'}}>
  {productData && (
               <p  style={{color:"rgb(137 137 137)"}} >
                  {productData.description}
               </p>
          )}
  </p>
  </div>


</div>
{/* ========================== */}
<section style={{padding:"20px 80px"}}  className="taps-products">
<div className="allabouttwo-fqu" >
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
                    
                    <div key={index} style={{padding:".5rem"}} > 
                    <h6 className="product_details_h6">{mat.name} : <p> {mat.val} </p> </h6>
                    </div>
                ))}
            </>
          )}
                    </div>
       </Tab>
      <Tab eventKey="longer-tab" title=" مراجعات">
      <div style={{direction:'rtl', gap:"2rem"}}>

 {/* ======= */}
 <div className={styles.Imagegallary_comment}  >
    <div>
      {/* ======= */}
    <div style={{display:'flex' ,gap:"1rem"}}>
    <div><i className="fa-solid fa-circle-user"  style={{color:"#0790ec" , fontSize:"1.5rem"}}></i></div>   
        <div className="flex-user">
            <h6 >mohamed rady</h6>
            <div  className="star-products">
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-regular fa-star "></i>
            <i className="fa-regular fa-star "></i>
           </div>
            <h6> 5 سبتمبر 2015</h6>
            
            <h5>اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى فى وقت قصير</h5>
          </div>
    </div>
    {/* ====== */}
    </div>
    {/* ========== */}
    <div>
      {/* ======= */}
      <div style={{display:'flex' ,gap:"1rem"}}>
    <div><i className="fa-solid fa-circle-user"  style={{color:"#0790ec" , fontSize:"1.5rem"}}></i></div>   
        <div className="flex-user">
            <h6 >mohamed rady</h6>
            <div  className="star-products">
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-regular fa-star "></i>
            <i className="fa-regular fa-star "></i>
           </div>
            <h6> 5 سبتمبر 2015</h6>
            
            <h5>اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى فى وقت قصير</h5>
          </div>
    </div>
    {/* ====== */}
    </div>
    {/* ========== */}
    </div>
<hr style={{  margin:'1rem 0 0 0 '
}}></hr>
 {/* ================= */}
 <div className={styles.Imagegallary_comment} style={{paddingTop:"2rem"}}>
    <div>
      {/* ======= */}
      <div style={{display:'flex' ,gap:"1rem"}}>
    <div><i className="fa-solid fa-circle-user"  style={{color:"#0790ec" , fontSize:"1.5rem"}}></i></div>   
        <div className="flex-user">
            <h6 >mohamed rady</h6>
            <div  className="star-products">
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-regular fa-star "></i>
            <i className="fa-regular fa-star "></i>
           </div>
            <h6> 5 سبتمبر 2015</h6>
            
            <h5>اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى فى وقت قصير</h5>
          </div>
    </div>
    {/* ====== */}
    </div>
    {/* ========== */}
    <div>
      {/* ======= */}
      <div style={{display:'flex' ,gap:"1rem"}}>
    <div><i className="fa-solid fa-circle-user"  style={{color:"#0790ec" , fontSize:"1.5rem"}}></i></div>   
        <div className="flex-user">
            <h6 >mohamed rady</h6>
            <div  className="star-products">
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-regular fa-star "></i>
            <i className="fa-regular fa-star "></i>
           </div>
            <h6> 5 سبتمبر 2015</h6>
            
            <h5>اشتريته من موقع الزيادى وبجد كل حاجه كانت تمام ووصلنى فى وقت قصير</h5>
          </div>
    </div>
    {/* ====== */}
    </div>
    {/* ========== */}
    </div>
</div>
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>
   
    </div>

</section>
{/* ========================== */}
<div style={{direction:'rtl'}} className={styles.imageGallery_padding}>
        
          <textarea rows="4"  cols="50" className={styles.textarea} data-aos="fade-up"  placeholder="   اضف تعليقك..." ></textarea>
</div>
{/* ============ */}
   <div className={styles.gal} data-aos="fade-up" style={{padding:"60px 0 60px 0"}}>
      
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
  loop={'true'}
  autoplay
      spaceBetween={30}
      slidesPerView={5}

    >
        {productData && (
            <>
             
                {productData.matched?.map((mat, index) => (
                   <SwiperSlide   key={mat.id}  className="card-cat-productData" >
                    <Link href={`/product?id=${mat.id}`} as={`/product/${mat.id}/${encodeURIComponent(mat.name.replace(/\s+/g, '-'))}`}>
                    <div key={index}   className="card-cat" > 
                    <Image loading="lazy"   src={`/api/images?id=${mat.image}`} alt={mat.name} width={190} height={170}  />
                    <h6>{mat.name}</h6>
                    <h6 >{mat.catName}</h6>
                    </div>
                    </Link> 
                    
                   </SwiperSlide> 
                 
                ))}
              
               
            </>
          )}
     
    </Swiper>



      
       
    </div> 
{/* ======= */}

    </Container>
  )
}

export default about

























// import React, { useState, useEffect ,useCallback } from 'react';
// import axios from 'axios';                                
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css';
// import { Container } from "react-bootstrap";
// import ImageViewer from 'react-simple-image-viewer';
// const about = (props) => {
// const handleImageClick = (id) => {
//   const selectedImage = productData.imgs.imgs.find((img) => img.small === id);
//   setSelectedImageId(selectedImage.large); 
// };
// const [currentImage, setCurrentImage] = useState(0);
// const [isViewerOpen, setIsViewerOpen] = useState(false);
// const openImageViewer = () => {
//   setCurrentImage(0); 
//   setIsViewerOpen(true); 
// };
//   const [productData, setProductData] = useState(null);
//   const [selectedImageId, setSelectedImageId] = useState(null);
//   const router = useRouter();
//   const productId = router.query.id;
//   useEffect(() => {
//     if (productId) {
//       axios.post('https://zayady.deltawy.com/rest/test.product/getProductDetails/', {
//         "id": productId
//         })
//         .then((response) => {
//           setProductData(response.data);
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [productId]);
// return (
//   <Container style={{maxWidth: "1800px" }}>   
//     <div className={`${styles.imageGallery} ${styles.imageGallery_padding}`} >   
// {productData && (
//   <div>    
//     <div onClick={openImageViewer} style={{display: 'flex',justifyContent: 'center'}} >
//     {selectedImageId ? (
//   <div onClick={openImageViewer} >
//     <Image loading="lazy"alt="" 
//       src={`/api/images?id=${selectedImageId}`}
//       alt=""
//       width={600}
//       height={600}
//       className="replace_large"
//     />
//   </div>
// ) : (
//   <div onClick={openImageViewer}>
//     <Image loading="lazy"alt="" 
//       src={`/api/images?id=${productData.imgs.imgs[0].large}`}
//       alt=""
//       width={600}
//       height={600}
//       className="replace_large"
//     />
//   </div>
// )}
//     </div>
    
//     <div style={{display:'flex'}}>
//       {productData.imgs.imgs?.map((image, index) => (
//         <div
//           key={index}
//           onClick={() => handleImageClick(image.small)}
//           style={{
//             border: selectedImageId === image.medium ? '1px solid #ccc' : '',
//             width: '100%',
//             padding: '2px',
//             marginBottom: '15px',
//             cursor: 'pointer',
//           }}
//         >
//           <Image loading="lazy"alt="" 
//             src={`/api/images?id=${image.small}`}
//             alt=""
//             width={190}
//             height={170}
//           />
//         </div>
//       ))}
//     </div>
// {isViewerOpen && (
//         <Image loading="lazy"alt="" Viewer
//         src={[`/api/images?id=${selectedImageId}`]}
//         currentIndex={currentImage}
//         onClose={() => setIsViewerOpen(false)}
//           disableScroll={false}
//           backgroundStyle={{
//             backgroundColor: "#000",
//             zIndex:'99999999',
//           }}
//           closeOnClickOutside={true}
//         />
//       )}
//   </div>
// )}
//     </div>   
//   </Container>
// );
// }
// export default about;
