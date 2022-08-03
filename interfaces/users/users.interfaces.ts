export interface IUser{
  id?:string,
  firstName?:string,
  lastName?:string,
  email?:string,
  password?:string

}

export interface IUserContext{
 
  user:IUser|null,
  setUserDetails:(user:IUser)=>void,
  removeUserDetails:()=>void

}

export interface IUserCreateResponse{
  
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string

}