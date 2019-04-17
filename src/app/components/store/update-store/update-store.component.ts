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
  post: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.storeService.getProductById(id);
      // .subscribe((data) => {
      //   this.post = data;
      // });
  }

  editPost() {
    const body = this.editPostForm.value;
    body['author'] = localStorage.getItem('username');

    this.storeService.editProduct(body, this.post['_id']);
      // .subscribe(() => {
      //   this.router.navigate([ '/posts' ]);
      // })
  }

}
