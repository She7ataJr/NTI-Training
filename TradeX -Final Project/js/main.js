$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:2,
            loop : true,
            nav : true,
            dots : false,
            navText: [`<i class="btn custom-btn-left bg-primary text-white fa-solid fa-arrow-left-long"></i>`, `<i class=" btn custom-btn-right bg-primary text-white fa-solid fa-arrow-right-long"></i>`],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        }
    );
  });