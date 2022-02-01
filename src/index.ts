import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>helloworld !</h1>");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
