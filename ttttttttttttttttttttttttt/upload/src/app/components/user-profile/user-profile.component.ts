import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm!: FormGroup
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProfile();
  }


async  getProfile(){
    try {
      let data = await this.api.post("userLogin", {
        "user_id": ''
      });
      // if (data.status == true) {
      // }
      //  else {
      // }
    } catch (error) {
      console.error(error);
    }
  }


 async profileUpdate(){
    try {
      let map: any = {... this.profileForm.value}
      let data = await this.api.post("", map)
    } catch (error) {
      
    }
  }

}
