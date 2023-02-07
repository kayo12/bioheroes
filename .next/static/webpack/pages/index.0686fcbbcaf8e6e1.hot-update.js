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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Characters; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ \"./src/components/Cards.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n\\n  .Character-Container {\\n    max-width: 990px;\\n    padding: 20px;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  .Character-Body {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 2rem 0rem;\\n    align-items: center;\\n    gap: 10px;\\n    width: 100%;\\n    height: auto;\\n  }\\n\\n  .Character-Header {\\n    width: 100%;\\n    padding-left: 0.5rem;\\n    font-size: 2rem;\\n    height: 30px;\\n    border-left: 4px solid red;\\n    display: flex;\\n  }\\n\\n  .Character-Paging{\\n    display: flex;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n\\n  .Character-Paging a{\\n    text-decoration: none;\\n     padding: 8px 16px;\\n     color: #000000;\\n      font-weight: bold;\\n  }\\n  .Character-Paging a:hover {\\n      \\n      background-color: #ff3700;\\n      color: #fff;\\n      font-weight: bold;\\n  }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst CharacterSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n    displayName: \"Characters__CharacterSection\",\n    componentId: \"sc-c2e7b95-0\"\n})(_templateObject());\n_c = CharacterSection;\nfunction Characters(props) {\n    _s();\n    const [char, setChar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&apikey=\".concat(\"234f7009a122d954b6ddcbdb41682666\", \"&hash=\").concat(\"32793e7699a683b10a059206c8c5f0a7\")).then((response)=>{\n            return response.json();\n        }).then((jsonParsed)=>{\n            console.log(jsonParsed.data);\n            setChar(jsonParsed.data.results);\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }, []);\n    const groups = (curr)=>{\n        let roundGroup = Math.round(char.length / 8);\n        let firt = curr.target.value * 8;\n        let last = curr.target.value * 8;\n        let gp = char.slice(curr.target.value).map((curr, i)=>{});\n    };\n    const pagingLength = ()=>{\n        let group = Math.round(char.length / 8);\n        let pading = [\n            ...Array(group)\n        ].map((_, indx)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"\",\n                onClick: (current)=>groups(current),\n                children: indx + 1\n            }, \"\".concat(indx, \"_\"), false, {\n                fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this);\n        });\n        return pading;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CharacterSection, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"Character-Container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"Character-Header\",\n                    children: \"Personagens\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Body\",\n                    children: char.map((current, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: current.name,\n                            width: \"200px\",\n                            height: \"200px\",\n                            image: current.thumbnail.path + \".\" + current.thumbnail.extension\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Character-Paging\",\n                    children: pagingLength()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kcampos\\\\Documents\\\\GitHub\\\\bioheroes\\\\src\\\\components\\\\Characters.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(Characters, \"8N1oG9vNjgXt64iToZFQOzEKz+g=\");\n_c1 = Characters;\nvar _c, _c1;\n$RefreshReg$(_c, \"CharacterSection\");\n$RefreshReg$(_c1, \"Characters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNYO0FBRTVCLE1BQU1JLG1CQUFtQkYsNEVBQWM7Ozs7S0FBakNFO0FBNERTLFNBQVNFLFdBQVdDLEtBQUssRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNELGdEQUFTQSxDQUFDLElBQU07UUFFZFUsTUFDRSx3RUFBZ0hDLE9BQXhDQSxrQ0FBK0IsRUFBQyxVQUF5QyxPQUFqQ0Esa0NBQWdDLEdBRS9JSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQSxTQUFTQyxJQUFJO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQyxDQUFDRyxhQUFlO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLElBQUk7WUFDM0JaLFFBQVFTLFdBQVdHLElBQUksQ0FBQ0MsT0FBTztRQUNqQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTTtZQUNaTCxRQUFRQyxHQUFHLENBQUNJO1FBQ2Q7SUFFSixHQUFHLEVBQUU7SUFHTCxNQUFNQyxTQUFTLENBQUNDLE9BQVM7UUFDdkIsSUFBSUMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDckIsS0FBS3NCLE1BQU0sR0FBRztRQUMxQyxJQUFJQyxPQUFPTCxLQUFLTSxNQUFNLENBQUNDLEtBQUssR0FBRztRQUMvQixJQUFJQyxPQUFPUixLQUFLTSxNQUFNLENBQUNDLEtBQUssR0FBRztRQUMvQixJQUFJRSxLQUFLM0IsS0FBSzRCLEtBQUssQ0FBQ1YsS0FBS00sTUFBTSxDQUFDQyxLQUFLLEVBQUVJLEdBQUcsQ0FBQyxDQUFDWCxNQUFNWSxJQUFNLENBRXhEO0lBRUY7SUFHQSxNQUFNQyxlQUFlLElBQUs7UUFDekIsSUFBSUMsUUFBU1osS0FBS0MsS0FBSyxDQUFDckIsS0FBS3NCLE1BQU0sR0FBRztRQUN0QyxJQUFJVyxTQUFTO2VBQUlDLE1BQU1GO1NBQU8sQ0FBQ0gsR0FBRyxDQUFDLENBQUNNLEdBQUVDLE9BQVE7WUFDM0MscUJBQ0UsOERBQUNDO2dCQUFFQyxNQUFLO2dCQUVSQyxTQUFTLENBQUNDLFVBQVl2QixPQUFPdUI7MEJBQzVCSixPQUFPO2VBRkgsR0FBUSxPQUFMQSxNQUFLOzs7OztRQUtsQjtRQUNBLE9BQU9IO0lBQ1I7SUFFQSxxQkFDRSw4REFBQ3JDO2tCQUNDLDRFQUFDNkM7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFtQjs7Ozs7OzhCQUNqQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1oxQyxLQUFLNkIsR0FBRyxDQUFDLENBQUNXLFNBQVNJLFFBQVU7d0JBQzVCLHFCQUNFLDhEQUFDakQsOENBQUtBOzRCQUVKa0QsT0FBT0wsUUFBUU0sSUFBSTs0QkFDbkJDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLE9BQ0VULFFBQVFVLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLE1BQU1YLFFBQVFVLFNBQVMsQ0FBQ0UsU0FBUzsyQkFMdkRSOzs7OztvQkFTWDs7Ozs7OzhCQUVGLDhEQUFDSDtvQkFBSUMsV0FBVTs4QkFDWlg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQXhFdUJqQztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJzLnRzeD8zMDNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENhcmRzIGZyb20gXCIuL0NhcmRzXCI7XHJcblxyXG5jb25zdCBDaGFyYWN0ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5DaGFyYWN0ZXItQ29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTkwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLUJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLkNoYXJhY3Rlci1IZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5DaGFyYWN0ZXItUGFnaW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuQ2hhcmFjdGVyLVBhZ2luZyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLkNoYXJhY3Rlci1QYWdpbmcgYTpob3ZlciB7XHJcbiAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNzAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3RlcnMocHJvcHMpIHtcclxuICBjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljL2NoYXJhY3RlcnM/dHM9MSZsaW1pdD0zMCZhcGlrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZfSZoYXNoPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0hBU0h9YFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoanNvblBhcnNlZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25QYXJzZWQuZGF0YSk7XHJcbiAgICAgICAgc2V0Q2hhcihqc29uUGFyc2VkLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZ3JvdXBzID0gKGN1cnIgKSA9PntcclxuICAgIGxldCByb3VuZEdyb3VwID0gTWF0aC5yb3VuZChjaGFyLmxlbmd0aCAvIDgpXHJcbiAgICBsZXQgZmlydCA9IGN1cnIudGFyZ2V0LnZhbHVlICogODtcclxuICAgIGxldCBsYXN0ID0gY3Vyci50YXJnZXQudmFsdWUgKiA4XHJcbiAgICBsZXQgZ3AgPSBjaGFyLnNsaWNlKGN1cnIudGFyZ2V0LnZhbHVlKS5tYXAoKGN1cnIsIGkgKSA9PntcclxuICAgICAgXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBwYWdpbmdMZW5ndGggPSAoKSA9PntcclxuICAgbGV0IGdyb3VwID0gIE1hdGgucm91bmQoY2hhci5sZW5ndGggLyA4KVxyXG4gICBsZXQgcGFkaW5nID0gWy4uLkFycmF5KGdyb3VwKV0ubWFwKChfLGluZHgpID0+e1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGEgaHJlZj1cIlwiIFxyXG4gICAgICAgIGtleT17YCR7aW5keH1fYH1cclxuICAgICAgICBvbkNsaWNrPXsoY3VycmVudCkgPT4gZ3JvdXBzKGN1cnJlbnQpfT5cclxuICAgICAgICB7aW5keCArIDF9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApXHJcbiAgIH0pXHJcbiAgIHJldHVybiBwYWRpbmdcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhcmFjdGVyU2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFyYWN0ZXItQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1IZWFkZXJcIj5QZXJzb25hZ2VuczwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFyYWN0ZXItQm9keVwiPlxyXG4gICAgICAgICAge2NoYXIubWFwKChjdXJyZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkc1xyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtjdXJyZW50Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17XCIyMDBweFwifVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjIwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQudGh1bWJuYWlsLnBhdGggKyBcIi5cIiArIGN1cnJlbnQudGh1bWJuYWlsLmV4dGVuc2lvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3Rlci1QYWdpbmdcIj5cclxuICAgICAgICAgIHtwYWdpbmdMZW5ndGgoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DaGFyYWN0ZXJTZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ2FyZHMiLCJDaGFyYWN0ZXJTZWN0aW9uIiwic2VjdGlvbiIsIkNoYXJhY3RlcnMiLCJwcm9wcyIsImNoYXIiLCJzZXRDaGFyIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsIk5FWFRfUFVCTElDX0FQSV9IQVNIIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25QYXJzZWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJjYXRjaCIsImUiLCJncm91cHMiLCJjdXJyIiwicm91bmRHcm91cCIsIk1hdGgiLCJyb3VuZCIsImxlbmd0aCIsImZpcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3QiLCJncCIsInNsaWNlIiwibWFwIiwiaSIsInBhZ2luZ0xlbmd0aCIsImdyb3VwIiwicGFkaW5nIiwiQXJyYXkiLCJfIiwiaW5keCIsImEiLCJocmVmIiwib25DbGljayIsImN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImluZGV4IiwidGl0bGUiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZSIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Characters.tsx\n"));

/***/ })

});