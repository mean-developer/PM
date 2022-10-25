import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  apiResponse: any;
  constructor(private formBuilder: FormBuilder, private httpservice: ApiService, private router: Router,
    private cookieService: CookieService
  ) { }
  get g() { return this.loginForm.controls; }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
        ]
      ]
    });
  }
  // async onSubmit() {
  //   this.submitted = true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   try {
  //     let map: any = { ...this.loginForm.value }
  //     let data = await this.api.post("userLogin", map);
  //     this.apiResponse = data;
  //     if (data.error == false)
  //     {
  //       localStorage.setItem("token",this.apiResponse.userRecord.token);
  //       localStorage.setItem("_id",this.apiResponse.userRecord._id);
  //       localStorage.setItem("email",this.apiResponse.userRecord.email);
  //       localStorage.setItem("user_type",this.apiResponse.userRecord.user_type);


  //       /*this.cookieService.set(
  //         'pors_website',
  //         JSON.stringify(data.response)
  //       );*/
  //       //this.router.navigate(['']);
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  onSubmit() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }
    else {
      let postObj = this.loginForm.value
      // this.httpservice.post('userLogin',postObj)
      this.httpservice.post('userLogin', postObj).subscribe(res => {
        if (res) {
          console.log(res)
        }
      },
        error => {
          console.log(error)                   //Error callback

        })
    }
  }
}
