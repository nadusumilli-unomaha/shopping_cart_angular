import { ProductsService } from "./../services/products/products.service";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../services/products/product";
import { CartService } from "../services/carts/cart.service";

@Component({
    selector: "app-shopping-cart",
    templateUrl: "./shopping-cart.component.html",
    styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
    $products;
    $cart;
    getProducts() {
        this.productService
            .all()
            .subscribe(products => (this.$products = products));
    }

    getCart() {
        this.cartService.all().subscribe(cart => (this.$cart = cart));
    }

    deleteCart() {
        this.cartService.all().subscribe(cart => (this.$cart = cart));
    }

    updateCart(item) {
        this.cartService.udpate(item).subscribe(cart => (this.$cart = cart));
    }

    createCart(item) {
        this.cartService.udpate(item).subscribe(cart => (this.$cart = cart));
    }

    constructor(
        private productService: ProductsService,
        private cartService: CartService
    ) {}

    ngOnInit() {
        this.getProducts();
        this.getCart();
    }

    filterByPrice(event) {
        let filterValue = event.target.value;
        if (filterValue === "low_to_high") {
            this.$products.sort((a, b) => a.price - b.price);
        } else if (filterValue === "high_to_low") {
            this.$products.sort((a, b) => a.price - b.price);
            this.$products.reverse();
        }
    }

    filterBySize(filter) {
        if (filter === "") this.getProducts();
        else {
            this.$products = this.$products.filter(product =>
                product.availableSizes.includes(filter)
            );
        }
    }
}
