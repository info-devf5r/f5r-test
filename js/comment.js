function userAddCommentToVideo(commentsDiv,commentsNumberArg,formName){
	let formInputs = document.getElementsByName(formName);
	let commentsNumber = document.getElementById(commentsNumberArg);
	let commentTitle = formInputs[0][0].value;
	let commentDescription = formInputs[0][1].value;
	let videoId = formInputs[0][2].value;
	let commentsDivId = document.getElementById(commentsDiv);

	if(userAddCommentToVideoValidation(commentTitle,commentDescription) === true){
		let URL = '/server/API/API-comment.php?command=user-add-comment-to-video&video='+videoId+'&title='+ commentTitle + '&description=' + commentDescription;
		makeAjaxCall(URL, "GET").then((function (v){
			let newComment = JSON.parse(v); 		
			let newCommentElement = createNewCommentElement(newComment);
			commentsDivId.insertAdjacentHTML('beforeend',newCommentElement);
			commentsNumber.innerHTML = ++commentsNumber.textContent;
		}), errorHandler);
	}else{

	}

}

function createNewCommentElement(newComment){
	return `
	<div  id='comment${newComment.comment_id}' class='row justify-content-start'>
	<p class='col-12'> 
	<a href='/video/user-video/user-video.php?user=${newComment.comment_user_id}&name=${newComment.user_name}' >${newComment.user_name}</a>
	<a class='col-4' onclick="userDeleteComment('${newComment.comment_id}','commentsNumber${newComment.comment_video_id}')">
	<img src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'/>
	</a>
	</p>
	<p class='col-12'>${newComment.comment_title}</p>
	<p class='col-12'>${newComment.comment_description}</p>
	
	</div>`;

}

function userDeleteComment(commentIdArg, commentsNumberIdArg){
	let commentId = commentIdArg;
	let commentsNumber = document.getElementById(commentsNumberIdArg);
	let URL = '/server/API/API-comment.php?command=user-delete-comment&comment='+commentId;
	makeAjaxCall(URL, "GET").then((function (v){
		document.getElementById('comment'+ commentId).remove();
		commentsNumber.innerHTML = --commentsNumber.textContent;
	}), errorHandler);
}

function validateInputs(elementName, errorMessage, data, regexp){
	let testData = new RegExp(regexp);
	if(testData.test(data)) {
		validateCuniform(elementName);
		return true;
	}else{
		validateFailed(elementName, errorMessage)
		return false;
	}
  }

function userAddCommentToVideoValidation(commentTitle,commentDescription){
	let commentTitleAndDescriptionRegExp = new RegExp(/[a-zA-Z0-9!@#%*&^]{3,16}/);
	
	let commentTitleErrorMessage = 'Comment <strong>Title</strong> Must be between 3 - 30 characters';
	let commentDescriptionErrorMessage = 'Comment <strong>Description</strong> Must be between 3 - 30 characters';
	
	let commentTitleErrorMessageElementId = 'commentTitle';
	let commentDescriptionErrorMessageElementId = 'commentDescription';
	
	let commentTitleValidation = validateInputs(
		commentTitleErrorMessageElementId,commentTitleErrorMessage,
		commentTitle,commentTitleAndDescriptionRegExp);
	let commentDescriptionValidation = validateInputs(
		commentDescriptionErrorMessageElementId,commentDescriptionErrorMessage,
		commentDescription,commentTitleAndDescriptionRegExp);
	
		if(commentTitleValidation === true && commentDescriptionValidation === true){
			return true;
		}else{
			return false;
		}
}

function validateCuniform(elementName){
	document.getElementById(elementName + 'ValidationAlert').classList.remove('active');
	document.getElementById(elementName + 'ValidationAlert').innerHTML = '';
   }
   function validateFailed(elementName, errorMessage){
	document.getElementById(elementName +'ValidationAlert').classList.add('active');
	document.getElementById(elementName +'ValidationAlert').style.color = 'red';
	document.getElementById(elementName +'ValidationAlert').innerHTML = errorMessage;
   }
