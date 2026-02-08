import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormInput } from '../shared/ui/form-input/form-input';
import { FormButton } from '../shared/ui/form-button/form-button';

@Component({
  selector: 'app-login',
  imports: [FormInput, FormButton, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  dividerText: string = 'or';
  signupText: string = "Don't have an account?";
  signupLinkText: string = 'Sign up';
}
