import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
  styleUrls: ['./detail-store.component.css']
})
export class DetailStoreComponent implements OnInit {
  @ViewChild("outlet", {read: ViewContainerRef}) outletRef: ViewContainerRef;
  @ViewChild("content", {read: TemplateRef}) contentRef: TemplateRef<any>;
  
  product: ProductModel;
  products$: Observable<ProductModel[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    const data = this.route.snapshot.data['productR'];
    console.log(data)
    
    this.products$ = this.storeService.getAllProducts();
    this.product = data;
  };


  ngAfterContentInit() {
    this.outletRef.createEmbeddedView(this.contentRef);
  };

  private rerender() {
    this.outletRef.clear();
    this.outletRef.createEmbeddedView(this.contentRef);
  };

  reloadContent(event){
    if(this.route.snapshot.params['id'] == event['_id']) return;
    this.router.navigate([`products/detail/${event._id}`]);
    this.product = event;
    this.rerender();
  };

}
