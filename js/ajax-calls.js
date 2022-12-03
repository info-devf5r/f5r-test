
function makeAjaxCall(url, methodType){
	var promiseObj = new Promise(function(resolve, reject){
	   var xhr = new XMLHttpRequest();
	   xhr.open(methodType,  getWebsiteUrl () + url, true);
		xhr.send();
	   xhr.onreadystatechange = function(){
	   if (xhr.readyState === 4){
		  if (xhr.status === 200){
			 var resp = xhr.responseText;
			 resolve(resp);
		  } else {
			 reject(xhr.status);
			console.log("xhr failed");
		  }
	   } else {
	   }
	}
  });
  return promiseObj;
 }
 function errorHandler(statusCode){
	console.log("failed with status", statusCode);
   }
  
   function getWebsiteUrl (){
	if(location.protocol === 'http:'){
		return "http://localhost:81/youtube-playlist-adi-levi";
	}else{
		return "https://youtube-playlist-adi-levi.herokuapp.com";
	}
}

