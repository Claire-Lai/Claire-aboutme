// $(document).ready(function(){
//     $(window).scroll(function(){
//         if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
//             $(".navigation").addClass("bgwhite");
//         } 
//         else if ($(document).scrollTop() < 50 ) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
//             $(".navigation").removeClass("bgwhite");	
//         }
  
//     })
//   })

// window.addEventListener('scroll',()=>{
//     let navbar= document.querySelector('header');
//     navbar.classList.toggle("bgWhite")
// })

$('.photomenu').on('mouseenter',()=>{
    $('.dropdown-menu').show()
}).on('mouseleave',()=>{
    $('.dropdown-menu').hide()
})

// $('.k').on('mouseenter',()=>{
//     $(".k")
// })
