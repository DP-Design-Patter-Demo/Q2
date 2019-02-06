import { View } from './View';
import { Product } from './Product';

export class AdminView implements View {
    adminView = document.getElementById('admin-view');
    name = 'admin';
    constructor() {
    }

    draw(products: Array<Product>) {
        this.adminView.innerHTML = this.getRenderData(products);
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
                        <span class="product-grid__price">${product.getPrice()} Birr</span>
                        <div class="product-grid__extend-wrapper">
                            <div class="product-grid__extend">
                                <p class="product-grid__description">${product.getDescription()}</p>
                                <span id='${product.getName() + index}' class="product-grid__btn product-grid__add-to-cart">
                                <i class="fa fa-cart-arrow-down"></i>
                                    Items Sold: ${product.getSold()}</span>
                                <span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i>
                                Items Left : ${product.getinStock()}</span>
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
