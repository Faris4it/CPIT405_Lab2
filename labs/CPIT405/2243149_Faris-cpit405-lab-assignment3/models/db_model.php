<?php
/* 
Student Name: Faris Ali
Student ID: 2243149
*/

function getDatabases() {
    $conn = new mysqli("localhost", "root", "");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $result = $conn->query("SHOW DATABASES;");
    $databases = [];
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $databases[] = $row["Database"];
        }
    }
    $conn->close();
    return $databases;
}
?>