// class Product {
//     name: string;
//     description: string;
//     price: number
//     inStock: number
//     sold: number = 0;
//     constructor(name: string, description: string, price: number, inStock: number) {
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.inStock = inStock;

//     }

//     getName() {
//         return this.name;
//     }

//     getDescription() {
//         return this.description;
//     }

//     getPrice() {
//         return this.price;
//     }

//     getinStock() {
//         return this.inStock;
//     }

//     getSold() {
//         return this.sold;
//     }
//     buy() {
//         if (this.inStock > 0 && this.sold <= this.inStock) {
//             --this.inStock;
//             ++this.sold;

//         }
//     }
// }

// const database = [
//     {
//         name: 'qItem 4',
//         price: 0,
//         description: 'item 4',
//         inStock: 2
//     },
//     {
//         name: 'Item 1',
//         price: 50,
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque oditLorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit',
//         inStock: 2
//     },
//     {
//         name: 'bItem 2',
//         price: 2000,
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit',
//         inStock: 2
//     },
//     {
//         name: 'Product title',
//         price: 200,
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit',
//         inStock: 2
//     },
// ]

// interface View {
//     draw(products: Array<Product>);
//     getViewName();
// }

// class ClientView implements View {
//     clientView = document.getElementById('client-view');
//     name = 'client';

//     constructor() {
//     }

//     draw(products: Array<Product>) {
//         this.clientView.innerHTML = this.getRenderData(products);
//     }

//     findProductIndex(productList: Array<Product>, product: Product) {
//         let productIndex;
//         productList.forEach((item, index) => {
//             if (product.getName() === item.getName() && product.getSold() === item.getSold() && product.getPrice() === item.getPrice()) {
//                 productIndex = index;
//             }
//         });
//         return productIndex;
//     }

//     generateHTMLElement(productList: Array<Product>, product: Product, index: number) {
//         return `<div class="product-grid__product-wrapper">
//                     <div class="product-grid__product">
//                         <div class="product-grid__img-wrapper">
//                             <img src="./finish_silver_large.jpg"
//                                 alt="Img" class="product-grid__img" />
//                         </div>
//                         <span class="product-grid__title">${product.getName()}</span>
//                         <div class="info">
//                         <span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i>Items Left : ${product.getinStock()}</span>
//                         <span class="product-grid__price">${product.getPrice()} Birr</span>
//                         </div>
//                         <div class="product-grid__extend-wrapper">
//                             <div class="product-grid__extend">
//                                 <p class="product-grid__description">${product.getDescription()}</p>
//                                 <span onClick="buy(${this.findProductIndex(productList, product)})" id='${product.getName()}' class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i>
//                                     Buy Product</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//     }

//     getRenderData(productList: Array<Product>) {
//         let result = '';
//         productList.forEach((item, index) => {
//             result += this.generateHTMLElement(productList, item, index);
//         })
//         return result;
//     }

//     getViewName() {
//         return this.name;
//     }
// }

// class AdminView implements View {
//     adminView = document.getElementById('admin-view');
//     name = 'admin';
//     constructor() {
//     }

//     draw(products: Array<Product>) {
//         this.adminView.innerHTML = this.getRenderData(products);
//     }

//     findProductIndex(productList: Array<Product>, product: Product) {
//         let productIndex;
//         productList.forEach((item, index) => {
//             if (product.getName() === item.getName() && product.getSold() === item.getSold() && product.getPrice() === item.getPrice()) {
//                 productIndex = index;
//             }
//         });
//         return productIndex;
//     }

//     generateHTMLElement(productList: Array<Product>, product: Product, index: number) {
//         return `<div class="product-grid__product-wrapper">
//                     <div class="product-grid__product">
//                         <div class="product-grid__img-wrapper">
//                             <img src="./finish_silver_large.jpg"
//                                 alt="Img" class="product-grid__img" />
//                         </div>
//                         <span class="product-grid__title">${product.getName()}</span>
//                         <span class="product-grid__price">${product.getPrice()} Birr</span>
//                         <div class="product-grid__extend-wrapper">
//                             <div class="product-grid__extend">
//                                 <p class="product-grid__description">${product.getDescription()}</p>
//                                 <span id='${product.getName() + index}' class="product-grid__btn product-grid__add-to-cart">
//                                 <i class="fa fa-cart-arrow-down"></i>
//                                     Items Sold: ${product.getSold()}</span>
//                                 <span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i>
//                                 Items Left : ${product.getinStock()}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//     }

