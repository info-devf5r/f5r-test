<?php 
function getViewLikeSpansUserLogin($video, $videos_id_div){
	echo "
	<span id='".$videos_id_div."videoViewedSpan".$video->video_id."' class='like-span'>
".getVideoViews($video->video_id)."
	</span>
	<img src='https://img.icons8.com/material-sharp/24/000000/visible.png' class='like-img'>
	<span id='".$videos_id_div."videoLikeSpan".$video->video_id."' class='like-span'>
	".getVideoLikes($video->video_id)."
	</span>
	";
}