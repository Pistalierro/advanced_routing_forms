import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {UserLogin} from '../shared/user-login';
import {FORM_ERRORS, FORM_VALIDATION_MESSAGES} from '../shared/form-data';
import {NgIf} from '@angular/common';

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

  loginForm!: FormGroup;
  user: UserLogin = new UserLogin(1, null, null);

  constructor(private fb: FormBuilder) {
  }

  get form(): ValidationErrors {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.buildForm();
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

  private buildForm() {
    this.loginForm = this.fb.group({
      login: [this.user.login, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]]
    });
    this.loginForm.valueChanges.subscribe(() => this.onValueChanges());
  }
}
