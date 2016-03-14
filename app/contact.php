<?php

  $first = test_input($_POST["firstName"]);
  $last = test_input($_POST["lastName"]);
  $comp = test_input($_POST["company"]);
  $addr = test_input($_POST["emailAddress"]);
  $mesg = test_input($_POST["contactMessage"]);

  $message = "Hi Admin,\n\n We have a contact request from " . $first . ' ' .  $last . ".\n\n His department is: " . $comp . "\n\n and here is his email: \n" . $addr . "\r\nThe message is: \r\n" . $mesg;
  mail('root@localhost', 'Contact Request', $message);

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<div>
  <center><h3>Thanks for Contacting us <?php echo $first; ?>!</h3></center>
  <br>
  We'll take a look at your request and respond to <?php echo $addr; ?>.
  If you don't get an email within the next 6-8 hours, please contact root@localhost
  <br>
  <br>
  Sincerely, Your bigip team!
</div>
