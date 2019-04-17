import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-users',
  templateUrl: './popular-users.component.html',
  styleUrls: ['./popular-users.component.css']
})
export class PopularUsersComponent {
  @Input() users: Object;
}
