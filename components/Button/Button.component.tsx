import React from "react";
import style from "./Button.module.scss";

type variants = "outlined" | "primary" | "danger";
type types = "outlined" | "contained";

type Prop = {
  name: string;
  disable?: boolean;
  onClick?: () => void;
  variant?: variants;
  type?: types;
};

const Button: React.FC<Prop> = ({ name, disable, onClick, variant, type }) => {
  if (type === "contained") {
    return (
      <button
        disabled={disable ? disable : false}
        onClick={onClick}
        className={variant ? style[`contained-${variant}`] : style["primary"]}
      >
        {name && name}
      </button>
    );
  }
  if (type === "outlined") {
    return (
      <button
        disabled={disable ? disable : false}
        onClick={onClick}
        className={variant ? style[`outlined-${variant}`] : style["primary"]}
      >
        {name && name}
      </button>
    );
  }
  return (
    <button
      disabled={disable ? disable : false}
      onClick={onClick}
      className={variant ? style[variant] : style["primary"]}
    >
      {name && name}
    </button>
  );
};

export default React.memo(Button);
