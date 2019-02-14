import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-shopping-filters",
    templateUrl: "./shopping-filters.component.html",
    styleUrls: ["./shopping-filters.component.scss"]
})
export class ShoppingFiltersComponent implements OnInit {
    @Output() filterByPrice = new EventEmitter();
    @Output() filterBySize = new EventEmitter();
    selectedSize;

    constructor() {}

    ngOnInit() {}

    /** Function: sizeSelected
     *  Arguments: event - event that triggered this call.
     *  Defenition:
     *      if a size is selected from the filters sends a
     *      request to the parent component to filter the
     *      products with the selected size else it restores
     *      the the filters.
     *  Returns: None
     **/
    sizeSelected(event): void {
        this.selectedSize =
            this.selectedSize === event.target.value ? "" : event.target.value;
        this.filterBySize.emit(this.selectedSize);
    }

    /** Function: isSize
     *  Arguments: product - a product from the app.
     *  Defenition:
     *      Emits an event to the parent component with
     *      an item to add to cart.
     *  Returns: Boolean
     **/
    isSize(value: string): boolean {
        if (this.selectedSize === value) return true;
        else return false;
    }
}
