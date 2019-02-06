"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var database = [
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
var ViewAbstraction = /** @class */ (function () {
    function ViewAbstraction(view) {
        var _this = this;
        this.productList = [];
        this.view = view;
        database.forEach(function (x) {
            var newProduct = new Product_1.Product(x.name, x.description, x.price, x.inStock);
            _this.productList.push(newProduct);
        });
        this.sortBySale();
    }
    ViewAbstraction.prototype.draw = function () {
        this.view.draw(this.productList);
    };
    ViewAbstraction.prototype.setView = function (view) {
        this.view = view;
    };
    ViewAbstraction.prototype.addProduct = function (name, description, price, inStock) {
        var newProduct = new Product_1.Product(name, description, price, inStock);
        this.productList.push(newProduct);
        this.view.draw(this.productList);
        // this.setView();
    };
    ViewAbstraction.prototype.sortByName = function () {
        return this.productList.sort(this.sortByNameHelper);
    };
    ViewAbstraction.prototype.sortBySale = function () {
        return this.productList.sort(this.sortBySaleHelper);
    };
    ViewAbstraction.prototype.sortByPrice = function () {
        return this.productList.sort(this.sortByPriceHelper);
    };
    ViewAbstraction.prototype.sortByNameHelper = function (x, y) {
        return ((x.getName().toLowerCase() == y.getName().toLowerCase()) ? 0 : ((x.getName().toLowerCase() > y.getName().toLowerCase()) ? 1 : -1));
    };
    ViewAbstraction.prototype.sortBySaleHelper = function (x, y) {
        return ((x.getSold() == y.getSold()) ? 0 : ((x.getSold() > y.getSold()) ? 1 : -1));
    };
    ViewAbstraction.prototype.sortByPriceHelper = function (x, y) {
        return ((x.getPrice() == y.getPrice()) ? 0 : ((x.getPrice() > y.getPrice()) ? 1 : -1));
    };
    ViewAbstraction.prototype.makePurchase = function (productIndex) {
        this.productList[productIndex].buy();
        this.view.draw(this.productList);
    };
    return ViewAbstraction;
}());
exports.ViewAbstraction = ViewAbstraction;
