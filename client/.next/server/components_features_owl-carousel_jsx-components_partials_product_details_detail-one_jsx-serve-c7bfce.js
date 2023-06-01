exports.id = "components_features_owl-carousel_jsx-components_partials_product_details_detail-one_jsx-serve-c7bfce";
exports.ids = ["components_features_owl-carousel_jsx-components_partials_product_details_detail-one_jsx-serve-c7bfce"];
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

/***/ "./components/features/qty.jsx":
/*!*************************************!*\
  !*** ./components/features/qty.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\qty.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function Qty(props) {
  const {
    value = 1,
    adClass = "",
    max = 10000,
    changeQty
  } = props;
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrent(value);
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    changeQty && changeQty(current);
  }, [current]);

  function increment() {
    if (max <= 0 || current >= max) return;
    setCurrent(current + 1);
  }

  function decrement() {
    if (current > 1) {
      setCurrent(current - 1);
    }
  }

  function changeCurrent(e) {
    if (parseInt(e.currentTarget.value) < max) {
      setCurrent(parseInt(e.currentTarget.value));
    }
  }

  return __jsx("div", {
    className: `product-details-quantity ${adClass}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "input-group input-spinner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("button", {
    style: {
      minWidth: '26px'
    },
    className: "btn btn-decrement btn-spinner",
    onClick: decrement,
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-minus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }))), __jsx("input", {
    type: "number",
    className: "form-control text-center",
    min: "1",
    max: max,
    value: current,
    required: true,
    onChange: changeCurrent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "input-group-append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("button", {
    style: {
      minWidth: '26px'
    },
    className: "btn btn-increment btn-spinner",
    type: "button",
    onClick: increment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Qty);

/***/ }),

/***/ "./components/partials/product/details/detail-one.jsx":
/*!************************************************************!*\
  !*** ./components/partials/product/details/detail-one.jsx ***!
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
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\product\\details\\detail-one.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function DetailOne(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    product
  } = props;
  const {
    0: qty,
    1: setQty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: qty2,
    1: setQty2
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
    window.addEventListener('scroll', scrollHandler, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
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
    setQty2(1);
  }, [router.query.slug]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    refreshSelectableGroup();
  }, [variationGroup, selectedVariant]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    scrollHandler();
  }, [router.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setShowClear(selectedVariant.color || selectedVariant.size != "" ? true : false);
    setShowVariationPrice(selectedVariant.color && selectedVariant.size != "" ? true : false);
    let toggle = ref.current.querySelector('.variation-toggle');

    if (toggle) {
      if (selectedVariant.color && selectedVariant.size != "" && toggle.classList.contains('collapsed')) {
        toggle.click();
      }

      if (!(selectedVariant.color && selectedVariant.size != "") && !toggle.classList.contains('collapsed')) {
        toggle.click();
      }
    }
  }, [selectedVariant]);

  function scrollHandler() {
    if (router.pathname.includes('/product/default')) {
      let stickyBar = ref.current.querySelector('.sticky-bar');

      if (stickyBar.classList.contains('d-none') && ref.current.getBoundingClientRect().bottom < 0) {
        stickyBar.classList.remove('d-none');
        return;
      }

      if (!stickyBar.classList.contains('d-none') && ref.current.getBoundingClientRect().bottom > 0) {
        stickyBar.classList.add('d-none');
      }
    }
  }

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

  function onChangeQty2(current) {
    setQty2(current);
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

  function onCartClick(e, index = 0) {
    e.preventDefault();
    if (e.currentTarget.classList.contains('btn-disabled')) return;

    let newProduct = _objectSpread({}, product);

    if (product.variants.length > 0) {
      newProduct = _objectSpread(_objectSpread({}, product), {}, {
        name: product.name + ' - ' + selectedVariant.colorName + ', ' + selectedVariant.size,
        price: selectedVariant.price
      });
    }

    props.addToCart(newProduct, index == 0 ? qty : qty2);
  }

  if (!product) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 16
      }
    });
  }

  return __jsx("div", {
    className: "product-details",
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, product.name), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 252,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, "( ", product.review, " Reviews )")), product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, minPrice == maxPrice ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 37
    }
  }, "$", product.price.toFixed(2)) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 33
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, product.short_desc)), product.variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 29
    }
  }, "Color:"), __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
      lineNumber: 296,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 29
    }
  }, "Size:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 311,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 37
    }
  }, "Select a size"), sizeArray.map((item, index) => __jsx("option", {
    value: item.size,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 45
    }
  }, item.size)))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "size-guide mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-th-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 33
    }
  }), "size guide"), showClear ? __jsx("a", {
    href: "#",
    onClick: clearSelection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 37
    }
  }, "clear") : ""), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
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
      lineNumber: 340,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: `d-none variation-toggle ${toggleState.toLowerCase()}`,
    onClick: onToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
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
      lineNumber: 342,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 41
    }
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0))))) : "", __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "qty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  }, "Qty:"), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_5__.default, {
    changeQty: onChangeQty,
    max: product.stock,
    value: qty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "product-details-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.canAddToCart)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: e => onCartClick(e, 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, "add to cart")), __jsx("div", {
    className: "details-action-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isInWishlist)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 113
    }
  }, "Go to Wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 106
    }
  }, "Add to Wishlist")))), __jsx("div", {
    className: "product-details-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat w-100 text-truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 21
    }
  }, "Category:"), product.category.map((cat, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
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
      lineNumber: 384,
      columnNumber: 33
    }
  }, cat.name), index < product.category.length - 1 ? ',' : ''))), __jsx("div", {
    className: "social-icons social-icons-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "social-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 21
    }
  }, "Share:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "sticky-bar d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 25
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    alt: "product",
    width: product.sm_pictures[0].width,
    height: product.sm_pictures[0].height,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 37
    }
  }))), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 33
    }
  }, product.name))), __jsx("div", {
    className: "col-6 justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  }, selectedVariant.color && selectedVariant.size != "" ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 37
    }
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0) : product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 45
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 45
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 53
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 53
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 49
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_5__.default, {
    changeQty: onChangeQty2,
    max: product.stock,
    value: qty2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "product-details-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.canAddToCart)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: e => onCartClick(e, 1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 37
    }
  }, "add to cart")), (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isInWishlist)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 41
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 125
    }
  }, "Go to Wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 41
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 118
    }
  }, "Add to Wishlist"))))))));
}

const mapStateToProps = state => {
  return {
    cartlist: state.cartlist.data,
    wishlist: state.wishlist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions))(DetailOne));

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

/***/ "./server/queries.js":
/*!***************************!*\
  !*** ./server/queries.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_PRODUCTS": function() { return /* binding */ GET_PRODUCTS; },
