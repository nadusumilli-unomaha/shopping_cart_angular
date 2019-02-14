import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShoppingCartRoutingModule } from "./shopping-cart-routing.module";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingFiltersComponent } from "./shopping-filters/shopping-filters.component";
import { CartComponent } from "./cart/cart.component";
import { CartService, ProductsService } from "../services";
import { OrderComponent } from './order/order.component';

@NgModule({
    declarations: [
        ShoppingCartComponent,
        ShoppingListComponent,
        ShoppingFiltersComponent,
        CartComponent,
        OrderComponent
    ],
    imports: [CommonModule, ShoppingCartRoutingModule],
    providers: [CartService, ProductsService]
})
export class ShoppingCartModule {}
