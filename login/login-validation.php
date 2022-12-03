<?php
	 include_once __DIR__.'../../config.php';
	 require_once SITE_ROOT.'/error/get-error-message.php';

	function loginValidation($user_name,$password){

		$err = '';
		if($user_name === ''){
			$err .= getUserNameMissingErrorMessage();

		}elseif(!preg_match('/[a-z]{3,10}/', $user_name)){
			$err .= getUserNameErrorMessage();
		}
		if($password === ''){
			$err .= getPasswordMissingErrorMessage();

		}elseif(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,16}/', $password)){
			$err .=  getPasswordErrorMessage();
		}

		if($err !== ''){
			return $err;
		}else{
			return true;
		}
	}