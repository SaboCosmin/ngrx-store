import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShopItems } from 'src/app/core/models/shop-items.model';
import * as cartActions from 'src/app/store/actions/cart.actions';
import { State } from 'src/app/store/app.state';

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public itemList: ShopItems[];

  constructor(private router: Router, private store: Store<State>) {
    this.itemList = [
      { id: '1', name: 'Item 1', price: 1 },
      { id: '2', name: 'Item 2', price: 2 },
      { id: '3', name: 'Item 3', price: 3 },
      { id: '4', name: 'Item 4', price: 4 },
      { id: '5', name: 'Item 5', price: 5 },
      { id: '6', name: 'Item 6', price: 6 },
    ]
  }

  ngOnInit(): void { }

  public addItem(item: ShopItems): void {
    this.store.dispatch(new cartActions.AddItem({ id: item.id, name: item.name, price: item.price, quantity: 1 }));
  }

  public removeItem(item: ShopItems): void {
    this.store.dispatch(new cartActions.RemoveItem({ id: item.id, name: item.name, price: item.price, quantity: 1 }));
  }

  public removeAll(item: ShopItems) {
    this.store.dispatch(new cartActions.RemoveAllOf(item.id));
  }

  public goToCart() {
    this.router.navigate(['/cart']);
  }
}
