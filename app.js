// const express = require("express"); // express 모듈을 가져와서 
import express from "express"; // 위의 코드를 최신 javascript 언어로 변경 .babel을 통해서 
import morgan from "morgan"; // log 기록을 기록하는 미들웨어 모듈
import helmet from "helmet"; // 보안 관련 미들웨어 모듈
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
// 누군가 /user route를 사용하면 import한 userRouter 모듈을 사용한다. 
app.use(routes.users, userRouter); // get이 아닌 use를 사용하는 이유. 
app.use(routes.videos, videoRouter);

export default app;
