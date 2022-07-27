"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContextProvider = exports.ThemeContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ThemeContext = (0, react_1.createContext)(null);
exports.ThemeContext = ThemeContext;
const ThemeContextProvider = (props) => {
    const [darkMode, setDarkMode] = (0, react_1.useState)(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ThemeContext.Provider, Object.assign({ value: { darkMode, toggleDarkMode } }, { children: props.children })) }));
};
exports.ThemeContextProvider = ThemeContextProvider;
