import { View } from './View';
import { Product } from './Product';

export class ClientView implements View {
    clientView = document.getElementById('client-view');
    name = 'client';

    constructor() {
    }

    draw(products: Array<Product>) {
        this.clientView.innerHTML = this.getRenderData(products);
    }

    findProductIndex(productList: Array<Product>, product: Product) {
        let productIndex;
        productList.forEach((item, index) => {
            if (product.getName() === item.getName() && product.getSold() === item.getSold() && product.getPrice() === item.getPrice()) {
                productIndex = index;
            }
        });
        return productIndex;
    }

    generateHTMLElement(productList: Array<Product>, product: Product, index: number) {
        return `<div class="product-grid__product-wrapper">
                    <div class="product-grid__product">
                        <div class="product-grid__img-wrapper">
                            <img src="./finish_silver_large.jpg"
                                alt="Img" class="product-grid__img" />
                        </div>
                        <span class="product-grid__title">${product.getName()}</span>
                        <div class="info">
                        <span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i>Items Left : ${product.getinStock()}</span>
                        <span class="product-grid__price">${product.getPrice()} Birr</span>
                        </div>
                        <div class="product-grid__extend-wrapper">
                            <div class="product-grid__extend">
                                <p class="product-grid__description">${product.getDescription()}</p>
                                <span onClick="buy(${this.findProductIndex(productList, product)})" id='${product.getName()}' class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i>
                                    Buy Product</span>
                            </div>
                        </div>
                    </div>
                </div>`
    }

    getRenderData(productList: Array<Product>) {
        let result = '';
        productList.forEach((item, index) => {
            result += this.generateHTMLElement(productList, item, index);
        })
        return result;
    }

    getViewName() {
        return this.name;
    }
}
