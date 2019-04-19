import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
   @Input('navArticles$') navArticles$: Observable<ProductModel>
   @Input('userArticles$') userArticles$: Observable<UserModel>
   @Output() sideNavEventEmitter = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  
  }

  routeDetail(detail){
    this.sideNavEventEmitter.emit(detail)
  }

}
