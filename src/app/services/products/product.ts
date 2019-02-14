// Product Interface for the angular app.
export interface Product {
    id: number;
    sku: number;
    title: string;
    description: string;
    availableSizes: Array<String>;
    style: string;
    price: number;
    installments: number;
    currencyId: string;
    currencyFormat: string;
    isFreeShipping: boolean;
    image: string;
}
