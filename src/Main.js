"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const react_1 = __importDefault(require("react"));
const Home_1 = require("./pages/Home");
const Main = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Home_1.Home, { profileName: "Hello" })));
};
exports.Main = Main;
