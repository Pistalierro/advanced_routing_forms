import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {phrasesRoutes} from './phrases.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(phrasesRoutes),
  ]
})
export class PhrasesModule {
}
