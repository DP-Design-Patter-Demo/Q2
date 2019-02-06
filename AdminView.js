"use strict";
exports.__esModule = true;
var AdminView = /** @class */ (function () {
    function AdminView() {
        this.adminView = document.getElementById('admin-view');
        this.name = 'admin';
    }
    AdminView.prototype.draw = function (products) {
        this.adminView.innerHTML = this.getRenderData(products);
    };
    AdminView.prototype.findProductIndex = function (productList, product) {
        var productIndex;
        productList.forEach(function (item, index) {
            if (product.getName() === item.getName() && product.getSold() === item.getSold() && product.getPrice() === item.getPrice()) {
                productIndex = index;
            }
        });
        return productIndex;
    };
    AdminView.prototype.generateHTMLElement = function (productList, product, index) {
        return "<div class=\"product-grid__product-wrapper\">\n                    <div class=\"product-grid__product\">\n                        <div class=\"product-grid__img-wrapper\">\n                            <img src=\"./finish_silver_large.jpg\"\n                                alt=\"Img\" class=\"product-grid__img\" />\n                        </div>\n                        <span class=\"product-grid__title\">" + product.getName() + "</span>\n                        <span class=\"product-grid__price\">" + product.getPrice() + " Birr</span>\n                        <div class=\"product-grid__extend-wrapper\">\n                            <div class=\"product-grid__extend\">\n                                <p class=\"product-grid__description\">" + product.getDescription() + "</p>\n                                <span id='" + (product.getName() + index) + "' class=\"product-grid__btn product-grid__add-to-cart\">\n                                <i class=\"fa fa-cart-arrow-down\"></i>\n                                    Items Sold: " + product.getSold() + "</span>\n                                <span class=\"product-grid__btn product-grid__view\"><i class=\"fa fa-eye\"></i>\n                                Items Left : " + product.getinStock() + "</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>";
    };
    AdminView.prototype.getRenderData = function (productList) {
        var _this = this;
        var result = '';
        productList.forEach(function (item, index) {
            result += _this.generateHTMLElement(productList, item, index);
        });
        return result;
    };
    AdminView.prototype.getViewName = function () {
        return this.name;
    };
    return AdminView;
}());
exports.AdminView = AdminView;
