<?php
session_start(); 
include_once __DIR__.'../../../config.php';
if (isset($_SESSION["user"])) {
	require_once SITE_ROOT.'/server/BLL/BLL-video.php'; 
	require_once SITE_ROOT.'/server/BLL/BLL-like.php'; 
	require_once SITE_ROOT.'/server/BLL/BLL-view.php'; 

	$user = $_SESSION['user'];
	$videos = getAllUserVideos($user->user_id);
} else {
	header("Location: ".WEBSITE_URL."/login/login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Delete Video</title>
	<link rel="shortcut icon" href="https://img.icons8.com/nolan/64/playlist.png" type="image/x-icon"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&family=Open+Sans:ital,wght@0,400;0,700;1,600;1,800&family=Oswald&display=swap" rel="stylesheet">

<?php
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/share.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/user-delete-video.css'>";
?>
</head>
<body>
<?php 
	require_once SITE_ROOT.'/includes/main-header.php';
?>
<h1  class="text-center">Delete video</h1>
<div class="container">


<div class="row justify-content-center">

<table class="table table-dark d-none d-md-block ">
<?php if(empty($videos)){
				echo "
				<div class='row justify-content-center align-items-center'>
				<h3 class='text-center col-12'> ".$user->user_name." not have playlists</h3>
				<img src='https://img.icons8.com/cute-clipart/64/000000/nothing-found.png'>
				<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'>
				</div>
				";
	}else{
		echo "
		
<thead>
<tr>
  <th scope='col'>Video Name</th>
  <th scope='col'>Video Description</th>
  <th scope='col'>Video Link</th>
  <th scope='col'>Video Category</th>
  <th scope='col'>Likes</th>
  <th scope='col'>Views</th>
  <th scope='col'>Delete</th>

</tr>
</thead>
		";
	}

?>	


  <tbody >
		<?php
		for ($i = 0; $i < count($videos); $i++) {
	echo 
		" 	<tr id='". $videos[$i]->video_id  ."'>
			<form 
			action='".WEBSITE_URL."/server/API/API-video.php?command=delete-user-video'
			>
			<td>". $videos[$i]->video_name."</td>

			<td>". $videos[$i]->video_description."</td>

			<td>". $videos[$i]->video_link."</td>

			<td>". $videos[$i]->category_name."</td>

			<td><span  id='videoLikeSpan".$videos[$i]->video_id."'> ".getVideoLikes($videos[$i]->video_id)."  </span></td>
			<td><span  id='videoViewedSpan".$videos[$i]->video_id."'> ".getVideoViews($videos[$i]->video_id)."</span></td>
			<input type='hidden' name='video-id' value='". $videos[$i]->video_id  ."'>
			
			<td>
			<button class='delete-btn' type='submit' name='command' value='delete-user-video'>
			<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'>
			</button>
			</td>
			</form>

		  </tr>
		";
		
		}
		?>
  </tbody>


</table>
</div>
</div>
<table class="table table-dark d-block d-sm-none">
  <tbody>
		<?php
		$j = 0;
		for ($i = 0; $i < count($videos); $i++) {
	echo 
		" 	<tr id='". $videos[$i]->video_id  ."'>
			<th>Video Number:".++$j."</th>
			</tr>

			<tr>
			<th>Name:</th>
			<td>". $videos[$i]->video_name."</td>
			</tr>
			
			<tr>
			<th>Description:</th>
			<td>". $videos[$i]->video_description."</td>
			</tr>
			
			<tr>
			<th>Link:</th>
			<td>". $videos[$i]->video_link."</td>
			</tr>
			
			<tr>
			<th>Category:</th>
			<td>". $videos[$i]->category_name."</td>
			</tr>
			
			<tr>
			<th>Likes:</th>
			<td><span  id='videoLikeSpan".$videos[$i]->video_id."'> ".getVideoLikes($videos[$i]->video_id)."  </span></td>
			</tr>
			
			<tr>
			<th>Views:</th>
			<td><span  id='videoViewedSpan".$videos[$i]->video_id."'> ".getVideoViews($videos[$i]->video_id)."</span></td>
			</tr>
			
			<tr>
			<th>Delete:</th>
			<td>
			<form action='".WEBSITE_URL."/server/API/API-video.php?command=delete-user-video'>
			<input type='hidden' name='video-id' value='". $videos[$i]->video_id  ."'>		
			<button class='delete-btn' type='submit' name='command' value='delete-user-video'>
			<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'>
			</button>
			</form>
			</td>
		  </tr>

	
		";
		
		}
		?>
  </tbody>
</table>

</div>
</body>
</html>