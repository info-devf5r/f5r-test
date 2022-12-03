<?php
session_start();
include_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/BLL/BLL-like.php';

$command = $_REQUEST["command"];

switch ($command) {

	case "user-like-video":
		if(!isset($_SESSION["user"])){
			die(header("Location: ".WEBSITE_URL."/login/login.php"));
		};
		if(isset($_GET['video'])){
		  $user_id = $_SESSION['user']->user_id;
		  $video_id = $_GET['video']; 
		  $like = userAddLikeToVideo($user_id, $video_id);
		  echo json_encode($like);
		}
	  break;
	  case "check-user-liked-video":
		if(isset($_GET['video'])){
		  $user_id = $_SESSION['user']->user_id;
		  $video_id = $_GET['video'];  
		  $like = checkIfUserAlreadyLikeVideo($user_id, $video_id);
		  echo json_encode($like);   
		}
	  break;
	  case "video-likes":
        if(isset($_GET['video'])){
          $video_id = $_GET['video'];
          $videoLikes =  getVideoLikes($video_id);
          echo $videoLikes;
        }
		break;
		case 'most-liked-videos':
			$videosOrderByLikes = getMostLikedVideosRowsTable();
		  break;
}