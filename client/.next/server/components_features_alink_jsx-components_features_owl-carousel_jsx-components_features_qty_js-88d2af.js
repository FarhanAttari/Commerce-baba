exports.id = "components_features_alink_jsx-components_features_owl-carousel_jsx-components_features_qty_js-88d2af";
exports.ids = ["components_features_alink_jsx-components_features_owl-carousel_jsx-components_features_qty_js-88d2af"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9xdHkuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc2VydmVyL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3NlcnZlci9xdWVyaWVzLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvY2FydC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9kZW1vLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9pZ25vcmVkfEQ6XFxzaXIgcHJvamVjdCBkYXNoYm9hcmQgYWRtaW4gcGFubmVsIGFuZCBjbGllbnRcXHByb2plY3QgYmlubmlzc2FyXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwcm9wcyIsImRlZmF1bHRGdW5jdGlvbiIsImUiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJPd2xDYXJvdXNlbCIsImFkQ2xhc3MiLCJvcHRpb25zIiwiZXZlbnRzIiwiaXNUaGVtZSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwiZGVmYXVsdE9wdGlvbnMiLCJpdGVtcyIsImxvb3AiLCJtYXJnaW4iLCJyZXNwb25zaXZlQ2xhc3MiLCJuYXYiLCJuYXZUZXh0IiwiZG90cyIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheSIsInJlc3BvbnNpdmUiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZVJlZiIsInNldHRpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiUmVhY3QiLCJRdHkiLCJ2YWx1ZSIsIm1heCIsImNoYW5nZVF0eSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJjaGFuZ2VDdXJyZW50IiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwibWluV2lkdGgiLCJBUElfVVJJIiwicHJvY2VzcyIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iLCJHRVRfUFJPRFVDVFMiLCJncWwiLCJHRVRfUFJPRFVDVCIsIkdFVF9FTEVNRU5UX1BST0RVQ1RTIiwiR0VUX0VMRU1FTlRfUE9TVFMiLCJHRVRfUE9TVFNfQllfUEFHRSIsIkdFVF9QT1NUIiwiR0VUX0hPTUVfREFUQSIsImFjdGlvblR5cGVzIiwiYWRkVG9DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJyZWZyZXNoU3RvcmUiLCJ1cGRhdGVDYXJ0IiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZmluZEluZGV4IiwiaXRlbSIsImlkIiwicGF5bG9hZCIsInByb2R1Y3QiLCJxdHkiLCJ2YXJpYW50cyIsIm5hbWUiLCJyZWR1Y2UiLCJhY2MiLCJpbmRleCIsInB1c2giLCJzdW0iLCJzYWxlX3ByaWNlIiwicHJpY2UiLCJmaWx0ZXIiLCJjYXJ0SXRlbXMiLCJhY3Rpb25zIiwiY2FydFNhZ2EiLCJ0YWtlRXZlcnkiLCJzYWdhIiwidG9hc3QiLCJwZXJzaXN0Q29uZmlnIiwia2V5UHJlZml4Iiwia2V5Iiwic3RvcmFnZSIsInBlcnNpc3RSZWR1Y2VyIiwiYWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbXBhcmUiLCJjbGVhckFsbEZyb21Db21wYXJlIiwiY29tcGFyZVJlZHVjZXIiLCJjb21wYXJlU2FnYSIsInNob3dRdWljayIsImhpZGVRdWljayIsInNob3dWaWRlbyIsImhpZGVWaWRlbyIsInNpbmdsZSIsInF1aWNrU2hvdyIsInZpZGVvU2hvdyIsImRlbW9SZWR1Y2VyIiwic2x1ZyIsInNob3dRdWlja1ZpZXciLCJhZGRUb1dpc2hsaXN0IiwicmVtb3ZlRnJvbVdpc2hsaXN0Iiwid2lzaGxpc3RSZWR1Y2VyIiwid2lzaGxpc3RTYWdhIiwiY2FydFByaWNlVG90YWwiLCJjdXIiLCJjYXJ0UXR5VG90YWwiLCJpc0luQ2FydCIsImZpbmQiLCJjYW5BZGRUb0NhcnQiLCJzdG9jayIsImlzSW5XaXNobGlzdCIsIndpc2hsaXN0IiwiaXNJbkNvbXBhcmUiLCJjb21wYXJlIiwiaXNTYWZhcmlCcm93c2VyIiwic1VzckFnIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsImlzRWRnZUJyb3dzZXIiLCJnZXRJbmRleCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiaSIsImNhdEZpbHRlciIsInByb2R1Y3RzIiwiY2F0ZWdvcnkiLCJmbGFnIiwiY2F0IiwiYXR0ckZpbHRlciIsImF0dHIiLCJyYXRpbmdzIiwidW50aWwiLCJzY3JvbGxUb1BhZ2VDb250ZW50IiwidG8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRUb3AiLCJwb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxCeSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJwYXJhbGxheCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiY291bnRUbyIsImFtb3VudCIsImdldEF0dHJpYnV0ZSIsInRpbWUiLCJpbnRlcnZhbCIsInB0IiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvdW50VG9TY3JvbGxIYW5kbGVyIiwiaW5uZXJIVE1MIiwic2FmZUNvbnRlbnQiLCJodG1sIiwiU0NSSVBUX1JFR0VYIiwidGVzdCIsInJlcGxhY2UiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULE9BQTREO0FBQUEsTUFBM0M7QUFBRUMsWUFBRjtBQUFZQyxhQUFaO0FBQXVCQztBQUF2QixHQUEyQztBQUFBLE1BQVZDLEtBQVU7O0FBQ3ZFLFdBQVNDLGVBQVQsQ0FBMkJDLENBQTNCLEVBQStCO0FBQzNCLFFBQUtGLEtBQUssQ0FBQ0csSUFBTixJQUFjLEdBQW5CLEVBQXlCO0FBQ3JCRCxPQUFDLENBQUNFLGNBQUY7QUFDSDtBQUNKOztBQUVELFNBQ0ksTUFBQyxrREFBRCxlQUFXSixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSTtBQUFHLGFBQVMsRUFBR0YsU0FBZjtBQUEyQixTQUFLLEVBQUdDLEtBQW5DO0FBQTJDLFdBQU8sRUFBR0UsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNSixRQUROLENBREosQ0FESjtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUNBOztBQUVBLFNBQVNRLFdBQVQsQ0FBdUJMLEtBQXZCLEVBQStCO0FBQzNCLFFBQU07QUFBRU0sV0FBRjtBQUFXQyxXQUFYO0FBQW9CQyxVQUFwQjtBQUE0QkMsV0FBTyxHQUFHO0FBQXRDLE1BQStDVCxLQUFyRDtBQUNBLFFBQU1VLFdBQVcsR0FBR0MsNkNBQU0sQ0FBRSxJQUFGLENBQTFCO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxTQUFLLEVBQUUsQ0FEWTtBQUVuQkMsUUFBSSxFQUFFLEtBRmE7QUFHbkJDLFVBQU0sRUFBRSxDQUhXO0FBSW5CQyxtQkFBZSxFQUFF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Q0FELE1BQUksR0FBR0EsSUFBSSxDQUFDRyxPQUFMLENBQWMsaUJBQWQsRUFBaUMsRUFBakMsQ0FBUDtBQUVBLFNBQU87QUFDSEMsVUFBTSxFQUFFSjtBQURMLEdBQVA7QUFHSCxDOzs7Ozs7Ozs7O0FDL1BELGUiLCJmaWxlIjoiY29tcG9uZW50c19mZWF0dXJlc19hbGlua19qc3gtY29tcG9uZW50c19mZWF0dXJlc19vd2wtY2Fyb3VzZWxfanN4LWNvbXBvbmVudHNfZmVhdHVyZXNfcXR5X2pzLTg4ZDJhZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFMaW5rICggeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZSwgLi4ucHJvcHMgfSApIHtcclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRGdW5jdGlvbiAoIGUgKSB7XHJcbiAgICAgICAgaWYgKCBwcm9wcy5ocmVmID09ICcjJyApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIHsgLi4ucHJvcHMgfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0gc3R5bGU9eyBzdHlsZSB9IG9uQ2xpY2s9eyBkZWZhdWx0RnVuY3Rpb24gfT5cclxuICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtb3dsLWNhcm91c2VsMic7XHJcblxyXG5mdW5jdGlvbiBPd2xDYXJvdXNlbCAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBhZENsYXNzLCBvcHRpb25zLCBldmVudHMsIGlzVGhlbWUgPSB0cnVlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCBudWxsICk7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiBcInRydWVcIixcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJpY29uLWFuZ2xlLWxlZnRcIj4nLCAnPGkgY2xhc3M9XCJpY29uLWFuZ2xlLXJpZ2h0XCI+JyBdLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogNDAwLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAzNzU6IHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwcm9wcy5vbkNoYW5nZVJlZiApIHtcclxuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2VSZWYoIGNhcm91c2VsUmVmICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBjYXJvdXNlbFJlZiBdICk7XHJcblxyXG4gICAgbGV0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbigge30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBwcm9wcy5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAoIHByb3BzLmNoaWxkcmVuICYmIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkICkgP1xyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHJlZj17IGNhcm91c2VsUmVmIH0gY2xhc3NOYW1lPXsgYG93bC1jYXJvdXNlbCAke2lzVGhlbWUgPyAnb3dsLXRoZW1lJyA6ICcnfSAke2FkQ2xhc3N9YCB9IG9wdGlvbnM9eyBzZXR0aW5ncyB9IGV2ZW50cz17IGV2ZW50cyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbCA+XHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgOiBcIlwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBPd2xDYXJvdXNlbCApOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUXR5ICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlID0gMSwgYWRDbGFzcyA9IFwiXCIsIG1heCA9IDEwMDAwLCBjaGFuZ2VRdHkgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gPSB1c2VTdGF0ZSggdmFsdWUgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50KCB2YWx1ZSApO1xyXG4gICAgfSwgWyB2YWx1ZSBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjaGFuZ2VRdHkgJiYgY2hhbmdlUXR5KCBjdXJyZW50ICk7XHJcbiAgICB9LCBbIGN1cnJlbnQgXSApXHJcblxyXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50ICgpIHtcclxuICAgICAgICBpZiAoIG1heCA8PSAwIHx8IGN1cnJlbnQgPj0gbWF4IClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNldEN1cnJlbnQoIGN1cnJlbnQgKyAxICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVjcmVtZW50ICgpIHtcclxuICAgICAgICBpZiAoIGN1cnJlbnQgPiAxICkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50KCBjdXJyZW50IC0gMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50ICggZSApIHtcclxuICAgICAgICBpZiAoIHBhcnNlSW50KCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgKSA8IG1heCApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudCggcGFyc2VJbnQoIGUuY3VycmVudFRhcmdldC52YWx1ZSApICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdC1kZXRhaWxzLXF1YW50aXR5ICR7YWRDbGFzc31gIH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtc3Bpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgbWluV2lkdGg6ICcyNnB4JyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWNyZW1lbnQgYnRuLXNwaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZGVjcmVtZW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1heD17IG1heCB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBjdXJyZW50IH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgY2hhbmdlQ3VycmVudCB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBtaW5XaWR0aDogJzI2cHgnIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluY3JlbWVudCBidG4tc3Bpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgaW5jcmVtZW50IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF0eTsiLCJpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnbmV4dC1hcG9sbG8nO1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5cclxuY29uc3QgQVBJX1VSSSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9L2dyYXBocWxgO1xyXG5cclxuY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCgge1xyXG4gICAgdXJpOiBBUElfVVJJLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggYXBvbGxvQ2xpZW50ICk7IiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgcHJvZHVjdHMoJHNlYXJjaFRlcm06IFN0cmluZywgJGNvbG9yOiBbU3RyaW5nXSwgJHNpemU6IFtTdHJpbmddLCAkYnJhbmQ6IFtTdHJpbmddLCAkbWluUHJpY2U6IEludCwgJG1heFByaWNlOiBJbnQsICRjYXRlZ29yeTogU3RyaW5nLCAkcmF0aW5nOiBbU3RyaW5nXSwgJHNvcnRCeTogU3RyaW5nLCAkcGFnZTogSW50ID0gMSwgJHBlclBhZ2U6IEludCwgJGxpc3Q6IEJvb2xlYW4gPSBmYWxzZSwgJGZyb206IEludCA9IDApIHtcclxuICAgICAgICBwcm9kdWN0cyhkZW1vOiAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99LCBzZWFyY2hUZXJtOiAkc2VhcmNoVGVybSwgY29sb3I6ICRjb2xvciwgc2l6ZTogJHNpemUsIGJyYW5kOiAkYnJhbmQsIG1pblByaWNlOiAkbWluUHJpY2UsIG1heFByaWNlOiAkbWF4UHJpY2UsIGNhdGVnb3J5OiAkY2F0ZWdvcnksIHJhdGluZzogJHJhdGluZywgc29ydEJ5OiAkc29ydEJ5LCBwYWdlOiAkcGFnZSwgcGVyUGFnZTogJHBlclBhZ2UsIGxpc3Q6ICRsaXN0LCBmcm9tOiAkZnJvbSkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgc2hvcnRfZGVzYyBAaW5jbHVkZShpZjogJGxpc3QpXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUID0gZ3FsYFxyXG4gICAgcXVlcnkgcHJvZHVjdCgkc2x1ZzogU3RyaW5nISwgJG9ubHlEYXRhOiBCb29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBwcm9kdWN0KGRlbW86ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT30sIHNsdWc6ICRzbHVnLCBvbmx5RGF0YTogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIHNob3J0X2Rlc2NcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJhbmRzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmV2IEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0IEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWxhdGVkIEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0VMRU1FTlRfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSBlbGVtZW50UHJvZHVjdHMge1xyXG4gICAgICAgIGVsZW1lbnRQcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRUxFTUVOVF9QT1NUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IGVsZW1lbnRQb3N0cyB7XHJcbiAgICAgICAgZWxlbWVudFBvc3RzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19CWV9QQUdFID0gZ3FsYFxyXG4gICAgcXVlcnkgcG9zdHNCeVBhZ2UgKCRwYWdlOiBTdHJpbmchLCAkY2F0ZWdvcnk6IFN0cmluZykge1xyXG4gICAgICAgIHBvc3RzQnlQYWdlKHBhZ2U6ICRwYWdlLCBjYXRlZ29yeTogJGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1QgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0KCRzbHVnOiBTdHJpbmchKSB7XHJcbiAgICAgICAgcG9zdChzbHVnOiAkc2x1Zykge1xyXG4gICAgICAgICAgICBzaW5nbGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJldiB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVsYXRlZCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9EQVRBID0gZ3FsYFxyXG4gICAgcXVlcnkgaG9tZURhdGEge1xyXG4gICAgICAgIGhvbWVEYXRhKGRlbW86ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT30pIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvc3RzIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmAiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgYWRkVG9DYXJ0OiBcIkFERF9UT19DQVJUXCIsXHJcbiAgICByZW1vdmVGcm9tQ2FydDogXCJSRU1PVkVfRlJPTV9DQVJUXCIsXHJcbiAgICByZWZyZXNoU3RvcmU6IFwiUkVGUkVTSF9TVE9SRVwiLFxyXG4gICAgdXBkYXRlQ2FydDogXCJVUERBVEVfQ0FSVFwiLFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW11cclxufVxyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmFkZFRvQ2FydDpcclxuICAgICAgICAgICAgdmFyIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaWQgPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApO1xyXG4gICAgICAgICAgICBsZXQgcXR5ID0gYWN0aW9uLnBheWxvYWQucXR5ID8gYWN0aW9uLnBheWxvYWQucXR5IDogMTtcclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggIT09IC0xICYmIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0ubmFtZSA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggIT09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEucmVkdWNlKCAoIGFjYywgcHJvZHVjdCwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZpbmRJbmRleCA9PSBpbmRleCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHByb2R1Y3QucXR5ICsgcXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW06ICggYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlID8gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlIDogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5wcmljZSApICogKCBwcm9kdWN0LnF0eSArIHF0eSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCggcHJvZHVjdCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdIClcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogcXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA/IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW06IHF0eSAqICggYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlID8gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlIDogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5wcmljZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ2FydDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLmZpbHRlciggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGl0ZW0ubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnVwZGF0ZUNhcnQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuY2FydEl0ZW1zXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICBhZGRUb0NhcnQ6ICggcHJvZHVjdCwgcXR5ID0gMSApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFkZFRvQ2FydCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QsXHJcbiAgICAgICAgICAgIHF0eTogcXR5XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlbW92ZUZyb21DYXJ0OiAoIHByb2R1Y3QgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ2FydCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgdXBkYXRlQ2FydDogKCBjYXJ0SXRlbXMgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy51cGRhdGVDYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2FydEl0ZW1zOiBjYXJ0SXRlbXNcclxuICAgICAgICB9XHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjYXJ0U2FnYSAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLmFkZFRvQ2FydCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCBhZGRlZCB0byBDYXJ0XCIgKTtcclxuICAgIH0gKTtcclxuXHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBDYXJ0XCIgKTtcclxuICAgIH0gKTtcclxuXHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLnVwZGF0ZUNhcnQsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIkNhcnQgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiApO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcIm1vbGxhLVwiLFxyXG4gICAga2V5OiBcImNhcnRcIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGNhcnRSZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgYWRkVG9Db21wYXJlOiAnQUREX1RPX0NPTVBBUkUnLFxyXG4gICAgcmVtb3ZlRnJvbUNvbXBhcmU6ICdSRU1PVkVfRlJPTV9DT01QQVJFJyxcclxuICAgIGNsZWFyQWxsRnJvbUNvbXBhcmU6ICdDTEVBUl9BTExfRlJPTV9DT01QQVJFJyxcclxuICAgIHJlZnJlc2hTdG9yZTogJ1JFRlJFU0hfU1RPUkUnXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5jb25zdCBjb21wYXJlUmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuYWRkVG9Db21wYXJlOlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICk7XHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ID09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNvbXBhcmU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhLmZpbHRlciggaXRlbSA9PiBpdGVtLmlkICE9IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmNsZWFyQWxsRnJvbUNvbXBhcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvQ29tcGFyZTogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlbW92ZUZyb21Db21wYXJlOiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21Db21wYXJlLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICBjbGVhckFsbEZyb21Db21wYXJlOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5jbGVhckFsbEZyb21Db21wYXJlLFxyXG4gICAgICAgIHBheWxvYWQ6IHt9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVmcmVzaFN0b3JlOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge31cclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNvbXBhcmVTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuYWRkVG9Db21wYXJlLCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIENvbXBhcmVcIiApO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiAnbW9sbGEtJyxcclxuICAgIGtleTogJ2NvbXBhcmUnLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgY29tcGFyZVJlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgc2hvd1F1aWNrOiAnU0hPV19RVUlDS1ZJRVcnLFxyXG4gICAgaGlkZVF1aWNrOiAnSElERV9RVUlDS1ZJRVcnLFxyXG4gICAgc2hvd1ZpZGVvOiAnU0hPV19WSURFTycsXHJcbiAgICBoaWRlVmlkZW86ICdISURFX1ZJREVPJyxcclxuICAgIHJlZnJlc2hTdG9yZTogJ1JFRlJFU0hfU1RPUkUnXHJcbn07XHJcblxyXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY3VycmVudDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNTyxcclxuICAgIHNpbmdsZTogbnVsbCxcclxuICAgIHF1aWNrU2hvdzogZmFsc2UsXHJcbiAgICB2aWRlb1Nob3c6IGZhbHNlLFxyXG59O1xyXG5jb25zdCBkZW1vUmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuc2hvd1F1aWNrOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGU6IGFjdGlvbi5wYXlsb2FkLnNsdWcsXHJcbiAgICAgICAgICAgICAgICBxdWlja1Nob3c6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5oaWRlUXVpY2s6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHF1aWNrU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGU6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnNob3dWaWRlbzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpZGVvU2hvdzogdHJ1ZSB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuaGlkZVZpZGVvOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlkZW9TaG93OiBmYWxzZSB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDogYWN0aW9uLnBheWxvYWQuY3VycmVudCxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHF1aWNrU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2aWRlb1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgcmVmcmVzaFN0b3JlOiAoIGN1cnJlbnQgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHNob3dRdWlja1ZpZXc6IHNsdWcgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuc2hvd1F1aWNrLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgc2x1Zzogc2x1Z1xyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICBoaWRlUXVpY2s6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmhpZGVRdWljayxcclxuICAgIH0gKSxcclxuXHJcbiAgICBzaG93VmlkZW86ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnNob3dWaWRlbyxcclxuICAgIH0gKSxcclxuXHJcbiAgICBoaWRlVmlkZW86ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmhpZGVWaWRlb1xyXG4gICAgfSApXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwibW9sbGEtXCIsXHJcbiAgICBrZXk6IFwiZGVtb1wiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgZGVtb1JlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb1dpc2hsaXN0OiAnQUREX1RPX1dJU0hMSVNUJyxcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdDogJ1JFTU9WRV9GUk9NX1dJU0hMSVNUJyxcclxuICAgIHJlZnJlc2hTdG9yZTogJ1JFRlJFU0hfU1RPUkUnLFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxufVxyXG5cclxuY29uc3Qgd2lzaGxpc3RSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0OlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCA9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21XaXNobGlzdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvV2lzaGxpc3Q6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9XaXNobGlzdCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0OiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21XaXNobGlzdCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3aXNobGlzdFNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIFdpc2hsaXN0XCIgKTtcclxuICAgIH0gKVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcIm1vbGxhLVwiLFxyXG4gICAga2V5OiAnd2lzaGxpc3QnLFxyXG4gICAgc3RvcmFnZSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIHdpc2hsaXN0UmVkdWNlciApOyIsIi8qKlxyXG4gKiBnZXQgdG90YWwgUHJpY2Ugb2YgcHJvZHVjdHMgaW4gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEByZXR1cm4geyBGbG9hdCB9IHRvdGFsUHJpY2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXJ0UHJpY2VUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgY3VyLnN1bVxyXG4gICAgfSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICogZ2V0IG51bWJlciBvZiBwcm9kdWN0cyBpbiBjYXJ0XHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcmV0dXJuIHsgSW50ZWdlciB9IG51bWJlcnMgb2YgY2FydCBpdGVtcyBpbiBjYXJ0bGlzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhcnRRdHlUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQoIGN1ci5xdHksIDEwICk7XHJcbiAgICB9LCAwICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNpZGUgd2hlcmUgcHJvZHVjdCBpcyBpbiBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHBhcmFtIHsgT2JqZWN0IH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ2FydCA9ICggY2FydEl0ZW1zLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCApID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlybSBpZiBwcm9kdWN0IGNvdWxkIGJlIGFkZGVkIHRvIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcGFyYW0geyBPYmplY3QgfSBwcm9kdWN0IFxyXG4gKiBAcGFyYW0geyBOdW1iZXIgfSBxdHkgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FuQWRkVG9DYXJ0ID0gKCBjYXJ0SXRlbXMsIHByb2R1Y3QsIHF0eSApID0+IHtcclxuICAgIGxldCBmaW5kID0gY2FydEl0ZW1zLmZpbmQoIGl0ZW0gPT4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkICk7XHJcbiAgICBpZiAoIGZpbmQgKSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgKCBmaW5kLnF0eSArIHF0eSApICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgcXR5ICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB3aXNobGlzdCBcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbldpc2hsaXN0ID0gKCB3aXNobGlzdCwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIHdpc2hsaXN0LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNsdWcgPT0gcHJvZHVjdC5zbHVnICkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBjb21wYXJlIFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ29tcGFyZSA9ICggY29tcGFyZSwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIGNvbXBhcmUuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PSBwcm9kdWN0LnNsdWcgKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBzYWZhcmkgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzU2FmYXJpQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggJ1NhZmFyaScgKSAhPT0gLTEgJiYgc1VzckFnLmluZGV4T2YoICdDaHJvbWUnICkgPT09IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3QgRWRnZSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFZGdlQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggXCJFZGdlXCIgKSA+IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBpbmRleCBvZiB0aGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SW5kZXggPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBpZiAoIGVsZW1lbnQgPT0gY2hpbGRyZW5bIGkgXSApIHJldHVybiBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogZmlsdGVyIHByb2R1Y3RzIGJ5IGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9kdWN0cyBcclxuICogQHBhcmFtIHtBcnJheX0gY2F0ZWdvcnkgXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXRGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGNhdGVnb3J5LCBmbGFnID0gZmFsc2UgKSB7XHJcbiAgICBpZiAoIGNhdGVnb3J5WyAwIF0gPT09ICdBbGwnICkgcmV0dXJuIHByb2R1Y3RzO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBpZiAoIGl0ZW0uY2F0ZWdvcnkuZmluZCggY2F0ID0+IGNhdC5zbHVnID09IGNhdGVnb3J5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggIWZsYWcgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICggZmxhZyApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBmbGFnIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IClcclxufVxyXG5cclxuLyoqXHJcbiAqIGZpbHRlciBwcm9kdWN0cyBieSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHtBcnJheX0gcHJvZHVjdHMgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGF0dHJGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGF0dHIgKSB7XHJcbiAgICAvLyBpZihwcm9kdWN0cylcclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ2FsbCcgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAnc2FsZScgJiYgaXRlbS5zYWxlX3ByaWNlICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3JhdGVkJyAmJiBpdGVtLnJhdGluZ3MgPiAzICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3VudGlsJyAmJiBpdGVtLnVudGlsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtWyBhdHRyIF0gPT09IHRydWU7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY3JvbGxpbmcgdG8gUGFnZSBjb250ZW50IHNlY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBzY3JvbGxUb1BhZ2VDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdlLWNvbnRlbnQnIClcclxuICAgICAgICAub2Zmc2V0VG9wIC0gNzQ7XHJcbiAgICBpZiAoIGlzU2FmYXJpQnJvd3NlcigpIHx8IGlzRWRnZUJyb3dzZXIoKSApIHtcclxuICAgICAgICBsZXQgcG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBwb3MgPD0gdG8gKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KCAwLCAtMTIwICk7XHJcbiAgICAgICAgICAgICAgICBwb3MgLT0gMTIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgdG9wOiB0byxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gbWFrZSBiYWNrZ3JvdW5kIHBhcmFsbGF4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyYWxsYXggPSAoKSA9PiB7XHJcbiAgICBsZXQgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmJnLXBhcmFsbGF4JyApO1xyXG5cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFsbGF4Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGxldCB5ID0gMDtcclxuICAgICAgICBpZiAoIHBhcmFsbGF4WyBpIF0uY2xhc3NMaXN0LmNvbnRhaW5zKCAnaGVhZGVyLXBhcmFsbGF4JyApICkge1xyXG4gICAgICAgICAgICB5ID0gKCAxMCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyA5MDAgKyA1MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5ID0gKCBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCArIDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYWxsYXhbIGkgXS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0geSArICclJztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNldCBjb3VudCB0byBpbiBhYm91dC0yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY291bnQnICk7XHJcblxyXG4gICAgaWYgKCBpdGVtcyApIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbIGkgXTtcclxuICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtdG8nICksIDEwICkgLSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyb20nICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1zcGVlZCcgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWZyZXNoLWludGVydmFsJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgcHQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gMDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIGNvdW50VG9TY3JvbGxIYW5kbGVyLCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudFRvU2Nyb2xsSGFuZGxlciAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHB0IDw9IHRpbWUgJiYgaGVpZ2h0ID49IHdpbmRvdy5wYWdlWU9mZnNldCApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIDAgPT09IGZsYWcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcHQgPj0gdGltZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBwYXJzZUludCggKCBwdCAqIGFtb3VudCApIC8gdGltZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwdCArIGludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUHJldmVudCBYc3MgQXR0YWNrXHJcbiAqIEBwYXJhbSB7Tm9kZX0gaHRtbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlQ29udGVudCAoIGh0bWwgKSB7XHJcbiAgICBjb25zdCBTQ1JJUFRfUkVHRVggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcclxuXHJcbiAgICAvLyBSZW1vdmluZyB0aGUgPHNjcmlwdD4gdGFnc1xyXG4gICAgd2hpbGUgKCBTQ1JJUFRfUkVHRVgudGVzdCggaHRtbCApICkge1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIFNDUklQVF9SRUdFWCwgXCJcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92aW5nIGFsbCBldmVudHMgZnJvbSB0YWdzLi4uXHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCAvIG9uXFx3Kz1cIlteXCJdKlwiL2csIFwiXCIgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIF9faHRtbDogaHRtbFxyXG4gICAgfVxyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==