$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      `<i class="btn custom-btn-left bg-primary text-white fa-solid fa-arrow-left-long"></i>`,
      `<i class=" btn custom-btn-right bg-primary text-white fa-solid fa-arrow-right-long"></i>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
});

let upBtn = document.getElementById("up");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 300) {
    upBtn.style.opacity = "1";
  } else {
    upBtn.style.opacity = "0";
  }
});
 let counter1=document.getElementById('counter1')
 let counter2=document.getElementById('counter2')
 let counter3=document.getElementById('counter3')
 let counter4=document.getElementById('counter4')
//  counter1.innerText=i
let valid = true
 function interval(tag , endNum){
    let i=0
    let counting=setInterval(function(){
        if (i==endNum ){
            clearInterval(counting)
        }
        tag.innerText= i
        i+=10
    },1)

    valid = false
}
console.log(counter1)
window.addEventListener("scroll", function () {
    if(counter1 != null){

        if (document.documentElement.scrollTop > 300) {
            if(valid){
    
                interval(counter1 , 8000)
                interval(counter2 , 810)
                interval(counter3,2000)
                interval(counter4,20)
            }
        }
    }
  });



// let count1=document.getElementsByClassName('counter')
// let counting = setInterval(()=>{
// if (count==8000 ){
//     clearInterval(counting)
// }
// counter.innerText= i
// i+=1
// },1000)