//     getRenderData(productList: Array<Product>) {
//         let result = '';
//         productList.forEach((item, index) => {
//             result += this.generateHTMLElement(productList, item, index);
//         })
//         return result;
//     }

//     getViewName() {
//         return this.name;
//     }
// }

// class ViewAbstraction {
//     view: View;
//     productList: Array<Product> = [];



//     constructor(view: View) {
//         this.view = view;
//         database.forEach(x => {
//             let newProduct = new Product(x.name, x.description, x.price, x.inStock);
//             this.productList.push(newProduct);
//         })
//         this.sortBySale();
//     }

//     draw() {
//         this.view.draw(this.productList);


//     }

//     setView(view: View) {
//         this.view = view;
//     }

//     addProduct(name: string, description: string, price: number, inStock: number) {
//         let newProduct = new Product(name, description, price, inStock);
//         this.productList.push(newProduct);

//         this.view.draw(this.productList);
//         // this.setView();
//     }

//     sortByName() {
//         return this.productList.sort(this.sortByNameHelper);
//     }

//     sortBySale() {
//         return this.productList.sort(this.sortBySaleHelper);
//     }

//     sortByPrice() {
//         return this.productList.sort(this.sortByPriceHelper);
//     }

//     sortByNameHelper(x, y) {
//         return ((x.getName().toLowerCase() == y.getName().toLowerCase()) ? 0 : ((x.getName().toLowerCase() > y.getName().toLowerCase()) ? 1 : -1));
//     }

//     sortBySaleHelper(x, y) {
//         return ((x.getSold() == y.getSold()) ? 0 : ((x.getSold() > y.getSold()) ? 1 : -1));
//     }

//     sortByPriceHelper(x, y) {
//         return ((x.getPrice() == y.getPrice()) ? 0 : ((x.getPrice() > y.getPrice()) ? 1 : -1));
//     }

//     makePurchase(productIndex) {
//         this.productList[productIndex].buy();
//         this.view.draw(this.productList);
//     }


// }

// class Main {
//     clientViewContainer = document.getElementById('client-container');
//     adminViewContainer = document.getElementById('admin-container');


//     itemRecord: ViewAbstraction;
//     displayed: View;
//     clientView: View;
//     adminView: View;
//     constructor() {
//         this.clientView = new ClientView();
//         this.adminView = new AdminView();
//         this.itemRecord = new ViewAbstraction(this.clientView);
//         this.itemRecord.draw();

//         this.toggleView('client');

//     }

//     getView() {
//         return this.displayed;
//     }
//     draw() {
//         this.itemRecord.draw();
//     }
//     toggleView(viewName) {
//         if (viewName == 'client') {
//             this.adminViewContainer.style.display = 'none';
//             this.clientViewContainer.style.display = 'flex';

//             this.itemRecord.setView(this.clientView);
//             this.itemRecord.draw();

//         } else {
//             this.clientViewContainer.style.display = 'none';
//             this.adminViewContainer.style.display = 'flex';

//             this.itemRecord.setView(this.adminView);
//             this.itemRecord.draw();
//         }
//     }


// }
// class OtherMain {
//     productList: Array<Product> = [];

//     clientView = document.getElementById('client-view');
//     adminView = document.getElementById('admin-view');

//     clientViewContainer = document.getElementById('client-container');
//     adminViewContainer = document.getElementById('admin-container');

//     constructor() {
//         database.forEach(x => {
//             let newProduct = new Product(x.name, x.description, x.price, x.inStock);
//             this.productList.push(newProduct);
//         })
//         this.sortBySale();
//         this.toggleView('admin');
//         this.setView();
//     }

//     addProduct(name: string, description: string, price: number, inStock: number) {
//         let newProduct = new Product(name, description, price, inStock);
//         this.productList.push(newProduct);

