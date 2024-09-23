import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './phrases-list.component.html',
  styleUrl: './phrases-list.component.scss'
})
export class PhrasesListComponent {

}
