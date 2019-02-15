import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShoppingCartComponent } from "./shopping-cart.component";
import { readFileSync, writeFileSync } from "fs";

describe("ShoppingCartComponent", () => {
    // let db: Object = readFileSync("../../../server/db.json", "UTF-8");
    let component: ShoppingCartComponent;
    let fixture: ComponentFixture<ShoppingCartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppingCartComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShoppingCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    // it("should get projects", () => {
    //     let products = component.getProducts();
    //     fixture.detectChanges();
    //     // expect(products).toBe(db);
    // });
});
