<?php
include "config.php";

$sata = array();
$id = $_GET['id'];
$q = mysql_query($con, "SELECT * FROM `student` WHERE ìd` = $id LIMIT 1");

while ($row = mysqli_fetch_object($q)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);