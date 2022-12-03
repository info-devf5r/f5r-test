<?php

function userLoginNoHavePlaylist(){
	include_once __DIR__.'../../../../config.php';
	echo"
		<a href='".WEBSITE_URL."/playlist/user-add-playlist/user-add-playlist.php'>
			<img src='https://img.icons8.com/bubbles/50/000000/video-playlist.png'>
		</a>";
}