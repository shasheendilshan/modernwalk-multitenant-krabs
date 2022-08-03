import React from "react";
import Slider from "react-slick";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./ProductSlider.module.scss";

type Props = {
  children: React.ReactNode;
};

const NextArrow: React.FC = (props: any) => {
  const { onClick } = props;

  return (
    <div className={style.rightArrow} onClick={onClick}>
      <button>
        <AiOutlineRight size={25} />
      </button>
    </div>
  );
};

const PreviousArrow: React.FC = (props: any) => {
  const { onClick } = props;

  return (
    <div className={style.leftArrow} onClick={onClick}>
      <button className="prev">
        <AiOutlineLeft size={25} />
      </button>
    </div>
  );
};

const ProductsSlider: React.FC<Props> = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className={style.mainContainer}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default React.memo(ProductsSlider);
