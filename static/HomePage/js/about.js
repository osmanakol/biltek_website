const box_one = document.querySelector(".homepage-about-header-box-one")
const box_two = document.querySelector(".homepage-about-header-box-two")
const arrow = document.querySelector(".homepage-about-header-box-one-mission")
const eye = document.querySelector(".homepage-about-header-box-two-eye")
const buttons = document.querySelectorAll(".about-button")


/*  Vertical extend hover*/
function box_one_shorten(){
    box_one.classList.remove("extend")
    box_two.classList.remove("extend")
    arrow.classList.toggle("active")
    box_two.classList.remove("move")
}

function box_one_extend(){
    box_two.classList.toggle("move")
    arrow.classList.toggle("active") 
    box_one.classList.toggle("extend")
}

function box_two_shorten(){
    box_two.classList.remove("extend")
    eye.classList.toggle("active")
    box_one.classList.remove("move")
}

function box_two_extend(){
    box_one.classList.toggle("move")
    eye.classList.toggle("active")
    box_two.classList.toggle("extend")
}

$(box_one).hover(()=>{box_one_extend()}, ()=>{box_one_shorten()})
$(box_two).hover(()=>{box_two_extend()}, ()=>{box_two_shorten()})


/*  FOR ABOUT BOX TOOLTIPS */

$(buttons).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
