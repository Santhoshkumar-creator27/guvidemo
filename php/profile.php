<?php
// $redis = new Redis(); 
// $redis->connect('127.0.0.1', 6379); 

// $uid = $redis->get('email');
$uid = $_POST['key'];

require_once '../vendor/autoload.php';
// echo json_encode("$uid");
$client = new MongoDB\Client('mongodb://localhost:27017');

$db = $client->Guvi;
$collection = $db->userdetails;
$fetchdoc = $collection->findOne(
    ['Email' => $uid]
);

if($fetchdoc)
{
    echo json_encode(array(
        'status' => true,
        'Name' => $fetchdoc['Name'],
        'Email' => $fetchdoc['Email'],
        'DOB' => $fetchdoc['DOB'],
        'Gender' => $fetchdoc['Gender'],
        'Age' => $fetchdoc['Age'],
        'Contacts' => $fetchdoc['Contacts']
    ));
    // echo json_encode($fetchdoc);
}else{
    echo json_encode(array('status' => false));
}


// $redis->close();
?>