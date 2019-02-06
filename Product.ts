export class Product {
    name: string;
    description: string;
    price: number
    inStock: number
    sold: number = 0;
    constructor(name: string, description: string, price: number, inStock: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;

    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }

    getinStock() {
        return this.inStock;
    }

    getSold() {
        return this.sold;
    }
    buy() {
        if (this.inStock > 0 && this.sold <= this.inStock) {
            --this.inStock;
            ++this.sold;

        }
    }
}