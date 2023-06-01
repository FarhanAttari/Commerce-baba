(function() {
var exports = {};
exports.id = "pages/product/centered/[slug]";
exports.ids = ["pages/product/centered/[slug]"];
exports.modules = {

/***/ "./components/features/products/product-six.jsx":
/*!******************************************************!*\
  !*** ./components/features/products/product-six.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _store_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/store/compare */ "./store/compare.js");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\products\\product-six.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductSix(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(99999);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let min = minPrice;
    let max = maxPrice;
    product.variants.map(item => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInCompare)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return __jsx("div", {
    className: "product product-5 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, product.new ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "Out of Stock") : "", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }), product.sm_pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }) : ""), product.stock > 0 ? __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 141
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 134
    }
  }, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 127
    }
  }, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 109
    }
  }, "compare"))) : __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 141
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 134
    }
  }, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 127
    }
  }, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 109
    }
  }, "compare"))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 41
    }
  }, "add to cart"))) : ""), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2))));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_5__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_6__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_7__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_8__.actions))(ProductSix));

/***/ }),

/***/ "./components/partials/product/breadcrumb.jsx":
/*!****************************************************!*\
  !*** ./components/partials/product/breadcrumb.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\product\\breadcrumb.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Breadcrumb(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    prev,
    next,
    current,
    fullWidth = false
  } = props;
  return __jsx("nav", {
    className: "breadcrumb-nav border-0 mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: 'd-flex align-items-center ' + (fullWidth ? 'container-fluid' : 'container'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "Product")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, current)), __jsx("nav", {
    className: "product-pager ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, prev ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: {
        slug: prev.slug
      }
    },
    className: `product-pager-link product-pager-prev ${!next ? 'prev-only' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-angle-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, "Prev"), __jsx("div", {
    className: "product-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + prev.sm_pictures[0].url,
    alt: "product",
    width: prev.sm_pictures[0].width,
    height: prev.sm_pictures[0].height,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  })), __jsx("h3", {
    className: "product-name mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, prev.name))) : "", next ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: {
        slug: next.slug
      }
    },
    className: "product-pager-link product-pager-next",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "Next"), __jsx("i", {
    className: "icon-angle-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "product-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + next.sm_pictures[0].url,
    alt: "product",
    width: next.sm_pictures[0].width,
    height: next.sm_pictures[0].height,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  })), __jsx("h3", {
    className: "product-name mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, next.name))) : "")));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Breadcrumb));

/***/ }),

/***/ "./components/partials/product/details/detail-two.jsx":
/*!************************************************************!*\
  !*** ./components/partials/product/details/detail-two.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slide-toggle */ "react-slide-toggle");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_qty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/qty */ "./components/features/qty.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\product\\details\\detail-two.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function DetailTwo(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    product
  } = props;
  const {
    0: qty,
    1: setQty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: colorArray,
    1: setColorArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: sizeArray,
    1: setSizeArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: variationGroup,
    1: setVariationGroup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    color: null,
    colorName: null,
    price: null,
    size: ""
  });
  const {
    0: showClear,
    1: setShowClear
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showVariationPrice,
    1: setShowVariationPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(99999);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let min = 99999;
    let max = 0;
    setVariationGroup(product.variants.reduce((acc, cur) => {
      cur.size.map(item => {
        acc.push({
          color: cur.color,
          colorName: cur.color_name,
          size: item.name,
          price: cur.price
        });
      });
      if (min > cur.price) min = cur.price;
      if (max < cur.price) max = cur.price;
      return acc;
    }, []));

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, [product]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelectedVariant({
      color: null,
      colorName: null,
      price: null,
      size: ""
    });
    setQty(1);
  }, [router.query.slug]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    refreshSelectableGroup();
  }, [variationGroup, selectedVariant]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setShowClear(selectedVariant.color || selectedVariant.size != "" ? true : false);
    setShowVariationPrice(selectedVariant.color && selectedVariant.size != "" ? true : false);
    let toggle = document.querySelector('.product-details-top .variation-toggle');

    if (toggle) {
      if (selectedVariant.color && selectedVariant.size != "" && toggle.classList.contains('collapsed')) {
        toggle.click();
      }

      if (!(selectedVariant.color && selectedVariant.size != "") && !toggle.classList.contains('collapsed')) {
        toggle.click();
      }
    }
  }, [selectedVariant]);

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isInWishlist)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function refreshSelectableGroup() {
    let tempArray = [...variationGroup];

    if (selectedVariant.color) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.color !== cur.color) {
          return acc;
        }

        return [...acc, cur];
      }, []);
    }

    setSizeArray(tempArray.reduce((acc, cur) => {
      if (acc.findIndex(item => item.size == cur.size) !== -1) return acc;
      return [...acc, cur];
    }, []));
    tempArray = [...variationGroup];

    if (selectedVariant.size) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.size !== cur.size) {
          return acc;
        }

        return [...acc, cur];
      }, []);
    }

    setColorArray(product.variants.reduce((acc, cur) => {
      if (tempArray.findIndex(item => item.color == cur.color) == -1) {
        return [...acc, {
          color: cur.color,
          colorName: cur.color_name,
          price: cur.price,
          disabled: true
        }];
      }

      return [...acc, {
        color: cur.color,
        colorName: cur.color_name,
        price: cur.price,
        disabled: false
      }];
    }, []));
  }

  function selectColor(e, item) {
    e.preventDefault();

    if (item.color == selectedVariant.color) {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        color: null,
        colorName: null,
        price: item.price
      }));
    } else {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        color: item.color,
        colorName: item.colorName,
        price: item.price
      }));
    }
  }

  function selectSize(e) {
    if (e.target.value == "") {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        size: ""
      }));
    } else {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        size: e.target.value
      }));
    }
  }

  function onChangeQty(current) {
    setQty(current);
  }

  function clearSelection(e) {
    e.preventDefault();
    setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
      color: null,
      colorName: null,
      size: ""
    }));
    refreshSelectableGroup();
  }

  function onCartClick(e) {
    e.preventDefault();
    if (e.currentTarget.classList.contains('btn-disabled')) return;

    let newProduct = _objectSpread({}, product);

    if (product.variants.length > 0) {
      newProduct = _objectSpread(_objectSpread({}, product), {}, {
        name: product.name + ' - ' + selectedVariant.colorName + ', ' + selectedVariant.size,
        price: selectedVariant.price
      });
    }

    props.addToCart(newProduct, qty);
  }

  if (!product) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 16
      }
    });
  }

  return __jsx("div", {
    className: "product-details product-details-centered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, product.name), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, "( ", product.review, " Reviews )")), product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 25
    }
  }, minPrice == maxPrice ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 37
    }
  }, "$", product.price.toFixed(2)) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 33
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, product.short_desc)), product.variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 29
    }
  }, "Color:"), __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 29
    }
  }, colorArray.map((item, index) => __jsx("a", {
    href: "#",
    className: `${(item.color == selectedVariant.color ? 'active ' : '') + (item.disabled ? 'disabled' : '')}`,
    style: {
      backgroundColor: item.color
    },
    key: index,
    onClick: e => selectColor(e, item),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 29
    }
  }, "Size:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }, __jsx("select", {
    name: "size",
    className: "form-control",
    value: selectedVariant.size,
    onChange: selectSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 37
    }
  }, "Select a size"), sizeArray.map((item, index) => __jsx("option", {
    value: item.size,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 45
    }
  }, item.size)))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "size-guide mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-th-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 33
    }
  }), "size guide"), showClear ? __jsx("a", {
    href: "#",
    onClick: clearSelection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 37
    }
  }, "clear") : ""), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 25
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: `d-none variation-toggle ${toggleState.toLowerCase()}`,
    onClick: onToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 37
    }
  }), __jsx("div", {
    ref: setCollapsibleElement,
    style: {
      overflow: 'hidden'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 41
    }
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0))))) : "", __jsx("div", {
    className: "product-details-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "details-action-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_5__.default, {
    changeQty: onChangeQty,
    max: product.stock,
    adClass: "mr-3 mr-sm-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }), __jsx("a", {
    href: "#",
    className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.canAddToCart)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 25
    }
  }, "add to cart"))), __jsx("div", {
    className: "details-action-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isInWishlist)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 113
    }
  }, "Go to Wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 106
    }
  }, "Add to Wishlist")))), __jsx("div", {
    className: "product-details-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }, "Category:"), product.category.map((cat, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: cat.slug
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 33
    }
  }, cat.name), index < product.category.length - 1 ? ',' : ''))), __jsx("div", {
    className: "social-icons social-icons-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "social-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 21
    }
  }, "Share:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 25
    }
  })))));
}

