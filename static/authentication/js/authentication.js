
function login() {
    const name = $("#name");
    const pass = $("#password");
    //TODO input check
    $.ajax({
        url: `/api/login`,
        type: "POST",
        data: {
            "name": name.val(),
            "password": pass.val()
        },
    success(res) {
        if(typeof res.error !== "undefined"){
            console.log("hata ?")
        }
        else{
            
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