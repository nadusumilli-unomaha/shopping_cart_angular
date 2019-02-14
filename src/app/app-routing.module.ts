import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Creating the routes to be used in the app.
const routes: Routes = [
    {
        path: "",
        loadChildren: "./shopping-cart/shopping-cart.module#ShoppingCartModule"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
