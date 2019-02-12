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
        this.productService.all().subscribe(products => {
            if (filter === "") this.$products = products;
            else
                this.$products = products.filter(product =>
                    product.availableSizes.includes(filter)
                );
        });
    }
}
