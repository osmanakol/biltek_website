$("#reg-head").click(function () {
    $(".modal-back").css("display", "block");
    $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
})

$(".modal-back, .register-btn").click(function () {
    $(".modal-back").css("display", "none");
    $(".register-modal").css("transform", "translate(-50%,-50%) scale(0)");
})

$("#homepage-social-media-bar-register-btn-a").click(function () {
    $(".modal-back").css("display", "block");
    $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
})

$("#homepage-social-media-bar-register-icon-btn-a").click(function () {
    $(".modal-back").css("display", "block");
    $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
})

$("#mobile-homepage-header-register-btn-a").click(function () {
    $(".modal-back").css("display", "block");
    $(".register-modal").css("transform", "translate(-50%,-50%) scale(1)");
})



/*function e_mail_validation() {

    const email = document.getElementById("email");

    email.addEventListener('input', () => {
        const emailBox = document.querySelector('.emailBox');
        const emailText = document.querySelector('.emailText');
        const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

        if (email.value.match(emailPattern)) {
            emailBox.classList.add('valid');
            emailBox.classList.remove('invalid');

        } else {
            emailBox.classList.add('invalid');
            emailBox.classList.remove('valid');

        }
        if (email.value == 0) {
            emailBox.classList.remove('invalid');
            emailBox.classList.remove('valid');

        }
    });
}*/


function getUniversity() {
    $.ajax({
        url: "/api/university",
        type: "GET",
        success(res) {
            if (typeof res.error !== "undefined") {

            }
            else {
                const universityList = $.parseJSON(JSON.stringify(res));

                $.each(universityList.data, (i, d) => {
                    $('#university').append('<option value="' + d._id + '">' + d.universityName + '</option>')
                })
                $("#university").prop("selectedIndex",0)
            }
        }
    })
}


function getDepartmentsById() {

    $.ajax({
        url: `/api/departments?universityId=${$('#university option:selected').val()}`,
        type: "GET",
        success(res) {
            if (typeof res.error !== "undefined") {

            }
            else {
                $('#departmant').empty();
                const departmentList = $.parseJSON(JSON.stringify(res));
                $.each(departmentList.data, (i, d) => {
                    $('#departmant').append('<option value="">' + d.departmentName + '</option>')
                })
                $("#departmant").prop('selectedIndex',0)
            }
        }
    })
}


function submit_validation() {


    /**Get user input */
    const email = $("#email-1");
    const nameSurname = $("#nameSurname");
    const phone = $("#phoneNumber");
    const school = $("#university option:selected");
    const department = $("#departmant option:selected");
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
    /**Get user input */

    /**Check this input */
    if (nameSurname.val() === "") {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen ad soyad alanını doldurduğunuzdan emin olun!!", true, false);
    }
    else if (email.val() === "" || !emailPattern.test(email.val())) {
        sweetAlert("Geçersiz Email", "warning", "Lütfen geçerli bir email adresi girdiğinizden emin olun!!", true, false);
        console.log(email.val())
    }
    else if (school.index() === 0) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen üniversitesinizi seçtiğinizden emin olun!!", true, false);
    }
    else if (department.index() === 0) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen bölümünüzü seçtiğinizden emin olun!!", true, false);
    }
    else {
        //save data in database
        $.ajax({
            url: `/api/participant`,
            type: "POST",
            data: {
                "name_surname": nameSurname.val(),
                "university": school.text(),
                "department": department.text(),
                "email": email.val(),
                "phone": phone.val()
            },


            success(res) {
                if (typeof res.error !== "undefined") {
                    console.log("buraya geldim")
                }
                else {


                    sweetAlert("Kayıt Başarılı", "success", "", false, false, 1500);
                    $(".modal-back").css("display", "none");
                    $(".register-modal").css("transform", "translate(-50%,-50%) scale(0)");
                    $("#addParticipants")[0].reset();
                }
            }
            //TODO ,ERROR EKLENECEK
            , error(res) {
                if (res.responseJSON.msg){
                    sweetAlert(res.responseJSON.msg, "warning", "", false, false, 1500);
                }
                else
                    sweetAlert(res.responseJSON.message, "warning", "", false, false, 1500);
            }



        })


    }
}


function sweetAlert(title, icon, text, confirmButton, cancelButton, timer) {
    Swal.fire({
        title: `${title}`,
        icon: `${icon}`,
        text: `${text}`,
        timer: timer,
        showConfirmButton: confirmButton,
        showCancelButton: cancelButton
    })
}