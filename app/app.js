"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
app.use("/", home); 
// ${__dirname} => 현재 모듈이 있는 디렉토리 이름을 반환한다.
// app.js 모듈이 있는 디렉토리는 app 
// 한 문장으로 정리 => app의 src의 public 폴더를 정적 경로로 추가해 줄 것이다.
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;



