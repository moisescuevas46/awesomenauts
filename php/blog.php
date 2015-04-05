<?php 
	require_once(__DIR__ . "/controller/login-verify.php");
	require_once(__DIR__ . "/view/header.php");//links to the header php file
	if (authenticateUser()) {

	require_once(__DIR__ . "/view/navigation.php");//links to navigation
	
}
	require_once(__DIR__ . "/controller/create-dg.php");//links to createdg
	require_once(__DIR__ . "/view/footer.php");//links to the footer php file
	require_once(__DIR__ . "/css/blog.css");//links to css file
	require_once(__DIR__ . "/controller/read-posts.php");

?>
