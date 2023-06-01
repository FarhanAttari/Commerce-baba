self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/partials/product/details/detail-one.jsx":
/*!************************************************************!*\
  !*** ./components/partials/product/details/detail-one.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slide-toggle */ "./node_modules/react-slide-toggle/dist/ReactSlideToggle.esm.es2015.js");
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_qty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/qty */ "./components/features/qty.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\product\\details\\detail-one.jsx",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function DetailOne(props) {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var product = props.product;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      qty = _useState[0],
      setQty = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      qty2 = _useState2[0],
      setQty2 = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      colorArray = _useState3[0],
      setColorArray = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      sizeArray = _useState4[0],
      setSizeArray = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      variationGroup = _useState5[0],
      setVariationGroup = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    color: null,
    colorName: null,
    price: null,
    size: ""
  }),
      selectedVariant = _useState6[0],
      setSelectedVariant = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      showClear = _useState7[0],
      setShowClear = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      showVariationPrice = _useState8[0],
      setShowVariationPrice = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      maxPrice = _useState9[0],
      setMaxPrice = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(99999),
      minPrice = _useState10[0],
      setMinPrice = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    window.addEventListener('scroll', scrollHandler, {
      passive: true
    });
    return function () {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var min = 99999;
    var max = 0;
    setVariationGroup(product.variants.reduce(function (acc, cur) {
      cur.size.map(function (item) {
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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setSelectedVariant({
      color: null,
      colorName: null,
      price: null,
      size: ""
    });
    setQty(1);
    setQty2(1);
  }, [router.query.slug]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    refreshSelectableGroup();
  }, [variationGroup, selectedVariant]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    scrollHandler();
  }, [router.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setShowClear(selectedVariant.color || selectedVariant.size != "" ? true : false);
    setShowVariationPrice(selectedVariant.color && selectedVariant.size != "" ? true : false);
    var toggle = ref.current.querySelector('.variation-toggle');

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
      var stickyBar = ref.current.querySelector('.sticky-bar');

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

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function refreshSelectableGroup() {
    var tempArray = (0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(variationGroup);

    if (selectedVariant.color) {
      tempArray = variationGroup.reduce(function (acc, cur) {
        if (selectedVariant.color !== cur.color) {
          return acc;
        }

        return [].concat((0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(acc), [cur]);
      }, []);
    }

    setSizeArray(tempArray.reduce(function (acc, cur) {
      if (acc.findIndex(function (item) {
        return item.size == cur.size;
      }) !== -1) return acc;
      return [].concat((0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(acc), [cur]);
    }, []));
    tempArray = (0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(variationGroup);

    if (selectedVariant.size) {
      tempArray = variationGroup.reduce(function (acc, cur) {
        if (selectedVariant.size !== cur.size) {
          return acc;
        }

        return [].concat((0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(acc), [cur]);
      }, []);
    }

    setColorArray(product.variants.reduce(function (acc, cur) {
      if (tempArray.findIndex(function (item) {
        return item.color == cur.color;
      }) == -1) {
        return [].concat((0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(acc), [{
          color: cur.color,
          colorName: cur.color_name,
          price: cur.price,
          disabled: true
        }]);
      }

      return [].concat((0,D_sir_project_dashboard_admin_pannel_and_client_project_binnissar_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(acc), [{
        color: cur.color,
        colorName: cur.color_name,
        price: cur.price,
        disabled: false
      }]);
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

  function onCartClick(e) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    e.preventDefault();
    if (e.currentTarget.classList.contains('btn-disabled')) return;

    var newProduct = _objectSpread({}, product);

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
  }, product.short_desc)), product.variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, __jsx("div", {
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
  }, colorArray.map(function (item, index) {
    return __jsx("a", {
      href: "#",
      className: "".concat((item.color == selectedVariant.color ? 'active ' : '') + (item.disabled ? 'disabled' : '')),
      style: {
        backgroundColor: item.color
      },
      key: index,
      onClick: function onClick(e) {
        return selectColor(e, item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 41
      }
    });
  }))), __jsx("div", {
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
  }, "Select a size"), sizeArray.map(function (item, index) {
    return __jsx("option", {
      value: item.size,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 45
      }
    }, item.size);
  }))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
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
  }, "clear") : ""), __jsx(react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.default, {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  }, function (_ref) {
    var onToggle = _ref.onToggle,
        setCollapsibleElement = _ref.setCollapsibleElement,
        toggleState = _ref.toggleState;
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 33
      }
    }, __jsx("button", {
      className: "d-none variation-toggle ".concat(toggleState.toLowerCase()),
      onClick: onToggle,
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 41
      }
    }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0)));
  })) : "", __jsx("div", {
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
  }, "Qty:"), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_7__.default, {
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
    className: "btn-product btn-cart ".concat(!(0,_utils__WEBPACK_IMPORTED_MODULE_10__.canAddToCart)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''),
    onClick: function onClick(e) {
      return onCartClick(e, 0);
    },
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
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
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
  }, "Category:"), product.category.map(function (cat, index) {
    return __jsx("span", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 29
      }
    }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
      href: {
        pathname: '/shop/sidebar/list',
        query: {
          category: cat.slug
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 33
      }
    }, cat.name), index < product.category.length - 1 ? ',' : '');
  })), __jsx("div", {
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
  }, "Share:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
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
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
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
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
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
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
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
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 33
    }
  }, __jsx(Im, {
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
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
    href: "/product/default/".concat(product.slug),
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
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_7__.default, {
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
    className: "btn-product btn-cart ".concat(!(0,_utils__WEBPACK_IMPORTED_MODULE_10__.canAddToCart)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''),
    onClick: function onClick(e) {
      return onCartClick(e, 1);
    },
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
  }, "add to cart")), (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
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

_s(DetailOne, "2+ANhiHJPCN2KMoVFNVIzs5T1ag=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = DetailOne;

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartlist: state.cartlist.data,
    wishlist: state.wishlist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, _objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_8__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_9__.actions))(DetailOne));

