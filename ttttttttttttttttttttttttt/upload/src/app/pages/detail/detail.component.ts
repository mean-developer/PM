import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }
ngAfterViewInit(): void {
  $('.product-single-style2 .product-details-img').slick({
    dots: false,
    infinite: false,
    item: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
});
}
  ngOnInit(): void {
    $('.productSlider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1
              }
          }
      ]

  });

  $("body").on("click", ".quick-view-popup", function () {
    $.ajax({
        beforeSend: function () {
            $("body").addClass("loading");
        },
        complete: function () {
            $("body").removeClass("loading");
        }
    });
});

$('.quick-view-popup').magnificPopup({
    items: {
        src: '#quickView-modal'
    },
    type: 'inline',
    midClick: true,
    removalDelay: 500,
    mainClass: 'mfp-zoom-in'
});
  }

}
