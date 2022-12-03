<?php

require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/DAL.php';

 function getAllCategories(){
    $sql = "SELECT * FROM categories";
	$allCategories = get_array($sql, null);
	$_SESSION["categories"] = $allCategories;
    return $allCategories;

}

function getAllVideosByCategoryId($categoryId_arg) {
    $categoryId = addslashes($categoryId_arg);
	$sql = "SELECT  video_id , video_name, video_description, video_link, video_user, category_name, user_name FROM videos INNER JOIN users ON videos.video_user = users.user_id  INNER JOIN categories ON videos.video_category = categories.category_id WHERE `video_category`=?";
	$params_arr = [];
	 array_push($params_arr, $categoryId);
    $allCategories = get_array($sql,$params_arr);
    return $allCategories;
}