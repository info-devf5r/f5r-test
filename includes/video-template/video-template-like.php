<?php
	function getLikeElementForNotLoginUser($video, $video_div_id){
		include_once __DIR__.'../../../config.php';
		echo "
		<span id='".$video_div_id."videoLikeSpan".$video->video_id."' class='like-span'>
		".getVideoLikes($video->video_id, $video_div_id)."
		</span>
		<a href='".WEBSITE_URL."/login/login.php'>   
		<img src='https://img.icons8.com/cotton/64/000000/facebook-like--v1.png' class='like-img'>
		</a>
		";
	}
	function getLikeElementForLoginUser($video, $video_div_id){
		echo "
		<span id='".$video_div_id."videoLikeSpan".$video->video_id."' class='like-span'>
		".getVideoLikes($video->video_id, $video_div_id)."
		</span>";
		if (checkIfUserAlreadyLikeVideo($_SESSION['user']->user_id, $video->video_id) !== true) {
			echo "
				<img  onclick='userClickLikeBtn(" . $video->video_id . ", ".$video_div_id.")' class='like-img'
				id='" . $video_div_id . "videoLikeIcon" . $video->video_id . "' src='https://img.icons8.com/nolan/64/facebook-like.png'>
				";
		} else {
			echo "
				<img   onclick='userClickLikeBtn(" . $video->video_id . ",". $video_div_id.")' class='like-img'
				id='" . $video_div_id . "videoLikeIcon" . $video->video_id . "' src='https://img.icons8.com/cotton/64/000000/facebook-like--v1.png'>
				";
		}

	}