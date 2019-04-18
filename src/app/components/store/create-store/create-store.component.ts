import { Component, OnInit } from '@angular/core';

//Services
import { StoreService } from 'src/app/core/services/store.service';
import { Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';


@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitProduct(body: ProductModel){
    this.store.uploadProduct(body).subscribe(()=>{
      this.router.navigate(['/products']);
    });
  };

}
