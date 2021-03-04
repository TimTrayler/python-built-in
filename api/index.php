<?php
    $mod = explode("\n", file_get_contents("../modules.txt"));

    echo strtolower($mod) === strtolower($_GET["mod"] || $_POST["mod"]);

?>