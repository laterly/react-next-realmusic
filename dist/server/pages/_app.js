module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/head.jsx":
/*!*****************************!*\
  !*** ./components/head.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _test_test_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test/test.scss */ "./test/test.scss");
/* harmony import */ var _test_test_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_test_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\lx\\next\\demo2\\components\\head.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const Head = () => {
  return __jsx("div", {
    className: "jsx-1246750026" + " " + "header-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "ewrew", __jsx("div", {
    className: "jsx-1246750026" + " " + "header-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      fontSize: "40px",
      color: "#fff",
      marginRight: 20
    },
    className: "jsx-1246750026" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "abs", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlayCircleOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1246750026",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-1246750026" + " " + "header-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 40,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3998965511",
    __self: undefined
  }, ".header-inner.jsx-1246750026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-inner.jsx-1246750026 .header-left.jsx-1246750026{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:blue;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxseFxcbmV4dFxcZGVtbzJcXGNvbXBvbmVudHNcXGhlYWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IsQUFFZ0IsQUFHRSwwRUFGZSxBQUdqQixXQUNnQix3R0FKRSxDQUlEIiwiZmlsZSI6IkQ6XFxseFxcbmV4dFxcZGVtbzJcXGNvbXBvbmVudHNcXGhlYWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheUNpcmNsZU91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgSW5wdXQsIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBcIi4uL3Rlc3QvdGVzdC5zY3NzXCI7XHJcbmNvbnN0IEhlYWQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgIGV3cmV3XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjQwcHhcIiwgY29sb3I6IFwiI2ZmZlwiLCBtYXJnaW5SaWdodDogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgYWJzXHJcbiAgICAgICAgICA8UGxheUNpcmNsZU91dGxpbmVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZDtcclxuIl19 */\n/*@ sourceURL=D:\\\\lx\\\\next\\\\demo2\\\\components\\\\head.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "725514212",
    __self: undefined
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxseFxcbmV4dFxcZGVtbzJcXGNvbXBvbmVudHNcXGhlYWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCeUIiLCJmaWxlIjoiRDpcXGx4XFxuZXh0XFxkZW1vMlxcY29tcG9uZW50c1xcaGVhZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5Q2lyY2xlT3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBJbnB1dCwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFwiLi4vdGVzdC90ZXN0LnNjc3NcIjtcclxuY29uc3QgSGVhZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIj5cclxuICAgICAgZXdyZXdcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNDBweFwiLCBjb2xvcjogXCIjZmZmXCIsIG1hcmdpblJpZ2h0OiAyMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICBhYnNcclxuICAgICAgICAgIDxQbGF5Q2lyY2xlT3V0bGluZWQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIC5oZWFkZXItbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\lx\\\\next\\\\demo2\\\\components\\\\head.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head */ "./components/head.jsx");

var _jsxFileName = "D:\\lx\\next\\demo2\\components\\layout.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
const {
  Header,
  Footer,
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a;


const LayoutComp = ({
  children
}) => {
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  })), __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, children), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2707908459",
    __self: undefined
  }, "#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxseFxcbmV4dFxcZGVtbzJcXGNvbXBvbmVudHNcXGxheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXlCLEFBRWUsWUFBQyIsImZpbGUiOiJEOlxcbHhcXG5leHRcXGRlbW8yXFxjb21wb25lbnRzXFxsYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL2hlYWQnXHJcblxyXG5jb25zdCBMYXlvdXRDb21wID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxIZWFkPjwvSGVhZD5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDb21wO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\lx\\\\next\\\\demo2\\\\components\\\\layout.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutComp);

/***/ }),

/***/ "./lib/with-redux.jsx":
/*!****************************!*\
  !*** ./lib/with-redux.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index.js */ "./store/index.js");
var _jsxFileName = "D:\\lx\\next\\demo2\\lib\\with-redux.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const isServer = true;
const NEXT_REDUX_STORE = "__NEXT_REDUX_STORE__";


const getOrCreateStore = initialState => {
  if (isServer) return Object(_store_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);

  if (!window[NEXT_REDUX_STORE]) {
    window[NEXT_REDUX_STORE] = Object(_store_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);
  }

  return window[NEXT_REDUX_STORE];
};

const WithRedux = Comp => {
  class WithReduxApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const _this$props = this.props,
            {
        Component,
        pageProps
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["Component", "pageProps"]);

      if (pageProps) pageProps.test = 123;
      return __jsx(Comp, _extends({
        Component: Component,
        pageProps: pageProps
      }, rest, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }));
    }

  }

  WithReduxApp.getInitialProps = async ctx => {
    const reduxStore = getOrCreateStore();
    ctx.reduxStore = reduxStore; //给getInitialProps里的ctx赋值reduxStore

    let appProps = {};
    if (typeof Comp.getInitialProps === "function") appProps = await Comp.getInitialProps(ctx);
    return _objectSpread(_objectSpread({}, appProps), {}, {
      initialReduxState: reduxStore.getState()
    });
  };

  return WithReduxApp;
};

