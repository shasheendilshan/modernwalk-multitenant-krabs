import React from "react";
import { toast } from "react-toastify";

const Toast = () => {
  return <div>Toast</div>;
};

export default Toast;

export const errorToast = (msg: string) => {
  toast.error(msg);
};
