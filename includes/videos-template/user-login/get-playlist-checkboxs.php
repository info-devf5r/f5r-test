<?php

function getPlaylistDoNotHasVideoCheckBox($video, $videos_id_div, $playlist){
	echo "<p><input type='checkbox' onclick='userClickedPlaylistCheckBox(".$video->video_id.",".$playlist->playlist_id.",this)' 
	class='custom-control-input' id='playlistCheckbox".$videos_id_div."".$video->video_id."".$playlist->playlist_id."'>
	 <label class='custom-control-label' for='playlistCheckbox".$videos_id_div."".$video->video_id."".$playlist->playlist_id."'>".$playlist->playlist_name."</label>
	</p>
	 ";
}

function getPlaylistHasVideoCheckBox($video, $videos_id_div, $playlist){
	echo "<p><input onclick='userClickedPlaylistCheckBox(".$video->video_id.",".$playlist->playlist_id.",this)'
	type='checkbox' class='custom-control-input' checked id='playlistCheckbox".$videos_id_div."".$video->video_id."".$playlist->playlist_id."'  >
	<label class='custom-control-label' for='playlistCheckbox".$videos_id_div."".$video->video_id."".$playlist->playlist_id."'>".$playlist->playlist_name."</label>
	</p>
	";
}