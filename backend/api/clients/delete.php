<?php
include_once("../config.php");
include_once("../../lib/middleware/custominterceptor.php");

$token = $_SERVER['HTTP_AUTHORIZATION'];
$interceptService = new CustomInterceptor();
$loggedUser = json_decode($interceptService->checkToken($mysqli, $token));
$clientid = $_REQUEST['id'];

if ($loggedUser) {
    $sql = "DELETE FROM clients where id='$clientid'";
    if ($result = mysqli_query($mysqli, $sql)) {
        $output->status = "Deleted successfully";
        $output->retcode = 0;       
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
