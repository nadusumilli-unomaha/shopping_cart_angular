import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/services/products/product";
import { CartService } from "../../services/carts/cart.service";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
    @Input() products: Product[];
    @Output() addedCartItem = new EventEmitter();
    constructor(private cartService: CartService) {}

    ngOnInit() {}

    addToCart(item) {
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
