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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_comics2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/comics2.jpg */ \"./public/comics2.jpg\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 90vh;\\n  max-width: 100vw;\\n  width: 100%;\\n  background-image: url(\",\n        \");\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n  background-blend-mode: saturation;\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem;\\n  overflow-x: scroll;\\n  perspective: 1000px;\\n\\n\\n  .Comics-Container {\\n    height: 80%;\\n    width: 370px;\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n  }\\n\\n  .Comics-Front {\\n    display: flex;\\n    height: 100%;\\n    width: 100%;\\n    \\n  }\\n\\n  .Comics-Body h2 {\\n      font-size: 0;\\n  }\\n\\n  .Comics-Front img {\\n    min-width: 300px;\\n    width: 100%;\\n    max-height: 100%;\\n    object-fit: contain;\\n    cursor: pointer;\\n    &:hover{\\n      transform: scale(1);\\n    } \\n   \\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst ComicsSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Comics__ComicsSection\",\n    componentId: \"sc-9181e2a8-0\"\n})(_templateObject(), _public_comics2_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src);\n_c = ComicsSection;\nconst Comics = (props)=>{\n    _s();\n    const [comics, setComics] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/comics?ts=1&limit=60&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setComics(jsonParsed.data.results);\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ComicsSection, {\n        children: comics.map((current, index)=>{\n            return current.thumbnail.path + \".\" + current.thumbnail.extension != \"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"Comics-Container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"Comics-Body\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" \",\n                                current.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"Comics-Front\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: current.thumbnail.path + \".\" + current.thumbnail.extension,\n                            alt: \"Revista em quadrinhos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n                lineNumber: 80,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Comics.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Comics, \"KKBZHRsByJUgbh7BkNxka0PKGCQ=\");\n_c1 = Comics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comics);\nvar _c, _c1;\n$RefreshReg$(_c, \"ComicsSection\");\n$RefreshReg$(_c1, \"Comics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21pY3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFTDtBQUNZO0FBRW5ELE1BQU1JLGdCQUFnQkYsNEVBQWM7OztzQkFJVkMsK0RBQWU7S0FKbkNDO0FBaUROLE1BQU1HLFNBQVMsQ0FBQ0MsUUFBVTs7SUFDeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDLElBQU07UUFDZFcsTUFDRSxvRUFBNEdDLE9BQXhDQSxrQ0FBK0IsRUFBQyxVQUF5QyxPQUFqQ0Esa0NBQWdDLEdBRTNJSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxhQUFlO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLElBQUk7WUFDM0JaLFVBQVVTLFdBQVdHLElBQUksQ0FBQ0MsT0FBTztRQUNuQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTTtZQUNaTCxRQUFRQyxHQUFHLENBQUNJO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ3JCO2tCQUVFSyxPQUFPaUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLFFBQVU7WUFDOUIsT0FBT0QsUUFBUUUsU0FBUyxDQUFDQyxJQUFJLEdBQUcsTUFBTUgsUUFBUUUsU0FBUyxDQUFDRSxTQUFTLElBQy9ELHNGQUNBLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs7Z0NBQUc7Z0NBQUVQLFFBQVFRLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFckIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFDQzlCLEtBQUtxQixRQUFRRSxTQUFTLENBQUNDLElBQUksR0FBRyxNQUFNSCxRQUFRRSxTQUFTLENBQUNFLFNBQVM7NEJBQy9ETSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUtWLDZJQUNEO1FBQ0g7Ozs7OztBQUdOO0dBMUNNOUI7TUFBQUE7QUE0Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29taWNzLnRzeD9kMmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBpbWFnZUNvbWljcyBmcm9tIFwiLi4vLi4vcHVibGljL2NvbWljczIuanBnXCI7XHJcblxyXG5jb25zdCBDb21pY3NTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2VDb21pY3Muc3JjfSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2F0dXJhdGlvbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHJcblxyXG4gIC5Db21pY3MtQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5Db21pY3MtRnJvbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuQ29taWNzLUJvZHkgaDIge1xyXG4gICAgICBmb250LXNpemU6IDA7XHJcbiAgfVxyXG5cclxuICAuQ29taWNzLUZyb250IGltZyB7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9IFxyXG4gICBcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb21pY3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbY29taWNzLCBzZXRDb21pY3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2dhdGV3YXkubWFydmVsLmNvbS92MS9wdWJsaWMvY29taWNzP3RzPTEmbGltaXQ9NjAmYXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX0maGFzaD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9IQVNIfWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGpzb25QYXJzZWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUGFyc2VkLmRhdGEpO1xyXG4gICAgICAgIHNldENvbWljcyhqc29uUGFyc2VkLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29taWNzU2VjdGlvbj5cclxuICBcclxuICAgICAge2NvbWljcy5tYXAoKGN1cnJlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQudGh1bWJuYWlsLnBhdGggKyBcIi5cIiArIGN1cnJlbnQudGh1bWJuYWlsLmV4dGVuc2lvbiAhPVxyXG4gICAgICAgICAgXCJodHRwOi8vaS5hbm5paGlsLnVzL3UvcHJvZC9tYXJ2ZWwvaS9tZy9iLzQwL2ltYWdlX25vdF9hdmFpbGFibGUuanBnXCIgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbWljcy1Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21pY3MtQm9keVwiPlxyXG4gICAgICAgICAgICAgIDxoMj4ge2N1cnJlbnQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29taWNzLUZyb250XCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50LnRodW1ibmFpbC5wYXRoICsgXCIuXCIgKyBjdXJyZW50LnRodW1ibmFpbC5leHRlbnNpb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJSZXZpc3RhIGVtIHF1YWRyaW5ob3NcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0NvbWljc1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbWljcztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiaW1hZ2VDb21pY3MiLCJDb21pY3NTZWN0aW9uIiwic2VjdGlvbiIsInNyYyIsIkNvbWljcyIsInByb3BzIiwiY29taWNzIiwic2V0Q29taWNzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsIk5FWFRfUFVCTElDX0FQSV9IQVNIIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25QYXJzZWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJjYXRjaCIsImUiLCJtYXAiLCJjdXJyZW50IiwiaW5kZXgiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ0aXRsZSIsImltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Comics.tsx\n"));

/***/ })

});