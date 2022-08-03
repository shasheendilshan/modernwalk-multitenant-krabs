import Categories from "@section-templates/Categories/Categories.section-template";
import style from "@styles/rarebeauty/index.module.scss";
import FlashSalesStat from "@section-templates/FlashSalesStat/FlashSales";
import { getAllProducts } from "@services/products.services";
import { IProduct } from "@interfaces/products/products.interfaces";

type Props = {
  products: IProduct[];
};

const Index = ({ products }: Props) => {
  return (
    <>
      <div className={style.mainContainer}>
        <FlashSalesStat products={products} />
        <Categories />
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products?.data,
    },
    revalidate: 5,
  };
}
