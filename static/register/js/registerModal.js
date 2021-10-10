$("#reg-head").click(function () {
  $(".modal-back").css("display", "block");
  $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
});

$(".modal-back, .register-btn").click(function () {
  $(".modal-back").css("display", "none");
  $(".register-modal").css("transform", "translate(-50%,-50%) scale(0)");
});

$("#homepage-social-media-bar-register-btn-a").click(function () {
  $(".modal-back").css("display", "block");
  $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
});

$("#homepage-social-media-bar-register-icon-btn-a").click(function () {
  $(".modal-back").css("display", "block");
  $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
});

$("#mobile-homepage-header-register-btn-a").click(function () {
  $(".modal-back").css("display", "block");
  $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
});

function e_mail_validation() {
  const email = document.getElementById("email");

  email.addEventListener("input", () => {
    const emailBox = document.querySelector(".emailBox");
    const emailText = document.querySelector(".emailText");
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if (email.value.match(emailPattern)) {
      emailBox.classList.add("valid");
      emailBox.classList.remove("invalid");
    } else {
      emailBox.classList.add("invalid");
      emailBox.classList.remove("valid");
    }
    if (email.value == 0) {
      emailBox.classList.remove("invalid");
      emailBox.classList.remove("valid");
    }
  });
}

function getUniversity() {
  $.ajax({
    url: "https://api.aybubiltek.com/school/get/universities",
    type: "GET",
    success(res) {
      if (typeof res.error !== "undefined") {
      } else {
        const universityList = $.parseJSON(JSON.stringify(res));

        $.each(universityList.data, (i, d) => {
          $("#university").append(
            '<option value="' + d._id + '">' + d.universityName + "</option>"
          );
        });
        $("#university").prop("selectedIndex", 0);
      }
    },
  });
}

function getDepartmentsById() {
  $.ajax({
    url: `https://api.aybubiltek.com/school/get/university/${$(
      "#university option:selected"
    ).val()}/departments`,
    type: "GET",
    success(res) {
      if (typeof res.error !== "undefined") {
      } else {
        $("#departmant").empty();
        const departmentList = $.parseJSON(JSON.stringify(res));
        $.each(departmentList.data, (i, d) => {
          $("#departmant").append(
            '<option value="' + d._id + '">' + d.departmentName + "</option>"
          );
        });
        $("#departmant").prop("selectedIndex", 0);
      }
    },
  });
}

function submit_validation() {
  /**Get user input */
  const email = $("#email-1");
  const nameSurname = $("#nameSurname");
  const phone = $("#phoneNumber");
  const school = $("#university option:selected");
  const department = $("#departmant option:selected");
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
  /**Get user input */

  /**Check this input */
  if (nameSurname.val() === "") {
    sweetAlert(
      "Eksik Zorunlu Alan",
      "warning",
      "Lütfen ad soyad alanını doldurduğunuzdan emin olun!!",
      true,
      false
    );
  } else if (email.val() === "" || !emailPattern.test(email.val())) {
    sweetAlert(
      "Geçersiz Email",
      "warning",
      "Lütfen geçerli bir email adresi girdiğinizden emin olun!!",
      true,
      false
    );
  } else if (school.index() === 0) {
    sweetAlert(
      "Eksik Zorunlu Alan",
      "warning",
      "Lütfen üniversitesinizi seçtiğinizden emin olun!!",
      true,
      false
    );
  } else if (department.index() === 0) {
    sweetAlert(
      "Eksik Zorunlu Alan",
      "warning",
      "Lütfen bölümünüzü seçtiğinizden emin olun!!",
      true,
      false
    );
  } else {
    //save data in database
    $.ajax({
      url: `https://api.aybubiltek.com/membership`,
      type: "POST",
      async: true,
      data: {
        name_surname: nameSurname.val(),
        university: {
          _id: school.val(),
        },
        department: {
          _id: department.val(),
        },
        email: email.val(),
        phone_number: phone.val(),
      },
      success: function (data) {
        sweetAlert(data.message, "success", "", false, false, 1500);
        $("#email-1").val("");
        $("#nameSurname").val("");
        $("#phoneNumber").val("");
        $(".modal-back").css("display", "none");
        $(".register-modal").css("transform", "translate(-50%,-50%) scale(0)");
      },
      error: function (res) {
        sweetAlert(res.responseJSON.message, "warning", "", false, false, 1500);

        /*if(Array.isArray(res.responseJSON.))
                     sweetAlert(res.responseJSON.message[0].msg, "warning", "", false, false, 1500);
                 else    
                     sweetAlert(res.responseJSON.message, "warning", "", false, false, 1500);*/
      },
      /*success(res) {
                debugger

                sweetAlert("Kayıt Başarılı", "success", "", false, false, 1500);
                $(".modal-back").css("display", "none");
                $(".register-modal").css("transform", "translate(-50%,-50%) scale(0)");
                $("#addParticipants")[0].reset();
            }*/
      //TODO ,ERROR EKLENECEK
      /*, error(res) {
                debugger
                console.log(res)
                sweetAlert(res.responseJSON.message, "warning", "", false, false, 1500);
                /*
                if(Array.isArray(res.responseJSON.errors))
                    sweetAlert(res.responseJSON.errors[0].msg, "warning", "", false, false, 1500);
                else    
                    sweetAlert(res.responseJSON.message, "warning", "", false, false, 1500);
            }*/
    });
  }
}

function sweetAlert(title, icon, text, confirmButton, cancelButton, timer) {
  Swal.fire({
    title: `${title}`,
    icon: `${icon}`,
    text: `${text}`,
    timer: timer,
    showConfirmButton: confirmButton,
    showCancelButton: cancelButton,
  });
}
