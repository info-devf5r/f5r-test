<?php
 session_start();
require_once __DIR__.'/config.php';
require_once __DIR__.'/server/BLL/BLL-category.php';
require_once __DIR__.'/server/BLL/BLL-like.php';
require_once __DIR__.'/server/BLL/BLL-view.php';
require_once __DIR__.'/includes/videos-template.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta property="og:image" content="https://img.icons8.com/nolan/64/playlist.png" />
<meta property="og:title" content="Youtube Playlist" />
<meta property="og:description" content="On this website, you can register, log in, create updates and delete youtube videos, create and delete playlists, and like videos." />
<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Youtube Playlist</title>
	<link rel="shortcut icon" href="https://img.icons8.com/nolan/64/playlist.png" type="image/x-icon"/>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&family=Open+Sans:ital,wght@0,400;0,700;1,600;1,800&family=Oswald&display=swap" rel="stylesheet">
<?php
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/share.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/videos-template.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/index.css'>";
?>


</head>
<body>
<?php
include('includes/main-header.php');
?>

<h1 class="text-center">Most Likes</h1>
<div id="mostLikedVideos" class="container-fluid" >
	<div class="row justify-content-center">
	<?php
	$most_liked_videos = getMostLikedVideosRowsTable();
	getVideosTemplate($most_liked_videos, 'mostLikedVideos');
	?>
	</div>
</div>
<hr class="w-100">

<h1 class="text-center">Most Views</h1> 
<div id="mostViewsVideos" class="container-fluid" >
	<div class="row justify-content-center">
	<?php
	$most_viewed_videos = getMostViewedVideos();
	
	getVideosTemplate($most_viewed_videos, 'mostViewsVideos');
	?>

	</div>
</div>

<hr class="w-100">
<h1 class="text-center">Genres</h1> 
<div id="genresDiv" class="container-fluid">
	<div class="row justify-content-center genresDivDiv">
		<?php
		$categories = getAllCategories();
		foreach ($categories as $value) {
			echo "
			<div  class='col-6 col-sm-4 col-md-4 col-lg-3'>
			<p>".$value->category_name."</p>
			<a href='".WEBSITE_URL_HTML_INCLUDE."/video/videos-by-category.php?category=".$value->category_id."&name=".$value->category_name."'>
 			<img  class='genre-img' src='".WEBSITE_URL_HTML_INCLUDE."/assets/images/genres/".strtolower($value->category_name)."-genre.jpg'>
			</a>
			</div>";
		}
		?>
	</div>
</div>
<?php
echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/ajax-calls.js'></script>";
echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/like.js'></script>";
echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/playlist.js'></script>";
echo "<script src='".WEBSITE_URL_HTML_INCLUDE."/js/view.js'></script>";
?>
</body>
</html>
