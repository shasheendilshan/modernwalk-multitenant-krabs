import React from "react";

import { IProduct } from "@interfaces/products/products.interfaces";
import ProductsSlider from "@components/ProductsSlider/ProductsSlider.component";
import ProductCard from "@components/ProductCard/ProductCard.component";
import style from "./FlashSales.module.scss";

type Props = {
  products: IProduct[];
};

const FlashSales: React.FC<Props> = ({ products }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.header}>
        <h2>Flash Sale !</h2>
      </div>
      <div className={style.sliderContainer}>
        <ProductsSlider>
          {products.map((product: IProduct, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductsSlider>
      </div>
    </div>
  );
};

export default FlashSales;
