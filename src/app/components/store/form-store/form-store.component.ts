import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css']
})
export class FormStoreComponent implements OnInit {
  @ViewChild('formStore') formStore: NgForm;
  @Output() submitProductEmitter = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  submitProduct(){
    this.submitProductEmitter.emit(this.formStore.value);
    console.log(this.formStore)
  }

}
