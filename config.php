<?php
define('SITE_ROOT', __DIR__);
if ($_SERVER['HTTP_HOST'] == 'localhost:81') {
	define('WEBSITE_URL','http://'.$_SERVER['HTTP_HOST'].'/youtube-playlist-adi-levi');
	define('WEBSITE_URL_HTML_INCLUDE','http://'.$_SERVER['HTTP_HOST'].'/youtube-playlist-adi-levi');
}else{
	define('WEBSITE_URL','https://'. $_SERVER['HTTP_HOST']);
	define('WEBSITE_URL_HTML_INCLUDE','');

 }

