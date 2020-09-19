<?php
require "connection.php";
	$target ="uploads/";
	$f = basename($_FILES["image"]["name"]);
	$file=$target.basename($_FILES["image"]["name"]);
	move_uploaded_file($_FILES["image"]["tmp_name"],$file);
	
	$sql = "insert into Product (Product_name,Price,Description,image) values (".$_POST['product_name'].$_POST['price'].
	$_POST['description'].",'$f')";
	
	if(mysqli_query($con,$sql))
	{
		echo json_encode("Product Added SucessFully");
	}
	
?>