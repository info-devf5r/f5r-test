<?php 
	 include_once __DIR__.'../../config.php';
	 require_once SITE_ROOT.'/error/error-message-div.php';

function getUserNameMissingErrorMessage(){
	$err_message = '&<strong>User Name</strong> Missing';
	return $err_message;
}
function getUserNameErrorMessage(){
	$err_message = '&<strong>User Name</strong> must be between 3 and 10 lower case letters and contain no numbers, spaces and symbols';
	return $err_message;
}

function getPasswordMissingErrorMessage(){
	$err_message = '&<strong>Password</strong> Missing';
	return $err_message;
}

function getPasswordErrorMessage(){
	$err_message = '&<strong>Password</strong> must be between 3 and 10 lower case letters and contain no numbers, spaces and symbols';
	return $err_message;
}

function firstNameMissingErrorMessage(){
	$err_message = '&<strong>First Name</strong> Missing';
	return $err_message;
}

function firstNameErrorMessage(){
	$err_message = '&<strong>First Name</strong> must be between 3 and 10 lower case letters and contain no numbers, spaces and symbols';
	return $err_message;
}
function lastNameMissingErrorMessage(){
	$err_message = '&<strong>Last Name</strong> Missing';
	return $err_message;
}

function lastNameErrorMessage(){
	$err_message = '&<strong>Last Name</strong> must be between 3 and 10 lower case letters and contain no numbers, spaces and symbols';
	return $err_message;
}
function phoneNumberMissingErrorMessage(){
	$err_message = '&<strong>Phone Number</strong> Missing';
	return $err_message;
}

function phoneNumberErrorMessage(){
	$err_message = '&<strong>Phone Number</strong> must be 10 numbers';
	return $err_message;
}
function passwordConfirmMissingErrorMessage(){
	$err_message = '&<strong>Passwords Confirm</strong> Missing';
	return $err_message;
}

function passwordConfirmErrorMessage(){
	$err_message = '&<strong>Passwords</strong> not much. Please try again';
	return $err_message;
}

function videoLinkMissingErrorMessage(){
	$err_message = '&<strong>Video Link</strong> Missing';
	return $err_message;
}

function videoLinkErrorMessage(){
	$err_message = '&<strong>Video Link</strong> must be between 3 and 16 letters and contain no spaces';
	return $err_message;
}

function categoryMissingErrorMessage(){
	$err_message = '&<strong>Video Category</strong> Missing';
	return $err_message;
}

function categoryErrorMessage(){
	$err_message = '&<strong>Video Category</strong> Pick Category';
	return $err_message;
}

function videoNameMissingErrorMessage(){
	$err_message = '&<strong>Video Name</strong> Missing';
	return $err_message;
}

function videoNameErrorMessage(){
	$err_message = '&<strong>Video Name</strong> must be between 3 and 50 letters and contain no spaces';
	return $err_message;
}

function videoDescriptionMissingErrorMessage(){
	$err_message = '&<strong>Video Description</strong> Missing';
	return $err_message;
}

function videoDescriptionErrorMessage(){
	$err_message = '&<strong>Video Description</strong> must be between 3 and 200 letters';
	return $err_message;
}
function emailMissingErrorMessage(){
	$err_message = '&<strong>Email</strong> Missing';
	return $err_message;
}

function emailErrorMessage(){
	$err_message = '&You have entered an invalid <strong>Email</strong> address. Please try again';
	return $err_message;
}

function videoIdErrorMessage(){
	$err_message = '&<strong>Server</strong> Error. Please try again';
	return $err_message;
}


function userNameExistErrorMessage(){
	$err_message = '&<strong>User Name</strong> already taken';
	return $err_message;
}

function phoneNumberExistErrorMessage(){
	$err_message = '&<strong>Phone Number</strong> already taken';
	return $err_message;
}

function emailExistErrorMessage(){
	$err_message = '&<strong>Email</strong> already taken';
	return $err_message;
}













	
