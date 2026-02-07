import { Component } from '@angular/core';
import { FormInput } from '../shared/ui/form-input/form-input';
import { FormButton } from '../shared/ui/form-button/form-button';

@Component({
  selector: 'app-register',
  imports: [FormInput, FormButton],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
