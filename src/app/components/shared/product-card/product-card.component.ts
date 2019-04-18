import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() deleteProductEmitter = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  deleteProduct(id: string){
    this.deleteProductEmitter.emit(id);
  }

}
