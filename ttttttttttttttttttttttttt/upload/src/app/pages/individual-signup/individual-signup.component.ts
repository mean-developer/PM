import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-individual-signup',
  templateUrl: './individual-signup.component.html',
  styleUrls: ['./individual-signup.component.css']
})
export class IndividualSignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  apiResponse: any;
  constructor(private formBuilder: FormBuilder,) { }
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      landlineNumber: ['', Validators.required,Validators.minLength(8),Validators.maxLength(10)],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ],
      address: ['', Validators.required],
      mobileNumber: ['', Validators.required,Validators.minLength(8),Validators.maxLength(10)],
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
