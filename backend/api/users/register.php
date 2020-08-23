<?php
include_once("../config.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $name = trim($request->name);
    $pwd = mysqli_real_escape_string($mysqli, trim(md5($request->pwd)));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $usercheck = "SELECT * FROM users where email='$email'";
    $sql = "INSERT INTO users(name,password,email,created_at) VALUES ('$name','$pwd','$email',now())";
    if ($result = mysqli_query($mysqli, $usercheck)) {
        $num = mysqli_num_rows($result);
        if ($num == 0) {
            if ($result = mysqli_query($mysqli, $sql)) {
                $output->status = "success";
                $output->retcode = 0;
                $output->err = null;
            } else {
                $output->status = "Registration Failed";
                $output->retcode = 1;
                $output->err = mysqli_error($mysqli);
            }
        } else {
            $output->status = "Email is already taken.";
            $output->retcode = 1;
            $output->err = null;
        }
    } else {
        $output->status = "Registration Failed";
        $output->retcode = 1;
        $output->err = mysqli_error($mysqli);
    }
} else {
    $output->status = "Invalid credentials";
    $output->retcode = 1;
    $output->err = null;
}

echo json_encode($output);
