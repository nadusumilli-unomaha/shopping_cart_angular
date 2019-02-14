import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { CartService } from "../../services/carts/cart.service";
import { Cart } from "../../services/carts/cart";

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
    @Input() cart: Cart;
    @Output() deletedCartItem = new EventEmitter();
    @Output() updatedCartItem = new EventEmitter();
    @Output() cartCleared = new EventEmitter();
    constructor(private cartService: CartService) {}

    ngOnInit() {}

    openCart() {
        document.getElementById("cart").style.width = "300px";
    }

    closeCart() {
        document.getElementById("cart").style.width = "0px";
    }
}
