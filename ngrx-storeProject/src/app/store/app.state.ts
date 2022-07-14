import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromCart from "./reducer/cart.reducer";

export interface State {
    cart: fromCart.State;
}

export const reducers: ActionReducerMap<State, any> = {
    cart: fromCart.reducer
};

export const metaReducers: MetaReducer<State>[] = [];
