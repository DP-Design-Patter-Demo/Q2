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
var ViewAbstraction = /** @class */ (function () {
    function ViewAbstraction(view) {
        var _this = this;
        this.productList = [];
        this.view = view;
        database.forEach(function (x) {
            var newProduct = new Product(x.name, x.description, x.price, x.inStock);
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
        var newProduct = new Product(name, description, price, inStock);
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
var BridgePattern = /** @class */ (function () {
    function BridgePattern() {
        this.clientViewContainer = document.getElementById('client-container');
        this.adminViewContainer = document.getElementById('admin-container');
        this.clientView = new ClientView();
        this.adminView = new AdminView();
        this.itemRecord = new ViewAbstraction(this.clientView);
        this.itemRecord.draw();
        this.toggleView('client');
    }
    BridgePattern.prototype.getView = function () {
        return this.displayed;
    };
    BridgePattern.prototype.draw = function () {
        this.itemRecord.draw();
    };
    BridgePattern.prototype.toggleView = function (viewName) {
        if (viewName == 'client') {
            this.adminViewContainer.style.display = 'none';
            this.clientViewContainer.style.display = 'flex';
            this.itemRecord.setView(this.clientView);
            this.itemRecord.draw();
        }
        else {
            this.clientViewContainer.style.display = 'none';
            this.adminViewContainer.style.display = 'flex';
            this.itemRecord.setView(this.adminView);
            this.itemRecord.draw();
        }
    };
    return BridgePattern;
}());
