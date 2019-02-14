import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Cart } from "../../services";

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
    constructor() {}

    ngOnInit() {}

    openCart(): void {
        document.getElementById("cart").style.width = "300px";
    }

    closeCart(): void {
        document.getElementById("cart").style.width = "0px";
    }
}
