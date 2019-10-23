import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[USER LIST] Load Users'
);
export const loadUsersCancel = createAction(
  '[USER LIST] Load Users Cancel'
);
export const loadUsersSuccess = createAction(
  '[USER LIST] Load Users Success',
  (users: any[]) => ({ payload: { users } })
);
export const loadUsersFailure = createAction(
  '[USER LIST] Load Users Failure',
  (error: Error) => ({ payload: { error } })
);


export const loadUserPosts = createAction(
  '[USER LIST] Load User Posts'
);
export const loadUserPostsCancel = createAction(
  '[USER LIST] Load User Posts Cancel'
);
export const loadUserPostsSuccess = createAction(
  '[USER LIST] Load User Posts Success',
  (posts: any[]) => ({ payload: { posts } })
);
export const loadUserPostsFailure = createAction(
  '[USER LIST] Load User Posts Failure',
  (error: Error) => ({ payload: { error } })
);
