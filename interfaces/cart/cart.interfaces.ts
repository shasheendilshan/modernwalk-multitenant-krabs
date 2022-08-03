
import { IProduct } from './../products/products.interfaces';

export type cartItem = {
    product: IProduct;
    quantity: number;
  };

export interface ICartDetails{
    cartItems:cartItem[],
    totalItems: number,
    totalPrice: number,
}
  
