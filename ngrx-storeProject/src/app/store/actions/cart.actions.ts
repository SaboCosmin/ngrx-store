import { Action } from "@ngrx/store";
import { CartItem } from "src/app/core/models/cart-item.model";

export enum CartActionTypes {
  AddItem = '[Cart] Add Item',
  RemoveItem = '[Cart] Remove Item',
  RemoveAllOf = '[Cart] Remove All Of',
  RemoveAllItems = '[Cart] Remove All Items',
}

export class AddItem implements Action {
  readonly type = CartActionTypes.AddItem;

  constructor(public payload: CartItem) { }
}

export class RemoveItem implements Action {
  readonly type = CartActionTypes.RemoveItem;

  constructor(public payload: CartItem) { }
}

export class RemoveAllOf implements Action {
  readonly type = CartActionTypes.RemoveAllOf;

  constructor(public payload: string) { }
}

export class RemoveAllItems implements Action {
  readonly type = CartActionTypes.RemoveAllItems;

  constructor() { }
}

export type CartActions = AddItem | RemoveItem | RemoveAllOf | RemoveAllItems;
