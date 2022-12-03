<?php
require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/DAL.php';

function insertPlaylist($playlist_name_arg, $user_id_arg){
    $playlist_name = addslashes($playlist_name_arg);
    $user_id = addslashes($user_id_arg);
	$sql = "INSERT INTO playlists (playlist_id, playlist_name, playlist_user_id) VALUES (NULL,?,?) ";
    $params_arr = array();
     array_push($params_arr, $playlist_name,$user_id);
    $insert_id = insert($sql,$params_arr);
	$new_playlist = selectPlaylistById($insert_id);
	return $new_playlist;
}

function selectPlaylistById($playlist_id_arg){
    $playlist_id = addslashes($playlist_id_arg);
    $sql = "SELECT * FROM playlists WHERE `playlist_id`=?";
    $params_arr = array();
     array_push($params_arr, $playlist_id);
    $selected_playlist = get_object($sql,$params_arr);
	return $selected_playlist;
}

function selectAllUserPlaylists($user_id_arg){
    $user_id = addslashes($user_id_arg);
    $sql = "SELECT * FROM playlists WHERE `playlist_user_id`=?";
    $params_arr = array();
     array_push($params_arr, $user_id);
    $selected_playlists = get_array($sql,$params_arr);
	return  $selected_playlists;
}

function checkIfPlaylistHasVideo($video_id_arg, $playlist_id_arg){
    $video_id = addslashes($video_id_arg);
    $playlist_id = addslashes($playlist_id_arg);
    $sql="SELECT count(*) AS total_rows FROM playlists_videos WHERE `playlist_video_video_id`=? AND playlist_video_playlist_id=?";
    $params_arr = array();
     array_push($params_arr, $video_id, $playlist_id);
    $count = get_object($sql,$params_arr)->total_rows;
    return $count < 1;
}

function userAddNewVideoToPlaylist($video_id_arg, $playlist_id_arg){
    $video_id = addslashes($video_id_arg);
    $playlist_id = addslashes($playlist_id_arg);
    $sql = "INSERT INTO playlists_videos (playlist_video_video_id, playlist_video_playlist_id) VALUES (?,?)";
    $params_arr = array();
     array_push($params_arr, $video_id, $playlist_id);
    $newView = insert($sql,$params_arr);
    return $newView;
}

function userRemoveVideoFromPlaylist($video_id_arg, $playlist_id_arg){
    $video_id = addslashes($video_id_arg);
    $playlist_id = addslashes($playlist_id_arg);
    $sql = "DELETE FROM playlists_videos WHERE `playlist_video_video_id`=? AND `playlist_video_playlist_id`=?";
    $params_arr = array();
     array_push($params_arr, $video_id, $playlist_id);
    delete($sql,$params_arr);
}

function userDeletePlaylist($playlist_id_arg){
    $playlist_id = addslashes($playlist_id_arg);
    $sql_playlists_videos = "DELETE FROM playlists_videos WHERE `playlist_video_playlist_id`=?";
    $sql_playlists = "DELETE FROM playlists WHERE `playlist_id`=?";
    $params_arr = array();
     array_push($params_arr, $playlist_id);
    delete($sql_playlists_videos,$params_arr);
    delete($sql_playlists,$params_arr);
}

function getAllPlaylistVideos($playlist_id_arg){
    $playlist_id = addslashes($playlist_id_arg);
    $sql = "SELECT playlists_videos.playlist_video_video_id ,video_id, video_name, video_description, video_link, video_user, category_name,user_name FROM playlists_videos INNER JOIN videos ON playlists_videos.playlist_video_video_id = videos.video_id INNER JOIN categories ON videos.video_category = categories.category_id INNER JOIN users ON videos.video_user = users.user_id WHERE playlists_videos.`playlist_video_playlist_id`=?";
    $params_arr = array();
     array_push($params_arr, $playlist_id);
    $playlistVideos = get_array($sql,$params_arr);
    return $playlistVideos;
}

function deleteVideoFromAllPlaylists($video_id_arg){
    $video_id = addslashes($video_id_arg);
    $sql = "DELETE FROM playlists_videos WHERE `playlist_video_video_id`=?";
    $params_arr = array();
     array_push($params_arr, $video_id);
    delete($sql,$params_arr);
}

function addNewPlaylist($playlist_name_arg, $user_id_arg){
    $playlist_name = $playlist_name_arg;
    $user_id = $user_id_arg;
	$new_playlist = insertPlaylist($playlist_name, $user_id);
	return $new_playlist;
}

function getAllUserPlaylistsAndVideoPlaylist($user_id_arg){
    $user_id = $user_id_arg;
    $user_playlists = selectAllUserPlaylists($user_id);
    if ($user_playlists) {
        $_SESSION['user_playlist'] =  selectAllUserPlaylists($user_id);
        for ($i=0; $i < count($_SESSION['user_playlist']); $i++) { 			
            $_SESSION['user_playlist'][$i]->playlist_videos =  getAllPlaylistVideos($_SESSION['user_playlist'][$i]->playlist_id);
        }
    }else{
        unset($_SESSION['user_playlist']);
    }
}

