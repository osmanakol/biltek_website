const box_one = document.querySelector(".about-header-box-one")
const box_two = document.querySelector(".about-header-box-two")






/*  Vertical extend hover*/
function box_one_shorten(){
    box_one.classList.remove("extend")
    setTimeout(() => {
        box_two.classList.remove("move")
    }, 100); 
}
function box_one_extend(){
    box_two.classList.toggle("move")
    setTimeout(() => {
        box_one.classList.toggle("extend")
    }, 100); 
}
function box_two_shorten(){
    box_one.classList.remove("extend")
    box_two.classList.remove("extend")
    setTimeout(() => {
        box_one.classList.remove("move")
    }, 100); 
}
function box_two_extend(){
    box_one.classList.toggle("move")
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