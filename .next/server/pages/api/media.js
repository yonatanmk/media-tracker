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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/error */ \"./middleware/error.js\");\n // import { folder } from \"../../../db\";\n// import middleware from '../../../middleware/all'\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({\n  onError: _middleware_error__WEBPACK_IMPORTED_MODULE_1__.default\n}); // handler.use(middleware);\n// handler.post(async (req, res) => {\n//   const newFolder = await folder.createFolder(req.db, {\n//     createdBy: req.user.id,\n//     name: req.body.name,\n//   });\n//   res.send({ data: newFolder });\n// });\n\nhandler.get((req, res) => {\n  const mockData = [{\n    id: 1,\n    name: \"Dishonored 2\",\n    startTime: new Date(\"04/20/2019\"),\n    endTime: new Date(\"6/14/2019\")\n  }, {\n    id: 2,\n    name: \"Red Dead Redemption 2\",\n    startTime: new Date(\"10/26/2018\"),\n    endTime: new Date(\"3/18/2019\")\n  }, {\n    id: 3,\n    name: \"Cyberpunk 2077\",\n    startTime: new Date(\"12/09/2020\"),\n    endTime: new Date(\"12/30/2020\")\n  }, {\n    id: 4,\n    name: \"Yakuza 6\",\n    startTime: new Date(\"12/7/2020\"),\n    endTime: new Date(\"1/7/2021\")\n  }, {\n    id: 5,\n    name: \"Divinity Original Sin 2\",\n    startTime: new Date(\"05/31/2020\"),\n    endTime: new Date(\"10/26/2020\")\n  }]; // return mockData;\n\n  res.send(mockData);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYS10cmFja2VyLy4vcGFnZXMvYXBpL21lZGlhL2luZGV4LmpzPzY2NjUiXSwibmFtZXMiOlsiaGFuZGxlciIsIm5jIiwib25FcnJvciIsImdldCIsInJlcSIsInJlcyIsIm1vY2tEYXRhIiwiaWQiLCJuYW1lIiwic3RhcnRUaW1lIiwiRGF0ZSIsImVuZFRpbWUiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7O0NBQ0E7QUFDQTs7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsbURBQUUsQ0FBQztBQUNqQkMsU0FBT0E7QUFEVSxDQUFELENBQWxCLEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN4QixRQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUUsY0FGUjtBQUdFQyxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLFlBQVQsQ0FIYjtBQUlFQyxXQUFPLEVBQUUsSUFBSUQsSUFBSixDQUFTLFdBQVQ7QUFKWCxHQURlLEVBT2Y7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLHVCQUZSO0FBR0VDLGFBQVMsRUFBRSxJQUFJQyxJQUFKLENBQVMsWUFBVCxDQUhiO0FBSUVDLFdBQU8sRUFBRSxJQUFJRCxJQUFKLENBQVMsV0FBVDtBQUpYLEdBUGUsRUFhZjtBQUNFSCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUUsZ0JBRlI7QUFHRUMsYUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxZQUFULENBSGI7QUFJRUMsV0FBTyxFQUFFLElBQUlELElBQUosQ0FBUyxZQUFUO0FBSlgsR0FiZSxFQW1CZjtBQUNFSCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUUsVUFGUjtBQUdFQyxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLFdBQVQsQ0FIYjtBQUlFQyxXQUFPLEVBQUUsSUFBSUQsSUFBSixDQUFTLFVBQVQ7QUFKWCxHQW5CZSxFQXlCZjtBQUNFSCxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUUseUJBRlI7QUFHRUMsYUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxZQUFULENBSGI7QUFJRUMsV0FBTyxFQUFFLElBQUlELElBQUosQ0FBUyxZQUFUO0FBSlgsR0F6QmUsQ0FBakIsQ0FEd0IsQ0FpQ3hCOztBQUNBTCxLQUFHLENBQUNPLElBQUosQ0FBU04sUUFBVDtBQUNELENBbkNEO0FBcUNBLCtEQUFlTixPQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL21lZGlhL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcbi8vIGltcG9ydCB7IGZvbGRlciB9IGZyb20gXCIuLi8uLi8uLi9kYlwiO1xuLy8gaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hbGwnXG5pbXBvcnQgb25FcnJvciBmcm9tIFwiLi4vLi4vLi4vbWlkZGxld2FyZS9lcnJvclwiO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoe1xuICBvbkVycm9yLFxufSk7XG5cbi8vIGhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xuLy8gaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuLy8gICBjb25zdCBuZXdGb2xkZXIgPSBhd2FpdCBmb2xkZXIuY3JlYXRlRm9sZGVyKHJlcS5kYiwge1xuLy8gICAgIGNyZWF0ZWRCeTogcmVxLnVzZXIuaWQsXG4vLyAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbi8vICAgfSk7XG4vLyAgIHJlcy5zZW5kKHsgZGF0YTogbmV3Rm9sZGVyIH0pO1xuLy8gfSk7XG5cbmhhbmRsZXIuZ2V0KChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBtb2NrRGF0YSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6IFwiRGlzaG9ub3JlZCAyXCIsXG4gICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKFwiMDQvMjAvMjAxOVwiKSxcbiAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKFwiNi8xNC8yMDE5XCIpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiBcIlJlZCBEZWFkIFJlZGVtcHRpb24gMlwiLFxuICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShcIjEwLzI2LzIwMThcIiksXG4gICAgICBlbmRUaW1lOiBuZXcgRGF0ZShcIjMvMTgvMjAxOVwiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgbmFtZTogXCJDeWJlcnB1bmsgMjA3N1wiLFxuICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShcIjEyLzA5LzIwMjBcIiksXG4gICAgICBlbmRUaW1lOiBuZXcgRGF0ZShcIjEyLzMwLzIwMjBcIiksXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIG5hbWU6IFwiWWFrdXphIDZcIixcbiAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoXCIxMi83LzIwMjBcIiksXG4gICAgICBlbmRUaW1lOiBuZXcgRGF0ZShcIjEvNy8yMDIxXCIpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBuYW1lOiBcIkRpdmluaXR5IE9yaWdpbmFsIFNpbiAyXCIsXG4gICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKFwiMDUvMzEvMjAyMFwiKSxcbiAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKFwiMTAvMjYvMjAyMFwiKSxcbiAgICB9LFxuICBdO1xuICAvLyByZXR1cm4gbW9ja0RhdGE7XG4gIHJlcy5zZW5kKG1vY2tEYXRhKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/media/index.js\n");

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