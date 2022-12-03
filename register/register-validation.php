<?php
include_once __DIR__.'../../config.php';
require_once SITE_ROOT.'/error/get-error-message.php';
 require_once SITE_ROOT.'/server/BLL/BLL-authentication.php';
	function registerValidation(
		$user_name,$password,
		$password_confirm,$first_name,
		$last_name,$phone_number,
		$email){

	   $err = '';
	   if($user_name === ''){
		   $err .= getUserNameMissingErrorMessage();
	   }elseif(!preg_match('/[a-z]{3,10}/', $user_name)){
		   $err .= getUserNameErrorMessage();
	   }
	   
   if($phone_number === ''){
		$err .= phoneNumberMissingErrorMessage();
	}elseif(!preg_match('/[0-9]{10}/', $phone_number)){
		$err .= phoneNumberErrorMessage();
	}
	if($password === ''){
		$err .= getPasswordMissingErrorMessage();
 	}elseif(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,16}/', $password)){
		$err .=  getPasswordErrorMessage();
	}

		if($password_confirm === ''){
			$err .= passwordConfirmMissingErrorMessage();
 		}elseif($password != $password_confirm){
			$err .=  passwordConfirmErrorMessage();
	   }

		if($first_name === ''){
			$err .= firstNameMissingErrorMessage();
 		}elseif(!preg_match('/[a-z]{3,10}/', $first_name)){
			$err .=  firstNameErrorMessage();
		}

		if($last_name === ''){
			$err .= lastNameMissingErrorMessage();
 		}elseif(!preg_match('/[a-z]{3,10}/', $last_name)){
			$err .=  lastNameErrorMessage();
		}
		if($email === ''){
			$err .= emailMissingErrorMessage();
 		}elseif(!preg_match('/(?:[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/', $email)){
			$err .=  emailErrorMessage();
		}
		if (isUserNameExist($user_name)) {
			$err .= userNameExistErrorMessage();
		}
		if (isPhoneNumberExist($user_name)) {
			$err .= phoneNumberExistErrorMessage();
		}
		if (isEmailExist($user_name)) {
			$err .= emailExistErrorMessage();
		}

		if($err !== ''){
			return $err;
		}else{
			return true;
		}

	}



