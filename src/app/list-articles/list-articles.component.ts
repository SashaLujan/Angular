import { Component, OnInit } from '@angular/core';
import { DCcartService } from '../dccart.service';
//import { Module } from 'module';
import { Articulo } from './Articulo';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articulos: Articulo[] = [
    {
      name: "tarjeta para bautismo",
      price: 12,
      stock: 3,
      image: "",
      quantity: 0,
    },
    {
      name: "set de abanicos",
      price: 560,
      stock: 7,
      image: "",
      quantity: 0,
    },
    {
      name: "banderin",
      price: 280,
      stock: 12,
      image: "",
      quantity: 0,
    }
  ]

  constructor(private cart: DCcartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(articulo):void {
    if(articulo.quantity!=0){
      this.cart.addToCart(articulo);
      articulo.stock -=articulo.quantity;
      articulo.quantity = 0;
    }
  }

  maxReached(m:string){
    alert(m);
  }
}