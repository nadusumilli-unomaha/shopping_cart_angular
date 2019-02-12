import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/services/products/product";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
    @Input() products: Product[];
    constructor() {}

    ngOnInit() {}
}
