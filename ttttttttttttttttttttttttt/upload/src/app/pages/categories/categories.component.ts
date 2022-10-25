import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  isShown: boolean = false ;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#hide").click(function(){
        $(".dad").hide(300);
         $("#show").show(300);
      });
      $("#show").click(function(){
        $(".dad").show(300);
        $("#show").hide(300);
      });
    });
  }
  myFunction1() {
    document.getElementById("myDropdown1")?.classList.toggle("show")
 }
 myFunction2(){
   document.getElementById("myDropdown2")?.classList.toggle("show");
 }
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }
}
