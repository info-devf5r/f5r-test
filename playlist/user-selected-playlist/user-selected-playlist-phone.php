<?php
session_start();
include_once __DIR__.'../../../config.php';

if (!isset($_SESSION["user"])) {
	header("Location: ".WEBSITE_URL."/login/login.php");
	die();
}
require_once SITE_ROOT.'/server/BLL/BLL-playlist.php';
require_once SITE_ROOT.'/includes/videos-template.php';
require_once SITE_ROOT.'/includes/video-template.php';

$user = $_SESSION['user'];
if (!isset($_SESSION['user_playlist'])) {
	header("Location: ".WEBSITE_URL."/playlist/user-add-playlist/user-add-playlist.php");
	die();
}
$playlists =  $_SESSION['user_playlist'];
$url = $_SERVER['REQUEST_URI'];
$url_arr = explode('?playlist=', $url);

if (count($url_arr) <= 1) {
	header("Location: ".WEBSITE_URL."/playlist/user-playlists/user-playlists.php");
	die();
}
	$url_arr_video_and_playlist = explode('&video=', $url_arr[1]);
if (count($url_arr_video_and_playlist) <= 1) {
	header("Location: ".WEBSITE_URL."/playlist/user-playlists/user-playlists.php");
	die();
}
		$selected_playlist_id = $url_arr_video_and_playlist[0];
		$playlist_selected_video_id = $url_arr_video_and_playlist[1];
	 
	$args__func_getPhoneOrDesktopCommentsUserResize = '\''.WEBSITE_URL.'/playlist/user-selected-playlist/user-selected-playlist'.'\','.$selected_playlist_id.','.$playlist_selected_video_id;
	foreach ($playlists as $value) {
	if ($value->playlist_id == $selected_playlist_id) {
		$playlist_name = $value->playlist_name;
		if (isset($value->playlist_videos)) {
			$playlist_selected = $value->playlist_videos;
			for ($i = 0; $i < count($playlist_selected); $i++) {
				if ($i == $playlist_selected_video_id) {
					$playlist_video_selected = $playlist_selected[$i];
				}
			}
		}
	}
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>User Playlist</title>
	<link rel="shortcut icon" href="https://img.icons8.com/nolan/64/playlist.png" type="image/x-icon" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&family=Open+Sans:ital,wght@0,400;0,700;1,600;1,800&family=Oswald&display=swap" rel="stylesheet">

<?php
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/share.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/videos-template.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/user-selected-playlist.css'>";
?>

</head>

<body onload="activateMediaQuery(<?php echo $args__func_getPhoneOrDesktopCommentsUserResize ?>)">
<?php 
	 require_once SITE_ROOT.'/includes/main-header.php';
?>

	<div class="container-fluid mt-3">
		<div class="row" id="selectedPlaylistRow">
			<!-- phone -->
			<div class="col-12 col-md-8 order-1 order-md-2" id="playlistVideoSelectedPhone"
			ond>
				<?php
				getVideoForSelectPlaylistPage($playlist_video_selected, 'playlistVideoSelectedPhone', true,
				$playlist_selected,$playlist_selected_video_id,$selected_playlist_id,$playlist_name);
				?>
			</div>
		</div>
	</div>
	<?php
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/ajax-calls.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/view.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/like.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/playlist.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/comment.js'></script>";
		?>
</body>

</html>