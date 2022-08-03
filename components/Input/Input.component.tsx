import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import style from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  onChange,
  value,
  label,
  error,
}) => {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={style.mainContainer}>
      {label && <label htmlFor="">{label}</label>}

      {type === "password" ? (
        <div className={style.passwordContainer}>
          <input
            name={name}
            type={show ? "text" : "password"}
            className={`${error ? style.error : ""} ${style.password}`}
            onChange={onChange}
            value={value}
          />
          <span>
            {show ? (
              <AiFillEye size={28} color="#182132" onClick={toggleShow} />
            ) : (
              <AiFillEyeInvisible
                size={28}
                color="#182132"
                onClick={toggleShow}
              />
            )}
          </span>
        </div>
      ) : (
        <input
          name={name}
          type={type}
          className={`${error ? style.error : ""} ${style.password}`}
          onChange={onChange}
          value={value}
        />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default React.memo(Input);
