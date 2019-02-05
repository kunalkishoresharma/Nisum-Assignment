export interface IProduct{
    groups?:Array<IGroups>    
}
export interface IGroups{
    id:string,
    name:string,
    links:string,
    priceRange:number,
    thumbnail:string,
    hero:string,
    images:string,
    flags:string,
    reviews:string,

}