webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/home/Desktop/fullstack-boilerplate/blogr-nextjs-prisma/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n // export const getStaticProps: GetStaticProps = async () => {\n//   const feed = [\n//     {\n//       id: 1,\n//       title: \"Prisma is the perfect ORM for Next.js\",\n//       content: \"[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!\",\n//       published: false,\n//       author: {\n//         name: \"Nikolas Burk\",\n//         email: \"burk@prisma.io\",\n//       },\n//     },\n//   ]\n//   return { props: { feed } }\n// }\n\nfunction main() {\n  return _main.apply(this, arguments);\n}\n\nfunction _main() {\n  _main = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var allUsers;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _lib_prisma__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findMany({\n              include: {\n                posts: true\n              }\n            });\n\n          case 2:\n            allUsers = _context2.sent;\n            // use `console.dir` to print nested objects\n            console.dir(allUsers, {\n              depth: null\n            });\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _main.apply(this, arguments);\n}\n\nmain()[\"catch\"](function (e) {\n  throw e;\n})[\"finally\"]( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _lib_prisma__WEBPACK_IMPORTED_MODULE_6__[\"default\"].$disconnect();\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\n\nvar Blog = function Blog(props) {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3495282894\" + \" \" + \"page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3495282894\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Public Feed\"), __jsx(\"main\", {\n    className: \"jsx-3495282894\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, props.feed.map(function (post) {\n    return __jsx(\"div\", {\n      key: post.id,\n      className: \"jsx-3495282894\" + \" \" + \"post\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }\n    }, __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 15\n      }\n    }));\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"3495282894\",\n    __self: _this\n  }, \".post.jsx-3495282894{background:white;-webkit-transition:box-shadow 0.1s ease-in;transition:box-shadow 0.1s ease-in;}.post.jsx-3495282894:hover{box-shadow:1px 1px 3px #aaa;}.post.jsx-3495282894+.post.jsx-3495282894{margin-top:2rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL0Rlc2t0b3AvZnVsbHN0YWNrLWJvaWxlcnBsYXRlL2Jsb2dyLW5leHRqcy1wcmlzbWEvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFa0IsQUFHNEIsQUFLVyxBQUlaLGdCQUNsQixDQVRxQyxXQUtyQyxtRUFKQSIsImZpbGUiOiIvVXNlcnMvaG9tZS9EZXNrdG9wL2Z1bGxzdGFjay1ib2lsZXJwbGF0ZS9ibG9nci1uZXh0anMtcHJpc21hL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vbGliL3ByaXNtYSc7XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IGZlZWQgPSBbXG4vLyAgICAge1xuLy8gICAgICAgaWQ6IDEsXG4vLyAgICAgICB0aXRsZTogXCJQcmlzbWEgaXMgdGhlIHBlcmZlY3QgT1JNIGZvciBOZXh0LmpzXCIsXG4vLyAgICAgICBjb250ZW50OiBcIltQcmlzbWFdKGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hKSBhbmQgTmV4dC5qcyBnbyBfZ3JlYXRfIHRvZ2V0aGVyIVwiLFxuLy8gICAgICAgcHVibGlzaGVkOiBmYWxzZSxcbi8vICAgICAgIGF1dGhvcjoge1xuLy8gICAgICAgICBuYW1lOiBcIk5pa29sYXMgQnVya1wiLFxuLy8gICAgICAgICBlbWFpbDogXCJidXJrQHByaXNtYS5pb1wiLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICBdXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IGZlZWQgfSB9XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHsgcHVibGlzaGVkOiB0cnVlIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgIGluY2x1ZGU6IHsgcG9zdHM6IHRydWUgfSxcbiAgfSlcblxuICByZXR1cm4geyBwcm9wczogeyBmZWVkLCBhbGxVc2VycyB9IH07XG59O1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBhbGxVc2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICBpbmNsdWRlOiB7IHBvc3RzOiB0cnVlIH0sXG4gIH0pXG4gIC8vIHVzZSBgY29uc29sZS5kaXJgIHRvIHByaW50IG5lc3RlZCBvYmplY3RzXG4gIGNvbnNvbGUuZGlyKGFsbFVzZXJzLCB7IGRlcHRoOiBudWxsIH0pXG59XG5cbm1haW4oKVxuICAuY2F0Y2goZSA9PiB7XG4gICAgdGhyb3cgZVxuICB9KVxuICAuZmluYWxseShhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbn0pXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZlZWQ6IFBvc3RQcm9wc1tdXG59XG5cbmNvbnN0IEJsb2c6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGgxPlB1YmxpYyBGZWVkPC9oMT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge3Byb3BzLmZlZWQubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXX0= */\\n/*@ sourceURL=/Users/home/Desktop/fullstack-boilerplate/blogr-nextjs-prisma/pages/index.tsx */\"));\n};\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsibWFpbiIsInByaXNtYSIsInVzZXIiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJwb3N0cyIsImFsbFVzZXJzIiwiY29uc29sZSIsImRpciIsImRlcHRoIiwiZSIsIiRkaXNjb25uZWN0IiwiQmxvZyIsInByb3BzIiwiZmVlZCIsIm1hcCIsInBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBbUJlQSxJOzs7OzsyTEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN5QkMsbURBQU0sQ0FBQ0MsSUFBUCxDQUFZQyxRQUFaLENBQXFCO0FBQzFDQyxxQkFBTyxFQUFFO0FBQUVDLHFCQUFLLEVBQUU7QUFBVDtBQURpQyxhQUFyQixDQUR6Qjs7QUFBQTtBQUNRQyxvQkFEUjtBQUlFO0FBQ0FDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixFQUFzQjtBQUFFRyxtQkFBSyxFQUFFO0FBQVQsYUFBdEI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVFBVCxJQUFJLFdBQUosQ0FDUyxVQUFBVSxDQUFDLEVBQUk7QUFDVixRQUFNQSxDQUFOO0FBQ0QsQ0FISCw0TUFJVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDRFQsbURBQU0sQ0FBQ1UsV0FBUCxFQURDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBSlg7O0FBWUEsSUFBTUMsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZDLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsV0FDZDtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFmO0FBQUEsMENBQTZCLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURjO0FBQUEsR0FBZixDQURILENBRkYsQ0FERjtBQUFBO0FBQUE7QUFBQSxzK0dBREY7QUE0QkQsQ0E3QkQ7O0tBQU1KLEk7O0FBK0JTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vbGliL3ByaXNtYSc7XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IGZlZWQgPSBbXG4vLyAgICAge1xuLy8gICAgICAgaWQ6IDEsXG4vLyAgICAgICB0aXRsZTogXCJQcmlzbWEgaXMgdGhlIHBlcmZlY3QgT1JNIGZvciBOZXh0LmpzXCIsXG4vLyAgICAgICBjb250ZW50OiBcIltQcmlzbWFdKGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hKSBhbmQgTmV4dC5qcyBnbyBfZ3JlYXRfIHRvZ2V0aGVyIVwiLFxuLy8gICAgICAgcHVibGlzaGVkOiBmYWxzZSxcbi8vICAgICAgIGF1dGhvcjoge1xuLy8gICAgICAgICBuYW1lOiBcIk5pa29sYXMgQnVya1wiLFxuLy8gICAgICAgICBlbWFpbDogXCJidXJrQHByaXNtYS5pb1wiLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICBdXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IGZlZWQgfSB9XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHsgcHVibGlzaGVkOiB0cnVlIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgIGluY2x1ZGU6IHsgcG9zdHM6IHRydWUgfSxcbiAgfSlcblxuICByZXR1cm4geyBwcm9wczogeyBmZWVkLCBhbGxVc2VycyB9IH07XG59O1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBhbGxVc2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICBpbmNsdWRlOiB7IHBvc3RzOiB0cnVlIH0sXG4gIH0pXG4gIC8vIHVzZSBgY29uc29sZS5kaXJgIHRvIHByaW50IG5lc3RlZCBvYmplY3RzXG4gIGNvbnNvbGUuZGlyKGFsbFVzZXJzLCB7IGRlcHRoOiBudWxsIH0pXG59XG5cbm1haW4oKVxuICAuY2F0Y2goZSA9PiB7XG4gICAgdGhyb3cgZVxuICB9KVxuICAuZmluYWxseShhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbn0pXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZlZWQ6IFBvc3RQcm9wc1tdXG59XG5cbmNvbnN0IEJsb2c6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGgxPlB1YmxpYyBGZWVkPC9oMT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge3Byb3BzLmZlZWQubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})