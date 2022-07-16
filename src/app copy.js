//라우팅 처리!!!! 
// express모듈을 요청하고 express 변수에 담아줍니다.
const express = require("express");
// 불러온 후 express();호출 값을 app에 담아줍니다. 
const app = express();

// 브라우저에서 루트 경로로 요청이 들어오면 나는 {}안에 있는 동작을 하겠다.
// 그런데 브라우저에게 응답을 해주고 요청을 받기 위해서는 요청이 뭔지 알아야 하기 때문에 req, res 를 받는다
// req : 브라우저가 서버로 전송한 데이터
// res : 서버가 요청을 받아서 해석을 한 뒤 데이터를 브라우저로 전송해 주는 것 
// 어떤 요청인지는 해석하지 않고 바로 res 해서 메세지를 바로 보낸다.  res.send();
// 루트 경로로 만들고, 파라미터로 콜백 함수를 넘겨준다. 


// 루트 경로라는 것이 근본! localhost:포트번호 했을 때 바로 뜨는 경로
// get으로 ^루트 경로^ & 요청객체와 응답객체 보낸 후 arrow함수를 통해 바로 res로 받은 데이터를 send 할 것이다. 
app.get("/", (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
            여기는 루트입니다.
        </body>
        </html>
        `
            );
});

// app이 login 경로를 조회하려 한다. 그리고 요청하고 응답한다. 
app.get("/login", (req, res) => {
    // 서버로부터 받고자 하는 html문서를 받아서 send() 안에 넣어준 후, 
    // ` <= 백틱 기호로 문자화 시켜준다.
    // 백틱 기호가 있어야 html 문서가 줄바꿈이 된다. 
    // en을 ko로 바꿔준다. 왜냐, 브라우저는 문서가 한글인지 영어인지 해석을 하기 때문에
    // html 문서 안에 주석은 미포함 시켜야 한다. 
    res.send(
        `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <input type="text" placeholder="아이디"><br>
          <input type="text" placeholder="비밀번호"><br>
          <button>로그인</button>
        </body>
        </html>
        `
            );
});

app.listen(3000, function() {
    console.log("서버 기능");
});

//  위의 코드는 로그인창을 하드하게 구현한 것으로 매우 비효율적인 코드이다.
//  앞으로 모듈화 시켜서 유지보수하기 좋은 코드로 변경해 나가고자 한다. 
