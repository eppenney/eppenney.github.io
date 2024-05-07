<!DOCTYPE html> 
<html>
<body>
	<p>Aloha!</p>
	<?php
		$myfile = fopen("accounts.txt", "a") or die("Unable to open file!");
		$date = date("Y/m/d");
		$userID = rand(100000000,999999999);
		$name = $_POST["fname"] + $_POST["lname"];
		$txt = "UserID # - $userID, Created - $date \n, Name - $name";
		fwrite($myfile, $txt);
		fclose($myfile);
    ?>
</body>
</html>