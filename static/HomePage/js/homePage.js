window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 70) {
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "disappear-register-button 1s 1 both ease-out";
  } else if(currentScrollPos<70){
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "appear-register-button 1s 1 both ease-out";
  }
  /*prevScrollpos = currentScrollPos;*/
}

var current_order=0


function homepageTeamsChangeFunc(direction){
        if(direction==0){//right
            document.getElementsByClassName("homepage-team-window-previous")[0].style.order=(current_order+1)%3;
            document.getElementsByClassName("homepage-team-window-middle")[0].style.order=(current_order+2)%3;
            document.getElementsByClassName("homepage-team-window-next")[0].style.order=(current_order+3)%3;
            
            console.log("if co",current_order);
        }
        else {//left
            document.getElementsByClassName("homepage-team-window-next")[0].order=(current_order+2)%3;
            document.getElementsByClassName("homepage-team-window-previous")[0].order=(current_order+1)%3;
            document.getElementsByClassName("homepage-team-window-middle")[0].order=(current_order+3)%3;
            console.log("else co,",current_order);
        }
        current_order+=1;
}
