import { ProductsService } from "./../services/products/products.service";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../services/products/product";

@Component({
    selector: "app-shopping-cart",
    templateUrl: "./shopping-cart.component.html",
    styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
    $products;
    getproducts() {
        this.productService
            .all()
            .subscribe(products => (this.$products = products));
    }
    constructor(private productService: ProductsService) {}

    ngOnInit() {
        this.getproducts();
    }
}
