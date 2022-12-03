<?php
	if(isset($_SESSION['categories'])){
	}else{
		include_once __DIR__.'../../config.php';
		require_once SITE_ROOT.'/server/BLL/BLL-category.php';
		 $categories = getAllCategories();	
	}
?>

<nav class="navbar navbar-expand-md navbar-light bg-light" >
	<?php
	echo "<a class='navbar-brand ' href='".WEBSITE_URL."'>";
	?>
  <img src="https://img.icons8.com/nolan/64/playlist.png"/>
</a>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse  flex-grow-0" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
  	  <li class='nav-item dropdown'>
	  <a class='nav-link dropdown-toggle' href='#' id='categoryNavbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
		Categories
	  </a>
	  <div id='categoryNavbarDropdownDiv' class='dropdown-menu' aria-labelledby='categoryNavbarDropdown'>

		<?php
				 if(isset($_SESSION['categories'])){
					for ($i=0; $i <  count($_SESSION['categories']) ; $i++) { 
						echo "
						<a class='dropdown-item' 
						href='".WEBSITE_URL."/video/videos-by-category.php?category=".$_SESSION['categories'][$i]->category_id."&name=".$_SESSION['categories'][$i]->category_name."'
						>".$_SESSION['categories'][$i]->category_name." 
						</a>
						";
					}
				   };
		?>
			  </div>
	</li>
	<li>
	<?php
		echo "	<form class='form-inline my-2 my-lg-0' action='".WEBSITE_URL."/server/API/API-video.php' method='GET' >";
	?>
      <input required class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="search-val" >
      <input class="btn btn-outline-success my-2 my-sm-0" type="submit" name="command" value="search">
    </form>
	</li>
	
    </ul>
  
  </div>
  <?php
		if(isset($_SESSION['user'])){
			echo "
			<button class='navbar-toggler' type='button' 
			data-toggle='collapse' data-target='#userNavbarDropdownDiv2'
			 aria-controls='userNavbarDropdownDiv2 aria-expanded='false' aria-label='Toggle navigation'>
			 <img src='https://img.icons8.com/bubbles/50/000000/user.png'/>
			 </button>

			 <div class='collapse navbar-collapse ' id='userNavbarDropdownDiv2'>
			 <ul class='navbar-nav align-items-center'>
				 <li class='nav-item dropdown '>
				 <a class='nav-link' href='".WEBSITE_URL."/video/add-video/add-video.php'>Add Video</a>
				</li>
				<li class='nav-item dropdown '>
				<a class='nav-link' href='".WEBSITE_URL."/video/user-video/user-video.php?user=".$_SESSION['user']->user_id."&name=".$_SESSION['user']->user_name."'>User Videos</a>
				</li>
				<li class='nav-item dropdown '>
				<a class='nav-link' href='".WEBSITE_URL."/video/user-delete-video/user-delete-video.php'>Delete Video</a>
				</li>		
				<li class='nav-item dropdown '>
				<a class='nav-link' href='".WEBSITE_URL."/video/user-update-video/user-update-video.php'>Update Video</a>
				</li>	
				<li class='nav-item dropdown '>
				<a  class='dropdown-toggle'  id='userNavbarPlaylistDropdownDiv2'
				 data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Playlist</a>
					<ul class='dropdown-menu' aria-labelledby='userNavbarPlaylistDropdownDiv2'>
					
					<li class='dropdown-item'>		
					<a class='nav-link' href='".WEBSITE_URL."/playlist/user-add-playlist/user-add-playlist.php'>Add Playlist</a>
					 </li>		
					
					 <li class='dropdown-item'>		
					 <a class='nav-link' href='".WEBSITE_URL."/playlist/user-playlists/user-playlists.php'>User Playlists</a>
					 </li>		
					 </ul>
				</li>
				<li class='nav-item dropdown'>
				<a class='nav-link' href='".WEBSITE_URL."/server/API/API-authentication.php?command=logout'>Logout</a>
				</li>
			

				 </ul>
			</div>

		
			<span class=''> Hello ".$_SESSION['user']->user_name." </span>
			";
		}else{
			echo "
			<a class='nav-link' href='".WEBSITE_URL."/login/login.php'>Login</a>
			<a class='nav-link' href='".WEBSITE_URL."/register/register.php'>Register</a>
		  ";
		}
	
	?>	

</nav>