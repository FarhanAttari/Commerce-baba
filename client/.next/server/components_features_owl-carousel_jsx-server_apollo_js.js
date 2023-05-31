exports.id = "components_features_owl-carousel_jsx-server_apollo_js";
exports.ids = ["components_features_owl-carousel_jsx-server_apollo_js"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3NlcnZlci9hcG9sbG8uanMiXSwibmFtZXMiOlsiT3dsQ2Fyb3VzZWwiLCJwcm9wcyIsImFkQ2xhc3MiLCJvcHRpb25zIiwiZXZlbnRzIiwiaXNUaGVtZSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwiZGVmYXVsdE9wdGlvbnMiLCJpdGVtcyIsImxvb3AiLCJtYXJnaW4iLCJyZXNwb25zaXZlQ2xhc3MiLCJuYXYiLCJuYXZUZXh0IiwiZG90cyIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheSIsInJlc3BvbnNpdmUiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZVJlZiIsInNldHRpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJSZWFjdCIsIkFQSV9VUkkiLCJwcm9jZXNzIiwiYXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwid2l0aEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXVCQyxLQUF2QixFQUErQjtBQUMzQixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsV0FBWDtBQUFvQkMsVUFBcEI7QUFBNEJDLFdBQU8sR0FBRztBQUF0QyxNQUErQ0osS0FBckQ7QUFDQSxRQUFNSyxXQUFXLEdBQUdDLDZDQUFNLENBQUUsSUFBRixDQUExQjtBQUNBLFFBQU1DLGNBQWMsR0FBRztBQUNuQkMsU0FBSyxFQUFFLENBRFk7QUFFbkJDLFFBQUksRUFBRSxLQUZhO0FBR25CQyxVQUFNLEVBQUUsQ0FIVztBQUluQkMsbUJBQWUsRUFBRSxNQUpFO0FBS25CQyxPQUFHLEVBQUUsSUFMYztBQU1uQkMsV0FBTyxFQUFFLENBQUUsNkJBQUYsRUFBaUMsOEJBQWpDLENBTlU7QUFPbkJDLFFBQUksRUFBRSxJQVBhO0FBUW5CQyxjQUFVLEVBQUUsR0FSTztBQVNuQkMsWUFBUSxFQUFFLEtBVFM7QUFVbkJDLGNBQVUsRUFBRTtBQUNSLFdBQUs7QUFDREwsV0FBRyxFQUFFO0FBREosT0FERztBQUlSLFdBQUs7QUFDREEsV0FBRyxFQUFFO0FBREo7QUFKRztBQVZPLEdBQXZCO0FBb0JBTSxrREFBUyxDQUFFLE1BQU07QUFDYixRQUFLbEIsS0FBSyxDQUFDbUIsV0FBWCxFQUF5QjtBQUNyQm5CLFdBQUssQ0FBQ21CLFdBQU4sQ0FBbUJkLFdBQW5CO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBRUEsV0FBRixDQUpNLENBQVQ7QUFNQSxNQUFJZSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFlLEVBQWYsRUFBbUJmLGNBQW5CLEVBQW1DTCxPQUFuQyxDQUFmO0FBRUEsU0FDSUYsS0FBSyxDQUFDdUIsUUFBTixLQUFtQkMsU0FBbkIsR0FDSXhCLEtBQUssQ0FBQ3VCLFFBQU4sQ0FBZUUsTUFBZixHQUF3QixDQUF4QixJQUErQnpCLEtBQUssQ0FBQ3VCLFFBQU4sSUFBa0J2QixLQUFLLENBQUN1QixRQUFOLENBQWVFLE1BQWYsS0FBMEJELFNBQTNFLEdBQ0ksTUFBQyw0REFBRDtBQUFVLE9BQUcsRUFBR25CLFdBQWhCO0FBQThCLGFBQVMsRUFBSSxnQkFBZUQsT0FBTyxHQUFHLFdBQUgsR0FBaUIsRUFBRyxJQUFHSCxPQUFRLEVBQWhHO0FBQW9HLFdBQU8sRUFBR21CLFFBQTlHO0FBQXlILFVBQU0sRUFBR2pCLE1BQWxJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUgsS0FBSyxDQUFDdUIsUUFEWixDQURKLEdBSU0sRUFMVixHQU1NLEVBUFY7QUFTSDs7QUFFRCw0RUFBZUcsaURBQUEsQ0FBWTNCLFdBQVosQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFFQSxNQUFNNEIsT0FBTyxHQUFJLEdBQUVDLHVCQUFtQyxVQUF0RDtBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxxREFBSixDQUFrQjtBQUNuQ0MsS0FBRyxFQUFFSixPQUQ4QjtBQUVuQ0ssT0FBSyxFQUFFLElBQUlDLHVEQUFKO0FBRjRCLENBQWxCLENBQXJCO0FBS0EsK0RBQWVDLHVEQUFVLENBQUVMLFlBQUYsQ0FBekIsRSIsImZpbGUiOiJjb21wb25lbnRzX2ZlYXR1cmVzX293bC1jYXJvdXNlbF9qc3gtc2VydmVyX2Fwb2xsb19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInO1xyXG5cclxuZnVuY3Rpb24gT3dsQ2Fyb3VzZWwgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgYWRDbGFzcywgb3B0aW9ucywgZXZlbnRzLCBpc1RoZW1lID0gdHJ1ZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogXCJ0cnVlXCIsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIG5hdlRleHQ6IFsgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1sZWZ0XCI+JywgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1yaWdodFwiPicgXSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDQwMCxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMzc1OiB7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcHJvcHMub25DaGFuZ2VSZWYgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlUmVmKCBjYXJvdXNlbFJlZiApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgY2Fyb3VzZWxSZWYgXSApO1xyXG5cclxuICAgIGxldCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgKCBwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5jaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCApID9cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCByZWY9eyBjYXJvdXNlbFJlZiB9IGNsYXNzTmFtZT17IGBvd2wtY2Fyb3VzZWwgJHtpc1RoZW1lID8gJ293bC10aGVtZScgOiAnJ30gJHthZENsYXNzfWAgfSBvcHRpb25zPXsgc2V0dGluZ3MgfSBldmVudHM9eyBldmVudHMgfT5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwgPlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggT3dsQ2Fyb3VzZWwgKTsiLCJpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnbmV4dC1hcG9sbG8nO1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5cclxuY29uc3QgQVBJX1VSSSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9L2dyYXBocWxgO1xyXG5cclxuY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCgge1xyXG4gICAgdXJpOiBBUElfVVJJLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggYXBvbGxvQ2xpZW50ICk7Il0sInNvdXJjZVJvb3QiOiIifQ==