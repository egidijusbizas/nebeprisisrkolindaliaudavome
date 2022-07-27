"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
const logo72_png_1 = __importDefault(require("../../assets/logo72.png"));
require("./Navigation.css");
const ThemeContext_1 = require("../../contexts/ThemeContext");
const react_router_dom_1 = require("react-router-dom");
function Navigation() {
    const { darkMode, toggleDarkMode } = (0, react_1.useContext)(ThemeContext_1.ThemeContext);
    (0, jsx_runtime_1.jsx)("div", { className: darkMode ? 'content darkmode' : 'content' });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'parent navigation' }, { children: (0, jsx_runtime_1.jsx)(Navbar_1.default, Object.assign({ variant: darkMode ? 'dark' : 'light', expand: 'lg', className: darkMode ? 'shadow p-3 mb-5 bg-dark rounded' : 'shadow p-3 mb-5 bg-white rounded' }, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'navbar-brand' }, { children: (0, jsx_runtime_1.jsxs)(Navbar_1.default.Brand, Object.assign({ as: react_router_dom_1.Link, to: '/' }, { children: [(0, jsx_runtime_1.jsx)("img", { className: 'navbar__logo', src: logo72_png_1.default, alt: 'logo', height: '36' }), "Scroll Away"] })) })), (0, jsx_runtime_1.jsx)(Navbar_1.default.Toggle, { "aria-controls": 'basic-navbar-nav' }), (0, jsx_runtime_1.jsx)(Navbar_1.default.Collapse, Object.assign({ id: 'basic-navbar-nav' }, { children: (0, jsx_runtime_1.jsxs)(Nav_1.default, Object.assign({ className: 'me-auto' }, { children: [(0, jsx_runtime_1.jsx)(Nav_1.default.Link, Object.assign({ as: react_router_dom_1.Link, to: '/' }, { children: "Home" })), (0, jsx_runtime_1.jsx)(Nav_1.default.Link, Object.assign({ as: react_router_dom_1.Link, to: '/search' }, { children: "Image Search" })), (0, jsx_runtime_1.jsx)(Nav_1.default.Link, Object.assign({ as: react_router_dom_1.Link, to: '/about' }, { children: "About" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: 'button', className: darkMode ? 'btn btn-light' : 'btn btn-dark', onClick: toggleDarkMode }, { children: darkMode ? 'Light Theme' : 'Dark Theme' }))] })) }))] }) })) })));
}
exports.default = Navigation;
