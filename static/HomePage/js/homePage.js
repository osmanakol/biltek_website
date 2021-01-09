/*const signInButtonText = document.querySelector(".homepage-social-media-bar-register-btn-a-content")*/

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 70) {
    /*signInButtonText.classList.toggle("active");*/
    document.getElementById(
      "homepage-social-media-bar-register-btn-a"
    ).style.animation = "disappear-register-button 1s 1 forwards ease-out";
    /*setTimeout(() => {
      if(currentScrollPos > 70){
        document.getElementById("homepage-social-media-bar-register-btn-a").style.display = "none";}
    }, 1000);*/
  } else if (currentScrollPos < 70) {
    /*signInButtonText.classList.remove("active");*/
    /*document.getElementById("homepage-social-media-bar-register-btn-a").style.display = "block";*/
    document.getElementById(
      "homepage-social-media-bar-register-btn-a"
    ).style.animation = "appear-register-button 1s 1 forwards ease-out";
  }
  /*prevScrollpos = currentScrollPos;*/
};

// Events

$(document).ready(() => {
  getEventList();
  getUniversity();
});
var countEventBox = 0;
function getEventList() {
  $.ajax({
    url: `/api/event?sorted=1`,
    type: "GET",
    success(res) {
      if (typeof res.error !== "undefined") {
      } else {
        // $('#events-form-event-select').empty();
        const eventList = $.parseJSON(JSON.stringify(res));
        $.each(eventList.data, (i, d) => {
          countEventBox++;
          var time = new Date(d.time.startTime);
          var a;
          if (d.isActive == true) {
            a = "active";
          } else {
            a = "disabled";
          }
          $("#event-box-area").append(
            '<div class="event-box"><div class="event-card ' +
              d.isActive +
              " " +
              a +
              '" value="' +
              d._id +
              '"><img class="event-img" src="' +
              d.img +
              '"><div class="event-reg-btn"><i class="fas fa-plus"></i></div></div><div class="event-date"><p>' +
              time.getDate() +
              "." +
              time.getMonth() +
              "." +
              time.getFullYear() +
              '</p></div><div class="dot"><dt>.</dt><dt>.</dt><dt>.</dt><dt>.</dt><dt>.</dt><dt>.</dt></div></div>'
            // '<div class="deneme-card ' +
            //   d.isActive +
            //   " " +
            //   i +
            //   ' " value="' +
            //   d._id +
            //   '"><p>' +
            //   d.eventName +
            //   "</p></div>"
          );
        });
      }
    },
  });
}

$(document).ajaxComplete(function () {
  var scrollNum = countEventBox / 3;
  console.log(countEventBox, scrollNum);
  var scrollCount = 0;
  var eventHeight = document.getElementById("events");
  var a = eventHeight.offsetHeight;
  $(".events-icon-area-2").click(function () {
    eventHeight.scrollBy(0, a);
    scrollCount++;
    if (scrollCount > 0) {
      $(".events-icon-area-1").removeClass("none");
    } else {
      $(".events-icon-area-1").addClass("none");
    }
    if (scrollCount >= scrollNum - 1) {
      $(".events-icon-area-2").addClass("none");
    } else {
      $(".events-icon-area-2").removeClass("none");
    }
  });

  $(".events-icon-area-1").click(function () {
    eventHeight.scrollBy(0, -a);
    scrollCount--;
    if (scrollCount > 0) {
      $(".events-icon-area-1").removeClass("none");
    } else {
      $(".events-icon-area-1").addClass("none");
    }
    if (scrollCount >= scrollNum - 1) {
      $(".events-icon-area-2").addClass("none");
    } else {
      $(".events-icon-area-2").removeClass("none");
    }
  });
});
