"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Banner_1 = require("../components/Banner");
const Menu_1 = require("../components/Menu");
const Sidebar_1 = require("../components/Sidebar");
const Home = ({ profileName }) => {
    return (react_1.default.createElement(react_bootstrap_1.Container, { className: "home-page", fluid: true },
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, { lg: "3" },
                react_1.default.createElement(Sidebar_1.Sidebar, null)),
            react_1.default.createElement(react_bootstrap_1.Col, { lg: "8" },
                react_1.default.createElement(Banner_1.Banner, null)),
            react_1.default.createElement(react_bootstrap_1.Col, { lg: "1" },
                react_1.default.createElement(Menu_1.Menu, null)))));
};
exports.Home = Home;
