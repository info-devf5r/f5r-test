<?php
function getLikePlaylistViewCommentsForUserLogin($video, $video_div_id, $comments,$if_user_in_playlist_page,$comment_div){
	getLikeElementForLoginUser($video, $video_div_id);
	getViewElement($video, $video_div_id);
	if($if_user_in_playlist_page !== true){
		getPlaylistIconForDropDown($video);
		getPlaylistCheckBoxElementCheck($video);
	}
	getAddCommentForm($video,$comment_div,'commentForm','commentsNumber'.$video->video_id);
	getCommentNumberElement($video);
	getAllVideoCommentsElementForLoginUser($video,$comments);

}

function getLikePlaylistViewCommentsForUserLoginOnPlaylistPagePhone($video, $video_div_id, $comments,$if_user_in_playlist_page){
	echo "<div class='container'>";
	echo "<div class='row align-items-center justify-content-between'>";
	echo "	<a href='".WEBSITE_URL."/video/user-video/user-video.php?user=".$video->video_user."&name=".$video->user_name."' >".$video->user_name."</a>";
	getLikeElementForLoginUser($video, $video_div_id);
	getViewElement($video, $video_div_id);
	echo "</div>";
	echo "</div>";
	if($if_user_in_playlist_page !== true){
		getPlaylistIconForDropDown($video);
		getPlaylistCheckBoxElementCheck($video);
	}
	echo "<div class=''>";
	getAllVideoCommentsElementForLoginUserOnPlaylistPagePhone($video,$comments,'commentsDivPlaylistPhone');

}