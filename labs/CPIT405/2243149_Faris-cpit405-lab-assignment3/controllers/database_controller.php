<?php
/* 
Student Name: Faris Ali
Student ID: 2243149
*/

require_once '../models/db_model.php';
$dbList = getDatabases();

// Load the view and pass the data
require_once '../views/database_view.php';
?>