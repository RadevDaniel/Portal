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
  isAdmin: boolean = false;
  isAuthor: boolean = false;
  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.isAuthor = this.authService.isAuthor(this.product['_acl']['creator']);
    console.log(this.isAuthor)
    this.isAdmin = this.authService.isAdmin;
  }

  deleteProduct(id: string){
    this.deleteProductEmitter.emit(id);
  }

}
