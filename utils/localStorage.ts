
import { IUser } from '../interfaces/users/users.interfaces';
import { ICartDetails } from "../interfaces/cart/cart.interfaces";


// user details

export const setUserInLocalStorage =(user:IUser)=>{
   localStorage.setItem('userDetails',JSON.stringify(user));
}

export const getUserFromLocalStorage =()=>{
   const user:string|null= localStorage.getItem('userDetails');
  
   if(user){
        const userDetails:IUser = JSON.parse(user);
    return userDetails;
   }else{
       return null;
   }
   
 }
 export const removeUserFromLocalStorage =()=>{
    localStorage.removeItem('userDetails');
 }

 // login remember me

 export const setRememberMe =(user:IUser)=>{
   localStorage.setItem('loginDetails',JSON.stringify(user));
}

export const getRememberMeDetails =()=>{
   const user:string|null= localStorage.getItem('loginDetails');
  
   if(user){
        const userDetails:IUser = JSON.parse(user);
    return userDetails;
   }else{
       return null;
   }
   
 }
 export const removeRememberMeDetails =()=>{
   localStorage.removeItem('loginDetails');
}

//cart details
export const setCartInLocalStorage =(cartDetails:ICartDetails)=>{
   localStorage.setItem('cartDetails',JSON.stringify(cartDetails));
}

export const getCartFromLocalStorage =()=>{
   const cart:string|null= localStorage.getItem('cartDetails');
  
   if(cart){
        const cartDetails:ICartDetails= JSON.parse(cart);
    return cartDetails;
   }else{
       return null;
   }
   
 }

export const removeCartFromLocalStorage =()=>{
   localStorage.removeItem('cartDetails');
}


//tenant details
export const setTenantInLocalStorage =(id:string)=>{
   localStorage.setItem('TenantID',JSON.stringify(id));
}

export const getTenantFromLocalStorage =()=>{
   const tenant:string|null= localStorage.getItem('TenantID');
  
   if(tenant){
        const tenantDetails= JSON.parse(tenant);
    return tenantDetails;
   }else{
       return null;
   }
   
 }

export const removeTenantFromLocalStorage =()=>{
   localStorage.removeItem('TenantID');
}

