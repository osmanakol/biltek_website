const box_one = document.querySelector(".about-header-box-one")
const box_two = document.querySelector(".about-header-box-two")

function box_one_shorten(){
    box_one.classList.remove("extend")
    setTimeout(() => {
        box_one.classList.remove("move")
        box_two.classList.remove("move")
    }, 500); 
}
function box_one_extend(){
    box_one.classList.toggle("move")
    box_two.classList.toggle("move")
    setTimeout(() => {
        box_one.classList.toggle("extend")
    }, 500); 
}
function box_two_shorten(){
    box_one.classList.remove("extend")
    box_two.classList.remove("extend")
    setTimeout(() => {
        box_two.classList.remove("move")
        box_one.classList.remove("move")
    }, 500); 
}
function box_two_extend(){
    box_two.classList.toggle("move")
    box_one.classList.toggle("move")
    setTimeout(() => {
        box_two.classList.toggle("extend")
    }, 500);  
}


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