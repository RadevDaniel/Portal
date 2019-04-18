import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { Observable } from 'rxjs';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css'],

})
export class ListStoreComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.loadPosts();
  };

  loadPosts(): void {
    this.products$ = this.storeService.getAllProducts();
  };

  deleteProduct(id: string) {
    this.storeService.deleteProduct(id).subscribe(() => {
      this.loadPosts();
    })
  };

}
