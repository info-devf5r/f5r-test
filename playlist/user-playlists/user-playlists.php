<?php
session_start(); 
include_once __DIR__.'../../../config.php';
if (isset($_SESSION["user"])) {
	require_once SITE_ROOT.'/server/BLL/BLL-playlist.php';
	require_once SITE_ROOT.'/includes/videos-template.php';
	$user = $_SESSION['user'];
} else {
	header("Location: ".WEBSITE_URL."/login/login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>User Playlists</title>
	<link rel="shortcut icon" href="https://img.icons8.com/nolan/64/playlist.png" type="image/x-icon"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&family=Open+Sans:ital,wght@0,400;0,700;1,600;1,800&family=Oswald&display=swap" rel="stylesheet">

<?php
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/share.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/videos-template.css'>";
?>
</head>
<body>
<?php 
	 require_once SITE_ROOT.'/includes/main-header.php';
?>

	<h1 class="text-center" >User Playlists</h1>
	<div class="container-fluid">
	<?php
		if(!isset( $_SESSION['user_playlist'])){
			echo "
			<div class='row justify-content-center align-items-center'>
			<h3 class='text-center col-12'> ".$user->user_name." not have playlists</h3>
			<img src='https://img.icons8.com/cute-clipart/64/000000/nothing-found.png'>
			<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'>
			</div>

			";
		}else{
			$playlists =  $_SESSION['user_playlist'];
			for ($i=0; $i < count($playlists) ; $i++) { 
				
				echo " <div id='playlistDiv".$playlists[$i]->playlist_id."' class='row justify-content-start'>
				<a  class='nav-link col-1 align-self-center' href='".WEBSITE_URL."/playlist/user-selected-playlist/user-selected-playlist.php?playlist=".$playlists[$i]->playlist_id."&video=0'>".$playlists[$i]->playlist_name."</a>  
			<!--	<a class='nav-link col-10' href='".WEBSITE_URL."/server/API/API-playlist.php?command=user-delete-playlist&playlist=".$playlists[$i]->playlist_id."'>-->
				<a class='nav-link col-10' onclick='userDeletePlaylist(".$playlists[$i]->playlist_id.")' >
				<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'>
				</a>
				";
					
				if(isset($playlists[$i]->playlist_videos)){
							getVideosTemplate($playlists[$i]->playlist_videos,'playlistDiv'.$playlists[$i]->playlist_id);
						}else{
							echo "
							
							<div  class='container'> 
								<div class='row justify-content-start'>
									<div class='row justify-content-center'>
										<h3 class='col-12 text-center'> ".$playlists[$i]->playlist_name." playlist not have videos</h3>
										<img class='col-3 col-sm-2 ' src='https://img.icons8.com/cute-clipart/64/000000/nothing-found.png'/>
										<img class='col-3 col-sm-2 ' src='https://img.icons8.com/dusk/64/000000/music-video.png'/>
									</div>
								</div>
							</div>
							
							";
						}
						echo "<hr w-100'>
						<br>
						";
				echo "</div>";

				}
		}
	?>
	
	<?php
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/ajax-calls.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/like.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/playlist.js'></script>";
		?>

</div>
</body>
</html>