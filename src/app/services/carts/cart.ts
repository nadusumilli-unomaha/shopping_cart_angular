import { Item } from "./Item";
export interface Cart {
    items: Item[];
    cart_sub_total: number;
    checkout: boolean;
}
