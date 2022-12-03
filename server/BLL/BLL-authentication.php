<?php

require_once __DIR__.'../../../config.php';
require_once SITE_ROOT.'/server/DAL.php';

function register(
    $user_name_arg, $user_password_arg,
    $user_first_name_arg,$user_last_name_arg,
    $user_phone_number_arg, $user_email_arg
) {
    $user_name = addslashes($user_name_arg);
    $password = addslashes($user_password_arg);
    $user_first_name = addslashes($user_first_name_arg);
    $user_last_name = addslashes($user_last_name_arg);
    $user_phone_number = addslashes($user_phone_number_arg);
    $user_email = addslashes($user_email_arg);

    $password = crypt($password, $_ENV["PASSWORD_HASH"]); // Salt the password.
    $password = sha1($password);
    $sql = "INSERT INTO users (user_id, user_name, user_password, user_first_name, user_last_name, user_phone_number, user_email) VALUES (NULL,?,?,?,?,?,?)";
    $params_arr = array();
	 array_push($params_arr, $user_name, $password, $user_first_name, $user_last_name, $user_phone_number, $user_email);
    $user_id = insert($sql, $params_arr);
    $new_user = getUserById($user_id);
    return $new_user;
}

function getUserById($user_id_arg){
    $user_id = addslashes($user_id_arg);
    $sql = "SELECT user_id, user_name, user_first_name, user_last_name, user_phone_number, user_email FROM users WHERE `user_id`=?";
    $params_arr = array();
   array_push($params_arr, $user_id);
    $count = get_object($sql,$params_arr);
    return $count;
}

function isUserExist($user_name_arg, $passwordArg) {

    $user_name = addslashes($user_name_arg);
    $password = addslashes($passwordArg);

    $password = crypt($password,  $_ENV["PASSWORD_HASH"]); // Salt the password.
    $password = sha1($password);
    $sql = "SELECT user_id, user_name, user_first_name, user_last_name, user_phone_number, user_email FROM users WHERE `user_name`=? AND `user_password`=?";
    $params_arr = array();
   array_push($params_arr, $user_name, $password);
    $count = get_object($sql,$params_arr);
    return $count;
}

function isUserNameExist($user_name_arg) {
    $user_name = addslashes($user_name_arg);
    $sql = "select count(*) AS total_rows from users WHERE `user_name`=?";
    $params_arr = array();
   array_push($params_arr, $user_name);
    $count = get_object($sql,$params_arr)->total_rows;
    return $count > 0;
}

function isPhoneNumberExist($phone_number_arg) {
    $phone_number = addslashes($phone_number_arg);
    $sql = "select count(*) AS total_rows from users WHERE `user_phone_number`=?";
    $params_arr = array();
   array_push($params_arr, $phone_number);
    $count = get_object($sql,$params_arr)->total_rows;
    return $count > 0;
}
function isEmailExist($email_arg) {
    $email = addslashes($email_arg);
    $sql = "select count(*) AS total_rows from users WHERE `user_email`=?";
    $params_arr = array();
   array_push($params_arr, $email);
    $count = get_object($sql,$params_arr)->total_rows;
    return $count > 0;
}