"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https:twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https:github.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https:linkedin.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https:linkedin.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https:instagram.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.InstagramLogo, {}, void 0, false, {\n                            fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%] \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Untitled/Coding Portfolio /nextJSPortfolio/src/components/NavBar.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSDtBQUNBO0FBQ2M7QUFPdkI7QUFDc0I7QUFFdkMsTUFBTVUsYUFBYSxTQUFxQztRQUFwQyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsV0FBWSxHQUFFLEVBQUU7O0lBQ2pELE1BQU1DLFNBQVNYLHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ0gsa0RBQUlBO1FBQUNXLE1BQU1BO1FBQU1FLFdBQVcsR0FBYSxPQUFWQSxXQUFVOztZQUN2Q0Q7MEJBRUQsOERBQUNHO2dCQUNDRixXQUFXLG9IQUVWLE9BRENDLE9BQU9FLE1BQU0sS0FBS0wsT0FBTyxXQUFXLEtBQUs7MEJBRTVDOzs7Ozs7Ozs7Ozs7QUFLUDtHQWhCTUQ7O1FBQ1dQLGtEQUFTQTs7O0tBRHBCTztBQWtCTixNQUFNTyxTQUFTLElBQU07SUFDbkIscUJBQ0UsOERBQUNDO1FBQU9MLFdBQVU7OzBCQUNoQiw4REFBQ007O2tDQUNDLDhEQUFDVDt3QkFBV0MsTUFBSzt3QkFBSUMsT0FBTTt3QkFBT0MsV0FBVTs7Ozs7O2tDQUM1Qyw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVNDLE9BQU07d0JBQVFDLFdBQVU7Ozs7OztrQ0FDbEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFZQyxPQUFNO3dCQUFXQyxXQUFVOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBWUMsT0FBTTt3QkFBV0MsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUUxRCw4REFBQ007Z0JBQUlOLFdBQVU7O2tDQUNiLDhEQUFDSixtREFBUTt3QkFDUEUsTUFBSzt3QkFDTFUsUUFBUTt3QkFDUkMsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO2tDQUVwQiw0RUFBQ2YsK0NBQVdBOzs7Ozs7Ozs7O2tDQUVkLDhEQUFDQyxtREFBUTt3QkFDUEUsTUFBSzt3QkFDTFUsUUFBUTt3QkFDUkMsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO2tDQUVwQiw0RUFBQ25CLDhDQUFVQTs7Ozs7Ozs7OztrQ0FFYiw4REFBQ0ssbURBQVE7d0JBQ1BFLE1BQUs7d0JBQ0xVLFFBQVE7d0JBQ1JDLFlBQVk7NEJBQUVDLEdBQUcsQ0FBQzt3QkFBRTtrQ0FFcEIsNEVBQUNqQixnREFBWUE7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNHLG1EQUFRO3dCQUNQRSxNQUFLO3dCQUNMVSxRQUFRO3dCQUNSQyxZQUFZOzRCQUFFQyxHQUFHLENBQUM7d0JBQUU7a0NBRXBCLDRFQUFDaEIsaURBQWFBOzs7Ozs7Ozs7O2tDQUVoQiw4REFBQ0UsbURBQVE7d0JBQ1BFLE1BQUs7d0JBQ0xVLFFBQVE7d0JBQ1JDLFlBQVk7NEJBQUVDLEdBQUcsQ0FBQzt3QkFBRTtrQ0FFcEIsNEVBQUNsQixpREFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDbUI7Z0JBQUlYLFdBQVU7MEJBQ2IsNEVBQUNYLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUliO01BbkRNZTtBQXFETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIEdpdGh1Ykljb24sXG4gIEluc3RhZ3JhbUxvZ28sXG4gIExpbmtlZEluSWNvbixcbiAgUGludGVyZXN0SWNvbixcbiAgVHdpdHRlckljb24sXG59IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBDdXN0b21MaW5rID0gKHsgaHJlZiwgdGl0bGUsIGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9PlxuICAgICAge3RpdGxlfVxuXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e2BoLVsxcHhdIGlubGluZS1ibG9jayBiZy1kYXJrIGFic29sdXRlIGxlZnQtMCAtYm90dG9tLTAuNSBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/IFwidy1mdWxsXCIgOiBcInctMFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvc3Bhbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMzIgcHktOCBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgdGl0bGU9XCJIb21lXCIgY2xhc3NOYW1lPVwibXItNFwiIC8+XG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYWJvdXRcIiB0aXRsZT1cIkFib3V0XCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvcHJvamVjdHNcIiB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIiB0aXRsZT1cIkFydGljbGVzXCIgY2xhc3NOYW1lPVwibWwtNFwiIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwXCI+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIGhyZWY9XCJodHRwczp0d2l0dGVyLmNvbVwiXG4gICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Z2l0aHViLmNvbVwiXG4gICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxHaXRodWJJY29uIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIGhyZWY9XCJodHRwczpsaW5rZWRpbi5jb21cIlxuICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGlua2VkSW5JY29uIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIGhyZWY9XCJodHRwczpsaW5rZWRpbi5jb21cIlxuICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UGludGVyZXN0SWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6aW5zdGFncmFtLmNvbVwiXG4gICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnN0YWdyYW1Mb2dvIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV0gXCI+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJMb2dvIiwidXNlUm91dGVyIiwiR2l0aHViSWNvbiIsIkluc3RhZ3JhbUxvZ28iLCJMaW5rZWRJbkljb24iLCJQaW50ZXJlc3RJY29uIiwiVHdpdHRlckljb24iLCJtb3Rpb24iLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsImhlYWRlciIsIm5hdiIsImEiLCJ0YXJnZXQiLCJ3aGlsZUhvdmVyIiwieSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});