<?php

	function getLikeViewCommentsForUserNotLogin($video ,$video_div_id ,$comments){
		echo "<div class='video-like-view-user-not-login'>";
		getViewElement($video, $video_div_id);
		getLikeElementForNotLoginUser($video, $video_div_id);
		echo "</div>";

		getCommentNumberElement($video);
		getAllVideoCommentsElementForNotLoginUser($comments);

	}

	