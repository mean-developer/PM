import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor() { 
    
  }
ngAfterViewInit(): void {
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


}
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

    $('.home-slideshow').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 8000,
      lazyLoad: 'ondemand'
  });

  }
   myFunction1() {
     document.getElementById("myDropdown1")?.classList.toggle("show")
  }

 filterFunction1() {
  }
   myFunction() {
    document.getElementById("myDropdown21")?.classList.toggle("show");
  }
  myFunction2(){
    document.getElementById("myDropdown2")?.classList.toggle("show");
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  
}