/* harmony export */   "GET_PRODUCT": function() { return /* binding */ GET_PRODUCT; },
/* harmony export */   "GET_ELEMENT_PRODUCTS": function() { return /* binding */ GET_ELEMENT_PRODUCTS; },
/* harmony export */   "GET_ELEMENT_POSTS": function() { return /* binding */ GET_ELEMENT_POSTS; },
/* harmony export */   "GET_POSTS_BY_PAGE": function() { return /* binding */ GET_POSTS_BY_PAGE; },
/* harmony export */   "GET_POST": function() { return /* binding */ GET_POST; },
/* harmony export */   "GET_HOME_DATA": function() { return /* binding */ GET_HOME_DATA; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query products($searchTerm: String, $color: [String], $size: [String], $brand: [String], $minPrice: Int, $maxPrice: Int, $category: String, $rating: [String], $sortBy: String, $page: Int = 1, $perPage: Int, $list: Boolean = false, $from: Int = 0) {
        products(demo: ${"1"}, searchTerm: $searchTerm, color: $color, size: $size, brand: $brand, minPrice: $minPrice, maxPrice: $maxPrice, category: $category, rating: $rating, sortBy: $sortBy, page: $page, perPage: $perPage, list: $list, from: $from) {
            data {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                short_desc @include(if: $list)
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }
            totalCount
        }
    }
`;
const GET_PRODUCT = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query product($slug: String!, $onlyData: Boolean = false) {
        product(demo: ${"1"}, slug: $slug, onlyData: $onlyData) {
            single {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                short_desc
                category {
                    name
                    slug
                }
                brands {
                    name
                    slug
                }
                pictures {
                    width
                    height
                    url
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }

            prev @skip(if: $onlyData) {
                slug
                name
                sm_pictures {
                    width
                    height
                    url
                }
            }

            next @skip(if: $onlyData) {
                slug
                name
                sm_pictures {
                    width
                    height
                    url
                }
            }

            related @skip(if: $onlyData) {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }
        }
    }
`;
const GET_ELEMENT_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query elementProducts {
        elementProducts {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
        }
    }
`;
const GET_ELEMENT_POSTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query elementPosts {
        elementPosts {
            id
            author
            comments
            content
            date
            slug
            title
            type
            blog_categories {
                name
                slug
            }
            image {
                width
                height
                url
            }
        }
    }
`;
const GET_POSTS_BY_PAGE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query postsByPage ($page: String!, $category: String) {
        postsByPage(page: $page, category: $category) {
            data {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            categories {
                name
                slug
                count
            }
        }
    }
`;
const GET_POST = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query post($slug: String!) {
        post(slug: $slug) {
            single {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            prev {
                id
                slug
                title
            }

            next {
                id
                slug
                title
            }

            related {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            categories {
                name
                slug
                count
            }
        }
    }
`;
const GET_HOME_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query homeData {
        homeData(demo: ${"1"}) {
            products {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }

            posts {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }
        }
    }
`;

/***/ }),

/***/ "./store/cart.js":
/*!***********************!*\
  !*** ./store/cart.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; },
/* harmony export */   "cartSaga": function() { return /* binding */ cartSaga; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const actionTypes = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  refreshStore: "REFRESH_STORE",
  updateCart: "UPDATE_CART"
};
const initialState = {
  data: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addToCart:
      var findIndex = state.data.findIndex(item => item.id == action.payload.product.id);
      let qty = action.payload.qty ? action.payload.qty : 1;

      if (findIndex !== -1 && action.payload.product.variants.length > 0) {
        findIndex = state.data.findIndex(item => item.name == action.payload.product.name);
      }

      if (findIndex !== -1) {
        return {
          data: [...state.data.reduce((acc, product, index) => {
            if (findIndex == index) {
              acc.push(_objectSpread(_objectSpread({}, product), {}, {
                qty: product.qty + qty,
                sum: (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price) * (product.qty + qty)
              }));
            } else {
              acc.push(product);
            }

            return acc;
          }, [])]
        };
      } else {
        return {
          data: [...state.data, _objectSpread(_objectSpread({}, action.payload.product), {}, {
            qty: qty,
            price: action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price,
            sum: qty * (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price)
          })]
        };
      }

    case actionTypes.removeFromCart:
      return {
        data: [...state.data.filter(item => {
          if (item.id !== action.payload.product.id) return true;
          if (item.name !== action.payload.product.name) return true;
          return false;
        })]
      };

    case actionTypes.updateCart:
      return {
        data: [...action.payload.cartItems]
      };

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

const actions = {
  addToCart: (product, qty = 1) => ({
    type: actionTypes.addToCart,
    payload: {
      product: product,
      qty: qty
    }
  }),
  removeFromCart: product => ({
    type: actionTypes.removeFromCart,
    payload: {
      product: product
    }
  }),
  updateCart: cartItems => ({
    type: actionTypes.updateCart,
    payload: {
      cartItems: cartItems
    }
  })
};
function* cartSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToCart, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Cart");
  });
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.removeFromCart, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product removed from Cart");
  });
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.updateCart, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Cart updated successfully");
  });
}
const persistConfig = {
  keyPrefix: "molla-",
  key: "cart",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, cartReducer));

/***/ }),

/***/ "./store/compare.js":
/*!**************************!*\
  !*** ./store/compare.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; },
/* harmony export */   "compareSaga": function() { return /* binding */ compareSaga; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);




const actionTypes = {
  addToCompare: 'ADD_TO_COMPARE',
  removeFromCompare: 'REMOVE_FROM_COMPARE',
  clearAllFromCompare: 'CLEAR_ALL_FROM_COMPARE',
  refreshStore: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addToCompare:
      var findIndex = state.data.findIndex(item => item.id == action.payload.product.id);

      if (findIndex == -1) {
        return {
          data: [...state.data, action.payload.product]
        };
      }

    case actionTypes.removeFromCompare:
      return {
        data: state.data.filter(item => item.id != action.payload.product.id)
      };

    case actionTypes.clearAllFromCompare:
      return initialState;

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

const actions = {
  addToCompare: product => ({
    type: actionTypes.addToCompare,
    payload: {
      product
    }
  }),
  removeFromCompare: product => ({
    type: actionTypes.removeFromCompare,
    payload: {
      product
    }
  }),
  clearAllFromCompare: () => ({
    type: actionTypes.clearAllFromCompare,
    payload: {}
  }),
  refreshStore: () => ({
    type: actionTypes.refreshStore,
    payload: {}
  })
};
function* compareSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToCompare, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Compare");
  });
}
const persistConfig = {
  keyPrefix: 'molla-',
  key: 'compare',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, compareReducer));

/***/ }),

/***/ "./store/demo.js":
/*!***********************!*\
  !*** ./store/demo.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  showQuick: 'SHOW_QUICKVIEW',
  hideQuick: 'HIDE_QUICKVIEW',
  showVideo: 'SHOW_VIDEO',
  hideVideo: 'HIDE_VIDEO',
  refreshStore: 'REFRESH_STORE'
};
let initialState = {
  current: "1",
  single: null,
  quickShow: false,
  videoShow: false
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.showQuick:
      return _objectSpread(_objectSpread({}, state), {}, {
        single: action.payload.slug,
        quickShow: true
      });

    case actionTypes.hideQuick:
      return _objectSpread(_objectSpread({}, state), {}, {
        quickShow: false,
        single: null
      });

    case actionTypes.showVideo:
      return _objectSpread(_objectSpread({}, state), {}, {
        videoShow: true
      });

    case actionTypes.hideVideo:
      return _objectSpread(_objectSpread({}, state), {}, {
        videoShow: false
      });

    case actionTypes.refreshStore:
      return {
        current: action.payload.current,
        single: null,
        quickShow: false,
        videoShow: false
      };

    default:
      return state;
  }
};

const actions = {
  refreshStore: current => ({
    type: actionTypes.refreshStore,
    payload: {
      current: current
    }
  }),
  showQuickView: slug => ({
    type: actionTypes.showQuick,
    payload: {
      slug: slug
    }
  }),
  hideQuick: () => ({
    type: actionTypes.hideQuick
  }),
  showVideo: () => ({
    type: actionTypes.showVideo
  }),
  hideVideo: () => ({
    type: actionTypes.hideVideo
  })
};
const persistConfig = {
  keyPrefix: "molla-",
  key: "demo",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, demoReducer));

/***/ }),

/***/ "./store/wishlist.js":
/*!***************************!*\
  !*** ./store/wishlist.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; },
/* harmony export */   "wishlistSaga": function() { return /* binding */ wishlistSaga; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);




const actionTypes = {
  addToWishlist: 'ADD_TO_WISHLIST',
  removeFromWishlist: 'REMOVE_FROM_WISHLIST',
  refreshStore: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addToWishlist:
      var findIndex = state.data.findIndex(item => item.id === action.payload.product.id);

      if (findIndex == -1) {
        return {
          data: [...state.data, action.payload.product]
        };
      }

    case actionTypes.removeFromWishlist:
      return {
        data: state.data.filter(item => item.id !== action.payload.product.id)
      };

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

const actions = {
  addToWishlist: product => ({
    type: actionTypes.addToWishlist,
    payload: {
      product
    }
  }),
  removeFromWishlist: product => ({
    type: actionTypes.removeFromWishlist,
    payload: {
      product
    }
  })
};
function* wishlistSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToWishlist, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Wishlist");
  });
}
const persistConfig = {
  keyPrefix: "molla-",
  key: 'wishlist',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, wishlistReducer));

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartPriceTotal": function() { return /* binding */ cartPriceTotal; },
/* harmony export */   "cartQtyTotal": function() { return /* binding */ cartQtyTotal; },
/* harmony export */   "isInCart": function() { return /* binding */ isInCart; },
/* harmony export */   "canAddToCart": function() { return /* binding */ canAddToCart; },
/* harmony export */   "isInWishlist": function() { return /* binding */ isInWishlist; },
/* harmony export */   "isInCompare": function() { return /* binding */ isInCompare; },
/* harmony export */   "isSafariBrowser": function() { return /* binding */ isSafariBrowser; },
/* harmony export */   "isEdgeBrowser": function() { return /* binding */ isEdgeBrowser; },
/* harmony export */   "getIndex": function() { return /* binding */ getIndex; },
/* harmony export */   "catFilter": function() { return /* binding */ catFilter; },
/* harmony export */   "attrFilter": function() { return /* binding */ attrFilter; },
/* harmony export */   "scrollToPageContent": function() { return /* binding */ scrollToPageContent; },
/* harmony export */   "parallax": function() { return /* binding */ parallax; },
/* harmony export */   "countTo": function() { return /* binding */ countTo; },
/* harmony export */   "safeContent": function() { return /* binding */ safeContent; }
/* harmony export */ });
/**
 * get total Price of products in cart.
 * @param { Array } cartItems 
 * @return { Float } totalPrice
 */
const cartPriceTotal = cartItems => {
  return cartItems.reduce((acc, cur) => {
    return acc + cur.sum;
  }, 0);
};
/**
 * get number of products in cart
 * @param { Array } cartItems 
 * @return { Integer } numbers of cart items in cartlist
 */

const cartQtyTotal = cartItems => {
  return cartItems.reduce((acc, cur) => {
    return acc + parseInt(cur.qty, 10);
  }, 0);
};
/**
 * Decide where product is in cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 */

const isInCart = (cartItems, product) => {
  return cartItems.find(item => item.id == product.id) ? true : false;
};
/**
 * Confirm if product could be added to cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 * @param { Number } qty 
 */

const canAddToCart = (cartItems, product, qty) => {
  let find = cartItems.find(item => item.id == product.id);

  if (find) {
    if (product.stock == 0 || product.stock < find.qty + qty) return false;else return true;
  } else {
    if (product.stock == 0 || product.stock < qty) return false;else return true;
  }
};
/**
 * 
 * @param {Array} wishlist 
 * @param {Object} product 
 */

const isInWishlist = (wishlist, product) => {
  return product && wishlist.findIndex(item => item.slug == product.slug) > -1;
};
/**
 * 
 * @param {Array} compare 
 * @param {Object} product 
 */

const isInCompare = (compare, product) => {
  return product && compare.findIndex(item => item.slug == product.slug) > -1;
};
/**
 * utils to detect safari browser
 * @return {bool}
 */

const isSafariBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1) return true;
  return false;
};
/**
 * utils to detect Edge browser
 * @return {bool}
 */

const isEdgeBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Edge") > -1) return true;
  return false;
};
/**
 * get index of the element
 * @param {Element} element 
 */

const getIndex = function (element) {
  let children = element.parentElement.children;

  for (let i = 0; i < children.length; i++) {
    if (element == children[i]) return i;
  }

  return 0;
};
/**
 * filter products by category.
 * @param {Array} products 
 * @param {Array} category 
 * @param {Boolean} flag 
 */

const catFilter = function (products = [], category, flag = false) {
  if (category[0] === 'All') return products;
  return products.filter(item => {
    for (let i = 0; i < category.length; i++) {
      if (item.category.find(cat => cat.slug == category[i])) {
        if (!flag) return true;
      } else {
        if (flag) return false;
      }
    }

    if (flag) return true;else return false;
  });
};
/**
 * filter products by attribute
 * @param {Array} products 
 * @param {String} attr 
 */

const attrFilter = function (products = [], attr) {
  // if(products)
  return products.filter(item => {
    if (attr === 'all') {
      return true;
    }

    if (attr === 'sale' && item.sale_price) {
      return true;
    }

    if (attr === 'rated' && item.ratings > 3) {
      return true;
    }

    if (attr === 'until' && item.until) {
      return true;
    }

    return item[attr] === true;
  });
};
/**
 * Scrolling to Page content section
 */

const scrollToPageContent = function () {
  let to = document.querySelector('.page-content').offsetTop - 74;

  if (isSafariBrowser() || isEdgeBrowser()) {
    let pos = window.pageYOffset;
    let timerId = setInterval(() => {
      if (pos <= to) clearInterval(timerId);else {
        window.scrollBy(0, -120);
        pos -= 120;
      }
    }, 1);
  } else {
    window.scrollTo({
      top: to,
      behavior: 'smooth'
    });
  }
};
/**
 * utils to make background parallax
 */

const parallax = () => {
  let parallax = document.querySelectorAll('.bg-parallax');

  for (let i = 0; i < parallax.length; i++) {
    let y = 0;

    if (parallax[i].classList.contains('header-parallax')) {
      y = (10 - window.pageYOffset) * 47 / 900 + 50;
    } else {
      y = (parallax[i].offsetTop - window.pageYOffset) * 47 / parallax[i].offsetTop + 50;
    }

    parallax[i].style.backgroundPositionY = y + '%';
  }
};
/**
 * utils to set count to in about-2
 */

const countTo = function () {
  let items = document.querySelectorAll('.count');

  if (items) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let amount = parseInt(item.getAttribute('data-to'), 10) - parseInt(item.getAttribute('data-from'), 10);
      let time = parseInt(item.getAttribute('data-speed'), 10);
      let interval = parseInt(item.getAttribute('data-refresh-interval'), 10);
      let pt = 0;
      let height = item.parentElement.parentElement.parentElement.offsetTop;
      let flag = 0;
      document.addEventListener("scroll", countToScrollHandler, true);

      function countToScrollHandler() {
        if (pt <= time && height >= window.pageYOffset) {
          if (0 === flag) {
            let timerId = setInterval(() => {
              if (pt >= time) {
                clearInterval(timerId);
              }

              item.innerHTML = parseInt(pt * amount / time);
              pt = pt + interval;
            }, interval);
          }

          flag = 1;
        }
      }
    }
  }
};
/**
 * Prevent Xss Attack
 * @param {Node} html 
 */

function safeContent(html) {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  } // Removing all events from tags...


  html = html.replace(/ on\w+="[^"]*"/g, "");
  return {
    __html: html
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9xdHkuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbHMvZGV0YWlsLW9uZS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zZXJ2ZXIvYXBvbGxvLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc2VydmVyL3F1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9jYXJ0LmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2RlbW8uanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0L2lnbm9yZWR8RDpcXHNpciBwcm9qZWN0IGRhc2hib2FyZCBhZG1pbiBwYW5uZWwgYW5kIGNsaWVudFxccHJvamVjdCBiaW5uaXNzYXJcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInByb3BzIiwiZGVmYXVsdEZ1bmN0aW9uIiwiZSIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIk93bENhcm91c2VsIiwiYWRDbGFzcyIsIm9wdGlvbnMiLCJldmVudHMiLCJpc1RoZW1lIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJkZWZhdWx0T3B0aW9ucyIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsIm5hdiIsIm5hdlRleHQiLCJkb3RzIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlUmVmIiwic2V0dGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJSZWFjdCIsIlF0eSIsInZhbHVlIiwibWF4IiwiY2hhbmdlUXR5IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImNoYW5nZUN1cnJlbnQiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJtaW5XaWR0aCIsIkRldGFpbE9uZSIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZiIsInByb2R1Y3QiLCJxdHkiLCJzZXRRdHkiLCJxdHkyIiwic2V0UXR5MiIsImNvbG9yQXJyYXkiLCJzZXRDb2xvckFycmF5Iiwic2l6ZUFycmF5Iiwic2V0U2l6ZUFycmF5IiwidmFyaWF0aW9uR3JvdXAiLCJzZXRWYXJpYXRpb25Hcm91cCIsInNlbGVjdGVkVmFyaWFudCIsInNldFNlbGVjdGVkVmFyaWFudCIsImNvbG9yIiwiY29sb3JOYW1lIiwicHJpY2UiLCJzaXplIiwic2hvd0NsZWFyIiwic2V0U2hvd0NsZWFyIiwic2hvd1ZhcmlhdGlvblByaWNlIiwic2V0U2hvd1ZhcmlhdGlvblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWluIiwidmFyaWFudHMiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJtYXAiLCJpdGVtIiwicHVzaCIsImNvbG9yX25hbWUiLCJuYW1lIiwic2FsZV9wcmljZSIsInF1ZXJ5Iiwic2x1ZyIsInJlZnJlc2hTZWxlY3RhYmxlR3JvdXAiLCJwYXRobmFtZSIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsaWNrIiwiaW5jbHVkZXMiLCJzdGlja3lCYXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJyZW1vdmUiLCJhZGQiLCJvbldpc2hsaXN0Q2xpY2siLCJpc0luV2lzaGxpc3QiLCJ3aXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJ0ZW1wQXJyYXkiLCJmaW5kSW5kZXgiLCJkaXNhYmxlZCIsInNlbGVjdENvbG9yIiwic2VsZWN0U2l6ZSIsInRhcmdldCIsIm9uQ2hhbmdlUXR5Iiwib25DaGFuZ2VRdHkyIiwiY2xlYXJTZWxlY3Rpb24iLCJvbkNhcnRDbGljayIsImluZGV4IiwibmV3UHJvZHVjdCIsImFkZFRvQ2FydCIsIndpZHRoIiwicmF0aW5ncyIsInRvRml4ZWQiLCJyZXZpZXciLCJzdG9jayIsInNob3J0X2Rlc2MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvblRvZ2dsZSIsInNldENvbGxhcHNpYmxlRWxlbWVudCIsInRvZ2dsZVN0YXRlIiwidG9Mb3dlckNhc2UiLCJvdmVyZmxvdyIsImNhbkFkZFRvQ2FydCIsImNhcnRsaXN0IiwiY2F0ZWdvcnkiLCJjYXQiLCJwcm9jZXNzIiwic21fcGljdHVyZXMiLCJ1cmwiLCJoZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiQVBJX1VSSSIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iLCJHRVRfUFJPRFVDVFMiLCJncWwiLCJHRVRfUFJPRFVDVCIsIkdFVF9FTEVNRU5UX1BST0RVQ1RTIiwiR0VUX0VMRU1FTlRfUE9TVFMiLCJHRVRfUE9TVFNfQllfUEFHRSIsIkdFVF9QT1NUIiwiR0VUX0hPTUVfREFUQSIsImFjdGlvblR5cGVzIiwicmVtb3ZlRnJvbUNhcnQiLCJyZWZyZXNoU3RvcmUiLCJ1cGRhdGVDYXJ0IiwiaW5pdGlhbFN0YXRlIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJwYXlsb2FkIiwic3VtIiwiZmlsdGVyIiwiY2FydEl0ZW1zIiwiYWN0aW9ucyIsImNhcnRTYWdhIiwidGFrZUV2ZXJ5Iiwic2FnYSIsInRvYXN0IiwicGVyc2lzdENvbmZpZyIsImtleVByZWZpeCIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0UmVkdWNlciIsImFkZFRvQ29tcGFyZSIsInJlbW92ZUZyb21Db21wYXJlIiwiY2xlYXJBbGxGcm9tQ29tcGFyZSIsImNvbXBhcmVSZWR1Y2VyIiwiY29tcGFyZVNhZ2EiLCJzaG93UXVpY2siLCJoaWRlUXVpY2siLCJzaG93VmlkZW8iLCJoaWRlVmlkZW8iLCJzaW5nbGUiLCJxdWlja1Nob3ciLCJ2aWRlb1Nob3ciLCJkZW1vUmVkdWNlciIsInNob3dRdWlja1ZpZXciLCJyZW1vdmVGcm9tV2lzaGxpc3QiLCJ3aXNobGlzdFJlZHVjZXIiLCJ3aXNobGlzdFNhZ2EiLCJjYXJ0UHJpY2VUb3RhbCIsImNhcnRRdHlUb3RhbCIsImlzSW5DYXJ0IiwiZmluZCIsImlzSW5Db21wYXJlIiwiY29tcGFyZSIsImlzU2FmYXJpQnJvd3NlciIsInNVc3JBZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJpc0VkZ2VCcm93c2VyIiwiZ2V0SW5kZXgiLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsImkiLCJjYXRGaWx0ZXIiLCJwcm9kdWN0cyIsImZsYWciLCJhdHRyRmlsdGVyIiwiYXR0ciIsInVudGlsIiwic2Nyb2xsVG9QYWdlQ29udGVudCIsInRvIiwiZG9jdW1lbnQiLCJvZmZzZXRUb3AiLCJwb3MiLCJwYWdlWU9mZnNldCIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxCeSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJwYXJhbGxheCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ5IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImNvdW50VG8iLCJhbW91bnQiLCJnZXRBdHRyaWJ1dGUiLCJ0aW1lIiwiaW50ZXJ2YWwiLCJwdCIsImNvdW50VG9TY3JvbGxIYW5kbGVyIiwiaW5uZXJIVE1MIiwic2FmZUNvbnRlbnQiLCJodG1sIiwiU0NSSVBUX1JFR0VYIiwidGVzdCIsInJlcGxhY2UiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULE9BQTREO0FBQUEsTUFBM0M7QUFBRUMsWUFBRjtBQUFZQyxhQUFaO0FBQXVCQztBQUF2QixHQUEyQztBQUFBLE1BQVZDLEtBQVU7O0FBQ3ZFLFdBQVNDLGVBQVQsQ0FBMkJDLENBQTNCLEVBQStCO0FBQzNCLFFBQUtGLEtBQUssQ0FBQ0csSUFBTixJQUFjLEdBQW5CLEVBQXlCO0FBQ3JCRCxPQUFDLENBQUNFLGNBQUY7QUFDSDtBQUNKOztBQUVELFNBQ0ksTUFBQyxrREFBRCxlQUFXSixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSTtBQUFHLGFBQVMsRUFBR0YsU0FBZjtBQUEyQixTQUFLLEVBQUdDLEtBQW5DO0FBQTJDLFdBQU8sRUFBR0UsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNSixRQUROLENBREosQ0FESjtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUNBOztBQUVBLFNBQVNRLFdBQVQsQ0FBdUJMLEtBQXZCLEVBQStCO0FBQzNCLFFBQU07QUFBRU0sV0FBRjtBQUFXQyxXQUFYO0FBQW9CQyxVQUFwQjtBQUE0QkMsV0FBTyxHQUFHO0FBQXRDLE1BQStDVCxLQUFyRDtBQUNBLFFBQU1VLFdBQVcsR0FBR0MsNkNBQU0sQ0FBRSxJQUFGLENBQTFCO0FBQ0Es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QUdBLElBQUksQ0FBQ0csT0FBTCxDQUFjLGlCQUFkLEVBQWlDLEVBQWpDLENBQVA7QUFFQSxTQUFPO0FBQ0hDLFVBQU0sRUFBRUo7QUFETCxHQUFQO0FBR0gsQzs7Ozs7Ozs7OztBQy9QRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfZmVhdHVyZXNfb3dsLWNhcm91c2VsX2pzeC1jb21wb25lbnRzX3BhcnRpYWxzX3Byb2R1Y3RfZGV0YWlsc19kZXRhaWwtb25lX2pzeC1zZXJ2ZS1jN2JmY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBTGluayAoIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIC4uLnByb3BzIH0gKSB7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgIGlmICggcHJvcHMuaHJlZiA9PSAnIycgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHN0eWxlPXsgc3R5bGUgfSBvbkNsaWNrPXsgZGVmYXVsdEZ1bmN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInO1xyXG5cclxuZnVuY3Rpb24gT3dsQ2Fyb3VzZWwgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgYWRDbGFzcywgb3B0aW9ucywgZXZlbnRzLCBpc1RoZW1lID0gdHJ1ZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogXCJ0cnVlXCIsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIG5hdlRleHQ6IFsgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1sZWZ0XCI+JywgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1yaWdodFwiPicgXSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDQwMCxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMzc1OiB7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcHJvcHMub25DaGFuZ2VSZWYgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlUmVmKCBjYXJvdXNlbFJlZiApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgY2Fyb3VzZWxSZWYgXSApO1xyXG5cclxuICAgIGxldCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgKCBwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5jaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCApID9cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCByZWY9eyBjYXJvdXNlbFJlZiB9IGNsYXNzTmFtZT17IGBvd2wtY2Fyb3VzZWwgJHtpc1RoZW1lID8gJ293bC10aGVtZScgOiAnJ30gJHthZENsYXNzfWAgfSBvcHRpb25zPXsgc2V0dGluZ3MgfSBldmVudHM9eyBldmVudHMgfT5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwgPlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggT3dsQ2Fyb3VzZWwgKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFF0eSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSA9IDEsIGFkQ2xhc3MgPSBcIlwiLCBtYXggPSAxMDAwMCwgY2hhbmdlUXR5IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgY3VycmVudCwgc2V0Q3VycmVudCBdID0gdXNlU3RhdGUoIHZhbHVlICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudCggdmFsdWUgKTtcclxuICAgIH0sIFsgdmFsdWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY2hhbmdlUXR5ICYmIGNoYW5nZVF0eSggY3VycmVudCApO1xyXG4gICAgfSwgWyBjdXJyZW50IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIGluY3JlbWVudCAoKSB7XHJcbiAgICAgICAgaWYgKCBtYXggPD0gMCB8fCBjdXJyZW50ID49IG1heCApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZXRDdXJyZW50KCBjdXJyZW50ICsgMSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlY3JlbWVudCAoKSB7XHJcbiAgICAgICAgaWYgKCBjdXJyZW50ID4gMSApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudCggY3VycmVudCAtIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlQ3VycmVudCAoIGUgKSB7XHJcbiAgICAgICAgaWYgKCBwYXJzZUludCggZS5jdXJyZW50VGFyZ2V0LnZhbHVlICkgPCBtYXggKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoIHBhcnNlSW50KCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgKSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYHByb2R1Y3QtZGV0YWlscy1xdWFudGl0eSAke2FkQ2xhc3N9YCB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LXNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IG1pbldpZHRoOiAnMjZweCcgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVjcmVtZW50IGJ0bi1zcGlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IGRlY3JlbWVudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXg9eyBtYXggfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgY3VycmVudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGNoYW5nZUN1cnJlbnQgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgbWluV2lkdGg6ICcyNnB4JyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmNyZW1lbnQgYnRuLXNwaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IGluY3JlbWVudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdHk7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFNsaWRlVG9nZ2xlIGZyb20gJ3JlYWN0LXNsaWRlLXRvZ2dsZSc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuaW1wb3J0IFF0eSBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcXR5JztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgd2lzaGxpc3RBY3Rpb24gfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjYXJ0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jYXJ0JztcclxuXHJcbmltcG9ydCB7IGNhbkFkZFRvQ2FydCwgaXNJbldpc2hsaXN0IH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxPbmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCBudWxsICk7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBxdHksIHNldFF0eSBdID0gdXNlU3RhdGUoIDEgKTtcclxuICAgIGNvbnN0IFsgcXR5Miwgc2V0UXR5MiBdID0gdXNlU3RhdGUoIDEgKTtcclxuICAgIGNvbnN0IFsgY29sb3JBcnJheSwgc2V0Q29sb3JBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHNpemVBcnJheSwgc2V0U2l6ZUFycmF5IF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFsgdmFyaWF0aW9uR3JvdXAsIHNldFZhcmlhdGlvbkdyb3VwIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFsgc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnQgXSA9IHVzZVN0YXRlKCB7IGNvbG9yOiBudWxsLCBjb2xvck5hbWU6IG51bGwsIHByaWNlOiBudWxsLCBzaXplOiBcIlwiIH0gKTtcclxuICAgIGNvbnN0IFsgc2hvd0NsZWFyLCBzZXRTaG93Q2xlYXIgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBzaG93VmFyaWF0aW9uUHJpY2UsIHNldFNob3dWYXJpYXRpb25QcmljZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBbIG1heFByaWNlLCBzZXRNYXhQcmljZSBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgbWluUHJpY2UsIHNldE1pblByaWNlIF0gPSB1c2VTdGF0ZSggOTk5OTkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIsIHtcclxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBtaW4gPSA5OTk5OTtcclxuICAgICAgICBsZXQgbWF4ID0gMDtcclxuXHJcbiAgICAgICAgc2V0VmFyaWF0aW9uR3JvdXAoIHByb2R1Y3QudmFyaWFudHMucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICBjdXIuc2l6ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgYWNjLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY3VyLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZTogY3VyLmNvbG9yX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2VcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBpZiAoIG1pbiA+IGN1ci5wcmljZSApIG1pbiA9IGN1ci5wcmljZTtcclxuICAgICAgICAgICAgaWYgKCBtYXggPCBjdXIucHJpY2UgKSBtYXggPSBjdXIucHJpY2U7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwgW10gKSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE1pblByaWNlKCBtaW4gKTtcclxuICAgICAgICBzZXRNYXhQcmljZSggbWF4ICk7XHJcbiAgICB9LCBbIHByb2R1Y3QgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCB7IGNvbG9yOiBudWxsLCBjb2xvck5hbWU6IG51bGwsIHByaWNlOiBudWxsLCBzaXplOiBcIlwiIH0gKTtcclxuICAgICAgICBzZXRRdHkoIDEgKTtcclxuICAgICAgICBzZXRRdHkyKCAxICk7XHJcbiAgICB9LCBbIHJvdXRlci5xdWVyeS5zbHVnIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHJlZnJlc2hTZWxlY3RhYmxlR3JvdXAoKTtcclxuICAgIH0sIFsgdmFyaWF0aW9uR3JvdXAsIHNlbGVjdGVkVmFyaWFudCBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzY3JvbGxIYW5kbGVyKCk7XHJcbiAgICB9LCBbIHJvdXRlci5wYXRobmFtZSBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Q2xlYXIoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yIHx8IHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/IHRydWUgOiBmYWxzZSApO1xyXG4gICAgICAgIHNldFNob3dWYXJpYXRpb25QcmljZSggKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApID8gdHJ1ZSA6IGZhbHNlICk7XHJcbiAgICAgICAgbGV0IHRvZ2dsZSA9IHJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoICcudmFyaWF0aW9uLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgaWYgKCB0b2dnbGUgKSB7XHJcbiAgICAgICAgICAgIGlmICggKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApICYmIHRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoICdjb2xsYXBzZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAoICEoIHNlbGVjdGVkVmFyaWFudC5jb2xvciAmJiBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgKSAmJiAhdG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyggJ2NvbGxhcHNlZCcgKSApIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBzZWxlY3RlZFZhcmlhbnQgXSApXHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsSGFuZGxlciAoKSB7XHJcbiAgICAgICAgaWYgKCByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoICcvcHJvZHVjdC9kZWZhdWx0JyApICkge1xyXG4gICAgICAgICAgICBsZXQgc3RpY2t5QmFyID0gcmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktYmFyJyApO1xyXG4gICAgICAgICAgICBpZiAoIHN0aWNreUJhci5jbGFzc0xpc3QuY29udGFpbnMoICdkLW5vbmUnICkgJiYgcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDwgMCApIHtcclxuICAgICAgICAgICAgICAgIHN0aWNreUJhci5jbGFzc0xpc3QucmVtb3ZlKCAnZC1ub25lJyApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggIXN0aWNreUJhci5jbGFzc0xpc3QuY29udGFpbnMoICdkLW5vbmUnICkgJiYgcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gMCApIHtcclxuICAgICAgICAgICAgICAgIHN0aWNreUJhci5jbGFzc0xpc3QuYWRkKCAnZC1ub25lJyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uV2lzaGxpc3RDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9XaXNobGlzdCggcHJvZHVjdCApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCAnL3BhZ2VzL3dpc2hsaXN0JyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoU2VsZWN0YWJsZUdyb3VwICgpIHtcclxuICAgICAgICBsZXQgdGVtcEFycmF5ID0gWyAuLi52YXJpYXRpb25Hcm91cCBdO1xyXG4gICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkgPSB2YXJpYXRpb25Hcm91cC5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciAhPT0gY3VyLmNvbG9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2l6ZUFycmF5KCB0ZW1wQXJyYXkucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGFjYy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5zaXplID09IGN1ci5zaXplICkgIT09IC0xIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIHJldHVybiBbIC4uLmFjYywgY3VyIF07XHJcbiAgICAgICAgfSwgW10gKSApO1xyXG5cclxuICAgICAgICB0ZW1wQXJyYXkgPSBbIC4uLnZhcmlhdGlvbkdyb3VwIF07XHJcbiAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuc2l6ZSApIHtcclxuICAgICAgICAgICAgdGVtcEFycmF5ID0gdmFyaWF0aW9uR3JvdXAucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPT0gY3VyLnNpemUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbIC4uLmFjYywgY3VyIF07XHJcbiAgICAgICAgICAgIH0sIFtdICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb2xvckFycmF5KCBwcm9kdWN0LnZhcmlhbnRzLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGVtcEFycmF5LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmNvbG9yID09IGN1ci5jb2xvciApID09IC0xXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY3VyLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY3VyLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZTogY3VyLmNvbG9yX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGN1ci5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LCBbXSApICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0Q29sb3IgKCBlLCBpdGVtICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmICggaXRlbS5jb2xvciA9PSBzZWxlY3RlZFZhcmlhbnQuY29sb3IgKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCgge1xyXG4gICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCB7XHJcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZFZhcmlhbnQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogaXRlbS5jb2xvcixcclxuICAgICAgICAgICAgICAgIGNvbG9yTmFtZTogaXRlbS5jb2xvck5hbWUsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdFNpemUgKCBlICkge1xyXG4gICAgICAgIGlmICggZS50YXJnZXQudmFsdWUgPT0gXCJcIiApIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCB7IC4uLnNlbGVjdGVkVmFyaWFudCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCB7IC4uLnNlbGVjdGVkVmFyaWFudCwgc2l6ZTogZS50YXJnZXQudmFsdWUgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVF0eSAoIGN1cnJlbnQgKSB7XHJcbiAgICAgICAgc2V0UXR5KCBjdXJyZW50ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VRdHkyICggY3VycmVudCApIHtcclxuICAgICAgICBzZXRRdHkyKCBjdXJyZW50ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoICgge1xyXG4gICAgICAgICAgICAuLi5zZWxlY3RlZFZhcmlhbnQsXHJcbiAgICAgICAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHNpemU6IFwiXCJcclxuICAgICAgICB9ICkgKTtcclxuICAgICAgICByZWZyZXNoU2VsZWN0YWJsZUdyb3VwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXJ0Q2xpY2sgKCBlLCBpbmRleCA9IDAgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ2J0bi1kaXNhYmxlZCcgKSApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Byb2R1Y3QgPSB7IC4uLnByb2R1Y3QgfTtcclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgbmV3UHJvZHVjdCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAtICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudC5jb2xvck5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudC5zaXplLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IHNlbGVjdGVkVmFyaWFudC5wcmljZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5hZGRUb0NhcnQoXHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3QsXHJcbiAgICAgICAgICAgIGluZGV4ID09IDAgPyBxdHkgOiBxdHkyXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoICFwcm9kdWN0ICkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzXCIgcmVmPXsgcmVmIH0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+eyBwcm9kdWN0Lm5hbWUgfTwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0XCI+eyBwcm9kdWN0LnJhdGluZ3MudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3MtdGV4dFwiPiggeyBwcm9kdWN0LnJldmlldyB9IFJldmlld3MgKTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57IHByb2R1Y3Quc2hvcnRfZGVzYyB9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZpbHRlci1yb3cgZGV0YWlscy1yb3ctc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbG9yOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdiBwcm9kdWN0LW5hdi1kb3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvckFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGAkeyggaXRlbS5jb2xvciA9PSBzZWxlY3RlZFZhcmlhbnQuY29sb3IgPyAnYWN0aXZlICcgOiAnJyApICsgKCBpdGVtLmRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnICl9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IGUgPT4gc2VsZWN0Q29sb3IoIGUsIGl0ZW0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpemVcIj5TaXplOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzZWxlY3RlZFZhcmlhbnQuc2l6ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgc2VsZWN0U2l6ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgc2l6ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplQXJyYXkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLnNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgaXRlbS5zaXplIH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaXplLWd1aWRlIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXRoLWxpc3RcIj48L2k+c2l6ZSBndWlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xlYXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBjbGVhclNlbGVjdGlvbiB9PmNsZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGBkLW5vbmUgdmFyaWF0aW9uLXRvZ2dsZSAke3RvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCl9YCB9IG9uQ2xpY2s9eyBvblRvZ2dsZSB9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9IHN0eWxlPXsgeyBvdmVyZmxvdzogJ2hpZGRlbicgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsgc2VsZWN0ZWRWYXJpYW50LnByaWNlID8gc2VsZWN0ZWRWYXJpYW50LnByaWNlLnRvRml4ZWQoIDIgKSA6IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXR5XCI+UXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8UXR5IGNoYW5nZVF0eT17IG9uQ2hhbmdlUXR5IH0gbWF4PXsgcHJvZHVjdC5zdG9jayB9IHZhbHVlPXsgcXR5IH0+PC9RdHk+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1wcm9kdWN0IGJ0bi1jYXJ0ICR7KCAhY2FuQWRkVG9DYXJ0KCBwcm9wcy5jYXJ0bGlzdCwgcHJvZHVjdCwgcXR5ICkgfHwgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgJiYgIXNob3dWYXJpYXRpb25QcmljZSApICkgPyAnYnRuLWRpc2FibGVkJyA6ICcnfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IG9uQ2FydENsaWNrKCBlLCAwICkgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWFjdGlvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdCBhZGRlZC10by13aXNobGlzdFwiPjxzcGFuPkdvIHRvIFdpc2hsaXN0PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdFwiIG9uQ2xpY2s9eyBvbldpc2hsaXN0Q2xpY2sgfT48c3Bhbj5BZGQgdG8gV2lzaGxpc3Q8L3NwYW4+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2F0IHctMTAwIHRleHQtdHJ1bmNhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DYXRlZ29yeTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5Lm1hcCggKCBjYXQsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLCBxdWVyeTogeyBjYXRlZ29yeTogY2F0LnNsdWcgfSB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+eyBjYXQubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5jYXRlZ29yeS5sZW5ndGggLSAxID8gJywnIDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgc29jaWFsLWljb25zLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29jaWFsLWxhYmVsXCI+U2hhcmU6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiVHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiSW5zdGFncmFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlBpbnRlcmVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBpbnRlcmVzdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYmFyIGQtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH0gYWx0PVwicHJvZHVjdFwiIHdpZHRoPXsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLndpZHRoIH0gaGVpZ2h0PXsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLmhlaWdodCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciAmJiBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHNlbGVjdGVkVmFyaWFudC5wcmljZSA/IHNlbGVjdGVkVmFyaWFudC5wcmljZS50b0ZpeGVkKCAyICkgOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF0eSBjaGFuZ2VRdHk9eyBvbkNoYW5nZVF0eTIgfSBtYXg9eyBwcm9kdWN0LnN0b2NrIH0gdmFsdWU9eyBxdHkyIH0+PC9RdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tcHJvZHVjdCBidG4tY2FydCAkeyggIWNhbkFkZFRvQ2FydCggcHJvcHMuY2FydGxpc3QsIHByb2R1Y3QsIHF0eSApIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFzaG93VmFyaWF0aW9uUHJpY2UgKSApID8gJ2J0bi1kaXNhYmxlZCcgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IGUgPT4gb25DYXJ0Q2xpY2soIGUsIDEgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdCBhZGRlZC10by13aXNobGlzdFwiPjxzcGFuPkdvIHRvIFdpc2hsaXN0PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdFwiIG9uQ2xpY2s9eyBvbldpc2hsaXN0Q2xpY2sgfT48c3Bhbj5BZGQgdG8gV2lzaGxpc3Q8L3NwYW4+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnRsaXN0OiBzdGF0ZS5jYXJ0bGlzdC5kYXRhLFxyXG4gICAgICAgIHdpc2hsaXN0OiBzdGF0ZS53aXNobGlzdC5kYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4ud2lzaGxpc3RBY3Rpb24sIC4uLmNhcnRBY3Rpb24gfSApKCBEZXRhaWxPbmUgKTtcclxuIiwiaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJ25leHQtYXBvbGxvJztcclxuaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcclxuXHJcbmNvbnN0IEFQSV9VUkkgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMfS9ncmFwaHFsYDtcclxuXHJcbmNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoIHtcclxuICAgIHVyaTogQVBJX1VSSSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0gKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oIGFwb2xsb0NsaWVudCApOyIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHByb2R1Y3RzKCRzZWFyY2hUZXJtOiBTdHJpbmcsICRjb2xvcjogW1N0cmluZ10sICRzaXplOiBbU3RyaW5nXSwgJGJyYW5kOiBbU3RyaW5nXSwgJG1pblByaWNlOiBJbnQsICRtYXhQcmljZTogSW50LCAkY2F0ZWdvcnk6IFN0cmluZywgJHJhdGluZzogW1N0cmluZ10sICRzb3J0Qnk6IFN0cmluZywgJHBhZ2U6IEludCA9IDEsICRwZXJQYWdlOiBJbnQsICRsaXN0OiBCb29sZWFuID0gZmFsc2UsICRmcm9tOiBJbnQgPSAwKSB7XHJcbiAgICAgICAgcHJvZHVjdHMoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSwgc2VhcmNoVGVybTogJHNlYXJjaFRlcm0sIGNvbG9yOiAkY29sb3IsIHNpemU6ICRzaXplLCBicmFuZDogJGJyYW5kLCBtaW5QcmljZTogJG1pblByaWNlLCBtYXhQcmljZTogJG1heFByaWNlLCBjYXRlZ29yeTogJGNhdGVnb3J5LCByYXRpbmc6ICRyYXRpbmcsIHNvcnRCeTogJHNvcnRCeSwgcGFnZTogJHBhZ2UsIHBlclBhZ2U6ICRwZXJQYWdlLCBsaXN0OiAkbGlzdCwgZnJvbTogJGZyb20pIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIHNob3J0X2Rlc2MgQGluY2x1ZGUoaWY6ICRsaXN0KVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IGdxbGBcclxuICAgIHF1ZXJ5IHByb2R1Y3QoJHNsdWc6IFN0cmluZyEsICRvbmx5RGF0YTogQm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcHJvZHVjdChkZW1vOiAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99LCBzbHVnOiAkc2x1Zywgb25seURhdGE6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICBzaW5nbGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9kZXNjXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyYW5kcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJldiBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV4dCBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVsYXRlZCBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9FTEVNRU5UX1BST0RVQ1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgZWxlbWVudFByb2R1Y3RzIHtcclxuICAgICAgICBlbGVtZW50UHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0VMRU1FTlRfUE9TVFMgPSBncWxgXHJcbiAgICBxdWVyeSBlbGVtZW50UG9zdHMge1xyXG4gICAgICAgIGVsZW1lbnRQb3N0cyB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFNfQllfUEFHRSA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3RzQnlQYWdlICgkcGFnZTogU3RyaW5nISwgJGNhdGVnb3J5OiBTdHJpbmcpIHtcclxuICAgICAgICBwb3N0c0J5UGFnZShwYWdlOiAkcGFnZSwgY2F0ZWdvcnk6ICRjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUID0gZ3FsYFxyXG4gICAgcXVlcnkgcG9zdCgkc2x1ZzogU3RyaW5nISkge1xyXG4gICAgICAgIHBvc3Qoc2x1ZzogJHNsdWcpIHtcclxuICAgICAgICAgICAgc2luZ2xlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXYge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfREFUQSA9IGdxbGBcclxuICAgIHF1ZXJ5IGhvbWVEYXRhIHtcclxuICAgICAgICBob21lRGF0YShkZW1vOiAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb3N0cyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gIiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIGFkZFRvQ2FydDogXCJBRERfVE9fQ0FSVFwiLFxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6IFwiUkVNT1ZFX0ZST01fQ0FSVFwiLFxyXG4gICAgcmVmcmVzaFN0b3JlOiBcIlJFRlJFU0hfU1RPUkVcIixcclxuICAgIHVwZGF0ZUNhcnQ6IFwiVVBEQVRFX0NBUlRcIixcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb0NhcnQ6XHJcbiAgICAgICAgICAgIHZhciBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmlkID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKTtcclxuICAgICAgICAgICAgbGV0IHF0eSA9IGFjdGlvbi5wYXlsb2FkLnF0eSA/IGFjdGlvbi5wYXlsb2FkLnF0eSA6IDE7XHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ICE9PSAtMSAmJiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLm5hbWUgPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ICE9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLnJlZHVjZSggKCBhY2MsIHByb2R1Y3QsIGluZGV4ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggPT0gaW5kZXggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiBwcm9kdWN0LnF0eSArIHF0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtOiAoIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA/IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QucHJpY2UgKSAqICggcHJvZHVjdC5xdHkgKyBxdHkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goIHByb2R1Y3QgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSApXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHF0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtOiBxdHkgKiAoIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA/IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QucHJpY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNhcnQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YS5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpdGVtLm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy51cGRhdGVDYXJ0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLmNhcnRJdGVtc1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkVG9DYXJ0OiAoIHByb2R1Y3QsIHF0eSA9IDEgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5hZGRUb0NhcnQsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0LFxyXG4gICAgICAgICAgICBxdHk6IHF0eVxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICByZW1vdmVGcm9tQ2FydDogKCBwcm9kdWN0ICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNhcnQsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHVwZGF0ZUNhcnQ6ICggY2FydEl0ZW1zICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMudXBkYXRlQ2FydCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNhcnRJdGVtczogY2FydEl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY2FydFNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb0NhcnQsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgYWRkZWQgdG8gQ2FydFwiICk7XHJcbiAgICB9ICk7XHJcblxyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ2FydCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCByZW1vdmVkIGZyb20gQ2FydFwiICk7XHJcbiAgICB9ICk7XHJcblxyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy51cGRhdGVDYXJ0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJDYXJ0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIgKTtcclxuICAgIH0gKTtcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJtb2xsYS1cIixcclxuICAgIGtleTogXCJjYXJ0XCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBjYXJ0UmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIGFkZFRvQ29tcGFyZTogJ0FERF9UT19DT01QQVJFJyxcclxuICAgIHJlbW92ZUZyb21Db21wYXJlOiAnUkVNT1ZFX0ZST01fQ09NUEFSRScsXHJcbiAgICBjbGVhckFsbEZyb21Db21wYXJlOiAnQ0xFQVJfQUxMX0ZST01fQ09NUEFSRScsXHJcbiAgICByZWZyZXNoU3RvcmU6ICdSRUZSRVNIX1NUT1JFJ1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW11cclxufVxyXG5cclxuY29uc3QgY29tcGFyZVJlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmFkZFRvQ29tcGFyZTpcclxuICAgICAgICAgICAgdmFyIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaWQgPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCA9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21Db21wYXJlOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogc3RhdGUuZGF0YS5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5pZCAhPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkIClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5jbGVhckFsbEZyb21Db21wYXJlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICBhZGRUb0NvbXBhcmU6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9Db21wYXJlLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICByZW1vdmVGcm9tQ29tcGFyZTogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ29tcGFyZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgY2xlYXJBbGxGcm9tQ29tcGFyZTogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuY2xlYXJBbGxGcm9tQ29tcGFyZSxcclxuICAgICAgICBwYXlsb2FkOiB7fVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlZnJlc2hTdG9yZTogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlLFxyXG4gICAgICAgIHBheWxvYWQ6IHt9XHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjb21wYXJlU2FnYSAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLmFkZFRvQ29tcGFyZSwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCBhZGRlZCB0byBDb21wYXJlXCIgKTtcclxuICAgIH0gKTtcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogJ21vbGxhLScsXHJcbiAgICBrZXk6ICdjb21wYXJlJyxcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGNvbXBhcmVSZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIHNob3dRdWljazogJ1NIT1dfUVVJQ0tWSUVXJyxcclxuICAgIGhpZGVRdWljazogJ0hJREVfUVVJQ0tWSUVXJyxcclxuICAgIHNob3dWaWRlbzogJ1NIT1dfVklERU8nLFxyXG4gICAgaGlkZVZpZGVvOiAnSElERV9WSURFTycsXHJcbiAgICByZWZyZXNoU3RvcmU6ICdSRUZSRVNIX1NUT1JFJ1xyXG59O1xyXG5cclxubGV0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGN1cnJlbnQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU8sXHJcbiAgICBzaW5nbGU6IG51bGwsXHJcbiAgICBxdWlja1Nob3c6IGZhbHNlLFxyXG4gICAgdmlkZW9TaG93OiBmYWxzZSxcclxufTtcclxuY29uc3QgZGVtb1JlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnNob3dRdWljazpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlOiBhY3Rpb24ucGF5bG9hZC5zbHVnLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuaGlkZVF1aWNrOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBxdWlja1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5zaG93VmlkZW86XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aWRlb1Nob3c6IHRydWUgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmhpZGVWaWRlbzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpZGVvU2hvdzogZmFsc2UgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGFjdGlvbi5wYXlsb2FkLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBxdWlja1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9TaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIHJlZnJlc2hTdG9yZTogKCBjdXJyZW50ICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY3VycmVudDogY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICBzaG93UXVpY2tWaWV3OiBzbHVnID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnNob3dRdWljayxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHNsdWc6IHNsdWdcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgaGlkZVF1aWNrOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5oaWRlUXVpY2ssXHJcbiAgICB9ICksXHJcblxyXG4gICAgc2hvd1ZpZGVvOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5zaG93VmlkZW8sXHJcbiAgICB9ICksXHJcblxyXG4gICAgaGlkZVZpZGVvOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5oaWRlVmlkZW9cclxuICAgIH0gKVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcIm1vbGxhLVwiLFxyXG4gICAga2V5OiBcImRlbW9cIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGRlbW9SZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgYWRkVG9XaXNobGlzdDogJ0FERF9UT19XSVNITElTVCcsXHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3Q6ICdSRU1PVkVfRlJPTV9XSVNITElTVCcsXHJcbiAgICByZWZyZXNoU3RvcmU6ICdSRUZSRVNIX1NUT1JFJyxcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW10sXHJcbn1cclxuXHJcbmNvbnN0IHdpc2hsaXN0UmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuYWRkVG9XaXNobGlzdDpcclxuICAgICAgICAgICAgdmFyIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKTtcclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tV2lzaGxpc3Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhLmZpbHRlciggaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkIClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICBhZGRUb1dpc2hsaXN0OiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFkZFRvV2lzaGxpc3QsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlbW92ZUZyb21XaXNobGlzdDogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tV2lzaGxpc3QsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2lzaGxpc3RTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuYWRkVG9XaXNobGlzdCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCBhZGRlZCB0byBXaXNobGlzdFwiICk7XHJcbiAgICB9IClcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJtb2xsYS1cIixcclxuICAgIGtleTogJ3dpc2hsaXN0JyxcclxuICAgIHN0b3JhZ2UsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCB3aXNobGlzdFJlZHVjZXIgKTsiLCIvKipcclxuICogZ2V0IHRvdGFsIFByaWNlIG9mIHByb2R1Y3RzIGluIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcmV0dXJuIHsgRmxvYXQgfSB0b3RhbFByaWNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FydFByaWNlVG90YWwgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjYyArIGN1ci5zdW1cclxuICAgIH0sIDAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBudW1iZXIgb2YgcHJvZHVjdHMgaW4gY2FydFxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHJldHVybiB7IEludGVnZXIgfSBudW1iZXJzIG9mIGNhcnQgaXRlbXMgaW4gY2FydGxpc3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXJ0UXR5VG90YWwgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjYyArIHBhcnNlSW50KCBjdXIucXR5LCAxMCApO1xyXG4gICAgfSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjaWRlIHdoZXJlIHByb2R1Y3QgaXMgaW4gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEBwYXJhbSB7IE9iamVjdCB9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbkNhcnQgPSAoIGNhcnRJdGVtcywgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMuZmluZCggaXRlbSA9PiBpdGVtLmlkID09IHByb2R1Y3QuaWQgKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpcm0gaWYgcHJvZHVjdCBjb3VsZCBiZSBhZGRlZCB0byBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHBhcmFtIHsgT2JqZWN0IH0gcHJvZHVjdCBcclxuICogQHBhcmFtIHsgTnVtYmVyIH0gcXR5IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhbkFkZFRvQ2FydCA9ICggY2FydEl0ZW1zLCBwcm9kdWN0LCBxdHkgKSA9PiB7XHJcbiAgICBsZXQgZmluZCA9IGNhcnRJdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCApO1xyXG4gICAgaWYgKCBmaW5kICkge1xyXG4gICAgICAgIGlmICggcHJvZHVjdC5zdG9jayA9PSAwIHx8ICggcHJvZHVjdC5zdG9jayA8ICggZmluZC5xdHkgKyBxdHkgKSApICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICggcHJvZHVjdC5zdG9jayA9PSAwIHx8ICggcHJvZHVjdC5zdG9jayA8IHF0eSApICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtBcnJheX0gd2lzaGxpc3QgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9kdWN0IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSW5XaXNobGlzdCA9ICggd2lzaGxpc3QsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdCAmJiB3aXNobGlzdC5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5zbHVnID09IHByb2R1Y3Quc2x1ZyApID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtBcnJheX0gY29tcGFyZSBcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbkNvbXBhcmUgPSAoIGNvbXBhcmUsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdCAmJiBjb21wYXJlLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNsdWcgPT0gcHJvZHVjdC5zbHVnICkgPiAtMTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3Qgc2FmYXJpIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1NhZmFyaUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoICdTYWZhcmknICkgIT09IC0xICYmIHNVc3JBZy5pbmRleE9mKCAnQ2hyb21lJyApID09PSAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZGV0ZWN0IEVkZ2UgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRWRnZUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoIFwiRWRnZVwiICkgPiAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZXQgaW5kZXggb2YgdGhlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEluZGV4ID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKCBlbGVtZW50ID09IGNoaWxkcmVuWyBpIF0gKSByZXR1cm4gaTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIGZpbHRlciBwcm9kdWN0cyBieSBjYXRlZ29yeS5cclxuICogQHBhcmFtIHtBcnJheX0gcHJvZHVjdHMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGNhdGVnb3J5IFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWcgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2F0RmlsdGVyID0gZnVuY3Rpb24gKCBwcm9kdWN0cyA9IFtdLCBjYXRlZ29yeSwgZmxhZyA9IGZhbHNlICkge1xyXG4gICAgaWYgKCBjYXRlZ29yeVsgMCBdID09PSAnQWxsJyApIHJldHVybiBwcm9kdWN0cztcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgaWYgKCBpdGVtLmNhdGVnb3J5LmZpbmQoIGNhdCA9PiBjYXQuc2x1ZyA9PSBjYXRlZ29yeVsgaSBdICkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFmbGFnICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGZsYWcgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggZmxhZyApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmaWx0ZXIgcHJvZHVjdHMgYnkgYXR0cmlidXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb2R1Y3RzIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0ciBcclxuICovXHJcbmV4cG9ydCBjb25zdCBhdHRyRmlsdGVyID0gZnVuY3Rpb24gKCBwcm9kdWN0cyA9IFtdLCBhdHRyICkge1xyXG4gICAgLy8gaWYocHJvZHVjdHMpXHJcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdhbGwnICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3NhbGUnICYmIGl0ZW0uc2FsZV9wcmljZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdyYXRlZCcgJiYgaXRlbS5yYXRpbmdzID4gMyApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICd1bnRpbCcgJiYgaXRlbS51bnRpbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVsgYXR0ciBdID09PSB0cnVlO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG4vKipcclxuICogU2Nyb2xsaW5nIHRvIFBhZ2UgY29udGVudCBzZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9QYWdlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS1jb250ZW50JyApXHJcbiAgICAgICAgLm9mZnNldFRvcCAtIDc0O1xyXG4gICAgaWYgKCBpc1NhZmFyaUJyb3dzZXIoKSB8fCBpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcG9zIDw9IHRvICkgY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSggMCwgLTEyMCApO1xyXG4gICAgICAgICAgICAgICAgcG9zIC09IDEyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKCB7XHJcbiAgICAgICAgICAgIHRvcDogdG8sXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIG1ha2UgYmFja2dyb3VuZCBwYXJhbGxheFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcmFsbGF4ID0gKCkgPT4ge1xyXG4gICAgbGV0IHBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5iZy1wYXJhbGxheCcgKTtcclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJhbGxheC5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBsZXQgeSA9IDA7XHJcbiAgICAgICAgaWYgKCBwYXJhbGxheFsgaSBdLmNsYXNzTGlzdC5jb250YWlucyggJ2hlYWRlci1wYXJhbGxheCcgKSApIHtcclxuICAgICAgICAgICAgeSA9ICggMTAgLSB3aW5kb3cucGFnZVlPZmZzZXQgKSAqIDQ3IC8gOTAwICsgNTA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeSA9ICggcGFyYWxsYXhbIGkgXS5vZmZzZXRUb3AgLSB3aW5kb3cucGFnZVlPZmZzZXQgKSAqIDQ3IC8gcGFyYWxsYXhbIGkgXS5vZmZzZXRUb3AgKyA1MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmFsbGF4WyBpIF0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IHkgKyAnJSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBzZXQgY291bnQgdG8gaW4gYWJvdXQtMlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvdW50VG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNvdW50JyApO1xyXG5cclxuICAgIGlmICggaXRlbXMgKSB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zWyBpIF07XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLXRvJyApLCAxMCApIC0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1mcm9tJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3BlZWQnICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtcmVmcmVzaC1pbnRlcnZhbCcgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IHB0ID0gMDtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IDA7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcInNjcm9sbFwiLCBjb3VudFRvU2Nyb2xsSGFuZGxlciwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRUb1Njcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwdCA8PSB0aW1lICYmIGhlaWdodCA+PSB3aW5kb3cucGFnZVlPZmZzZXQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAwID09PSBmbGFnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHB0ID49IHRpbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gcGFyc2VJbnQoICggcHQgKiBhbW91bnQgKSAvIHRpbWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcHQgKyBpbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgWHNzIEF0dGFja1xyXG4gKiBAcGFyYW0ge05vZGV9IGh0bWwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZUNvbnRlbnQgKCBodG1sICkge1xyXG4gICAgY29uc3QgU0NSSVBUX1JFR0VYID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XHJcblxyXG4gICAgLy8gUmVtb3ZpbmcgdGhlIDxzY3JpcHQ+IHRhZ3NcclxuICAgIHdoaWxlICggU0NSSVBUX1JFR0VYLnRlc3QoIGh0bWwgKSApIHtcclxuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKCBTQ1JJUFRfUkVHRVgsIFwiXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmluZyBhbGwgZXZlbnRzIGZyb20gdGFncy4uLlxyXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSggLyBvblxcdys9XCJbXlwiXSpcIi9nLCBcIlwiICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfX2h0bWw6IGh0bWxcclxuICAgIH1cclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=