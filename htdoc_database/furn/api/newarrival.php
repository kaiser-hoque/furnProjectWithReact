<?php
include 'connection.php';
$news = [];

$sql = "SELECT * FROM narrival";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$news[]= $row;
}
	echo json_encode($news);