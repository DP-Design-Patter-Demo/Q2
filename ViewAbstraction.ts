import { View } from './View';
import { Product } from './Product';

const database = [
    {
        name: 'qItem 4',
        price: 0,
        description: 'item 4',
        inStock: 2
    },
    {
        name: 'Item 1',
        price: 50,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque oditLorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit',
        inStock: 2
    },
    {
        name: 'bItem 2',
        price: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit',
        inStock: 2
    },
    {
        name: 'Product title',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit',
        inStock: 2
    },
];

export class ViewAbstraction {
    view: View;
    productList: Array<Product> = [];



    constructor(view: View) {
        this.view = view;
        database.forEach(x => {
            let newProduct = new Product(x.name, x.description, x.price, x.inStock);
            this.productList.push(newProduct);
        })
        this.sortBySale();
    }

    draw() {
        this.view.draw(this.productList);


    }

    setView(view: View) {
        this.view = view;
    }

    addProduct(name: string, description: string, price: number, inStock: number) {
        let newProduct = new Product(name, description, price, inStock);
        this.productList.push(newProduct);

        this.view.draw(this.productList);
        // this.setView();
    }

    sortByName() {
        return this.productList.sort(this.sortByNameHelper);
    }

    sortBySale() {
        return this.productList.sort(this.sortBySaleHelper);
    }

    sortByPrice() {
        return this.productList.sort(this.sortByPriceHelper);
    }

    sortByNameHelper(x, y) {
        return ((x.getName().toLowerCase() == y.getName().toLowerCase()) ? 0 : ((x.getName().toLowerCase() > y.getName().toLowerCase()) ? 1 : -1));
    }

    sortBySaleHelper(x, y) {
        return ((x.getSold() == y.getSold()) ? 0 : ((x.getSold() > y.getSold()) ? 1 : -1));
    }

    sortByPriceHelper(x, y) {
        return ((x.getPrice() == y.getPrice()) ? 0 : ((x.getPrice() > y.getPrice()) ? 1 : -1));
    }

    makePurchase(productIndex) {
        this.productList[productIndex].buy();
        this.view.draw(this.productList);
    }


}