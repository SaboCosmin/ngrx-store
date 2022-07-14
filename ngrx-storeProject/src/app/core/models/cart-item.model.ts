import { ShopItems } from "./shop-items.model";

export interface CartItem extends ShopItems{
    quantity: number;
}