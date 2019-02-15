import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [NavbarComponent, AppComponent],
    imports: [HttpClientModule, BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
    exports: [NavbarComponent]
})
export class AppModule {}
