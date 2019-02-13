import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const BASE_URL = "http://localhost:3000/";

@Injectable({
    providedIn: "root"
})
export class CartService {
    model = "cart";
    constructor(private httpClient: HttpClient) {}

    getUrl() {
        return `${BASE_URL}${this.model}`;
    }

    all() {
        return this.httpClient.get(this.getUrl());
    }

    create(item) {
        console.log(item);
        return this.httpClient.post(this.getUrl(), item).toPromise();
    }

    udpate(item) {
        return this.httpClient.patch(this.getUrl(), item);
    }

    delete() {
        return this.httpClient.delete(this.getUrl());
    }
}
