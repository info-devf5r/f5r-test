<?php
session_start();
include_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/BLL/BLL-video.php';
require_once SITE_ROOT.'/video/add-video/add-video-validation.php';
require_once SITE_ROOT.'/video/user-update-video/user-update-video-validation.php';

$command = $_REQUEST["command"];

switch ($command) {

	case "user-add-video":
		
		if(isset($_POST['video-name'])){
		$video_name = $_POST['video-name'];
		}else{
			$video_name = '';
		}
		
		if(isset($_POST['video-link'])){
			$video_link = $_POST['video-link'];
		}else{
			$video_link = '';
		}

		if(isset($_POST['video-category'])){
			$video_category = $_POST['video-category'];
		}else{
			$video_category = '';
		}

		if(isset($_POST['video-description'])){
			$video_description = $_POST['video-description'];
		}else{
			$video_description = '';
		}
		
		$add_video_validation = addVideoValidation(
			$video_name,$video_link,
			$video_category,$video_description
		);
		if ($add_video_validation === true) {
				if (isVideoNameExist($video_name)) {
					die(header("Location: ".WEBSITE_URL."/video/add-video/add-video.php?error=&<strong>Video Name</strong> already taken"));
				}

				$video = addVideo(
					$video_name,
					$video_description,
					$video_link,
					$video_category,
					$_SESSION["user"]->user_id
				);
				if ($video) {
					header("Location: ".WEBSITE_URL."/video/user-video/user-video.php?user=".$_SESSION['user']->user_id."&name=".$_SESSION['user']->user_name."");
				} else {
					header("Location: ".WEBSITE_URL."/video/add-video/add-video.php?error=&<strong>Server</strong> Error video not added");
				}
			}else{
				header("Location: ".WEBSITE_URL."/video/add-video/add-video.php?error=".$add_video_validation."");
			}
		
		break;


	case "get-all-videos":
		$videos = getAllVideos();
		echo json_encode($videos);
		break;


	case "get-all-user-videos":
		if (isset($_GET['user'])) {
			$user_id = $_GET['user'];
			$videos = getAllUserVideos($user_id);
			$_SESSION['videos'] = $videos;
			echo json_encode($videos);
		}
		break;


	case "search":
		if(isset($_GET['search-val'])){
			$video_search = $_GET["search-val"];
			$allVideoSearch = showAllSearch($video_search);
			$_SESSION['all-videos'] = $allVideoSearch;
			header("Location: ".WEBSITE_URL."/video/search-video/search-video.php");
		}else{
			
		}

		break;

		case "delete-user-video":
			if (isset($_GET['video-id'])) {
				$video_id = $_GET['video-id'];
				$videos = deleteUserVideo($video_id);
				header("Location: ".WEBSITE_URL."/video/user-delete-video/user-delete-video.php");
			}
			break;
			case "update-user-video":
					if (
					isset($_POST['video-name']) && isset($_POST['video-link']) &&
					isset($_POST['video-category']) && isset($_POST['video-id'])&&
					isset($_POST['video-description'])
				) {
					$video_name =  $_POST['video-name'];
					$video_description =  $_POST['video-description'];
					$video_link =  $_POST['video-link'];
					$video_category =  $_POST['video-category'];
					$video_id =  $_POST['video-id'];
					if (updateVideoValidation(
						$video_name,
						$video_link,
						$video_category,
						$video_description,
						$video_id
					) === true) {
						if (getVideoName($video_id)->video_name != $video_name) {
							if (isVideoNameExist($video_name)) {
								die(header("Location: ".WEBSITE_URL."/video/user-update-video/user-update-video.php?error=&<strong>Video Name</strong> already taken"));
							}
						}
		
						$updateFailedOrSuccess = updateVideo(
							$video_id,
							$video_name,
							$video_description,
							$video_link,
							$video_category
						);
						if ($updateFailedOrSuccess === true) {
							header("Location: ".WEBSITE_URL."/video/user-update-video/user-update-video.php");
						} else {
							die(header("Location: ".WEBSITE_URL."/video/user-update-video/user-update-video.php?error=&Update Failed"));
						}
					}
				}
				break;
}
