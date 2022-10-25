import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post-type',
  templateUrl: './add-post-type.component.html',
  styleUrls: ['./add-post-type.component.css']
})
export class AddPostTypeComponent implements OnInit {
public cars = false;
public cars1 = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changeCars(val: any){
    this.cars = val.target.checked
  }

  changeCars1(val: any){
    this.cars1 = val.target.checked
  }

  continue(){
   if(this.cars == true){
    this.router.navigate(['/pages/deposer-une-annonce'])
   }
   else if(this.cars1 == true){
    this.router.navigate(['/pages/add-post-professionnels'])
   }
  }
}
