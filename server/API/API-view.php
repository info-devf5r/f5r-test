<?php
session_start();
include_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/BLL/BLL-view.php';

$command = $_REQUEST["command"];

switch ($command) {

	case "user-viewed-video":
        if(isset($_GET['video'])){
          $user_id = $_SESSION['user']->id;
          $video_id = $_GET['video'];
          $userViewedVIdeo =  addUserViewedVIdeo($user_id, $video_id);
           echo json_encode($userViewedVIdeo);
        }
        break;



      case "video-views":
        if(isset($_GET['video'])){
          $video_id = $_GET['video'];
          $videoViews =  getVideoViews($video_id);
          echo $videoViews;
        }
        break;
		case 'most-viewed-videos':
			$videosMostViewedVideos = getMostViewedVideos();
		  break;
	  
	  
		  case 'check-user-viewed-video':
			if(isset($_GET['video'])){
			  $user_id = $_SESSION['user']->user_id;
			  $video_id = $_GET['video'];  
			   if(checkIfUserAlreadyViewedVideo($user_id, $video_id)){
				if(addUserViewedVIdeo($user_id, $video_id) === false){
					die();
				}else{
					echo 'false';
				}
				
			   }else{
				echo "true";
	  
			   };   
			}
		  break;
}