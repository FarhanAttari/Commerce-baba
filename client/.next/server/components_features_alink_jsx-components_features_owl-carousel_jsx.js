exports.id = "components_features_alink_jsx-components_features_owl-carousel_jsx";
exports.ids = ["components_features_alink_jsx-components_features_owl-carousel_jsx"];
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

/***/ "./components/features/owl-carousel.jsx":
/*!**********************************************!*\
  !*** ./components/features/owl-carousel.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel2 */ "react-owl-carousel2");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\owl-carousel.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function OwlCarousel(props) {
  const {
    adClass,
    options,
    events,
    isTheme = true
  } = props;
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const defaultOptions = {
    items: 1,
    loop: false,
    margin: 0,
    responsiveClass: "true",
    nav: true,
    navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
    dots: true,
    smartSpeed: 400,
    autoplay: false,
    responsive: {
      320: {
        nav: false
      },
      375: {
        nav: false
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.onChangeRef) {
      props.onChangeRef(carouselRef);
    }
  }, [carouselRef]);
  let settings = Object.assign({}, defaultOptions, options);
  return props.children !== undefined ? props.children.length > 0 || props.children && props.children.length === undefined ? __jsx((react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: carouselRef,
    className: `owl-carousel ${isTheme ? 'owl-theme' : ''} ${adClass}`,
    options: settings,
    events: events,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, props.children) : "" : "";
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(OwlCarousel));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0L2lnbm9yZWR8RDpcXHNpciBwcm9qZWN0IGRhc2hib2FyZCBhZG1pbiBwYW5uZWwgYW5kIGNsaWVudFxccHJvamVjdCBiaW5uaXNzYXJcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInByb3BzIiwiZGVmYXVsdEZ1bmN0aW9uIiwiZSIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIk93bENhcm91c2VsIiwiYWRDbGFzcyIsIm9wdGlvbnMiLCJldmVudHMiLCJpc1RoZW1lIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJkZWZhdWx0T3B0aW9ucyIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsIm5hdiIsIm5hdlRleHQiLCJkb3RzIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlUmVmIiwic2V0dGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEtBQVQsT0FBNEQ7QUFBQSxNQUEzQztBQUFFQyxZQUFGO0FBQVlDLGFBQVo7QUFBdUJDO0FBQXZCLEdBQTJDO0FBQUEsTUFBVkMsS0FBVTs7QUFDdkUsV0FBU0MsZUFBVCxDQUEyQkMsQ0FBM0IsRUFBK0I7QUFDM0IsUUFBS0YsS0FBSyxDQUFDRyxJQUFOLElBQWMsR0FBbkIsRUFBeUI7QUFDckJELE9BQUMsQ0FBQ0UsY0FBRjtBQUNIO0FBQ0o7O0FBRUQsU0FDSSxNQUFDLGtEQUFELGVBQVdKLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNJO0FBQUcsYUFBUyxFQUFHRixTQUFmO0FBQTJCLFNBQUssRUFBR0MsS0FBbkM7QUFBMkMsV0FBTyxFQUFHRSxlQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01KLFFBRE4sQ0FESixDQURKO0FBT0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQ0E7O0FBRUEsU0FBU1EsV0FBVCxDQUF1QkwsS0FBdkIsRUFBK0I7QUFDM0IsUUFBTTtBQUFFTSxXQUFGO0FBQVdDLFdBQVg7QUFBb0JDLFVBQXBCO0FBQTRCQyxXQUFPLEdBQUc7QUFBdEMsTUFBK0NULEtBQXJEO0FBQ0EsUUFBTVUsV0FBVyxHQUFHQyw2Q0FBTSxDQUFFLElBQUYsQ0FBMUI7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFNBQUssRUFBRSxDQURZO0FBRW5CQyxRQUFJLEVBQUUsS0FGYTtBQUduQkMsVUFBTSxFQUFFLENBSFc7QUFJbkJDLG1CQUFlLEVBQUUsTUFKRTtBQUtuQkMsT0FBRyxFQUFFLElBTGM7QUFNbkJDLFdBQU8sRUFBRSxDQUFFLDZCQUFGLEVBQWlDLDhCQUFqQyxDQU5VO0FBT25CQyxRQUFJLEVBQUUsSUFQYTtBQVFuQkMsY0FBVSxFQUFFLEdBUk87QUFTbkJDLFlBQVEsRUFBRSxLQVRTO0FBVW5CQyxjQUFVLEVBQUU7QUFDUixXQUFLO0FBQ0RMLFdBQUcsRUFBRTtBQURKLE9BREc7QUFJUixXQUFLO0FBQ0RBLFdBQUcsRUFBRTtBQURKO0FBSkc7QUFWTyxHQUF2QjtBQW9CQU0sa0RBQVMsQ0FBRSxNQUFNO0FBQ2IsUUFBS3ZCLEtBQUssQ0FBQ3dCLFdBQVgsRUFBeUI7QUFDckJ4QixXQUFLLENBQUN3QixXQUFOLENBQW1CZCxXQUFuQjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUVBLFdBQUYsQ0FKTSxDQUFUO0FBTUEsTUFBSWUsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBZSxFQUFmLEVBQW1CZixjQUFuQixFQUFtQ0wsT0FBbkMsQ0FBZjtBQUVBLFNBQ0lQLEtBQUssQ0FBQ0gsUUFBTixLQUFtQitCLFNBQW5CLEdBQ0k1QixLQUFLLENBQUNILFFBQU4sQ0FBZWdDLE1BQWYsR0FBd0IsQ0FBeEIsSUFBK0I3QixLQUFLLENBQUNILFFBQU4sSUFBa0JHLEtBQUssQ0FBQ0gsUUFBTixDQUFlZ0MsTUFBZixLQUEwQkQsU0FBM0UsR0FDSSxNQUFDLDREQUFEO0FBQVUsT0FBRyxFQUFHbEIsV0FBaEI7QUFBOEIsYUFBUyxFQUFJLGdCQUFlRCxPQUFPLEdBQUcsV0FBSCxHQUFpQixFQUFHLElBQUdILE9BQVEsRUFBaEc7QUFBb0csV0FBTyxFQUFHbUIsUUFBOUc7QUFBeUgsVUFBTSxFQUFHakIsTUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNUixLQUFLLENBQUNILFFBRFosQ0FESixHQUlNLEVBTFYsR0FNTSxFQVBWO0FBU0g7O0FBRUQsNEVBQWVpQyxpREFBQSxDQUFZekIsV0FBWixDQUFmLEU7Ozs7Ozs7Ozs7QUM3Q0EsZSIsImZpbGUiOiJjb21wb25lbnRzX2ZlYXR1cmVzX2FsaW5rX2pzeC1jb21wb25lbnRzX2ZlYXR1cmVzX293bC1jYXJvdXNlbF9qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBTGluayAoIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIC4uLnByb3BzIH0gKSB7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgIGlmICggcHJvcHMuaHJlZiA9PSAnIycgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHN0eWxlPXsgc3R5bGUgfSBvbkNsaWNrPXsgZGVmYXVsdEZ1bmN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInO1xyXG5cclxuZnVuY3Rpb24gT3dsQ2Fyb3VzZWwgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgYWRDbGFzcywgb3B0aW9ucywgZXZlbnRzLCBpc1RoZW1lID0gdHJ1ZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogXCJ0cnVlXCIsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIG5hdlRleHQ6IFsgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1sZWZ0XCI+JywgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1yaWdodFwiPicgXSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDQwMCxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMzc1OiB7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcHJvcHMub25DaGFuZ2VSZWYgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlUmVmKCBjYXJvdXNlbFJlZiApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgY2Fyb3VzZWxSZWYgXSApO1xyXG5cclxuICAgIGxldCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgKCBwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5jaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCApID9cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCByZWY9eyBjYXJvdXNlbFJlZiB9IGNsYXNzTmFtZT17IGBvd2wtY2Fyb3VzZWwgJHtpc1RoZW1lID8gJ293bC10aGVtZScgOiAnJ30gJHthZENsYXNzfWAgfSBvcHRpb25zPXsgc2V0dGluZ3MgfSBldmVudHM9eyBldmVudHMgfT5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwgPlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggT3dsQ2Fyb3VzZWwgKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9