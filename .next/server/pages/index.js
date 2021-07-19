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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/yonatanmk/projects/media-tracker/pages/index.js\";\n\n\n\n\nconst Home = ({\n  media\n}) => {\n  console.log(media);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n      children: \"Home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticProps() {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${\"http://localhost:3000\"}/api/media`); // console.log(\"response\");\n  // console.log(response.data);\n\n  return {\n    props: {\n      media: response === null || response === void 0 ? void 0 : response.data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYS10cmFja2VyLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibWVkaWEiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZSIsImF4aW9zIiwicHJvY2VzcyIsInByb3BzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBRUcsaUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQVBEOztBQVNPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLGdEQUFBLENBQ3BCLEdBQUVDLHVCQUFpQyxZQURmLENBQXZCLENBRHFDLENBS3JDO0FBQ0E7O0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTFIsV0FBSyxFQUFFSyxRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRUk7QUFEWjtBQURGLEdBQVA7QUFLRDtBQUVELCtEQUFlVixJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgSG9tZSA9ICh7IG1lZGlhIH0pID0+IHtcbiAgY29uc29sZS5sb2cobWVkaWEpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkhvbWU8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfSE9TVH0vYXBpL21lZGlhYFxuICApO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIik7XG4gIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZGlhOiByZXNwb25zZT8uZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"index_title__3W9b9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYS10cmFja2VyLy4vcGFnZXMvaW5kZXgubW9kdWxlLnNjc3M/YTZiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGVcIjogXCJpbmRleF90aXRsZV9fM1c5YjlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.module.scss\n");

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