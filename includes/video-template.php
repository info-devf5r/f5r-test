<?php
	 include_once __DIR__.'../../config.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-like.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-view.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-playlist.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-comment.php';

	 require_once SITE_ROOT.'/includes/videos-template.php';

	 require_once SITE_ROOT.'/includes/video-template/video-template-iframe.php';
	 require_once SITE_ROOT.'/includes/video-template/video-template-like.php';
	 require_once SITE_ROOT.'/includes/video-template/video-template-view.php';
	 require_once SITE_ROOT.'/includes/video-template/video-template-comments.php';
	 require_once SITE_ROOT.'/includes/video-template/video-template-playlist.php';

	 require_once SITE_ROOT.'/includes/video-template/video-template-video-details.php';
	 require_once SITE_ROOT.'/includes/video-template/video-template-like-view-comments-user-not-login.php';
	 require_once SITE_ROOT.'/includes/video-template/video-template-like-playlist-view-comments-user-login.php';

	function getVideoTemplate($video, $video_div_id, $if_user_in_playlist_page){
			$comments = getAllVideoComments($video->video_id);
			echo"
			<div class='videoCard-".$video->video_id." col-12 '>
			";
			if(isset($_SESSION['user'])){
				$user_id = $_SESSION['user']->user_id;
				getVideoIframe($video,$user_id);
				echo "
				<div class='videoAndImgDiv-".$video->video_id."'>
			";	
				getVideoDetails($video);
				echo"</div>";
				getLikePlaylistViewCommentsForUserLogin($video ,$video_div_id ,$comments,$if_user_in_playlist_page,'commentsDiv');
	
			}else{
				$user_id = null;
				getVideoIframe($video,$user_id);
				echo "
				<div class='videoAndImgDiv-".$video->video_id."'>
			";
				getVideoDetails($video);
				echo"</div>";
				getLikeViewCommentsForUserNotLogin($video ,$video_div_id ,$comments);		
			}
			echo"</div>";
}
function getVideoForSelectPlaylistPage($video, $video_div_id, $if_user_in_playlist_page
,$playlist_selected,$playlist_selected_video_id,$selected_playlist_id,$playlist_name){
	$comments = getAllVideoComments($video->video_id);
	echo"
	<div class='videoCard-".$video->video_id." col-12 '>
	";
		$user_id = $_SESSION['user']->user_id;
		getVideoIframe($video,$user_id);
						echo "
		
				<div class='d-block d-md-none mt-1 mb-1' >
				<a class='btn btn-secondary w-100 phone-playlist-videos-collapse-btn-a' data-toggle='collapse' href='#collapsePlaylistVideoOnPhone' role='button' aria-expanded='false' aria-controls='collapsePlaylistVideoOnPhone'>
		
				<p class='phone-playlist-videos-collapse-btn-p'>".$playlist_name."</p>
				<p class='phone-playlist-videos-collapse-btn-p'>Videos ".count($playlist_selected)."</p>
				</a>
					<div class='collapse' id='collapsePlaylistVideoOnPhone'>
					<div class='card card-body'>
				";
				getPlaylistVideosOnSelectedPlaylistPage($playlist_selected,$playlist_selected_video_id,$selected_playlist_id);
				echo"
					</div> <!-- card card-body -->
					</div> <!-- collapse menu div -->
				</div> <!-- collapse div -->
				";

		echo "
		<div class='videoAndImgDiv-".$video->video_id."'>
	";	
		getVideoDetailsForSelectPlaylistPage($video);
		echo"</div>";
		getLikePlaylistViewCommentsForUserLoginOnPlaylistPagePhone($video ,$video_div_id ,$comments,$if_user_in_playlist_page);
	echo"</div>";
}
?>


