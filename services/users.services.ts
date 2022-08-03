import {post,get} from './api.services';
import {v4 as uuid} from "uuid";

import { IUser } from "@interfaces/users/users.interfaces";
import { config } from './config.services';
import { IResponse } from '@interfaces/global/global.interface';



export const createUser=async(user:IUser)=>{
     const body:IUser={
         id:uuid(),
         ...user
     }   
    try {
         const data = await post(`${config.baseUrl}/users`,body);
         const Response:IResponse ={
             data:data.data,
             error:null,
             status:data.status
         }
         return Response;
    } catch (error:any) {
        console.log("error while user create",error.message)
        const Response:IResponse ={
            data:[],
            error:error
           
        }   
        return Response;
    }
}

export const getUser =async(user:IUser)=>{
  
   try {
        const data = await get(`${config.baseUrl}/users?email=${user.email}&password=${user.password}`);
        const Response:IResponse ={
            data:data.data,
            error:null,
            status:data.status
        }
        return Response;
   } catch (error:any) {
    console.log("error while get user",error.message)
       const Response:IResponse ={
        data:[],
        error:error
        
       
    }
    return Response;
   }
}