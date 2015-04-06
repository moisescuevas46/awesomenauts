<?php
	// Requires the database.php inside this file
	require_once(__DIR__ . "/Database.php");
	session_start();
	// Continously regenerates the id of the session so hackers can not hi-jack it
	session_regenerate_id(true);
	// Path for post.php, easier to change location
	$path = "/awesomenauts/php/";
	// The varibles for $... from database.php to config.php to make it much easier to modify them
	$host = "localhost";
 	$username = "root";
 	$password = "";
 	$database = "awesomenauts_db"; 
 	// If the session variable has not been set, then it will create the databse object and sets it to our session variable
 	if(!isset($_SESSION["connection"])){
	 	// Makes a new connection to the database
	 	$connection = new Database($host,$username, $password, $database);
	 	// Assigning the connection varible to the Session Varibale called Connection
	 	$_SESSION["connection"] = $connection;
    }