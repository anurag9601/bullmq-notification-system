"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const notification_routes_1 = __importDefault(require("./routes/notification.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
app.use(express_1.default.json());
//server routes
app.use("/notification", notification_routes_1.default);
app.listen(port, () => {
    console.log(`Express server is listing on port ${port}`);
});
