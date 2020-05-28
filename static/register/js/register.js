$("div[id^='myModal']").each(function () {

  var currentModal = $(this);
  //click next
  currentModal.find('.btn-success').click(function () {
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
  });

  //click prev
  currentModal.find('.btn-danger').click(function () {
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
  });

});

//TODO: Fonksiyion içine koyulacak