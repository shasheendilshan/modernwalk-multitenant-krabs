import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

import { getSpecificCategory } from "@services/products.services";
import { IProduct } from "@interfaces/products/products.interfaces";
import ProductCard from "@components/ProductCard/ProductCard.component";
import style from "./category.module.scss";
import { getAllCategories } from "@services/products.services";

type Props = {
  products: IProduct[];
  title: string;
};

const Category: React.FC<Props> = ({ products, title }) => {
  return (
    <div className={style.productContainer}>
      <div className={style.header}>
        <h2>{title.replace("-", " ").toLocaleUpperCase()}</h2>
      </div>
      <div className={style.productList}>
        {products.map((product: IProduct, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;

export const getStaticProps = async ({ params }: any) => {
  const data = await getSpecificCategory(params?.id.replace("-", " "));
  console.log("params", params);
  return {
    props: {
      products: data?.data,
      title: params?.id,
    },
    revalidate: 5,
  };
};

export const getStaticPaths = async () => {
  const categories = await getAllCategories();
  //console.log("get static paths", categories);
  const pathList = categories?.data.map((path: string) => {
    return {
      params: {
        id: path.replace(/ /g, "-"),
      },
    };
  });

  return {
    paths: pathList,
    fallback: "blocking",
  };
};
