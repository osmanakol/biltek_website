const homepage_box = document.querySelector(".errorpage-box-homepage");
const terminal_box = document.querySelector(".errorpage-box-terminal");
const text = document.querySelector(".errorpage-box-terminal-username");

setTimeout(() => {
    homepage_box.classList.toggle("active");
    terminal_box.classList.toggle("active");
}, 4000);
setTimeout(() =>{
    window.open("https://www.youtube.com/watch?v=UyceHuMadr8&feature=youtu.be","_self");
}, 5000);