<?php
include_once("../config.php");
include_once("../../lib/middleware/custominterceptor.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$token = $token = $_SERVER['HTTP_AUTHORIZATION'];
$interceptService = new CustomInterceptor();
$loggedUser = json_decode($interceptService->checkToken($mysqli, $token));
$clientid = $_REQUEST['id'];

if ($loggedUser) {
    if (isset($postdata) && !empty($postdata)) {
        $name = trim($request->name);
        $email = mysqli_real_escape_string($mysqli, trim($request->email));
        $phone = mysqli_real_escape_string($mysqli, trim($request->phone));
        $address1 = mysqli_real_escape_string($mysqli, trim($request->address1));
        $address2 = mysqli_real_escape_string($mysqli, trim($request->address2));
        $usercheck = "SELECT * FROM clients where email='$email' and id!='$clientid'";
        $sql = "UPDATE clients SET name='$name', email='$email', phone='$phone', address1='$address1', address2='$address2'  where id='$clientid'";
        if ($result = mysqli_query($mysqli, $usercheck)) {
            $num = mysqli_num_rows($result);
            if ($num == 0) {
                if ($result = mysqli_query($mysqli, $sql)) {
                    $output->status = "Updated successfully";
                    $output->retcode = 0;
                    $output->err = null;
                } else {
                    $output->status = "Client Updation1 Failed";
                    $output->retcode = 1;
                    $output->err = mysqli_error($mysqli);
                }
            } else {
                $output->status = "Email is already exists.";
                $output->retcode = 1;
                $output->err = null;
            }
        } else {
            $output->status = "Client Updation2 Failed";
            $output->retcode = 1;
            $output->err = mysqli_error($mysqli);
        }
    } else {
        $output->status = "Invalid credentials";
        $output->retcode = 1;
        $output->err = null;
    }
} else {
    $output->status = "Authentication failed";
    $output->retcode = -1;
    $output->err =  $loggedUser;
}

echo json_encode($output);
