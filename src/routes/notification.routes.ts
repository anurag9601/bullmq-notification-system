import express from "express";
import { notificationSendRouterController } from "../controllers/notification.route";

const notificationRouter = express.Router();

notificationRouter.post("/send", notificationSendRouterController);

export default notificationRouter;