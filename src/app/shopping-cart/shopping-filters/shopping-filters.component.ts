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

    sizeSelected(event) {
        console.log(event.target.value);
        this.selectedSize =
            this.selectedSize === event.target.value ? "" : event.target.value;
        this.filterBySize.emit(this.selectedSize);
    }

    isSize(value) {
        if (this.selectedSize === value) return true;
        else return false;
    }
}
