function userClickedVideo(userId,videoId, videoElement){
	if(userId === null){
	}else{
		setTimeout((function(){setTimeoutStop(videoId,videoElement)}), 1000);
	}
}

function checkIfUserViewVideo(videoIdArg,videoElementArg){
	let videoId = videoIdArg;	
	let videoElement = videoElementArg;
	let URL = '/server/API/API-view.php?command=check-user-viewed-video&video='+ videoId;
	makeAjaxCall(URL, "GET").then((function (v){
		if(v === "false"){
			getVideoViews(videoId,videoElement);	
		}
	}), errorHandler);
}
function setTimeoutStop(videoId,videoElement) {
	 checkIfUserViewVideo(videoId,videoElement);
	clearTimeout();
  }

function getVideoViews(videoIdArg,videoElementArg){
	let videoId = videoIdArg;	
	let videoElement = videoElementArg;
	let URL = '/server/API/API-view.php?command=video-views&video='+ videoId;
	makeAjaxCall(URL, "GET").then((function (v){
		console.log(videoElement);
		document.getElementById(videoElement).innerHTML = v;
	}), errorHandler);

}