const box_one = document.querySelector(".homepage-about-header-box-one")
const box_two = document.querySelector(".homepage-about-header-box-two")
const arrow = document.querySelector(".homepage-about-header-box-one-mission")
const eye = document.querySelector(".homepage-about-header-box-two-eye")
const buttons = document.querySelectorAll(".about-button")
const box_one_hover = document.querySelector(".homepage-about-header-box-one-hover")
const box_two_hover = document.querySelector(".homepage-about-header-box-two-hover")
const box_one_hover_button = document.querySelectorAll(".homepage-about-header-box-one-more-button")
const box_two_hover_button = document.querySelectorAll(".homepage-about-header-box-two-more-button")
const tip_one = document.querySelector(".homepage-about-header-box-one-tooltip")
const tip_two = document.querySelector(".homepage-about-header-box-two-tooltip")

/*  Vertical extend hover*/
function box_one_shorten(){
    box_one.classList.remove("extend")
    box_two.classList.remove("extend")
    arrow.classList.toggle("active")
    box_two.classList.remove("move")
    eye.classList.toggle("move")
}

function box_one_extend(){
    box_two.classList.toggle("move")
    arrow.classList.toggle("active") 
    box_one.classList.toggle("extend")
    eye.classList.toggle("move")
}

function box_two_shorten(){
    box_two.classList.remove("extend")
    eye.classList.toggle("active")
    box_one.classList.remove("move")
    arrow.classList.toggle("move")
}

function box_two_extend(){
    box_one.classList.toggle("move")
    eye.classList.toggle("active")
    box_two.classList.toggle("extend")
    arrow.classList.toggle("move")
}
function tponeap(){
    tip_one.classList.toggle("appear")
}
$(box_one_hover).hover(()=>{box_one_extend()}, ()=>{box_one_shorten()})
$(box_two_hover).hover(()=>{box_two_extend()}, ()=>{box_two_shorten()})
$(box_one_hover_button).hover(()=>{tip_one.classList.toggle("appear")},   ()=>{tip_one.classList.toggle("appear")})
$(box_two_hover_button).hover(()=>{tip_two.classList.toggle("appear")},   ()=>{tip_two.classList.toggle("appear")})

/*  FOR ABOUT BOX TOOLTIPS */
