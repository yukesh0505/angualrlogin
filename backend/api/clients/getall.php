<?php
include_once("../config.php");
include_once("../../lib/middleware/custominterceptor.php");

$token = $token = $_SERVER['HTTP_AUTHORIZATION'];
$interceptService = new CustomInterceptor();
$loggedUser = json_decode($interceptService->checkToken($mysqli, $token));

if ($loggedUser) {
    $sql = "SELECT * FROM clients where created_by='$loggedUser->id'";
    if ($result = mysqli_query($mysqli, $sql)) {
        $results = array();
        while ($row = mysqli_fetch_object($result)) {
            array_push($results, $row);
        };
        $output->status = "success";
        $output->retcode = 0;
        $output->err = null;
        $output->results = $results;
        
    } else {
        $output->status = "error";
        $output->retcode = 1;
        $output->err = mysqli_error($mysqli);
    }
} else {
    $output->status = "Authentication failed";
    $output->retcode = -1;
    $output->err =  $loggedUser;
    $output->token = $token;
}

echo json_encode($output);
