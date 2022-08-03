import  axios  from 'axios';

import { config } from './config.services';
import { errorToast } from '@components/Toast/Toast.component';
import { IResponseError } from '@interfaces/global/global.interface';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = config.baseUrl;



const get =(url:string)=>axiosClient.get(url)
.then((res:any)=>{return res})
.catch((error:IResponseError)=>{
    errorToast(error.message);
    //return error;
})
const post =(url:string,body:object)=>axiosClient.post(url,body)
.then((res:any)=>{return res})
.catch((error:IResponseError)=>{
    errorToast(error.message);
    //return error;
})

export {get,post}
