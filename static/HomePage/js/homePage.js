var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("homepage-social-media-bar-register-btn").style.animation = "disappear-register-button 1s 1 both ease-out";
  } else if(currentScrollPos==0){
    document.getElementById("homepage-social-media-bar-register-btn").style.animation = "appear-register-button 1s 1 both ease-out";
  }
  prevScrollpos = currentScrollPos;
}
/*const navlist = document.querySelector("#navlist");
const links = navlist.querySelectorAll("li a");
const wrapper = document.querySelector("#wrapper");
MOBILENAV JS
menu.addEventListener("click", function () {
    setTimeout(() => {
        menu.classList.toggle("active");
    }, 600);
    navlist.classList.toggle("animate-right");
});

wrapper.addEventListener("click", function () {
    setTimeout(() => {
        menu.classList.remove("active");
    }, 200);
    setTimeout(() => {
        navlist.classList.add("animate-right");
    }, 0);
});

links.forEach(link => {
    link.addEventListener("click", function () {
        setTimeout(() => {
            menu.classList.remove("active");
        }, 1000);
        setTimeout(() => {
            navlist.classList.add("animate-right");
        }, 800);
    });
});*/