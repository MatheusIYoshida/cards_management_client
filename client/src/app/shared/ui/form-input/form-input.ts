import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  imports: [],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
})
export class FormInput {
  @Input() EnableLabel!: boolean;
  @Input() LabelText!: string;
  @Input() MaxLength!: number;
  @Input() PlaceholderText: string = '';
  @Input() Type: string = 'text';
}
