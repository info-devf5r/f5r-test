<?php

function getVideoDetails($video){
	include_once __DIR__.'../../../config.php';
	echo "
	<div style='display: block;word-break: keep-all;margin: 0;'>
	<a href='".WEBSITE_URL."/video/user-video/user-video.php?user=".$video->video_user."&name=".$video->user_name."' >".$video->user_name."</a>
	<h4 style='word-break: keep-all;width: 90%;' >".$video->video_name."</h4>
	<span style='overflow-wrap: break-word;width: 280px;display: inline-block;'>".$video->video_description."</span>
	</div>
	";
}

function getVideoDetailsForSelectPlaylistPage($video){
	include_once __DIR__.'../../../config.php';
	echo "
	<div style='display: block;word-break: keep-all;margin: 0;'>
	
	<div class='d-block d-md-none'>
	<a class='btn btn-secondary w-100 phone-playlist-video-description-dropdown-btn-a' data-toggle='collapse' href='#collapseDescriptionPlaylistVideoOnPhone' role='button' aria-expanded='false' aria-controls='collapsePlaylistVideoOnPhone'>
	<p class='phone-playlist-video-description-dropdown-btn-p'>".$video->video_name."</p>
	</a>
		<div class='collapse' id='collapseDescriptionPlaylistVideoOnPhone'>
		<div class='card card-body'>
		<p>".$video->video_description."</p>
		</div> <!-- dropdown menu div -->
		</div> <!-- dropdown menu div -->
	</div> <!-- dropdown div -->	
	</div>
	";

}