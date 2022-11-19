// var temp_mail = document.querySelector('#email1');
const tempk=JSON.parse(localStorage.getItem('myvalue'));
// temp_mail.addEventListener('click', function (e){

$.ajax({
    url: "/guvidemo/php/profile.php",
    type: "POST",
    data:{
         'key':  tempk
    },
    dataType: 'json',
    async: true,
    success: function(response){
        if(response.status  === true){
            $('#Name').html(response.Name);
            $('#Email').html(response.Email);
            $('#Gender').html(response.Gender);
            $('#DOB').html(response.DOB);
            $('#AGE').html(response.AGE);
            $('#Contacts').html(response.Contacts);
        }
        else{
            console.log("Account not found");
        }
    }
});