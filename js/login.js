let log_btn = document.querySelector('#log_id');
log_btn.addEventListener('click', function(e){
    // e.preventDefault();
    let email = document.getElementById("email1").value;
    let epass = document.getElementById("pass1").value;

    // console.log(email);
    // console.log(epass);


    localStorage.setItem("myValue", email);

    $.ajax({
        url: "/guvidemo/php/login.php",
        type: "POST",
        dataType: "json",
        data:{
            email:  email,
            epass: epass
        },
        async: true,
        success: function(response){
            // const json = JSON.parse(response);
            console.log(response.email)
            if(response.status === true){
                if(localStorage.getItem("myValue")){
                    localStorage.removeItem("myValue");
                    localStorage.setItem("myvalue", JSON.stringify(response.email));
                    location.href = '/guvidemo/profile.html';
            console.log(response)
                }
                else{
                    alert("account not found");
                }
        }
        }
    });
});