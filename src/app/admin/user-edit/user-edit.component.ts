import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {EditUser} from '../../shared/edit-user';
import {FormsModule} from '@angular/forms';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {

  user: EditUser = new EditUser(1, null, null,);
  userRoles: string[] = ['Администратор', 'Модератор', 'Зарегистрирован', 'Не зарегистрирован'];

  editUserName!: string | null;
  editUserRole!: string | null;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.user = data['editUser'];
        this.editUserName = this.user.name;
        this.editUserRole = this.user.role;
      },
      error: err => console.error(err)
    });
  }

  goToUsersList(): void {
    this.router.navigate(['../', {id: this.user.id}], {relativeTo: this.activatedRoute}).then();
  }

  onSubmit() {
    console.log('Form Submitted');
  }

  isChanged(): boolean {
    return !(this.editUserName === this.user.name && this.editUserRole === this.user.role);
  }

  save() {
    this.user.name = this.editUserName;
    this.user.role = this.editUserRole;
  }
}
