<h1>Select Example</h1>
<?php
    $name = $_POST["name"];
    $id = $_POST["id"];
    $email = $_POST["email"];
    
    echo $name."님의 아이디는 ".$id.", 이메일 주소는 ".$email."입니다.";
?>