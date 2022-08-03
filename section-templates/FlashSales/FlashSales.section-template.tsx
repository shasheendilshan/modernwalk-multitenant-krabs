import React from "react";
import { BallBeat } from "react-pure-loaders";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";

import { IProduct } from "@interfaces/products/products.interfaces";
import ProductsSlider from "@components/ProductsSlider/ProductsSlider.component";
import ProductCard from "@components/ProductCard/ProductCard.component";
import { getAllProducts } from "@services/products.services";
import style from "./FlashSales.module.scss";

const FlashSales: React.FC = () => {
  const { data, isLoading, isError } = useQuery("allProducts", getAllProducts);
  if (isLoading) {
    return (
      <div className={style.loadingContainer}>
        <div className={style.SkeletonContainer}>
          <div className={style.skeletonCard}>
            <Skeleton className={style.skeleton} />
          </div>
          <div className={style.skeletonCard}>
            <Skeleton className={style.skeleton} />
          </div>
          <div className={style.skeletonCard}>
            <Skeleton className={style.skeleton} />
          </div>
          <div className={style.skeletonCard}>
            <Skeleton className={style.skeleton} />
          </div>
        </div>
        <div className={style.skeleton}>
          <BallBeat color={"#2BD9AF"} loading />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className={style.mainContainer}>
        <div className={style.header}>
          <h2>Flash Sale !</h2>
        </div>
        <div className={style.sliderContainer}>
          <h3>Something went wrong!!</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.mainContainer}>
        <div className={style.header}>
          <h2>Flash Sale !</h2>
        </div>
        <div className={style.sliderContainer}>
          <ProductsSlider>
            {data?.data.map((product: IProduct, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </ProductsSlider>
        </div>
      </div>
    );
  }
};

export default FlashSales;
