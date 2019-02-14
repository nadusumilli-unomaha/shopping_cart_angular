import { Component, OnInit } from "@angular/core";
import { CartService, ProductsService, Product, Cart, Item } from "../services";

@Component({
    selector: "app-shopping-cart",
    templateUrl: "./shopping-cart.component.html",
    styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
    $products: Product[];
    $cart: Cart;
    $showModal: boolean = false;

    constructor(
        private productService: ProductsService,
        private cartService: CartService
    ) {}

    ngOnInit() {
        // on app init get all products and the cart.
        this.getProducts();
        this.getCart();
    }

    /** Function: onShowModal
     *  Arguments: show - value to show or hide modal
     *  Defenition:
     *      Stores the value to showModal variable.
     *  Returns: None
     **/
    onShowModal(show) {
        this.$showModal = show;
    }

    /** Function: onHideModal
     *  Arguments: show - value to show or hide modal
     *  Defenition:
     *      Stores the value to showModal variable.
     *  Returns: None
     **/
    onHideModal(show) {
        this.$showModal = show;
    }

    /** Function: getProducts
     *  Arguments: None
     *  Defenition:
     *      Sends a request to get all items from the
     *      backend.
     *  Returns: None
     **/
    getProducts(): void {
        this.productService
            .all()
            .subscribe(products => (this.$products = products));
    }

    /** Function: getCart
     *  Arguments: None
     *  Defenition:
     *      Sends a request to get the cart from the
     *      backend.
     *  Returns: None
     **/
    getCart(): void {
        this.cartService.all().subscribe(cart => (this.$cart = cart));
    }

    /** Function: clearCart
     *  Arguments: None
     *  Defenition:
     *      Resets the cart to its original state.
     *  Returns: None
     **/
    clearCart(): void {
        this.cartService.delete().subscribe(cart => (this.$cart = cart));
    }

    /** Function: deleteCartItem
     *  Arguments: Item - Item to add to cart.
     *  Defenition:
     *      If there is only one item in cart and the minus
     *      button event is triggered it removes the item
     *      from the cart.
     *  Returns: None
     **/
    deleteCartItem(item: Item): void {
        this.updateCartItem(item, true);
    }

    /** Function: updateCartItem
     *  Arguments: Item - Item to add to cart.
     *  Defenition:
     *      Updates the item quantity in cart
     *      for the given item.
     *  Returns: None
     **/
    updateCartItem(item: Item, remove: boolean): void {
        this.cartService
            .udpate({ item, remove })
            .subscribe(cart => (this.$cart = cart));
    }

    /** Function: addCartItem
     *  Arguments: Item - Item to add to cart.
     *  Defenition:
     *      Checks if the item already exists in cart and
     *      if it does it updates the cart else creates a
     *      new item in the cart.
     *  Returns: None
     **/
    addCartItem(item: Item): void {
        if (this.$cart.items.findIndex(Fitem => Fitem.id === item.id) === -1)
            this.cartService
                .create(item)
                .subscribe(cart => (this.$cart = cart));
        else this.updateCartItem(item, false);
    }

    /** Function: filterByPrice
     *  Arguments: event - event that triggered the function.
     *  Defenition:
     *      Sorts the products by price based on the option
     *      selected from the input in html.
     *  Returns: None
     **/
    filterByPrice(event): void {
        let filterValue = event.target.value;
        if (filterValue === "low_to_high") {
            this.$products.sort((a, b) => a.price - b.price);
        } else if (filterValue === "high_to_low") {
            this.$products.sort((a, b) => a.price - b.price);
            this.$products.reverse();
        }
    }

    /** Function: filterBySize
     *  Arguments: filter - size to filter the products
     *  Defenition:
     *      filters the products in the app by the given
     *      value.
     *  Returns: None
     **/
    filterBySize(filter: string): void {
        if (filter === "") this.getProducts();
        else {
            this.$products = this.$products.filter(product =>
                product.availableSizes.includes(filter)
            );
        }
    }
}
