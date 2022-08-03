import React from "react";
import Skeleton from "react-loading-skeleton";

import style from "./LoadingSkeleton.module.scss";

const LoadingSkeleton = () => {
  return (
    <div className={style.mainContainer}>
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
    </div>
  );
};

export default LoadingSkeleton;
