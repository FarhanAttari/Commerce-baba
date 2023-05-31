exports.id = "components_partials_product_details_detail-one_jsx-server_queries_js-store_compare_js-store_demo_js";
exports.ids = ["components_partials_product_details_detail-one_jsx-server_queries_js-store_compare_js-store_demo_js"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcXR5LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9kZXRhaWxzL2RldGFpbC1vbmUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc2VydmVyL3F1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9jYXJ0LmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2RlbW8uanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlF0eSIsInByb3BzIiwidmFsdWUiLCJhZENsYXNzIiwibWF4IiwiY2hhbmdlUXR5IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImNoYW5nZUN1cnJlbnQiLCJlIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwibWluV2lkdGgiLCJEZXRhaWxPbmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWYiLCJ1c2VSZWYiLCJwcm9kdWN0IiwicXR5Iiwic2V0UXR5IiwicXR5MiIsInNldFF0eTIiLCJjb2xvckFycmF5Iiwic2V0Q29sb3JBcnJheSIsInNpemVBcnJheSIsInNldFNpemVBcnJheSIsInZhcmlhdGlvbkdyb3VwIiwic2V0VmFyaWF0aW9uR3JvdXAiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJjb2xvciIsImNvbG9yTmFtZSIsInByaWNlIiwic2l6ZSIsInNob3dDbGVhciIsInNldFNob3dDbGVhciIsInNob3dWYXJpYXRpb25QcmljZSIsInNldFNob3dWYXJpYXRpb25QcmljZSIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1pbiIsInZhcmlhbnRzIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwibWFwIiwiaXRlbSIsInB1c2giLCJjb2xvcl9uYW1lIiwibmFtZSIsImxlbmd0aCIsInNhbGVfcHJpY2UiLCJxdWVyeSIsInNsdWciLCJyZWZyZXNoU2VsZWN0YWJsZUdyb3VwIiwicGF0aG5hbWUiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbGljayIsImluY2x1ZGVzIiwic3RpY2t5QmFyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwicmVtb3ZlIiwiYWRkIiwib25XaXNobGlzdENsaWNrIiwicHJldmVudERlZmF1bHQiLCJpc0luV2lzaGxpc3QiLCJ3aXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJ0ZW1wQXJyYXkiLCJmaW5kSW5kZXgiLCJkaXNhYmxlZCIsInNlbGVjdENvbG9yIiwic2VsZWN0U2l6ZSIsInRhcmdldCIsIm9uQ2hhbmdlUXR5Iiwib25DaGFuZ2VRdHkyIiwiY2xlYXJTZWxlY3Rpb24iLCJvbkNhcnRDbGljayIsImluZGV4IiwibmV3UHJvZHVjdCIsImFkZFRvQ2FydCIsIndpZHRoIiwicmF0aW5ncyIsInRvRml4ZWQiLCJyZXZpZXciLCJzdG9jayIsInNob3J0X2Rlc2MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvblRvZ2dsZSIsInNldENvbGxhcHNpYmxlRWxlbWVudCIsInRvZ2dsZVN0YXRlIiwidG9Mb3dlckNhc2UiLCJvdmVyZmxvdyIsImNhbkFkZFRvQ2FydCIsImNhcnRsaXN0IiwiY2F0ZWdvcnkiLCJjYXQiLCJwcm9jZXNzIiwic21fcGljdHVyZXMiLCJ1cmwiLCJoZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiR0VUX1BST0RVQ1QiLCJHRVRfRUxFTUVOVF9QUk9EVUNUUyIsIkdFVF9FTEVNRU5UX1BPU1RTIiwiR0VUX1BPU1RTX0JZX1BBR0UiLCJHRVRfUE9TVCIsIkdFVF9IT01FX0RBVEEiLCJhY3Rpb25UeXBlcyIsInJlbW92ZUZyb21DYXJ0IiwicmVmcmVzaFN0b3JlIiwidXBkYXRlQ2FydCIsImluaXRpYWxTdGF0ZSIsImNhcnRSZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsImlkIiwicGF5bG9hZCIsInN1bSIsImZpbHRlciIsImNhcnRJdGVtcyIsImFjdGlvbnMiLCJjYXJ0U2FnYSIsInRha2VFdmVyeSIsInNhZ2EiLCJ0b2FzdCIsInBlcnNpc3RDb25maWciLCJrZXlQcmVmaXgiLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdFJlZHVjZXIiLCJhZGRUb0NvbXBhcmUiLCJyZW1vdmVGcm9tQ29tcGFyZSIsImNsZWFyQWxsRnJvbUNvbXBhcmUiLCJjb21wYXJlUmVkdWNlciIsImNvbXBhcmVTYWdhIiwic2hvd1F1aWNrIiwiaGlkZVF1aWNrIiwic2hvd1ZpZGVvIiwiaGlkZVZpZGVvIiwic2luZ2xlIiwicXVpY2tTaG93IiwidmlkZW9TaG93IiwiZGVtb1JlZHVjZXIiLCJzaG93UXVpY2tWaWV3IiwicmVtb3ZlRnJvbVdpc2hsaXN0Iiwid2lzaGxpc3RSZWR1Y2VyIiwid2lzaGxpc3RTYWdhIiwiY2FydFByaWNlVG90YWwiLCJjYXJ0UXR5VG90YWwiLCJpc0luQ2FydCIsImZpbmQiLCJpc0luQ29tcGFyZSIsImNvbXBhcmUiLCJpc1NhZmFyaUJyb3dzZXIiLCJzVXNyQWciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNFZGdlQnJvd3NlciIsImdldEluZGV4IiwiZWxlbWVudCIsImNoaWxkcmVuIiwicGFyZW50RWxlbWVudCIsImkiLCJjYXRGaWx0ZXIiLCJwcm9kdWN0cyIsImZsYWciLCJhdHRyRmlsdGVyIiwiYXR0ciIsInVudGlsIiwic2Nyb2xsVG9QYWdlQ29udGVudCIsInRvIiwiZG9jdW1lbnQiLCJvZmZzZXRUb3AiLCJwb3MiLCJwYWdlWU9mZnNldCIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxCeSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJwYXJhbGxheCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiY291bnRUbyIsIml0ZW1zIiwiYW1vdW50IiwiZ2V0QXR0cmlidXRlIiwidGltZSIsImludGVydmFsIiwicHQiLCJjb3VudFRvU2Nyb2xsSGFuZGxlciIsImlubmVySFRNTCIsInNhZmVDb250ZW50IiwiaHRtbCIsIlNDUklQVF9SRUdFWCIsInRlc3QiLCJyZXBsYWNlIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsR0FBVCxDQUFlQyxLQUFmLEVBQXVCO0FBQ25CLFFBQU07QUFBRUMsU0FBSyxHQUFHLENBQVY7QUFBYUMsV0FBTyxHQUFHLEVBQXZCO0FBQTJCQyxPQUFHLEdBQUcsS0FBakM7QUFBd0NDO0FBQXhDLE1BQXNESixLQUE1RDtBQUNBLFFBQU07QUFBQSxPQUFFSyxPQUFGO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBRU4sS0FBRixDQUF4QztBQUVBTyxrREFBUyxDQUFFLE1BQU07QUFDYkYsY0FBVSxDQUFFTCxLQUFGLENBQVY7QUFDSCxHQUZRLEVBRU4sQ0FBRUEsS0FBRixDQUZNLENBQVQ7QUFJQU8sa0RBQVMsQ0FBRSxNQUFNO0FBQ2JKLGFBQVMsSUFBSUEsU0FBUyxDQUFFQyxPQUFGLENBQXRCO0FBQ0gsR0FGUSxFQUVOLENBQUVBLE9BQUYsQ0FGTSxDQUFUOztBQUlBLFdBQVNJLFNBQVQsR0FBc0I7QUFDbEIsUUFB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LENBQW1CRixJQUFuQixDQUFSLEVBQW9DO0FBQ2hDQSxRQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFjRixZQUFkLEVBQTRCLEVBQTVCLENBQVA7QUFDSCxHQU5nQyxDQVFqQzs7O0FBQ0FELE1BQUksR0FBR0EsSUFBSSxDQUFDRyxPQUFMLENBQWMsaUJBQWQsRUFBaUMsRUFBakMsQ0FBUDtBQUVBLFNBQU87QUFDSEMsVUFBTSxFQUFFSjtBQURMLEdBQVA7QUFHSCxDIiwiZmlsZSI6ImNvbXBvbmVudHNfcGFydGlhbHNfcHJvZHVjdF9kZXRhaWxzX2RldGFpbC1vbmVfanN4LXNlcnZlcl9xdWVyaWVzX2pzLXN0b3JlX2NvbXBhcmVfanMtc3RvcmVfZGVtb19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUXR5ICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlID0gMSwgYWRDbGFzcyA9IFwiXCIsIG1heCA9IDEwMDAwLCBjaGFuZ2VRdHkgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gPSB1c2VTdGF0ZSggdmFsdWUgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50KCB2YWx1ZSApO1xyXG4gICAgfSwgWyB2YWx1ZSBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjaGFuZ2VRdHkgJiYgY2hhbmdlUXR5KCBjdXJyZW50ICk7XHJcbiAgICB9LCBbIGN1cnJlbnQgXSApXHJcblxyXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50ICgpIHtcclxuICAgICAgICBpZiAoIG1heCA8PSAwIHx8IGN1cnJlbnQgPj0gbWF4IClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNldEN1cnJlbnQoIGN1cnJlbnQgKyAxICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVjcmVtZW50ICgpIHtcclxuICAgICAgICBpZiAoIGN1cnJlbnQgPiAxICkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50KCBjdXJyZW50IC0gMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50ICggZSApIHtcclxuICAgICAgICBpZiAoIHBhcnNlSW50KCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgKSA8IG1heCApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudCggcGFyc2VJbnQoIGUuY3VycmVudFRhcmdldC52YWx1ZSApICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdC1kZXRhaWxzLXF1YW50aXR5ICR7YWRDbGFzc31gIH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtc3Bpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgbWluV2lkdGg6ICcyNnB4JyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWNyZW1lbnQgYnRuLXNwaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZGVjcmVtZW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1heD17IG1heCB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBjdXJyZW50IH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgY2hhbmdlQ3VycmVudCB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBtaW5XaWR0aDogJzI2cHgnIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluY3JlbWVudCBidG4tc3Bpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgaW5jcmVtZW50IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF0eTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgU2xpZGVUb2dnbGUgZnJvbSAncmVhY3Qtc2xpZGUtdG9nZ2xlJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5pbXBvcnQgUXR5IGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9xdHknO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyBhcyB3aXNobGlzdEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvd2lzaGxpc3QnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNhcnRBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5cclxuaW1wb3J0IHsgY2FuQWRkVG9DYXJ0LCBpc0luV2lzaGxpc3QgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIERldGFpbE9uZSAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoIG51bGwgKTtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIHF0eSwgc2V0UXR5IF0gPSB1c2VTdGF0ZSggMSApO1xyXG4gICAgY29uc3QgWyBxdHkyLCBzZXRRdHkyIF0gPSB1c2VTdGF0ZSggMSApO1xyXG4gICAgY29uc3QgWyBjb2xvckFycmF5LCBzZXRDb2xvckFycmF5IF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFsgc2l6ZUFycmF5LCBzZXRTaXplQXJyYXkgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyB2YXJpYXRpb25Hcm91cCwgc2V0VmFyaWF0aW9uR3JvdXAgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzZWxlY3RlZFZhcmlhbnQsIHNldFNlbGVjdGVkVmFyaWFudCBdID0gdXNlU3RhdGUoIHsgY29sb3I6IG51bGwsIGNvbG9yTmFtZTogbnVsbCwgcHJpY2U6IG51bGwsIHNpemU6IFwiXCIgfSApO1xyXG4gICAgY29uc3QgWyBzaG93Q2xlYXIsIHNldFNob3dDbGVhciBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBbIHNob3dWYXJpYXRpb25QcmljZSwgc2V0U2hvd1ZhcmlhdGlvblByaWNlIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuICAgIGNvbnN0IFsgbWF4UHJpY2UsIHNldE1heFByaWNlIF0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgWyBtaW5QcmljZSwgc2V0TWluUHJpY2UgXSA9IHVzZVN0YXRlKCA5OTk5OSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwge1xyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1pbiA9IDk5OTk5O1xyXG4gICAgICAgIGxldCBtYXggPSAwO1xyXG5cclxuICAgICAgICBzZXRWYXJpYXRpb25Hcm91cCggcHJvZHVjdC52YXJpYW50cy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGN1ci5zaXplLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhY2MucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjdXIuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGN1ci5wcmljZVxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGlmICggbWluID4gY3VyLnByaWNlICkgbWluID0gY3VyLnByaWNlO1xyXG4gICAgICAgICAgICBpZiAoIG1heCA8IGN1ci5wcmljZSApIG1heCA9IGN1ci5wcmljZTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCBbXSApICk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgbWluID0gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBtYXggPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TWluUHJpY2UoIG1pbiApO1xyXG4gICAgICAgIHNldE1heFByaWNlKCBtYXggKTtcclxuICAgIH0sIFsgcHJvZHVjdCBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHsgY29sb3I6IG51bGwsIGNvbG9yTmFtZTogbnVsbCwgcHJpY2U6IG51bGwsIHNpemU6IFwiXCIgfSApO1xyXG4gICAgICAgIHNldFF0eSggMSApO1xyXG4gICAgICAgIHNldFF0eTIoIDEgKTtcclxuICAgIH0sIFsgcm91dGVyLnF1ZXJ5LnNsdWcgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgcmVmcmVzaFNlbGVjdGFibGVHcm91cCgpO1xyXG4gICAgfSwgWyB2YXJpYXRpb25Hcm91cCwgc2VsZWN0ZWRWYXJpYW50IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNjcm9sbEhhbmRsZXIoKTtcclxuICAgIH0sIFsgcm91dGVyLnBhdGhuYW1lIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dDbGVhciggKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgfHwgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApID8gdHJ1ZSA6IGZhbHNlICk7XHJcbiAgICAgICAgc2V0U2hvd1ZhcmlhdGlvblByaWNlKCAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciAmJiBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgPyB0cnVlIDogZmFsc2UgKTtcclxuICAgICAgICBsZXQgdG9nZ2xlID0gcmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvciggJy52YXJpYXRpb24tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICBpZiAoIHRvZ2dsZSApIHtcclxuICAgICAgICAgICAgaWYgKCAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciAmJiBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgJiYgdG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyggJ2NvbGxhcHNlZCcgKSApIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoICggISggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSApICYmICF0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY29sbGFwc2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbIHNlbGVjdGVkVmFyaWFudCBdIClcclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyICgpIHtcclxuICAgICAgICBpZiAoIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyggJy9wcm9kdWN0L2RlZmF1bHQnICkgKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGlja3lCYXIgPSByZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1iYXInICk7XHJcbiAgICAgICAgICAgIGlmICggc3RpY2t5QmFyLmNsYXNzTGlzdC5jb250YWlucyggJ2Qtbm9uZScgKSAmJiByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCAwICkge1xyXG4gICAgICAgICAgICAgICAgc3RpY2t5QmFyLmNsYXNzTGlzdC5yZW1vdmUoICdkLW5vbmUnICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCAhc3RpY2t5QmFyLmNsYXNzTGlzdC5jb250YWlucyggJ2Qtbm9uZScgKSAmJiByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAwICkge1xyXG4gICAgICAgICAgICAgICAgc3RpY2t5QmFyLmNsYXNzTGlzdC5hZGQoICdkLW5vbmUnICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25XaXNobGlzdENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb1dpc2hsaXN0KCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goICcvcGFnZXMvd2lzaGxpc3QnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hTZWxlY3RhYmxlR3JvdXAgKCkge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyYXkgPSBbIC4uLnZhcmlhdGlvbkdyb3VwIF07XHJcbiAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IHZhcmlhdGlvbkdyb3VwLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICE9PSBjdXIuY29sb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbIC4uLmFjYywgY3VyIF07XHJcbiAgICAgICAgICAgIH0sIFtdICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaXplQXJyYXkoIHRlbXBBcnJheS5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYWNjLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNpemUgPT0gY3VyLnNpemUgKSAhPT0gLTEgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICB9LCBbXSApICk7XHJcblxyXG4gICAgICAgIHRlbXBBcnJheSA9IFsgLi4udmFyaWF0aW9uR3JvdXAgXTtcclxuICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5zaXplICkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkgPSB2YXJpYXRpb25Hcm91cC5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5zaXplICE9PSBjdXIuc2l6ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbG9yQXJyYXkoIHByb2R1Y3QudmFyaWFudHMucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0ZW1wQXJyYXkuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uY29sb3IgPT0gY3VyLmNvbG9yICkgPT0gLTFcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjdXIuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZTogY3VyLmNvbG9yX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjdXIuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RDb2xvciAoIGUsIGl0ZW0gKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKCBpdGVtLmNvbG9yID09IHNlbGVjdGVkVmFyaWFudC5jb2xvciApIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCB7XHJcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZFZhcmlhbnQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvbG9yTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlXHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHtcclxuICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBpdGVtLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lOiBpdGVtLmNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlXHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0U2l6ZSAoIGUgKSB7XHJcbiAgICAgICAgaWYgKCBlLnRhcmdldC52YWx1ZSA9PSBcIlwiICkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHsgLi4uc2VsZWN0ZWRWYXJpYW50LCBzaXplOiBcIlwiIH0gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHsgLi4uc2VsZWN0ZWRWYXJpYW50LCBzaXplOiBlLnRhcmdldC52YWx1ZSB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUXR5ICggY3VycmVudCApIHtcclxuICAgICAgICBzZXRRdHkoIGN1cnJlbnQgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVF0eTIgKCBjdXJyZW50ICkge1xyXG4gICAgICAgIHNldFF0eTIoIGN1cnJlbnQgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbiAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggKCB7XHJcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgY29sb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGNvbG9yTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgc2l6ZTogXCJcIlxyXG4gICAgICAgIH0gKSApO1xyXG4gICAgICAgIHJlZnJlc2hTZWxlY3RhYmxlR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNhcnRDbGljayAoIGUsIGluZGV4ID0gMCApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnYnRuLWRpc2FibGVkJyApICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbmV3UHJvZHVjdCA9IHsgLi4ucHJvZHVjdCB9O1xyXG4gICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICBuZXdQcm9kdWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAnIC0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50LmNvbG9yTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJywgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50LnNpemUsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogc2VsZWN0ZWRWYXJpYW50LnByaWNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BzLmFkZFRvQ2FydChcclxuICAgICAgICAgICAgbmV3UHJvZHVjdCxcclxuICAgICAgICAgICAgaW5kZXggPT0gMCA/IHF0eSA6IHF0eTJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggIXByb2R1Y3QgKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHNcIiByZWY9eyByZWYgfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj57IHByb2R1Y3QubmFtZSB9PC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy12YWxcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIj57IHByb2R1Y3QucmF0aW5ncy50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5ncy10ZXh0XCI+KCB7IHByb2R1Y3QucmV2aWV3IH0gUmV2aWV3cyApPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxwPnsgcHJvZHVjdC5zaG9ydF9kZXNjIH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29sb3I6PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2IHByb2R1Y3QtbmF2LWRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQXJyYXkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYCR7KCBpdGVtLmNvbG9yID09IHNlbGVjdGVkVmFyaWFudC5jb2xvciA/ICdhY3RpdmUgJyA6ICcnICkgKyAoIGl0ZW0uZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycgKX1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBzZWxlY3RDb2xvciggZSwgaXRlbSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2l6ZVwiPlNpemU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHNlbGVjdGVkVmFyaWFudC5zaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBzZWxlY3RTaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSBzaXplPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVBcnJheS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0uc2l6ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+eyBpdGVtLnNpemUgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpemUtZ3VpZGUgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tdGgtbGlzdFwiPjwvaT5zaXplIGd1aWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGVhciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17IGNsZWFyU2VsZWN0aW9uIH0+Y2xlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYGQtbm9uZSB2YXJpYXRpb24tdG9nZ2xlICR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKX1gIH0gb25DbGljaz17IG9uVG9nZ2xlIH0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0gc3R5bGU9eyB7IG92ZXJmbG93OiAnaGlkZGVuJyB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyBzZWxlY3RlZFZhcmlhbnQucHJpY2UgPyBzZWxlY3RlZFZhcmlhbnQucHJpY2UudG9GaXhlZCggMiApIDogMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZpbHRlci1yb3cgZGV0YWlscy1yb3ctc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdHlcIj5RdHk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxRdHkgY2hhbmdlUXR5PXsgb25DaGFuZ2VRdHkgfSBtYXg9eyBwcm9kdWN0LnN0b2NrIH0gdmFsdWU9eyBxdHkgfT48L1F0eT5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLXByb2R1Y3QgYnRuLWNhcnQgJHsoICFjYW5BZGRUb0NhcnQoIHByb3BzLmNhcnRsaXN0LCBwcm9kdWN0LCBxdHkgKSB8fCAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCAmJiAhc2hvd1ZhcmlhdGlvblByaWNlICkgKSA/ICdidG4tZGlzYWJsZWQnIDogJyd9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IGUgPT4gb25DYXJ0Q2xpY2soIGUsIDAgKSB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXdpc2hsaXN0IGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+R28gdG8gV2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXdpc2hsaXN0XCIgb25DbGljaz17IG9uV2lzaGxpc3RDbGljayB9PjxzcGFuPkFkZCB0byBXaXNobGlzdDwvc3Bhbj48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXQgdy0xMDAgdGV4dC10cnVuY2F0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNhdGVnb3J5Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkubWFwKCAoIGNhdCwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXsgeyBwYXRobmFtZTogJy9zaG9wL3NpZGViYXIvbGlzdCcsIHF1ZXJ5OiB7IGNhdGVnb3J5OiBjYXQuc2x1ZyB9IH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57IGNhdC5uYW1lIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5kZXggPCBwcm9kdWN0LmNhdGVnb3J5Lmxlbmd0aCAtIDEgPyAnLCcgOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBzb2NpYWwtaWNvbnMtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzb2NpYWwtbGFiZWxcIj5TaGFyZTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkZhY2Vib29rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJUd2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJJbnN0YWdyYW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiUGludGVyZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGludGVyZXN0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1iYXIgZC1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS51cmwgfSBhbHQ9XCJwcm9kdWN0XCIgd2lkdGg9eyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0ud2lkdGggfSBoZWlnaHQ9eyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0uaGVpZ2h0IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PnsgcHJvZHVjdC5uYW1lIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsgc2VsZWN0ZWRWYXJpYW50LnByaWNlID8gc2VsZWN0ZWRWYXJpYW50LnByaWNlLnRvRml4ZWQoIDIgKSA6IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXR5IGNoYW5nZVF0eT17IG9uQ2hhbmdlUXR5MiB9IG1heD17IHByb2R1Y3Quc3RvY2sgfSB2YWx1ZT17IHF0eTIgfT48L1F0eT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1wcm9kdWN0IGJ0bi1jYXJ0ICR7KCAhY2FuQWRkVG9DYXJ0KCBwcm9wcy5jYXJ0bGlzdCwgcHJvZHVjdCwgcXR5ICkgfHwgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgJiYgIXNob3dWYXJpYXRpb25QcmljZSApICkgPyAnYnRuLWRpc2FibGVkJyA6ICcnfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBvbkNhcnRDbGljayggZSwgMSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXdpc2hsaXN0IGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+R28gdG8gV2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXdpc2hsaXN0XCIgb25DbGljaz17IG9uV2lzaGxpc3RDbGljayB9PjxzcGFuPkFkZCB0byBXaXNobGlzdDwvc3Bhbj48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2FydGxpc3Q6IHN0YXRlLmNhcnRsaXN0LmRhdGEsXHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyAuLi53aXNobGlzdEFjdGlvbiwgLi4uY2FydEFjdGlvbiB9ICkoIERldGFpbE9uZSApO1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0cygkc2VhcmNoVGVybTogU3RyaW5nLCAkY29sb3I6IFtTdHJpbmddLCAkc2l6ZTogW1N0cmluZ10sICRicmFuZDogW1N0cmluZ10sICRtaW5QcmljZTogSW50LCAkbWF4UHJpY2U6IEludCwgJGNhdGVnb3J5OiBTdHJpbmcsICRyYXRpbmc6IFtTdHJpbmddLCAkc29ydEJ5OiBTdHJpbmcsICRwYWdlOiBJbnQgPSAxLCAkcGVyUGFnZTogSW50LCAkbGlzdDogQm9vbGVhbiA9IGZhbHNlLCAkZnJvbTogSW50ID0gMCkge1xyXG4gICAgICAgIHByb2R1Y3RzKGRlbW86ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT30sIHNlYXJjaFRlcm06ICRzZWFyY2hUZXJtLCBjb2xvcjogJGNvbG9yLCBzaXplOiAkc2l6ZSwgYnJhbmQ6ICRicmFuZCwgbWluUHJpY2U6ICRtaW5QcmljZSwgbWF4UHJpY2U6ICRtYXhQcmljZSwgY2F0ZWdvcnk6ICRjYXRlZ29yeSwgcmF0aW5nOiAkcmF0aW5nLCBzb3J0Qnk6ICRzb3J0QnksIHBhZ2U6ICRwYWdlLCBwZXJQYWdlOiAkcGVyUGFnZSwgbGlzdDogJGxpc3QsIGZyb206ICRmcm9tKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9kZXNjIEBpbmNsdWRlKGlmOiAkbGlzdClcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1QgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0KCRzbHVnOiBTdHJpbmchLCAkb25seURhdGE6IEJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHByb2R1Y3QoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSwgc2x1ZzogJHNsdWcsIG9ubHlEYXRhOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgc2luZ2xlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgc2hvcnRfZGVzY1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmFuZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXYgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbGF0ZWQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRUxFTUVOVF9QUk9EVUNUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IGVsZW1lbnRQcm9kdWN0cyB7XHJcbiAgICAgICAgZWxlbWVudFByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9FTEVNRU5UX1BPU1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgZWxlbWVudFBvc3RzIHtcclxuICAgICAgICBlbGVtZW50UG9zdHMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RTX0JZX1BBR0UgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0c0J5UGFnZSAoJHBhZ2U6IFN0cmluZyEsICRjYXRlZ29yeTogU3RyaW5nKSB7XHJcbiAgICAgICAgcG9zdHNCeVBhZ2UocGFnZTogJHBhZ2UsIGNhdGVnb3J5OiAkY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVCA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3QoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICBwb3N0KHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmV2IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWxhdGVkIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX0RBVEEgPSBncWxgXHJcbiAgICBxdWVyeSBob21lRGF0YSB7XHJcbiAgICAgICAgaG9tZURhdGEoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9zdHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb0NhcnQ6IFwiQUREX1RPX0NBUlRcIixcclxuICAgIHJlbW92ZUZyb21DYXJ0OiBcIlJFTU9WRV9GUk9NX0NBUlRcIixcclxuICAgIHJlZnJlc2hTdG9yZTogXCJSRUZSRVNIX1NUT1JFXCIsXHJcbiAgICB1cGRhdGVDYXJ0OiBcIlVQREFURV9DQVJUXCIsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuYWRkVG9DYXJ0OlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICk7XHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBhY3Rpb24ucGF5bG9hZC5xdHkgPyBhY3Rpb24ucGF5bG9hZC5xdHkgOiAxO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCAhPT0gLTEgJiYgYWN0aW9uLnBheWxvYWQucHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5uYW1lID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCAhPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YS5yZWR1Y2UoICggYWNjLCBwcm9kdWN0LCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZmluZEluZGV4ID09IGluZGV4ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogcHJvZHVjdC5xdHkgKyBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bTogKCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlICkgKiAoIHByb2R1Y3QucXR5ICsgcXR5IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10gKVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlID8gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlIDogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bTogcXR5ICogKCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXRlbS5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMudXBkYXRlQ2FydDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5jYXJ0SXRlbXNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvQ2FydDogKCBwcm9kdWN0LCBxdHkgPSAxICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9DYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdCxcclxuICAgICAgICAgICAgcXR5OiBxdHlcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6ICggcHJvZHVjdCApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICB1cGRhdGVDYXJ0OiAoIGNhcnRJdGVtcyApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnVwZGF0ZUNhcnQsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtc1xyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNhcnRTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuYWRkVG9DYXJ0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIENhcnRcIiApO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNhcnQsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIENhcnRcIiApO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMudXBkYXRlQ2FydCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiQ2FydCB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiICk7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwibW9sbGEtXCIsXHJcbiAgICBrZXk6IFwiY2FydFwiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgY2FydFJlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb0NvbXBhcmU6ICdBRERfVE9fQ09NUEFSRScsXHJcbiAgICByZW1vdmVGcm9tQ29tcGFyZTogJ1JFTU9WRV9GUk9NX0NPTVBBUkUnLFxyXG4gICAgY2xlYXJBbGxGcm9tQ29tcGFyZTogJ0NMRUFSX0FMTF9GUk9NX0NPTVBBUkUnLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRSdcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBhcmVSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmU6XHJcbiAgICAgICAgICAgIHZhciBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmlkID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKTtcclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ29tcGFyZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgIT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuY2xlYXJBbGxGcm9tQ29tcGFyZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkVG9Db21wYXJlOiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFkZFRvQ29tcGFyZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbUNvbXBhcmU6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIGNsZWFyQWxsRnJvbUNvbXBhcmU6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmNsZWFyQWxsRnJvbUNvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge31cclxuICAgIH0gKSxcclxuXHJcbiAgICByZWZyZXNoU3RvcmU6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZSxcclxuICAgICAgICBwYXlsb2FkOiB7fVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY29tcGFyZVNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmUsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgYWRkZWQgdG8gQ29tcGFyZVwiICk7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6ICdtb2xsYS0nLFxyXG4gICAga2V5OiAnY29tcGFyZScsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBjb21wYXJlUmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBzaG93UXVpY2s6ICdTSE9XX1FVSUNLVklFVycsXHJcbiAgICBoaWRlUXVpY2s6ICdISURFX1FVSUNLVklFVycsXHJcbiAgICBzaG93VmlkZW86ICdTSE9XX1ZJREVPJyxcclxuICAgIGhpZGVWaWRlbzogJ0hJREVfVklERU8nLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRSdcclxufTtcclxuXHJcbmxldCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PLFxyXG4gICAgc2luZ2xlOiBudWxsLFxyXG4gICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgIHZpZGVvU2hvdzogZmFsc2UsXHJcbn07XHJcbmNvbnN0IGRlbW9SZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5zaG93UXVpY2s6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogYWN0aW9uLnBheWxvYWQuc2x1ZyxcclxuICAgICAgICAgICAgICAgIHF1aWNrU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmhpZGVRdWljazpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuc2hvd1ZpZGVvOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlkZW9TaG93OiB0cnVlIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5oaWRlVmlkZW86XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aWRlb1Nob3c6IGZhbHNlIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZpZGVvU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICByZWZyZXNoU3RvcmU6ICggY3VycmVudCApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgc2hvd1F1aWNrVmlldzogc2x1ZyA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5zaG93UXVpY2ssXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBzbHVnOiBzbHVnXHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIGhpZGVRdWljazogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaGlkZVF1aWNrLFxyXG4gICAgfSApLFxyXG5cclxuICAgIHNob3dWaWRlbzogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuc2hvd1ZpZGVvLFxyXG4gICAgfSApLFxyXG5cclxuICAgIGhpZGVWaWRlbzogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaGlkZVZpZGVvXHJcbiAgICB9IClcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJtb2xsYS1cIixcclxuICAgIGtleTogXCJkZW1vXCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBkZW1vUmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIGFkZFRvV2lzaGxpc3Q6ICdBRERfVE9fV0lTSExJU1QnLFxyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0OiAnUkVNT1ZFX0ZST01fV0lTSExJU1QnLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRScsXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdLFxyXG59XHJcblxyXG5jb25zdCB3aXNobGlzdFJlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmFkZFRvV2lzaGxpc3Q6XHJcbiAgICAgICAgICAgIHZhciBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICk7XHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ID09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVtb3ZlRnJvbVdpc2hsaXN0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogc3RhdGUuZGF0YS5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkVG9XaXNobGlzdDogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3Q6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVtb3ZlRnJvbVdpc2hsaXN0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdpc2hsaXN0U2FnYSAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLmFkZFRvV2lzaGxpc3QsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgYWRkZWQgdG8gV2lzaGxpc3RcIiApO1xyXG4gICAgfSApXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwibW9sbGEtXCIsXHJcbiAgICBrZXk6ICd3aXNobGlzdCcsXHJcbiAgICBzdG9yYWdlLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgd2lzaGxpc3RSZWR1Y2VyICk7IiwiLyoqXHJcbiAqIGdldCB0b3RhbCBQcmljZSBvZiBwcm9kdWN0cyBpbiBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHJldHVybiB7IEZsb2F0IH0gdG90YWxQcmljZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhcnRQcmljZVRvdGFsID0gY2FydEl0ZW1zID0+IHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhY2MgKyBjdXIuc3VtXHJcbiAgICB9LCAwICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZXQgbnVtYmVyIG9mIHByb2R1Y3RzIGluIGNhcnRcclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEByZXR1cm4geyBJbnRlZ2VyIH0gbnVtYmVycyBvZiBjYXJ0IGl0ZW1zIGluIGNhcnRsaXN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FydFF0eVRvdGFsID0gY2FydEl0ZW1zID0+IHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhY2MgKyBwYXJzZUludCggY3VyLnF0eSwgMTAgKTtcclxuICAgIH0sIDAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY2lkZSB3aGVyZSBwcm9kdWN0IGlzIGluIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcGFyYW0geyBPYmplY3QgfSBwcm9kdWN0IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSW5DYXJ0ID0gKCBjYXJ0SXRlbXMsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLmZpbmQoIGl0ZW0gPT4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkICkgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maXJtIGlmIHByb2R1Y3QgY291bGQgYmUgYWRkZWQgdG8gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEBwYXJhbSB7IE9iamVjdCB9IHByb2R1Y3QgXHJcbiAqIEBwYXJhbSB7IE51bWJlciB9IHF0eSBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYW5BZGRUb0NhcnQgPSAoIGNhcnRJdGVtcywgcHJvZHVjdCwgcXR5ICkgPT4ge1xyXG4gICAgbGV0IGZpbmQgPSBjYXJ0SXRlbXMuZmluZCggaXRlbSA9PiBpdGVtLmlkID09IHByb2R1Y3QuaWQgKTtcclxuICAgIGlmICggZmluZCApIHtcclxuICAgICAgICBpZiAoIHByb2R1Y3Quc3RvY2sgPT0gMCB8fCAoIHByb2R1Y3Quc3RvY2sgPCAoIGZpbmQucXR5ICsgcXR5ICkgKSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIHByb2R1Y3Quc3RvY2sgPT0gMCB8fCAoIHByb2R1Y3Quc3RvY2sgPCBxdHkgKSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHdpc2hsaXN0IFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luV2lzaGxpc3QgPSAoIHdpc2hsaXN0LCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y3QgJiYgd2lzaGxpc3QuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PSBwcm9kdWN0LnNsdWcgKSA+IC0xO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGNvbXBhcmUgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9kdWN0IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSW5Db21wYXJlID0gKCBjb21wYXJlLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y3QgJiYgY29tcGFyZS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5zbHVnID09IHByb2R1Y3Quc2x1ZyApID4gLTE7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZGV0ZWN0IHNhZmFyaSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNTYWZhcmlCcm93c2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNVc3JBZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBpZiAoIHNVc3JBZy5pbmRleE9mKCAnU2FmYXJpJyApICE9PSAtMSAmJiBzVXNyQWcuaW5kZXhPZiggJ0Nocm9tZScgKSA9PT0gLTEgKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBFZGdlIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0VkZ2VCcm93c2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNVc3JBZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBpZiAoIHNVc3JBZy5pbmRleE9mKCBcIkVkZ2VcIiApID4gLTEgKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogZ2V0IGluZGV4IG9mIHRoZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRJbmRleCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbjtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGlmICggZWxlbWVudCA9PSBjaGlsZHJlblsgaSBdICkgcmV0dXJuIGk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmaWx0ZXIgcHJvZHVjdHMgYnkgY2F0ZWdvcnkuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb2R1Y3RzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBjYXRlZ29yeSBcclxuICogQHBhcmFtIHtCb29sZWFufSBmbGFnIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhdEZpbHRlciA9IGZ1bmN0aW9uICggcHJvZHVjdHMgPSBbXSwgY2F0ZWdvcnksIGZsYWcgPSBmYWxzZSApIHtcclxuICAgIGlmICggY2F0ZWdvcnlbIDAgXSA9PT0gJ0FsbCcgKSByZXR1cm4gcHJvZHVjdHM7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlciggaXRlbSA9PiB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnkubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIGlmICggaXRlbS5jYXRlZ29yeS5maW5kKCBjYXQgPT4gY2F0LnNsdWcgPT0gY2F0ZWdvcnlbIGkgXSApICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhZmxhZyApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBmbGFnICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGZsYWcgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gKVxyXG59XHJcblxyXG4vKipcclxuICogZmlsdGVyIHByb2R1Y3RzIGJ5IGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9kdWN0cyBcclxuICogQHBhcmFtIHtTdHJpbmd9IGF0dHIgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXR0ckZpbHRlciA9IGZ1bmN0aW9uICggcHJvZHVjdHMgPSBbXSwgYXR0ciApIHtcclxuICAgIC8vIGlmKHByb2R1Y3RzKVxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlciggaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAnYWxsJyApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdzYWxlJyAmJiBpdGVtLnNhbGVfcHJpY2UgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAncmF0ZWQnICYmIGl0ZW0ucmF0aW5ncyA+IDMgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAndW50aWwnICYmIGl0ZW0udW50aWwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1bIGF0dHIgXSA9PT0gdHJ1ZTtcclxuICAgIH0gKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjcm9sbGluZyB0byBQYWdlIGNvbnRlbnQgc2VjdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNjcm9sbFRvUGFnZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2UtY29udGVudCcgKVxyXG4gICAgICAgIC5vZmZzZXRUb3AgLSA3NDtcclxuICAgIGlmICggaXNTYWZhcmlCcm93c2VyKCkgfHwgaXNFZGdlQnJvd3NlcigpICkge1xyXG4gICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHBvcyA8PSB0byApIGNsZWFySW50ZXJ2YWwoIHRpbWVySWQgKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoIDAsIC0xMjAgKTtcclxuICAgICAgICAgICAgICAgIHBvcyAtPSAxMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygge1xyXG4gICAgICAgICAgICB0b3A6IHRvLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBtYWtlIGJhY2tncm91bmQgcGFyYWxsYXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJhbGxheCA9ICgpID0+IHtcclxuICAgIGxldCBwYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuYmctcGFyYWxsYXgnICk7XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYWxsYXgubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgbGV0IHkgPSAwO1xyXG4gICAgICAgIGlmICggcGFyYWxsYXhbIGkgXS5jbGFzc0xpc3QuY29udGFpbnMoICdoZWFkZXItcGFyYWxsYXgnICkgKSB7XHJcbiAgICAgICAgICAgIHkgPSAoIDEwIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgKiA0NyAvIDkwMCArIDUwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHkgPSAoIHBhcmFsbGF4WyBpIF0ub2Zmc2V0VG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgKiA0NyAvIHBhcmFsbGF4WyBpIF0ub2Zmc2V0VG9wICsgNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJhbGxheFsgaSBdLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSB5ICsgJyUnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gc2V0IGNvdW50IHRvIGluIGFib3V0LTJcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb3VudFRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb3VudCcgKTtcclxuXHJcbiAgICBpZiAoIGl0ZW1zICkge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1sgaSBdO1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS10bycgKSwgMTAgKSAtIHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtZnJvbScgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLXNwZWVkJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLXJlZnJlc2gtaW50ZXJ2YWwnICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCBwdCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgbGV0IGZsYWcgPSAwO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJzY3JvbGxcIiwgY291bnRUb1Njcm9sbEhhbmRsZXIsIHRydWUgKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50VG9TY3JvbGxIYW5kbGVyICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICggcHQgPD0gdGltZSAmJiBoZWlnaHQgPj0gd2luZG93LnBhZ2VZT2Zmc2V0ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggMCA9PT0gZmxhZyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwdCA+PSB0aW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVySWQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IHBhcnNlSW50KCAoIHB0ICogYW1vdW50ICkgLyB0aW1lICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHB0ICsgaW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGludGVydmFsICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IFhzcyBBdHRhY2tcclxuICogQHBhcmFtIHtOb2RlfSBodG1sIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVDb250ZW50ICggaHRtbCApIHtcclxuICAgIGNvbnN0IFNDUklQVF9SRUdFWCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpO1xyXG5cclxuICAgIC8vIFJlbW92aW5nIHRoZSA8c2NyaXB0PiB0YWdzXHJcbiAgICB3aGlsZSAoIFNDUklQVF9SRUdFWC50ZXN0KCBodG1sICkgKSB7XHJcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSggU0NSSVBUX1JFR0VYLCBcIlwiICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZpbmcgYWxsIGV2ZW50cyBmcm9tIHRhZ3MuLi5cclxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIC8gb25cXHcrPVwiW15cIl0qXCIvZywgXCJcIiApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgX19odG1sOiBodG1sXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9