//         this.setView();
//     }

//     sortByName() {
//         return this.productList.sort(this.sortByNameHelper);
//     }

//     sortBySale() {
//         return this.productList.sort(this.sortBySaleHelper);
//     }

//     sortByPrice() {
//         return this.productList.sort(this.sortByPriceHelper);
//     }

//     sortByNameHelper(x, y) {
//         return ((x.getName().toLowerCase() == y.getName().toLowerCase()) ? 0 : ((x.getName().toLowerCase() > y.getName().toLowerCase()) ? 1 : -1));
//     }

//     sortBySaleHelper(x, y) {
//         return ((x.getSold() == y.getSold()) ? 0 : ((x.getSold() > y.getSold()) ? 1 : -1));
//     }

//     sortByPriceHelper(x, y) {
//         return ((x.getPrice() == y.getPrice()) ? 0 : ((x.getPrice() > y.getPrice()) ? 1 : -1));
//     }

//     makePurchase(productIndex) {
//         this.productList[productIndex].buy();
//         this.setView();
//     }

//     //
//     toggleView(view) {
//         if (view == 'client') {
//             this.adminViewContainer.style.display = 'none';
//             this.clientViewContainer.style.display = 'flex';

//         } else {
//             console.log('here')
//             this.clientViewContainer.style.display = 'none';
//             this.adminViewContainer.style.display = 'flex';
//         }
//     }

//     setView() {
//         this.clientView.innerHTML = this.getClientView();
//         this.adminView.innerHTML = this.getAdminView();
//     }

//     //
//     getClientView() {
//         let result = '';
//         this.productList.forEach((x, index) => {
//             result += this.generateClientHTMLElement(x, index);
//         })
//         return result;
//     }

//     //
//     getAdminView() {
//         let result = '';
//         this.productList.forEach((x, index) => {
//             result += this.generateAdminHTMLElement(x, index);
//         })
//         return result;
//     }

//     findProductIndex(product) {
//         let productIndex;
//         this.productList.forEach((item, index) => {
//             if (product.getName() === item.getName() && product.getSold() === item.getSold() && product.getPrice() === item.getPrice()) {
//                 productIndex = index;
//             }
//         });
//         return productIndex;
//     }

//     //
//     generateClientHTMLElement(product: Product, index: number) {
//         return `<div class="product-grid__product-wrapper">
//                     <div class="product-grid__product">
//                         <div class="product-grid__img-wrapper">
//                             <img src="./finish_silver_large.jpg"
//                                 alt="Img" class="product-grid__img" />
//                         </div>
//                         <span class="product-grid__title">${product.getName()}</span>
//                         <div class="info">
//                         <span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i>Items Left : ${product.getinStock()}</span>
//                         <span class="product-grid__price">${product.getPrice()} Birr</span>
//                         </div>
//                         <div class="product-grid__extend-wrapper">
//                             <div class="product-grid__extend">
//                                 <p class="product-grid__description">${product.getDescription()}</p>
//                                 <span onClick="buy(${this.findProductIndex(product)})" id='${product.getName() + index}' class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i>
//                                     Buy Product</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//     }

//     //
//     generateAdminHTMLElement(product: Product, index: number) {
//         return `<div class="product-grid__product-wrapper">
//                     <div class="product-grid__product">
//                         <div class="product-grid__img-wrapper">
//                             <img src="./finish_silver_large.jpg"
//                                 alt="Img" class="product-grid__img" />
//                         </div>
//                         <span class="product-grid__title">${product.getName()}</span>
//                         <span class="product-grid__price">${product.getPrice()} Birr</span>
//                         <div class="product-grid__extend-wrapper">
//                             <div class="product-grid__extend">
//                                 <p class="product-grid__description">${product.getDescription()}</p>
//                                 <span id='${product.getName() + index}' class="product-grid__btn product-grid__add-to-cart">
//                                 <i class="fa fa-cart-arrow-down"></i>
//                                     Items Sold: ${product.getSold()}</span>
//                                 <span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i>
//                                 Items Left : ${product.getinStock()}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//     }


// }

// // new OtherMain();
// // new Main();