import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from './list-articles/Articulo';
/**
 * Maneja la lista de compras
 */
@Injectable({
  providedIn: 'root'
})
export class DCcartService {

  private _cartList: Articulo[] = [];
  cartList: BehaviorSubject <Articulo[]> = new BehaviorSubject([]);
  //private _totalPrice: number; 
  /**tuve toda la intencón de mostrar un "total de compra" al final del carrito
  *pero el observable es el cartList y está tipado, y I gave up
  */
  
  constructor() { }

  addToCart(articulo: Articulo) {
    let item: Articulo = this._cartList.find((v1) => v1.name == articulo.name);
    if(!item){
      articulo.price = articulo.price * articulo.quantity;
      this._cartList.push({... articulo});
      articulo.price = articulo.price / articulo.quantity;
      /**
       * Ya sé que lo anterior(líneas 21 y 23) está feo pero lo intenté hacer poniendo la línea 
       * 30 por fuera del if y el else y directamente no me lo carga en el carrito
       */
    }else{
      item.quantity += articulo.quantity;
      item.price += articulo.price * articulo.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}