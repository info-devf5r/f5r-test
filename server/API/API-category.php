<?php
session_start();
include_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/BLL/BLL-category.php';



$command = $_REQUEST["command"];

switch ($command) {
  case "category-list":
    $allCategories =  getAllCategories();
    $_SESSION['categories']= $allCategories;
    echo json_encode($allCategories);
	break;
	
	case "video-by-category":
		if(isset($_GET['category'])){
		  $category_id = $_GET['category'];
		  $allVideosByCategory =  getAllVideosByCategoryId($category_id);
		  echo json_encode($allVideosByCategory);
		}
		break;

}
