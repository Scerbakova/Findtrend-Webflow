import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({});
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buidForm();
  }

  buidForm(): void {
    this.registerForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern, Validators.minLength(2)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern, Validators.minLength(2)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!!');
    this.registerForm.reset();
    this.submitted = false;
  }
}
