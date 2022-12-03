<?php
	include_once __DIR__.'../../../../config.php';
	require_once SITE_ROOT.'/register/register-validation.php';
	 require_once SITE_ROOT.'/server/BLL/BLL-authentication.php';


function register_authentication(
	$user_name_arg,$password_arg,
	$password_confirm_arg,$first_name_arg,
	$last_name_arg,$phone_number_arg,$email_arg){
	include_once __DIR__.'../../../../config.php';
	$user_name =  $user_name_arg;
	$password =  $password_arg;
	$password_confirm =  $password_confirm_arg;
	$first_name =  $first_name_arg;
	$last_name =  $last_name_arg;
	$phone_number =  $phone_number_arg;
	$email =  $email_arg;

	$register_validation = registerValidation(
	$user_name,$password,
	$password_confirm,$first_name,
	$last_name,$phone_number,
	$email);
	if ($register_validation === true) {
		$new_user = register($user_name, $password, $first_name, $last_name, $phone_number, $email);
			$_SESSION['user'] = $new_user;
			header("Location: ".WEBSITE_URL."/");
	}else{
		die(header("Location: ".WEBSITE_URL."/register/register.php?error=".$register_validation));
	}
}