"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ScrollToTop_1 = __importDefault(require("../components/ScrollToTop/ScrollToTop"));
const ThemeContext_1 = require("../contexts/ThemeContext");
const Routing_1 = __importDefault(require("./Routing"));
const ContentWrapper = () => {
    const { darkMode } = (0, react_1.useContext)(ThemeContext_1.ThemeContext);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: darkMode ? 'content darkmode' : 'content' }, { children: [(0, jsx_runtime_1.jsx)(ScrollToTop_1.default, {}), (0, jsx_runtime_1.jsx)(Routing_1.default, {})] })));
};
exports.default = ContentWrapper;
