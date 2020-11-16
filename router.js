import express from "express";

// express의 Router를 가져와서 변수에 저장
export const userRouter = express.Router(); // export로 이 변수만을 export 

userRouter.get("/", (req, res) => res.send("user index"))
userRouter.get("/edit", (req, res) => res.send("user edit"))
userRouter.get("/password", (req, res) => res.send("user password"))

