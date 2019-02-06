"use strict";
exports.__esModule = true;
var ClientView = /** @class */ (function () {
    function ClientView() {
        this.clientView = document.getElementById('client-view');
        this.name = 'client';
    }
    ClientView.prototype.draw = function (products) {
        this.clientView.innerHTML = this.getRenderData(products);
    };
    ClientView.prototype.findProductIndex = function (productList, product) {
        var productIndex;
        productList.forEach(function (item, index) {
            if (product.getName() === item.getName() && product.getSold() === item.getSold() && product.getPrice() === item.getPrice()) {
                productIndex = index;
            }
        });
        return productIndex;
    };
    ClientView.prototype.generateHTMLElement = function (productList, product, index) {
        return "<div class=\"product-grid__product-wrapper\">\n                    <div class=\"product-grid__product\">\n                        <div class=\"product-grid__img-wrapper\">\n                            <img src=\"./finish_silver_large.jpg\"\n                                alt=\"Img\" class=\"product-grid__img\" />\n                        </div>\n                        <span class=\"product-grid__title\">" + product.getName() + "</span>\n                        <div class=\"info\">\n                        <span class=\"product-grid__btn product-grid__view\"><i class=\"fa fa-eye\"></i>Items Left : " + product.getinStock() + "</span>\n                        <span class=\"product-grid__price\">" + product.getPrice() + " Birr</span>\n                        </div>\n                        <div class=\"product-grid__extend-wrapper\">\n                            <div class=\"product-grid__extend\">\n                                <p class=\"product-grid__description\">" + product.getDescription() + "</p>\n                                <span onClick=\"buy(" + this.findProductIndex(productList, product) + ")\" id='" + product.getName() + "' class=\"product-grid__btn product-grid__add-to-cart\"><i class=\"fa fa-cart-arrow-down\"></i>\n                                    Buy Product</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>";
    };
    ClientView.prototype.getRenderData = function (productList) {
        var _this = this;
        var result = '';
        productList.forEach(function (item, index) {
            result += _this.generateHTMLElement(productList, item, index);
        });
        return result;
    };
    ClientView.prototype.getViewName = function () {
        return this.name;
    };
    return ClientView;
}());
exports.ClientView = ClientView;
