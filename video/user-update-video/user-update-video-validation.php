<?php

	function updateVideoValidation(
		$video_name,$video_link,
		$video_category,$video_description,$video_id){

		$err = ''; 
		if(checkIfStringIsEmpty($video_name) === true){
			if(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,50}/', $video_name)){
				$err .= videoNameErrorMessage();
			}
		}
	
		if(checkIfStringIsEmpty($video_link) === true){
			if(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,16}/', $video_link)){
				$err .= videoLinkErrorMessage();
			}
		}
	
		if(checkIfStringIsEmpty($video_category) === true){
			if(!preg_match('/^[0-9]+$/', $video_category)){
				$err .= categoryErrorMessage();
			}
		}
		if(checkIfStringIsEmpty($video_id) === true){
			if(!preg_match('/^[0-9]+$/', $video_id)){
				$err .= videoIdErrorMessage();
			}
		}
		if(checkIfStringIsEmpty($video_description) === true){
			if(!preg_match('/[a-zA-Z0-9!@#%*&^]{3,200}/', $video_description)){
				$err .= videoDescriptionErrorMessage();
			}
		}
	 	
		if($err !== ''){
			return $err;
		}else{
			return true;
		}
	}


	function checkIfStringIsEmpty($string){
		if(!preg_match('/^[ \t\r\n\s]*$/', $string) || $string !== ''){
			return true;
		}else{
			return false;
		}
	}