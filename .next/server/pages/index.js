/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/yonatanmk/projects/media-tracker/pages/index.js\";\n\n\n\nconst Home = ({\n  media\n}) => {\n  console.log(media);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticProps() {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${\"http://localhost:3000\"}/api/media`); // console.log(\"response\");\n  // console.log(response.data);\n\n  return {\n    props: {\n      media: response === null || response === void 0 ? void 0 : response.data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYS10cmFja2VyLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibWVkaWEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZSIsImF4aW9zIiwicHJvY2VzcyIsInByb3BzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FQRDs7QUFTTyxlQUFlRyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUNwQixHQUFFQyx1QkFBaUMsWUFEZixDQUF2QixDQURxQyxDQUtyQztBQUNBOztBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xQLFdBQUssRUFBRUksUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVJO0FBRFo7QUFERixHQUFQO0FBS0Q7QUFFRCwrREFBZVQsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBIb21lID0gKHsgbWVkaWEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhtZWRpYSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0hPU1R9L2FwaS9tZWRpYWBcbiAgKTtcblxuICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIpO1xuICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWRpYTogcmVzcG9uc2U/LmRhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();