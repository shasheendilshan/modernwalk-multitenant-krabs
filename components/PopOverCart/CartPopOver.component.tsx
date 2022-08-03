import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Image from "next/image";

import { useCartContext } from "@contexts/cartContext";
import { IProduct } from "@interfaces/products/products.interfaces";
import { formatCurrency } from "@utils/formatCurancy";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog.component";
import Button from "@components/Button/Button.component";
import style from "./CartPopOver.module.scss";

type ItemProps = {
  product: IProduct;
  quantity: number;
  key?: number;
  increase: (product: IProduct) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
};

const CartItem: React.FC<ItemProps> = ({
  product,
  quantity,
  increase,
  decrease,
  remove,
}) => {
  return (
    <div key={product.id} className={style.cartItemMainContainer}>
      <div className={style.imageContainer}>
        <Image src={product.image} layout="fill" objectFit="contain" />
      </div>
      <div className={style.midContainer}>
        <div className={style.productTitle}>
          <p>{product.title.substring(0, 30)}...</p>
        </div>
        <div className={style.quantityContainer}>
          <span
            onClick={() => {
              decrease(product?.id);
            }}
          >
            <AiOutlineMinus color="#fff" />
          </span>
          <p>{quantity}</p>
          <span
            onClick={() => {
              increase(product);
            }}
          >
            <AiOutlinePlus color="#fff" />
          </span>
        </div>
      </div>
      <div className={style.endContainer}>
        <p>{formatCurrency(product?.price)}</p>

        <span>
          <AiOutlineDelete
            size={20}
            className={style.icon}
            onClick={() => {
              remove(product?.id);
            }}
          />
        </span>
      </div>
    </div>
  );
};

const CartPopOver = () => {
  const cartCtx = useCartContext();
  const [confirmDialogState, setConfirmDialogState] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  const closeConfirmDialog = () => {
    setConfirmDialogState(false);
  };

  const closePopOver = () => {
    setOpenPopover(false);
  };

  const togglePopover = () => {
    setOpenPopover((prev) => !prev);
  };

  const increaseItem = (product: IProduct) => {
    if (product) cartCtx.addProduct(product);
  };

  const decreaseItem = (id: number) => {
    cartCtx.decreaseQuantity(id);
  };

  const removeItem = (id: number) => {
    cartCtx.removeProduct(id);
  };

  const removeAll = () => {
    cartCtx.clearCart();
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button onClick={togglePopover} className={style.popOverBtn}>
            {cartCtx?.getTotalItems() > 0 && (
              <span>{cartCtx?.getTotalItems()}</span>
            )}

            <AiOutlineShopping size={35} className={style.shoppingCartIcon} />
          </Popover.Button>
          <Transition
            show={openPopover}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className={style.popOverPanel}>
              <div className={style.popOverPanelHeader}>
                <h2>Cart</h2>
                <Popover.Button onClick={closePopOver}>
                  <AiOutlineClose size={22} className={style.closeIcon} />
                </Popover.Button>
              </div>
              <div className={style.scrollViewContainer}>
                <div className={style.productsContainer}>
                  {cartCtx.cartItems?.map((product, index) => (
                    <CartItem
                      key={index}
                      product={product.product}
                      quantity={product?.quantity}
                      increase={increaseItem}
                      decrease={decreaseItem}
                      remove={removeItem}
                    />
                  ))}
                  {cartCtx.cartItems.length === 0 && (
                    <div className={style.cartEmptyContainer}>
                      <AiOutlineShoppingCart className={style.icon} size={50} />
                      <p>Your cart is empty</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={style.cartBottomContainer}>
                <div className={style.totalItems}>
                  <h2>Total Items :</h2>
                  <h2>{cartCtx?.getTotalItems()}</h2>
                </div>
                <div className={style.total}>
                  <h2>Total :</h2>
                  <h2>{formatCurrency(cartCtx?.getTotalPrice())}</h2>
                </div>
                <div className={style.bottomButtons}>
                  <Button
                    name="Checkout"
                    type="contained"
                    variant="primary"
                    disable={cartCtx?.cartItems.length === 0 ? true : false}
                  />
                </div>
                <div className={style.bottomButtons}>
                  <Button
                    name="Clear Cart"
                    variant="primary"
                    type="outlined"
                    disable={cartCtx?.cartItems.length === 0 ? true : false}
                    onClick={() => setConfirmDialogState(true)}
                  />
                </div>
              </div>
              <ConfirmDialog
                title="Clear Cart"
                body="All the items in your cart will be removed! Please confirm to proceed."
                isOpen={confirmDialogState}
                closeModal={closeConfirmDialog}
                confirm={removeAll}
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CartPopOver;
