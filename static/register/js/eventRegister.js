$(document).ready(() => {
    getEventList()
    getUniversity()
})


function getUniversity() {
    $.ajax({
        type: "GET",
        url: `/api/university`,
        success(res) {
            if (typeof res.error !== "undefined") {

            }
            else {
                const universityList = $.parseJSON(JSON.stringify(res));

                $.each(universityList.data, (i, d) => {
                    $('#university').append('<option value="' + d._id + '">' + d.universityName + '</option>')
                })
                $("#university").prop("selectedIndex", 0)
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

function getEventList() {
    $.ajax({
        url: `/api/event/isActive?isActive=true`,
        type: "GET",
        success(res) {
            if (typeof res.error !== "undefined") {

            }
            else {
                // $('#events-form-event-select').empty();
                const eventList = $.parseJSON(JSON.stringify(res));
                $.each(eventList.data, (i, d) => {
                    $('#events-form-event-select').append('<option value="' + d._id + '">' + d.eventName + '</option>')
                })
                $("#events-form-event-select").prop('selectedIndex', -1)
            }
        }
    })
}

function submit_validation() {
    /**Get user input */
    const email = $("#email");
    const nameSurname = $("#name_surname");
    const phone = $("#phoneNumber");
    const events = $("#events-form-event-select option:selected");
    const department = $("#department option:selected")
    const school = $("#university option:selected")
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
    else if (events.index() === -1) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen etkinlik seçmeyi unutmayınız!!!", true, false);
    }
    else if (school.index() === 0) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen üniversitesinizi seçtiğinizden emin olun!!", true, false);
    }
    else if (department.index() === -1) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen bölümünüzü seçtiğinizden emin olun!!", true, false);
    }
    else {
        //save data in database
        $.ajax({
            url: `/api/event/participant/add`,
            type: "POST",
            data: {
                "eventId": events.val(),
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
                    // $(".modal-back").css("display", "none");
                    // $(".register-modal").css("transform", "translate(-50%,-50%) scale(0)");
                    // $("#addParticipants")[0].reset();
                }
            }
            //TODO ,ERROR EKLENECEK
            , error(res) {
                console.log(res)
                if (res.responseJSON.msg){
                    console.log(res)
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