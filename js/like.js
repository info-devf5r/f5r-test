function getVideoLikes(videoIdArg,videoDivId){
	let videoId = videoIdArg;	
	let URL = '/server/API/API-like.php?command=video-likes&video='+ videoId;
	makeAjaxCall(URL, "GET").then((function (v){
			document.getElementById(videoDivId.id + 'videoLikeSpan' +videoId).innerHTML = v;
		}), errorHandler);
}
function userClickLikeBtn(videoIdArg, videoDivId){
	let videoId = videoIdArg;	
	let URL = '/server/API/API-like.php?command=user-like-video&video='+ videoId;
	makeAjaxCall(URL, "GET").then((function (v){
		getVideoLikes(videoId,videoDivId);
		console.log(v);
		console.log(videoDivId);
		if(v === "false"){
			document.getElementById(videoDivId.id + 'videoLikeIcon' +videoId).setAttribute('src',"https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png");
		}else{
			document.getElementById(videoDivId.id + 'videoLikeIcon' +videoId).setAttribute('src',"https://img.icons8.com/nolan/64/facebook-like.png");
		}
	}), errorHandler);

}
function UserLikedVideo(videoIdArg,videoDivId){
	let videoId = videoIdArg;	
	let URL = '/server/API/API-like.php?command=check-user-liked-video&video='+ videoId;
	makeAjaxCall(URL, "GET").then((function (v){
		if(v === "false"){
			document.getElementById(videoDivId + 'videoLikeIcon' +videoId).setAttribute('src',"https://img.icons8.com/nolan/64/facebook-like.png");

		}
	}), errorHandler);
}
function checkIfUserLikedVideo(videoIdArg, videoDivId){
	let videoId = videoIdArg;	
	let URL = '/server/API/API-like.php?command=check-user-liked-video&video='+ videoId;
	makeAjaxCall(URL, "GET").then((function (v){
		if(v === "false"){
			document.getElementById(videoDivId + 'videoLikeIcon' +videoId).setAttribute('src',"https://img.icons8.com/nolan/64/facebook-like.png");
		}
	}), errorHandler);
}