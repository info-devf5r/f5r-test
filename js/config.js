function getWebsiteUrl (){
	if(location.protocol === 'http'){
		return "http://localhost:81/youtube-playlist-adi-levi";
	}else{
		return "https://youtube-playlist-adi-levi.herokuapp.com";
	}
}