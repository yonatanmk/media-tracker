/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Timeline/Row.js":
/*!************************************!*\
  !*** ./components/Timeline/Row.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Timeline/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./components/Timeline/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/yonatanmk/projects/media-tracker/components/Timeline/Row.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Row = function Row(_ref) {\n  _s();\n\n  var name = _ref.name,\n      startTime = _ref.startTime,\n      endTime = _ref.endTime;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_index__WEBPACK_IMPORTED_MODULE_2__.TimelineContext),\n      timelineStartTime = _useContext.timelineStartTime,\n      timelineEndTime = _useContext.timelineEndTime;\n\n  console.log({\n    name: name,\n    startTime: startTime,\n    endTime: endTime,\n    timelineStartTime: timelineStartTime,\n    timelineEndTime: timelineEndTime\n  });\n  var timelineDuration = timelineEndTime - timelineStartTime;\n  var rowDuration = endTime - startTime;\n  var percentage = rowDuration / timelineDuration;\n  var bufferTime = startTime - timelineStartTime;\n  var bufferPercentage = bufferTime / timelineDuration;\n  console.log(\"Timeline Duration: \" + timelineDuration);\n  console.log(\"Row Duration: \" + rowDuration);\n  console.log(\"percentage: \" + percentage);\n  console.log(\"buffer: \" + bufferPercentage);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().row),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().row__block),\n      style: {\n        width: \"\".concat(percentage * 100, \"%\")\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Row, \"4v6PzI5QWZSs2ZHW8eKiGJZrRCY=\");\n\n_c = Row;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);\n\nvar _c;\n\n$RefreshReg$(_c, \"Row\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaW1lbGluZS9Sb3cuanM/Njg1OCJdLCJuYW1lcyI6WyJSb3ciLCJuYW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInVzZUNvbnRleHQiLCJUaW1lbGluZUNvbnRleHQiLCJ0aW1lbGluZVN0YXJ0VGltZSIsInRpbWVsaW5lRW5kVGltZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lbGluZUR1cmF0aW9uIiwicm93RHVyYXRpb24iLCJwZXJjZW50YWdlIiwiYnVmZmVyVGltZSIsImJ1ZmZlclBlcmNlbnRhZ2UiLCJzdHlsZXMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsb0JBQ0dDLGlEQUFVLENBQUNDLG1EQUFELENBRGI7QUFBQSxNQUNwQ0MsaUJBRG9DLGVBQ3BDQSxpQkFEb0M7QUFBQSxNQUNqQkMsZUFEaUIsZUFDakJBLGVBRGlCOztBQUU1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFDVlIsUUFBSSxFQUFKQSxJQURVO0FBRVZDLGFBQVMsRUFBVEEsU0FGVTtBQUdWQyxXQUFPLEVBQVBBLE9BSFU7QUFJVkcscUJBQWlCLEVBQWpCQSxpQkFKVTtBQUtWQyxtQkFBZSxFQUFmQTtBQUxVLEdBQVo7QUFRQSxNQUFNRyxnQkFBZ0IsR0FBR0gsZUFBZSxHQUFHRCxpQkFBM0M7QUFDQSxNQUFNSyxXQUFXLEdBQUdSLE9BQU8sR0FBR0QsU0FBOUI7QUFDQSxNQUFNVSxVQUFVLEdBQUdELFdBQVcsR0FBR0QsZ0JBQWpDO0FBQ0EsTUFBTUcsVUFBVSxHQUFHWCxTQUFTLEdBQUdJLGlCQUEvQjtBQUNBLE1BQU1RLGdCQUFnQixHQUFHRCxVQUFVLEdBQUdILGdCQUF0QztBQUNBRixTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBd0JDLGdCQUFwQztBQUNBRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBbUJFLFdBQS9CO0FBQ0FILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFpQkcsVUFBN0I7QUFDQUosU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBYUssZ0JBQXpCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFoQjtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxFQUFFQSxzRUFEYjtBQUVFLFdBQUssRUFBRTtBQUFFQyxhQUFLLFlBQUtKLFVBQVUsR0FBRyxHQUFsQjtBQUFQLE9BRlQ7QUFBQSw2QkFJRTtBQUFBLGtCQUFJWDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0E3QkQ7O0dBQU1ELEc7O0tBQUFBLEc7QUErQk4sK0RBQWVBLEdBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbWVsaW5lL1Jvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBUaW1lbGluZUNvbnRleHQgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBSb3cgPSAoeyBuYW1lLCBzdGFydFRpbWUsIGVuZFRpbWUgfSkgPT4ge1xuICBjb25zdCB7IHRpbWVsaW5lU3RhcnRUaW1lLCB0aW1lbGluZUVuZFRpbWUgfSA9IHVzZUNvbnRleHQoVGltZWxpbmVDb250ZXh0KTtcbiAgY29uc29sZS5sb2coe1xuICAgIG5hbWUsXG4gICAgc3RhcnRUaW1lLFxuICAgIGVuZFRpbWUsXG4gICAgdGltZWxpbmVTdGFydFRpbWUsXG4gICAgdGltZWxpbmVFbmRUaW1lLFxuICB9KTtcblxuICBjb25zdCB0aW1lbGluZUR1cmF0aW9uID0gdGltZWxpbmVFbmRUaW1lIC0gdGltZWxpbmVTdGFydFRpbWU7XG4gIGNvbnN0IHJvd0R1cmF0aW9uID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgY29uc3QgcGVyY2VudGFnZSA9IHJvd0R1cmF0aW9uIC8gdGltZWxpbmVEdXJhdGlvbjtcbiAgY29uc3QgYnVmZmVyVGltZSA9IHN0YXJ0VGltZSAtIHRpbWVsaW5lU3RhcnRUaW1lO1xuICBjb25zdCBidWZmZXJQZXJjZW50YWdlID0gYnVmZmVyVGltZSAvIHRpbWVsaW5lRHVyYXRpb247XG4gIGNvbnNvbGUubG9nKFwiVGltZWxpbmUgRHVyYXRpb246IFwiICsgdGltZWxpbmVEdXJhdGlvbik7XG4gIGNvbnNvbGUubG9nKFwiUm93IER1cmF0aW9uOiBcIiArIHJvd0R1cmF0aW9uKTtcbiAgY29uc29sZS5sb2coXCJwZXJjZW50YWdlOiBcIiArIHBlcmNlbnRhZ2UpO1xuICBjb25zb2xlLmxvZyhcImJ1ZmZlcjogXCIgKyBidWZmZXJQZXJjZW50YWdlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd19fYmxvY2t9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50YWdlICogMTAwfSVgIH19XG4gICAgICA+XG4gICAgICAgIDxwPntuYW1lfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Timeline/Row.js\n");

/***/ })

});