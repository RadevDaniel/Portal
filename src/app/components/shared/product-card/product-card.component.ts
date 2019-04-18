import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ProductModel from 'src/app/models/product.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() deleteProductEmitter = new EventEmitter<string>();
  isAdmin: boolean;
  isAuthor: boolean;
  constructor(
    private outhService: AuthenticationService
  ) { }

  ngOnInit() {
    console.log(this.outhService.getPermission())
  }

  deleteProduct(id: string){
    this.deleteProductEmitter.emit(id);
  }

}
