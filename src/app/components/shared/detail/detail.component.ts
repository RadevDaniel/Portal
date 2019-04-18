import { Component, OnInit, Input } from '@angular/core';
import ProductModel from 'src/app/models/product.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input('detail') detail: ProductModel;
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    const body = this.detail;
    body['views'] = body['views'] + 1;
    this.storeService.editProduct(body, body['_id']).subscribe();
  };

}
