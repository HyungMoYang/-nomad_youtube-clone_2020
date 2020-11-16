// const express = require("express"); // express 모듈을 가져와서 
import express from "express"; // 위의 코드를 최신 javascript 언어로 변경 .babel을 통해서 
import morgan from "morgan"; // log 기록을 기록하는 미들웨어 모듈
import helmet from "helmet"; // 보안 관련 미들웨어 모듈
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("You are on my profile!"); // Arrow형 함수 선언



// app.use(betweenHome); // 전역으로 미들웨어 사용 - 순서가 중요하다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
// app.get("/", betweenHome, handleHome); // 특정 route에 대해서만 미들웨어 사용하기 

app.get("/profile", handleProfile);

// 누군가 /user route를 사용하면 import한 userRouter 모듈을 사용한다. 
app.use("/user", userRouter) // get이 아닌 use를 사용하는 이유. 

export default app;
