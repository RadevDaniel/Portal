import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { NgForm } from '@angular/forms';
/**
 * 
 * 
 * 
 * MOVE TO LIST PRODUCTS
 */
@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
  @ViewChild('formStore') editPostForm: NgForm;
  product: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    //CREATE RESOLVER?
    const id = this.route.snapshot.params['id'];
    this.storeService.getProductById(id)
      .subscribe((data) => {
        this.product = data;
      });
  };

  editPost(event) {
    this.storeService.editProduct(event, this.product['_id']).subscribe(() => {
        this.router.navigate([ '/products' ]);
    });
  };

}
