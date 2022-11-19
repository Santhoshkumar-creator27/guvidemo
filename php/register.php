<?php
if(isset($_POST['name'])){

$name = $_POST['name'];
$email = $_POST['email'];
$epass = $_POST['epass'];
$cpass = $_POST['cpass'];
$gender = $_POST['gender'];
$dob = $_POST['dob'];
$age = $_POST['age'];
$contact = $_POST['contact'];

$mcon = mysqli_connect("localhost", "root", "", "guvi_intern");
$sql = "INSERT INTO `logindetails`(`Id`, `Email`, `Password`) VALUES (' ','$email','$epass');";
$result = mysqli_query($mcon, $sql);


require_once  '../vendor/autoload.php';

$con = new MongoDB\Client("mongodb://localhost:27017");

$db = $con->Guvi;

$tbl = $db->userdetails;

$tbl->insertOne(
    [
        'Name' => $name,
        'Email' => $email,
        'Enter Password' => $epass,
        'Confirm Password' => $cpass,
        'Gender' => $gender,
        'DOB' => $dob,
        'Age' => $age,
        'Contacts' => $contact
    ]);

echo json_encode("Account Registered");
}
else{
    echo extension_loaded('mongod') ? "loaded" : "not loaded";
}
?>

