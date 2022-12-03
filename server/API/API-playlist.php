<?php
session_start();
include_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/BLL/BLL-playlist.php';
require_once SITE_ROOT.'/playlist/user-add-playlist/user-add-playlist-validation.php';



$command = $_REQUEST["command"];

switch ($command) {
	case "add-new-playlist":
		if(isset($_POST['playlist-name'])){
		  $user_id = $_SESSION['user']->user_id;
		  $playlist_name = $_POST['playlist-name'];
		  if (addPlaylistVideoValidation($playlist_name) === true){
		  $new_playlist =  addNewPlaylist($playlist_name, $user_id);
		  if(isset($_SESSION['user_playlist'])){
			array_push($_SESSION['user_playlist'], $new_playlist);
		  }else{
			$_SESSION['user_playlist'] = [];
			array_push($_SESSION['user_playlist'], $new_playlist);
		  }
		  header("Location: ".WEBSITE_URL."/playlist/user-playlists/user-playlists.php");
		}
		}else{
			$err_message = '<strong>Playlist Name</strong> Missing';
			die(header("Location: ".WEBSITE_URL."/playlist/user-add-playlist/user-add-playlist.php?error=&".$err_message.""));
		}					
		break;

	  case "get-all-user-playlists":
		if(isset($_SESSION['user'])){
		  $user_id = $_SESSION['user']->id;
		  $playlist_arr =  selectAllUserPlaylists($user_id);
		  echo json_encode($playlist_arr);
		}else{
		  header("Location: /youtube-playlist/home-page/index.php");
		}
		break;
	
	
		case 'user-add-video-to-playlist':
		  if(isset($_GET['video']) && isset($_GET['playlist'])){
			$video_id = $_GET['video'];
			$playlist_id = $_GET['playlist'];
			if(checkIfPlaylistHasVideo($video_id, $playlist_id)){
			  userAddNewVideoToPlaylist($video_id, $playlist_id);
			   $user_id = $_SESSION['user']->user_id;
			   getAllUserPlaylistsAndVideoPlaylist($user_id);
			  echo 'true';
			 }else{
			  echo "false";
	
			 }; 
		  }
		break;
		case 'user-remove-video-from-playlist':
		  if(isset($_GET['video']) && isset($_GET['playlist'])){
			$video_id = $_GET['video'];
			$playlist_id = $_GET['playlist'];
			if(!checkIfPlaylistHasVideo($video_id, $playlist_id)){
			  userRemoveVideoFromPlaylist($video_id, $playlist_id);
			 	 $user_id = $_SESSION['user']->user_id;
				  getAllUserPlaylistsAndVideoPlaylist($user_id);
	

			}else{
			  echo "error playlist do not have the video ";
			 }; 
		  }
		break;
		case 'check-playlist-has-video':
		  if(isset($_GET['video']) && isset($_GET['playlist'])){
			$video_id = $_GET['video'];
			$playlist_id = $_GET['playlist'];
			if(checkIfPlaylistHasVideo($video_id, $playlist_id)){
			  echo "true";
			 }else{
			  echo "false";
	
			 }; 
		  }
		break;
		case 'get-all-playlist-videos':
		  if(isset($_GET['playlist'])){
			$playlist_id = $_GET['playlist'];
		  $playlist_videos_arr = getAllPlaylistVideos($playlist_id);
			echo json_encode($playlist_videos_arr);
		  }
		break;
		case 'user-delete-playlist':
			if(isset($_GET['playlist'])){
				$playlist_id = $_GET['playlist'];
				userDeletePlaylist($playlist_id);
				getAllUserPlaylistsAndVideoPlaylist($_SESSION['user']->user_id);
				header("Location: ".WEBSITE_URL."/playlist/user-playlists/user-playlists.php");
			}
			break;

}
