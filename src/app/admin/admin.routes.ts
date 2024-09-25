import {Routes} from '@angular/router';
import {AdminHostComponent} from './admin-host/admin-host.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {canActivateGuard} from '../shared/can-activate.guard';
import {userDetailsResolver} from '../shared/user-details.resolver';
import {canDeactivateGuard} from '../shared/can-deactivate.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminHostComponent,
    canActivate: [canActivateGuard],
    children: [
      {
        path: '',
        component: UsersListComponent,
        children: [
          {
            path: ':id', component: UserEditComponent,
            resolve: {
              editUser: userDetailsResolver
            },
            canDeactivate: [canDeactivateGuard]
          }
        ]
      }
    ]
  }
];
