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

/***/ "./src/components/Comics.tsx":
/*!***********************************!*\
  !*** ./src/components/Comics.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_comics_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/comics.jpg */ \"./public/comics.jpg\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 90vh;\\n  max-width: 100vw;\\n  width: 100%;\\n  background-image: url(\",\n        \");\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n  background-blend-mode: saturation;\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem;\\n  overflow-x: scroll;\\n  perspective: 1000px;\\n\\n\\n  .Comics-Container {\\n    height: 80%;\\n    width: 270px;\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n  }\\n\\n  .Comics-Front, .Comics-Body {\\n    display: flex;\\n    \\n    height: 100%;\\n    width: 100%;\\n  }\\n\\n  .Comics-Body h2 {\\n      \\n  }\\n\\n  .Comics-Front img {\\n    min-width: 300px;\\n    width: 100%;\\n    max-height: 100%;\\n    object-fit: contain;\\n   \\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst ComicsSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Comics__ComicsSection\",\n    componentId: \"sc-af46b690-0\"\n})(_templateObject(), _public_comics_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src);\n_c = ComicsSection;\nconst Comics = (props)=>{\n    _s();\n    const [comics, setComics] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/comics?ts=1&limit=60&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setComics(jsonParsed.data.results);\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ComicsSection, {\n        children: comics.map((current, index)=>{\n            return current.thumbnail.path + \".\" + current.thumbnail.extension != \"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"Comics-Container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"Comics-Body\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" \",\n                                current.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"Comics-Front\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: current.thumbnail.path + \".\" + current.thumbnail.extension,\n                            alt: \"Revista em quadrinhos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                lineNumber: 75,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Comics, \"KKBZHRsByJUgbh7BkNxka0PKGCQ=\");\n_c1 = Comics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comics);\nvar _c, _c1;\n$RefreshReg$(_c, \"ComicsSection\");\n$RefreshReg$(_c1, \"Comics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21pY3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFTDtBQUNXO0FBRWxELE1BQU1JLGdCQUFnQkYsNEVBQWM7OztzQkFJVkMsOERBQWU7S0FKbkNDO0FBNkNOLE1BQU1HLFNBQVMsQ0FBQ0MsUUFBVTs7SUFDeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDLElBQU07UUFDZFcsTUFDRSxvRUFBNEdDLE9BQXhDQSxrQ0FBK0IsRUFBQyxVQUF5QyxPQUFqQ0Esa0NBQWdDLEdBRTNJSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxhQUFlO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLElBQUk7WUFDM0JaLFVBQVVTLFdBQVdHLElBQUksQ0FBQ0MsT0FBTztRQUNuQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTTtZQUNaTCxRQUFRQyxHQUFHLENBQUNJO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ3JCO2tCQUNFSyxPQUFPaUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLFFBQVU7WUFDOUIsT0FBT0QsUUFBUUUsU0FBUyxDQUFDQyxJQUFJLEdBQUcsTUFBTUgsUUFBUUUsU0FBUyxDQUFDRSxTQUFTLElBQy9ELHNGQUNBLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs7Z0NBQUc7Z0NBQUVQLFFBQVFRLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFckIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFDQzlCLEtBQUtxQixRQUFRRSxTQUFTLENBQUNDLElBQUksR0FBRyxNQUFNSCxRQUFRRSxTQUFTLENBQUNFLFNBQVM7NEJBQy9ETSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUtWLDZJQUNEO1FBQ0g7Ozs7OztBQUdOO0dBekNNOUI7TUFBQUE7QUEyQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29taWNzLnRzeD9kMmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBpbWFnZUNvbWljcyBmcm9tIFwiLi4vLi4vcHVibGljL2NvbWljcy5qcGdcIjtcclxuXHJcbmNvbnN0IENvbWljc1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpbWFnZUNvbWljcy5zcmN9KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzYXR1cmF0aW9uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cclxuXHJcbiAgLkNvbWljcy1Db250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLkNvbWljcy1Gcm9udCwgLkNvbWljcy1Cb2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLkNvbWljcy1Cb2R5IGgyIHtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAuQ29taWNzLUZyb250IGltZyB7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29taWNzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvbWljcywgc2V0Q29taWNzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljL2NvbWljcz90cz0xJmxpbWl0PTYwJmFwaWtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVl9Jmhhc2g9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfSEFTSH1gXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChqc29uUGFyc2VkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coanNvblBhcnNlZC5kYXRhKTtcclxuICAgICAgICBzZXRDb21pY3MoanNvblBhcnNlZC5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbWljc1NlY3Rpb24+XHJcbiAgICAgIHtjb21pY3MubWFwKChjdXJyZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LnRodW1ibmFpbC5wYXRoICsgXCIuXCIgKyBjdXJyZW50LnRodW1ibmFpbC5leHRlbnNpb24gIT1cclxuICAgICAgICAgIFwiaHR0cDovL2kuYW5uaWhpbC51cy91L3Byb2QvbWFydmVsL2kvbWcvYi80MC9pbWFnZV9ub3RfYXZhaWxhYmxlLmpwZ1wiID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21pY3MtQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29taWNzLUJvZHlcIj5cclxuICAgICAgICAgICAgICA8aDI+IHtjdXJyZW50LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbWljcy1Gcm9udFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudC50aHVtYm5haWwucGF0aCArIFwiLlwiICsgY3VycmVudC50aHVtYm5haWwuZXh0ZW5zaW9ufVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUmV2aXN0YSBlbSBxdWFkcmluaG9zXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Db21pY3NTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21pY3M7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsImltYWdlQ29taWNzIiwiQ29taWNzU2VjdGlvbiIsInNlY3Rpb24iLCJzcmMiLCJDb21pY3MiLCJwcm9wcyIsImNvbWljcyIsInNldENvbWljcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJORVhUX1BVQkxJQ19BUElfSEFTSCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uUGFyc2VkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwiY2F0Y2giLCJlIiwibWFwIiwiY3VycmVudCIsImluZGV4IiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGl0bGUiLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Comics.tsx\n"));

/***/ })

});