<?php
require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/DAL.php';
 
function getMostLikedVideosRowsTable(){
	$sql = "SELECT video_id , video_name, video_description, video_link, video_user, category_name, user_name, count(*) AS video_has_likes FROM likes INNER JOIN videos ON likes.like_video_id = videos.video_id INNER JOIN users ON videos.video_user = users.user_id  INNER JOIN categories ON videos.video_category = categories.category_id GROUP BY like_video_id ORDER BY video_has_likes DESC";
    $mostLikedVideosRowsTable = get_array($sql,null);
	return $mostLikedVideosRowsTable;
}

function getVideoLikes($video_id) {
    $video_id = $video_id;
    $sql = "SELECT count(*) AS total_rows FROM likes WHERE `like_video_id`=?";
    $params_arr = array();
    array_push($params_arr,$video_id);
   $count = get_object($sql,$params_arr)->total_rows;
   return $count;
}

function checkIfUserAlreadyLikeVideo($user_id_arg, $video_id_arg){
    $user_id = $user_id_arg;
    $video_id = $video_id_arg; 
    $sql = "SELECT count(*) AS total_rows FROM likes WHERE `like_user_id`=? AND `like_video_id`=?";
    $params_arr = array();
    array_push($params_arr,$user_id,$video_id);
    $count = get_object($sql, $params_arr)->total_rows;
    return $count < 1;
}

function userAddLikeToVideo($user_id_arg, $video_id_arg){
    $user_id = addslashes($user_id_arg);
    $video_id = addslashes($video_id_arg);
    if(checkIfUserAlreadyLikeVideo($user_id, $video_id)){
    $sql = "INSERT INTO likes (like_user_id, like_video_id) VALUES (?,?)";
    $params_arr = array();
    array_push($params_arr,$user_id,$video_id);
    $newLike = insert($sql,$params_arr);
    return $newLike;
    }else{
        userDeleteLike($user_id, $video_id);
        return false;
    }
}

function userDeleteLike($user_id_arg, $video_id_arg){
    $user_id = addslashes($user_id_arg);
    $video_id = addslashes($video_id_arg);
        $sql = "DELETE FROM likes WHERE `like_user_id`=? AND `like_video_id`=?";
        $params_arr = array();
       array_push($params_arr, $user_id, $video_id);
        delete($sql,$params_arr);
    }

    function deleteAllVideosLikes($video_id_arg){
        $video_id = addslashes($video_id_arg);
        $sql = "DELETE FROM likes WHERE `like_video_id`=?";
        $params_arr = array();
       array_push($params_arr, $video_id);
        delete($sql, $params_arr);
    }