import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginFormComponent} from './login-form/login-form.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
  {
    path: 'phrases',
    loadChildren: () => import('./phrases/phrases.module').then(m => m.PhrasesModule),
  }
];
