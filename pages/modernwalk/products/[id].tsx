import React from "react";
import { BallBeat } from "react-pure-loaders";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

import "react-loading-skeleton/dist/skeleton.css";
import { getSpecificCategoryByTenant } from "@services/products.services";
import { IProduct } from "@interfaces/products/products.interfaces";
import ProductCard from "@components/ProductCard/ProductCard.component";
import style from "./category.module.scss";
import LoadingSkeleton from "@components/LoadingSkeleton/LoadingSkeleton.component";
import { useGlobalContext } from "@contexts/globalStateContext";

type Props = {
  products: IProduct[];
  title: string;
};

const Category: React.FC<Props> = ({ products, title }) => {
  const globalCtx = useGlobalContext();
  console.log("global", globalCtx.tenantId);
  const router = useRouter();
  const heading = router.query.id?.toString();

  const getProducts = () => {
    if (heading && globalCtx.tenantId) {
      return getSpecificCategoryByTenant(
        heading.replace("-", " "),
        globalCtx.tenantId
      );
    }
  };

  const { data, isLoading } = useQuery(
    ["getProductsCategory", heading],
    getProducts
  );

  if (isLoading) {
    return (
      <div className={style.productContainer}>
        <div className={style.header}>
          <h2>{heading?.replace("-", " ").toLocaleUpperCase()}</h2>
        </div>
        <div className="w-full flex justify-center">
          <BallBeat color="#2BD9AF" loading />
        </div>

        <LoadingSkeleton />
      </div>
    );
  } else {
    return (
      <div className={style.productContainer}>
        <div className={style.header}>
          <h2>{heading?.replace("-", " ").toLocaleUpperCase()}</h2>
        </div>
        <div className={style.productList}>
          {data?.data.map((product: IProduct, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }
};

export default Category;

// export const getStaticProps = async ({ params }: any) => {
//   const data = await getSpecificCategory(params?.id.replace("-", " "));
//   console.log("params", params);
//   return {
//     props: {
//       products: data?.data,
//       title: params?.id,
//     },
//     revalidate: 5,
//   };
// };

// export const getStaticPaths = async () => {
//   const categories = await getAllCategories();
//   //console.log("get static paths", categories);
//   const pathList = categories?.data.map((path: string) => {
//     return {
//       params: {
//         id: path.replace(/ /g, "-"),
//       },
//     };
//   });

//   return {
//     paths: pathList,
//     fallback: "blocking",
//   };
// };
