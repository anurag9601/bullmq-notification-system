import express from "express";
import dotEnv from "dotenv";

dotEnv.config();

const app = express();

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Express server is listing on port ${port}`);
});