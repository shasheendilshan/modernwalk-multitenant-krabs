import Categories from "@section-templates/Categories/Categories.section-template";
import style from "@styles/modernwalk/index.module.scss";
import FlashSalesStat from "@section-templates/FlashSalesStat/FlashSales";
import { getAllProductsByTenant } from "@services/products.services";
import { BallBeat } from "react-pure-loaders";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import { useGlobalContext } from "@contexts/globalStateContext";

const Index = () => {
  const globalCtx = useGlobalContext();
  console.log("global", globalCtx.tenantId);

  const getFlashSaleProducts = () => {
    if (globalCtx.tenantId) {
      return getAllProductsByTenant(globalCtx.tenantId);
    }
  };

  const { data, isLoading, isError } = useQuery(
    "allProducts",
    getFlashSaleProducts
  );
  console.log("data", data);

  if (isLoading) {
    return (
      <div className={style.loadingMainContainer}>
        <div className={style.skeletonContainer}>
          <div className={style.skeletonBg}>
            <Skeleton className={style.skeleton} />
          </div>
          <div className={style.skeletonBg}>
            <Skeleton className={style.skeleton} />
          </div>
          <div className={style.skeletonBg}>
            <Skeleton className={style.skeleton} />
          </div>
          <div className={style.skeletonBg}>
            <Skeleton className={style.skeleton} />
          </div>
        </div>
        <div className={style.loadingContainer}>
          <BallBeat color={"#2BD9AF"} loading />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className={style.errorContainer}>
        <div>
          <h2>Flash Sale !</h2>
        </div>
        <div className={style.errorMessageContainer}>
          <h3>Something went wrong!!</h3>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className={style.mainContainer}>
          <FlashSalesStat products={data?.data} />
          <Categories />
        </div>
      </>
    );
  }
};

export default Index;
