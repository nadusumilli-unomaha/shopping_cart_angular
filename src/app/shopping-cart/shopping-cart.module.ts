import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingFiltersComponent } from './shopping-filters/shopping-filters.component';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingListComponent, ShoppingFiltersComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
