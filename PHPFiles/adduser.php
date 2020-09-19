<?php
require "connection.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$Name = $request->name;
$UserName = $request->username;
$Password = $request->password;
$Email = $request->email;
$MobileNo = $request->mobileno;

$sql="insert into User(Name,UserName,Password,Email,MobileNo) values('$Name','$UserName','$Password','$Email',$MobileNo)";

if(mysqli_query($con,$sql))
{
	echo json_encode ("user created");
}

?>