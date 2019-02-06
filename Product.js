"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(name, description, price, inStock) {
        this.sold = 0;
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getinStock = function () {
        return this.inStock;
    };
    Product.prototype.getSold = function () {
        return this.sold;
    };
    Product.prototype.buy = function () {
        if (this.inStock > 0 && this.sold <= this.inStock) {
            --this.inStock;
            ++this.sold;
        }
    };
    return Product;
}());
exports.Product = Product;
