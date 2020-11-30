import "./db";
import app from "./app" // export한 app 모듈을 init으로 import
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
