
export interface IResponseError{
    code:string,
    message:string,
    name:string,
    request:()=>void,
    response:()=>void
}


export interface IResponse{
 data:any,
 error:IResponseError|null,
 status?:string|number
}

export interface IValidationProps{
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
}
