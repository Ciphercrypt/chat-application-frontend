/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ConversationContext.tsx":
/*!*********************************************!*\
  !*** ./src/context/ConversationContext.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConversationContext\": () => (/* binding */ ConversationContext),\n/* harmony export */   \"ConversationProvider\": () => (/* binding */ ConversationProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ConversationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ConversationProvider = ({ children  })=>{\n    const { 0: conversation , 1: setConversationData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: message , 1: setMessageData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function setConversation(conversation) {\n        setConversationData(conversation);\n    }\n    function setMessage(message) {\n        console.log(message);\n        setMessageData(message);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConversationContext.Provider, {\n        value: {\n            conversation,\n            message,\n            setConversation,\n            setMessage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\context\\\\ConversationContext.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db252ZXJzYXRpb25Db250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEyRDtBQWNwRCxNQUFNRSxtQkFBbUIsaUJBQUdGLG9EQUFhLENBQUMsRUFBRSxDQUE0QixDQUFDO0FBRXpFLE1BQU1HLG9CQUFvQixHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUE2QixHQUFLO0lBQy9FLE1BQU0sS0FBRUMsWUFBWSxNQUFFQyxtQkFBbUIsTUFBS0wsK0NBQVEsQ0FBZSxFQUFFLENBQWlCO0lBQ3hGLE1BQU0sS0FBRU0sT0FBTyxNQUFFQyxjQUFjLE1BQUtQLCtDQUFRLENBQVksRUFBRSxDQUFDO0lBRTNELFNBQVNRLGVBQWUsQ0FBQ0osWUFBMEIsRUFBRTtRQUNuREMsbUJBQW1CLENBQUNELFlBQVksQ0FBQyxDQUFDO0tBQ25DO0lBRUQsU0FBU0ssVUFBVSxDQUFFSCxPQUFrQixFQUFHO1FBQ3hDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7UUFDckJDLGNBQWMsQ0FBQ0QsT0FBTyxDQUFDO0tBQ3hCO0lBRUQscUJBQ0UsOERBQUNMLG1CQUFtQixDQUFDVyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUNuQ1QsWUFBWTtZQUNaRSxPQUFPO1lBQ1BFLGVBQWU7WUFDZkMsVUFBVTtTQUNYO2tCQUNFTixRQUFROzs7OztpQkFDb0IsQ0FDaEM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwbGljYXRpb24tZnJvbnRlbmQvLi9zcmMvY29udGV4dC9Db252ZXJzYXRpb25Db250ZXh0LnRzeD9kN2JjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgQ29udmVyc2F0aW9uIH0gZnJvbSBcIi4uL3R5cGVzL0NvbnZlcnNhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIENvbnZlcnNhdGlvblByb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb252ZXJzYXRpb25Db250ZXh0VHlwZSB7XHJcbiAgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XHJcbiAgbWVzc2FnZTogTWVzc2FnZVtdO1xyXG4gIHNldENvbnZlcnNhdGlvbjogKCBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbiApID0+IHZvaWQ7XHJcbiAgc2V0TWVzc2FnZTogKCBtZXNzYWdlOiBNZXNzYWdlW10gKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udmVyc2F0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ29udmVyc2F0aW9uQ29udGV4dFR5cGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnZlcnNhdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogQ29udmVyc2F0aW9uUHJvdmlkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFsgY29udmVyc2F0aW9uLCBzZXRDb252ZXJzYXRpb25EYXRhIF0gPSB1c2VTdGF0ZTxDb252ZXJzYXRpb24+KHt9IGFzIENvbnZlcnNhdGlvbik7XHJcbiAgY29uc3QgWyBtZXNzYWdlLCBzZXRNZXNzYWdlRGF0YSBdID0gdXNlU3RhdGU8TWVzc2FnZVtdPihbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNldENvbnZlcnNhdGlvbihjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbikge1xyXG4gICAgc2V0Q29udmVyc2F0aW9uRGF0YShjb252ZXJzYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0TWVzc2FnZSggbWVzc2FnZTogTWVzc2FnZVtdICkge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICBzZXRNZXNzYWdlRGF0YShtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb252ZXJzYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIGNvbnZlcnNhdGlvbixcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgc2V0Q29udmVyc2F0aW9uLFxyXG4gICAgICBzZXRNZXNzYWdlLFxyXG4gICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ29udmVyc2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQ29udmVyc2F0aW9uQ29udGV4dCIsIkNvbnZlcnNhdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb252ZXJzYXRpb24iLCJzZXRDb252ZXJzYXRpb25EYXRhIiwibWVzc2FnZSIsInNldE1lc3NhZ2VEYXRhIiwic2V0Q29udmVyc2F0aW9uIiwic2V0TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ConversationContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ConversationContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ConversationContext */ \"./src/context/ConversationContext.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ConversationContext__WEBPACK_IMPORTED_MODULE_2__.ConversationProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFBK0I7QUFFdUM7QUFFdEUsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNILDhFQUFvQjtrQkFDbkIsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDUCxDQUN4QjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcGxpY2F0aW9uLWZyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IENvbnZlcnNhdGlvblByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvQ29udmVyc2F0aW9uQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udmVyc2F0aW9uUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQ29udmVyc2F0aW9uUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiQ29udmVyc2F0aW9uUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();