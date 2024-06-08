import styles from '../styles/Home.module.css';
import Pro_name from "./pro_name"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategories } from '../Components/redux/reducers/lorem/loremSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const names_cat = (props) => {
  
  const dispatch = useDispatch();
   const getSubCategoriesData = useSelector((state) => state.lorem.getSubCategoriesData);  
     useEffect(() => {
       dispatch(getSubCategories({ id: props.id }));
   }, [dispatch, props.id]);

  if (!getSubCategoriesData) {
    return (
    <div  style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"55.7vh"}}>
      <div  className="ui_abstergo">
  <div className="abstergo_loader" >
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div   className="ui_text"  >
    Loading  
    <div  className="ui_dot" ></div>
    <div  className="ui_dot" ></div>
    <div   className="ui_dot" ></div>
  </div>
</div>
    </div>
    );
  }
  return (
    <div>
      
      {getSubCategoriesData && (
  <div className={styles.head_sub}>
    {getSubCategoriesData.cats
      ?.filter((cata) => cata.parentId === props.id)
      ?.slice(0, 3)
      ?.map((cata) => (
        <div className='flex-product header-card' key={cata.id}>
          <Link
            href={`/store/id/${cata.id}`}
            as={`/store/${cata.id}/${encodeURIComponent(
              cata.name.replace(/\s+/g, '-')
            )}`}
          >
            <div>
              <LazyLoadImage
                loading="lazy"
                alt={cata.name}
                src={`/api/images?id=${cata.image}`}
                width={170}
                height={170}
              />
            </div>
            <div className={styles.name_head_sub}>
              <h5 style={{ paddingTop: '1rem' }}>{cata.name}</h5>
            </div>
          </Link>
          <Pro_name id={cata.id} />
        </div>
      ))}
  </div>
)}  

    </div>
  )
}

export default names_cat

















// import styles from '../styles/Home.module.css';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Head_sub = (props) => {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     axios.post('https://zayady.deltawy.com/rest/test.product/getSubCategories/', {
//         "id": props.id 
      
//       })
//       .then((response) => {
//         setResponseData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [props.id]); 

//   const filterNames = (names) => {
//     return names?.slice().sort().slice(0, 3);
//   }

//   return (
//     <div>
//           <div className={styles.ruby_row} >
//           <div>
//       {responseData && (
//         <div>
//           <h3>================ </h3>
//           <ul>
//             {filterNames(responseData.cats?.map((e) => e.name)).map((name) => (<h6>{name}</h6>))}

//           </ul>
          
//         </div>
//       )}
//     </div>
                     
//                      </div>
//                    </div>
//   )
// }

// export default Head_sub;