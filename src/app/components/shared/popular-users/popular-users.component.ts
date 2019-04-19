import { Component, Input } from '@angular/core';

//Models
import UserModel from 'src/app/models/user.model';

@Component({
  selector: 'app-popular-users',
  templateUrl: './popular-users.component.html',
  styleUrls: ['./popular-users.component.css']
})
export class PopularUsersComponent {
  @Input() user: UserModel;
}
