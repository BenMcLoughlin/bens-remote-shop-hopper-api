webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/home/Desktop/fullstack-boilerplate/blogr-nextjs-prisma/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar dateStripped = function dateStripped(obj) {\n  var newObj = {};\n  Object.keys(obj).forEach(function (key) {\n    var value = obj[key];\n\n    if (value !== null) {\n      // If array, loop...\n      if (Array.isArray(value)) {\n        value = value.map(function (item) {\n          return dateStripped(item);\n        });\n      } // ...if property is date/time, stringify/parse...\n      else if (typeof value === 'object' && typeof value.getMonth === 'function') {\n        value = JSON.parse(JSON.stringify(value));\n      } // ...and if a deep object, loop.\n      else if (typeof value === 'object') {\n        value = dateStripped(value);\n      }\n    }\n\n    newObj[key] = value;\n  });\n  return newObj;\n};\n\nvar Blog = function Blog(props) {\n  console.log('props:', props);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3495282894\" + \" \" + \"page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3495282894\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"Public Feed\"), __jsx(\"main\", {\n    className: \"jsx-3495282894\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, props.feed.map(function (post) {\n    return __jsx(\"div\", {\n      key: post.id,\n      className: \"jsx-3495282894\" + \" \" + \"post\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    }, __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }));\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3495282894\",\n    __self: _this\n  }, \".post.jsx-3495282894{background:white;-webkit-transition:box-shadow 0.1s ease-in;transition:box-shadow 0.1s ease-in;}.post.jsx-3495282894:hover{box-shadow:1px 1px 3px #aaa;}.post.jsx-3495282894+.post.jsx-3495282894{margin-top:2rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL0Rlc2t0b3AvZnVsbHN0YWNrLWJvaWxlcnBsYXRlL2Jsb2dyLW5leHRqcy1wcmlzbWEvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fa0IsQUFHNEIsQUFLVyxBQUlaLGdCQUNsQixDQVRxQyxXQUtyQyxtRUFKQSIsImZpbGUiOiIvVXNlcnMvaG9tZS9EZXNrdG9wL2Z1bGxzdGFjay1ib2lsZXJwbGF0ZS9ibG9nci1uZXh0anMtcHJpc21hL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHsgcHVibGlzaGVkOiB0cnVlIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgIGluY2x1ZGU6IHsgcG9zdHM6IHRydWUgfSxcbiAgfSlcblxuICBjb25zdCB1c2VycyA9IGRhdGVTdHJpcHBlZChhbGxVc2Vycyk7XG4gIC8vIGNvbnNvbGUuZGlyKHVzZXJzLCB7IGRlcHRoOiBudWxsIH0pXG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgZmVlZCwgdXNlcnMgfSB9O1xufTtcblxuY29uc3QgZGF0ZVN0cmlwcGVkID0gb2JqID0+IHtcbiAgbGV0IG5ld09iaiA9IHt9XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG9ialtrZXldXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAvLyBJZiBhcnJheSwgbG9vcC4uLlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGl0ZW0gPT4gZGF0ZVN0cmlwcGVkKGl0ZW0pKVxuICAgICAgfVxuICAgICAgLy8gLi4uaWYgcHJvcGVydHkgaXMgZGF0ZS90aW1lLCBzdHJpbmdpZnkvcGFyc2UuLi5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLmdldE1vbnRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICB9XG4gICAgICAvLyAuLi5hbmQgaWYgYSBkZWVwIG9iamVjdCwgbG9vcC5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFsdWUgPSBkYXRlU3RyaXBwZWQodmFsdWUpXG4gICAgICB9XG4gICAgfVxuICAgIG5ld09ialtrZXldID0gdmFsdWVcbiAgfSlcbiAgcmV0dXJuIG5ld09ialxufVxuXG50eXBlIFByb3BzID0ge1xuICBmZWVkOiBQb3N0UHJvcHNbXVxufVxuXG5jb25zdCBCbG9nOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coJ3Byb3BzOicsIHByb3BzKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGgxPlB1YmxpYyBGZWVkPC9oMT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge3Byb3BzLmZlZWQubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXX0= */\\n/*@ sourceURL=/Users/home/Desktop/fullstack-boilerplate/blogr-nextjs-prisma/pages/index.tsx */\"));\n};\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZGF0ZVN0cmlwcGVkIiwib2JqIiwibmV3T2JqIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIml0ZW0iLCJnZXRNb250aCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIkJsb2ciLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJmZWVkIiwicG9zdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQXVCQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxHQUFHLEVBQUk7QUFDMUIsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUFDLEdBQUcsRUFBSTtBQUM5QixRQUFJQyxLQUFLLEdBQUdOLEdBQUcsQ0FBQ0ssR0FBRCxDQUFmOztBQUNBLFFBQUlDLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCO0FBQ0EsVUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsYUFBSyxHQUFHQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsaUJBQUlYLFlBQVksQ0FBQ1csSUFBRCxDQUFoQjtBQUFBLFNBQWQsQ0FBUjtBQUNELE9BRkQsQ0FHQTtBQUhBLFdBSUssSUFBSSxPQUFPSixLQUFQLEtBQWlCLFFBQWpCLElBQTZCLE9BQU9BLEtBQUssQ0FBQ0ssUUFBYixLQUEwQixVQUEzRCxFQUF1RTtBQUMxRUwsYUFBSyxHQUFHTSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVSLEtBQWYsQ0FBWCxDQUFSO0FBQ0QsT0FGSSxDQUdMO0FBSEssV0FJQSxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDbENBLGFBQUssR0FBR1AsWUFBWSxDQUFDTyxLQUFELENBQXBCO0FBQ0Q7QUFDRjs7QUFDREwsVUFBTSxDQUFDSSxHQUFELENBQU4sR0FBY0MsS0FBZDtBQUNELEdBakJEO0FBa0JBLFNBQU9MLE1BQVA7QUFDRCxDQXJCRDs7QUEyQkEsSUFBTWMsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixLQUF0QjtBQUNBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDRyxJQUFOLENBQVdWLEdBQVgsQ0FBZSxVQUFDVyxJQUFEO0FBQUEsV0FDZDtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFmO0FBQUEsMENBQTZCLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURjO0FBQUEsR0FBZixDQURILENBRkYsQ0FERjtBQUFBO0FBQUE7QUFBQSw4OUdBREY7QUE0QkQsQ0E5QkQ7O0tBQU1MLEk7O0FBZ0NTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHsgcHVibGlzaGVkOiB0cnVlIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgIGluY2x1ZGU6IHsgcG9zdHM6IHRydWUgfSxcbiAgfSlcblxuICBjb25zdCB1c2VycyA9IGRhdGVTdHJpcHBlZChhbGxVc2Vycyk7XG4gIC8vIGNvbnNvbGUuZGlyKHVzZXJzLCB7IGRlcHRoOiBudWxsIH0pXG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgZmVlZCwgdXNlcnMgfSB9O1xufTtcblxuY29uc3QgZGF0ZVN0cmlwcGVkID0gb2JqID0+IHtcbiAgbGV0IG5ld09iaiA9IHt9XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG9ialtrZXldXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAvLyBJZiBhcnJheSwgbG9vcC4uLlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGl0ZW0gPT4gZGF0ZVN0cmlwcGVkKGl0ZW0pKVxuICAgICAgfVxuICAgICAgLy8gLi4uaWYgcHJvcGVydHkgaXMgZGF0ZS90aW1lLCBzdHJpbmdpZnkvcGFyc2UuLi5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLmdldE1vbnRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICB9XG4gICAgICAvLyAuLi5hbmQgaWYgYSBkZWVwIG9iamVjdCwgbG9vcC5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFsdWUgPSBkYXRlU3RyaXBwZWQodmFsdWUpXG4gICAgICB9XG4gICAgfVxuICAgIG5ld09ialtrZXldID0gdmFsdWVcbiAgfSlcbiAgcmV0dXJuIG5ld09ialxufVxuXG50eXBlIFByb3BzID0ge1xuICBmZWVkOiBQb3N0UHJvcHNbXVxufVxuXG5jb25zdCBCbG9nOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coJ3Byb3BzOicsIHByb3BzKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGgxPlB1YmxpYyBGZWVkPC9oMT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge3Byb3BzLmZlZWQubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})