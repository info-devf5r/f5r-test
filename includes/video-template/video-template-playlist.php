<?php

	function getPlaylistElementForUserDoNotHavePlaylists(){
	
	}

	function getPlaylistIconForDropDown($video){
		if (isset($_SESSION['user_playlist'])) {
			echo "
			<img src='https://img.icons8.com/bubbles/50/000000/video-playlist.png' class='dropdown-toggle'
			data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' id='videoPlaylistIcon" . $video->video_id . "'>
			";
		}else{
			include_once __DIR__.'../../../config.php';
			echo "
				<a href='".WEBSITE_URL."/playlist/user-add-playlist/user-add-playlist.php'>
				<img src='https://img.icons8.com/bubbles/50/000000/video-playlist.png'>
				</a>";
		}
	
	}
	function getPlaylistCheckBoxElementCheck($video){


		if (isset($_SESSION['user_playlist'])) {
			echo "<div aria-labelledby='videoPlaylistIcon" . $video->video_id . "' class='dropdown-menu'>
			";
			$playlists = $_SESSION['user_playlist'];
	
			for ($j = 0; $j < count($playlists); $j++) {
				echo "<div class='custom-control custom-checkbox'>";
				if (checkIfPlaylistHasVideo($video->video_id, $playlists[$j]->playlist_id)) {
	
					echo "<input type='checkbox' onclick='userClickedPlaylistCheckBox(" . $video->video_id . "," . $playlists[$j]->playlist_id . ",this)' 
					class='custom-control-input' id='playlistCheckboxvideoSelected" . $video->video_id . "" . $playlists[$j]->playlist_id . "'>
					 <label class='custom-control-label' for='playlistCheckboxvideoSelected
					 " . $video->video_id . "" . $playlists[$j]->playlist_id . "'>" . $playlists[$j]->playlist_name . "</label>
						";
				} else {
					echo "<input onclick='userClickedPlaylistCheckBox(" . $video->video_id . "," . $playlists[$j]->playlist_id . ",this)'
													type='checkbox' class='custom-control-input' checked id='playlistCheckboxvideoSelected" . $video->video_id . "" . $playlists[$j]->playlist_id . "'  >
													<label class='custom-control-label' for='playlistCheckboxvideoSelected" . $video->video_id . "" . $playlists[$j]->playlist_id . "'>" . $playlists[$j]->playlist_name . "</label>
													";
				}
	
				echo "</div> <!-- checkbox div -->";
				
			}
			echo  "</div> <!-- dropdown-menu aria labelledby div -->";

	
		}

	}
