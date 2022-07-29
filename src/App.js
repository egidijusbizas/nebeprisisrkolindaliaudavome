'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
require('bootstrap/dist/css/bootstrap.min.css');
require('./App.css');
const Navigation_1 = __importDefault(require('./components/Navigation/Navigation'));
const ContentWrapper_1 = __importDefault(require('./pages/ContentWrapper'));
const ThemeContext_1 = require('./contexts/ThemeContext');
const App = () =>
  (0, jsx_runtime_1.jsx)(
    'div',
    Object.assign(
      { className: 'App' },
      {
        children: (0, jsx_runtime_1.jsxs)(ThemeContext_1.ThemeContextProvider, {
          children: [(0, jsx_runtime_1.jsx)(Navigation_1.default, {}), (0, jsx_runtime_1.jsx)(ContentWrapper_1.default, {})]
        })
      }
    )
  );
exports.default = App;
