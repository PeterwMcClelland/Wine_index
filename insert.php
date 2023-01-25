<?php
$username = "root";
$password = "";
$database = "wine_index";

$mysqli = new mysqli("localhost", $username, $password, $database);

// Don't forget to properly escape your values before you send them to DB
// to prevent SQL injection attacks.

$brand = $mysqli->real_escape_string($_POST['brand']);
$vintage = $mysqli->real_escape_string($_POST['vintage']);
$varietal = $mysqli->real_escape_string($_POST['varietal']);
$appellation = $mysqli->real_escape_string($_POST['appellation']);
$harvest_date = $mysqli->real_escape_string($_POST['harvest_date']);
$aging_date = $mysqli->real_escape_string($_POST['aging_date']);
$bottling_date = $mysqli->real_escape_string($_POST['bottling_date']);
$alcohol = $mysqli->real_escape_string($_POST['alcohol']);

$query = "INSERT INTO wines (id, brand, vintage, varietal, appellation, harvest_date, aging_date, bottling_date, alcohol)
            VALUES ('{$brand}','{$vintage}','{$varietal}','{$appellation}','{$harvest_date}','{$aging_date}','{$bottling_date}','{$alcohol}')";

$mysqli->query($query);
$mysqli->close();

<?php
$username = "username";
$password = "password";
$database = "your_database";
$mysqli = new mysqli("localhost", $username, $password, $database);

$query = "SELECT * FROM table_name";
echo "<b> <center>Database Output</center> </b> <br> <br>";

if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        $field1name = $row["brand"];
        $field2name = $row["vintage"];
        $field3name = $row["varietal"];
        $field4name = $row["col4"];
        $field5name = $row["col5"];

        echo '<b>'.$field1name.$field2name.'</b><br />';
        echo $field5name.'<br />';
        echo $field5name.'<br />';
        echo $field5name;
    }

/*freeresultset*/
$result->free();
}