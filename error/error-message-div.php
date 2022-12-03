<?php
function getErrorMessageDiv($err_message){
	echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
	<p>
	".$err_message."
	</p>
	<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
	<span aria-hidden='true'>&times;</span>
  </button>
</div>";
}