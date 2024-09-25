import {ResolveFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UsersService} from './users.service';
import {EditUser} from './edit-user';

export const userDetailsResolver: ResolveFn<EditUser | boolean> = (route): Promise<EditUser | boolean> => {
  const router = inject(Router);
  const userService = inject(UsersService);

  function emptyNavigate() {
    router.navigateByUrl('users').then();
  }

  const id = +route.params['id'];
  if (isNaN(id)) emptyNavigate();

  return userService.getUser(id)
    .then((user: EditUser | undefined) => {
      if (user) return user;
      return true;
    });

};
