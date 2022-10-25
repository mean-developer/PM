import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("ul.tabs li").on('click',   function(this: any) {
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel")
      $("#" + activeTab).fadeIn();

      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
  });
  }

}
