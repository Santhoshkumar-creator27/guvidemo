<?php
// $redis = new Redis(); 
// $redis->connect('127.0.0.1', 6379); 
// if (!$redis->exists('email'))
// {
$password = $_POST['epass'];
$email = $_POST['email'];
$conn = mysqli_connect('localhost', 'root', '', 'guvi_intern');
if ($conn->connect_error) {
    die("Connection failure: "
        . $conn->connect_error);
} else {
    $select = "select * from logindetails where email='$email' and password='$password'";
    $result = mysqli_query($conn, $select);
    $count = mysqli_num_rows($result);

    if ($count > 0) {
        echo json_encode(array("status" => true, "email"=> $email));
    } else {
        echo json_encode(array("status" => false));
    }

    // $user = $redis->get("email");
    // print($user);
}
// }
// else{
//     header("Location: /guvidemo/profile.html");
// }
// $redis->close();
?>