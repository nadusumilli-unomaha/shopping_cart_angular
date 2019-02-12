import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const BASE_URL = "http://localhost:3000/";
@Injectable({
    providedIn: "root"
})
export class ProductsService {
    model = "products";
    constructor(private httpClient: HttpClient) {}

    getUrl() {
        return `${BASE_URL}${this.model}`;
    }

    getUrlWithId(id) {
        return `${this.getUrl()}/${id}`;
    }

    all() {
        return this.httpClient.get(this.getUrl());
    }

    create(product) {
        return this.httpClient.post(this.getUrl(), product);
    }

    udpate(product) {
        return this.httpClient.patch(this.getUrlWithId(product.id), product);
    }

    delete(productId) {
        return this.httpClient.delete(this.getUrlWithId(productId));
    }
}
