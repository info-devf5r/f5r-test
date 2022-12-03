<?php
require_once __DIR__.'../../config.php';




function connect() {
    //remote database connection
    $host = $_ENV["BD_HOST"];
    $username =  $_ENV["DB_USER"];
    $password = $_ENV["DB_PASS"];
    $dbname =  $_ENV["DB_SCHEMA"];

    //development connection
    // $host = 'localhost';
    // $username = 'root';
    // $password = '';
    // $dbname = 'youtube_playist';

    $connection = mysqli_connect($host, $username,  $password, $dbname);
    return $connection;
}

function bindParams($sql,$params,$connection){
    $stmt = mysqli_stmt_init($connection);
    if(!mysqli_stmt_prepare($stmt, $sql)){
        $error = "QSL statement failed";
        die($error);
        
    }else{
            $types = '';      
            foreach($params as $param) {        
                if(is_int($param)) {
                    $types .= 'i';  //integer
                } elseif (is_float($param)) {
                    $types .= 'd'; //double
                } elseif (is_string($param)) {
                    $types .= 's'; //string
                } else {
                    $types .= 'b'; //blob and unknown
                }
            }
            array_unshift($params, $types);
            if(count($params) === 0){
                mysqli_stmt_bind_param($stmt,$types, $params[0]);
            }else{
                call_user_func_array(array($stmt, 'bind_param'), refValues($params));
            }
            mysqli_stmt_execute($stmt);
            return mysqli_stmt_get_result($stmt);
        }

     }

     function refValues($arr){
        if (strnatcmp(phpversion(),'5.3') >= 0) //Reference is required for PHP 5.3+
        {
            $refs = array();
            foreach($arr as $key => $value)
                $refs[$key] = &$arr[$key];
            return $refs;
        }
        return $arr;
    }

// Insert: 
function insert($sql,$params) {
    $connection = connect();
   bindParams($sql,$params,$connection);
    return $connection->insert_id;
    mysqli_close($connection);

}

// Update: 
function update($sql,$params) {
    $connection = connect();
    $result = bindParams($sql,$params,$connection);
    mysqli_close($connection);
}

// Delete: 
function delete($sql,$params) {
    $connection = connect();
    $result = bindParams($sql,$params,$connection);
    mysqli_close($connection);
}

function get_array($sql,$params) {
	$connection = connect();
    $arr = array();
    if($params !== null){
    $result = bindParams($sql,$params,$connection);
    }else{
        $result = mysqli_query($connection, $sql);
    }
	while($obj = mysqli_fetch_object($result)) {
		$arr[] = $obj;
	}
	mysqli_close($connection);	
	return $arr;
}

function get_object($sql,$params) {
    $connection = connect();
    if($params !== null){
        $result = bindParams($sql,$params,$connection);
        }else{
            $result = mysqli_query($connection, $sql);
        }
    $obj = mysqli_fetch_object($result);
    mysqli_close($connection);
    return $obj;
}


