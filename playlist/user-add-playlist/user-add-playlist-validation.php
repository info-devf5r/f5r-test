<?php
function addPlaylistVideoValidation($playlist_name){
	if (!preg_match('/[a-zA-Z0-9!@#%*&^]{3,30}/', $playlist_name)) {
		include_once __DIR__.'../../../../config.php';
		$err_message = '<strong>Playlist Name</strong> must be between 3 and 30 case letters';
		die(header("Location: ".WEBSITE_URL."/playlist/user-add-playlist/user-add-playlist.php?error=&".$err_message.""));
	} else {
		return true;
	}
}
