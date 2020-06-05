
function next_Prev(n) {

  const name = document.forms["myForm"]["form-first-name"].value;
  const lastname = document.forms["myForm"]["form-last-name"].value
  const tel = document.forms["myForm2"]["form-phone"].value;
  const email = document.forms["myForm2"]["form-adress"].value;
  if (n == 1) {
    $("div[id^='myModal']").each(function () {
      var currentModal = $(this);
      currentModal.find('#next-button1').click(function () {

        if (name == "" || lastname == "") {
          console.log("tabi1if");
          document.getElementById('adsL').innerHTML
            = 'Alanları doldur!';
          return false;

        }
        else {
          console.log("tab1else");
          document.getElementById('adsL').innerHTML
            = '';
          currentModal.modal('hide');
          currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');

        }

        
      });
    });
  }

  if (n == 2) {
    $("div[id^='myModal']").each(function () {

      var currentModal = $(this);
      //click next
      currentModal.find('#next-button2').click(function () {



        if (tel == "" || email == "") {
          console.log("tab2if");
          document.getElementById('IL').innerHTML
            = 'Boslukları doldurun!';
          return false;

        }
        else {
          console.log("tab2else");
          document.getElementById('IL').innerHTML
            = '';
          currentModal.modal('hide');
          currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');

        }
      });

      currentModal.find('#next-buttonGeri').click(function () {
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
      });



    });




  }
}




/*
function next_prev() {
  $("div[id^='myModal1']").each(function () {

    var name = document.forms["myForm"]["form-first-name"].value;
 var lastname = document.forms["myForm"]["form-last-name"].value
    var currentModal = $(this);
    //click next
    currentModal.find('.btn-success').click(function () {

      if (name == "" || lastname=="") {
        document.getElementById('adsL').innerHTML
        = 'Alanları doldur!';
        return false;

      }
      else {
        document.getElementById('adsL').innerHTML
        = '';
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
      }
    });
  });
}
*/

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







}
*/
//TODO: Fonksiyion içine koyulacak