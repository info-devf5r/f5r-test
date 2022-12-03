<?php
require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/DAL.php';
 require_once SITE_ROOT.'/server/BLL/BLL-like.php';
 require_once SITE_ROOT.'/server/BLL/BLL-view.php';
 require_once SITE_ROOT.'/server/BLL/BLL-playlist.php';
 require_once SITE_ROOT.'/server/BLL/BLL-comment.php';

function checkVideoName($video_name_arg){
    $video_name = addslashes($video_name_arg);
    $sql = "SELECT count(*) AS total_rows FROM videos WHERE `video_name`=?";
    $params_arr = array();
   array_push($params_arr, $video_name);
    $count = get_object($sql,$params_arr)->total_rows;
    return $count < 1;
}

function addVideo(
    $video_name_arg, $video_description_arg,
    $video_link_arg, $video_category_arg, $video_user_arg 
  ){
    $video_name = addslashes($video_name_arg);
    $video_description = addslashes($video_description_arg);
    $video_link = addslashes($video_link_arg);
    $video_category = addslashes($video_category_arg);
    $video_user = addslashes($video_user_arg);

    if(checkVideoName($video_name)){ 
    $sql = "INSERT INTO videos (video_id, video_name, video_description, video_link, video_category, video_user) VALUES (NULL,?,?,?,?,?)";
   $params_arr = array();
  array_push(
     $params_arr,  $video_name, $video_description,
   $video_link, $video_category, $video_user);
    $video_id = insert($sql,$params_arr);
    $new_video = getVideoById($video_id);
    return $new_video;
    }else{
        return false;
    }
  }   

function updateVideo(
    $video_id_arg,$video_name_arg, $video_description_arg,
    $video_link_arg, $video_category_arg
  ){
    $video_id = addslashes($video_id_arg);
    $video_name = addslashes($video_name_arg);
    $video_description = addslashes($video_description_arg);
    $video_link = addslashes($video_link_arg);
    $video_category = addslashes($video_category_arg);

    $sql = "UPDATE  videos SET  `video_name`=?, `video_description`=?, `video_link`=?, `video_category`=? WHERE `video_id`=?";
    $params_arr = array();
   array_push(
      $params_arr, 
      $video_name, $video_description,
      $video_link, $video_category,$video_id
     );
    $checkIfUpdateFailed = update($sql,$params_arr);
    
    if($checkIfUpdateFailed !== null){
        return false;
    }else{
        return true;
    }
  }

  function getVideoById($video_id_arg){
    $video_id = addslashes($video_id_arg);
    $sql = "SELECT video_id , video_name, video_description, video_link, video_user,video_category, category_name, user_name FROM videos INNER JOIN users ON videos.video_user = users.user_id  INNER JOIN categories ON videos.video_category = categories.category_id  WHERE `video_id`=?";
    $params_arr = array();
   array_push($params_arr, $video_id);
    $video = get_object($sql,$params_arr);
    return $video;
  }

  function getVideoName($video_id_arg){
    $video_id = addslashes($video_id_arg);
    $sql = "SELECT video_name FROM videos  WHERE `video_id`=?";
    $params_arr = array();
   array_push($params_arr, $video_id);
    $video = get_object($sql, $params_arr);
    return $video;
  }

  function isVideoNameExist($video_name_arg){
    $video_name = addslashes($video_name_arg);
    $sql = "SELECT count(*) AS total_rows from videos WHERE `video_name`=?";
    $params_arr = array();
   array_push($params_arr, $video_name);
    $count = get_object($sql, $params_arr)->total_rows;
    return $count > 0;
  }

function deleteUserVideo($video_id_arg){
    $video_id = addslashes($video_id_arg);
    $sql = "DELETE FROM videos WHERE video_id = '$video_id'";
    $params_arr = array();
   array_push($params_arr, $video_id);
    deleteAllVideosLikes($video_id);
	  deleteAllVideosViews($video_id);
    deleteVideoFromAllPlaylists($video_id);
    deleteAllVideoComments($video_id);
	  delete($sql, $params_arr);
}

function getAllVideos(){
    $sql = "SELECT video_id , video_name, video_description, video_link, video_user,video_category, category_name, user_name FROM videos INNER JOIN users ON videos.video_user = users.user_id  INNER JOIN categories ON videos.video_category = categories.category_id ";
    $all_videos = get_array($sql, null);
    return $all_videos;
}

function getAllUserVideos($video_id_arg){
    $video_id = addslashes($video_id_arg);
    $sql = "SELECT video_id , video_name, video_description, video_link, video_user,video_category, category_name, user_name FROM videos INNER JOIN users ON videos.video_user = users.user_id  INNER JOIN categories ON videos.video_category = categories.category_id WHERE `video_user`=?";
    $params_arr = array();
   array_push($params_arr, $video_id);
    $all_videos = get_array($sql,$params_arr);
    return $all_videos;
}

function showAllSearch($video_search_arg) {
    $video_search = addslashes($video_search_arg);
    $video_search = '%'.$video_search.'%';
    $sql = "SELECT video_id , video_name, video_description, video_link, video_user,video_category, category_name, user_name FROM videos INNER JOIN users ON videos.video_user = users.user_id  INNER JOIN categories ON videos.video_category = categories.category_id  WHERE (video_description LIKE ? or video_name LIKE ?)";
    $params_arr = array();
   array_push($params_arr, $video_search, $video_search);
    $allVideoSearch = get_array($sql, $params_arr);
    return $allVideoSearch;
}