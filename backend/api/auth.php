<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $pwd = mysqli_real_escape_string($mysqli, trim(md5($request->password)));
    $email = mysqli_real_escape_string($mysqli, trim($request->username));
    $sql = "SELECT * FROM users where email='$email'";
    if ($result = mysqli_query($mysqli, $sql)) {
        $num = mysqli_num_rows($result);
        if ($num == 1) {
            $row = mysqli_fetch_object($result);
            if ($row->password  == $pwd) {
                $token = mysqli_real_escape_string($mysqli, trim(md5(uniqid(rand(), true))));
                $update = "UPDATE users SET token='$token' where email='$email' and password='$pwd'";
                if ($result_token = mysqli_query($mysqli, $update)) {
                    $output->status = "success";
                    $output->retcode = 0;
                    $output->result = $row;
                    $output->result->token = $token;
                    $output->result->password = "";
                    $output->err = null;
                } else {
                    $output->status = "Server error, Please try again";
                    $output->retcode = 1;
                    $output->err = mysqli_error($mysqli);
                }
            } else {
                $output->status = "Username / Password mismatch";
                $output->retcode = 1;
                $output->err = null;
            }
        } else {
            $output->status = "No User found.";
            $output->retcode = 1;
            $output->err = null;
        }
    } else {
        $output->status = "Server error, Please try again";
        $output->retcode = 1;
        $output->err = mysqli_error($mysqli);
    }
} else {
    $output->status = "Invalid credentials";
    $output->retcode = 1;
    $output->err = null;
}

echo json_encode($output);
