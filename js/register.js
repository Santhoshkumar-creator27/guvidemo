let sub_btn = document.querySelector('#sub_id');
sub_btn.addEventListener('click', function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("inemail").value;
    let epass = document.getElementById("epass").value;
    let cpass = document.getElementById("cpass").value;
    let gender = document.getElementById("gen").value;
    let dateofbirth = document.getElementById("dob").value;
    let age = document.getElementById("age").value;
    let contact = document.getElementById("ctc").value;


if (epass != cpass)
{
    alert("Please enter correct password");
}
else{
$.ajax({
        url: "/guvidemo/php/register.php",
        type: "POST",
        data:{
            name:name,
            email:email,
            epass:epass,
            cpass:cpass,
            gender:gender,
            dob:dateofbirth,
            age:age,
            contact:contact,
        },
        async:true,
        success:function(response){
            alert(response);
        }
        });
    }
})

























// function post()
// {
//     var name = $('#name').val();
//     var email = $('#inemail').val();
//     var epass = $('#epass').val();
//     var cpass = $('#cpass').val();
//     var gender = $('#gen').val();
//     var DateOB = $('#dob').val();
//     var Age = $('#age').val();
//     var contact = $('#ctc').val();
//     $.post('../php/register.php',{
//         name:name, 
//         email:email,
//         epass:epass,
//         cpass:cpass,
//         gender:gender,
//         dob:DateOB,
//         age:Age,
//         contact:contact,
//     },
//     function(data)
//     {
//         console.log(data);
//     });
// }








//     console.log(name);
//     console.log(email);
//     console.log(epass);
//     console.log(cpass);
//     console.log(gender);
//     console.log(dateofbirth);
//     console.log(age);
//     console.log(contact);
