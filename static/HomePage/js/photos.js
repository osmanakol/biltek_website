var photos=document.getElementsByClassName("homepage-photos-photo");
function currentPhoto(photoIndex){
    console.log(photos.length);
    for(var i=0;i<photos.length;i++){
        if(i==photoIndex-1){
            photos[i].style.display="block";
        }
        else{
            photos[i].style.display="none";
        }
    }
}