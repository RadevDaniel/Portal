//Core Components
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Services
import { StoreService } from 'src/app/core/services/store.service';
//models
import UserModel from 'src/app/models/user.model';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input('detail') detail: ProductModel;
  @Input('user') user: UserModel;
  @Output('deleteUserEmitter') deleteUserEmitter = new EventEmitter<string>();
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    if(this.detail){
      const body = this.detail;
      body['views'] = body['views'] + 1;
      this.storeService.editProduct(body, body['_id']).subscribe();
    }
  };

  deleteProfile(id: string): void{
    this.deleteUserEmitter.emit(id)
  };

}
