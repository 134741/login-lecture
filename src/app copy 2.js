/* 이 파일에서는 화면 뷰에 해당하는 부분을 처리해 줄 수 있는 뷰 엔진을 세팅할 예정이다. */ 
const express = require("express");
const app = express();

/* 앱 세팅
 1)    이 뷰, 화면 뷰를 관리해 줄 파일이 저장된 폴더 이름을 두번째 파라미터로 넘겨주면 된다. 
 2)    그리고 views 폴더 안에 생성될 html 문서들이 있잖아요? 그 문서들을 어떤 엔진으로 해석할지를 정해줄 수 있어요. 
*/
app.set("views", "./views");
app.set("view engine", "ejs");  // 우리는 뷰 엔진을 ejs로 사용할 것이다. 

// ejs의 html문서와 연결을 하고자 할 때는 res.render() 를 사용하면 된다.
// render()메소드에 문자열로 파일 이름을 적어주면 된다. 
// 하지만 이 또한 ejs 모듈이 설치가 되어 있어야 하므로
// npm install ejs -s

app.get("/", (req, res) => {
    // .ejs 붙여도 되고 안붙여도 됨
    // res.render("home/index.ejs");
    res.render("home/index");
});

app.get("/login", (req, res) => {
    res.render("home/login");
});

app.listen(3000, function() {
    console.log("서버 기능");
});

// 위의 코드는 html뷰를 분리시킨 코드이다.
// 여기서 더욱 깔끔하게 만드는 방법을 다음 시간에 소개하도록 하겠다. 
