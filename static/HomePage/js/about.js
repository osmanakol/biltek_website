const box_one = document.querySelector(".homepage-about-header-box-one")
const box_two = document.querySelector(".homepage-about-header-box-two")
const arrow = document.querySelector(".homepage-about-header-box-one-mission")
const eye = document.querySelector(".homepage-about-header-box-two-eye")





/*  Vertical extend hover*/
function box_one_shorten(){
    box_one.classList.remove("extend")
    box_two.classList.remove("extend")
    arrow.classList.toggle("active")
    setTimeout(() => {
        box_two.classList.remove("move")
    }, 100); 
}
function box_one_extend(){
    box_two.classList.toggle("move")
    arrow.classList.toggle("active") 
    setTimeout(() => {
        box_one.classList.toggle("extend")
    }, 100); 
}
function box_two_shorten(){
    box_two.classList.remove("extend")
    eye.classList.toggle("active")
    setTimeout(() => {
        box_one.classList.remove("move")
    }, 100); 
}
function box_two_extend(){
    box_one.classList.toggle("move")
    eye.classList.toggle("active")
    setTimeout(() => {
        box_two.classList.toggle("extend")
    }, 100);  
}
$(box_one).hover(()=>{box_one_extend()}, ()=>{box_one_shorten()})
$(box_two).hover(()=>{box_two_extend()}, ()=>{box_two_shorten()})
/*           Click Version
box_one.addEventListener("click", ()=>{
    if(box_one.classList.contains("extend")){
         box_one_shorten()
    }
    else if(box_two.classList.contains("extend")){
        box_one.classList.toggle("extend")
        box_two.classList.remove("extend")
    }
    else{
        box_one_extend()
    }
})

box_two.addEventListener("click", ()=>{
    if(box_two.classList.contains("extend")){
        box_two_shorten()
    }
    else if(box_one.classList.contains("extend")){
        box_one.classList.remove("extend")
        box_two.classList.toggle("extend")
    }
    else{
        box_two_extend()   
    }
})
*/