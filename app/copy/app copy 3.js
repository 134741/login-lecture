"use strict";

// PORT 변수 
const PORT = 3000;

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅 
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해 주는 메서드. 

app.listen(PORT, function() {
    console.log("chapter_7 라우팅 분리 강좌 시작-!")
})


///////////////////////////////////////////// 주석 있는 버전 
// "use strict";
// /*  라우팅을 다른 파일들로 분리해 주어 조금 더 보기 쉽게 만들기
//     ^routes^ 라는 폴더를 만들어 그 안에 담아주는 것이 관례이다. */
// const express = require("express");
// const app = express();

// /*************************************************** 라우팅 시작!
//     라우팅 하러 routes/home/index.js 모듈로 간다! 

//     1) home 변수에는 지금 ./routes/home/index.js 가 담겨있다.
//     2) 미들웨어 use메소드를 통해 app은 루트 경로에서 home 즉, index.js로 이동할 수 있다. (거쳐가는 것)
//     결론 => 미들웨어 경로를 통해 app은 index.js 모듈 안의 router 동작을 사용할 수 있게 되는 것이다.
//     */
//     const home = require("./routes/home");
//     app.use("/", home);
// /*************************************************** 라우팅 끝!*/

// // 앱 세팅 : view 분리 선언
// app.set("views", "./views");
// app.set("view engine", "ejs");


// app.listen(3000, function() {
//     console.log("chapter_7 라우팅 분리 강좌 시작-!")
// })