import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  writeValue(value: number | string): number | string {
    return value;
  }
  registerOnChange(value: number | string): number | string {
    return value;
  }
  registerOnTouched(): void {}

  @Input()
  parentForm!: FormGroup;

  @Input()
  formControlName!: string;

  @Input()
  label!: string;

  @Input()
  submitted!: boolean;

  @Input()
  pattern!: string;

  @Input()
  placeholder!: string;
}