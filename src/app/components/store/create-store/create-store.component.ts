import { Component, OnInit } from '@angular/core';

//Services
import { StoreService } from 'src/app/core/services/store.service';


@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
  }

  prepareProduct(event){
    let tags: Object = event.tags;
    let tagCollection: Array<String> = [];
    let body = event;
    for(let tag in tags){
      if(tags[tag] !== '' && !!tags[tag]){
        tagCollection.push(tag)
      }
    }

    body.tags = tagCollection;
    body['views'] = 0;

    this.submitProduct(body);
  };

  submitProduct(body: Object){
    this.store.uploadProduct(body).subscribe();
  };

}
