<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Select Example</h1>
        <form action="./select_result.php" method='post'>
        이름 :
        <select name="name">
            <option value="">선택하세요</option>
            <option value="김영우">김영우</option>
            <option value="김이봄">김이봄</option>
            <option value="전동순">전동순</option>
        </select>
        <br/> 

        id :
        <select name="id">
            <option value="">선택하세요</option>
            <option value="ow">ow</option>
            <option value="bon">bon</option>
            <option value="soon">soon</option>
        </select>
        <br/>

        email :
        <select name="email">
            <option value="">선택하세요</option>
            <option value="ow@sungil-kr">ow@sungil-kr</option>
            <option value="bon@sungil-kr">bon@sungil-kr</option>
            <option value="soon@sungil-kr">soon@sungil-kr</option>
        </select>
        <br/>  
        <input type="submit" value="전송">
        </form>
</body>
</html>