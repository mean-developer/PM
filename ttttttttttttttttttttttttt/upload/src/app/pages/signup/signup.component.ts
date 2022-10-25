import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
      apiResponse:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
  get f() { return this.registerForm.controls; }



  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      user_type: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //userName: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
        ]
      ],

      mobileNumber: ['', Validators.required],
      deviceToken: ['']

    });
  }

 /*buildForm(): void {
            this.userForm = this.formBuilder.group({
                passwords: this.formBuilder.group({
                    password: ['', [Validators.required]],
                    confirm_password: ['', [Validators.required]],
                }, {validator: this.passwordConfirming}),

            });
        }*/

  async onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    try {
      
      // let map: any = {...this.registerForm.value}
      // console.log(map);
      // let data = await this.api.post("userRegistration",map);
      // console.log(data);
      // this.apiResponse = data;
      // if(data.error == false){
      //   this.registerForm.reset();
      //   this.submitted = false;
      // }else{
      // }
    } catch (error) {
      console.error(error);
    }
  }
}
