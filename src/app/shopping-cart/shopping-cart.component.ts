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
        this.getProducts();
        this.getCart();
    }

    onShowModal(show) {
        this.$showModal = true;
    }

    onHideModal(show) {
        this.$showModal = false;
    }

    getProducts(): void {
        this.productService
            .all()
            .subscribe(products => (this.$products = products));
    }

    getCart(): void {
        this.cartService.all().subscribe(cart => (this.$cart = cart));
    }

    clearCart(): void {
        this.cartService.delete().subscribe(cart => (this.$cart = cart));
    }

    deleteCartItem(item: Item): void {
        this.cartService
            .udpate({ item, remove: true })
            .subscribe(cart => (this.$cart = cart));
    }

    updateCartItem(item: Item): void {
        this.cartService
            .udpate({ item, remove: false })
            .subscribe(cart => (this.$cart = cart));
    }

    addCartItem(item: Item): void {
        if (this.$cart.items.findIndex(Fitem => Fitem.id === item.id) === -1)
            this.cartService
                .create(item)
                .subscribe(cart => (this.$cart = cart));
        else
            this.cartService
                .udpate({ item, remove: false })
                .subscribe(cart => (this.$cart = cart));
    }

    filterByPrice(event): void {
        let filterValue = event.target.value;
        if (filterValue === "low_to_high") {
            this.$products.sort((a, b) => a.price - b.price);
        } else if (filterValue === "high_to_low") {
            this.$products.sort((a, b) => a.price - b.price);
            this.$products.reverse();
        }
    }

    filterBySize(filter: string): void {
        if (filter === "") this.getProducts();
        else {
            this.$products = this.$products.filter(product =>
                product.availableSizes.includes(filter)
            );
        }
    }
}
