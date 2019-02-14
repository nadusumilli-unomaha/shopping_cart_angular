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

    getUrl(): string {
        return `${BASE_URL}${this.model}`;
    }

    all(): Observable<Cart> {
        return this.httpClient.get<Cart>(this.getUrl());
    }

    create(item): Observable<Cart> {
        return this.httpClient.post<Cart>(this.getUrl(), item);
    }

    udpate(item): Observable<Cart> {
        return this.httpClient.patch<Cart>(this.getUrl(), item);
    }

    delete(): Observable<Cart> {
        return this.httpClient.delete<Cart>(this.getUrl());
    }
}
