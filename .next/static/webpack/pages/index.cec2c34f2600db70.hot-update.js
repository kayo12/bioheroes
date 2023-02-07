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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Characters; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ \"./src/components/Cards.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n\\n  .Character-Container {\\n    max-width: 990px;\\n    padding: 20px;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  .Character-Body {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 2rem 0rem;\\n    align-items: center;\\n    gap: 10px;\\n    width: 100%;\\n    height: auto;\\n  }\\n\\n  .Character-Header {\\n    width: 100%;\\n    padding-left: 0.5rem;\\n    font-size: 2rem;\\n    height: 30px;\\n    border-left: 4px solid red;\\n    display: flex;\\n  }\\n\\n  .Character-Paging {\\n    display: flex;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n\\n  .Character-Paging a {\\n    text-decoration: none;\\n    padding: 8px 16px;\\n    color: #000000;\\n    font-weight: bold;\\n  }\\n  .Character-Paging a:hover {\\n    background-color: #ff3700;\\n    color: #fff;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst CharacterSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Characters__CharacterSection\",\n    componentId: \"sc-39396af7-0\"\n})(_templateObject());\n_c = CharacterSection;\nfunction Characters(props) {\n    _s();\n    const [char, setChar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setChar(jsonParsed.data.results);\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    const groups = ()=>{\n        let last = (pages === null || pages === void 0 ? void 0 : pages.target.value) * 8;\n        let first = 8 - (pages === null || pages === void 0 ? void 0 : pages.target.value) * 8;\n        let gp = char.slice(first, last).map((current, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: current.name,\n                width: \"200px\",\n                height: \"200px\",\n                image: current.thumbnail.path + \".\" + current.thumbnail.extension\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this);\n        });\n        return gp;\n    };\n    const pagingLength = ()=>{\n        let group = Math.round(char.length / 8);\n        let pading = [\n            ...Array(group)\n        ].map((_, indx)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"\",\n                onClick: (current)=>setPages(current),\n                children: indx + 1\n            }, \"\".concat(indx, \"_\"), false, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this);\n        });\n        return pading;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CharacterSection, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"Character-Container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"Character-Header\",\n                    children: \"Personagens\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Body\",\n                    children: groups()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Paging\",\n                    children: pagingLength()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Characters, \"X1/daGsNd40Jog/EMsELfSsn00Y=\");\n_c1 = Characters;\nvar _c, _c1;\n$RefreshReg$(_c, \"CharacterSection\");\n$RefreshReg$(_c1, \"Characters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNYO0FBRTVCLE1BQU1JLG1CQUFtQkYsNEVBQWM7Ozs7S0FBakNFO0FBMERTLFNBQVNFLFdBQVdDLEtBQUssRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFFdkNELGdEQUFTQSxDQUFDLElBQU07UUFDZFksTUFDRSx3RUFBZ0hDLE9BQXhDQSxrQ0FBK0IsRUFBQyxVQUF5QyxPQUFqQ0Esa0NBQWdDLEdBRS9JSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxhQUFlO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLElBQUk7WUFDM0JkLFFBQVFXLFdBQVdHLElBQUksQ0FBQ0MsT0FBTztRQUNqQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTTtZQUNaTCxRQUFRQyxHQUFHLENBQUNJO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxTQUFTLElBQU07UUFFbkIsSUFBSUMsT0FBT2xCLENBQUFBLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT21CLE1BQU0sQ0FBQ0MsS0FBSyxJQUFHO1FBQ2pDLElBQUlDLFFBQVEsSUFBS3JCLENBQUFBLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT21CLE1BQU0sQ0FBQ0MsS0FBSyxJQUFHO1FBQ3ZDLElBQUlFLEtBQUt4QixLQUFLeUIsS0FBSyxDQUFDRixPQUFPSCxNQUFNTSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0MsUUFBVTtZQUN2RCxxQkFDRSw4REFBQ2pDLDhDQUFLQTtnQkFFSmtDLE9BQU9GLFFBQVFHLElBQUk7Z0JBQ25CQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxPQUFPTixRQUFRTyxTQUFTLENBQUNDLElBQUksR0FBRyxNQUFNUixRQUFRTyxTQUFTLENBQUNFLFNBQVM7ZUFKNURSOzs7OztRQU9YO1FBRUEsT0FBT0o7SUFDVDtJQUVBLE1BQU1hLGVBQWUsSUFBTTtRQUN6QixJQUFJQyxRQUFRQyxLQUFLQyxLQUFLLENBQUN4QyxLQUFLeUMsTUFBTSxHQUFHO1FBQ3JDLElBQUlDLFNBQVM7ZUFBSUMsTUFBTUw7U0FBTyxDQUFDWixHQUFHLENBQUMsQ0FBQ2tCLEdBQUdDLE9BQVM7WUFDOUMscUJBQ0UsOERBQUNDO2dCQUFFQyxNQUFLO2dCQUFvQkMsU0FBUyxDQUFDckIsVUFBWXhCLFNBQVN3QjswQkFDeERrQixPQUFPO2VBRE0sR0FBUSxPQUFMQSxNQUFLOzs7OztRQUk1QjtRQUNBLE9BQU9IO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQzlDO2tCQUNDLDRFQUFDcUQ7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFtQjs7Ozs7OzhCQUNqQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQWtCL0I7Ozs7Ozs4QkFDakMsOERBQUM4QjtvQkFBSUMsV0FBVTs4QkFBb0JiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQyxDQUFDO0dBNUR1QnZDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXJhY3RlcnMudHN4PzMwM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSBcIi4vQ2FyZHNcIjtcclxuXHJcbmNvbnN0IENoYXJhY3RlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLkNoYXJhY3Rlci1Db250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5OTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC5DaGFyYWN0ZXItQm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLUhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZWQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLkNoYXJhY3Rlci1QYWdpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLVBhZ2luZyBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLkNoYXJhY3Rlci1QYWdpbmcgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFyYWN0ZXJzKHByb3BzKSB7XHJcbiAgY29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljL2NoYXJhY3RlcnM/dHM9MSZsaW1pdD0zMCZhcGlrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZfSZoYXNoPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0hBU0h9YFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoanNvblBhcnNlZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25QYXJzZWQuZGF0YSk7XHJcbiAgICAgICAgc2V0Q2hhcihqc29uUGFyc2VkLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdyb3VwcyA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgbGFzdCA9IHBhZ2VzPy50YXJnZXQudmFsdWUgKiA4O1xyXG4gICAgbGV0IGZpcnN0ID0gOCAtIChwYWdlcz8udGFyZ2V0LnZhbHVlICogOCk7XHJcbiAgICBsZXQgZ3AgPSBjaGFyLnNsaWNlKGZpcnN0LCBsYXN0KS5tYXAoKGN1cnJlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRzXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgdGl0bGU9e2N1cnJlbnQubmFtZX1cclxuICAgICAgICAgIHdpZHRoPXtcIjIwMHB4XCJ9XHJcbiAgICAgICAgICBoZWlnaHQ9e1wiMjAwcHhcIn1cclxuICAgICAgICAgIGltYWdlPXtjdXJyZW50LnRodW1ibmFpbC5wYXRoICsgXCIuXCIgKyBjdXJyZW50LnRodW1ibmFpbC5leHRlbnNpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBncDtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYWdpbmdMZW5ndGggPSAoKSA9PiB7XHJcbiAgICBsZXQgZ3JvdXAgPSBNYXRoLnJvdW5kKGNoYXIubGVuZ3RoIC8gOCk7XHJcbiAgICBsZXQgcGFkaW5nID0gWy4uLkFycmF5KGdyb3VwKV0ubWFwKChfLCBpbmR4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgaHJlZj1cIlwiIGtleT17YCR7aW5keH1fYH0gb25DbGljaz17KGN1cnJlbnQpID0+IHNldFBhZ2VzKGN1cnJlbnQpfT5cclxuICAgICAgICAgIHtpbmR4ICsgMX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYWRpbmc7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFyYWN0ZXJTZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1Db250YWluZXJcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyLUhlYWRlclwiPlBlcnNvbmFnZW5zPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1Cb2R5XCI+e2dyb3VwcygpfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyLVBhZ2luZ1wiPntwYWdpbmdMZW5ndGgoKX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NoYXJhY3RlclNlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJDYXJkcyIsIkNoYXJhY3RlclNlY3Rpb24iLCJzZWN0aW9uIiwiQ2hhcmFjdGVycyIsInByb3BzIiwiY2hhciIsInNldENoYXIiLCJwYWdlcyIsInNldFBhZ2VzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsIk5FWFRfUFVCTElDX0FQSV9IQVNIIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25QYXJzZWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJjYXRjaCIsImUiLCJncm91cHMiLCJsYXN0IiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdCIsImdwIiwic2xpY2UiLCJtYXAiLCJjdXJyZW50IiwiaW5kZXgiLCJ0aXRsZSIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiIsInBhZ2luZ0xlbmd0aCIsImdyb3VwIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwicGFkaW5nIiwiQXJyYXkiLCJfIiwiaW5keCIsImEiLCJocmVmIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Characters.tsx\n"));

/***/ })

});