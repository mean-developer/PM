import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".user-link").on("click", function () {
      $("#userLinks").toggleClass("active");
  });
  $("body").on("click", function (e: { target: any; }) {
      var t = $(e.target);
      t.parents().is("#userLinks") || t.parents().is(".user-link") || t.is(".user-link") || $("#userLinks").removeClass("active");
  });
  }

}
