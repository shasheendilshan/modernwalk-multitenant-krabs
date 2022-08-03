import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

import { useGlobalContext } from "@contexts/globalStateContext";
import { useCartContext } from "@contexts/cartContext";
import { formatCurrency } from "@utils/formatCurancy";
import Button from "@components/Button/Button.component";
import style from "./ProductModal.module.scss";

const ProductModal = () => {
  const globalCtx = useGlobalContext();
  const cartCtx = useCartContext();
  const product = globalCtx.product;

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const closeModal = () => {
    setCount(1);
    console.log("count", count);
    globalCtx.showModal(false);
  };

  return (
    <Transition appear show={globalCtx.productModalState} as={Fragment}>
      <Dialog
        as="div"
        open={globalCtx.productModalState}
        onClose={closeModal}
        className={style.dialog}
      >
        <div className={style.blurBackground}>
          <div className={style.dialogPanelContainer}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={style.dialogPanel}>
                <Dialog.Title className={style.header}>
                  <span>{product?.title}</span>
                  <span
                    className={style.closeIconContainer}
                    onClick={closeModal}
                  >
                    <AiOutlineClose size={22} />
                  </span>
                </Dialog.Title>

                <div className={style.content}>
                  <div className={style.productImage}>
                    <Image
                      src={product ? product.image : ""}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3>{product && formatCurrency(product?.price)}</h3>

                  <div className={style.countContainer}>
                    <span onClick={decrement}>
                      <AiOutlineMinus color="#fff" />
                    </span>
                    <p>{count}</p>
                    <span onClick={increment}>
                      <AiOutlinePlus color="#fff" />
                    </span>
                  </div>

                  <div className={style.description}>
                    <h3>Description : </h3>
                    <p>{product?.description}</p>
                  </div>
                </div>

                <div className={style.bottomContainer}>
                  <Button
                    name="Cancel"
                    variant="outlined"
                    onClick={closeModal}
                  />
                  <Button
                    name="Add To Cart"
                    onClick={() => {
                      if (product) {
                        cartCtx.addProductToCart(product, count);
                        closeModal();
                      }
                    }}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductModal;
