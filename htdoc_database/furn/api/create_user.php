
<?php
include 'connection.php';
$user = json_decode(file_get_contents('php://input'));
if ($user->name) {
    $sql = "INSERT INTO contact SET name= '$user->name', email ='$user->email',
                mobile ='$user->mobile', subject= '$user->subject'";
    $query = $db->query($sql);
    if ($query) {
        $data = ['status' => 1, 'message' => "Record successfully created"];
    } else {
        $data = ['status' => 0, 'message' => "Failed to create record."];
    }
}
echo json_encode($data);
