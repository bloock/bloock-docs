<?php

require "./vendor/autoload.php";

use Bloock\Bloock;

Bloock::$apiKey = getenv("API_KEY") ?: "";
