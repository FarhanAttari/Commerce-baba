exports.id = "components_features_alink_jsx-server_apollo_js";
exports.ids = ["components_features_alink_jsx-server_apollo_js"];
exports.modules = {

/***/ "./components/features/alink.jsx":
/*!***************************************!*\
  !*** ./components/features/alink.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ALink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\alink.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function ALink(_ref) {
  let {
    children,
    className,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "style"]);

  function defaultFunction(e) {
    if (props.href == '#') {
      e.preventDefault();
    }
  }

  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("a", {
    className: className,
    style: style,
    onClick: defaultFunction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, children));
}

/***/ }),

/***/ "./server/apollo.js":
/*!**************************!*\
  !*** ./server/apollo.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);


const API_URI = `${"http://localhost:4000"}/graphql`;
const apolloClient = new (apollo_boost__WEBPACK_IMPORTED_MODULE_1___default())({
  uri: API_URI,
  cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});
/* harmony default export */ __webpack_exports__["default"] = ((0,next_apollo__WEBPACK_IMPORTED_MODULE_0__.withApollo)(apolloClient));

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc2VydmVyL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9pZ25vcmVkfEQ6XFxzaXIgcHJvamVjdCBkYXNoYm9hcmQgYWRtaW4gcGFubmVsIGFuZCBjbGllbnRcXHByb2plY3QgYmlubmlzc2FyXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwcm9wcyIsImRlZmF1bHRGdW5jdGlvbiIsImUiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJBUElfVVJJIiwicHJvY2VzcyIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULE9BQTREO0FBQUEsTUFBM0M7QUFBRUMsWUFBRjtBQUFZQyxhQUFaO0FBQXVCQztBQUF2QixHQUEyQztBQUFBLE1BQVZDLEtBQVU7O0FBQ3ZFLFdBQVNDLGVBQVQsQ0FBMkJDLENBQTNCLEVBQStCO0FBQzNCLFFBQUtGLEtBQUssQ0FBQ0csSUFBTixJQUFjLEdBQW5CLEVBQXlCO0FBQ3JCRCxPQUFDLENBQUNFLGNBQUY7QUFDSDtBQUNKOztBQUVELFNBQ0ksTUFBQyxrREFBRCxlQUFXSixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSTtBQUFHLGFBQVMsRUFBR0YsU0FBZjtBQUEyQixTQUFLLEVBQUdDLEtBQW5DO0FBQTJDLFdBQU8sRUFBR0UsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNSixRQUROLENBREosQ0FESjtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUVBLE1BQU1RLE9BQU8sR0FBSSxHQUFFQyx1QkFBbUMsVUFBdEQ7QUFFQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMscURBQUosQ0FBa0I7QUFDbkNDLEtBQUcsRUFBRUosT0FEOEI7QUFFbkNLLE9BQUssRUFBRSxJQUFJQyx1REFBSjtBQUY0QixDQUFsQixDQUFyQjtBQUtBLCtEQUFlQyx1REFBVSxDQUFFTCxZQUFGLENBQXpCLEU7Ozs7Ozs7Ozs7QUNWQSxlIiwiZmlsZSI6ImNvbXBvbmVudHNfZmVhdHVyZXNfYWxpbmtfanN4LXNlcnZlcl9hcG9sbG9fanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBTGluayAoIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIC4uLnByb3BzIH0gKSB7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgIGlmICggcHJvcHMuaHJlZiA9PSAnIycgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHN0eWxlPXsgc3R5bGUgfSBvbkNsaWNrPXsgZGVmYXVsdEZ1bmN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsImltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICduZXh0LWFwb2xsbyc7XHJcbmltcG9ydCBBcG9sbG9DbGllbnQsIHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcblxyXG5jb25zdCBBUElfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTH0vZ3JhcGhxbGA7XHJcblxyXG5jb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KCB7XHJcbiAgICB1cmk6IEFQSV9VUkksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59ICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCBhcG9sbG9DbGllbnQgKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9