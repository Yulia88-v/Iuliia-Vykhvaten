<?php
$name=$_POST["name"];
$phone=$_POST["phone"];
$email=$_POST["email"];
$textarea=$_POST["textarea"];

$from='yuliav888@gmail.com';
$to='yuliav888@gmail.com';
$sub="Оформить заявку";
$message="Имя:$name\nТелефон:$phone\nemail:$email\nКомментарии:$textarea";
mail($to,$sub,$message,"Content-type:text/plain;charset=UTF-8\r\nFrom:$from");
?>