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
/*Form submit validation*/
function submit_validation() {
    $("#mymodal1").hide;
    const email = document.getElementById("email");
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    const emailBox = document.querySelector('.emailBox');


    var name_surname = $("#id_name").val();
    var phone = $("#id_phone").val();

    var school =$('#id_school option:selected').val();
    var dep=$('id_dep option:selected').val();


    if (dep == 0) {
        swal.fire({
            title: "Boşlukları doldurun !",
            text: "Bölüm boş bırakılamaz ! ",
            icon: "warning",
         
        });

    }


    if (school == 0) {
        swal.fire({
            title: "Boşlukları doldurun !",
            text: "Okul boş bırakılamaz ! ",
            icon: "warning",
            
        });

    }

    if (!email.value.match(emailPattern)) {
        swal.fire({
            title: "Boşlukları doldurun !",
            text: "Geçersiz mail adresi ! ",
            icon: "warning",
            
        });


    }

    if (name_surname == "") {
        swal.fire({
            title: "Boşlukları doldurun !",
            text: "Ad soyad boş bırakılamaz ! ",
            icon: "warning",
           
        });
    }



    if (name_surname != "" && email.value.match(emailPattern) && school != 0 && dep != 0) {

        Swal.fire({
            icon: 'success',
            title: 'Kayıt başarılı',
            showConfirmButton: false,
            timer: 1500
          })

        emailBox.classList.remove('invalid');
        emailBox.classList.remove('valid');

        document.getElementById("form").reset();
        $('#myModal1').modal('hide');

    }

}