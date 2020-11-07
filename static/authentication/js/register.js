function submit_user() {
    const name = $("#name");
    const pass = $("#password");
    const authLevel = $("#authLevel")
    //TODO input check
    $.ajax({
        url: `/api/register`,
        type: "POST",
        data: {
            "name": name.val(),
            "password": pass.val(),
            "authLevel": authLevel.val()
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