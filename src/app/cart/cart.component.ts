import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../list-articles/Articulo';
import { DCcartService } from '../dccart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  
  cartList$: Observable<Articulo[]>;
//  totalPrice: number;
  
  constructor(private cart: DCcartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
  
/*  getTotalPrice(): void {
    for(let articulo of this.cartList$){
      this.totalPrice += articulo.price;
    }
  }
*/  
  ngOnInit(): void {
  }

}