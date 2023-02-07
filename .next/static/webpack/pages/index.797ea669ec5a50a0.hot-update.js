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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Characters; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ \"./src/components/Cards.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n\\n  .Character-Container {\\n    max-width: 990px;\\n    padding: 20px;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  .Character-Body {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 2rem 0rem;\\n    align-items: center;\\n    gap: 10px;\\n    width: 100%;\\n    height: auto;\\n  }\\n\\n  .Character-Header {\\n    width: 100%;\\n    padding-left: 0.5rem;\\n    font-size: 2rem;\\n    height: 30px;\\n    border-left: 4px solid red;\\n    display: flex;\\n  }\\n\\n  .Character-Paging{\\n    display: flex;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n\\n  .Character-Paging a{\\n    text-decoration: none;\\n     padding: 8px 16px;\\n     color: #000000;\\n      font-weight: bold;\\n  }\\n  .Character-Paging a:hover {\\n      \\n      background-color: #ff3700;\\n      color: #fff;\\n      font-weight: bold;\\n  }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst CharacterSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Characters__CharacterSection\",\n    componentId: \"sc-7f230e83-0\"\n})(_templateObject());\n_c = CharacterSection;\nfunction Characters(props) {\n    _s();\n    const [char, setChar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setChar(jsonParsed.data.results);\n            setPages(jsonParsed.data.results.length);\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    const pagingLength = ()=>{\n        length;\n        let pading = [\n            ...Array(char.length / 8)\n        ].map((_, indx)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"\",\n                children: \"indx\"\n            }, indx, false, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this);\n        });\n        return pading;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CharacterSection, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"Character-Container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"Character-Header\",\n                    children: \"Personagens\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Body\",\n                    children: char.map((current, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: current.name,\n                            width: \"200px\",\n                            height: \"200px\",\n                            image: current.thumbnail.path + \".\" + current.thumbnail.extension\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Paging\",\n                    children: pagingLength()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(Characters, \"WBZYNZPR5LMdTH2Z77Cl1hwrvDw=\");\n_c1 = Characters;\nvar _c, _c1;\n$RefreshReg$(_c, \"CharacterSection\");\n$RefreshReg$(_c1, \"Characters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNYO0FBRTVCLE1BQU1JLG1CQUFtQkYsNEVBQWM7Ozs7S0FBakNFO0FBNERTLFNBQVNFLFdBQVdDLEtBQUssRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQyxJQUFNO1FBRWRZLE1BQ0Usd0VBQWdIQyxPQUF4Q0Esa0NBQStCLEVBQUMsVUFBeUMsT0FBakNBLGtDQUFnQyxHQUUvSUksSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDbEIsT0FBT0EsU0FBU0MsSUFBSTtRQUN0QixHQUNDRixJQUFJLENBQUMsQ0FBQ0csYUFBZTtZQUNwQkMsUUFBUUMsR0FBRyxDQUFDRixXQUFXRyxJQUFJO1lBQzNCZCxRQUFRVyxXQUFXRyxJQUFJLENBQUNDLE9BQU87WUFDL0JiLFNBQVNTLFdBQVdHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNO1FBQ3pDLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxJQUFNO1lBQ1pOLFFBQVFDLEdBQUcsQ0FBQ0s7UUFDZDtJQUVKLEdBQUcsRUFBRTtJQUdMLE1BQU1DLGVBQWUsSUFBSztRQUN4Qkg7UUFDRCxJQUFJSSxTQUFTO2VBQUlDLE1BQU10QixLQUFLaUIsTUFBTSxHQUFHO1NBQUcsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLEdBQUVDLE9BQVE7WUFDckQscUJBQ0UsOERBQUNDO2dCQUFFQyxNQUFLOzBCQUFjO2VBQU5GOzs7OztRQUVyQjtRQUNBLE9BQU9KO0lBQ1I7SUFFQSxxQkFDRSw4REFBQ3pCO2tCQUNDLDRFQUFDZ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFtQjs7Ozs7OzhCQUNqQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1o3QixLQUFLdUIsR0FBRyxDQUFDLENBQUNRLFNBQVNDLFFBQVU7d0JBQzVCLHFCQUNFLDhEQUFDckMsOENBQUtBOzRCQUVKc0MsT0FBT0YsUUFBUUcsSUFBSTs0QkFDbkJDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLE9BQ0VOLFFBQVFPLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLE1BQU1SLFFBQVFPLFNBQVMsQ0FBQ0UsU0FBUzsyQkFMdkRSOzs7OztvQkFTWDs7Ozs7OzhCQUVGLDhEQUFDSjtvQkFBSUMsV0FBVTs4QkFDWlQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVVgsQ0FBQztHQWhFdUJ0QjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeD8zMDNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENhcmRzIGZyb20gXCIuL0NhcmRzXCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5DaGFyYWN0ZXItQ29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTkwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLUJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLkNoYXJhY3Rlci1IZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5DaGFyYWN0ZXItUGFnaW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLVBhZ2luZyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLkNoYXJhY3Rlci1QYWdpbmcgYTpob3ZlciB7XHJcbiAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNzAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3RlcnMocHJvcHMpIHtcclxuICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYy9jaGFyYWN0ZXJzP3RzPTEmbGltaXQ9MzAmYXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX0maGFzaD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9IQVNIfWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGpzb25QYXJzZWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUGFyc2VkLmRhdGEpO1xyXG4gICAgICAgIHNldENoYXIoanNvblBhcnNlZC5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgIHNldFBhZ2VzKGpzb25QYXJzZWQuZGF0YS5yZXN1bHRzLmxlbmd0aClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBwYWdpbmdMZW5ndGggPSAoKSA9PntcclxuICAgIGxlbmd0aCAgICBcclxuICAgbGV0IHBhZGluZyA9IFsuLi5BcnJheShjaGFyLmxlbmd0aCAvIDgpXS5tYXAoKF8saW5keCkgPT57XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8YSBocmVmPVwiXCIga2V5PXtpbmR4fT5pbmR4PC9hPlxyXG4gICAgICApXHJcbiAgIH0pXHJcbiAgIHJldHVybiBwYWRpbmdcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhcmFjdGVyU2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFyYWN0ZXItQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1IZWFkZXJcIj5QZXJzb25hZ2VuczwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFyYWN0ZXItQm9keVwiPlxyXG4gICAgICAgICAge2NoYXIubWFwKChjdXJyZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkc1xyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtjdXJyZW50Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17XCIyMDBweFwifVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjIwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQudGh1bWJuYWlsLnBhdGggKyBcIi5cIiArIGN1cnJlbnQudGh1bWJuYWlsLmV4dGVuc2lvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1QYWdpbmdcIj5cclxuICAgICAgICAgIHtwYWdpbmdMZW5ndGgoKX1cclxuICAgICAgICAgICB7LyogPGEgaHJlZj1cIlwiPjE8L2E+XHJcbiAgICAgICAgICAgPGEgaHJlZj1cIlwiPjI8L2E+XHJcbiAgICAgICAgICAgPGEgaHJlZj1cIlwiPjM8L2E+XHJcbiAgICAgICAgICAgPGEgaHJlZj1cIlwiPjQ8L2E+XHJcbiAgICAgICAgICAgPGEgaHJlZj1cIlwiPjU8L2E+ICAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DaGFyYWN0ZXJTZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ2FyZHMiLCJDaGFyYWN0ZXJTZWN0aW9uIiwic2VjdGlvbiIsIkNoYXJhY3RlcnMiLCJwcm9wcyIsImNoYXIiLCJzZXRDaGFyIiwicGFnZXMiLCJzZXRQYWdlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJORVhUX1BVQkxJQ19BUElfSEFTSCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uUGFyc2VkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwibGVuZ3RoIiwiY2F0Y2giLCJlIiwicGFnaW5nTGVuZ3RoIiwicGFkaW5nIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5keCIsImEiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJjdXJyZW50IiwiaW5kZXgiLCJ0aXRsZSIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Characters.tsx\n"));

/***/ })

});