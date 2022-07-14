import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/app.state';
import { selectCartItems, selectCartItemsQuantity, selectCartItemsPrice } from 'src/app/store/selectors/cart.selectors';
import * as cartActions from 'src/app/store/actions/cart.actions';
import { shareReplay, startWith } from 'rxjs';


@Component({
  selector: '',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems$ = this.store.select(selectCartItems).pipe(shareReplay(), startWith([]));
  public cartItemsQuantity$ = this.store.select(selectCartItemsQuantity);
  public cartItemsPrice$ = this.store.select(selectCartItemsPrice);

  constructor(private store: Store<State>) { }

  ngOnInit(): void { }

  public emptyCart(): void {
    this.store.dispatch(new cartActions.RemoveAllItems());
  }

}
