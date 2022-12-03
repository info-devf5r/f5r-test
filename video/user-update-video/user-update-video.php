<?php
session_start(); 
include_once __DIR__.'../../../config.php';
if (isset($_SESSION["user"])) {
	require_once SITE_ROOT.'/server/BLL/BLL-video.php'; 
	require_once SITE_ROOT.'/server/BLL/BLL-like.php'; 
	require_once SITE_ROOT.'/server/BLL/BLL-view.php'; 
	$user = $_SESSION['user'];
	$videos = getAllUserVideos($user->user_id);
	$categories = $_SESSION['categories'];
} else {
	header("Location: ".WEBSITE_URL."/login/login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Update Video</title>
	<link rel="shortcut icon" href="https://img.icons8.com/nolan/64/playlist.png" type="image/x-icon"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&family=Open+Sans:ital,wght@0,400;0,700;1,600;1,800&family=Oswald&display=swap" rel="stylesheet">

<?php
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/share.css'>";
echo "<link rel='stylesheet' href='".WEBSITE_URL_HTML_INCLUDE."/css/user-update-video.css'>";
?>
</head>
<body>
<?php 
	 require_once SITE_ROOT.'/includes/main-header.php';
	 require_once SITE_ROOT.'/error/error-forms.php';
?>
<h1  class="text-center">Update video</h1>

<div class="table-responsive">
<table class="table table-dark   ">
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
  <th scope='col'>Update</th>

</tr>
</thead>
		";
	}

?>	

  <tbody>
		<?php
		for ($i = 0; $i < count($videos); $i++) {
	echo 
		" 	<tr id='". $videos[$i]->video_id  ."'>
			<form  method='POST' 
			action='".WEBSITE_URL."/server/API/API-video.php?command=update-user-video'
			>
			<td>
			
			<div class='form-group'>
			<input class='form-control form-inputs'  name='video-name' type='text'
			value='". $videos[$i]->video_name."'>
			</div>
			</td>

			<td>
			<div class='form-group'>
			<textarea class='form-control form-inputs' name='video-description'>". $videos[$i]->video_description."</textarea>
			</div>
			</td>

		

			<td>
			<div class='form-group'>
			<input class='form-control form-inputs' name='video-link' type='text' value='". $videos[$i]->video_link."'>
			</div>
			</td>

			<td >
			<div class='form-group'>
			<select name='video-category' class='custom-select form-inputs'>";
			for ($j = 0; $j < count($categories); $j++) {
				if($categories[$j]->category_id === $videos[$i]->video_category){
		
					echo "
					
					<option selected value='". $categories[$j]->category_id."'>
					". $categories[$j]->category_name."
					</option>
					";
				}else{	
				echo "
				<option value='". $categories[$j]->category_id."'>
				". $categories[$j]->category_name."
				</option>
				";
			}
			
			};
			echo"
			</select>
			</div>
			</td>

			<td><span  id='videoLikeSpan".$videos[$i]->video_id."'> ".getVideoLikes($videos[$i]->video_id)."  </span></td>
			<td><span  id='videoViewedSpan".$videos[$i]->video_id."'> ".getVideoViews($videos[$i]->video_id)."</span></td>

			<td>
			<input type='hidden' name='video-id' value='". $videos[$i]->video_id  ."'>
			<input class='btn btn-success' name='command ' type='submit' value='update-user-video'>
			</td>
			</form>
		  </tr>
		";
		
		}
		?>
  </tbody>
</table>
	</div>
</body>
</html>