<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>CheckBox Example</h1>
    <form action ="./checkbox_result.php" method="post">
        <input type="checkbox" name="fruit[]" value="사과">사과
        <input type="checkbox" name="fruit[]" value="포도">포도
        <input type="checkbox" name="fruit[]" value="딸기">딸기
        <input type="checkbox" name="fruit[]" value="바나나">바나나<br/>
        <input type ="submit" value="Send">
</body>
</html>