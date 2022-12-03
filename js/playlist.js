
function getPhoneOrDesktopUserSelectedPlaylistPageOnResize(x, URL , playlistId, videoId) {
	if (x.matches) { // If media query matches
	// desktop
	window.location.replace(URL + '-desktop.php?playlist=' + playlistId + '&video=' +videoId);
} else {
	//phone
	window.location.replace(URL + '-phone.php?playlist=' + playlistId + '&video=' +videoId);	
	}
}
function getUserSelectedPlaylistPhoneOrDesktopPageOnLoade() {

	let URL = window.location.href.split('user-selected-playlist.php');

	if(window.outerWidth > 576){
		// desktop
		window.location.replace(URL[0] + 'user-selected-playlist-desktop.php' + URL[1]);
	}else{
		//phone
		window.location.replace(URL[0] + 'user-selected-playlist-phone.php' + URL[1]);

	}

}
function activateMediaQuery(URL, playlistId, videoId) {
	var x = window.matchMedia("(min-width: 576px)");
	x.addListener((function (){getPhoneOrDesktopUserSelectedPlaylistPageOnResize(x,URL , playlistId, videoId)})) // Attach listener function on state changes
}

function userClickedPlaylistCheckBox(videoId,playlistId,inputElementArg){
	let inputElement = inputElementArg;
	if(inputElement.checked === true){ //ture if input is checked
		let URL = '/server/API/API-playlist.php?command=user-add-video-to-playlist&video='+ videoId + '&playlist=' + playlistId;
		makeAjaxCall(URL, "GET").then((function (v){
			if(String(v) === 'true'){
				inputElement.checked = true;
			}else{
				inputElement.checked = false;
			}

		}), errorHandler);
	}else{
		let URL = '/server/API/API-playlist.php?command=user-remove-video-from-playlist&video='+ videoId + '&playlist=' + playlistId;
		makeAjaxCall(URL, "GET").then((function (v){
			inputElement.checked = false;	
		}), errorHandler);
	}
 }

 function userDeletePlaylist(playlistId){
	 let deletePlaylist = confirm('Are you sure you want to delete playlist?');
	 if(deletePlaylist === true){
		 let websiteUrl;
		if(location.protocol === 'http:'){
			websiteUrl = "http://localhost:81/youtube-playlist-adi-levi";
		}else{
			websiteUrl = "https://youtube-playlist-adi-levi.herokuapp.com";
		}
		let URL = websiteUrl+"/server/API/API-playlist.php?command=user-delete-playlist&playlist="+ playlistId;
		window.location.replace(URL);
	 }
 }
 

