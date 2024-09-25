import {Injectable} from '@angular/core';
import {USERS} from './mock-data';
import {EditUser} from './edit-user';

const usersPromise: Promise<EditUser[]> = new Promise(resolve => {
  setTimeout(() => {
    resolve(USERS);
  }, 1000);
});

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getAllUsers(): Promise<EditUser[]> {
    return usersPromise;
  }

  getUser(id: number): Promise<EditUser | undefined> {
    return usersPromise.then(users => users.find(user => user.id === id));
  }
}
