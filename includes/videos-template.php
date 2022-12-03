<?php
include_once __DIR__ . '../../config.php';
require_once SITE_ROOT . '/server/BLL/BLL-like.php';
require_once SITE_ROOT . '/server/BLL/BLL-view.php';
require_once SITE_ROOT . '/server/BLL/BLL-playlist.php';

require_once SITE_ROOT . '/includes/videos-template/videos-not-found-div.php';
require_once SITE_ROOT . '/includes/videos-template/videos-details.php';
require_once SITE_ROOT . '/includes/videos-template/user-login/get-videos-like-playlist-view-btns-user-login.php';
require_once SITE_ROOT . '/includes/videos-template/user-not-login/get-videos-like-view-btns-user-not-login.php';

function getVideosTemplate($videos, $videos_id_div)
{
	if (count($videos) < 1) {
		getVideosNotFoundDiv();
	} else {
		for ($i = 0; $i < count($videos); $i++) {
			echo "
				<div class='videoCard-" . $videos[$i]->video_id . " col-12 col-sm-6 col-md-6 col-lg-3'>
				<a  href='" . WEBSITE_URL . "/video/selected-video/selected-video.php?video=" . $videos[$i]->video_id . "'>
				<img style='width: 100%' src='https://img.youtube.com/vi/" . $videos[$i]->video_link . "/hqdefault.jpg'>
				</a>
				";
			getVideosDetails($videos[$i]);

			if (isset($_SESSION['user'])) {
				getVideosLikePlaylistViewBtnsUserLogin($videos[$i], $videos_id_div);
			} else {
				getVideosLikeViewBtnsUserNotLogin($videos[$i], $videos_id_div);
			}
			echo "</div> <!-- videoDetailsAndImgDiv -->";
			echo "</div> <!-- videoCard -->";
		}
	}
}

function getPlaylistVideosOnSelectedPlaylistPage($playlist_selected, $playlist_selected_video_id, $selected_playlist_id)
{
	echo "<div class='container'>	";
	for ($j = 0; $j < count($playlist_selected); $j++) {
		if ($j != $playlist_selected_video_id) {
			echo "
			<div class='row'>
			<a class='col-5'  href='" . WEBSITE_URL . "/playlist/user-selected-playlist/user-selected-playlist.php?playlist=" . $selected_playlist_id . "&video=" . $j . "'>
				<img class='w-100' src='https://img.youtube.com/vi/" . $playlist_selected[$j]->video_link . "/hqdefault.jpg'>
			</a>
			<div class='col-7'>
			<span>".$playlist_selected[$j]->video_name." </span>
			<div>
				<span>likes ";
		echo getVideoLikes($playlist_selected[$j]->video_id);
		echo "| </span>
		<span>views ";
		echo getVideoViews($playlist_selected[$j]->video_id);
		echo "</span>
			</div>			
		</div> <!-- video name like view div -->
			</div> <!-- row div -->
			<hr class='w-100'>
			";
		}
	}
	echo "</div> <!-- container div -->";
}
