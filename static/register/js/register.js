$("div[id^='myModal']").each(function () {

  var currentModal = $(this);
  //click next
  currentModal.find('.btn-success').click(function () {
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
  });
})


/*
function next_prev2(){
  $("div[id^='myModal']").each(function () {

    var currentModal = $(this);
    //click next
    currentModal.find('.btn-success').click(function () {

      var tel = document.forms["myForm2"]["form-phone"].value;
      var email = document.forms["myForm2"]["form-adress"].value;

      if (tel == "" || email==""|| name == "" || lastname=="") {
        document.getElementById('IL').innerHTML
        = 'Boslukları doldurun!';
        return false;

      }
      else {
        console.log("aaaaaaaa");
        document.getElementById('IL').innerHTML
        = '';
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
      }
    });

    currentModal.find('.btn-danger').click(function () {
      currentModal.modal('hide');
      currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
    });



  });

});
*/
//TODO: Fonksiyion içine koyulacak