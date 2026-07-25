<?php
/* 
Student Name: Faris Ali
Student ID: 2243149
*/

if (isset($_POST['base']) && isset($_POST['exponent'])) {
    $a = (int)$_POST['base'];
    $b = (int)$_POST['exponent'];
    
    $result = 1;
    for ($i = 0; $i < $b; $i++) {
        $result *= $a;
    }
    
    // Redirect back to view with the result
    header("Location: ../views/power_view.php?result=" . $result);
    exit();
}
?>