<?php
	require_once(__DIR__ . "/../model/config.php");
	function authenticateUser() {
		//Checks whether or not authentication was set
		if(!isset($_SESSION["authenticated"])) {
			return false;
		}
		else {
			// If it's not true, it will return false
			if($_SESSION["authenticated"] !== true) {
				return  false;
			}
			else {
				// If it is true, it will return true
				 return true;
			}
		}
	}