import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as userActions from "../actions/users.action";
import * as selectors from "../selectors/user.selectors"
import { Observable } from 'rxjs';
import { Users } from './user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService,
    private store: Store<AppState>) { }
  usersData$: Array<Users>;
  isLoading$: Observable<boolean>;
  showUserData: boolean;
  ngOnInit() {

  }
  getAllUserData() {
    this.showUserData = true;
    this.store.dispatch(
      new userActions.getUsers()
    );
    this.isLoading$ = this.store.select(selectors.getapiCalledFlag);
    this.store.select(selectors.getUsers()).subscribe(allusers => {
      console.log("all users in component from selectors", allusers);
      this.usersData$ = allusers;
    })
  }
  getUserByid() {
    this.showUserData = false;
    this.usersData$ = []
    this.store.select(selectors.getUserbyId('4')).subscribe(user => {
      this.usersData$ = user;
    })
  }
}

