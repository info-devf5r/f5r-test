<?php 
	 include_once __DIR__.'../../../../config.php';
	 require_once SITE_ROOT.'/includes/videos-template/user-login/get-view-like-spans-user-login.php';
	 require_once SITE_ROOT.'/includes/videos-template/user-login/get-user-login-no-have-playlist.php';
	 require_once SITE_ROOT.'/includes/videos-template/user-login/get-playlist-checkboxs.php';


function getVideosLikePlaylistViewBtnsUserLogin($video,$videos_id_div){
	getViewLikeSpansUserLogin($video, $videos_id_div);
	if(checkIfUserAlreadyLikeVideo($_SESSION['user']->user_id,$video->video_id) !== true) {
		echo"
		<img  onclick='userClickLikeBtn(".$video->video_id.",".$videos_id_div.")' class='like-img-videos'
		id='".$videos_id_div."videoLikeIcon".$video->video_id."' src='https://img.icons8.com/nolan/64/facebook-like.png'>
		";
	}else{
		echo"
		<img   onclick='userClickLikeBtn(".$video->video_id.",".$videos_id_div.")' class='like-img-videos'
		id='".$videos_id_div."videoLikeIcon".$video->video_id."' src='https://img.icons8.com/cotton/64/000000/facebook-like--v1.png'>
		";	
	}
	if(isset($_SESSION['user_playlist'])){
		$playlists = $_SESSION['user_playlist'];
		echo"
		<img src='https://img.icons8.com/bubbles/50/000000/video-playlist.png' class='dropdown-toggle'
		data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' id='".$videos_id_div."videoPlaylistIcon".$video->video_id."'>
	
		<div aria-labelledby='".$videos_id_div."videoPlaylistIcon".$video->video_id."' class='dropdown-menu'>
		";

			for ($j=0; $j < count($playlists); $j++) { 
				echo "<div class='custom-control custom-checkbox'>";
				if(checkIfPlaylistHasVideo($video->video_id,$playlists[$j]->playlist_id)){
					getPlaylistDoNotHasVideoCheckBox($video, $videos_id_div, $playlists[$j]);					
				}else{
					getPlaylistHasVideoCheckBox($video, $videos_id_div, $playlists[$j]);
				}
			echo "</div> <!-- checkbox div -->";

			}

	
		echo  "</div> <!-- video playlist dropdown -->";

	}else{
		userLoginNoHavePlaylist();
	}


}
