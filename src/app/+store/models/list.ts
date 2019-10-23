import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadUsers,
  loadUserPosts,
  loadUsersSuccess,
  loadUserPostsSuccess,
  loadUsersFailure,
  loadUserPostsFailure,
  loadUsersCancel,
  loadUserPostsCancel
} from '../actions/list';
import { IUserState } from '../reducers';
import { getUserListStateUsers, getUserListStatePosts } from '../selectors';
import { Actions, ofType } from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class UserListModel {
  users$ = this.store.select(getUserListStateUsers);
  posts$ = this.store.select(getUserListStatePosts);
  userLoadSuccess$ = this.actions$.pipe(ofType(loadUsersSuccess));
  userLoadFailure$ = this.actions$.pipe(ofType(loadUsersFailure));
  userPostsLoadSuccess$ = this.actions$.pipe(ofType(loadUserPostsSuccess));
  userPostsLoadFailure$ = this.actions$.pipe(ofType(loadUserPostsFailure));

  constructor(private store: Store<IUserState>, private actions$: Actions) { }

  loadUsers = () => {
    this.store.dispatch(loadUsers());
  }

  loadUserPosts = () => {
    this.store.dispatch(loadUserPosts());
  }

  cancelLoadUsers = () => {
    this.store.dispatch(loadUsersCancel());
  }

  cancelLoadUserPosts = () => {
    this.store.dispatch(loadUserPostsCancel());
  }
}