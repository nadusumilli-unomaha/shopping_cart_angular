import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "./cart";

const BASE_URL = "http://localhost:3000/";

@Injectable({
    providedIn: "root"
})
export class CartService {
    model = "cart";
    constructor(private httpClient: HttpClient) {}

    /** Function: getUrl
     *  Arguments: None
     *  Defenition:
     *      Appends the model url to the base url and
     *      returns it.
     *  Returns: url
     **/
    getUrl(): string {
        return `${BASE_URL}${this.model}`;
    }

    /** Function: all
     *  Arguments: None
     *  Defenition:
     *      Sends a get request to backend to fetch
     *      the cart.
     *  Returns: None
     **/
    all(): Observable<Cart> {
        return this.httpClient.get<Cart>(this.getUrl());
    }

    /** Function: create
     *  Arguments: item - a new item
     *  Defenition:
     *      Sends a post request to the backend with
     *      the given item to add to cart.
     *  Returns: None
     **/
    create(item): Observable<Cart> {
        return this.httpClient.post<Cart>(this.getUrl(), item);
    }

    /** Function: update
     *  Arguments: item - an updated item
     *  Defenition:
     *      Sends a patch request to backend
     *      with the given item to update the cart.
     *  Returns: None
     **/
    udpate(item): Observable<Cart> {
        return this.httpClient.patch<Cart>(this.getUrl(), item);
    }

    /** Function: delete
     *  Arguments: None
     *  Defenition:
     *      Sends a delete request to backend
     *      to reset the cart.
     *  Returns: None
     **/
    delete(): Observable<Cart> {
        return this.httpClient.delete<Cart>(this.getUrl());
    }
}
