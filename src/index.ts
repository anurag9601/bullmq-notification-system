import express, { json } from "express";
import dotEnv from "dotenv";
import notificationRouter from "./routes/notification.routes";

dotEnv.config();

const app = express();

const port = process.env.PORT || 9000;

app.use(express.json());

//server routes
app.use("/notification", notificationRouter);

app.listen(port, () => {
    console.log(`Express server is listing on port ${port}`);
});