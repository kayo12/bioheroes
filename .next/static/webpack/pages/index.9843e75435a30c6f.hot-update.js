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

/***/ "./src/components/Characters.tsx":
/*!***************************************!*\
  !*** ./src/components/Characters.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Characters; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ \"./src/components/Cards.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n\\n  .Character-Container {\\n    max-width: 990px;\\n    padding: 20px;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  .Character-Body {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 2rem 0rem;\\n    align-items: center;\\n    gap: 10px;\\n    width: 100%;\\n    height: auto;\\n  }\\n\\n  .Character-Header {\\n    width: 100%;\\n    padding-left: 0.5rem;\\n    font-size: 2rem;\\n    height: 30px;\\n    border-left: 4px solid red;\\n    display: flex;\\n  }\\n\\n  .Character-Paging{\\n    display: flex;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n\\n  .Character-Paging a{\\n    text-decoration: none;\\n     padding: 8px 16px;\\n     color: #000000;\\n      font-weight: bold;\\n  }\\n  .Character-Paging a:hover {\\n      \\n      background-color: #ff3700;\\n      color: #fff;\\n      font-weight: bold;\\n  }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst CharacterSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Characters__CharacterSection\",\n    componentId: \"sc-19eadb6f-0\"\n})(_templateObject());\n_c = CharacterSection;\nfunction Characters(props) {\n    _s();\n    const [char, setChar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/characters?ts=1&limit=8&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setChar(jsonParsed.data.results);\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    const paging = ()=>{\n        let countTotal = char.length;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CharacterSection, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"Character-Container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"Character-Header\",\n                    children: \"Personagens\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Body\",\n                    children: char.map((current, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: current.name,\n                            width: \"200px\",\n                            height: \"200px\",\n                            image: current.thumbnail.path + \".\" + current.thumbnail.extension\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Paging\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 12\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Characters, \"8N1oG9vNjgXt64iToZFQOzEKz+g=\");\n_c1 = Characters;\nvar _c, _c1;\n$RefreshReg$(_c, \"CharacterSection\");\n$RefreshReg$(_c1, \"Characters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNYO0FBRTVCLE1BQU1JLG1CQUFtQkYsNEVBQWM7Ozs7S0FBakNFO0FBNERTLFNBQVNFLFdBQVdDLEtBQUssRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNELGdEQUFTQSxDQUFDLElBQU07UUFFZFUsTUFDRSx1RUFBK0dDLE9BQXhDQSxrQ0FBK0IsRUFBQyxVQUF5QyxPQUFqQ0Esa0NBQWdDLEdBRTlJSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxhQUFlO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLElBQUk7WUFDM0JaLFFBQVFTLFdBQVdHLElBQUksQ0FBQ0MsT0FBTztRQUNqQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTTtZQUNaTCxRQUFRQyxHQUFHLENBQUNJO1FBQ2Q7SUFFSixHQUFHLEVBQUU7SUFHTCxNQUFNQyxTQUFTLElBQUs7UUFDZCxJQUFJQyxhQUFhbEIsS0FBS21CLE1BQU07SUFJOUI7SUFJSixxQkFDRSw4REFBQ3ZCO2tCQUNDLDRFQUFDd0I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFtQjs7Ozs7OzhCQUNqQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pyQixLQUFLdUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLFFBQVU7d0JBQzVCLHFCQUNFLDhEQUFDOUIsOENBQUtBOzRCQUVKK0IsT0FBT0YsUUFBUUcsSUFBSTs0QkFDbkJDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLE9BQ0VOLFFBQVFPLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLE1BQU1SLFFBQVFPLFNBQVMsQ0FBQ0UsU0FBUzsyQkFMdkRSOzs7OztvQkFTWDs7Ozs7OzhCQUVGLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBRVosOERBQUNhOzRCQUFFQyxNQUFLO3NDQUFHOzs7Ozs7c0NBQ1gsOERBQUNEOzRCQUFFQyxNQUFLO3NDQUFHOzs7Ozs7c0NBQ1gsOERBQUNEOzRCQUFFQyxNQUFLO3NDQUFHOzs7Ozs7c0NBQ1gsOERBQUNEOzRCQUFFQyxNQUFLO3NDQUFHOzs7Ozs7c0NBQ1gsOERBQUNEOzRCQUFFQyxNQUFLO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QixDQUFDO0dBN0R1QnJDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXJhY3RlcnMudHN4PzMwM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSBcIi4vQ2FyZHNcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLkNoYXJhY3Rlci1Db250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5OTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC5DaGFyYWN0ZXItQm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLUhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZWQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLkNoYXJhY3Rlci1QYWdpbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5DaGFyYWN0ZXItUGFnaW5nIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuQ2hhcmFjdGVyLVBhZ2luZyBhOmhvdmVyIHtcclxuICAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM3MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcmFjdGVycyhwcm9wcykge1xyXG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2dhdGV3YXkubWFydmVsLmNvbS92MS9wdWJsaWMvY2hhcmFjdGVycz90cz0xJmxpbWl0PTgmYXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX0maGFzaD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9IQVNIfWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGpzb25QYXJzZWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUGFyc2VkLmRhdGEpO1xyXG4gICAgICAgIHNldENoYXIoanNvblBhcnNlZC5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IHBhZ2luZyA9ICgpID0+e1xyXG4gICAgICAgIGxldCBjb3VudFRvdGFsID0gY2hhci5sZW5ndGhcclxuXHJcblxyXG4gIFxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFyYWN0ZXJTZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1Db250YWluZXJcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyLUhlYWRlclwiPlBlcnNvbmFnZW5zPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1Cb2R5XCI+XHJcbiAgICAgICAgICB7Y2hhci5tYXAoKGN1cnJlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENhcmRzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2N1cnJlbnQubmFtZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXtcIjIwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMjAwcHhcIn1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtcclxuICAgICAgICAgICAgICAgICAgY3VycmVudC50aHVtYm5haWwucGF0aCArIFwiLlwiICsgY3VycmVudC50aHVtYm5haWwuZXh0ZW5zaW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyLVBhZ2luZ1wiPlxyXG4gICAgICAgICAge31cclxuICAgICAgICAgICA8YSBocmVmPVwiXCI+MTwvYT5cclxuICAgICAgICAgICA8YSBocmVmPVwiXCI+MjwvYT5cclxuICAgICAgICAgICA8YSBocmVmPVwiXCI+MzwvYT5cclxuICAgICAgICAgICA8YSBocmVmPVwiXCI+NDwvYT5cclxuICAgICAgICAgICA8YSBocmVmPVwiXCI+NTwvYT4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2hhcmFjdGVyU2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkNhcmRzIiwiQ2hhcmFjdGVyU2VjdGlvbiIsInNlY3Rpb24iLCJDaGFyYWN0ZXJzIiwicHJvcHMiLCJjaGFyIiwic2V0Q2hhciIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJORVhUX1BVQkxJQ19BUElfSEFTSCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uUGFyc2VkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwiY2F0Y2giLCJlIiwicGFnaW5nIiwiY291bnRUb3RhbCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwiY3VycmVudCIsImluZGV4IiwidGl0bGUiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZSIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Characters.tsx\n"));

/***/ })

});