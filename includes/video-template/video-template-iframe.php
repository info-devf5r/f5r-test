<?php

function getVideoIframe($video,$user_id){
	echo "
	<div class='embed-responsive embed-responsive-16by9'>
	<iframe class='embed-responsive-item' id='iframevideoSelected".$video->video_link."' width='100%'
	src='https://www.youtube.com/embed/".$video->video_link."?enablejsapi=1'>
	</iframe>
</div>";
if($user_id != null){
echo "
<script type='text/javascript'>
	window.focus(); //force focus on the currenct window;
	window.addEventListener('blur', function(e){	
	if(document.activeElement == document.getElementById('iframevideoSelected".$video->video_link."'))
		{
			userClickedVideo(".$user_id.",".$video->video_id.",'videoSelectedDivvideoViewedSpan".$video->video_id."');
	}
	});

</script>
";
}

	
}