import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Phrase} from '../../shared/phrase';
import {AuthService} from '../../shared/auth.service';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CanComponentDeactivate} from '../../shared/canComponentDeactivate';

@Component({
  selector: 'app-phrase-details',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './phrase-details.component.html',
  styleUrl: './phrase-details.component.scss'
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {

  phrase!: Phrase;
  editValue!: string;
  editLanguage!: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.phrase = data['phrase'];
        this.editValue = this.phrase.value;
        this.editLanguage = this.phrase.language;
      },
      error: err => console.error(err)
    });
  }

  goToPhrasesList(phrase: Phrase): void {
    this.router.navigate(['../', {id: this.phrase.id}], {relativeTo: this.activatedRoute}).then();
  }

  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage);
  }

  save(): void {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }

  canDeactivate(): boolean {
    if (!this.isChanged()) return true;
    return confirm('Вы не сохранили изменения. \nДанные будут потеряны. \nПокинуть страницу в любом случае?');
  }
}
