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

    getUrl(): string {
        return `${BASE_URL}${this.model}`;
    }

    getUrlWithId(id): string {
        return `${this.getUrl()}/${id}`;
    }

    all(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.getUrl());
    }

    create(product): Observable<Product[]> {
        return this.httpClient.post<Product[]>(this.getUrl(), product);
    }

    udpate(product): Observable<Product[]> {
        return this.httpClient.patch<Product[]>(
            this.getUrlWithId(product.id),
            product
        );
    }

    delete(productId): Observable<Product[]> {
        return this.httpClient.delete<Product[]>(this.getUrlWithId(productId));
    }
}
