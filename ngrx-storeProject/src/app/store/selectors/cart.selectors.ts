import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "../reducer/cart.reducer";

export const selectCart = createFeatureSelector<State>('cart');

export const selectCartItems = createSelector(selectCart, (cart: State) => cart.items);

export const selectCartItemsPrice = createSelector(selectCartItems, (cartItems: any[]) => {
  return cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
});

export const selectCartItemsQuantity = createSelector(selectCartItems, (cartItems: any[]) => {
  return cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
});