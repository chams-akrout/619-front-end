import { Category } from './category';

export class Product
{
    public constructor
    (
      public id?:number ,
      public name?: string,
      public category?: Category,
      public factory?: string,
      public image?: string,
      public point?: number
    ){}

}
