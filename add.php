<?php
/*----------------------------------------------*/
$updatedData = $_POST["newData"];
/*----------------------------------------------*/

file_put_contents('../json/data.json', $updatedData);
?>