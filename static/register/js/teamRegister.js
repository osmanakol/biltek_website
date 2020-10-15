$(document).ready(() => {

    getDepartmentsById()
})
function getDepartmentsById() {

    $.ajax({
        url: `/api/departments?universityId=5ea996f7e58324744e435709`,
        type: "GET",
        success(res) {
            if (typeof res.error !== "undefined") {

            }
            else {
                $('#department').empty();
                const departmentList = $.parseJSON(JSON.stringify(res));
                $.each(departmentList.data, (i, d) => {
                    $('#department').append('<option value="">' + d.departmentName + '</option>')
                })
                $("#department").prop('selectedIndex', -1)
            }
        }
    })
}

function fillClass() {
    $('#class').empty();


    $('#class').append('<option value="Hazırlık">' + "Hazırlık" + '</option>')
    $('#class').append('<option value="1">' + "1" + '</option>')
    $('#class').append('<option value="2">' + "2" + '</option>')
    $('#class').append('<option value="3">' + "3" + '</option>')
    $('#class').append('<option value="4">' + "4" + '</option>')
    $('#class').append('<option value="5">' + "5" + '</option>')
    $('#class').append('<option value="6">' + "6" + '</option>')
    $("#class").prop('selectedIndex', -1)
}


function fillTeam() {
    $('#teams').empty();

    $('#teams').append('<option value="Tasarım">' + "Tasarım" + '</option>')
    $('#teams').append('<option value="Roket">' + "Roket" + '</option>')
    $('#teams').append('<option value="Siber Güvenlik">' + "Siber Güvenlik" + '</option>')
    $("#teams").prop('selectedIndex', -1)
}

function submit_validation() {
    /**Get user input */
    const email = $("#email");
    const nameSurname = $("#name_surname");
    const department = $("#department option:selected")
    const school = $("#university option:selected")
    const classes = $("#class option:selected")
    const teams = $("#teams option:selected");
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
    else if (department.index() === -1) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen bölümünüzü seçtiğinizden emin olun!!", true, false);
    }
    else if (classes.index() === -1) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen sınıf seçtiğinizden emin olun!!", true, false);
    }
    else if (teams.index() === -1) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen takım seçmeyi unutmayınız!!!", true, false);
    }
    else {
        //save data in database
        $.ajax({
            url: `/api/teams/participant/add`,
            type: "POST",
            data: {

                "name_surname": nameSurname.val(),
                "university": school.text(),
                "department": department.text(),
                "email": email.val(),
                "sinif": classes.val(),
                "team": teams.val()

            },


            success(res) {
                if (typeof res.error !== "undefined") {
                    console.log("buraya geldim")
                }
                else {


                    sweetAlert("Kayıt Başarılı", "success", "", false, false, 1500);
                    // $(".modal-back").css("display", "none");
                    // $(".register-modal").css("transform", "translate(-50%,-50%) scale(0)");
                    // $("#addParticipants")[0].reset();
                }
            }
            //TODO ,ERROR EKLENECEK
            , error(res) {
                console.log(res)
                if (Array.isArray(res.responseJSON.errors))
                    sweetAlert(res.responseJSON.errors[0].msg, "warning", "", false, false, 1500);
                else
                    sweetAlert(res.responseJSON.msg, "warning", "", false, false, 1500);
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