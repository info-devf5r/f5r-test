<?php 
	function getCommentNumberElement($video){
		echo "
		<div id='commentsDiv' class='container'>
		<h4 >Comments: <span id='commentsNumber".$video->video_id."' >".getVideosCommentsNumber($video->video_id)."</span>
		</h4>
		";
	}
	function getAllVideoCommentsElementForNotLoginUser($comments){
		include_once __DIR__.'../../../config.php';
		foreach ($comments as $value) {
			echo "
			<div id='comment".$value->comment_id."' class='row justify-content-start'>
			<p class='col-12'>  
			<a href='".WEBSITE_URL."/video/user-video/user-video.php?user=".$value->comment_user_id."&name=".$value->user_name."' >".$value->user_name."</a>
			</p>
			
			<p class='col-12'>".$value->comment_title."</p>
			<p class='col-12'>".$value->comment_description."</p>
			</div>
			";	
		}
		echo "</div>";//<div id='commentsDiv' class='container'>
	}
	function getAllVideoCommentsElementForLoginUser($video,$comments){
		include_once __DIR__.'../../../config.php';
		foreach ($comments as $value) {
			echo "
			<div id='comment".$value->comment_id."' class='row justify-content-start'>
			<p class='col-12'> 
			<a href='".WEBSITE_URL."/video/user-video/user-video.php?user=".$value->comment_user_id."&name=".$value->user_name."' >".$value->user_name."</a>
			";
			if($_SESSION['user']->user_id == $value->comment_user_id){
				echo"
				<a onclick=\"userDeleteComment(".$value->comment_id.",'commentsNumber".$video->video_id."')\">
				<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'/>
				</a>
				";
				}
			echo"
			</p>
			
			<p class='col-12'>".$value->comment_title."</p>
			<p class='col-12'>".$value->comment_description."</p>
			";
			
			echo "</div>";
		}
		echo "</div>";//<div id='commentsDiv' class='container'>
	}
	function getAllVideoCommentsElementForLoginUserOnPlaylistPagePhone($video,$comments,$comment_div){
		include_once __DIR__.'../../../config.php';
		echo "
		
		<a  class='btn btn-secondary w-100 phone-playlist-videos-dropdown-btn-a' data-toggle='collapse' href='#collapsePlaylistVideoCommentsOnPhone' role='button' aria-expanded='false' aria-controls='collapsePlaylistVideoOnPhone'>
		Comments:  <span id='commentsNumber".$video->video_id."'>".getVideosCommentsNumber($video->video_id)."</span>
		</a>
		<div class='collapse' id='collapsePlaylistVideoCommentsOnPhone'>
		<div id='commentsDivPlaylistPhone' class='card card-body container'>
		";
		getAddCommentForm($video,$comment_div,'commentFormPlaylistPhone', 'commentsNumber'.$video->video_id);

		foreach ($comments as $value) {
			echo "
			<div id='comment".$value->comment_id."' class='row justify-content-start'>
			<p class='col-12'> 
			<a href='".WEBSITE_URL."/video/user-video/user-video.php?user=".$value->comment_user_id."&name=".$value->user_name."' >".$value->user_name."</a>
			";
			if($_SESSION['user']->user_id == $value->comment_user_id){
				echo"
				<a onclick=\"userDeleteComment(".$value->comment_id.",'commentsNumber".$video->video_id."')\">
				<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'/>
				</a>
				";
				}
			echo"
			</p>
			
			<p class='col-12'>".$value->comment_title."</p>
			<p class='col-12'>".$value->comment_description."</p>
			";
			
			echo "</div>";
		}
		echo "</div> <!--collapse div -->";
		echo "</div> <!--card card-body div -->";
		echo "</div> <!--div id='commentsDivPlaylistPhone' class='container' -->";
	}

	function getAddCommentForm($video,$comments_div,$comments_form_name,$comments_span_id){
		include_once __DIR__.'../../../config.php';
		
	echo "
																
	<div class='row justify-content-start'>
		<form class='form-group container' name='".$comments_form_name."' onsubmit=\"event.preventDefault();  userAddCommentToVideo('".$comments_div."','".$comments_span_id."','".$comments_form_name."')\">
						
			<div class='form-row  row justify-content-center'>
				<input class='col-10 form-control' require name='title form-control' type='text' placeholder='Write comment title...'>	
					<div id='commentTitleValidationAlert' class='invalid-feedback d-block'>
					</div>			
			</div>

			<div class='form-row row justify-content-center'>
				<input class='form-control col-10' require name='description' type='text' placeholder='Write comment description...'>
						
				<div id='commentDescriptionValidationAlert' class='invalid-feedback d-block'>
				</div>			
			</div>
						
			<input  require name='video' value=".$video->video_id." type='hidden'>
						
			<div class='row justify-content-center'>
				<input class='col-8 btn btn-primary' type='submit' value='Add comment'>
			</div>

		</form>
	</div>
";
}