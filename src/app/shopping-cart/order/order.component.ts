import {
    Component,
    OnInit,
    SimpleChanges,
    Input,
    Output,
    EventEmitter
} from "@angular/core";
import { Cart } from "../../services";

@Component({
    selector: "app-order",
    templateUrl: "./order.component.html",
    styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
    @Input() show: boolean;
    @Input() cart: Cart;
    @Output() hideModal = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.show && changes.show.currentValue === true) {
            document.getElementById("cart").style.width = "0px";
            document.getElementById("checkout-modal").style.display = "block";
        } else if (changes.show) {
            document.getElementById("checkout-modal").style.display = "none";
        }
    }
}
