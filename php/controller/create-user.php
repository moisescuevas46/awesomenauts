<?php 
    // Requires config.php in this file
    require_once(__DIR__ . "/../model/config.php");
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
    // $5$ tells php that we want to use SHA 256 5,000 times to create a unique salt for the user
    // uniqid is a fucntion that creates a unique id for us
    // mt_rand generates a random number and uses that number to create a really unique id for it
    $salt = "$5$" . "round=5000$" . uniqid(mt_rand(), true) . "$";
    // Telling the crypt fucntion to use this password and this salt to create an encrypted password
    $hashedPassword = crypt($password, $salt);
    // Created a query and it will insert into the table called users
    $query = $_SESSION["connection"]->query("INSERT INTO users SET "
            // Sets Email to Email variable
            //. "email = '$email',"
            // Sets Username to Username variable
            . "username = '$username',"
            // Sets Password to the hashedPassword variable
            . "password = '$hashedPassword',"
            // Sets Salt to the Salt variable
            . "salt = '$salt',"
            //Sets exp to 0
            . "exp = 0, "
            . "exp1 = 0, "
            . "exp2 = 0, "
            . "exp3 = 0, "
            . "exp4 = 0, ");

    $_SESSION["name"] = $username;
    // Checks if the Query is successful
    if ($query) {
        //need this for ajax
        // Echoes out success if successful
        echo "True";
    }
    else {
        // If not successful, it will display the error preventing success
        echo "<p>" . $_SESSION["connection"]->error . "</p>";
    }