<?php
$name =$_POST['name'];
$visitor_email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];


$email_form ='nethra@lipikatech.in';
$email_subject ='New form submission';
$email_body ="User Name:$name.\n".
              "User Email:$visitor_email.\n".
               "Subject:$subject.\n".
               "Message:$message.\n";

$to='netrastegginamani@gmail.com';
$header="From:$email_from\r\n";

$header.="Reply to:$visitor_email \r\n";  

mail($to,$email_subject,$email_body,$header);

header("Location:contact.html");
?>