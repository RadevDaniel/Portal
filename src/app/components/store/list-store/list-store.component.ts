import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent implements OnInit {
  products: Object[];
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
     this.storeService.getAllProducts().subscribe(
       (data) => {this.products = data; console.log(data)}
     );
  }

}
