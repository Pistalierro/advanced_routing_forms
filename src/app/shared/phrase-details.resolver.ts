import {ResolveFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {PhrasesService} from './phrases.service';
import {Phrase} from './phrase';

export const phraseDetailsResolver: ResolveFn<Phrase | boolean> = (route): Promise<Phrase | boolean> => {
  const router = inject(Router);
  const phrasesService = inject(PhrasesService);

  function emptyNavigate() {
    router.navigateByUrl('phrases').then();
  }

  const id = +route.params['id'];

  if (isNaN(id)) emptyNavigate();

  return phrasesService.getPhrase(id)
    .then((phrase: Phrase | undefined) => {
      if (phrase) return phrase;

      emptyNavigate();
      return false;
    });
};
