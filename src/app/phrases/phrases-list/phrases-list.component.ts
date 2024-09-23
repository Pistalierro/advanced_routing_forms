import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {Phrase} from '../../shared/phrase';
import {PhrasesService} from '../../shared/phrases.service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-phrases-list',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor
  ],
  templateUrl: './phrases-list.component.html',
  styleUrl: './phrases-list.component.scss'
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID!: number;

  constructor(private phrasesService: PhrasesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.selectedID = +params['id'];

        this.phrasesService.getAllPhrases().then(phrases => this.phrases = phrases);
      },
    });
  }

  onSelect(phrase: Phrase) {
    this.router.navigate([phrase.id], {relativeTo: this.activatedRoute}).then();
  }
}
