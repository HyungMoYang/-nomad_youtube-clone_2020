import app from "./app" // export한 app 모듈을 init으로 import

const PORT = 4000;

const handleListening = () =>
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
