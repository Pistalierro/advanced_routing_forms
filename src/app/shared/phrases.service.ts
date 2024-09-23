import {Injectable} from '@angular/core';
import {Phrase} from './phrase';
import {PHRASES} from './mock-data';

const phrasesPromise: Promise<Phrase[]> = new Promise(resolve => {
  setTimeout(() => {
    resolve(PHRASES);
  }, 1000);
});

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  getAllPhrases(): Promise<Phrase[]> {
    return phrasesPromise;
  }

  getPhrase(id: number): Promise<Phrase | undefined> {
    return phrasesPromise.then(phrases => phrases.find(phrase => phrase.id === id));
  }
}
