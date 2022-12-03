<?php

function getViewElement($video, $video_div_id){
	echo "
	<span id='".$video_div_id."videoViewedSpan".$video->video_id."' class='view-span'>
	".getVideoViews($video->video_id)."
	</span>
	<img src='https://img.icons8.com/material-sharp/24/000000/visible.png' class='view-img'>
	";
}
