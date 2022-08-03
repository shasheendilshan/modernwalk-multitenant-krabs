import Link from "next/link";
import React from "react";
import style from "./Categories.module.scss";

const Categories: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <h2>Categories </h2>
      <div className={style.categoryContainer}>
        <Link href="/products/men's-clothing">
          <span className={`${style.categoryCard} ${style.menCard}`}>
            <h1>Men's Clothing</h1>
          </span>
        </Link>

        <Link href="/products/women's-clothing">
          <span className={`${style.categoryCard} ${style.womenCard}`}>
            <h1>Women's Clothing</h1>
          </span>
        </Link>
        <Link href="/products/electronics">
          <span className={`${style.categoryCard} ${style.menCard}`}>
            <h1>Electronics</h1>
          </span>
        </Link>

        <Link href="/products/jewelery">
          <span className={`${style.categoryCard} ${style.womenCard}`}>
            <h1>Jewelries</h1>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
