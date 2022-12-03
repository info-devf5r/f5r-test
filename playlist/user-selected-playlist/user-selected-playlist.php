<?php
session_start();
include_once __DIR__.'../../../config.php';
if (!isset($_SESSION["user"])) {
	header("Location: ".WEBSITE_URL."/login/login.php");
	die();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="getUserSelectedPlaylistPhoneOrDesktopPageOnLoade()">
	<?php
		echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/playlist.js'></script>";
	?>
</body>
</html>