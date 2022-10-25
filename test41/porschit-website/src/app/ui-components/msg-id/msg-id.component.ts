import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-msg-id',
  templateUrl: './msg-id.component.html',
  styleUrls: ['./msg-id.component.css']
})
export class MsgIdComponent implements OnInit {
  isShown: boolean = false ;

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
  
      $("#show").click(function(){
        $(".my2").show(500);
      });
    });
    $(document).ready(function(){
      
      $("#show1").click(function(){
        $(".my1").show(500);
      });
    });
  }


toggleShow() {
this.isShown = ! this.isShown;
}
}
