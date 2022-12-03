<?php 
require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/DAL.php';
 
function checkIfUserViewedVideo($user_id_arg, $video_id_arg) {
    $user_id = addslashes($user_id_arg);
    $video_id = addslashes($video_id_arg); 
    $sql = "SELECT count(*) AS total_rows FROM views WHERE `view_user_id`=? AND `view_video_id`=?";
    $params_arr = array();
   array_push($params_arr, $user_id, $video_id);
    $count = get_object($sql,$params_arr)->total_rows;
    return $count < 1;
}

function addUserViewedVIdeo ($user_id_arg, $video_id_arg) {
    $user_id = addslashes($user_id_arg);
    $video_id = addslashes($video_id_arg);
    if(checkIfUserViewedVideo($user_id, $video_id)){
        $sql = "INSERT INTO views (view_user_id, view_video_id) VALUES (?,?)";
        $params_arr = array();
       array_push($params_arr, $user_id, $video_id);
        $newView = insert($sql,$params_arr);
        return $newView;
    }else{
        return false;
    }
}

function getMostViewedVideos(){
	$sql = "SELECT video_id , video_name, video_description, video_link, video_user, category_name, user_name, count(*) AS video_has_views FROM views INNER JOIN videos ON views.view_video_id = videos.video_id INNER JOIN users ON videos.video_user = users.user_id INNER JOIN categories ON videos.video_category = categories.category_id GROUP BY view_video_id ORDER BY video_has_views DESC";
    $mostViewedVideosRowsTable = get_array($sql,null); 
	return $mostViewedVideosRowsTable;
}

function checkIfUserAlreadyViewedVideo($user_id_arg, $video_id_arg){
    $user_id = addslashes($user_id_arg);
    $video_id = addslashes($video_id_arg);
    $sql="SELECT count(*) AS total_rows FROM views WHERE `view_user_id`=? AND `view_video_id`=?";
    $params_arr = array();
   array_push($params_arr, $user_id, $video_id);
    $count = get_object($sql,$params_arr)->total_rows;
    return $count < 1;
}

function getVideoViews($video_id_arg) {
    if(is_string($video_id_arg)){
        $video_id = addslashes($video_id_arg);
    }
    $video_id = $video_id_arg;
     $sql = "SELECT count(*) AS total_rows FROM views WHERE `view_video_id`=?";
   $params_arr = array();
   array_push($params_arr, $video_id);
  $count = get_object($sql,$params_arr)->total_rows;
   return $count;
}

function deleteAllVideosViews($video_id_arg){
    $video_id = addslashes($video_id_arg);
        $sql = "DELETE FROM views WHERE `view_video_id`=?";
        $params_arr = array();
       array_push($params_arr, $video_id);
        delete($sql,$params_arr);   
    }