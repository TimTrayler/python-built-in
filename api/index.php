<?php
    $mod = explode("\n", file_get_contents("../modules"));

    echo strtolower($mod) === strtolower($_GET["mod"] || $_POST["mod"]);

?>
