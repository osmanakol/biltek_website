window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 70) {
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "disappear-register-button 1s 1 both ease-out";
  } else if(currentScrollPos<70){
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "appear-register-button 1s 1 both ease-out";
  }
  /*prevScrollpos = currentScrollPos;*/
}

/*MOBILENAV JS
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