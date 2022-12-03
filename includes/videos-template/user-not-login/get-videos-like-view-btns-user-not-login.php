<?php

function getVideosLikeViewBtnsUserNotLogin($video,$videos_id_div){
	include_once __DIR__.'../../../../config.php';
	echo"
	<div class='view-playlist-like-div'>
	<span id='".$videos_id_div."videoViewedSpan".$video->video_id."' class='view-span'>
	".getVideoViews($video->video_id)."
	</span>
	<img src='https://img.icons8.com/material-sharp/24/000000/visible.png' class='like-img-videos'>
	
	<span id='".$videos_id_div."videoLikeSpan".$video->video_id."' class='like-span'>
	".getVideoLikes($video->video_id)."
	</span>
	<a href='".WEBSITE_URL."/login/login.php'>   
		<img id='" . $videos_id_div . "videoLikeIcon" . $video->video_id . "' class='like-img-videos' src='https://img.icons8.com/cotton/64/000000/facebook-like--v1.png'>
	</a>
	</div> <!-- view-playlist-like-div-->
	";

}
