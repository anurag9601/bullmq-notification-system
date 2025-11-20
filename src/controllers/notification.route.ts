import { Request, Response } from "express";

export function notificationSendRouterController(req: Request, res: Response) {
    try {
        return res.json({ success: true, message: "Your route is working just fine" }).status(200);
    } catch (error) {
        console.log("Something went wrong in /send route", error);
        return res.json({ success: false, error: "Internal server error" }).status(500);
    }
};