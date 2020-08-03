window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 70) {
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "disappear-register-button 1s 1 both ease-out";
  } else if(currentScrollPos<70){
    document.getElementById("homepage-social-media-bar-register-btn-a").style.animation = "appear-register-button 1s 1 both ease-out";
  }
  /*prevScrollpos = currentScrollPos;*/
}

/*var current_order=0


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

function homepageTeamsChangeFunc(direction){//right:0 ,left:1
  const previousTeam=document.querySelector(".homepage-team-window-previous");
  const currentTeam=document.querySelector(".homepage-team-window-middle");
  const nextTeam=document.querySelector(".homepage-team-window-next");
  const preInnerHtml=previousTeam.innerHTML;
  const currentInnerHtml=currentTeam.innerHTML;
  const nextInnerHtml=nextTeam.innerHTML;
  if(direction==1){
    
    previousTeam.innerHTML=nextInnerHtml
    nextTeam.innerHTML=currentInnerHtml;
    currentTeam.innerHTML=preInnerHtml;
  }
  else{
    previousTeam.innerHTML=currentInnerHtml;
    currentTeam.innerHTML=nextInnerHtml;
    nextTeam.innerHTML=preInnerHtml;
  }
}
*/
let clickEventNumber=0;
function homepageTeamsChangeFunc(direction){//right:0 ,left:1
  clickEventNumber+=1;
  const flag=clickEventNumber%3;
  if (direction==1){
    console.log(clickEventNumber,flag);
    switch(flag){
      case 1:
        document.getElementsByClassName("homepage-team-content")[0].style.animation="homepage-team-swiper1 1s 1 cubic-bezier(1, 0.015, 0.295, 1.225) forwards"
        //document.getElementsByClassName("homepage-team-content")[0].style.transform="rotateY(120deg);";
        break;
      case 2:
        document.getElementsByClassName("homepage-team-content")[0].style.animation="homepage-team-swiper2 1s 1 cubic-bezier(1, 0.015, 0.295, 1.225) forwards"
        break;
      case 0:
        document.getElementsByClassName("homepage-team-content")[0].style.animation="homepage-team-swiper0 1s 1 cubic-bezier(1, 0.015, 0.295, 1.225) forwards"
        break;
    }
  }
  else if(direction==0){
    console.log(clickEventNumber,flag);
    
    switch(flag){
      case 1:
        document.getElementsByClassName("homepage-team-content")[0].style.animation="homepage-team-swiper1-reverse 1s 1 cubic-bezier(1, 0.015, 0.295, 1.225) forwards"
        break;
      case 2:
        document.getElementsByClassName("homepage-team-content")[0].style.animation="homepage-team-swiper2-reverse 1s 1 cubic-bezier(1, 0.015, 0.295, 1.225) forwards"
        break;
      case 0:
        document.getElementsByClassName("homepage-team-content")[0].style.animation="homepage-team-swiper0-reverse 1s 1 cubic-bezier(1, 0.015, 0.295, 1.225) forwards"
        break;
    
    }
  }
}
