import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Phrase} from '../../shared/phrase';

@Component({
  selector: 'app-phrase-details',
  standalone: true,
  imports: [],
  templateUrl: './phrase-details.component.html',
  styleUrl: './phrase-details.component.scss'
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.phrase = data['phrase'];
      },
      error: err => console.error(err)
    });
  }

  goToPhrasesList(phrase: Phrase): void {
    this.router.navigate(['../', {id: this.phrase.id}], {relativeTo: this.activatedRoute}).then();
  }

}
