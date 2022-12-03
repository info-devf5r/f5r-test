<?php
include_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/error/get-error-message.php';

	function addVideoValidation(
		$video_name,$video_link,
		$video_category,$video_description){

		$err = '';
		
		if($video_name === ''){
			$err .= videoNameMissingErrorMessage();
 
		}elseif(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,50}/', $video_name)){
			$err .= videoNameErrorMessage();
		}

		if($video_link === ''){
			$err .= videoLinkMissingErrorMessage();
 
		}elseif(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,16}/', $video_link)){
			$err .= videoLinkErrorMessage();
		}
		
		if($video_category === ''){
			$err .= categoryMissingErrorMessage();
 
		}elseif(!preg_match('/^[0-9]+$/', $video_category)){
			$err .= categoryErrorMessage();
		}
		
		if($video_description !== '' ){
			if(!preg_match('/^[ \t\r\n\s]*$/', $video_description)){
				if(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,200}/', $video_description)){
					$err .= videoDescriptionErrorMessage();
					}
			}
	
		}
	 	
		if($err !== ''){
			return $err;
		}else{
			return true;
		}
	}


