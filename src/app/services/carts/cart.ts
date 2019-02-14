import { Item } from "./Item";

// Cart Interface for the angular app.
export interface Cart {
    items: Item[];
    cart_sub_total: number;
    checkout: boolean;
}
