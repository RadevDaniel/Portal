import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-users',
  templateUrl: './popular-users.component.html',
  styleUrls: ['./popular-users.component.css']
})
export class PopularUsersComponent implements OnInit {
  @Input() users: Object;
  constructor() { }

  ngOnInit() {
  }

}
