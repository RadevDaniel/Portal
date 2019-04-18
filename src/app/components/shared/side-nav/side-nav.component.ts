import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
   @Input('navArticles$') navArticles$
   @Output() sideNavEventEmitter = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  
  }

  routeDetail(detail){
    this.sideNavEventEmitter.emit(detail)
  }

}
