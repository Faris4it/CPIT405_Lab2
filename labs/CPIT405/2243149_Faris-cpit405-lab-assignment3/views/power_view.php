<?php
/* 
Student Name: Faris Ali
Student ID: 2243149
*/
?>
<!DOCTYPE html>
<html>
<body>
    <h3>Power Function Calculator</h3>
    <form action="../controllers/power_controller.php" method="POST">
        Base (a): <input type="number" name="base" required><br><br>
        Exponent (b): <input type="number" name="exponent" required><br><br>
        <button type="submit">Calculate</button>
    </form>
    
    <?php
    if (isset($_GET['result'])) {
        echo "<p><strong>Result: " . htmlspecialchars($_GET['result']) . "</strong></p>";
    }
    ?>
</body>
</html>