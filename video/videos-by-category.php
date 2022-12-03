
<?php
 session_start();
 include_once __DIR__.'../../config.php';
 require_once SITE_ROOT.'/server/BLL/BLL-category.php';
 require_once SITE_ROOT.'/includes/videos-template.php';

 $url = $_SERVER['REQUEST_URI'];
 $url_arr = explode('?category=',$url);
 $category_id_name_arr = explode('&name=',$url_arr[1]);
 $category_name = $category_id_name_arr[1] ;
$category_id = $category_id_name_arr[0];
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>videos by category</title>
	<link rel="shortcut icon" href="https://img.icons8.com/nolan/64/playlist.png" type="image/x-icon"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&family=Open+Sans:ital,wght@0,400;0,700;1,600;1,800&family=Oswald&display=swap" rel="stylesheet">

<?php
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/share.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/videos-template.css'>";
?>
</head>
<body>
		<?php 
		require_once SITE_ROOT.'/includes/main-header.php';
		?>
		<h1 class='text-center'> <?php echo $category_name; ?> Videos</h1>
		<div id="videosByCategory" class="container-fluid">
		<div class="row justify-content-center">
		<?php
		$videos = getAllVideosByCategoryId($category_id);
		getVideosTemplate($videos, 'videosByCategory');
		?>
		</div>
		</div>
		 <?php
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/ajax-calls.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/like.js'></script>";
			echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/playlist.js'></script>";
		?>
</body>
</html>