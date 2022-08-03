
type Rating ={
    rate:number,
    count:number
}

export type productCategory= "men's clothing"|"women's clothing";

export enum productCategories{
    men="men's clothing",
    women="women's clothing"
};

export interface IProduct{
    id:number,
    title:string,
    price:number,
    description:string,
    category:productCategory,
    image:string,
    rating:Rating
}

export interface IProductsResponse{
    data:IProduct[],
    error:string| null
}

