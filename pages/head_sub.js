"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
 import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "../Components/Loading"
import { getproductJson, getSubCategories } from "../Components/redux/reducers/lorem/loremSlice";
 

const Head_sub = ({ id }) => {
  const dispatch = useDispatch();
  const { getSubCategoriesData, getproductJsonData } = useSelector((state) => state.lorem);


  useEffect(() => {
    dispatch(getSubCategories({ id }));
    dispatch(getproductJson({ id }));
  }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(getproductJson({ id }));
  // }, [dispatch, id]);

  // if (!getSubCategoriesData) {
  //   return (
  //     <Loading />
  //   );
  // }

  return (
    <div className={styles.head_sub}>
      {getSubCategoriesData
        ?.filter((cata) => cata.parentId === id)
        ?.slice(0, 3)
        ?.map((cata) => (
          <div className="flex-product header-card" key={cata.id}>
            <Link
              href={`/store/id/${cata.id}`}
              as={`/store/${cata.id}/${encodeURIComponent(
                cata.name.replace(/\s+/g, "-")
              )}`}
            >
              <div>
              <LazyLoadImage
                      loading="lazy"
                      alt={cata.name}
                      src={`https://zayady.deltawy.com/imgs/images?id=${cata.image}`}
                      width={170}
                      height={170}
                    />
              </div>
              <div className={styles.name_head_sub}>
                <h5 style={{ paddingTop: "1rem" }}>{cata.name}</h5>
              </div>
            </Link>
            {getproductJsonData
              ?.filter((cat) => cat.parentId !== 0)
              .slice(0, 3)
              .map((cat) => (
                <ul key={cat.id}>
                  <li className="">
                    <Link
                      href={`/product/id/${cat.id}`}
                      as={`/product/${cat.id}/${encodeURIComponent(
                        cat.name.replace(/\s+/g, "-")
                      )}`}
                      className={styles.pro_name}
                    >
                      {cat.name.substring(0, 30) + "...."}
                    </Link>
                  </li>
                </ul>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Head_sub;
