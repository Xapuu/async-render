import { Component } from '@angular/core';
import { UserListModel } from './+store/models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$ = this.userListModel.users$;
  posts$ = this.userListModel.posts$;
  constructor(private userListModel: UserListModel) { }
}
