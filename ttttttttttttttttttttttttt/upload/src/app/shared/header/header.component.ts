import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    $(".user-link").on("click", function () {
      $("#userLinks").toggleClass("active");
  });
  $("body").on("click", function (e: { target: any; }) {
      var t = $(e.target);
      t.parents().is("#userLinks") || t.parents().is(".user-link") || t.is(".user-link") || $("#userLinks").removeClass("active");
  });
  }

}
