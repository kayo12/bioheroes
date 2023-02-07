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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Characters; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ \"./src/components/Cards.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n\\n  .Character-Container {\\n    max-width: 990px;\\n    padding: 20px;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  .Character-Body {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 2rem 0rem;\\n    align-items: center;\\n    gap: 10px;\\n    width: 100%;\\n    height: auto;\\n  }\\n\\n  .Character-Header {\\n    width: 100%;\\n    padding-left: 0.5rem;\\n    font-size: 2rem;\\n    height: 30px;\\n    border-left: 4px solid red;\\n    display: flex;\\n  }\\n\\n  .Character-Paging{\\n    display: flex;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n\\n  .Character-Paging a{\\n    text-decoration: none;\\n     padding: 8px 16px;\\n     color: #000000;\\n      font-weight: bold;\\n  }\\n  .Character-Paging a:hover {\\n      \\n      background-color: #ff3700;\\n      color: #fff;\\n      font-weight: bold;\\n  }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst CharacterSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Characters__CharacterSection\",\n    componentId: \"sc-7a33ee00-0\"\n})(_templateObject());\n_c = CharacterSection;\nfunction Characters(props) {\n    _s();\n    const [char, setChar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/characters?ts=1&limit=8&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setChar(jsonParsed.data.results);\n            padingjsonParsed.data.results;\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    const paging = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CharacterSection, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"Character-Container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"Character-Header\",\n                    children: \"Personagens\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Body\",\n                    children: char.map((current, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: current.name,\n                            width: \"200px\",\n                            height: \"200px\",\n                            image: current.thumbnail.path + \".\" + current.thumbnail.extension\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Paging\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 12\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Characters, \"8N1oG9vNjgXt64iToZFQOzEKz+g=\");\n_c1 = Characters;\nvar _c, _c1;\n$RefreshReg$(_c, \"CharacterSection\");\n$RefreshReg$(_c1, \"Characters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNYO0FBRTVCLE1BQU1JLG1CQUFtQkYsNEVBQWM7Ozs7S0FBakNFO0FBNERTLFNBQVNFLFdBQVdDLEtBQUssRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNELGdEQUFTQSxDQUFDLElBQU07UUFDZFUsTUFDRSx1RUFBK0dDLE9BQXhDQSxrQ0FBK0IsRUFBQyxVQUF5QyxPQUFqQ0Esa0NBQWdDLEdBRTlJSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxhQUFlO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLElBQUk7WUFDM0JaLFFBQVFTLFdBQVdHLElBQUksQ0FBQ0MsT0FBTztZQUMvQkMsaUJBQWlCRixJQUFJLENBQUNDLE9BQU87UUFDL0IsR0FDQ0UsS0FBSyxDQUFDLENBQUNDLElBQU07WUFDWk4sUUFBUUMsR0FBRyxDQUFDSztRQUNkO0lBQ0osR0FBRyxFQUFFO0lBR0wsTUFBTUMsU0FBUyxJQUFLLENBRXBCO0lBSUEscUJBQ0UsOERBQUN0QjtrQkFDQyw0RUFBQ3VCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBbUI7Ozs7Ozs4QkFDakMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNacEIsS0FBS3NCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxRQUFVO3dCQUM1QixxQkFDRSw4REFBQzdCLDhDQUFLQTs0QkFFSjhCLE9BQU9GLFFBQVFHLElBQUk7NEJBQ25CQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxPQUNFTixRQUFRTyxTQUFTLENBQUNDLElBQUksR0FBRyxNQUFNUixRQUFRTyxTQUFTLENBQUNFLFNBQVM7MkJBTHZEUjs7Ozs7b0JBU1g7Ozs7Ozs4QkFFRiw4REFBQ0w7b0JBQUlDLFdBQVU7O3NDQUNaLDhEQUFDYTs0QkFBRUMsTUFBSztzQ0FBRzs7Ozs7O3NDQUNYLDhEQUFDRDs0QkFBRUMsTUFBSztzQ0FBRzs7Ozs7O3NDQUNYLDhEQUFDRDs0QkFBRUMsTUFBSztzQ0FBRzs7Ozs7O3NDQUNYLDhEQUFDRDs0QkFBRUMsTUFBSztzQ0FBRzs7Ozs7O3NDQUNYLDhEQUFDRDs0QkFBRUMsTUFBSztzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEIsQ0FBQztHQXhEdUJwQztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeD8zMDNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENhcmRzIGZyb20gXCIuL0NhcmRzXCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5DaGFyYWN0ZXItQ29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTkwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLUJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLkNoYXJhY3Rlci1IZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5DaGFyYWN0ZXItUGFnaW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLVBhZ2luZyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLkNoYXJhY3Rlci1QYWdpbmcgYTpob3ZlciB7XHJcbiAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNzAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3RlcnMocHJvcHMpIHtcclxuICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYy9jaGFyYWN0ZXJzP3RzPTEmbGltaXQ9OCZhcGlrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZfSZoYXNoPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0hBU0h9YFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoanNvblBhcnNlZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25QYXJzZWQuZGF0YSk7XHJcbiAgICAgICAgc2V0Q2hhcihqc29uUGFyc2VkLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgcGFkaW5nanNvblBhcnNlZC5kYXRhLnJlc3VsdHNcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IHBhZ2luZyA9ICgpID0+e1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFyYWN0ZXJTZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1Db250YWluZXJcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyLUhlYWRlclwiPlBlcnNvbmFnZW5zPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1Cb2R5XCI+XHJcbiAgICAgICAgICB7Y2hhci5tYXAoKGN1cnJlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENhcmRzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2N1cnJlbnQubmFtZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXtcIjIwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMjAwcHhcIn1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtcclxuICAgICAgICAgICAgICAgICAgY3VycmVudC50aHVtYm5haWwucGF0aCArIFwiLlwiICsgY3VycmVudC50aHVtYm5haWwuZXh0ZW5zaW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyLVBhZ2luZ1wiPlxyXG4gICAgICAgICAgIDxhIGhyZWY9XCJcIj4xPC9hPlxyXG4gICAgICAgICAgIDxhIGhyZWY9XCJcIj4yPC9hPlxyXG4gICAgICAgICAgIDxhIGhyZWY9XCJcIj4zPC9hPlxyXG4gICAgICAgICAgIDxhIGhyZWY9XCJcIj40PC9hPlxyXG4gICAgICAgICAgIDxhIGhyZWY9XCJcIj41PC9hPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DaGFyYWN0ZXJTZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ2FyZHMiLCJDaGFyYWN0ZXJTZWN0aW9uIiwic2VjdGlvbiIsIkNoYXJhY3RlcnMiLCJwcm9wcyIsImNoYXIiLCJzZXRDaGFyIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsIk5FWFRfUFVCTElDX0FQSV9IQVNIIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25QYXJzZWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJwYWRpbmdqc29uUGFyc2VkIiwiY2F0Y2giLCJlIiwicGFnaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJjdXJyZW50IiwiaW5kZXgiLCJ0aXRsZSIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Characters.tsx\n"));

/***/ })

});