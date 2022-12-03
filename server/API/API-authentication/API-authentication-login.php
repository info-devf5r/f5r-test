<?php
	session_start();
	include_once __DIR__.'../../../../config.php';
	require_once SITE_ROOT.'/login/login-validation.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-authentication.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-playlist.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-video.php';

function login_authentication($user_name_arg,$password_arg){
	include_once __DIR__.'../../../../config.php';
	$user_name =  $user_name_arg;
	$password =  $password_arg;
	$login_validation = loginValidation($user_name,$password);
	if ($login_validation === true) {
		$user = isUserExist($user_name, $password);
		if ($user) {
			$user_login = $user;
			$_SESSION['user'] = $user_login;
			if (selectAllUserPlaylists($user_login->user_id)) {
				getAllUserPlaylistsAndVideoPlaylist($user_login->user_id);
						}
			if (getAllUserVideos($user_login->user_id)) {
				$_SESSION['user_videos'] =  getAllUserVideos($user_login->user_id);
			}
			header("Location: ".WEBSITE_URL."/");
		} else {
			header("Location: ".WEBSITE_URL."/login/login.php?error=&Invalid <strong>User Name</strong> or <strong>Password</strong>");
		}
	}else{
		die(header("Location: ".WEBSITE_URL."/login/login.php?error=".$login_validation));
	}
}