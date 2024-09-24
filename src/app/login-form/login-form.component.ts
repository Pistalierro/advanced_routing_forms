import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {UserLogin} from '../shared/user-login';
import {FORM_ERRORS, FORM_VALIDATION_MESSAGES} from '../shared/form-data';
import {NgIf} from '@angular/common';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {

  formErrors: any = FORM_ERRORS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;
  formSuccess = 'Принято!';

  loginMessage!: string;

  loginForm!: FormGroup;
  user: UserLogin = new UserLogin(1, 'admin', '12345');

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              private router: Router,) {
  }

  get form(): ValidationErrors {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.setMessage();
    this.buildForm();
  }

  login() {
    this.setMessage('Trying to login...');
    this.authService.login(this.loginForm.controls['login'].value, this.loginForm.controls['password'].value).subscribe({
      next: params => {
        this.setMessage();
        if (!this.authService.isLoggedIn) return;
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'admin';
        return this.router.navigate([redirect]).then();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  onValueChanges(): void {
    const form = this.loginForm;

    Object.keys(this.formErrors).forEach(field => {
      const control = this.loginForm.get(field);
      this.formErrors[field] = '';

      if ((control?.dirty || control?.touched) && control.invalid) {
        const messages = this.validationMessages[field];

        Object.keys(control.errors as ValidationErrors).some(key => this.formErrors[field] = messages[key]);
      }
    });
  }

  onSubmit(): void {
    console.log('Form submitted');
  }

  private setMessage(msg: string = '') {
    if (msg) {
      this.loginMessage = msg;
      return;
    }
    this.loginMessage = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      login: [this.user.login, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]]
    });
    this.loginForm.valueChanges.subscribe(() => this.onValueChanges());
  }
}
