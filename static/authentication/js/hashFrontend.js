const bcrypt = require("bcrypt")

function submit_user() {
    const name = $("#name");
    const passHash = bcrypt.hash($("#password"), 10);
    //TODO input check
    $.ajax({
        url: `/api/register`,
        type: "POST",
        data: {
            "name": name.val(),
            "password": passHash.val()
        },
    success(res) {
        if(typeof res.error !== "undefined"){
            console.log("hata ?")
        }
        else{
            sweetAlert("Kayıt Başarılı", "success", "", false ,false, 1500);

        }
    }
    , error(res) {
        if(Array.isArray(res.responeJSON.errors))
            sweetAlert(res.responseJSON.errors[0].msg, "warning", "", false, false, 1500);
        else
                    sweetAlert(res.responseJSON.message, "warning", "", false, false, 1500);
        }
    })
}