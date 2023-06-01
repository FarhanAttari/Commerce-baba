exports.id = "components_partials_product_details_detail-one_jsx";
exports.ids = ["components_partials_product_details_detail-one_jsx"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9kZXRhaWxzL2RldGFpbC1vbmUuanN4Il0sIm5hbWVzIjpbIkRldGFpbE9uZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVmIiwidXNlUmVmIiwicHJvZHVjdCIsInF0eSIsInNldFF0eSIsInVzZVN0YXRlIiwicXR5MiIsInNldFF0eTIiLCJjb2xvckFycmF5Iiwic2V0Q29sb3JBcnJheSIsInNpemVBcnJheSIsInNldFNpemVBcnJheSIsInZhcmlhdGlvbkdyb3VwIiwic2V0VmFyaWF0aW9uR3JvdXAiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJjb2xvciIsImNvbG9yTmFtZSIsInByaWNlIiwic2l6ZSIsInNob3dDbGVhciIsInNldFNob3dDbGVhciIsInNob3dWYXJpYXRpb25QcmljZSIsInNldFNob3dWYXJpYXRpb25QcmljZSIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1pbiIsIm1heCIsInZhcmlhbnRzIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwibWFwIiwiaXRlbSIsInB1c2giLCJjb2xvcl9uYW1lIiwibmFtZSIsImxlbmd0aCIsInNhbGVfcHJpY2UiLCJxdWVyeSIsInNsdWciLCJyZWZyZXNoU2VsZWN0YWJsZUdyb3VwIiwicGF0aG5hbWUiLCJ0b2dnbGUiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xpY2siLCJpbmNsdWRlcyIsInN0aWNreUJhciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsInJlbW92ZSIsImFkZCIsIm9uV2lzaGxpc3RDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzSW5XaXNobGlzdCIsIndpc2hsaXN0IiwiYWRkVG9XaXNobGlzdCIsInRlbXBBcnJheSIsImZpbmRJbmRleCIsImRpc2FibGVkIiwic2VsZWN0Q29sb3IiLCJzZWxlY3RTaXplIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVF0eSIsIm9uQ2hhbmdlUXR5MiIsImNsZWFyU2VsZWN0aW9uIiwib25DYXJ0Q2xpY2siLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJuZXdQcm9kdWN0IiwiYWRkVG9DYXJ0Iiwid2lkdGgiLCJyYXRpbmdzIiwidG9GaXhlZCIsInJldmlldyIsInN0b2NrIiwic2hvcnRfZGVzYyIsImJhY2tncm91bmRDb2xvciIsIm9uVG9nZ2xlIiwic2V0Q29sbGFwc2libGVFbGVtZW50IiwidG9nZ2xlU3RhdGUiLCJ0b0xvd2VyQ2FzZSIsIm92ZXJmbG93IiwiY2FuQWRkVG9DYXJ0IiwiY2FydGxpc3QiLCJjYXRlZ29yeSIsImNhdCIsInByb2Nlc3MiLCJzbV9waWN0dXJlcyIsInVybCIsImhlaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsImNvbm5lY3QiLCJ3aXNobGlzdEFjdGlvbiIsImNhcnRBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFNBQVQsQ0FBcUJDLEtBQXJCLEVBQTZCO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxHQUFHLEdBQUdDLDZDQUFNLENBQUUsSUFBRixDQUFsQjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFjTCxLQUFwQjtBQUNBLFFBQU07QUFBQSxPQUFFTSxHQUFGO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBRSxDQUFGLENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUVDLElB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SixDQURKLENBbEtKLENBREo7QUE4Tkg7O0FBRUQsTUFBTXlDLGVBQWUsR0FBS0MsS0FBRixJQUFhO0FBQ2pDLFNBQU87QUFDSFIsWUFBUSxFQUFFUSxLQUFLLENBQUNSLFFBQU4sQ0FBZVMsSUFEdEI7QUFFSHZDLFlBQVEsRUFBRXNDLEtBQUssQ0FBQ3RDLFFBQU4sQ0FBZXVDO0FBRnRCLEdBQVA7QUFJSCxDQUxEOztBQU9BLCtEQUFlQyxvREFBTyxDQUFFSCxlQUFGLGtDQUF3Qkksb0RBQXhCLEdBQTJDQyxnREFBM0MsRUFBUCxDQUFrRWpILFNBQWxFLENBQWYsRSIsImZpbGUiOiJjb21wb25lbnRzX3BhcnRpYWxzX3Byb2R1Y3RfZGV0YWlsc19kZXRhaWwtb25lX2pzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTbGlkZVRvZ2dsZSBmcm9tICdyZWFjdC1zbGlkZS10b2dnbGUnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBRdHkgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3F0eSc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcblxyXG5pbXBvcnQgeyBjYW5BZGRUb0NhcnQsIGlzSW5XaXNobGlzdCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgcXR5LCBzZXRRdHkgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIHF0eTIsIHNldFF0eTIgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIGNvbG9yQXJyYXksIHNldENvbG9yQXJyYXkgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzaXplQXJyYXksIHNldFNpemVBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHZhcmlhdGlvbkdyb3VwLCBzZXRWYXJpYXRpb25Hcm91cCBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHNlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50IF0gPSB1c2VTdGF0ZSggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICBjb25zdCBbIHNob3dDbGVhciwgc2V0U2hvd0NsZWFyIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuICAgIGNvbnN0IFsgc2hvd1ZhcmlhdGlvblByaWNlLCBzZXRTaG93VmFyaWF0aW9uUHJpY2UgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCB7XHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gOTk5OTk7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgIHNldFZhcmlhdGlvbkdyb3VwKCBwcm9kdWN0LnZhcmlhbnRzLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgY3VyLnNpemUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBjdXIucHJpY2UgKSBtaW4gPSBjdXIucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgY3VyLnByaWNlICkgbWF4ID0gY3VyLnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgWyBwcm9kdWN0IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICAgICAgc2V0UXR5KCAxICk7XHJcbiAgICAgICAgc2V0UXR5MiggMSApO1xyXG4gICAgfSwgWyByb3V0ZXIucXVlcnkuc2x1ZyBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByZWZyZXNoU2VsZWN0YWJsZUdyb3VwKCk7XHJcbiAgICB9LCBbIHZhcmlhdGlvbkdyb3VwLCBzZWxlY3RlZFZhcmlhbnQgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NsZWFyKCAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciB8fCBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgPyB0cnVlIDogZmFsc2UgKTtcclxuICAgICAgICBzZXRTaG93VmFyaWF0aW9uUHJpY2UoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/IHRydWUgOiBmYWxzZSApO1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSByZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCAnLnZhcmlhdGlvbi10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlICkge1xyXG4gICAgICAgICAgICBpZiAoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSAmJiB0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY29sbGFwc2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggKCAhKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApICkgJiYgIXRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoICdjb2xsYXBzZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFsgc2VsZWN0ZWRWYXJpYW50IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCAnL3Byb2R1Y3QvZGVmYXVsdCcgKSApIHtcclxuICAgICAgICAgICAgbGV0IHN0aWNreUJhciA9IHJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWJhcicgKTtcclxuICAgICAgICAgICAgaWYgKCBzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LnJlbW92ZSggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoICFzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LmFkZCggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFNlbGVjdGFibGVHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFsgLi4udmFyaWF0aW9uR3JvdXAgXTtcclxuICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciApIHtcclxuICAgICAgICAgICAgdGVtcEFycmF5ID0gdmFyaWF0aW9uR3JvdXAucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgIT09IGN1ci5jb2xvciApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNpemVBcnJheSggdGVtcEFycmF5LnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhY2MuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2l6ZSA9PSBjdXIuc2l6ZSApICE9PSAtMSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgdGVtcEFycmF5ID0gWyAuLi52YXJpYXRpb25Hcm91cCBdO1xyXG4gICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IHZhcmlhdGlvbkdyb3VwLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgIT09IGN1ci5zaXplICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3JBcnJheSggcHJvZHVjdC52YXJpYW50cy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5jb2xvciA9PSBjdXIuY29sb3IgKSA9PSAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGN1ci5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSwgW10gKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdENvbG9yICggZSwgaXRlbSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yICkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHtcclxuICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCgge1xyXG4gICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGl0ZW0uY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGl0ZW0uY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RTaXplICggZSApIHtcclxuICAgICAgICBpZiAoIGUudGFyZ2V0LnZhbHVlID09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IFwiXCIgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IGUudGFyZ2V0LnZhbHVlIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VRdHkgKCBjdXJyZW50ICkge1xyXG4gICAgICAgIHNldFF0eSggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUXR5MiAoIGN1cnJlbnQgKSB7XHJcbiAgICAgICAgc2V0UXR5MiggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCAoIHtcclxuICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBzaXplOiBcIlwiXHJcbiAgICAgICAgfSApICk7XHJcbiAgICAgICAgcmVmcmVzaFNlbGVjdGFibGVHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSwgaW5kZXggPSAwICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdidG4tZGlzYWJsZWQnICkgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXdQcm9kdWN0ID0geyAuLi5wcm9kdWN0IH07XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuY29sb3JOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZFZhcmlhbnQucHJpY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KFxyXG4gICAgICAgICAgICBuZXdQcm9kdWN0LFxyXG4gICAgICAgICAgICBpbmRleCA9PSAwID8gcXR5IDogcXR5MlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsc1wiIHJlZj17IHJlZiB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnsgcHJvZHVjdC5uYW1lIH08L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLXZhbFwiIHN0eWxlPXsgeyB3aWR0aDogcHJvZHVjdC5yYXRpbmdzICogMjAgKyAnJScgfSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzLXRleHRcIj4oIHsgcHJvZHVjdC5yZXZpZXcgfSBSZXZpZXdzICk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+eyBwcm9kdWN0LnNob3J0X2Rlc2MgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JBcnJheS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgJHsoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yID8gJ2FjdGl2ZSAnIDogJycgKSArICggaXRlbS5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyApfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IHNlbGVjdENvbG9yKCBlLCBpdGVtICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZpbHRlci1yb3cgZGV0YWlscy1yb3ctc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaXplXCI+U2l6ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VsZWN0ZWRWYXJpYW50LnNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHNlbGVjdFNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHNpemU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5zaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57IGl0ZW0uc2l6ZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2l6ZS1ndWlkZSBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10aC1saXN0XCI+PC9pPnNpemUgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgY2xlYXJTZWxlY3Rpb24gfT5jbGVhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgZC1ub25lIHZhcmlhdGlvbi10b2dnbGUgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpfWAgfSBvbkNsaWNrPXsgb25Ub2dnbGUgfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfSBzdHlsZT17IHsgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHNlbGVjdGVkVmFyaWFudC5wcmljZSA/IHNlbGVjdGVkVmFyaWFudC5wcmljZS50b0ZpeGVkKCAyICkgOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF0eVwiPlF0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFF0eSBjaGFuZ2VRdHk9eyBvbkNoYW5nZVF0eSB9IG1heD17IHByb2R1Y3Quc3RvY2sgfSB2YWx1ZT17IHF0eSB9PjwvUXR5PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tcHJvZHVjdCBidG4tY2FydCAkeyggIWNhbkFkZFRvQ2FydCggcHJvcHMuY2FydGxpc3QsIHByb2R1Y3QsIHF0eSApIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFzaG93VmFyaWF0aW9uUHJpY2UgKSApID8gJ2J0bi1kaXNhYmxlZCcgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBvbkNhcnRDbGljayggZSwgMCApIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdCB3LTEwMCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggY2F0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdC5zbHVnIH0gfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgY2F0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsJyA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1sYWJlbFwiPlNoYXJlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJQaW50ZXJlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1waW50ZXJlc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJhciBkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9IGFsdD1cInByb2R1Y3RcIiB3aWR0aD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS53aWR0aCB9IGhlaWdodD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS5oZWlnaHQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyBzZWxlY3RlZFZhcmlhbnQucHJpY2UgPyBzZWxlY3RlZFZhcmlhbnQucHJpY2UudG9GaXhlZCggMiApIDogMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdHkgY2hhbmdlUXR5PXsgb25DaGFuZ2VRdHkyIH0gbWF4PXsgcHJvZHVjdC5zdG9jayB9IHZhbHVlPXsgcXR5MiB9PjwvUXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLXByb2R1Y3QgYnRuLWNhcnQgJHsoICFjYW5BZGRUb0NhcnQoIHByb3BzLmNhcnRsaXN0LCBwcm9kdWN0LCBxdHkgKSB8fCAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCAmJiAhc2hvd1ZhcmlhdGlvblByaWNlICkgKSA/ICdidG4tZGlzYWJsZWQnIDogJyd9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IG9uQ2FydENsaWNrKCBlLCAxICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJ0bGlzdDogc3RhdGUuY2FydGxpc3QuZGF0YSxcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uIH0gKSggRGV0YWlsT25lICk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=