import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  imports: [],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
})
export class FormInput {
  @Input() enableLabel!: boolean;
  @Input() labelText!: string;
  @Input() maxLength!: number;
  @Input() placeholderText: string = '';
  @Input() type: string = 'text';
}
