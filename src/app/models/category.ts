import { Product } from './product';

export class Category
{
    public constructor
    (
        public id?: number,
        public name?: string,
        public products?:Product[]
    ){}

}
