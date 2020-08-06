const signInButtonText = document.querySelector(".homepage-social-media-bar-register-btn-a-content")

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 70) {
    signInButtonText.classList.toggle("active");
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "disappear-register-button 1s 1 forwards ease-out";
    /*setTimeout(() => {
      if(currentScrollPos > 70){
        document.getElementById("homepage-social-media-bar-register-btn-a").style.display = "none";}
    }, 1000);*/
  } else if(currentScrollPos<70){
    signInButtonText.classList.remove("active");/*
    document.getElementById("homepage-social-media-bar-register-btn-a").style.display = "block";*/
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "appear-register-button 1s 1 forwards ease-out";
  }
  /*prevScrollpos = currentScrollPos;*/
}
