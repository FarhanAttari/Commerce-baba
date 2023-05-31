(function() {
var exports = {};
exports.id = "pages/admindashboard/products";
exports.ids = ["pages/admindashboard/products"];
exports.modules = {

/***/ "./pages/admindashboard/products.js":
/*!******************************************!*\
  !*** ./pages/admindashboard/products.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productstable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productstable */ "./pages/admindashboard/productstable.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\pages\\admindashboard\\products.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Tables = () => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
    lg: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_productstable__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ }),

/***/ "./pages/admindashboard/productstable.js":
/*!***********************************************!*\
  !*** ./pages/admindashboard/productstable.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\pages\\admindashboard\\productstable.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const ProjectTables = () => {
  let {
    0: product,
    1: setProduct
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let {
    0: reFetch,
    1: setReFetch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchProducts() {
      let resp = await axios__WEBPACK_IMPORTED_MODULE_3___default().get('/product/allproducts');
      console.log(resp.data);
      setProduct(resp.data);
    }

    fetchProducts();
  }, [reFetch]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {
    tag: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Products Listing"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CardSubtitle, {
    className: "mb-2 text-muted",
    tag: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Overview of the projects"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Table, {
    className: "no-wrap mt-3 align-middle",
    responsive: true,
    borderless: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Product Title"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Product Sizes "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Product Detail"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Prize"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Stock"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Actions"))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, product.map((tdata, index) => __jsx("tr", {
    key: index,
    className: "border-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "d-flex align-items-center p-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: tdata.productImage1,
    className: "rounded-circle",
    alt: "avatar",
    width: "45",
    height: "45",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 23
    }
  }), __jsx("div", {
    className: "ms-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, __jsx("h6", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, tdata.productTitle)))), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, " Small: ", tdata.productSizeWithStock.Small, ",  "), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, " Medium: ", tdata.productSizeWithStock.Medium, " , "), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, " Large: ", tdata.productSizeWithStock.Large, ",  "), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, " X-Large: ", tdata.productSizeWithStock.xLarge, "   ")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: " text-secondary py-3 link",
    to: `/AdminDashboard/ProductDetail${tdata._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "View Product Detail \xA0", __jsx("i", {
    className: "bi bi-eye ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }))), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, tdata.productPrice), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, tdata.totalProductStock), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "Reject",
    onClick: async () => {
      let resp = await axios__WEBPACK_IMPORTED_MODULE_3___default().delete(`/product/${tdata._id}`);
      setReFetch(resp.data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx("i", {
    class: "bi bi-trash3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 20
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectTables);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

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

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/admindashboard/products.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3BhZ2VzL2FkbWluZGFzaGJvYXJkL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vcGFnZXMvYWRtaW5kYXNoYm9hcmQvcHJvZHVjdHN0YWJsZS5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9pZ25vcmVkfEQ6XFxzaXIgcHJvamVjdCBkYXNoYm9hcmQgYWRtaW4gcGFubmVsIGFuZCBjbGllbnRcXHByb2plY3QgYmlubmlzc2FyXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJUYWJsZXMiLCJQcm9qZWN0VGFibGVzIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VTdGF0ZSIsInJlRmV0Y2giLCJzZXRSZUZldGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsInJlc3AiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWFwIiwidGRhdGEiLCJpbmRleCIsInByb2R1Y3RJbWFnZTEiLCJwcm9kdWN0VGl0bGUiLCJwcm9kdWN0U2l6ZVdpdGhTdG9jayIsIlNtYWxsIiwiTWVkaXVtIiwiTGFyZ2UiLCJ4TGFyZ2UiLCJfaWQiLCJwcm9kdWN0UHJpY2UiLCJ0b3RhbFByb2R1Y3RTdG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsU0FDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLDJDQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERjtBQVlELENBYkQ7O0FBZUEsK0RBQWVBLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUMsYUFBYSxHQUFHLE1BQU07QUFFMUIsTUFBSTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXFCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFDQSxNQUFJO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVNDO0FBQVQsTUFBcUJGLCtDQUFRLENBQUMsRUFBRCxDQUFqQztBQUVJRyxrREFBUyxDQUFFLE1BQUk7QUFDYixtQkFBZUMsYUFBZixHQUErQjtBQUM3QixVQUFJQyxJQUFJLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSxzQkFBVixDQUFqQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDSSxJQUFqQjtBQUNBVixnQkFBVSxDQUFDTSxJQUFJLENBQUNJLElBQU4sQ0FBVjtBQUNEOztBQUNETCxpQkFBYTtBQUNaLEdBUE0sRUFPSixDQUFDSCxPQUFELENBUEksQ0FBVDtBQVNKLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNF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QUNDLE1BQUUsRUFBRyxnQ0FBK0JSLEtBQUssQ0FBQ1MsR0FBSSxFQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUlBO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpBLENBREEsQ0F0QkYsRUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLVCxLQUFLLENBQUNVLFlBQVgsQ0E5QkYsRUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLVixLQUFLLENBQUNXLGlCQUFYLENBL0JGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQ0UsV0FBTyxFQUFFLFlBQVM7QUFDbEIsVUFBSWpCLElBQUksR0FBRyxNQUFNQyxtREFBQSxDQUFjLFlBQVdLLEtBQUssQ0FBQ1MsR0FBSSxFQUFuQyxDQUFqQjtBQUNBbEIsZ0JBQVUsQ0FBQ0csSUFBSSxDQUFDSSxJQUFOLENBQVY7QUFDQyxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQztBQUFHLFNBQUssRUFBQyxjQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURBLENBaENGLENBREQsQ0FESCxDQVhGLENBTkYsQ0FERixDQURGLENBREY7QUFzRUQsQ0FwRkQ7O0FBc0ZBLCtEQUFlWixhQUFmLEU7Ozs7Ozs7Ozs7O0FDNUZBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9hZG1pbmRhc2hib2FyZC9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0c1RhYmxlIGZyb20gXCIuL3Byb2R1Y3RzdGFibGVcIjtcbmltcG9ydCB7IFJvdywgQ29sLCBUYWJsZSwgQ2FyZCwgQ2FyZFRpdGxlLCBDYXJkQm9keSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IFRhYmxlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XG4gICAgICB7LyogdGFibGUtMSovfVxuICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XG4gICAgICA8Q29sIGxnPVwiMTJcIj5cbiAgICAgICAgPFByb2R1Y3RzVGFibGUgLz5cbiAgICAgIDwvQ29sPlxuICAgICAgXG4gICAgICBcbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlcztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCAsdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENhcmRTdWJ0aXRsZSwgVGFibGUsQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5jb25zdCBQcm9qZWN0VGFibGVzID0gKCkgPT4ge1xuXG4gIGxldCBbcHJvZHVjdCxzZXRQcm9kdWN0XT11c2VTdGF0ZShbXSk7XG4gIGxldCBbcmVGZXRjaCxzZXRSZUZldGNoXT11c2VTdGF0ZShcIlwiKTtcblxuICAgICAgdXNlRWZmZWN0KCAoKT0+e1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkgeyBcbiAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGF4aW9zLmdldCgnL3Byb2R1Y3QvYWxscHJvZHVjdHMnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGEpO1xuICAgICAgICAgIHNldFByb2R1Y3QocmVzcC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7ICBcbiAgICAgICAgfSwgW3JlRmV0Y2hdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5Qcm9kdWN0cyBMaXN0aW5nPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIiB0YWc9XCJoNlwiPlxuICAgICAgICAgICAgT3ZlcnZpZXcgb2YgdGhlIHByb2plY3RzXG4gICAgICAgICAgPC9DYXJkU3VidGl0bGU+XG5cbiAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwibm8td3JhcCBtdC0zIGFsaWduLW1pZGRsZVwiIHJlc3BvbnNpdmUgYm9yZGVybGVzcz5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0IFRpdGxlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdCBTaXplcyA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0IERldGFpbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByaXplPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+U3RvY2s8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtwcm9kdWN0Lm1hcCgodGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJvcmRlci10b3BcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGRhdGEucHJvZHVjdEltYWdlMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj57dGRhdGEucHJvZHVjdFRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IFNtYWxsOiB7IHRkYXRhLnByb2R1Y3RTaXplV2l0aFN0b2NrLlNtYWxsfSwgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IE1lZGl1bTogeyB0ZGF0YS5wcm9kdWN0U2l6ZVdpdGhTdG9jay5NZWRpdW19ICwgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gTGFyZ2U6IHsgdGRhdGEucHJvZHVjdFNpemVXaXRoU3RvY2suTGFyZ2V9LCAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBYLUxhcmdlOiB7dGRhdGEucHJvZHVjdFNpemVXaXRoU3RvY2sueExhcmdlfSAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCIgdGV4dC1zZWNvbmRhcnkgcHktMyBsaW5rXCJcbiAgICAgICAgICAgICAgICAgICB0bz17YC9BZG1pbkRhc2hib2FyZC9Qcm9kdWN0RGV0YWlsJHt0ZGF0YS5faWR9YH0+XG4gICAgICAgICAgICAgICAgICAgVmlldyBQcm9kdWN0IERldGFpbFxuICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktZXllIFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3RkYXRhLnByb2R1Y3RQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPnt0ZGF0YS50b3RhbFByb2R1Y3RTdG9ja308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJSZWplY3RcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvcHJvZHVjdC8ke3RkYXRhLl9pZH1gKVxuICAgICAgICAgICAgICAgICAgICBzZXRSZUZldGNoKHJlc3AuZGF0YSkgXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS10cmFzaDNcIj48L2k+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFRhYmxlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=