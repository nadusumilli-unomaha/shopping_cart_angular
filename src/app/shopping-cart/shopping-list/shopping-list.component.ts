import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../services";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
    @Input() products: Product[];
    @Output() addedCartItem = new EventEmitter();
    constructor() {}

    ngOnInit() {}

    addToCart(item: Product): void {
        let cart_item = {
            id: item.id,
            price: item.price,
            title: item.title,
            image: item.image,
            quantity: 1
        };
        this.addedCartItem.emit(cart_item);
    }
}
