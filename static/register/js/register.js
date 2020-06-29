function e_mail_validation() {

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
}
function phone_validate() {

    $(document).ready(function () {
        $("#id_phone").attr('maxlength', '12');

        var value = document.getElementById('id_phone').value
        if (value.length == 3 || value.length == 7) {
            $('#id_phone').val($('#id_phone').val() + "-");
        }



    });


}

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
                    $('#id_school').append('<option value="' + d._id + '">' + d.universityName + '</option>')
                })
            }
        }
    })
}

function getDepartmentsById() {

    $.ajax({
        url: `/api/departments?universityId=${$('#id_school option:selected').val()}`,
        type: "GET",
        success(res) {
            if (typeof res.error !== "undefined") {

            }
            else {
                $('#id_dep').empty();
                const departmentList = $.parseJSON(JSON.stringify(res));
                $.each(departmentList.data, (i, d) => {
                    $('#id_dep').append('<option value="">' + d.departmentName + '</option>')
                })
            }
        }
    })
}

/*Form submit validation*/
function submit_validation() {


    /**Get user input */
    const email = $("#email");
    const nameSurname = $("#id_name");
    const phone = $("#id_phone");
    const school = $("#id_school option:selected");
    const department = $("#id_dep option:selected");
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
    /**Get user input */

    /**Check this input */
    if (nameSurname.val() === "") {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen ad soyad alanını doldurduğunuzdan emin olun!!", true, false);
    }
    else if (email.val() === "" || !emailPattern.test(email.val())) {
        sweetAlert("Geçersiz Email", "warning", "Lütfen geçerli bir email adresi girdiğinizden emin olun!!", true, false);
    }
    else if (school.index() == 0) {
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

                }
                else {

                    
                    sweetAlert("Kayıt Başarılı", "success", "", false, false, 1500);
                    $('#myModal1').modal('hide');
                    $("#form")[0].reset();
                }
            }
            //TODO ,ERROR EKLENECEK



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