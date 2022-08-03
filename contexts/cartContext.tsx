import React, { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";

import { IProduct } from "@interfaces/products/products.interfaces";
import {
  getCartFromLocalStorage,
  setCartInLocalStorage,
} from "@utils/localStorage";
import { cartItem } from "@interfaces/cart/cart.interfaces";
import { removeCartFromLocalStorage } from "@utils/localStorage";

type Props = {
  children: React.ReactNode;
};

interface ICartContext {
  show: boolean;
  showCart: () => void;
  hideCart: () => void;
  addProduct: (product: IProduct) => void;
  addProductToCart: (product: IProduct, quantity: number) => void;
  decreaseQuantity: (id: number) => void;
  removeProduct: (id: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
  cartItems: cartItem[];
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext({} as ICartContext);

const CartProvider = ({ children }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const getCart = () => {
      const cartDetails = getCartFromLocalStorage();
      if (cartDetails) {
        setCartItems(cartDetails?.cartItems);
        setTotalItems(cartDetails?.totalItems);
        setTotalPrice(cartDetails?.totalPrice);
      }
    };
    getCart();
  }, []);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };

  const getTotalItems = () => {
    var count = 0;
    cartItems.forEach((prod) => {
      count = count + prod.quantity;
    });
    return count;
  };

  const getTotalPrice = () => {
    var total = 0;
    cartItems.forEach((prod) => {
      total = total + prod.product.price * prod.quantity;
    });
    return total;
  };

  const clearCart = () => {
    setCartItems([]);
    removeCartFromLocalStorage();
    toast.success("Clear Cart successfully !");
  };

  const addProduct = (product: IProduct) => {
    if (cartItems.find((item) => item.product.id === product.id) == null) {
      const items = [...cartItems, { product: product, quantity: 1 }];
      setCartItems(items);
      setTotalItems((prev) => prev + 1);
      setTotalPrice((prev) => prev + product.price);

      const cart = {
        cartItems: items,
        totalItems: getTotalItems(),
        totalPrice: totalPrice,
      };
      setCartInLocalStorage(cart);

      toast.success("Product added to the cart.");
      console.log("cart", cart);
    } else {
      const increaseQuantityIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      cartItems[increaseQuantityIndex].quantity++;
      setTotalItems((prev) => prev + 1);
      setTotalPrice((prev) => prev + product.price);

      const cart = {
        cartItems: cartItems,
        totalItems: totalItems,
        totalPrice: totalPrice,
      };
      setCartInLocalStorage(cart);
      console.log("increase quantity");
    }
  };
  const decreaseQuantity = (id: number) => {
    const decreaseQuantityIndex = cartItems.findIndex(
      (item) => item.product.id === id
    );

    const foundProduct = cartItems[decreaseQuantityIndex];

    if (foundProduct.quantity > 1) {
      foundProduct.quantity--;
      setTotalItems((prev) => prev - 1);
      setTotalPrice((prev) => prev - foundProduct.product.price);
      const cart = {
        cartItems: cartItems,
        totalItems: totalItems,
        totalPrice: totalPrice,
      };
      setCartInLocalStorage(cart);
      console.log("cart items decrease");
    }
  };

  const removeProduct = (id: number) => {
    const removedItemIndex = cartItems.findIndex(
      (item) => item.product.id === id
    );
    const removeItem = cartItems[removedItemIndex];

    const newCartItems = cartItems.filter((item) => item.product.id !== id);

    setCartItems(newCartItems);
    setTotalItems((prev) => prev - removeItem.quantity);
    setTotalPrice(
      (prev) => prev - removeItem.product.price * removeItem.quantity
    );
    const cart = {
      cartItems: newCartItems,
      totalItems: totalItems,
      totalPrice: totalPrice,
    };
    setCartInLocalStorage(cart);
    console.log("remove item", cartItems);
  };

  //new

  const addProductToCart = (product: IProduct, quantity: number) => {
    if (cartItems.find((item) => item.product.id === product.id) == null) {
      const items = [...cartItems, { product: product, quantity: quantity }];
      setCartItems(items);
      setTotalItems((prev) => prev + 1);
      setTotalPrice((prev) => prev + product.price);

      const cart = {
        cartItems: items,
        totalItems: getTotalItems(),
        totalPrice: totalPrice,
      };
      setCartInLocalStorage(cart);

      toast.success("Product added to the cart.");
      console.log("cart", cart);
    } else {
      const increaseQuantityIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      cartItems[increaseQuantityIndex].quantity =
        cartItems[increaseQuantityIndex].quantity + quantity;
      setTotalItems((prev) => prev + 1);
      setTotalPrice((prev) => prev + product.price);

      const cart = {
        cartItems: cartItems,
        totalItems: totalItems,
        totalPrice: totalPrice,
      };
      setCartInLocalStorage(cart);
      console.log("increase quantity");
    }
  };

  // const data = useMemo(() => {
  //   return {
  //     show,
  //     showCart,
  //     hideCart,
  //     cartItems,
  //     addProduct,
  //     addProductToCart,
  //     decreaseQuantity,
  //     removeProduct,
  //     getTotalItems,
  //     getTotalPrice,
  //     clearCart,
  //     totalItems,
  //     totalPrice,
  //   };
  // }, [
  //   show,
  //   cartItems,
  //   totalItems,
  //   totalPrice,
  //   addProduct,
  //   addProductToCart,
  //   decreaseQuantity,
  //   getTotalItems,
  //   getTotalPrice,
  // ]);

  const data = {
    show,
    showCart,
    hideCart,
    cartItems,
    addProduct,
    addProductToCart,
    decreaseQuantity,
    removeProduct,
    getTotalItems,
    getTotalPrice,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

export { CartProvider, useCartContext };
