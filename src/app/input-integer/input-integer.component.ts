import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulo } from '../list-articles/articulo';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number; 

  @Input()
  maxAlcanzado: boolean;
  
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.maxAlcanzado = false;
  }

  upQuantity(): void {
    if (this.max > this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      //this.maxReached.emit("se alcanzó el máximo");
      this.maxAlcanzado=true;
    }
}

downQuantity(): void {
  if(this.quantity > 0){
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
}

onChangeQuantity(event){
  console.log(event);
  this.quantityChange.emit(this.quantity);
}
}