import { Component, Output, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css']
})
export class FormStoreComponent implements OnChanges, OnInit {
  @Output() submitProductEmitter = new EventEmitter<Object>();
  @Output() updateProductEmitter = new EventEmitter<Object>();
  @Input('singleProduct') singleProduct: ProductModel;

  formStore;
  isPost: boolean = true;
  imagePattern: RegExp = /http([A-Za-z\:./\d_=+-])+/;

  price: number = null;
  name: string = '';
  image: string = '';
  description: string = '';
  electro: boolean = false;
  home: boolean = false;
  sport: boolean = false;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(){
    this.generateForm()
  };

  ngOnChanges() {
    if(this.singleProduct){
      this.isPost = false;
      this.name = this.singleProduct.name;
      this.price = +this.singleProduct.price;
      this.image = this.singleProduct.image;
      this.description = this.singleProduct.description;
      this.electro = this.singleProduct.tags.electro;
      this.home = this.singleProduct.tags.home;
      this.sport = this.singleProduct.tags.sport;

      this.generateForm();
    }
  };

  generateForm(): void{
    this.formStore = this.fb.group({
      name: [ this.name,[ Validators.required, Validators.minLength(5) ]],
      price: [ this.price,[ Validators.required, Validators.min(1) ]],
      image: [ this.image,[ Validators.required, Validators.pattern(this.imagePattern) ]],
      description: [ this.description,[ Validators.required, Validators.minLength(20) ]],
      tags: this.fb.group({
        electro: [this.electro],
        home: [this.home],
        sport: [this.sport]
      })
    })
  };


  get fValue(): ProductModel{
    return this.formStore.value;
  };

  get f(): object{
    return this.formStore.controls;
  };

  submitProduct(){
    let body: ProductModel = this.fValue;
    body['views'] = 0;

    this.submitProductEmitter.emit(body);
  };

  updateProduct(){
    let body: ProductModel = this.fValue;
    body['views'] = this.singleProduct.views;

    this.updateProductEmitter.emit(body);
  };

}
