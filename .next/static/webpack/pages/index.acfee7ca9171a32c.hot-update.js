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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Characters; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ \"./src/components/Cards.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n\\n  .Character-Container {\\n    max-width: 990px;\\n    padding: 20px;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  .Character-Body {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 2rem 0rem;\\n    align-items: center;\\n    gap: 10px;\\n    width: 100%;\\n    height: auto;\\n  }\\n\\n  .Character-Header {\\n    width: 100%;\\n    padding-left: 0.5rem;\\n    font-size: 2rem;\\n    height: 30px;\\n    border-left: 4px solid red;\\n    display: flex;\\n  }\\n\\n  .Character-Paging {\\n    display: flex;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n\\n  .Character-Paging a {\\n    text-decoration: none;\\n    padding: 8px 16px;\\n    color: #000000;\\n    font-weight: bold;\\n  }\\n  .Character-Paging a:hover {\\n    background-color: #ff3700;\\n    color: #fff;\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst CharacterSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Characters__CharacterSection\",\n    componentId: \"sc-75c0bbf3-0\"\n})(_templateObject());\n_c = CharacterSection;\nfunction Characters(props) {\n    _s();\n    const [char, setChar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setChar(jsonParsed.data.results);\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    const groups = ()=>{\n        let last = Number((pages === null || pages === void 0 ? void 0 : pages.target.value) * 8);\n        let first = 8 - Number((pages === null || pages === void 0 ? void 0 : pages.target.value) * 8);\n        let gp = char.slice(first, last).map((current, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: current.name,\n                width: \"200px\",\n                height: \"200px\",\n                image: current.thumbnail.path + \".\" + current.thumbnail.extension\n            }, \"\".concat(index), false, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this);\n        });\n        return gp;\n    };\n    const pagingLength = ()=>{\n        let group = Math.round(char.length / 8);\n        let pading = [\n            ...Array(group)\n        ].map((_, indx)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"\",\n                onClick: (current)=>setPages(current),\n                children: indx + 1\n            }, \"\".concat(indx, \"_\"), false, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this);\n        });\n        return pading;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CharacterSection, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"Character-Container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"Character-Header\",\n                    children: \"Personagens\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Body\",\n                    children: groups()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Paging\",\n                    children: pagingLength()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Characters, \"X1/daGsNd40Jog/EMsELfSsn00Y=\");\n_c1 = Characters;\nvar _c, _c1;\n$RefreshReg$(_c, \"CharacterSection\");\n$RefreshReg$(_c1, \"Characters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNYO0FBRTVCLE1BQU1JLG1CQUFtQkYsNEVBQWM7Ozs7S0FBakNFO0FBMERTLFNBQVNFLFdBQVdDLEtBQUssRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFFdkNELGdEQUFTQSxDQUFDLElBQU07UUFDZFksTUFDRSx3RUFBZ0hDLE9BQXhDQSxrQ0FBK0IsRUFBQyxVQUF5QyxPQUFqQ0Esa0NBQWdDLEdBRS9JSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxhQUFlO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLElBQUk7WUFDM0JkLFFBQVFXLFdBQVdHLElBQUksQ0FBQ0MsT0FBTztRQUNqQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTTtZQUNaTCxRQUFRQyxHQUFHLENBQUNJO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxTQUFTLElBQU07UUFFbkIsSUFBSUMsT0FBT0MsT0FBT25CLENBQUFBLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT29CLE1BQU0sQ0FBQ0MsS0FBSyxJQUFHO1FBQ3hDLElBQUlDLFFBQVEsSUFBS0gsT0FBT25CLENBQUFBLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT29CLE1BQU0sQ0FBQ0MsS0FBSyxJQUFHO1FBQzlDLElBQUlFLEtBQUt6QixLQUFLMEIsS0FBSyxDQUFDRixPQUFPSixNQUFNTyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0MsUUFBVTtZQUN2RCxxQkFDRSw4REFBQ2xDLDhDQUFLQTtnQkFFSm1DLE9BQU9GLFFBQVFHLElBQUk7Z0JBQ25CQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxPQUFPTixRQUFRTyxTQUFTLENBQUNDLElBQUksR0FBRyxNQUFNUixRQUFRTyxTQUFTLENBQUNFLFNBQVM7ZUFKNUQsR0FBUyxPQUFOUjs7Ozs7UUFPZDtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxNQUFNYSxlQUFlLElBQU07UUFDekIsSUFBSUMsUUFBUUMsS0FBS0MsS0FBSyxDQUFDekMsS0FBSzBDLE1BQU0sR0FBRztRQUNyQyxJQUFJQyxTQUFTO2VBQUlDLE1BQU1MO1NBQU8sQ0FBQ1osR0FBRyxDQUFDLENBQUNrQixHQUFHQyxPQUFTO1lBQzlDLHFCQUNFLDhEQUFDQztnQkFBRUMsTUFBSztnQkFBb0JDLFNBQVMsQ0FBQ3JCLFVBQVl6QixTQUFTeUI7MEJBQ3hEa0IsT0FBTztlQURNLEdBQVEsT0FBTEEsTUFBSzs7Ozs7UUFJNUI7UUFDQSxPQUFPSDtJQUNUO0lBRUEscUJBQ0UsOERBQUMvQztrQkFDQyw0RUFBQ3NEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBbUI7Ozs7Ozs4QkFDakMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUFrQmhDOzs7Ozs7OEJBQ2pDLDhEQUFDK0I7b0JBQUlDLFdBQVU7OEJBQW9CYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0MsQ0FBQztHQTVEdUJ4QztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeD8zMDNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENhcmRzIGZyb20gXCIuL0NhcmRzXCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5DaGFyYWN0ZXItQ29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTkwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLUJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLkNoYXJhY3Rlci1IZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5DaGFyYWN0ZXItUGFnaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLkNoYXJhY3Rlci1QYWdpbmcgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5DaGFyYWN0ZXItUGFnaW5nIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzcwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcmFjdGVycyhwcm9wcykge1xyXG4gIGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYy9jaGFyYWN0ZXJzP3RzPTEmbGltaXQ9MzAmYXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX0maGFzaD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9IQVNIfWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGpzb25QYXJzZWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUGFyc2VkLmRhdGEpO1xyXG4gICAgICAgIHNldENoYXIoanNvblBhcnNlZC5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBncm91cHMgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IGxhc3QgPSBOdW1iZXIocGFnZXM/LnRhcmdldC52YWx1ZSAqIDgpO1xyXG4gICAgbGV0IGZpcnN0ID0gOCAtIChOdW1iZXIocGFnZXM/LnRhcmdldC52YWx1ZSAqIDgpKTtcclxuICAgIGxldCBncCA9IGNoYXIuc2xpY2UoZmlyc3QsIGxhc3QpLm1hcCgoY3VycmVudCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZHNcclxuICAgICAgICAgIGtleT17YCR7aW5kZXh9YH1cclxuICAgICAgICAgIHRpdGxlPXtjdXJyZW50Lm5hbWV9XHJcbiAgICAgICAgICB3aWR0aD17XCIyMDBweFwifVxyXG4gICAgICAgICAgaGVpZ2h0PXtcIjIwMHB4XCJ9XHJcbiAgICAgICAgICBpbWFnZT17Y3VycmVudC50aHVtYm5haWwucGF0aCArIFwiLlwiICsgY3VycmVudC50aHVtYm5haWwuZXh0ZW5zaW9ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZ3A7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFnaW5nTGVuZ3RoID0gKCkgPT4ge1xyXG4gICAgbGV0IGdyb3VwID0gTWF0aC5yb3VuZChjaGFyLmxlbmd0aCAvIDgpO1xyXG4gICAgbGV0IHBhZGluZyA9IFsuLi5BcnJheShncm91cCldLm1hcCgoXywgaW5keCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGhyZWY9XCJcIiBrZXk9e2Ake2luZHh9X2B9IG9uQ2xpY2s9eyhjdXJyZW50KSA9PiBzZXRQYWdlcyhjdXJyZW50KX0+XHJcbiAgICAgICAgICB7aW5keCArIDF9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGFkaW5nO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhcmFjdGVyU2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFyYWN0ZXItQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1IZWFkZXJcIj5QZXJzb25hZ2VuczwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFyYWN0ZXItQm9keVwiPntncm91cHMoKX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1QYWdpbmdcIj57cGFnaW5nTGVuZ3RoKCl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DaGFyYWN0ZXJTZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ2FyZHMiLCJDaGFyYWN0ZXJTZWN0aW9uIiwic2VjdGlvbiIsIkNoYXJhY3RlcnMiLCJwcm9wcyIsImNoYXIiLCJzZXRDaGFyIiwicGFnZXMiLCJzZXRQYWdlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJORVhUX1BVQkxJQ19BUElfSEFTSCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uUGFyc2VkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwiY2F0Y2giLCJlIiwiZ3JvdXBzIiwibGFzdCIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiZmlyc3QiLCJncCIsInNsaWNlIiwibWFwIiwiY3VycmVudCIsImluZGV4IiwidGl0bGUiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZSIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJwYWdpbmdMZW5ndGgiLCJncm91cCIsIk1hdGgiLCJyb3VuZCIsImxlbmd0aCIsInBhZGluZyIsIkFycmF5IiwiXyIsImluZHgiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Characters.tsx\n"));

/***/ })

});