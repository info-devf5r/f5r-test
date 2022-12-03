<?php

function getVideosDetails($video){
	include_once __DIR__.'../../../config.php';
	echo"
	<div class='videoDetailsAndImgDiv-".$video->video_id."'>
	<div style='display: block;word-break: keep-all;margin: 0;'>
		<a href='".WEBSITE_URL."/video/user-video/user-video.php?user=".$video->video_user."&name=".$video->user_name."' >".$video->user_name."</a>
		<h4 style='word-break: keep-all;width: 90%;' >".$video->video_name."</h4>
		<span style='overflow-wrap: break-word;width: 280px;display: inline-block;'>".$video->video_description."</span>
	</div>
	";
}