/* harmony default export */ __webpack_exports__["default"] = (WithRedux);

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/_antd@4.6.3@antd/dist/antd.css":
/*!*****************************************************!*\
  !*** ./node_modules/_antd@4.6.3@antd/dist/antd.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/_next@9.5.3@next/app.js":
/*!**********************************************!*\
  !*** ./node_modules/_next@9.5.3@next/app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/_next@9.5.3@next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/_next@9.5.3@next/dist/pages/_app.js":
/*!**********************************************************!*\
  !*** ./node_modules/_next@9.5.3@next/dist/pages/_app.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/_next@9.5.3@next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/_antd@4.6.3@antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout.jsx */ "./components/layout.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_with_redux_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/with-redux.jsx */ "./lib/with-redux.jsx");
var _jsxFileName = "D:\\lx\\next\\demo2\\pages\\_app.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//覆盖next js默认app.js






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const {
      Component
    } = ctx;
    let pageProps;
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(_components_layout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      store: reduxStore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./store/reducer/index.js");




const allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  counter: _reducer__WEBPACK_IMPORTED_MODULE_3__["countReducer"],
  user: _reducer__WEBPACK_IMPORTED_MODULE_3__["userReducer"]
});

function initializeStore(state) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(allReducers, Object.assign({}, state), Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (initializeStore);

/***/ }),

/***/ "./store/reducer/countReducer.js":
/*!***************************************!*\
  !*** ./store/reducer/countReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initState = {
  count: 0
};

function countReducer(state = initState, action) {
  switch (action.type) {
    case 'add':
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count + 1
      });

    case 'minus':
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count - 1
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (countReducer);

/***/ }),

/***/ "./store/reducer/index.js":
/*!********************************!*\
  !*** ./store/reducer/index.js ***!
  \********************************/
