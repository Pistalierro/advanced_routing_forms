import {Routes} from '@angular/router';
import {PhrasesListComponent} from './phrases-list/phrases-list.component';
import {PhraseDetailsComponent} from './phrase-details/phrase-details.component';
import {PhrasesHostComponent} from './phrases-host/phrases-host.component';

export const phrasesRoutes: Routes = [
  {
    path: '', component: PhrasesHostComponent,
    children: [
      {
        path: '', component: PhrasesListComponent,
        children: [
          {path: ':id', component: PhraseDetailsComponent}
        ]
      },
    ]
  }
];