var _c;

$RefreshReg$(_c, "DetailOne");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbHMvZGV0YWlsLW9uZS5qc3giXSwibmFtZXMiOlsiRGV0YWlsT25lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWYiLCJ1c2VSZWYiLCJwcm9kdWN0IiwidXNlU3RhdGUiLCJxdHkiLCJzZXRRdHkiLCJxdHkyIiwic2V0UXR5MiIsImNvbG9yQXJyYXkiLCJzZXRDb2xvckFycmF5Iiwic2l6ZUFycmF5Iiwic2V0U2l6ZUFycmF5IiwidmFyaWF0aW9uR3JvdXAiLCJzZXRWYXJpYXRpb25Hcm91cCIsImNvbG9yIiwiY29sb3JOYW1lIiwicHJpY2UiLCJzaXplIiwic2VsZWN0ZWRWYXJpYW50Iiwic2V0U2VsZWN0ZWRWYXJpYW50Iiwic2hvd0NsZWFyIiwic2V0U2hvd0NsZWFyIiwic2hvd1ZhcmlhdGlvblByaWNlIiwic2V0U2hvd1ZhcmlhdGlvblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWluIiwibWF4IiwidmFyaWFudHMiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJtYXAiLCJpdGVtIiwicHVzaCIsImNvbG9yX25hbWUiLCJuYW1lIiwibGVuZ3RoIiwic2FsZV9wcmljZSIsInF1ZXJ5Iiwic2x1ZyIsInJlZnJlc2hTZWxlY3RhYmxlR3JvdXAiLCJwYXRobmFtZSIsInRvZ2dsZSIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbGljayIsImluY2x1ZGVzIiwic3RpY2t5QmFyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwicmVtb3ZlIiwiYWRkIiwib25XaXNobGlzdENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNJbldpc2hsaXN0Iiwid2lzaGxpc3QiLCJhZGRUb1dpc2hsaXN0IiwidGVtcEFycmF5IiwiZmluZEluZGV4IiwiZGlzYWJsZWQiLCJzZWxlY3RDb2xvciIsInNlbGVjdFNpemUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUXR5Iiwib25DaGFuZ2VRdHkyIiwiY2xlYXJTZWxlY3Rpb24iLCJvbkNhcnRDbGljayIsImluZGV4IiwiY3VycmVudFRhcmdldCIsIm5ld1Byb2R1Y3QiLCJhZGRUb0NhcnQiLCJ3aWR0aCIsInJhdGluZ3MiLCJ0b0ZpeGVkIiwicmV2aWV3Iiwic3RvY2siLCJzaG9ydF9kZXNjIiwiYmFja2dyb3VuZENvbG9yIiwib25Ub2dnbGUiLCJzZXRDb2xsYXBzaWJsZUVsZW1lbnQiLCJ0b2dnbGVTdGF0ZSIsInRvTG93ZXJDYXNlIiwib3ZlcmZsb3ciLCJjYW5BZGRUb0NhcnQiLCJjYXJ0bGlzdCIsImNhdGVnb3J5IiwiY2F0IiwicHJvY2VzcyIsInNtX3BpY3R1cmVzIiwidXJsIiwiaGVpZ2h0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkYXRhIiwiY29ubmVjdCIsIndpc2hsaXN0QWN0aW9uIiwiY2FydEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxTQUFULENBQXFCQyxLQUFyQixFQUE2QjtBQUFBOztBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxDQUFFLElBQUYsQ0FBbEI7QUFGeUIsTUFHakJDLE9BSGlCLEdBR0xMLEtBSEssQ0FHakJLLE9BSGlCOztBQUFBLGtCQUlEQywrQ0FBUSxDQUFFLENBQUYsQ0FKUDtBQUFBLE1BSWpCQyxHQUppQjtBQUFBLE1BSVpDLE1BSlk7O0FBQUEsbUJB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QUFHNkQsZUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE3RSxDQVpaLENBeEJKLENBWEosQ0FESixDQURKLENBbEtKLENBREo7QUE4Tkg7O0dBdGNRbkUsUztVQUNVRyxrRDs7O0tBRFZILFM7O0FBd2NULElBQU00RyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUVDLEtBQUYsRUFBYTtBQUNqQyxTQUFPO0FBQ0hSLFlBQVEsRUFBRVEsS0FBSyxDQUFDUixRQUFOLENBQWVTLElBRHRCO0FBRUh2QyxZQUFRLEVBQUVzQyxLQUFLLENBQUN0QyxRQUFOLENBQWV1QztBQUZ0QixHQUFQO0FBSUgsQ0FMRDs7QUFPQSwrREFBZUMsb0RBQU8sQ0FBRUgsZUFBRixrQ0FBd0JJLG9EQUF4QixHQUEyQ0MsZ0RBQTNDLEVBQVAsQ0FBa0VqSCxTQUFsRSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2Q4NTFlNTdiNzcyYTcxNDc2MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTbGlkZVRvZ2dsZSBmcm9tICdyZWFjdC1zbGlkZS10b2dnbGUnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBRdHkgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3F0eSc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcblxyXG5pbXBvcnQgeyBjYW5BZGRUb0NhcnQsIGlzSW5XaXNobGlzdCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgcXR5LCBzZXRRdHkgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIHF0eTIsIHNldFF0eTIgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIGNvbG9yQXJyYXksIHNldENvbG9yQXJyYXkgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzaXplQXJyYXksIHNldFNpemVBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHZhcmlhdGlvbkdyb3VwLCBzZXRWYXJpYXRpb25Hcm91cCBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHNlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50IF0gPSB1c2VTdGF0ZSggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICBjb25zdCBbIHNob3dDbGVhciwgc2V0U2hvd0NsZWFyIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuICAgIGNvbnN0IFsgc2hvd1ZhcmlhdGlvblByaWNlLCBzZXRTaG93VmFyaWF0aW9uUHJpY2UgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCB7XHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gOTk5OTk7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgIHNldFZhcmlhdGlvbkdyb3VwKCBwcm9kdWN0LnZhcmlhbnRzLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgY3VyLnNpemUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBjdXIucHJpY2UgKSBtaW4gPSBjdXIucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgY3VyLnByaWNlICkgbWF4ID0gY3VyLnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgWyBwcm9kdWN0IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICAgICAgc2V0UXR5KCAxICk7XHJcbiAgICAgICAgc2V0UXR5MiggMSApO1xyXG4gICAgfSwgWyByb3V0ZXIucXVlcnkuc2x1ZyBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByZWZyZXNoU2VsZWN0YWJsZUdyb3VwKCk7XHJcbiAgICB9LCBbIHZhcmlhdGlvbkdyb3VwLCBzZWxlY3RlZFZhcmlhbnQgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NsZWFyKCAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciB8fCBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgPyB0cnVlIDogZmFsc2UgKTtcclxuICAgICAgICBzZXRTaG93VmFyaWF0aW9uUHJpY2UoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/IHRydWUgOiBmYWxzZSApO1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSByZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCAnLnZhcmlhdGlvbi10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlICkge1xyXG4gICAgICAgICAgICBpZiAoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSAmJiB0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY29sbGFwc2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggKCAhKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApICkgJiYgIXRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoICdjb2xsYXBzZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFsgc2VsZWN0ZWRWYXJpYW50IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCAnL3Byb2R1Y3QvZGVmYXVsdCcgKSApIHtcclxuICAgICAgICAgICAgbGV0IHN0aWNreUJhciA9IHJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWJhcicgKTtcclxuICAgICAgICAgICAgaWYgKCBzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LnJlbW92ZSggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoICFzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LmFkZCggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFNlbGVjdGFibGVHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFsgLi4udmFyaWF0aW9uR3JvdXAgXTtcclxuICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciApIHtcclxuICAgICAgICAgICAgdGVtcEFycmF5ID0gdmFyaWF0aW9uR3JvdXAucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgIT09IGN1ci5jb2xvciApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNpemVBcnJheSggdGVtcEFycmF5LnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhY2MuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2l6ZSA9PSBjdXIuc2l6ZSApICE9PSAtMSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgdGVtcEFycmF5ID0gWyAuLi52YXJpYXRpb25Hcm91cCBdO1xyXG4gICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IHZhcmlhdGlvbkdyb3VwLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgIT09IGN1ci5zaXplICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3JBcnJheSggcHJvZHVjdC52YXJpYW50cy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5jb2xvciA9PSBjdXIuY29sb3IgKSA9PSAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGN1ci5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSwgW10gKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdENvbG9yICggZSwgaXRlbSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yICkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHtcclxuICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCgge1xyXG4gICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGl0ZW0uY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGl0ZW0uY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RTaXplICggZSApIHtcclxuICAgICAgICBpZiAoIGUudGFyZ2V0LnZhbHVlID09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IFwiXCIgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IGUudGFyZ2V0LnZhbHVlIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VRdHkgKCBjdXJyZW50ICkge1xyXG4gICAgICAgIHNldFF0eSggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUXR5MiAoIGN1cnJlbnQgKSB7XHJcbiAgICAgICAgc2V0UXR5MiggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCAoIHtcclxuICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBzaXplOiBcIlwiXHJcbiAgICAgICAgfSApICk7XHJcbiAgICAgICAgcmVmcmVzaFNlbGVjdGFibGVHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSwgaW5kZXggPSAwICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdidG4tZGlzYWJsZWQnICkgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXdQcm9kdWN0ID0geyAuLi5wcm9kdWN0IH07XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuY29sb3JOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZFZhcmlhbnQucHJpY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KFxyXG4gICAgICAgICAgICBuZXdQcm9kdWN0LFxyXG4gICAgICAgICAgICBpbmRleCA9PSAwID8gcXR5IDogcXR5MlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsc1wiIHJlZj17IHJlZiB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnsgcHJvZHVjdC5uYW1lIH08L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLXZhbFwiIHN0eWxlPXsgeyB3aWR0aDogcHJvZHVjdC5yYXRpbmdzICogMjAgKyAnJScgfSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzLXRleHRcIj4oIHsgcHJvZHVjdC5yZXZpZXcgfSBSZXZpZXdzICk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+eyBwcm9kdWN0LnNob3J0X2Rlc2MgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JBcnJheS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgJHsoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yID8gJ2FjdGl2ZSAnIDogJycgKSArICggaXRlbS5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyApfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IHNlbGVjdENvbG9yKCBlLCBpdGVtICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZpbHRlci1yb3cgZGV0YWlscy1yb3ctc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaXplXCI+U2l6ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VsZWN0ZWRWYXJpYW50LnNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHNlbGVjdFNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHNpemU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5zaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57IGl0ZW0uc2l6ZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2l6ZS1ndWlkZSBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10aC1saXN0XCI+PC9pPnNpemUgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgY2xlYXJTZWxlY3Rpb24gfT5jbGVhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgZC1ub25lIHZhcmlhdGlvbi10b2dnbGUgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpfWAgfSBvbkNsaWNrPXsgb25Ub2dnbGUgfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfSBzdHlsZT17IHsgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHNlbGVjdGVkVmFyaWFudC5wcmljZSA/IHNlbGVjdGVkVmFyaWFudC5wcmljZS50b0ZpeGVkKCAyICkgOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF0eVwiPlF0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFF0eSBjaGFuZ2VRdHk9eyBvbkNoYW5nZVF0eSB9IG1heD17IHByb2R1Y3Quc3RvY2sgfSB2YWx1ZT17IHF0eSB9PjwvUXR5PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tcHJvZHVjdCBidG4tY2FydCAkeyggIWNhbkFkZFRvQ2FydCggcHJvcHMuY2FydGxpc3QsIHByb2R1Y3QsIHF0eSApIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFzaG93VmFyaWF0aW9uUHJpY2UgKSApID8gJ2J0bi1kaXNhYmxlZCcgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBvbkNhcnRDbGljayggZSwgMCApIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdCB3LTEwMCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggY2F0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdC5zbHVnIH0gfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgY2F0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsJyA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1sYWJlbFwiPlNoYXJlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJQaW50ZXJlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1waW50ZXJlc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJhciBkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbSBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH0gYWx0PVwicHJvZHVjdFwiIHdpZHRoPXsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLndpZHRoIH0gaGVpZ2h0PXsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLmhlaWdodCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciAmJiBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHNlbGVjdGVkVmFyaWFudC5wcmljZSA/IHNlbGVjdGVkVmFyaWFudC5wcmljZS50b0ZpeGVkKCAyICkgOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF0eSBjaGFuZ2VRdHk9eyBvbkNoYW5nZVF0eTIgfSBtYXg9eyBwcm9kdWN0LnN0b2NrIH0gdmFsdWU9eyBxdHkyIH0+PC9RdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tcHJvZHVjdCBidG4tY2FydCAkeyggIWNhbkFkZFRvQ2FydCggcHJvcHMuY2FydGxpc3QsIHByb2R1Y3QsIHF0eSApIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFzaG93VmFyaWF0aW9uUHJpY2UgKSApID8gJ2J0bi1kaXNhYmxlZCcgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IGUgPT4gb25DYXJ0Q2xpY2soIGUsIDEgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdCBhZGRlZC10by13aXNobGlzdFwiPjxzcGFuPkdvIHRvIFdpc2hsaXN0PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdFwiIG9uQ2xpY2s9eyBvbldpc2hsaXN0Q2xpY2sgfT48c3Bhbj5BZGQgdG8gV2lzaGxpc3Q8L3NwYW4+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnRsaXN0OiBzdGF0ZS5jYXJ0bGlzdC5kYXRhLFxyXG4gICAgICAgIHdpc2hsaXN0OiBzdGF0ZS53aXNobGlzdC5kYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4ud2lzaGxpc3RBY3Rpb24sIC4uLmNhcnRBY3Rpb24gfSApKCBEZXRhaWxPbmUgKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==