<?php
require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/API/API-authentication/API-authentication-login.php';
require_once SITE_ROOT.'/server/API/API-authentication/API-authentication-register.php';

	 $command = $_REQUEST["command"];

	 switch ($command) {

		case "LOGIN":

			if (isset( $_POST['user-name'] )) {
				$user_name =  $_POST['user-name'];
			}else{
				$user_name = '';
			}
			if (isset($_POST['password'])) {
				$password =  $_POST['password'];
			}else{
				$password = '';
			}
			login_authentication($user_name,$password);
			break;
		
		  case "logout":
			logout_authentication();
			break;

			case "register":

				if (isset( $_POST['user-name'] )) {
					$user_name =  $_POST['user-name'];
				}else{
					$user_name = '';
				}
				if (isset($_POST['password'])) {
					$password =  $_POST['password'];
				}else{
					$password = '';
				}
				if (isset($_POST['password-confirm'])) {
					$password_confirm =  $_POST['password-confirm'];
				}else{
					$password_confirm = '';
				}
				if (isset($_POST['first-name'])) {
					$first_name =  $_POST['first-name'];
				}else{
					$first_name = '';
				}
				if (isset($_POST['last-name'])) {
					$last_name =  $_POST['last-name'];
				}else{
					$last_name = '';
				}
				if (isset($_POST['phone-number'])) {
					$phone_number =  $_POST['phone-number'];
				}else{
					$phone_number = '';
				}
				if (isset($_POST['email'])) {
					$email =  $_POST['email'];
				}else{
					$email = '';
				}
			register_authentication(
				$user_name,$password,
				$password_confirm,$first_name,
				$last_name,$phone_number,$email);
				break;
	 }

	

function logout_authentication(){
	session_destroy();
	require_once __DIR__.'../../../config.php';
	header("Location: ".WEBSITE_URL."");

}
