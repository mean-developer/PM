import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-professional-signup',
  templateUrl: './professional-signup.component.html',
  styleUrls: ['./professional-signup.component.css']
})
export class ProfessionalSignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  apiResponse: any;
  constructor(private formBuilder: FormBuilder,) { }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      companyNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsappNumber: ['', Validators.required, Validators.minLength(8), Validators.maxLength(10)],
      landlineNumber: ['', Validators.required, Validators.minLength(8), Validators.maxLength(10)],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ],
      address: ['', Validators.required],
      mobileNumber: ['', Validators.required, Validators.minLength(8), Validators.maxLength(10)],
      deviceToken: ['']

    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      console.log(this.registerForm.value)
    }
  }
}
