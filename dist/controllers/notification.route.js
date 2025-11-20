"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationSendRouterController = notificationSendRouterController;
function notificationSendRouterController(req, res) {
    try {
        return res.json({ success: true, message: "Your route is working just fine" }).status(200);
    }
    catch (error) {
        console.log("Something went wrong in /send route", error);
        return res.json({ success: false, error: "Internal server error" }).status(500);
    }
}
;
