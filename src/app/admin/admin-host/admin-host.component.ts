import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-host',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-host.component.html',
  styleUrl: './admin-host.component.scss'
})
export class AdminHostComponent {

}
