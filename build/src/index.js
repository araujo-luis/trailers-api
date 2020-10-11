"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
var PORT = process.env.PORT || '4000';
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/', routes_1.default);
app.use(body_parser_1.default.json());
app.listen(PORT, function () { return console.log("listening on port " + PORT); });
