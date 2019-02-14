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

    /** Function: addToCart
     *  Arguments: product - a product from the app.
     *  Defenition:
     *      Emits an event to the parent component with
     *      an item to add to cart.
     *  Returns: None
     **/
    addToCart(product: Product): void {
        let cart_item = {
            id: product.id,
            price: product.price,
            title: product.title,
            image: product.image,
            quantity: 1
        };
        this.addedCartItem.emit(cart_item);
    }
}
