<?php
/* 
Student Name: Faris Ali
Student ID: 2243149
*/
?>
<!DOCTYPE html>
<html>
<body>
    <h3>Database List</h3>
    <ul>
        <?php
        if (!empty($dbList)) {
            foreach ($dbList as $db) {
                echo "<li>" . htmlspecialchars($db) . "</li>";
            }
        } else {
            echo "<li>No databases found.</li>";
        }
        ?>
    </ul>
</body>
</html>