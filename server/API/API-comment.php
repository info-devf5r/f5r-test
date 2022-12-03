<?php
session_start();
include_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/BLL/BLL-comment.php';

$command = $_REQUEST["command"];

switch ($command) {
  case "get-comments-video":
	if(isset($_GET['video'])){
		$video_id = $_GET['video'];
		$all_videos_comments =  getAllVideoComments($video_id);
		return $all_videos_comments;
	}
	break;
  case "user-add-comment-to-video":
	if(isset($_GET['video']) && isset($_GET['title']) && isset($_GET['description'])){
		$video_id = $_GET['video'];
		$video_title = $_GET['title'];
		$video_description = $_GET['description'];
		$new_comment_id = addCommentToVideo($video_id, $video_title, $video_description);
		$new_comment = getCommentById($new_comment_id);
		echo json_encode($new_comment);
	}
	break;

	case "user-delete-comment":
	if(isset($_GET['comment'])){
		$comment_id = $_GET['comment'];
		$check_if_comment_deleted = userDeleteComment($comment_id);
	}
	break;
	case 'get-videos-comment-number':
	if(isset($_GET['video'])){
		$video_id = $_GET['video'];
		return getVideosCommentsNumber($video_id);
	}
	break;
}
