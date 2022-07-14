import { CartItem } from "src/app/core/models/cart-item.model";
import { AddItem, CartActions, CartActionTypes, RemoveAllOf, RemoveItem } from "../actions/cart.actions";

export interface Cart {
  items: CartItem[];
}

export interface State extends Cart { }

export const initialState: State = {
  items: [],
};

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {
    case CartActionTypes.AddItem:
      return handleAddItem(state, action);
    case CartActionTypes.RemoveItem:
      return handleRemoveItem(state, action);
    case CartActionTypes.RemoveAllOf:
      return handleRemoveAllOf(state, action);
    case CartActionTypes.RemoveAllItems:
      return initialState;
    default:
      return state;
  }
}

function handleAddItem(state: State, action: AddItem): State {
  console.log('handleAddItem', state, action);
  return {
    ...state,
    items: addCartItem(state.items, action.payload),
  };
}

function handleRemoveItem(state: State, action: RemoveItem): State {
  return {
    ...state,
    items: removeCartItem(state.items, action.payload),
  };
}

function handleRemoveAllOf(state: State, action: RemoveAllOf): State {
  return {
    ...state,
    items: state.items.filter(i => i.id !== action.payload),
  };
}

function addCartItem(items: CartItem[], payload: CartItem): CartItem[] {
  const item = items.find(i => i.id === payload.id);
  if (item) {
    return items.map(i => {
      if (i.id === payload.id) {
        return {
          ...i,
          quantity: i.quantity + 1,
        };
      }
      return i;
    });
  }

  return [...items, payload];
}

function removeCartItem(items: CartItem[], payload: CartItem): CartItem[] {
  const item = items.find(i => i.id === payload.id);
  if (item) {
    if (item.quantity > 1) {
      return items.map(i => {
        if (i.id === payload.id) {
          return {
            ...i,
            quantity: i.quantity - 1,
          };
        }
        return i;
      });
    }

    return items.filter(i => i.id !== payload.id);
  }

  return items;
}

