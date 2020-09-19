<?php

require "connection.php";

$sql = "select * from User";

$result = $con->query($sql);

$output = array();

$output = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($output);





?>