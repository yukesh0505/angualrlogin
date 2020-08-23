<?php

class CustomInterceptor
{
    public function checkToken($mysqli, $token)
    {
        $this->loggedUser = null;
        $sql = "SELECT * FROM users where token='$token'";
        if ($result = mysqli_query($mysqli, $sql)) {
            $num = mysqli_num_rows($result);
            if ($num == 1) {
                $row = mysqli_fetch_object($result);
                $this->loggedUser = json_encode($row);
            }
        }
        return $this->loggedUser;
    }
}
