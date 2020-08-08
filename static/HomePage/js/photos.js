var photos=document.getElementsByClassName("homepage-photos-photo");
var photoModal=document.getElementsByClassName("homepage-photos-responsive-photo-modal");
function currentPhoto(photoIndex){
    if(window.innerWidth>769){
        for(var i=0;i<photos.length;i++){
            if(i==photoIndex-1){
                photos[i].style.animation = "move-photo 1s both ease"
                photos[i].style.display="block";
            }
            else{
                photos[i].style.display="none";
            }
        }
    }
    else{
        photoModal[0].style.display="unset";
        var clickedPhoto=photos[photoIndex-1];
        var modalPhoto=document.getElementsByClassName("homepage-photos-clicked-image");
        console.log("alt is",clickedPhoto.alt);
        modalPhoto[0].src=clickedPhoto.src;
        modalPhoto[0].alt=clickedPhoto.alt;
        console.log("modal alt",modalPhoto.alt)
        console.log("modal src",modalPhoto.src)
    }
}

var closeModalButton=document.getElementById("closeModal");
closeModalButton.onclick=function(){
   photoModal[0].style.display="none";
}