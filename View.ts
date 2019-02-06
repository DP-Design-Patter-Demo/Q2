import { Product } from './Product';

export interface View {
    draw(products: Array<Product>);
    getViewName();
}