/*! exports provided: countReducer, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countReducer */ "./store/reducer/countReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countReducer", function() { return _countReducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ "./store/reducer/userReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return _userReducer__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./store/reducer/userReducer.js":
/*!**************************************!*\
  !*** ./store/reducer/userReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initUserState = {
  userName: 'jack',
  age: 0
};

function userReducer(state = initUserState, action) {
  switch (action.type) {
    case 'update_name':
      return _objectSpread(_objectSpread({}, state), {}, {
        userName: action.value.userName,
        age: action.value.age
      });

    case 'del_name':
      return _objectSpread(_objectSpread({}, state), {}, {
        userName: '',
        age: 0
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./test/test.scss":
/*!************************!*\
  !*** ./test/test.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanN4Iiwid2VicGFjazovLy8uL2xpYi93aXRoLXJlZHV4LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuMTEuMkBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX25leHRAOS41LjNAbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXIvY291bnRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlci91c2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkhlYWQiLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJGb290ZXIiLCJDb250ZW50IiwiTGF5b3V0Q29tcCIsImNoaWxkcmVuIiwiaXNTZXJ2ZXIiLCJORVhUX1JFRFVYX1NUT1JFIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwid2luZG93IiwiV2l0aFJlZHV4IiwiQ29tcCIsIldpdGhSZWR1eEFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlZHV4U3RvcmUiLCJpbml0aWFsUmVkdXhTdGF0ZSIsInJlbmRlciIsInBhZ2VQcm9wcyIsInJlc3QiLCJ0ZXN0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXBwUHJvcHMiLCJnZXRTdGF0ZSIsImNvbXBvbmVudERpZENhdGNoIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwiYWxsUmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJjb3VudGVyIiwiY291bnRSZWR1Y2VyIiwidXNlciIsInVzZXJSZWR1Y2VyIiwiaW5pdGlhbGl6ZVN0b3JlIiwic3RhdGUiLCJzdG9yZSIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJSZWR1eFRodW5rIiwiaW5pdFN0YXRlIiwiY291bnQiLCJhY3Rpb24i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USxFQUFDLEVBRmI7QUFHSUMsV0FBRyxFQUFDO0FBSFI7O0FBS0o7QUFDRyxhQUFPYixLQUFQO0FBZFA7QUFnQkg7O0FBRWNGLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgUGxheUNpcmNsZU91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgSW5wdXQsIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBcIi4uL3Rlc3QvdGVzdC5zY3NzXCI7XHJcbmNvbnN0IEhlYWQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgIGV3cmV3XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjQwcHhcIiwgY29sb3I6IFwiI2ZmZlwiLCBtYXJnaW5SaWdodDogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgYWJzXHJcbiAgICAgICAgICA8UGxheUNpcmNsZU91dGxpbmVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZDtcclxuIiwiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL2hlYWQnXHJcblxyXG5jb25zdCBMYXlvdXRDb21wID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxIZWFkPjwvSGVhZD5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDb21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuY29uc3QgTkVYVF9SRURVWF9TVE9SRSA9IFwiX19ORVhUX1JFRFVYX1NUT1JFX19cIjtcclxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleC5qc1wiO1xyXG5jb25zdCBnZXRPckNyZWF0ZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xyXG4gIGlmIChpc1NlcnZlcikgcmV0dXJuIGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgaWYgKCF3aW5kb3dbTkVYVF9SRURVWF9TVE9SRV0pIHtcclxuICAgIHdpbmRvd1tORVhUX1JFRFVYX1NUT1JFXSA9IGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB3aW5kb3dbTkVYVF9SRURVWF9TVE9SRV07XHJcbn07XHJcbmNvbnN0IFdpdGhSZWR1eCA9IChDb21wKSA9PiB7XHJcbiAgY2xhc3MgV2l0aFJlZHV4QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmIChwYWdlUHJvcHMpIHBhZ2VQcm9wcy50ZXN0ID0gMTIzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21wXHJcbiAgICAgICAgICBDb21wb25lbnQ9e0NvbXBvbmVudH1cclxuICAgICAgICAgIHBhZ2VQcm9wcz17cGFnZVByb3BzfVxyXG4gICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9XHJcbiAgICAgICAgPjwvQ29tcD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFdpdGhSZWR1eEFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xyXG4gICAgY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlOyAvL+e7mWdldEluaXRpYWxQcm9wc+mHjOeahGN0eOi1i+WAvHJlZHV4U3RvcmVcclxuICAgIGxldCBhcHBQcm9wcyA9IHt9O1xyXG4gICAgaWYgKHR5cGVvZiBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICBhcHBQcm9wcyA9IGF3YWl0IENvbXAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5hcHBQcm9wcyxcclxuICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgIH07XHJcbiAgfTtcclxuICByZXR1cm4gV2l0aFJlZHV4QXBwO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBXaXRoUmVkdXg7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsIi8v6KaG55uWbmV4dCBqc+m7mOiupGFwcC5qc1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQuanN4XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBXaXRoUmVkdXggZnJvbSBcIi4uL2xpYi93aXRoLXJlZHV4LmpzeFwiO1xyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBjdHg7XHJcbiAgICBsZXQgcGFnZVByb3BzO1xyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpXHJcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhZ2VQcm9wcyxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9PjwvQ29tcG9uZW50PlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgUmVkdXhUaHVuayBmcm9tICdyZWR1eC10aHVuaydcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuaW1wb3J0IHsgY291bnRSZWR1Y2VyLCB1c2VyUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmNvbnN0IGFsbFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50ZXI6Y291bnRSZWR1Y2VyLFxyXG4gICAgdXNlcjp1c2VyUmVkdWNlclxyXG59KVxyXG5mdW5jdGlvbiBpbml0aWFsaXplU3RvcmUoc3RhdGUpIHtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgYWxsUmVkdWNlcnMsXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSksIFxyXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKFJlZHV4VGh1bmspKVxyXG4gICAgKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVN0b3JlOyIsImNvbnN0IGluaXRTdGF0ZT17XHJcbiAgICBjb3VudDowXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50UmVkdWNlcihzdGF0ZT1pbml0U3RhdGUsYWN0aW9uKXtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvdW50OnN0YXRlLmNvdW50KzFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ21pbnVzJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6c3RhdGUuY291bnQtMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY291bnRSZWR1Y2VyOyIsImltcG9ydCBjb3VudFJlZHVjZXIgZnJvbSAnLi9jb3VudFJlZHVjZXInXHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXJSZWR1Y2VyJ1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNvdW50UmVkdWNlcixcclxuICAgIHVzZXJSZWR1Y2VyXHJcbn0iLCJjb25zdCBpbml0VXNlclN0YXRlPXtcclxuICAgIHVzZXJOYW1lOidqYWNrJyxcclxuICAgIGFnZTowXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZXJSZWR1Y2VyKHN0YXRlPWluaXRVc2VyU3RhdGUsYWN0aW9uKXtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ3VwZGF0ZV9uYW1lJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6YWN0aW9uLnZhbHVlLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgYWdlOmFjdGlvbi52YWx1ZS5hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2RlbF9uYW1lJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6JycsXHJcbiAgICAgICAgICAgICAgICBhZ2U6MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9