<?php  
// No other file can access these variables because they are private variables
// We are making a new instance Class to make an Object
class Database {
	private $connection;
	private $host;
	private $username;
	private $password;
	private $database;
	public $error;
// piece of code that can be reused again and again in substitution for the actual Class
	public function __construct($host, $username, $password, $database){
		$this->host = $host;
		$this->username = $username;
		$this->password = $password;
		$this->database = $database;
	 $this->connection = new mysqli($host, $username, $password);
	 // Checks if there is an error, if there is, echos it out.
	 if ($this->connection->connect_error) {
	 	die("<p>Error: " . $connection->connect_error . "</p>");
	 }
	  // Selects the database
	  $exists = $this->connection->select_db($database);
	    
	   if (!$exists) {
	   	// Sends commands to the Databases
	   	$query = $this->connection->query("CREATE DATABASE $database");
	    // Checks if the database has been created and outputs and echo saying so.
	   	if ($query) {
	    // Put the echo in paragraph tag
		  echo "<p>Successfully created a database: " . $database . "</p>";     
	   	}
	   }
	}
// Function that opens the connection
// Afunction is a block of code that can be called at any point after it has been declared
	public function openConnection(){
		$this->connection = new mysqli($this->host, $this->username, $this->password, $this->database);
// Checks if their is an error, if so, echos it out.
 	if ($this->connection->connect_error) {
 		die("<p>Error: " . $this->connection->connect_error . "</p>");
 }
	}
// Fucntion to close the connection
	public function closeConnection(){
		// Checkis whether or not the variable has been set or not
		if (isset($this->connection)) {
			// My new close function
			$this->connection->close();
		}
	}
// Creates a query
	public function query($string){
		// Calls on the openConnection function which runs the lines of code in it.
		// Basically, we opened the connection
		$this->openConnection();
		// Queried the Database
		$query = $this->connection->query($string);
		if (!$query) {
			$this->error = $this->connection->error;
		}
		// We closed the conncection
		$this->closeConnection();
		return $query;
	}
}