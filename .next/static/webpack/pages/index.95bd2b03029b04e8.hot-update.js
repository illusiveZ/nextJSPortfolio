"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 0\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"inline-block w-full text-dark font-bold capitalize text-8xl \".concat(className),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    initial: \"initial\",\n                    animate: \"animate\",\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/AnimatedText.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/AnimatedText.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/AnimatedText.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFFBQVE7SUFDWkMsU0FBUztRQUNQQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQRCxTQUFTO1FBQ1RFLFlBQVk7WUFDVkMsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLGFBQWE7SUFDakJMLFNBQVM7UUFDUEMsU0FBUztRQUNUSyxHQUFHO0lBQ0w7SUFDQUosU0FBUztRQUNQRCxTQUFTO1FBQ1RLLEdBQUc7UUFDSEgsWUFBWTtZQUNWSSxVQUFVO1FBQ1o7SUFDRjtBQUNGO0FBRUEsTUFBTUMsZUFBZSxTQUE4QjtRQUE3QixFQUFFQyxLQUFJLEVBQUVDLFdBQVksR0FBRSxFQUFFO0lBQzVDLHFCQUNFLDhEQUFDQztRQUFJRCxXQUFVO2tCQUNiLDRFQUFDWixvREFBUztZQUNSWSxXQUFXLCtEQUF5RSxPQUFWQTtZQUMxRUcsVUFBVWQ7WUFDVkMsU0FBUTtZQUNSRSxTQUFRO3NCQUVQTyxLQUFLSyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMxQiw4REFBQ25CLHNEQUFXO29CQUVWWSxXQUFVO29CQUNWRyxVQUFVUjtvQkFDVkwsU0FBUTtvQkFDUkUsU0FBUTs7d0JBRVBjO3dCQUFLOzttQkFOREEsT0FBTyxNQUFNQzs7Ozs7Ozs7Ozs7Ozs7O0FBWTlCO0tBdkJNVDtBQXlCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanM/NGMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBxdW90ZSA9IHtcbiAgaW5pdGlhbDoge1xuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIGFuaW1hdGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiAwLjUsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IHNpbmdsZVdvcmQgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHk6IDUwLFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBBbmltYXRlZFRleHQgPSAoeyB0ZXh0LCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8bW90aW9uLmgxXG4gICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1kYXJrIGZvbnQtYm9sZCBjYXBpdGFsaXplIHRleHQtOHhsICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHZhcmlhbnRzPXtxdW90ZX1cbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICA+XG4gICAgICAgIHt0ZXh0LnNwbGl0KFwiIFwiKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICBrZXk9e3dvcmQgKyBcIi1cIiArIGluZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtzaW5nbGVXb3JkfVxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xuICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9tb3Rpb24uaDE+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZFRleHQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJxdW90ZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInNpbmdsZVdvcmQiLCJ5IiwiZHVyYXRpb24iLCJBbmltYXRlZFRleHQiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ2YXJpYW50cyIsInNwbGl0IiwibWFwIiwid29yZCIsImluZGV4Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});