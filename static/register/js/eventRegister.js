function getEventList(){
    $.ajax({
        url: `/api/event`,
        type: "GET",
        success(res) {
            if (typeof res.error !== "undefined") {

            }
            else {
                $('#events').empty();
                const eventList = $.parseJSON(JSON.stringify(res));
                $.each(eventList.data, (i, d) => {
                    $('#events').append('<option value="'+ d.eventId +'">' + d.eventName + '</option>')
                })
                $("#events").prop('selectedIndex',0)
            }
        }
    })
}

function submit_validation() {


    /**Get user input */
    const email = $("#email-1");
    const nameSurname = $("#nameSurname");
    const phone = $("#phoneNumber");
    const events = $("#events option:selected");
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
    else if (events.index() === 0) {
        sweetAlert("Eksik Zorunlu Alan", "warning", "Lütfen üniversitesinizi seçtiğinizden emin olun!!", true, false);
    }
    else {
        //save data in database
        $.ajax({
            url: `/api/event/participant/add`,
            type: "POST",
            data: {
                "eventId":"",
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
                if(Array.isArray(res.responseJSON.errors))
                    sweetAlert(res.responseJSON.errors[0].msg, "warning", "", false, false, 1500);
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