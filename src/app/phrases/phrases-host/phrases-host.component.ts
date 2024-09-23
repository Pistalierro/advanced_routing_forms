import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-phrases-host',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './phrases-host.component.html',
  styleUrl: './phrases-host.component.scss'
})
export class PhrasesHostComponent {

}
