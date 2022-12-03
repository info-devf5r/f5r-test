<?php
require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/DAL.php';

function getAllVideoComments($video_id_arg){
	$video_id = addslashes($video_id_arg);
	$sql = "SELECT comment_id, comment_title, comment_description, comment_user_id, comment_video_id, user_name FROM comments INNER JOIN users ON users.user_id = comment_user_id  WHERE `comment_video_id`=?";
	$params_arr = [];
	 array_push($params_arr, $video_id);
	$comments = get_array($sql,$params_arr);
	return $comments;
}

function addCommentToVideo($video_id_arg, $video_title_arg, $video_description_arg){
	$video_title = addslashes($video_title_arg);
	$video_description = addslashes($video_description_arg);
	$video_id = addslashes($video_id_arg);
	$user_id = $_SESSION['user']->user_id;
	$sql = "INSERT INTO comments (comment_id, comment_title, comment_description, comment_video_id, comment_user_id) VALUES(NULL,?,?,?,?)";
	$params_arr = [];
	 array_push($params_arr, $video_title, $video_description, $video_id, $user_id);
	$comments = insert($sql, $params_arr);
	return $comments;
}

function getCommentById($comment_id_arg){
	$comment_id = addslashes($comment_id_arg);
	$sql = "SELECT comment_id, comment_title, comment_description, comment_user_id, comment_video_id, user_name FROM comments INNER JOIN users ON users.user_id = comment_user_id  WHERE `comment_id`=?";
	$params_arr = [];
	 array_push($params_arr, $comment_id);
	$comment = get_object($sql,$params_arr);
	return $comment;
}

function userDeleteComment($comment_id_arg){
	$comment_id = addslashes($comment_id_arg);
	$sql = "DELETE FROM comments WHERE `comment_id`=?";
	$params_arr = [];
	 array_push($params_arr, $comment_id);
	delete($sql, $params_arr);
}

function getVideosCommentsNumber($video_id_arg){
	$video_id = addslashes($video_id_arg);
	$sql = "SELECT count(*) total_rows FROM comments WHERE `comment_video_id`=?";	
	$params_arr = [];
	 array_push($params_arr, $video_id);
	$count = get_object($sql, $params_arr)->total_rows;
	return $count;
}

function deleteAllVideoComments($video_id_arg){
	$video_id = addslashes($video_id_arg);
	$sql = "DELETE FROM comments WHERE `comment_video_id`=?";
	$params_arr = [];
	 array_push($params_arr, $video_id);
	delete($sql, $params_arr);
}
