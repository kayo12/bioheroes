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

/***/ "./src/components/Modal.tsx":
/*!**********************************!*\
  !*** ./src/components/Modal.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    height: 100vh;\\n    width: 100vw;\\n    display: {box == true : };\\n    justify-content: center;\\n    align-items: center;\\n     position: fixed;\\n     background-color: rgba(0,0,0,0.7);\\n     color: white;\\n     z-index: 1;\\n     top: 0;\\n     left: 0;\\n \\n     .modal-content{\\n         flex: 0 2 1000px;\\n         height: 500px;\\n         background-color: #f3ef83;\\n         opacity: 1;\\n     }\\n \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Modal = (props)=>{\n    const ModalDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n        displayName: \"Modal__ModalDiv\",\n        componentId: \"sc-6c533fce-0\"\n    })(_templateObject());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalDiv, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"modal-content\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"modal-body\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Modal.tsx\",\n                lineNumber: 40,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Modal.tsx\",\n            lineNumber: 39,\n            columnNumber: 15\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Modal.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFBdUM7QUFTdkMsTUFBTUMsUUFBUSxDQUFDQyxRQUF3QjtJQUVuQyxNQUFNQyxXQUFXSCx3RUFBVTs7OztJQXlCM0IscUJBQ0ksOERBQUNHO2tCQUNLLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNULDRFQUFDRDtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQztLQW5DTUo7QUFxQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwudHN4P2I5N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIERlZmF1bHRNb2RhbCB7XHJcbiAgICBib3g6IGJvb2xlYW47XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgTW9kYWwgPSAocHJvcHM6IERlZmF1bHRNb2RhbCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IE1vZGFsRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiB7Ym94ID09IHRydWUgOiB9O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIHotaW5kZXg6IDE7XHJcbiAgICAgdG9wOiAwO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiBcclxuICAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICAgZmxleDogMCAyIDEwMDBweDtcclxuICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZWY4MztcclxuICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICB9XHJcbiBgO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vZGFsRGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9Nb2RhbERpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7Il0sIm5hbWVzIjpbInN0eWxlZCIsIk1vZGFsIiwicHJvcHMiLCJNb2RhbERpdiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Modal.tsx\n"));

/***/ })

});