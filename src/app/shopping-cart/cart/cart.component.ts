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
    @Output() showModal = new EventEmitter();
    constructor() {}

    ngOnInit() {}

    /** Function: openCart
     *  Arguments: None
     *  Defenition:
     *      Opening the cart by adding width to element
     *      on click.
     *  Returns: None
     **/
    openCart(): void {
        document.getElementById("cart").style.width = "300px";
    }

    /** Function: openCart
     *  Arguments: None
     *  Defenition:
     *      Opening the cart by removing width to element
     *      on click.
     *  Returns: None
     **/
    closeCart(): void {
        document.getElementById("cart").style.width = "0px";
    }
}