const mapStateToProps = state => {
  return {
    cartlist: state.cartlist.data,
    wishlist: state.wishlist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions))(DetailTwo));

/***/ }),

/***/ "./components/partials/product/gallery/gallery-default.jsx":
/*!*****************************************************************!*\
  !*** ./components/partials/product/gallery/gallery-default.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-magnifiers */ "react-image-magnifiers");
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\product\\gallery\\gallery-default.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function GalleryDefault(props) {
  const {
    product,
    adClass = "product-gallery-vertical"
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (product) {
      setIsOpen(false);
      setPhotoIndex(0);
    }
  }, [product]);

  function moveNextPhoto() {
    setPhotoIndex((photoIndex + 1) % product.pictures.length);
  }

  function movePrevPhoto() {
    setPhotoIndex((photoIndex + product.pictures.length - 1) % product.pictures.length);
  }

  function openLightBox() {
    let index = parseInt(document.querySelector(".product-main-image").getAttribute("index"));

    if (!index) {
      index = 0;
    }

    setIsOpen(true);
    setPhotoIndex(index);
  }

  function closeLightBox() {
    setIsOpen(false);
  }

  function changeBgImage(e, image, index) {
    let imgs = document.querySelectorAll('.product-main-image img');

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = image;
    }

    document.querySelector('.product-image-gallery .active').classList.remove('active');
    document.querySelector('.product-main-image').setAttribute('index', index);
    e.currentTarget.classList.add('active');
  }

  if (!product) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }
    });
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: `product-gallery ${adClass}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("figure", {
    className: "product-main-image",
    index: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, product.new ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, "Out of Stock") : "", __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__.Magnifier, {
    imageSrc: "http://localhost:4000" + product.pictures[0].url,
    imageAlt: "product",
    largeImageSrc: "http://localhost:4000" + product.pictures[0].url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    id: "product-zoom",
    className: "zoom-image position-relative overflow-hidden",
    width: product.pictures[0].width,
    height: product.pictures[0].height,
    style: {
      paddingTop: `${product.pictures[0].height / product.pictures[0].width * 100}%`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), __jsx("button", {
    id: "btn-product-gallery",
    className: "btn-product-gallery",
    onClick: openLightBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }))), __jsx("div", {
    id: "product-zoom-gallery",
    className: "product-image-gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, product.pictures.map((item, index) => __jsx("button", {
    className: `product-gallery-item ${0 === index ? 'active' : ''}`,
    key: product.id + '-' + index,
    onClick: e => changeBgImage(e, `${"http://localhost:4000" + item.url}`, index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "img-wrapper h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + product.sm_pictures[index].url,
    alt: "product back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }))))))), isOpen ? __jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default()), {
    mainSrc: "http://localhost:4000" + product.pictures[photoIndex].url,
    nextSrc: "http://localhost:4000" + product.pictures[(photoIndex + 1) % product.pictures.length].url,
    prevSrc: "http://localhost:4000" + product.pictures[(photoIndex + product.pictures.length - 1) % product.pictures.length].url,
    onCloseRequest: closeLightBox,
    onMovePrevRequest: moveNextPhoto,
    onMoveNextRequest: movePrevPhoto,
    reactModalStyle: {
      overlay: {
        zIndex: 1041
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }) : '');
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(GalleryDefault));

/***/ }),

/***/ "./components/partials/product/info-tabs/info-one.jsx":
/*!************************************************************!*\
  !*** ./components/partials/product/info-tabs/info-one.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\product\\info-tabs\\info-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function InfoOne(props) {
  const {
    product
  } = props;

  const setRating = e => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector('.active')) {
      e.currentTarget.parentNode.querySelector('.active').classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  };

  if (!product) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    });
  }

  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-details-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, " Description")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, " Additional information")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "Shipping & Returns")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Reviews (", product.review, ")"))), __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Product Information"), __jsx("p", {
    className: "pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "Vivamus finibus vel mauris ut vehicula."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "Nullam a magna porttitor, dictum risus nec, faucibus sapien.")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "Information"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "), __jsx("h3", {
    className: "pt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Fabric & care"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, "Faux suede fabric"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, "Gold tone metal hoop handles."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, "RI branding"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "Snake print trim interior "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, "Adjustable cross body strap"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, " Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm")), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "Size"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, "one size"))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "Delivery & returns"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 150
    }
  }, "Delivery information"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 194
    }
  }), "We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 207
    }
  }, "Returns information")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "Reviews (2)"), __jsx("div", {
    className: "review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 45
    }
  }, "Samanta J.")), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 49
    }
  }, product.ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }, "6 days ago")), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }, "Good, perfect size"), __jsx("div", {
    className: "review-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 45
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")), __jsx("div", {
    className: "review-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 61
    }
  }), "Helpful (2)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 61
    }
  }), "Unhelpful (0)"))))), __jsx("div", {
    className: "review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 45
    }
  }, "John Doe")), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 49
    }
  }, product.ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }, "5 days ago")), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }, "Very good"), __jsx("div", {
    className: "review-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")), __jsx("div", {
    className: "review-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 61
    }
  }), "Helpful (0)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 61
    }
  }), "Unhelpful (0)")))))), __jsx("div", {
    className: "reply",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "title-wrapper text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title title-simple text-left text-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }, "Add a Review"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, "Your email address will not be published. Required fields are marked *")), __jsx("div", {
    className: "rating-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, __jsx("label", {
    htmlFor: "rating",
    className: "text-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, "Your rating * "), __jsx("span", {
    className: "rating-stars selected",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }, [1, 2, 3, 4, 5].map((num, index) => __jsx("a", {
    className: `star-${num}`,
    href: "#",
    onClick: setRating,
    key: 'star-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, num))), __jsx("select", {
    name: "rating",
    id: "rating",
    required: "",
    style: {
      display: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, "Rate\u2026"), __jsx("option", {
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 37
    }
  }, "Perfect"), __jsx("option", {
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 37
    }
  }, "Good"), __jsx("option", {
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, "Average"), __jsx("option", {
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, "Not that bad"), __jsx("option", {
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 37
    }
  }, "Very poor"))), __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx("textarea", {
    id: "reply-message",
    cols: "30",
    rows: "6",
    className: "form-control mb-2",
    placeholder: "Comment *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    placeholder: "Name *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    placeholder: "Email *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: "form-checkbox d-flex align-items-start mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 37
    }
  }), __jsx("label", {
    className: "form-control-label ml-3",
    htmlFor: "signin-remember",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, "Save my name, email, and website in this browser for the next time I comment.")), __jsx("button", {
    type: "submit",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }, "Submit")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(InfoOne));

/***/ }),

/***/ "./components/partials/product/related/related-one.jsx":
/*!*************************************************************!*\
  !*** ./components/partials/product/related/related-one.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_products_product_six__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/products/product-six */ "./components/features/products/product-six.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\product\\related\\related-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function RelatedProductsOne(props) {
  const {
    products
  } = props;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h2", {
    className: "title text-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "You May Also Like"), props.loading ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",
    isTheme: false,
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__.mainSlider8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, [1, 2, 3, 4].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1",
    isTheme: false,
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__.mainSlider8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, products.map((product, index) => __jsx(_components_features_products_product_six__WEBPACK_IMPORTED_MODULE_1__.default, {
    product: product,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(RelatedProductsOne));

/***/ }),

/***/ "./pages/product/centered/[slug].jsx":
/*!*******************************************!*\
  !*** ./pages/product/centered/[slug].jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _components_partials_product_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/partials/product/breadcrumb */ "./components/partials/product/breadcrumb.jsx");
/* harmony import */ var _components_partials_product_gallery_gallery_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/product/gallery/gallery-default */ "./components/partials/product/gallery/gallery-default.jsx");
/* harmony import */ var _components_partials_product_details_detail_two__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/product/details/detail-two */ "./components/partials/product/details/detail-two.jsx");
/* harmony import */ var _components_partials_product_info_tabs_info_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/product/info-tabs/info-one */ "./components/partials/product/info-tabs/info-one.jsx");
/* harmony import */ var _components_partials_product_related_related_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/partials/product/related/related-one */ "./components/partials/product/related/related-one.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\pages\\product\\centered\\[slug].jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










function ProductCentered() {
  const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.slug;
  if (!slug) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  });
  const {
    data,
    loading,
    error
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_4__.GET_PRODUCT, {
    variables: {
      slug
    }
  });

  if (loading) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }, "Loading...");
  }

  if (error) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }
    }, "Error: ", error.message); // Render an error message
  }

  const product = data && data.product.single;
  const related = data && data.product.related;
  const prev = data && data.product.prev;
  const next = data && data.product.next;

  if (error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    });
  }

  return __jsx("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_components_partials_product_breadcrumb__WEBPACK_IMPORTED_MODULE_5__.default, {
    prev: prev,
    next: next,
    current: "Centered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "product-details-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: `row skel-pro-single ${loading ? '' : 'loaded'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "skel-product-gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }), !loading ? __jsx(_components_partials_product_gallery_gallery_default__WEBPACK_IMPORTED_MODULE_6__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }) : ""), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "entry-summary row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary1 mt-2 mt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }))), !loading ? __jsx(_components_partials_product_details_detail_two__WEBPACK_IMPORTED_MODULE_7__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }) : ""))), loading ? __jsx("div", {
    className: "skel-pro-tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }) : __jsx(_components_partials_product_info_tabs_info_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }), __jsx(_components_partials_product_related_related_one__WEBPACK_IMPORTED_MODULE_9__.default, {
    products: related,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_3__.default)({
  ssr: true
})(ProductCentered));

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ "react-image-magnifiers":
/*!*****************************************!*\
  !*** external "react-image-magnifiers" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ "react-owl-carousel2":
/*!**************************************!*\
  !*** external "react-owl-carousel2" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-slide-toggle":
/*!*************************************!*\
  !*** external "react-slide-toggle" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx","components_features_owl-carousel_jsx-server_apollo_js","components_features_qty_jsx-server_queries_js-store_cart_js-store_compare_js-store_demo_js-st-b1f8fd","utils_data_js"], function() { return __webpack_exec__("./pages/product/centered/[slug].jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1zaXguanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2JyZWFkY3J1bWIuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbHMvZGV0YWlsLXR3by5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvZ2FsbGVyeS9nYWxsZXJ5LWRlZmF1bHQuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2luZm8tdGFicy9pbmZvLW9uZS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvcmVsYXRlZC9yZWxhdGVkLW9uZS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9wYWdlcy9wcm9kdWN0L2NlbnRlcmVkL1tzbHVnXS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWltYWdlLWxpZ2h0Ym94XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZS1tYWduaWZpZXJzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXNsaWRlLXRvZ2dsZVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdGFic1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIlByb2R1Y3RTaXgiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3QiLCJ3aXNobGlzdCIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJ1c2VTdGF0ZSIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJ1c2VFZmZlY3QiLCJtaW4iLCJtYXgiLCJ2YXJpYW50cyIsIm1hcCIsIml0ZW0iLCJwcmljZSIsImxlbmd0aCIsInNhbGVfcHJpY2UiLCJvbkNhcnRDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRvQ2FydCIsIm9uV2lzaGxpc3RDbGljayIsImlzSW5XaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJwdXNoIiwib25Db21wYXJlQ2xpY2siLCJpc0luQ29tcGFyZSIsImNvbXBhcmVsaXN0IiwiYWRkVG9Db21wYXJlIiwib25RdWlja1ZpZXciLCJzaG93UXVpY2tWaWV3Iiwic2x1ZyIsIm5ldyIsInRvcCIsInN0b2NrIiwicHJvY2VzcyIsInNtX3BpY3R1cmVzIiwidXJsIiwibmFtZSIsInRvRml4ZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiY29tcGFyZUFjdGlvbiIsImRlbW9BY3Rpb24iLCJCcmVhZGNydW1iIiwicHJldiIsIm5leHQiLCJjdXJyZW50IiwiZnVsbFdpZHRoIiwicGF0aG5hbWUiLCJxdWVyeSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVhY3QiLCJEZXRhaWxUd28iLCJxdHkiLCJzZXRRdHkiLCJjb2xvckFycmF5Iiwic2V0Q29sb3JBcnJheSIsInNpemVBcnJheSIsInNldFNpemVBcnJheSIsInZhcmlhdGlvbkdyb3VwIiwic2V0VmFyaWF0aW9uR3JvdXAiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJjb2xvciIsImNvbG9yTmFtZSIsInNpemUiLCJzaG93Q2xlYXIiLCJzZXRTaG93Q2xlYXIiLCJzaG93VmFyaWF0aW9uUHJpY2UiLCJzZXRTaG93VmFyaWF0aW9uUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjb2xvcl9uYW1lIiwicmVmcmVzaFNlbGVjdGFibGVHcm91cCIsInRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xpY2siLCJ0ZW1wQXJyYXkiLCJmaW5kSW5kZXgiLCJkaXNhYmxlZCIsInNlbGVjdENvbG9yIiwic2VsZWN0U2l6ZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VRdHkiLCJjbGVhclNlbGVjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJuZXdQcm9kdWN0IiwicmF0aW5ncyIsInJldmlldyIsInNob3J0X2Rlc2MiLCJpbmRleCIsImJhY2tncm91bmRDb2xvciIsIm9uVG9nZ2xlIiwic2V0Q29sbGFwc2libGVFbGVtZW50IiwidG9nZ2xlU3RhdGUiLCJ0b0xvd2VyQ2FzZSIsIm92ZXJmbG93IiwiY2FuQWRkVG9DYXJ0IiwiY2FydGxpc3QiLCJjYXRlZ29yeSIsImNhdCIsIkdhbGxlcnlEZWZhdWx0IiwiYWRDbGFzcyIsImlzT3BlbiIsInNldElzT3BlbiIsInBob3RvSW5kZXgiLCJzZXRQaG90b0luZGV4IiwibW92ZU5leHRQaG90byIsInBpY3R1cmVzIiwibW92ZVByZXZQaG90byIsIm9wZW5MaWdodEJveCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiY2xvc2VMaWdodEJveCIsImNoYW5nZUJnSW1hZ2UiLCJpbWFnZSIsImltZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsInNyYyIsInJlbW92ZSIsInNldEF0dHJpYnV0ZSIsImFkZCIsInBhZGRpbmdUb3AiLCJpZCIsIm92ZXJsYXkiLCJ6SW5kZXgiLCJJbmZvT25lIiwic2V0UmF0aW5nIiwicGFyZW50Tm9kZSIsIm51bSIsImRpc3BsYXkiLCJSZWxhdGVkUHJvZHVjdHNPbmUiLCJwcm9kdWN0cyIsImxvYWRpbmciLCJtYWluU2xpZGVyOCIsIlByb2R1Y3RDZW50ZXJlZCIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfUFJPRFVDVCIsInZhcmlhYmxlcyIsIm1lc3NhZ2UiLCJzaW5nbGUiLCJy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O0FBQVcsV0FBTyxFQUFHaEosT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEdBRU0sRUFaZCxDQVZKLENBREosQ0FESixFQStCUWdKLE9BQU8sR0FDSDtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERyxHQUdILE1BQUMsb0ZBQUQ7QUFBUyxXQUFPLEVBQUdoSixPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENaLEVBcUNJLE1BQUMscUZBQUQ7QUFBb0IsWUFBUSxFQUFHeUosT0FBL0I7QUFBeUMsV0FBTyxFQUFHVCxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNKLENBREosQ0FGSixDQURKO0FBOENIOztBQUVELCtEQUFlVSx1REFBVSxDQUFFO0FBQUVDLEtBQUc7QUFBTCxDQUFGLENBQVYsQ0FBcURULGVBQXJELENBQWYsRTs7Ozs7Ozs7Ozs7QUNqRkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoicGFnZXMvcHJvZHVjdC9jZW50ZXJlZC9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgd2lzaGxpc3RBY3Rpb24gfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjYXJ0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jYXJ0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjb21wYXJlQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jb21wYXJlJztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBkZW1vQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9kZW1vJztcclxuXHJcbmltcG9ydCB7IGlzSW5XaXNobGlzdCwgaXNJbkNvbXBhcmUgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RTaXggKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCB3aXNobGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIG1heFByaWNlLCBzZXRNYXhQcmljZSBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgbWluUHJpY2UsIHNldE1pblByaWNlIF0gPSB1c2VTdGF0ZSggOTk5OTkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gbWluUHJpY2U7XHJcbiAgICAgICAgbGV0IG1heCA9IG1heFByaWNlO1xyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBpdGVtLnByaWNlICkgbWluID0gaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKCBtYXggPCBpdGVtLnByaWNlICkgbWF4ID0gaXRlbS5wcmljZTtcclxuICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE1pblByaWNlKCBtaW4gKTtcclxuICAgICAgICBzZXRNYXhQcmljZSggbWF4ICk7XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXJ0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5hZGRUb0NhcnQoIHByb2R1Y3QgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Db21wYXJlQ2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luQ29tcGFyZSggcHJvcHMuY29tcGFyZWxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9Db21wYXJlKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUXVpY2tWaWV3ICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuc2hvd1F1aWNrVmlldyggcHJvZHVjdC5zbHVnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QgcHJvZHVjdC01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmV3ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1uZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtb3V0XCI+T3V0IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbV9waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCB3aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlIGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+Z28gdG8gd2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlXCIgb25DbGljaz17IG9uV2lzaGxpc3RDbGljayB9PjxzcGFuPmFkZCB0byB3aXNobGlzdDwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBvblF1aWNrVmlldyB9PjxzcGFuPnF1aWNrIHZpZXc8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi1jb21wYXJlXCIgb25DbGljaz17IG9uQ29tcGFyZUNsaWNrIH0+PHNwYW4+Y29tcGFyZTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24tdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGUgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5nbyB0byB3aXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+PHNwYW4+cXVpY2sgdmlldzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLWNvbXBhcmVcIiBvbkNsaWNrPXsgb25Db21wYXJlQ2xpY2sgfT48c3Bhbj5jb21wYXJlPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jayAhPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4tY2FydCBidG4tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWxlY3Qgb3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0XCIgb25DbGljaz17IG9uQ2FydENsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdFNpeCApO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gQnJlYWRjcnVtYiAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByZXYsIG5leHQsIGN1cnJlbnQsIGZ1bGxXaWR0aCA9IGZhbHNlIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXYgYm9yZGVyLTAgbWItMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICcgKyAoIGZ1bGxXaWR0aCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicgKSB9PlxyXG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL1wiPkhvbWU8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2RlZmF1bHQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCI+UHJvZHVjdDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiPnsgY3VycmVudCB9PC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwcm9kdWN0LXBhZ2VyIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHtwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeToge3NsdWc6IHByZXYuc2x1Z319IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgcHJvZHVjdC1wYWdlci1saW5rIHByb2R1Y3QtcGFnZXItcHJldiAkeyFuZXh0ID8gJ3ByZXYtb25seScgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFuZ2xlLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJldjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJldi5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBwcmV2LnNtX3BpY3R1cmVzWyAwIF0ud2lkdGggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17IHByZXYuc21fcGljdHVyZXNbIDAgXS5oZWlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWUgbWItMFwiPnsgcHJldi5uYW1lIH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyB7cGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHtzbHVnOiBuZXh0LnNsdWd9fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1wYWdlci1saW5rIHByb2R1Y3QtcGFnZXItbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFuZ2xlLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBuZXh0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17IG5leHQuc21fcGljdHVyZXNbIDAgXS53aWR0aCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsgbmV4dC5zbV9waWN0dXJlc1sgMCBdLmhlaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZSBtYi0wXCI+eyBuZXh0Lm5hbWUgfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvbmF2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvbmF2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggQnJlYWRjcnVtYiApOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgU2xpZGVUb2dnbGUgZnJvbSAncmVhY3Qtc2xpZGUtdG9nZ2xlJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5pbXBvcnQgUXR5IGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9xdHknO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyBhcyB3aXNobGlzdEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvd2lzaGxpc3QnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNhcnRBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5cclxuaW1wb3J0IHsgY2FuQWRkVG9DYXJ0LCBpc0luV2lzaGxpc3QgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIERldGFpbFR3byAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBxdHksIHNldFF0eSBdID0gdXNlU3RhdGUoIDEgKTtcclxuICAgIGNvbnN0IFsgY29sb3JBcnJheSwgc2V0Q29sb3JBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHNpemVBcnJheSwgc2V0U2l6ZUFycmF5IF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFsgdmFyaWF0aW9uR3JvdXAsIHNldFZhcmlhdGlvbkdyb3VwIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFsgc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnQgXSA9IHVzZVN0YXRlKCB7IGNvbG9yOiBudWxsLCBjb2xvck5hbWU6IG51bGwsIHByaWNlOiBudWxsLCBzaXplOiBcIlwiIH0gKTtcclxuICAgIGNvbnN0IFsgc2hvd0NsZWFyLCBzZXRTaG93Q2xlYXIgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBzaG93VmFyaWF0aW9uUHJpY2UsIHNldFNob3dWYXJpYXRpb25QcmljZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBbIG1heFByaWNlLCBzZXRNYXhQcmljZSBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgbWluUHJpY2UsIHNldE1pblByaWNlIF0gPSB1c2VTdGF0ZSggOTk5OTkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gOTk5OTk7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgIHNldFZhcmlhdGlvbkdyb3VwKCBwcm9kdWN0LnZhcmlhbnRzLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgY3VyLnNpemUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBjdXIucHJpY2UgKSBtaW4gPSBjdXIucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgY3VyLnByaWNlICkgbWF4ID0gY3VyLnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgWyBwcm9kdWN0IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICAgICAgc2V0UXR5KCAxICk7XHJcbiAgICB9LCBbIHJvdXRlci5xdWVyeS5zbHVnIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHJlZnJlc2hTZWxlY3RhYmxlR3JvdXAoKTtcclxuICAgIH0sIFsgdmFyaWF0aW9uR3JvdXAsIHNlbGVjdGVkVmFyaWFudCBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Q2xlYXIoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yIHx8IHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/IHRydWUgOiBmYWxzZSApO1xyXG4gICAgICAgIHNldFNob3dWYXJpYXRpb25QcmljZSggKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApID8gdHJ1ZSA6IGZhbHNlICk7XHJcbiAgICAgICAgbGV0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC1kZXRhaWxzLXRvcCAudmFyaWF0aW9uLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgaWYgKCB0b2dnbGUgKSB7XHJcbiAgICAgICAgICAgIGlmICggKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApICYmIHRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoICdjb2xsYXBzZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAoICEoIHNlbGVjdGVkVmFyaWFudC5jb2xvciAmJiBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgKSAmJiAhdG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyggJ2NvbGxhcHNlZCcgKSApIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBzZWxlY3RlZFZhcmlhbnQgXSApXHJcblxyXG4gICAgZnVuY3Rpb24gb25XaXNobGlzdENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb1dpc2hsaXN0KCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goICcvcGFnZXMvd2lzaGxpc3QnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hTZWxlY3RhYmxlR3JvdXAgKCkge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyYXkgPSBbIC4uLnZhcmlhdGlvbkdyb3VwIF07XHJcbiAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IHZhcmlhdGlvbkdyb3VwLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICE9PSBjdXIuY29sb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbIC4uLmFjYywgY3VyIF07XHJcbiAgICAgICAgICAgIH0sIFtdICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaXplQXJyYXkoIHRlbXBBcnJheS5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYWNjLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNpemUgPT0gY3VyLnNpemUgKSAhPT0gLTEgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICB9LCBbXSApICk7XHJcblxyXG4gICAgICAgIHRlbXBBcnJheSA9IFsgLi4udmFyaWF0aW9uR3JvdXAgXTtcclxuICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5zaXplICkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkgPSB2YXJpYXRpb25Hcm91cC5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5zaXplICE9PSBjdXIuc2l6ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbG9yQXJyYXkoIHByb2R1Y3QudmFyaWFudHMucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0ZW1wQXJyYXkuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uY29sb3IgPT0gY3VyLmNvbG9yICkgPT0gLTFcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjdXIuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZTogY3VyLmNvbG9yX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjdXIuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RDb2xvciAoIGUsIGl0ZW0gKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKCBpdGVtLmNvbG9yID09IHNlbGVjdGVkVmFyaWFudC5jb2xvciApIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCB7XHJcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZFZhcmlhbnQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvbG9yTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlXHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHtcclxuICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBpdGVtLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lOiBpdGVtLmNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlXHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0U2l6ZSAoIGUgKSB7XHJcbiAgICAgICAgaWYgKCBlLnRhcmdldC52YWx1ZSA9PSBcIlwiICkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHsgLi4uc2VsZWN0ZWRWYXJpYW50LCBzaXplOiBcIlwiIH0gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHsgLi4uc2VsZWN0ZWRWYXJpYW50LCBzaXplOiBlLnRhcmdldC52YWx1ZSB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUXR5ICggY3VycmVudCApIHtcclxuICAgICAgICBzZXRRdHkoIGN1cnJlbnQgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbiAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggKCB7XHJcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgY29sb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGNvbG9yTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgc2l6ZTogXCJcIlxyXG4gICAgICAgIH0gKSApO1xyXG4gICAgICAgIHJlZnJlc2hTZWxlY3RhYmxlR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNhcnRDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ2J0bi1kaXNhYmxlZCcgKSApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Byb2R1Y3QgPSB7IC4uLnByb2R1Y3QgfTtcclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAtICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudC5jb2xvck5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudC5zaXplLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IHNlbGVjdGVkVmFyaWFudC5wcmljZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5hZGRUb0NhcnQoXHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3QsIHF0eVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscyBwcm9kdWN0LWRldGFpbHMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj57IHByb2R1Y3QubmFtZSB9PC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy12YWxcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIj57IHByb2R1Y3QucmF0aW5ncy50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5ncy10ZXh0XCI+KCB7IHByb2R1Y3QucmV2aWV3IH0gUmV2aWV3cyApPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxwPnsgcHJvZHVjdC5zaG9ydF9kZXNjIH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29sb3I6PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2IHByb2R1Y3QtbmF2LWRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQXJyYXkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYCR7KCBpdGVtLmNvbG9yID09IHNlbGVjdGVkVmFyaWFudC5jb2xvciA/ICdhY3RpdmUgJyA6ICcnICkgKyAoIGl0ZW0uZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycgKX1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBzZWxlY3RDb2xvciggZSwgaXRlbSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2l6ZVwiPlNpemU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHNlbGVjdGVkVmFyaWFudC5zaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBzZWxlY3RTaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSBzaXplPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVBcnJheS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0uc2l6ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+eyBpdGVtLnNpemUgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpemUtZ3VpZGUgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tdGgtbGlzdFwiPjwvaT5zaXplIGd1aWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGVhciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17IGNsZWFyU2VsZWN0aW9uIH0+Y2xlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYGQtbm9uZSB2YXJpYXRpb24tdG9nZ2xlICR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKX1gIH0gb25DbGljaz17IG9uVG9nZ2xlIH0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0gc3R5bGU9eyB7IG92ZXJmbG93OiAnaGlkZGVuJyB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyBzZWxlY3RlZFZhcmlhbnQucHJpY2UgPyBzZWxlY3RlZFZhcmlhbnQucHJpY2UudG9GaXhlZCggMiApIDogMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWN0aW9uLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxRdHkgY2hhbmdlUXR5PXsgb25DaGFuZ2VRdHkgfSBtYXg9eyBwcm9kdWN0LnN0b2NrIH0gYWRDbGFzcz1cIm1yLTMgbXItc20tNFwiPjwvUXR5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1wcm9kdWN0IGJ0bi1jYXJ0ICR7KCAhY2FuQWRkVG9DYXJ0KCBwcm9wcy5jYXJ0bGlzdCwgcHJvZHVjdCwgcXR5ICkgfHwgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgJiYgIXNob3dWYXJpYXRpb25QcmljZSApICkgPyAnYnRuLWRpc2FibGVkJyA6ICcnfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb25DYXJ0Q2xpY2sgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXdpc2hsaXN0IGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+R28gdG8gV2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXdpc2hsaXN0XCIgb25DbGljaz17IG9uV2lzaGxpc3RDbGljayB9PjxzcGFuPkFkZCB0byBXaXNobGlzdDwvc3Bhbj48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DYXRlZ29yeTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5Lm1hcCggKCBjYXQsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLCBxdWVyeTogeyBjYXRlZ29yeTogY2F0LnNsdWcgfSB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+eyBjYXQubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5jYXRlZ29yeS5sZW5ndGggLSAxID8gJywnIDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgc29jaWFsLWljb25zLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29jaWFsLWxhYmVsXCI+U2hhcmU6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiVHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiSW5zdGFncmFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlBpbnRlcmVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBpbnRlcmVzdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnRsaXN0OiBzdGF0ZS5jYXJ0bGlzdC5kYXRhLFxyXG4gICAgICAgIHdpc2hsaXN0OiBzdGF0ZS53aXNobGlzdC5kYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4ud2lzaGxpc3RBY3Rpb24sIC4uLmNhcnRBY3Rpb24gfSApKCBEZXRhaWxUd28gKTtcclxuIiwiaW1wb3J0IHsgTWFnbmlmaWVyIH0gZnJvbSAncmVhY3QtaW1hZ2UtbWFnbmlmaWVycyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlnaHRCb3ggZnJvbSAncmVhY3QtaW1hZ2UtbGlnaHRib3gnO1xyXG5cclxuZnVuY3Rpb24gR2FsbGVyeURlZmF1bHQgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgYWRDbGFzcyA9IFwicHJvZHVjdC1nYWxsZXJ5LXZlcnRpY2FsXCIgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBpc09wZW4sIHNldElzT3BlbiBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBbIHBob3RvSW5kZXgsIHNldFBob3RvSW5kZXggXSA9IHVzZVN0YXRlKCAwICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0ICkge1xyXG4gICAgICAgICAgICBzZXRJc09wZW4oIGZhbHNlICk7XHJcbiAgICAgICAgICAgIHNldFBob3RvSW5kZXgoIDAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbIHByb2R1Y3QgXSApXHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZU5leHRQaG90byAoKSB7XHJcbiAgICAgICAgc2V0UGhvdG9JbmRleCggKCBwaG90b0luZGV4ICsgMSApICUgcHJvZHVjdC5waWN0dXJlcy5sZW5ndGggKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlUHJldlBob3RvICgpIHtcclxuICAgICAgICBzZXRQaG90b0luZGV4KCAoIHBob3RvSW5kZXggKyBwcm9kdWN0LnBpY3R1cmVzLmxlbmd0aCAtIDEgKSAlIHByb2R1Y3QucGljdHVyZXMubGVuZ3RoICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkxpZ2h0Qm94ICgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludCggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCIucHJvZHVjdC1tYWluLWltYWdlXCIgKS5nZXRBdHRyaWJ1dGUoIFwiaW5kZXhcIiApICk7XHJcblxyXG4gICAgICAgIGlmICggIWluZGV4ICkge1xyXG4gICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzT3BlbiggdHJ1ZSApO1xyXG4gICAgICAgIHNldFBob3RvSW5kZXgoIGluZGV4ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VMaWdodEJveCAoKSB7XHJcbiAgICAgICAgc2V0SXNPcGVuKCBmYWxzZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUJnSW1hZ2UgKCBlLCBpbWFnZSwgaW5kZXggKSB7XHJcbiAgICAgICAgbGV0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnByb2R1Y3QtbWFpbi1pbWFnZSBpbWcnICk7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgaW1nc1sgaSBdLnNyYyA9IGltYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LWltYWdlLWdhbGxlcnkgLmFjdGl2ZScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtbWFpbi1pbWFnZScgKS5zZXRBdHRyaWJ1dGUoICdpbmRleCcsIGluZGV4ICk7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYHByb2R1Y3QtZ2FsbGVyeSAke2FkQ2xhc3N9YCB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1haW4taW1hZ2VcIiBpbmRleD1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtbmV3XCI+TmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtc2FsZVwiPlNhbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW91dFwiPk91dCBvZiBTdG9jazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hZ25pZmllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnBpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXJnZUltYWdlU3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgMCBdLnVybCB9IC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnVG9Nb3ZlPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VBY3RpdmF0aW9uPVwiaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yU3R5bGVBY3RpdmU9XCJjcm9zc2hhaXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0LXpvb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1pbWFnZSBwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBwcm9kdWN0LnBpY3R1cmVzWyAwIF0ud2lkdGggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsgcHJvZHVjdC5waWN0dXJlc1sgMCBdLmhlaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgcGFkZGluZ1RvcDogYCR7cHJvZHVjdC5waWN0dXJlc1sgMCBdLmhlaWdodCAvIHByb2R1Y3QucGljdHVyZXNbIDAgXS53aWR0aCAqIDEwMH0lYCB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidG4tcHJvZHVjdC1nYWxsZXJ5XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtZ2FsbGVyeVwiIG9uQ2xpY2s9eyBvcGVuTGlnaHRCb3ggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYXJyb3dzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2R1Y3Qtem9vbS1nYWxsZXJ5XCIgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1nYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucGljdHVyZXMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGBwcm9kdWN0LWdhbGxlcnktaXRlbSAkezAgPT09IGluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gIH0ga2V5PXsgcHJvZHVjdC5pZCArICctJyArIGluZGV4IH0gb25DbGljaz17IGUgPT4gY2hhbmdlQmdJbWFnZSggZSwgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgaXRlbS51cmx9YCwgaW5kZXggKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy13cmFwcGVyIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIGluZGV4IF0udXJsIH0gYWx0PVwicHJvZHVjdCBiYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPExpZ2h0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5TcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnBpY3R1cmVzWyBwaG90b0luZGV4IF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QucGljdHVyZXNbICggcGhvdG9JbmRleCArIDEgKSAlIHByb2R1Y3QucGljdHVyZXMubGVuZ3RoIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QucGljdHVyZXNbICggcGhvdG9JbmRleCArIHByb2R1Y3QucGljdHVyZXMubGVuZ3RoIC0gMSApICUgcHJvZHVjdC5waWN0dXJlcy5sZW5ndGggXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlUmVxdWVzdD17IGNsb3NlTGlnaHRCb3ggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVQcmV2UmVxdWVzdD17IG1vdmVOZXh0UGhvdG8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVOZXh0UmVxdWVzdD17IG1vdmVQcmV2UGhvdG8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdE1vZGFsU3R5bGU9eyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMDQxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBHYWxsZXJ5RGVmYXVsdCApOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gSW5mb09uZSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBzZXRSYXRpbmcgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuYWN0aXZlJyApICkge1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCAnLmFjdGl2ZScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJzIHNlbGVjdGVkVGFiQ2xhc3NOYW1lPVwic2hvd1wiIHNlbGVjdGVkVGFiUGFuZWxDbGFzc05hbWU9XCJhY3RpdmUgc2hvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy10YWJcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj4gRGVzY3JpcHRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj4gQWRkaXRpb25hbCBpbmZvcm1hdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNoaXBwaW5nICYgUmV0dXJuczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiID5SZXZpZXdzICh7IHByb2R1Y3QucmV2aWV3IH0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiLXBhbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2MtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlByb2R1Y3QgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGItMVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBvZGlvLiBRdWlzcXVlIHZvbHV0cGF0IG1hdHRpcyBlcm9zLiBOdWxsYW0gbWFsZXN1YWRhIGVyYXQgdXQgdHVycGlzLiBTdXNwZW5kaXNzZSB1cm5hIHZpdmVycmEgbm9uLCBzZW1wZXIgc3VzY2lwaXQsIHBvc3VlcmUgYSwgcGVkZS4gRG9uZWMgbmVjIGp1c3RvIGVnZXQgZmVsaXMgZmFjaWxpc2lzIGZlcm1lbnR1bS4gQWxpcXVhbSBwb3J0dGl0b3IgbWF1cmlzIHNpdCBhbWV0IG9yY2kuIEFlbmVhbiBkaWduaXNzaW0gcGVsbGVudGVzcXVlIGZlbGlzLiBQaGFzZWxsdXMgdWx0cmljZXMgbnVsbGEgcXVpcyBuaWJoLiBRdWlzcXVlIGEgbGVjdHVzLiBEb25lYyBjb25zZWN0ZXR1ZXIgbGlndWxhIHZ1bHB1dGF0ZSBzZW0gdHJpc3RpcXVlIGN1cnN1cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5OdW5jIG5lYyBwb3J0dGl0b3IgdHVycGlzLiBJbiBldSByaXN1cyBlbmltLiBJbiB2aXRhZSBtb2xsaXMgZWxpdC4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Vml2YW11cyBmaW5pYnVzIHZlbCBtYXVyaXMgdXQgdmVoaWN1bGEuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TnVsbGFtIGEgbWFnbmEgcG9ydHRpdG9yLCBkaWN0dW0gcmlzdXMgbmVjLCBmYXVjaWJ1cyBzYXBpZW4uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgb2Rpby4gUXVpc3F1ZSB2b2x1dHBhdCBtYXR0aXMgZXJvcy4gTnVsbGFtIG1hbGVzdWFkYSBlcmF0IHV0IHR1cnBpcy4gU3VzcGVuZGlzc2UgdXJuYSB2aXZlcnJhIG5vbiwgc2VtcGVyIHN1c2NpcGl0LCBwb3N1ZXJlIGEsIHBlZGUuIERvbmVjIG5lYyBqdXN0byBlZ2V0IGZlbGlzIGZhY2lsaXNpcyBmZXJtZW50dW0uIEFsaXF1YW0gcG9ydHRpdG9yIG1hdXJpcyBzaXQgYW1ldCBvcmNpLiBBZW5lYW4gZGlnbmlzc2ltIHBlbGxlbnRlc3F1ZSBmZWxpcy4gUGhhc2VsbHVzIHVsdHJpY2VzIG51bGxhIHF1aXMgbmliaC4gUXVpc3F1ZSBhIGxlY3R1cy4gRG9uZWMgY29uc2VjdGV0dWVyIGxpZ3VsYSB2dWxwdXRhdGUgc2VtIHRyaXN0aXF1ZSBjdXJzdXMuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYi1wYW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5JbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgb2Rpby4gUXVpc3F1ZSB2b2x1dHBhdCBtYXR0aXMgZXJvcy4gTnVsbGFtIG1hbGVzdWFkYSBlcmF0IHV0IHR1cnBpcy4gU3VzcGVuZGlzc2UgdXJuYSB2aXZlcnJhIG5vbiwgc2VtcGVyIHN1c2NpcGl0LCBwb3N1ZXJlIGEsIHBlZGUuIERvbmVjIG5lYyBqdXN0byBlZ2V0IGZlbGlzIGZhY2lsaXNpcyBmZXJtZW50dW0uIEFsaXF1YW0gcG9ydHRpdG9yIG1hdXJpcyBzaXQgYW1ldCBvcmNpLiA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB0LTJcIj5GYWJyaWMgJiBjYXJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmF1eCBzdWVkZSBmYWJyaWM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Hb2xkIHRvbmUgbWV0YWwgaG9vcCBoYW5kbGVzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJJIGJyYW5kaW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U25ha2UgcHJpbnQgdHJpbSBpbnRlcmlvciA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZGp1c3RhYmxlIGNyb3NzIGJvZHkgc3RyYXA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gSGVpZ2h0OiAzMWNtOyBXaWR0aDogMzJjbTsgRGVwdGg6IDEyY207IEhhbmRsZSBEcm9wOiA2MWNtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNpemU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+b25lIHNpemU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItcGFuZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGVsaXZlcnkgJiByZXR1cm5zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGRlbGl2ZXIgdG8gb3ZlciAxMDAgY291bnRyaWVzIGFyb3VuZCB0aGUgd29ybGQuIEZvciBmdWxsIGRldGFpbHMgb2YgdGhlIGRlbGl2ZXJ5IG9wdGlvbnMgd2Ugb2ZmZXIsIHBsZWFzZSB2aWV3IG91ciA8QUxpbmsgaHJlZj1cIiNcIj5EZWxpdmVyeSBpbmZvcm1hdGlvbjwvQUxpbms+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgaG9wZSB5b3XigJlsbCBsb3ZlIGV2ZXJ5IHB1cmNoYXNlLCBidXQgaWYgeW91IGV2ZXIgbmVlZCB0byByZXR1cm4gYW4gaXRlbSB5b3UgY2FuIGRvIHNvIHdpdGhpbiBhIG1vbnRoIG9mIHJlY2VpcHQuIEZvciBmdWxsIGRldGFpbHMgb2YgaG93IHRvIG1ha2UgYSByZXR1cm4sIHBsZWFzZSB2aWV3IG91ciA8QUxpbmsgaHJlZj1cIiNcIj5SZXR1cm5zIGluZm9ybWF0aW9uPC9BTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItcGFuZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZXZpZXdzICgyKTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxBTGluayBocmVmPVwiI1wiPlNhbWFudGEgSi48L0FMaW5rPjwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXZpZXctZGF0ZSBtYi0xXCI+NiBkYXlzIGFnbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R29vZCwgcGVyZmVjdCBzaXplPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIER1Y2ltdXMgY3VtIGRvbG9yZXMgYXNzdW1lbmRhIGFzcGVyaW9yZXMgZmFjaWxpcyBwb3JybyByZXByZWhlbmRlcml0IGFuaW1pIGN1bHBhIGF0cXVlIGJsYW5kaXRpaXMgY29tbW9kaSBwZXJzcGljaWF0aXMgZG9sb3JlbXF1ZSwgcG9zc2ltdXMsIGV4cGxpY2FibywgYXV0ZW0gZnVnaXQgYmVhdGFlIHF1YWUgdm9sdXB0YXMhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10aHVtYnMtdXBcIj48L2k+SGVscGZ1bCAoMik8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImljb24tdGh1bWJzLWRvd25cIj48L2k+VW5oZWxwZnVsICgwKTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48QUxpbmsgaHJlZj1cIiNcIj5Kb2huIERvZTwvQUxpbms+PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy12YWxcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0XCI+eyBwcm9kdWN0LnJhdGluZ3MudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXZpZXctZGF0ZSBtYi0xXCI+NSBkYXlzIGFnbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlZlcnkgZ29vZDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlZCwgbW9sZXN0aWFzLCB0ZW1wb3JlPyBFeCBkb2xvciBlc3NlIGl1cmUgaGljIHZlbmlhbSBsYWJvcnVtIGJsYW5kaXRpaXMgbGF1ZGFudGl1bSBpc3RlIGFtZXQuIEN1bSBub24gdm9sdXB0YXRlIGVvcyBlbmltLCBhYiBjdW1xdWUgbmFtLCBtb2RpLCBxdWFzIGl1cmUgaWxsdW0gcmVwZWxsZW5kdXMsIGJsYW5kaXRpaXMgcGVyc3BpY2lhdGlzIGJlYXRhZSE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJpY29uLXRodW1icy11cFwiPjwvaT5IZWxwZnVsICgwKTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10aHVtYnMtZG93blwiPjwvaT5VbmhlbHBmdWwgKDApPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBseVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwcGVyIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS1zaW1wbGUgdGV4dC1sZWZ0IHRleHQtbm9ybWFsXCI+QWRkIGEgUmV2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3VyIGVtYWlsIGFkZHJlc3Mgd2lsbCBub3QgYmUgcHVibGlzaGVkLiBSZXF1aXJlZCBmaWVsZHMgYXJlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJrZWQgKjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwidGV4dC1kYXJrXCI+WW91ciByYXRpbmcgKiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZy1zdGFycyBzZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFsgMSwgMiwgMywgNCwgNSBdLm1hcCggKCBudW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGBzdGFyLSR7bnVtfWAgfSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBzZXRSYXRpbmcgfSBrZXk9eyAnc3Rhci0nICsgaW5kZXggfT57IG51bSB9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJhdGluZ1wiIGlkPVwicmF0aW5nXCIgcmVxdWlyZWQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgZGlzcGxheTogJ25vbmUnIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlJhdGXigKY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5QZXJmZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+R29vZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkF2ZXJhZ2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Ob3QgdGhhdCBiYWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5WZXJ5IHBvb3I8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJlcGx5LW1lc3NhZ2VcIiBjb2xzPVwiMzBcIiByb3dzPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0yXCIgcGxhY2Vob2xkZXI9XCJDb21tZW50ICpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicmVwbHktbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcGx5LW5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWUgKlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZXBseS1lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcGx5LWVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCAqXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrYm94IGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWduaW4tcmVtZW1iZXJcIiBuYW1lPVwic2lnbmluLXJlbWVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbCBtbC0zXCIgaHRtbEZvcj1cInNpZ25pbi1yZW1lbWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBteSBuYW1lLCBlbWFpbCwgYW5kIHdlYnNpdGUgaW4gdGhpcyBicm93c2VyIGZvciB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgdGltZSBJIGNvbW1lbnQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIEluZm9PbmUgKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHVjdFNpeCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1zaXgnO1xyXG5pbXBvcnQgT3dsQ2Fyb3VzZWwgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL293bC1jYXJvdXNlbCc7XHJcblxyXG5pbXBvcnQgeyBtYWluU2xpZGVyOCB9IGZyb20gJ34vdXRpbHMvZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBSZWxhdGVkUHJvZHVjdHNPbmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyIG1iLTRcIj5Zb3UgTWF5IEFsc28gTGlrZTwvaDI+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5sb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1zaW1wbGUgY2Fyb3VzZWwtZXF1YWwtaGVpZ2h0IGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMteGwtNSBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMtMlwiIGlzVGhlbWU9eyBmYWxzZSB9IG9wdGlvbnM9eyBtYWluU2xpZGVyOCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDIsIDMsIDQgXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIiBrZXk9eyBpbmRleCB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLWVxdWFsLWhlaWdodCBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMteHMtMiBjb2xzLTFcIiBpc1RoZW1lPXsgZmFsc2UgfSBvcHRpb25zPXsgbWFpblNsaWRlcjggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAoIHByb2R1Y3QsIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFNpeCBwcm9kdWN0PXsgcHJvZHVjdCB9IGtleT17IGluZGV4IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIFJlbGF0ZWRQcm9kdWN0c09uZSApOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVCB9IGZyb20gJ34vc2VydmVyL3F1ZXJpZXMnO1xyXG5cclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvYnJlYWRjcnVtYic7XHJcbmltcG9ydCBHYWxsZXJ5RGVmYXVsdCBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9nYWxsZXJ5L2dhbGxlcnktZGVmYXVsdCc7XHJcbmltcG9ydCBEZXRhaWxUd28gZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvZGV0YWlscy9kZXRhaWwtdHdvJztcclxuaW1wb3J0IEluZm9PbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvaW5mby10YWJzL2luZm8tb25lJztcclxuaW1wb3J0IFJlbGF0ZWRQcm9kdWN0c09uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9yZWxhdGVkL3JlbGF0ZWQtb25lJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDZW50ZXJlZCAoKSB7XHJcbiAgICBjb25zdCBzbHVnID0gdXNlUm91dGVyKCkucXVlcnkuc2x1ZztcclxuICAgIGlmICggIXNsdWcgKSByZXR1cm4gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoIEdFVF9QUk9EVUNULCB7IHZhcmlhYmxlczogeyBzbHVnIH0gfSApO1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47IC8vIFJlbmRlciBhbiBlcnJvciBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdC5zaW5nbGU7XHJcbiAgICBjb25zdCByZWxhdGVkID0gZGF0YSAmJiBkYXRhLnByb2R1Y3QucmVsYXRlZDtcclxuICAgIGNvbnN0IHByZXYgPSBkYXRhICYmIGRhdGEucHJvZHVjdC5wcmV2O1xyXG4gICAgY29uc3QgbmV4dCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0Lm5leHQ7XHJcblxyXG4gICAgaWYgKCBlcnJvciApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYiBwcmV2PXsgcHJldiB9IG5leHQ9eyBuZXh0IH0gY3VycmVudD1cIkNlbnRlcmVkXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNrZWxldG9uLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcm93IHNrZWwtcHJvLXNpbmdsZSAke2xvYWRpbmcgPyAnJyA6ICdsb2FkZWQnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvZHVjdC1nYWxsZXJ5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FsbGVyeURlZmF1bHQgcHJvZHVjdD17IHByb2R1Y3QgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktc3VtbWFyeSByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktc3VtbWFyeTEgbXQtMiBtdC1tZC0wXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxUd28gcHJvZHVjdD17IHByb2R1Y3QgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByby10YWJzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb09uZSBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UmVsYXRlZFByb2R1Y3RzT25lIHByb2R1Y3RzPXsgcmVsYXRlZCB9IGxvYWRpbmc9eyBsb2FkaW5nIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSApKCBQcm9kdWN0Q2VudGVyZWQgKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZS1saWdodGJveFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW93bC1jYXJvdXNlbDJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlkZS10b2dnbGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRhYnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=