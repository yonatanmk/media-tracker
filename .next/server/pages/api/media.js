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
exports.id = "pages/api/media";
exports.ids = ["pages/api/media"];
exports.modules = {

/***/ "./middleware/error.js":
/*!*****************************!*\
  !*** ./middleware/error.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ onError; }\n/* harmony export */ });\nasync function onError(error, req, res, next) {\n  console.log(error);\n  res.status(500).end();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYS10cmFja2VyLy4vbWlkZGxld2FyZS9lcnJvci5qcz9lYzNiIl0sIm5hbWVzIjpbIm9uRXJyb3IiLCJlcnJvciIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBZixDQUF1QkMsS0FBdkIsRUFBOEJDLEdBQTlCLEVBQW1DQyxHQUFuQyxFQUF3Q0MsSUFBeEMsRUFBOEM7QUFDM0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0FFLEtBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QiLCJmaWxlIjoiLi9taWRkbGV3YXJlL2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gb25FcnJvcihlcnJvciwgcmVxLCByZXMsIG5leHQpIHtcbiAgY29uc29sZS5sb2coZXJyb3IpXG4gIHJlcy5zdGF0dXMoNTAwKS5lbmQoKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/error.js\n");

/***/ }),

/***/ "./pages/api/media/index.js":
/*!**********************************!*\
  !*** ./pages/api/media/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/error */ \"./middleware/error.js\");\n // import { folder } from \"../../../db\";\n// import middleware from '../../../middleware/all'\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({\n  onError: _middleware_error__WEBPACK_IMPORTED_MODULE_1__.default\n}); // handler.use(middleware);\n// handler.post(async (req, res) => {\n//   const newFolder = await folder.createFolder(req.db, {\n//     createdBy: req.user.id,\n//     name: req.body.name,\n//   });\n//   res.send({ data: newFolder });\n// });\n\nhandler.get((req, res) => {\n  const mockData = [{\n    name: \"Dishonored 2\"\n  }, {\n    name: \"Horizon Zero Dawn\"\n  }, {\n    name: \"God of War\"\n  }, {\n    name: \"Yakuza 6\"\n  }, {\n    name: \"Divinity Original Sin 2\"\n  }]; // return mockData;\n\n  res.send({\n    data: mockData\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYS10cmFja2VyLy4vcGFnZXMvYXBpL21lZGlhL2luZGV4LmpzPzY2NjUiXSwibmFtZXMiOlsiaGFuZGxlciIsIm5jIiwib25FcnJvciIsImdldCIsInJlcSIsInJlcyIsIm1vY2tEYXRhIiwibmFtZSIsInNlbmQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7O0NBQ0E7QUFDQTs7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsbURBQUUsQ0FBQztBQUNqQkMsU0FBT0E7QUFEVSxDQUFELENBQWxCLEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN4QixRQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxRQUFJLEVBQUU7QUFEUixHQURlLEVBSWY7QUFDRUEsUUFBSSxFQUFFO0FBRFIsR0FKZSxFQU9mO0FBQ0VBLFFBQUksRUFBRTtBQURSLEdBUGUsRUFVZjtBQUNFQSxRQUFJLEVBQUU7QUFEUixHQVZlLEVBYWY7QUFDRUEsUUFBSSxFQUFFO0FBRFIsR0FiZSxDQUFqQixDQUR3QixDQWtCeEI7O0FBQ0FGLEtBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRUg7QUFBUixHQUFUO0FBQ0QsQ0FwQkQ7QUFzQkEsK0RBQWVOLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVkaWEvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuLy8gaW1wb3J0IHsgZm9sZGVyIH0gZnJvbSBcIi4uLy4uLy4uL2RiXCI7XG4vLyBpbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2FsbCdcbmltcG9ydCBvbkVycm9yIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlL2Vycm9yXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBuYyh7XG4gIG9uRXJyb3IsXG59KTtcblxuLy8gaGFuZGxlci51c2UobWlkZGxld2FyZSk7XG4vLyBoYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgIGNvbnN0IG5ld0ZvbGRlciA9IGF3YWl0IGZvbGRlci5jcmVhdGVGb2xkZXIocmVxLmRiLCB7XG4vLyAgICAgY3JlYXRlZEJ5OiByZXEudXNlci5pZCxcbi8vICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuLy8gICB9KTtcbi8vICAgcmVzLnNlbmQoeyBkYXRhOiBuZXdGb2xkZXIgfSk7XG4vLyB9KTtcblxuaGFuZGxlci5nZXQoKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG1vY2tEYXRhID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiRGlzaG9ub3JlZCAyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkhvcml6b24gWmVybyBEYXduXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkdvZCBvZiBXYXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiWWFrdXphIDZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRGl2aW5pdHkgT3JpZ2luYWwgU2luIDJcIixcbiAgICB9LFxuICBdO1xuICAvLyByZXR1cm4gbW9ja0RhdGE7XG4gIHJlcy5zZW5kKHsgZGF0YTogbW9ja0RhdGEgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/media/index.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/media/index.js"));
module.exports = __webpack_exports__;

})();