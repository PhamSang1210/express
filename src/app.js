import express from "express";
const app = express();

app.get("/", (req, res) => {
    const data = {};
    for (let key in req.query) {
        data[key] = req.query[key];
    }
    return res.json(data);
});

export default app;
