/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Timeline */ \"./components/Timeline/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/yonatanmk/projects/media-tracker/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var media = _ref.media;\n  console.log(media); // const\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sidePanel),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), media.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: item.name\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Timeline__WEBPACK_IMPORTED_MODULE_3__.default, {\n        startTime: new Date(\"09/01/2018\"),\n        endTime: new Date(),\n        children: media.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Timeline__WEBPACK_IMPORTED_MODULE_3__.default.Row, {\n            name: item.name,\n            startTime: new Date(item.startTime),\n            endTime: new Date(item.endTime)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n}; // \"06/2018\"\n\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibWVkaWEiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCIsIkRhdGUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosRUFEMEIsQ0FHMUI7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVHLHFFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxxRUFBaEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLGlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0gsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBQUEsb0JBQWtCQSxJQUFJLENBQUNDO0FBQXZCLFdBQVFELElBQUksQ0FBQ0UsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0U7QUFBSyxlQUFTLEVBQUVKLG1FQUFoQjtBQUFBLDZCQUNFLDhEQUFDLHlEQUFEO0FBQVUsaUJBQVMsRUFBRSxJQUFJSyxJQUFKLENBQVMsWUFBVCxDQUFyQjtBQUE2QyxlQUFPLEVBQUUsSUFBSUEsSUFBSixFQUF0RDtBQUFBLGtCQUNHUixLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsOEJBQ1QsOERBQUMsNkRBQUQ7QUFDRSxnQkFBSSxFQUFFQSxJQUFJLENBQUNDLElBRGI7QUFFRSxxQkFBUyxFQUFFLElBQUlFLElBQUosQ0FBU0gsSUFBSSxDQUFDSSxTQUFkLENBRmI7QUFHRSxtQkFBTyxFQUFFLElBQUlELElBQUosQ0FBU0gsSUFBSSxDQUFDSyxPQUFkO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBMUJELEMsQ0EyQkE7OztLQTNCTVgsSTs7QUE0Q04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGltZWxpbmVcIjtcblxuY29uc3QgSG9tZSA9ICh7IG1lZGlhIH0pID0+IHtcbiAgY29uc29sZS5sb2cobWVkaWEpO1xuXG4gIC8vIGNvbnN0XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVQYW5lbH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SG9tZTwvaDE+XG4gICAgICAgIHttZWRpYS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8cCBrZXk9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9wPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPFRpbWVsaW5lIHN0YXJ0VGltZT17bmV3IERhdGUoXCIwOS8wMS8yMDE4XCIpfSBlbmRUaW1lPXtuZXcgRGF0ZSgpfT5cbiAgICAgICAgICB7bWVkaWEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VGltZWxpbmUuUm93XG4gICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgc3RhcnRUaW1lPXtuZXcgRGF0ZShpdGVtLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICAgIGVuZFRpbWU9e25ldyBEYXRlKGl0ZW0uZW5kVGltZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RpbWVsaW5lPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuLy8gXCIwNi8yMDE4XCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfSE9TVH0vYXBpL21lZGlhYFxuICApO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIik7XG4gIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZGlhOiByZXNwb25zZT8uZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});