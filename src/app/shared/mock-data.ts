import {Phrase} from './phrase';
import {EditUser} from './edit-user';

export const PHRASES: Phrase[] = [
  new Phrase(1, 'Привіт Світ', 'Ukrainian'),
  new Phrase(2, 'Hello world', 'English'),
  new Phrase(3, 'Hola Mundo', 'Spain'),
  new Phrase(4, 'Bonjour monde', 'French'),
  new Phrase(5, 'Hallo Welt', 'German'),
  new Phrase(6, 'Ciao mondo', 'Italian'),
  new Phrase(7, 'Witaj świecie', 'Polish'),
  new Phrase(8, 'Hej världen', 'Swedish'),
  new Phrase(9, 'Pozdravljen', 'Slovenian'),
];

export const USERS: EditUser[] = [
  new EditUser(1, 'Oliver Francis', 'Администратор'),
  new EditUser(2, 'Michael Mills', 'Модератор'),
  new EditUser(3, 'Paul McDaniel', 'Зарегистрирован'),
  new EditUser(4, 'William Harris', 'Зарегистрирован'),
  new EditUser(5, 'Jonathan Matthews', 'Не зарегистрирован'),
];
