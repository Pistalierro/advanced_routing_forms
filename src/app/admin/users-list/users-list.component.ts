import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {UsersService} from '../../shared/users.service';
import {EditUser} from '../../shared/edit-user';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  users!: EditUser[];

  constructor(private router: Router,
              private usersService: UsersService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: params => {
        const id = +params['id'];
        this.usersService.getAllUsers().then(users => this.users = users);
      },
      error: err => console.error(err)
    });
  }

  onSelect(user: EditUser) {
    this.router.navigate([user.id], {relativeTo: this.activatedRoute}).then();
  }
}
