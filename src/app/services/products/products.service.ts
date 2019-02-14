import { Product } from "./product";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// Pointing to the local server.
const BASE_URL = "http://localhost:3000/";

@Injectable({
    providedIn: "root"
})
export class ProductsService {
    model = "products";
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

    /** Function: getUrlWithId
     *  Arguments: id
     *  Defenition:
     *      appends the url with the id and returns it.
     *  Returns: urlWithId
     **/
    getUrlWithId(id): string {
        return `${this.getUrl()}/${id}`;
    }

    /** Function: all
     *  Arguments: None
     *  Defenition:
     *      Sends a get request to backend to fetch
     *      all the products.
     *  Returns: None
     **/
    all(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.getUrl());
    }

    /** Function: create
     *  Arguments: product - a new product
     *  Defenition:
     *      Sends a post request to the backend with
     *      the given product.
     *  Returns: None
     **/
    create(product): Observable<Product[]> {
        return this.httpClient.post<Product[]>(this.getUrl(), product);
    }

    /** Function: udpate
     *  Arguments: product - an updated product
     *  Defenition:
     *      Sends a patch request to backend
     *      with the given product.
     *  Returns: None
     **/
    udpate(product): Observable<Product[]> {
        return this.httpClient.patch<Product[]>(
            this.getUrlWithId(product.id),
            product
        );
    }

    /** Function: delete
     *  Arguments: id - the product id.
     *  Defenition:
     *      Sends a delete request to backend
     *      with the product id.
     *  Returns: None
     **/
    delete(id): Observable<Product[]> {
        return this.httpClient.delete<Product[]>(this.getUrlWithId(id));
    }
}
