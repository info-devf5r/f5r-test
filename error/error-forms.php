<?php
	 include_once __DIR__.'../../config.php';
	 require_once SITE_ROOT.'/error/error-message-div.php';

	 if(isset($_SERVER['REQUEST_URI'])){

	 $url = $_SERVER['REQUEST_URI'];
	 $url_arr = explode('?error=&',$url);

		if(count($url_arr) > 1){

		$errors_messages = explode('&', $url_arr[1]);
			for ($i=0; $i < count($errors_messages) ; $i++) { 
				getErrorMessageDiv(urldecode($errors_messages[$i]));
			}
		}

	}





