(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AdminDashboard/layouts/ADFullLayout.js":
/*!***********************************************************!*\
  !*** ./components/AdminDashboard/layouts/ADFullLayout.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ADSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ADSidebar */ "./components/AdminDashboard/layouts/ADSidebar.js");
/* harmony import */ var _ADHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ADHeader */ "./components/AdminDashboard/layouts/ADHeader.js");
/* harmony import */ var _Sidebar_SideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar/SideBar */ "./components/AdminDashboard/layouts/Sidebar/SideBar.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Topbar */ "./components/AdminDashboard/layouts/Topbar.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\AdminDashboard\\layouts\\ADFullLayout.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







const FullLayout = ({
  children
}) => {
  const {
    0: sidebarIsOpen,
    1: setSidebarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "pageWrapper Admin Wrapper d-lg-flex overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_Sidebar_SideBar__WEBPACK_IMPORTED_MODULE_4__.default, {
    toggle: toggleSidebar,
    isOpen: sidebarIsOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      backgroundColor: '#cfdde3'
    },
    className: "contentArea",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_5__.default, {
    toggleSidebar: toggleSidebar,
    sidebarIsOpen: sidebarIsOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: "p-4 wrapper",
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, children))));
};

/* harmony default export */ __webpack_exports__["default"] = (FullLayout);

/***/ }),

/***/ "./components/AdminDashboard/layouts/ADHeader.js":
/*!*******************************************************!*\
  !*** ./components/AdminDashboard/layouts/ADHeader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\AdminDashboard\\layouts\\ADHeader.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


 // import ProfilePic from '../assets/images/users/user1.jpg'
// import store from "../../../../Store/Store"
// import { useSelector } from "react-redux";

 // import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";

const Header = () => {
  let navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [dropdownOpen, setDropdownOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  const toggle1 = () => setDropdownOpen(prevState => !prevState);

  const Handletoggle = () => {
    setIsOpen(!isOpen);
  }; // const showMobilemenu = () => {
  //   document.getElementById("sidebarArea").classList.toggle("showSidebar");
  // };
  // let reducer = useSelector((store) => {
  //   return store.userReducer;
  // });
  // let toggle= reducer.toggle;
  // let user=localStorage.getItem("currentUser")
  // let currentUser=JSON.parse(user)
  // let currentUsers=JSON.parse(currentUser)
  //  let currentUser =reducer.currentUser


  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
    style: {
      marginLeft: '-1px'
    },
    className: "DHeader",
    dark: true,
    expand: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarBrand, {
    href: "/AdminDashboard",
    className: "d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Hello"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button // color="secondary"
  , {
    className: "d-lg-none DHeader" // onClick={() => toggle()}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "bi bi-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "hstack gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button // color="secondary"
  , {
    size: "sm",
    className: "d-sm-block d-md-none DHeader",
    onClick: Handletoggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, isOpen ? __jsx("i", {
    className: "bi bi-x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }) : __jsx("i", {
    className: "bi bi-three-dots-vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
    navbar: true,
    isOpen: isOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
    className: "me-auto",
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      marginLeft: '3%'
    },
    className: "adminName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 14
    }
  }, " Welcome  "))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    isOpen: dropdownOpen,
    toggle: toggle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownToggle, {
    className: "DHeader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
    onClick: () => {
      store.dispatch({
        type: "USER_LOGGED_OUT"
      });
      navigate.push("/loginNavigation");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Logout")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/AdminDashboard/layouts/ADSidebar.js":
/*!********************************************************!*\
  !*** ./components/AdminDashboard/layouts/ADSidebar.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\AdminDashboard\\layouts\\ADSidebar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function ADSidebar() {
  return __jsx("div", {
    style: {
      "width": "200px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, "ADSidebar");
}

/* harmony default export */ __webpack_exports__["default"] = (ADSidebar);

/***/ }),

/***/ "./components/AdminDashboard/layouts/Sidebar/SideBar.js":
/*!**************************************************************!*\
  !*** ./components/AdminDashboard/layouts/Sidebar/SideBar.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubMenu */ "./components/AdminDashboard/layouts/Sidebar/SubMenu.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\AdminDashboard\\layouts\\Sidebar\\SideBar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





 // import styles from './styles.module.css';



const SideBar = ({
  isOpen,
  toggle
}) => __jsx("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("sidebarAD", {
    "is-open": isOpen
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "sidebar-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx("span", {
  color: "info",
  onClick: toggle,
  style: {
    color: "#fff"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}, "\xD7"), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}, "Commerce Baba")), __jsx("div", {
  className: "side-menu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
  vertical: true,
  className: "list-unstyled pb-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, "Admin Dashboard"), __jsx(_SubMenu__WEBPACK_IMPORTED_MODULE_6__.default, {
  title: "Products",
  items: submenus[0],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}))));

const submenus = [[{
  title: "Add product",
  target: "productfeaturedtable"
}] // [
// {
//   title: "Page 1",
//   target: "Page-1",
// },
// {
//   title: "Page 2",
//   target: "Page-2",
// },
// ],
];
/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./components/AdminDashboard/layouts/Sidebar/SubMenu.js":
/*!**************************************************************!*\
  !*** ./components/AdminDashboard/layouts/Sidebar/SubMenu.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\AdminDashboard\\layouts\\Sidebar\\SubMenu.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




 // import './style.css'

const SubMenu = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  const toggle = () => setCollapsed(!collapsed);

  const {
    icon,
    title,
    items
  } = props;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    onClick: toggle,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "menu-open": !collapsed
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    className: "dropdown-toggle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: icon,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
    isOpen: !collapsed,
    navbar: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("items-menu", {
      "mb-1": !collapsed
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, items.map((item, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
    key: index,
    className: "pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    tag: next_link__WEBPACK_IMPORTED_MODULE_4__.Link,
    to: item.target,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, item.title)))));
};

/* harmony default export */ __webpack_exports__["default"] = (SubMenu);

/***/ }),

/***/ "./components/AdminDashboard/layouts/Topbar.js":
/*!*****************************************************!*\
  !*** ./components/AdminDashboard/layouts/Topbar.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\AdminDashboard\\layouts\\Topbar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




 // import './Sidebar/style.css'

const Topbar = ({
  toggleSidebar
}) => {
  const {
    0: topbarIsOpen,
    1: setTopbarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
    color: "light",
    light: true,
    className: "navbar shadow-sm p-3 mb-5 bg-white rounded",
    expand: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
    style: {
      minWidth: '10px'
    },
    color: "info",
    onClick: toggleSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAlignLeft,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarToggler, {
    onClick: toggleTopbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
    isOpen: topbarIsOpen,
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
    className: "ml-auto",
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
    style: {
      minWidth: '25px'
    },
    color: "info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    style: {
      color: 'white'
    },
    tag: next_link__WEBPACK_IMPORTED_MODULE_4__.Link,
    to: "/page-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, " Loguot ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./components/features/mobile-menu.jsx":
/*!*********************************************!*\
  !*** ./components/features/mobile-menu.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slide-toggle */ "react-slide-toggle");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\mobile-menu.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function MobileMenu() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    router.events.on('routeChangeComplete', hideMobileMenu);
  }, []);

  function hideMobileMenu() {
    document.querySelector('body').classList.remove('mmenu-active');
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: ""
      }
    });
  }

  return __jsx("div", {
    className: "mobile-menu-container mobile-menu-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mobile-menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "mobile-menu-close",
    onClick: hideMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 80
    }
  })), __jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    className: "mobile-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "mobile-search",
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Search"), __jsx("input", {
    type: "text",
    className: "form-control",
    value: searchTerm,
    onChange: onSearchChange,
    name: "mobile-search",
    id: "mobile-search",
    placeholder: "Search product ...",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 71
    }
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-pills-mobile",
    role: "tablist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, "Menu")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "Categories"))), __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("nav", {
    className: "mobile-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "mobile-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 49
    }
  }, "Home", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-1/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 57
    }
  }, "01 - furniture store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-2/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 57
    }
  }, "02 - furniture store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-3/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 57
    }
  }, "03 - electronic store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-4/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 57
    }
  }, "04 - electronic store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-5/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 57
    }
  }, "05 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-6/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 57
    }
  }, "06 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-7/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 57
    }
  }, "07 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-8/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 57
    }
  }, "08 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-9/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 57
    }
  }, "09 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-10/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 57
    }
  }, "10 - shoes store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-11/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 57
    }
  }, "11 - furniture simple store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-12/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 57
    }
  }, "12 - fashion simple store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-13/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 57
    }
  }, "13 - market")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-14/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 57
    }
  }, "14 - market fullwidth")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-15/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 57
    }
  }, "15 - lookbook 1")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-16/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 57
    }
  }, "16 - lookbook 2")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-17/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 57
    }
  }, "17 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-18/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 57
    }
  }, "18 - fashion store (with sidebar)")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-19/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 57
    }
  }, "19 - games store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-20/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 57
    }
  }, "20 - book store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-21/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 57
    }
  }, "21 - sport store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-22/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 57
    }
  }, "22 - tools store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-23/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 57
    }
  }, "23 - fashion left navigation store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-24/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 57
    }
  }, "24 - extreme sport store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-25/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 57
    }
  }, "25 - jewelry store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-26/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 57
    }
  }, "26 - market store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-27/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 57
    }
  }, "27 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-28/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 57
    }
  }, "28 - food market store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-29/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 57
    }
  }, "29 - t-shirts store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-30/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 57
    }
  }, "30 - headphones store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-31/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 57
    }
  }, "31 - yoga store"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 49
    }
  }, "Shop", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 57
    }
  }, "Shop List")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 57
    }
  }, "Shop Grid 2 Columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 57
    }
  }, "Shop Grid 3 Columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 57
    }
  }, "Shop Grid 4 Columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/market",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 84
    }
  }, "Shop Market", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 101
    }
  }, "New")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/nosidebar/boxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 93
    }
  }, "Shop Boxed No Sidebar", __jsx("span", {
    className: "tip tip-hot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 120
    }
  }, "Hot")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/nosidebar/fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 57
    }
  }, "Shop Fullwidth No Sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/category/boxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 57
    }
  }, "Product Category Boxed")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/category/fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 96
    }
  }, "Product Category Fullwidth", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 128
    }
  }, "New")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 57
    }
  }, "Cart")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 57
    }
  }, "Checkout")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 57
    }
  }, "Wishlist")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 57
    }
  }, "My Account")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 57
    }
  }, "Lookbook"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 49
    }
  }, "Product", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 57
    }
  }, "Default")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/centered/beige-ring-handle-circle-cross-body-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 57
    }
  }, "Centered")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/extended/yellow-tie-strap-block-heel-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 125
    }
  }, "Extended Info", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 144
    }
  }, "New")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/gallery/beige-metal-hoop-tote-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 57
    }
  }, "Gallery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/sticky/brown-faux-fur-longline-coat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 57
    }
  }, "Sticky Info")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/sidebar/beige-v-neck-button-cardigan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 57
    }
  }, "Boxed With Sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/fullwidth/black-faux-leather-chain-trim-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 57
    }
  }, "Full Width")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/masonry/black-denim-dungaree-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 57
    }
  }, "Masonry Sticky Info"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 49
    }
  }, "Pages", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 49
    }
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/about",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 65
    }
  }, "About ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 121
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 73
    }
  }, "About 01")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/about-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 73
    }
  }, "About 02"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/contact",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 65
    }
  }, "Contact ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 125
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 73
    }
  }, "Contact 01")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/contact-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 73
    }
  }, "Contact 02"))))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 57
    }
  }, "Login")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 57
    }
  }, "FAQs")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/404",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 57
    }
  }, "Error 404")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/coming-soon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 57
    }
  }, "Coming Soon"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/classic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 49
    }
  }, "Blog", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/classic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 57
    }
  }, "Classic")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/listing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 57
    }
  }, "Listing")), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 65
    }
  }, "Grid ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 109
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 73
    }
  }, "Grid 2 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 73
    }
  }, "Grid 3 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 73
    }
  }, "Grid 4 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 73
    }
  }, "Grid sidebar"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 65
    }
  }, "Masonry ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 112
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 73
    }
  }, "Masonry 2 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 73
    }
  }, "Masonry 3 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 73
    }
  }, "Masonry 4 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 73
    }
  }, "Masonry sidebar"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 65
    }
  }, "Mask ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 109
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/mask/grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 73
    }
  }, "Blog Mask Grid")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/mask/masonry",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 73
    }
  }, "Blog Mask Masonry"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 65
    }
  }, "Single Post ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 163
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 73
    }
  }, "Default with sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/fullwidth/fusce-pellentesque-suscipit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 73
    }
  }, "Fullwidth no sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/sidebar/utaliquam-sollicitzdvudin-leo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 73
    }
  }, "Fullwidth with sidebar")))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 49
    }
  }, "Elements", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 57
    }
  }, "Products")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/typography",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 57
    }
  }, "Typography")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 57
    }
  }, "Titles")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 57
    }
  }, "Banners")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 57
    }
  }, "Product Category")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/video-banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 57
    }
  }, "Video Banners")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 57
    }
  }, "Buttons")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/accordions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 57
    }
  }, "Accordions")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 57
    }
  }, "Tabs")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/testimonials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 57
    }
  }, "Testimonials")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/blog-posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 57
    }
  }, "Blog Posts")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/cta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 57
    }
  }, "Call to Action")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/icon-boxes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 57
    }
  }, "Icon Boxes")))))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, __jsx("nav", {
    className: "mobile-cats-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "mobile-cats-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "item-cats-lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=electronics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 68
    }
  }, "Electronics")), __jsx("li", {
    className: "item-cats-lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=gift-idea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 68
    }
  }, "Gift Ideas")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=beds",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 41
    }
  }, "Beds")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=lighting",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 41
    }
  }, "Lighting")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=sofas-and-sleeper-sofas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }, "Sofas & Sleeper sofas")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=storage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 41
    }
  }, "Storage")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=armchairs-and-chaises",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 41
    }
  }, "Armchairs & Chaises")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=decoration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 41
    }
  }, "Decoration ")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=kitchen-cabinets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 41
    }
  }, "Kitchen Cabinets")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=coffee-and-tables",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 41
    }
  }, "Coffee & Tables")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=furniture",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 41
    }
  }, "Outdoor Furniture "))))))), __jsx("div", {
    className: "social-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 78
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 77
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 79
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 77
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MobileMenu));

/***/ }),

/***/ "./components/features/modals/login-modal.jsx":
/*!****************************************************!*\
  !*** ./components/features/modals/login-modal.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\modals\\login-modal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const customStyles = {
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '9000'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('body');

function LoginModal() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let timer;
  const {
    register,
    handleSubmit
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();

  async function saveauto(data) {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().post('/api/createuser', data);
      console.log(res.data.message);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  } // async function  saveauto(data) {
  //     data.role = 'Seller';
  //     try {
  //         const res = await axios.post('/api/CreateUser', data);
  //         console.log('User created successfully');
  //       } catch (error) {
  //         console.error('Error creating user:', error);
  //       }
  //     console.log(data);
  //   }
  // async function saveauto(data) {
  //     try {
  //         data.role = "Seller"
  //         await axios.post("/api/CreateUser", data).then(function (res) {
  //             console.log("ok");
  //         })
  //         console.log(data);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // const [open, setOpen] = useState(false);


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  function closeModal() {
    document.getElementById("login-modal").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    timer = setTimeout(() => {
      setOpen(false);
    }, 350);
  }

  function openModal(e) {
    e.preventDefault();
    setOpen(true);
  }

  return __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    onClick: openModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "Sign in / Sign up"), open ? __jsx((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    isOpen: open,
    style: customStyles,
    contentLabel: "login Modal",
    className: "modal-dialog",
    overlayClassName: "d-flex align-items-center justify-content-center",
    id: "login-modal",
    onRequestClose: closeModal,
    closeTimeoutMS: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    onClick: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 62
    }
  }))), __jsx("div", {
    className: "form-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "form-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    defaultIndex: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 41
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-pills nav-fill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 45
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 53
    }
  }, "Sign In")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 53
    }
  }, "Register"))), __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 45
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    style: {
      paddingTop: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 49
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 53
    }
  }, __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 61
    }
  }, __jsx("label", {
    htmlFor: "singin-email-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 65
    }
  }, "Username or email address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "singin-email-2",
    name: "singin-email",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 65
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 61
    }
  }, __jsx("label", {
    htmlFor: "singin-password-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 65
    }
  }, "Password *"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "singin-password-2",
    name: "singin-password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 65
    }
  })), __jsx("div", {
    className: "form-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 61
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 65
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 69
    }
  }, "LOG IN"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 69
    }
  })), __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 65
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "signin-remember-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 69
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "signin-remember-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 69
    }
  }, "Remember Me")), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "forgot-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 65
    }
  }, "Forgot Your Password?"))), __jsx("div", {
    className: "form-choice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 57
    }
  }, __jsx("p", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 61
    }
  }, "or sign in with"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 61
    }
  }, __jsx("div", {
    className: "col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 65
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login btn-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 69
    }
  }, __jsx("i", {
    className: "icon-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 73
    }
  }), "Login With Google")), __jsx("div", {
    className: "col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 65
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login btn-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 69
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 73
    }
  }), "Login With Facebook")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 49
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(saveauto),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 57
    }
  }, __jsx("label", {
    htmlFor: "register-email-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 61
    }
  }, "Your email address *"), __jsx("input", _extends({}, register("email"), {
    type: "email",
    className: "form-control",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 61
    }
  }))), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 57
    }
  }, __jsx("label", {
    htmlFor: "register-password-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 61
    }
  }, "Password *"), __jsx("input", _extends({}, register("password"), {
    type: "password",
    className: "form-control",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 61
    }
  }))), __jsx("div", {
    className: "form-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 57
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 61
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 65
    }
  }, "SIGN UP"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 65
    }
  })), __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 61
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "register-policy-2",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 65
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "register-policy-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 65
    }
  }, "I agree to the privacy policy *")))), __jsx("div", {
    className: "form-choice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 53
    }
  }, __jsx("p", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 57
    }
  }, "or sign in with"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login btn-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 65
    }
  }, __jsx("i", {
    className: "icon-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 69
    }
  }), "Login With Google")), __jsx("div", {
    className: "col-md-6 mt-1 mt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login  btn-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 65
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 69
    }
  }), "Login With Facebook")))))))))))) : '');
}

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/features/modals/quickview-modal.jsx":
/*!********************************************************!*\
  !*** ./components/features/modals/quickview-modal.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-magnifiers */ "react-image-magnifiers");
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/product/details/detail-one */ "./components/partials/product/details/detail-one.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\modals\\quickview-modal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const customStyles = {
  overlay: {
    backgroundColor: 'rgba(51,51,51,0.6)',
    zIndex: '9000'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('body');

function QuickViewModal(props) {
  const {
    slug
  } = props;

  if (!slug) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }
    });
  }

  const {
    data,
    loading,
    error
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_10__.GET_PRODUCT, {
    variables: {
      slug,
      onlyData: true
    }
  });

  if (loading) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }
    }, "Loading...");
  }

  if (error) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 16
      }
    }, "Error: ", error.message); // Render an error message
  }

  const product = data && data.product.single;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: carouselRef,
    1: setCarouselRef
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const events = {
    onTranslate: function (e) {
      let items = document.querySelectorAll('.quickView-content .product-gallery-item');
      document.querySelector('.quickView-content .product-gallery-item.active').classList.remove('active');
      items[e.item.index].classList.add('active');
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    router.events.on('routeChangeStart', closeModal);
    carouselRef && carouselRef.current && carouselRef.current.goTo(0);
    return () => {
      router.events.off('routeChangeStart', closeModal);
    };
  }, []);

  function closeModal() {
    if (document.querySelector(".ReactModal__Content")) {
      document.querySelector(".ReactModal__Content").classList.remove("ReactModal__Content--after-open");
    }

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      props.hideQuick();
    }, 250);
  }

  function changeBgImage(e, index) {
    document.querySelector('.quickView-content .product-gallery-item.active').classList.remove('active');
    e.currentTarget.classList.add('active');
    carouselRef.current.goTo(index);
  }

  if (!slug || error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 16
      }
    });
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    isOpen: props.modalShow,
    onRequestClose: closeModal,
    className: "container quickView-container",
    overlayClassName: "d-flex align-items-center justify-content-center",
    shouldReturnFocusAfterClose: false,
    closeTimeoutMS: 100,
    contentLabel: "QuickView",
    style: customStyles,
    id: "product-quickview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "quickView-content horizontal skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: `row skel-pro-single skel-quickview mb-0 ${loading ? '' : 'loaded'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-6 p-0 pr-lg-2 mb-2 mb-lg-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "skel-product-gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }), !loading ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "product-lg mb-1 position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 45
    }
  }, product.new ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 57
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 57
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 57
    }
  }, "Top") : "", product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 57
    }
  }, "Out of Stock") : "", __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__.default, {
    adClass: "product-gallery-carousel owl-full owl-nav-dark cols-1 cols-md-2 cols-lg-3",
    onChangeRef: setCarouselRef,
    events: events,
    options: {
      'dots': false,
      'nav': false
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 49
    }
  }, product.pictures.map((item, index) => __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4__.Magnifier, {
    imageSrc: "http://localhost:4000" + item.url,
    imageAlt: "product",
    largeImageSrc: "http://localhost:4000" + item.url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-gallery-image",
    style: {
      paddingTop: `${product.pictures[0].height / product.pictures[0].width * 100}%`
    },
    key: "gallery-" + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 57
    }
  })))), __jsx("div", {
    className: "product-sm row px-2",
    id: "owl-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 45
    }
  }, product.pictures.map((item, index) => __jsx("button", {
    className: `product-gallery-item mb-0 ${0 === index ? 'active' : ''}`,
    key: product.id + '-' + index,
    onClick: e => changeBgImage(e, index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "lazy-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 61
    }
  }, __jsx("figure", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 69
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "Thumbnail",
    src: "http://localhost:4000" + product.sm_pictures[index].url,
    width: "100%",
    height: "auto",
    className: "d-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 69
    }
  }))))))) : ""), __jsx("div", {
    className: "col-lg-6 quickview-desc pl-0 pl-lg-4 pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "entry-summary row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary1 mt-2 mt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 41
    }
  }))), !loading ? __jsx(_components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 41
    }
  }) : "")))), __jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 104
    }
  }, "\xD7"))));
}

const mapStateToProps = state => {
  return {
    slug: state.demo.single,
    modalShow: state.demo.quickShow
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_9__.default)({
  ssr: true
})((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread({}, _store_demo__WEBPACK_IMPORTED_MODULE_11__.actions))(QuickViewModal)));

/***/ }),

/***/ "./components/features/modals/video-modal.jsx":
/*!****************************************************!*\
  !*** ./components/features/modals/video-modal.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStateToProps": function() { return /* binding */ mapStateToProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\modals\\video-modal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const customStyles = {
  content: {
    top: '50%',
    transform: 'translateY(-50%)'
  },
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '9000'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement('body');

function VideoModal(props) {
  const {
    showModal
  } = props;

  const closeHandler = () => {
    document.querySelector("#video-modal").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      props.hideVideo();
    }, 350);
  };

  return __jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: showModal,
    onRequestClose: closeHandler,
    style: customStyles,
    contentLabel: "Video Modal",
    className: "video-modal p-3",
    shouldReturnFocusAfterClose: false,
    id: "video-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    onClick: closeHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 42
    }
  }))), __jsx("iframe", {
    className: "mfp-iframe modal-content",
    src: "//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1",
    frameBorder: "0",
    allowFullScreen: "",
    title: "youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));
}

const mapStateToProps = state => {
  return {
    showModal: state.demo.videoShow
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, _store_demo__WEBPACK_IMPORTED_MODULE_3__.actions)(VideoModal));

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

/***/ "./components/features/sticky-header.jsx":
/*!***********************************************!*\
  !*** ./components/features/sticky-header.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\features\\sticky-header.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function StickyHeader(props) {
  const {
    top = 210
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)("");
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: height,
    1: setHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('auto');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    router.events.on('hashChangeComplete', initSticky);
    scrollHandler();
    window.addEventListener('scroll', scrollHandler, {
      passive: true
    });
    window.addEventListener('resize', resizeHandler, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  function initSticky() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + 'px');
  }

  function scrollHandler() {
    let stickyContent = ref.current.children[0];

    if (window.pageYOffset > top) {
      if (!stickyContent.classList.contains('fixed')) {
        stickyContent.classList.add('fixed');
      }
    } else if (stickyContent.classList.contains('fixed')) {
      stickyContent.classList.remove('fixed');
    } else {
      setHeight(stickyContent.offsetHeight + 'px');
    }
  }

  function resizeHandler() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + 'px');
    scrollHandler();
  }

  return __jsx("div", {
    ref: ref,
    className: "sticky-wrapper",
    style: {
      height: height
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (StickyHeader);

/***/ }),

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _partials_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/header/header */ "./components/partials/header/header.jsx");
/* harmony import */ var _AdminDashboard_layouts_ADFullLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdminDashboard/layouts/ADFullLayout */ "./components/AdminDashboard/layouts/ADFullLayout.js");
/* harmony import */ var _partials_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer */ "./components/partials/footer/footer.jsx");
/* harmony import */ var _features_modals_video_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/modals/video-modal */ "./components/features/modals/video-modal.jsx");
/* harmony import */ var _features_modals_quickview_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/modals/quickview-modal */ "./components/features/modals/quickview-modal.jsx");
/* harmony import */ var _features_mobile_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/mobile-menu */ "./components/features/mobile-menu.jsx");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/demo */ "./store/demo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\layout.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function Layout({
  children,
  hideQuick,
  hideVideo
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)("");
  let scrollTop;

  if (router.pathname.includes('admindashboard')) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_AdminDashboard_layouts_ADFullLayout__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: children,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 10
      }
    }));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (router.pathname.includes('pages/coming-soon')) {
      document.querySelector("header").classList.add("d-none");
      document.querySelector("footer").classList.add("d-none");
    } else {
      document.querySelector("header").classList.remove("d-none");
      document.querySelector("footer").classList.remove("d-none");
    }
  }, [router.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    hideQuick();
    hideVideo();
    scrollTop = document.querySelector('#scroll-top');
    window.addEventListener('scroll', scrollHandler, false);
  }, []);

  function toScrollTop() {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_13__.isSafariBrowser)() || (0,_utils__WEBPACK_IMPORTED_MODULE_13__.isEdgeBrowser)()) {
      let pos = window.pageYOffset;
      let timerId = setInterval(() => {
        if (pos <= 0) clearInterval(timerId);
        window.scrollBy(0, -120);
        pos -= 120;
      }, 1);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  function scrollHandler() {
    if (window.pageYOffset >= 400) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  }

  function hideMobileMenu() {
    document.querySelector('body').classList.remove('mmenu-active');
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "page-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_partials_header_header__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), children, __jsx(_partials_footer_footer__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mobile-menu-overlay",
    onClick: hideMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx("button", {
    id: "scroll-top",
    title: "Back to top",
    onClick: toScrollTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon-arrow-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })), __jsx(_features_mobile_menu__WEBPACK_IMPORTED_MODULE_11__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
    autoClose: 3000,
    duration: 300,
    newestOnTo: true,
    className: "toast-container",
    position: "top-right",
    closeButton: false,
    hideProgressBar: true,
    newestOnTop: true,
    draggable: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx(_features_modals_quickview_modal__WEBPACK_IMPORTED_MODULE_10__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx(_features_modals_video_modal__WEBPACK_IMPORTED_MODULE_9__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _objectSpread({}, _store_demo__WEBPACK_IMPORTED_MODULE_12__.actions))(Layout));

/***/ }),

/***/ "./components/partials/footer/footer.jsx":
/*!***********************************************!*\
  !*** ./components/partials/footer/footer.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\footer\\footer.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Footer() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)("");
  const {
    0: isBottomSticky,
    1: setIsBottomSticky
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: containerClass,
    1: setContainerClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('container');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleBottomSticky();
    setContainerClass(router.asPath.includes('fullwidth') ? 'container-fluid' : 'container');
  }, [router.asPath]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', handleBottomSticky, {
      passive: true
    });
    return () => {
      window.removeEventListener('resize', handleBottomSticky);
    };
  }, []);

  function handleBottomSticky() {
    setIsBottomSticky(router.pathname.includes('product/default') && window.innerWidth > 991);
  }

  return __jsx("footer", {
    className: "footer footer-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-sm-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget widget-about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "images/logo.png",
    className: "footer-logo",
    alt: "Footer Logo",
    width: "105",
    height: "25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, "Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. "), __jsx("div", {
    className: "widget-about-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "col-sm-6 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "widget-about-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 45
    }
  }, "Got Question? Call us 24/7"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "tel:123456789",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 45
    }
  }, "+0123 456 789")), __jsx("div", {
    className: "col-sm-6 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "widget-about-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 45
    }
  }, "Payment Method"), __jsx("figure", {
    className: "footer-payments",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "images/payments.png",
    alt: "Payment methods",
    width: "272",
    height: "20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 49
    }
  }))))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "Information"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, "About Molla")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 41
    }
  }, "How to shop on Molla")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }, "FAQ")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, "Contact us")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, "Log in"))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, "Customer Service"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }, "Payment Methods")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }, "Money-back guarantee!")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, "Returns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, "Shipping")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, "Terms and conditions")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, "Privacy Policy"))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "My Account"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, "Sign In")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, "View Cart")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }, "My Wishlist")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }, "Track My Order")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, "Help")))))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "footer-copyright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Copyright \xA9 ", new Date().getFullYear(), " Molla Store. All Rights Reserved."), __jsx("ul", {
    className: "footer-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, "Terms Of Use")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, "Privacy Policy"))), __jsx("div", {
    className: "social-icons social-icons-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "social-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, "Social Media"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-facebook",
    rel: "noopener noreferrer",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 124
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-twitter",
    rel: "noopener noreferrer",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 122
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-instagram",
    rel: "noopener noreferrer",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 126
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-youtube",
    rel: "noopener noreferrer",
    title: "Youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 122
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-pinterest",
    rel: "noopener noreferrer",
    title: "Pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 126
    }
  }))))), isBottomSticky ? __jsx("div", {
    className: "mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Footer));

/***/ }),

/***/ "./components/partials/header/header.jsx":
/*!***********************************************!*\
  !*** ./components/partials/header/header.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_modals_login_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/modals/login-modal */ "./components/features/modals/login-modal.jsx");
/* harmony import */ var _components_partials_header_partials_header_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/partials/header/partials/header-search */ "./components/partials/header/partials/header-search.jsx");
/* harmony import */ var _components_partials_header_partials_wishlist_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/partials/header/partials/wishlist-menu */ "./components/partials/header/partials/wishlist-menu.jsx");
/* harmony import */ var _components_partials_header_partials_cart_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/header/partials/cart-menu */ "./components/partials/header/partials/cart-menu.jsx");
/* harmony import */ var _components_partials_header_partials_category_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/header/partials/category-menu */ "./components/partials/header/partials/category-menu.jsx");
/* harmony import */ var _components_partials_header_partials_main_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/header/partials/main-menu */ "./components/partials/header/partials/main-menu.jsx");
/* harmony import */ var _components_features_sticky_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/features/sticky-header */ "./components/features/sticky-header.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\header\\header.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











function Header() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: containerClass,
    1: setContainerClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('container');

  function openMobileMenu() {
    document.querySelector('body').classList.add('mmenu-active');
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setContainerClass(router.asPath.includes('fullwidth') ? 'container-fluid' : 'container');
  }, [router.asPath]);
  return __jsx("header", {
    className: "header header-2 header-intro-clearance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "header-left overflow-hidden mr-3 mr-sm-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "welcome-msg d-flex flex-nowrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, "Special collection already available."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 73
    }
  }, "\xA0Read more ..."))), __jsx("div", {
    className: "header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "top-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Links"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 45
    }
  }, "USD"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 57
    }
  }, "Eur")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 57
    }
  }, "Usd")))))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 45
    }
  }, "English"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 57
    }
  }, "English")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 57
    }
  }, "French")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 57
    }
  }, "Spanish")))))), __jsx(_components_features_modals_login_modal__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }))))))), __jsx("div", {
    className: "header-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "mobile-menu-toggler",
    onClick: openMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, "Toggle mobile menu"), __jsx("i", {
    className: "icon-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/",
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "images/logo.png",
    alt: "Molla Logo",
    width: 104,
    height: 27,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "header-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(_components_partials_header_partials_header_search__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/dashboard",
    title: "My account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "icon-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "Account"))), __jsx(_components_partials_header_partials_wishlist_menu__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }), __jsx(_components_partials_header_partials_cart_menu__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  })))), __jsx(_components_features_sticky_header__WEBPACK_IMPORTED_MODULE_9__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-bottom sticky-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx(_components_partials_header_partials_category_menu__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "header-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx(_components_partials_header_partials_main_menu__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "header-right overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "la la-lightbulb-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }), __jsx("p", {
    className: "text-truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 66
    }
  }, "Clearance", __jsx("span", {
    className: "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 104
    }
  }, "\xA0Up to 30% Off")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/partials/header/partials/cart-menu.jsx":
/*!***********************************************************!*\
  !*** ./components/partials/header/partials/cart-menu.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/index */ "./utils/index.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\header\\partials\\cart-menu.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CartMenu(props) {
  const {
    cartlist
  } = props;
  return __jsx("div", {
    className: "dropdown cart-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    className: "dropdown-toggle",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    "data-display": "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-shopping-cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "cart-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, (0,_utils_index__WEBPACK_IMPORTED_MODULE_4__.cartQtyTotal)(cartlist))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Cart")), __jsx("div", {
    className: `dropdown-menu dropdown-menu-right ${cartlist.length === 0 ? 'text-center' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, 0 === cartlist.length ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "No products in the cart.") : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "dropdown-cart-products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, cartlist.map((item, index) => __jsx("div", {
    className: "product justify-content-between",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "product-cart-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, __jsx("h4", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/default/${item.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 49
    }
  }, item.name)), __jsx("span", {
    className: "cart-product-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "cart-product-qty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 49
    }
  }, item.qty, " "), "x $", item.sale_price ? item.sale_price.toFixed(2) : item.price.toFixed(2))), __jsx("figure", {
    className: "product-image-container ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/default/${item.slug}`,
    className: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + item.sm_pictures[0].url,
    alt: "product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 49
    }
  }))), __jsx("button", {
    className: "btn-remove",
    title: "Remove Product",
    onClick: () => props.removeFromCart(item),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 142
    }
  }))))), __jsx("div", {
    className: "dropdown-cart-total",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Total"), __jsx("span", {
    className: "cart-total-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "$", (0,_utils_index__WEBPACK_IMPORTED_MODULE_4__.cartPriceTotal)(cartlist).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), __jsx("div", {
    className: "dropdown-cart-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "View Cart"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/checkout",
    className: "btn btn-outline-primary-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 100
    }
  }, "Checkout"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 121
    }
  }))))));
}

function mapStateToProps(state) {
  return {
    cartlist: state.cartlist.data
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, _objectSpread({}, _store_cart__WEBPACK_IMPORTED_MODULE_3__.actions))(CartMenu));

/***/ }),

/***/ "./components/partials/header/partials/category-menu.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/category-menu.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\header\\partials\\category-menu.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CategoryMenu() {
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  return __jsx("div", {
    className: "dropdown category-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    className: "dropdown-toggle",
    title: "Browse Categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Browse Categories"), __jsx("div", {
    className: "dropdown-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "side-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "menu-vertical sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: query.category == 'electronics' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=electronics",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 91
    }
  }, "Electronics")), __jsx("li", {
    className: query.category == 'gift-idea' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=gift-idea",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 89
    }
  }, "Gift Ideas")), __jsx("li", {
    className: query.category == 'beds' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=beds",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 84
    }
  }, "Beds")), __jsx("li", {
    className: query.category == 'lighting' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=lighting",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 88
    }
  }, "Lighting")), __jsx("li", {
    className: query.category == 'sofas-and-sleeper-sofas' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=sofas-and-sleeper-sofas",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 103
    }
  }, "Sofas & Sleeper sofas")), __jsx("li", {
    className: query.category == 'storage' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=storage",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 87
    }
  }, "Storage")), __jsx("li", {
    className: query.category == 'armchairs-and-chaises' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=armchairs-and-chaises",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 101
    }
  }, "Armchairs & Chaises")), __jsx("li", {
    className: query.category == 'decoration' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=decoration",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 90
    }
  }, "Decoration ")), __jsx("li", {
    className: query.category == 'kitchen-cabinets' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=kitchen-cabinets",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 96
    }
  }, "Kitchen Cabinets")), __jsx("li", {
    className: query.category == 'coffee-and-tables' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=coffee-and-tables",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 97
    }
  }, "Coffee & Tables")), __jsx("li", {
    className: query.category == 'furniture' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=furniture",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 89
    }
  }, "Outdoor Furniture "))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CategoryMenu);

/***/ }),

/***/ "./components/partials/header/partials/header-search.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/header-search.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\header\\partials\\header-search.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function HeaderSearch() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)("");
  const {
    0: cat,
    1: setCat
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchProducts, {
    data
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_5__.GET_PRODUCTS);
  const result = data && data.products.data;
  const {
    0: timer,
    1: setTimer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector("body").addEventListener('click', closeSearchForm);
    return () => {
      document.querySelector("body").removeEventListener('click', closeSearchForm);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (result && searchTerm.length > 2) setProducts(result.reduce((acc, product) => {
      let max = 0;
      let min = 999999;
      product.variants.map(item => {
        if (min > item.price) min = item.price;
        if (max < item.price) max = item.price;
      }, []);

      if (product.variants.length == 0) {
        min = product.sale_price ? product.sale_price : product.price;
        max = product.price;
      }

      return [...acc, _objectSpread(_objectSpread({}, product), {}, {
        minPrice: min,
        maxPrice: max
      })];
    }, []));
  }, [result, searchTerm]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchTerm.length > 2) {
      if (timer) clearTimeout(timer);
      let timerId = setTimeout(() => {
        searchProducts({
          variables: {
            searchTerm: searchTerm,
            category: cat
          }
        });
      }, 500);
      setTimer(timerId);
    }
  }, [searchTerm, cat]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [router.pathname]);

  function matchEmphasize(name) {
    let regExp = new RegExp(searchTerm, "i");
    return name.replace(regExp, match => "<strong>" + match + "</strong>");
  }

  function closeSearchForm(e) {
    document.querySelector('.header .header-search').classList.remove('show');
  }

  function onCatSelect(e) {
    setCat(e.target.value);
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function showSearchForm(e) {
    document.querySelector('.header .header-search').classList.add('show');
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: cat
      }
    });
  }

  function goProductPage() {
    setSearchTerm('');
    setProducts([]);
  }

  return __jsx("div", {
    className: "header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "search-toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 47
    }
  })), __jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    onClick: showSearchForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-search-wrapper search-wrapper-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "q",
    className: "sr-only",
    value: searchTerm,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Search"), __jsx("input", {
    type: "text",
    onChange: onSearchChange,
    value: searchTerm,
    className: "form-control",
    name: "q",
    placeholder: "Search product ...",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 71
    }
  })), __jsx("div", {
    className: "live-search-list",
    onClick: goProductPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, products.length > 0 && searchTerm.length > 2 ? __jsx("div", {
    className: "autocomplete-suggestions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, searchTerm.length > 2 && products.map((product, index) => __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    className: "autocomplete-suggestion",
    key: `search-result-${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    width: 40,
    height: 40,
    alt: "product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "search-name",
    dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_7__.safeContent)(matchEmphasize(product.name)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "search-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 49
    }
  }, product.stock == 0 ? __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 61
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 65
    }
  }, "$", product.price.toFixed(2))) : product.minPrice == product.maxPrice ? __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 65
    }
  }, "$", product.minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 69
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 73
    }
  }, "$", product.minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 73
    }
  }, "$", product.maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 69
    }
  }, "$", product.minPrice.toFixed(2), "\u2013$", product.maxPrice.toFixed(2)))))) : ""))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_6__.default)({
  ssr: true
})(HeaderSearch));

/***/ }),

/***/ "./components/partials/header/partials/main-menu.jsx":
/*!***********************************************************!*\
  !*** ./components/partials/header/partials/main-menu.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\header\\partials\\main-menu.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function MainMenu() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  let path = router.asPath;
  let query = router.query;

  function showAllDemos(e) {
    let demoItems = document.querySelectorAll('.demo-item.hidden');

    for (let i = 0; i < demoItems.length; i++) {
      demoItems[i].classList.toggle('show');
    }

    document.querySelector('.view-all-demos').classList.toggle('disabled-hidden');
    e.preventDefault();
  }

  return __jsx("nav", {
    className: "main-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "menu sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: `megamenu-container ${path === '/' ? 'active' : ''}`,
    id: "menu-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Home"), __jsx("div", {
    className: "megamenu demo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "Choose your demo"), __jsx("div", {
    className: "demo-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-1`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/1.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }, "01 - furniture store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-2`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/2.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, "02 - furniture store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-3`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/3.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, "03 - electronic store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-4`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/4.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, "04 - electronic store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-5`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/5.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, "05 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-6`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/6.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, "06 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-7`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/7.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, "07 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-8`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/8.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }, "08 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-9`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/9.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, "09 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-10`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/10.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }, "10 - shoes store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-11`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/11.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 41
    }
  }, "11 - furniture simple store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-12`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/12.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }, "12 - fashion simple store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-13`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/13.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, "13 - market"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-14`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/14.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "14 - market fullwidth"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-15`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/15.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 41
    }
  }, "15 - lookbook 1"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-16`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/16.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 41
    }
  }, "16 - lookbook 2"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-17`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/17.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 41
    }
  }, "17 - fashion store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-18`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/18.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 41
    }
  }, "18 - fashion store (with sidebar)"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-19`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/19.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 41
    }
  }, "19 - games store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-20`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/20.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 41
    }
  }, "20 - book store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-21`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/21.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 41
    }
  }, "21 - sport store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-22`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/22.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 41
    }
  }, "22 - tools store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-23`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/23.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 41
    }
  }, "23 - fashion left navigation store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-24`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/24.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 41
    }
  }, "24 - extreme sport store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-25`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/25.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }, "25 - jewelry store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-26`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/26.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 41
    }
  }, "26 - market store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-27`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/27.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 41
    }
  }, "27 - fashion store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-28`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/28.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 41
    }
  }, "28 - food market store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-29`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/29.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 41
    }
  }, "29 - t-shirts store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-30`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/30.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 41
    }
  }, "30 - headphones store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-31`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/31.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 41
    }
  }, "31 - yoga store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-32`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/32.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 41
    }
  }, "32 - sunglasses store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-33`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/33.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 41
    }
  }, "33 - cosmetics store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-34`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/34.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 41
    }
  }, "34 - car parts")))), __jsx("div", {
    className: "megamenu-action text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "btn btn-outline-primary-2 view-all-demos",
    onClick: showAllDemos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 37
    }
  }, "View All Demos"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 37
    }
  })))))), __jsx("li", {
    className: path.indexOf("/shop") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    className: "sf-with-ul",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 21
    }
  }, "Shop"), __jsx("div", {
    className: "megamenu megamenu-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 45
    }
  }, "Shop with sidebar"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == 'list' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 147
    }
  }, "Shop List")), __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '2cols' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/2cols",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 148
    }
  }, "Shop Grid 2 Columns")), __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '3cols' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 148
    }
  }, "Shop Grid 3 Columns")), __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '4cols' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/4cols",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 148
    }
  }, "Shop Grid 4 Columns")), __jsx("li", {
    className: path.indexOf("shop/market") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/market",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 118
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 145
    }
  }, "Shop Market", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 162
    }
  }, "New"))))), __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 45
    }
  }, "Shop no sidebar"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/nosidebar") > -1 && query.type == 'boxed' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/nosidebar/boxed",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 150
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 203
    }
  }, "Shop Boxed No Sidebar", __jsx("span", {
    className: "tip tip-hot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 230
    }
  }, "Hot")))), __jsx("li", {
    className: path.indexOf("shop/nosidebar") > -1 && query.type == 'fullwidth' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/nosidebar/fullwidth",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 154
    }
  }, "Shop Fullwidth No Sidebar")))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 45
    }
  }, "Product Category"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/category/boxed") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/category/boxed",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 126
    }
  }, "Product Category Boxed")), __jsx("li", {
    className: path.indexOf("shop/category/fullwidth") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/category/fullwidth",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 130
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 186
    }
  }, "Product Category Fullwidth", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 218
    }
  }, "New"))))), __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 45
    }
  }, "Shop Pages"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/cart") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 116
    }
  }, "Cart")), __jsx("li", {
    className: path.indexOf("shop/checkout") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 120
    }
  }, "Checkout")), __jsx("li", {
    className: path.indexOf("shop/wishlist") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 120
    }
  }, "Wishlist")), __jsx("li", {
    className: path.indexOf("shop/dashboard") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 121
    }
  }, "My Account")), __jsx("li", {
    className: path.indexOf("#Lookbook") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 116
    }
  }, "Lookbook"))))))), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    className: "banner banner-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/menu/banner-1.jpg",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 45
    }
  }, "Last ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 91
    }
  }), "Chance", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 103
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 109
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 115
    }
  }, "Sale")))))))))), __jsx("li", {
    className: path.indexOf("product/") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, "Product"), __jsx("div", {
    className: "megamenu megamenu-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 37
    }
  }, "Product Details"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 114
    }
  }, "Default")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/beige-ring-handle-circle-cross-body-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 115
    }
  }, "Centered")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/extended/yellow-tie-strap-block-heel-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 115
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 183
    }
  }, "Extended Info", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 202
    }
  }, "New")))), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/gallery/beige-metal-hoop-tote-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 114
    }
  }, "Gallery")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/sticky/brown-faux-fur-longline-coat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 113
    }
  }, "Sticky Info")), __jsx("li", {
    className: path.indexOf("product/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/sidebar/beige-v-neck-button-cardigan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 114
    }
  }, "Boxed With Sidebar")), __jsx("li", {
    className: path.indexOf("product/fullwidth") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/fullwidth/black-faux-leather-chain-trim-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 116
    }
  }, "Full Width")), __jsx("li", {
    className: path.indexOf("product/masonry") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/masonry/black-denim-dungaree-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 114
    }
  }, "Masonry Sticky Info"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/menu/banner-2.jpg",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 45
    }
  }, "New Trends", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 96
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 102
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 108
    }
  }, "spring ", new Date().getFullYear())))))))))), __jsx("li", {
    className: path.indexOf("pages") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 21
    }
  }, "Pages"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: path.indexOf("pages/about") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 29
    }
  }, "About"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("pages/about") > -1 && path.indexOf("pages/about-2") === -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 144
    }
  }, "About 01")), __jsx("li", {
    className: path.indexOf("pages/about-2") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 104
    }
  }, "About 02")))), __jsx("li", {
    className: path.indexOf("pages/contact") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 29
    }
  }, "Contact"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("pages/contact") > -1 && path.indexOf("pages/contact-2") === -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 148
    }
  }, "Contact 01")), __jsx("li", {
    className: path.indexOf("pages/contact-2") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 106
    }
  }, "Contact 02")))), __jsx("li", {
    className: path.indexOf("pages/login") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 94
    }
  }, "Login")), __jsx("li", {
    className: path.indexOf("pages/faq") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 92
    }
  }, "FAQs")), __jsx("li", {
    className: path.indexOf("404") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/404",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 86
    }
  }, "Error 404")), __jsx("li", {
    className: path.indexOf("pages/coming-soon") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/coming-soon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 100
    }
  }, "Coming Soon")))), __jsx("li", {
    className: path.indexOf("blog/") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/classic",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 21
    }
  }, "Blog"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: path.indexOf("blog/classic") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/classic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 95
    }
  }, "Classic")), __jsx("li", {
    className: path.indexOf("blog/listing") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/listing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 95
    }
  }, "Listing")), __jsx("li", {
    className: path.indexOf("blog/grid") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/2cols",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 29
    }
  }, "Grid"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/grid/2cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 106
    }
  }, "Grid 2 columns")), __jsx("li", {
    className: path.indexOf("blog/grid/3cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 106
    }
  }, "Grid 3 columns")), __jsx("li", {
    className: path.indexOf("blog/grid/4cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 106
    }
  }, "Grid 4 columns")), __jsx("li", {
    className: path.indexOf("blog/grid/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 108
    }
  }, "Grid sidebar")))), __jsx("li", {
    className: path.indexOf("blog/masonry") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/2cols",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 29
    }
  }, "Masonry"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/masonry/2cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 109
    }
  }, "Masonry 2 columns")), __jsx("li", {
    className: path.indexOf("blog/masonry/3cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 109
    }
  }, "Masonry 3 columns")), __jsx("li", {
    className: path.indexOf("blog/masonry/4cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 109
    }
  }, "Masonry 4 columns")), __jsx("li", {
    className: path.indexOf("blog/masonry/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 111
    }
  }, "Masonry sidebar")))), __jsx("li", {
    className: path.indexOf("blog/mask") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/mask/grid",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 29
    }
  }, "Mask"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/mask/grid") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/mask/grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 105
    }
  }, "Blog Mask Grid")), __jsx("li", {
    className: path.indexOf("blog/mask/masonry") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/mask/masonry",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 108
    }
  }, "Blog Mask Masonry")))), __jsx("li", {
    className: path.indexOf("blog/single") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 29
    }
  }, "Single Post"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/single/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 110
    }
  }, "Default with sidebar")), __jsx("li", {
    className: path.indexOf("blog/single/fullwidth") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/fullwidth/fusce-pellentesque-suscipit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 112
    }
  }, "Fullwidth no sidebar")), __jsx("li", {
    className: path.indexOf("blog/single/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/sidebar/utaliquam-sollicitzdvudin-leo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 110
    }
  }, "Fullwidth with sidebar")))))), __jsx("li", {
    className: path.indexOf("element") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 21
    }
  }, "Elements"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: path.indexOf("elements/products") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 100
    }
  }, "Products")), __jsx("li", {
    className: path.indexOf("elements/typography") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/typography",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 102
    }
  }, "Typography")), __jsx("li", {
    className: path.indexOf("elements/titles") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 98
    }
  }, "Titles")), __jsx("li", {
    className: path.indexOf("elements/banners") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 99
    }
  }, "Banners")), __jsx("li", {
    className: path.indexOf("elements/categories") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 102
    }
  }, "Product Category")), __jsx("li", {
    className: path.indexOf("elements/video-banners") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/video-banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 105
    }
  }, "Video Banners")), __jsx("li", {
    className: path.indexOf("elements/buttons") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 99
    }
  }, "Buttons")), __jsx("li", {
    className: path.indexOf("elements/accordions") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/accordions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 102
    }
  }, "Accordions")), __jsx("li", {
    className: path.indexOf("elements/tabs") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 96
    }
  }, "Tabs")), __jsx("li", {
    className: path.indexOf("elements/testimonials") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/testimonials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 104
    }
  }, "Testimonials")), __jsx("li", {
    className: path.indexOf("elements/blog-posts") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/blog-posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 102
    }
  }, "Blog Posts")), __jsx("li", {
    className: path.indexOf("elements/cta") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/cta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 95
    }
  }, "Call to Action")), __jsx("li", {
    className: path.indexOf("elements/icon-boxes") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/icon-boxes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 102
    }
  }, "Icon Boxes"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),

/***/ "./components/partials/header/partials/wishlist-menu.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/wishlist-menu.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\components\\partials\\header\\partials\\wishlist-menu.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function WishlistMenu(props) {
  const {
    wishlist
  } = props;
  return __jsx("div", {
    className: "wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/wishlist",
    title: "Wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-heart-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "wishlist-count badge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, wishlist.length)), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Wishlist")));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {})(WishlistMenu));

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

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index.js */ "./store/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/demo */ "./store/demo.js");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/public/scss/plugins/owl-carousel/owl.carousel.scss */ "./public/scss/plugins/owl-carousel/owl.carousel.scss");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/public/scss/style.scss */ "./public/scss/style.scss");
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_scss_style_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\sir project dashboard admin pannel and client\\project binnissar\\client\\pages\\_app.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const WrappedApp = ({
  Component,
  pageProps
}) => {
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (store.getState().demo.current != "1") {
      store.dispatch(_store_demo__WEBPACK_IMPORTED_MODULE_6__.actions.refreshStore("1"));
    }
  }, []);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__.PersistGate, {
    persistor: store.__persistor,
    loading: __jsx("div", {
      className: "loading-overlay",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "bounce-loader",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bounce1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "bounce2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "bounce3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "Molla React Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "description",
    content: "Molla \u2013  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "author",
    content: "d-themes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "Molla",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "application-name",
    content: "Molla React eCommerce Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#cc9966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-config",
    content: "images/icons/browserconfig.xml",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Molla - React eCommerce Template"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "images/icons/apple-touch-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "images/icons/favicon-32x32.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "images/icons/favicon-16x16.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "images/icons/site.webmanifest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "images/icons/safari-pinned-tab.svg",
    color: "#666666",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "images/icons/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  })))));
};

WrappedApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_store_index_js__WEBPACK_IMPORTED_MODULE_4__.wrapper.withRedux(WrappedApp));

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

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStore": function() { return /* binding */ makeStore; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-saga */ "./store/root-saga.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart */ "./store/cart.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist */ "./store/wishlist.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compare */ "./store/compare.js");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo */ "./store/demo.js");




 // import storage from 'redux-persist/lib/storage';
// Import Reducers





const rootReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  cartlist: _cart__WEBPACK_IMPORTED_MODULE_5__.default,
  wishlist: _wishlist__WEBPACK_IMPORTED_MODULE_6__.default,
  comparelist: _compare__WEBPACK_IMPORTED_MODULE_7__.default,
  demo: _demo__WEBPACK_IMPORTED_MODULE_8__.default
}); // const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducers)

const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
const makeStore = context => {
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducers, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_3__.default);
  store.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(store);
  return store;
}; // export default makeStore;

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ "./store/root-saga.js":
/*!****************************!*\
  !*** ./store/root-saga.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ "./store/cart.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist */ "./store/wishlist.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compare */ "./store/compare.js");




function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,_cart__WEBPACK_IMPORTED_MODULE_1__.cartSaga)(), (0,_wishlist__WEBPACK_IMPORTED_MODULE_2__.wishlistSaga)(), (0,_compare__WEBPACK_IMPORTED_MODULE_3__.compareSaga)()]);
}

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

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/scss/plugins/owl-carousel/owl.carousel.scss":
/*!************************************************************!*\
  !*** ./public/scss/plugins/owl-carousel/owl.carousel.scss ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/scss/style.scss":
/*!********************************!*\
  !*** ./public/scss/style.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

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

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

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

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx-components_features_owl-carousel_jsx"], function() { return __webpack_exec__("./pages/_app.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvQWRtaW5EYXNoYm9hcmQvbGF5b3V0cy9BREZ1bGxMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL0FkbWluRGFzaGJvYXJkL2xheW91dHMvQURIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL0FkbWluRGFzaGJvYXJkL2xheW91dHMvQURTaWRlYmFyLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9BZG1pbkRhc2hib2FyZC9sYXlvdXRzL1NpZGViYXIvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvQWRtaW5EYXNoYm9hcmQvbGF5b3V0cy9TaWRlYmFyL1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL0FkbWluRGFzaGJvYXJkL2xheW91dHMvVG9wYmFyLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2JpbGUtbWVudS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9sb2dpbi1tb2RhbC5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9xdWlja3ZpZXctbW9kYWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvdmlkZW8tbW9kYWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9xdHkuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9zdGlja3ktaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvbGF5b3V0LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2FydC1tZW51LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2NhdGVnb3J5LW1lbnUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvaGVhZGVyLXNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy9tYWluLW1lbnUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvd2lzaGxpc3QtbWVudS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvZGV0YWlscy9kZXRhaWwtb25lLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc2VydmVyL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3NlcnZlci9xdWVyaWVzLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvY2FydC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9kZW1vLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9yb290LXNhZ2EuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10YWJzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkZ1bGxMYXlvdXQiLCJjaGlsZHJlbiIsInNpZGViYXJJc09wZW4iLCJzZXRTaWRlYmFyT3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlU2lkZWJhciIsImJhY2tncm91bmRDb2xvciIsIkhlYWRlciIsIm5hdmlnYXRlIiwidXNlUm91dGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiUmVhY3QiLCJkcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJ0b2dnbGUxIiwicHJldlN0YXRlIiwiSGFuZGxldG9nZ2xlIiwibWFyZ2luTGVmdCIsInN0b3JlIiwiZGlzcGF0Y2giLCJ0eXBlIiwicHVzaCIsIkFEU2lkZWJhciIsIlNpZGVCYXIiLCJ0b2dnbGUiLCJjbGFzc05hbWVzIiwiY29sb3IiLCJzdWJtZW51cyIsInRpdGxlIiwidGFyZ2V0IiwiU3ViTWVudSIsInByb3BzIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaWNvbiIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiTGluayIsIlRvcGJhciIsInRvcGJhcklzT3BlbiIsInNldFRvcGJhck9wZW4iLCJ0b2dnbGVUb3BiYXIiLCJtaW5XaWR0aCIsImZhQWxpZ25MZWZ0IiwiTW9iaWxlTWVudSIsInJvdXRlciIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwidXNlRWZmZWN0IiwiZXZlbnRzIiwib24iLCJoaWRlTW9iaWxlTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uU2VhcmNoQ2hhbmdlIiwiZSIsInZhbHVlIiwib25TdWJtaXRTZWFyY2hGb3JtIiwicHJldmVudERlZmF1bHQiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJvblRvZ2dsZSIsInNldENvbGxhcHNpYmxlRWxlbWVudCIsInRvZ2dsZVN0YXRlIiwidG9Mb3dlckNhc2UiLCJjdXN0b21TdHlsZXMiLCJvdmVybGF5IiwiekluZGV4IiwiTW9kYWwiLCJMb2dpbk1vZGFsIiwib3BlbiIsInNldE9wZW4iLCJ0aW1lciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlRm9ybSIsInNhdmVhdXRvIiwiZGF0YSIsInJlcyIsImF4aW9zIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImNsb3NlTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJvcGVuTW9kYWwiLCJwYWRkaW5nVG9wIiwiUXVpY2tWaWV3TW9kYWwiLCJzbHVnIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwiR0VUX1BST0RVQ1QiLCJ2YXJpYWJsZXMiLCJvbmx5RGF0YSIsInByb2R1Y3QiLCJzaW5nbGUiLCJjYXJvdXNlbFJlZiIsInNldENhcm91c2VsUmVmIiwib25UcmFuc2xhdGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkIiwiY3VycmVudCIsImdvVG8iLCJvZmYiLCJoaWRlUXVpY2siLCJjaGFuZ2VCZ0ltYWdlIiwiY3VycmVudFRhcmdldCIsIm1vZGFsU2hvdyIsIm5ldyIsInNhbGVfcHJpY2UiLCJ0b3AiLCJzdG9jayIsInBpY3R1cmVzIiwicHJvY2VzcyIsInVybCIsImhlaWdodCIsIndpZHRoIiwiaWQiLCJzbV9waWN0dXJlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGVtbyIsInF1aWNrU2hvdyIsIndpdGhBcG9sbG8iLCJzc3IiLCJjb25uZWN0IiwiZGVtb0FjdGlvbiIsImNvbnRlbnQiLCJ0cmFuc2Zvcm0iLCJWaWRlb01vZGFsIiwic2hvd01vZGFsIiwiY2xvc2VIYW5kbGVyIiwiaGlkZVZpZGVvIiwidmlkZW9TaG93IiwiYWN0aW9ucyIsIlF0eSIsImFkQ2xhc3MiLCJtYXgiLCJjaGFuZ2VRdHkiLCJzZXRDdXJyZW50IiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiY2hhbmdlQ3VycmVudCIsInBhcnNlSW50IiwiU3RpY2t5SGVhZGVyIiwicmVmIiwidXNlUmVmIiwic2V0SGVpZ2h0IiwiaW5pdFN0aWNreSIsInNjcm9sbEhhbmRsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RpY2t5Q29udGVudCIsIm9mZnNldEhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiY29udGFpbnMiLCJMYXlvdXQiLCJzY3JvbGxUb3AiLCJpbmNsdWRlcyIsInRvU2Nyb2xsVG9wIiwiaXNTYWZhcmlCcm93c2VyIiwiaXNFZGdlQnJvd3NlciIsInBvcyIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxCeSIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJGb290ZXIiLCJpc0JvdHRvbVN0aWNreSIsInNldElzQm90dG9tU3RpY2t5IiwiY29udGFpbmVyQ2xhc3MiLCJzZXRDb250YWluZXJDbGFzcyIsImhhbmRsZUJvdHRvbVN0aWNreSIsImFzUGF0aCIsImlubmVyV2lkdGgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJvcGVuTW9iaWxlTWVudSIsIkNhcnRNZW51IiwiY2FydGxpc3QiLCJjYXJ0UXR5VG90YWwiLCJsZW5ndGgiLCJuYW1lIiwicXR5IiwidG9GaXhlZCIsInByaWNlIiwicmVtb3ZlRnJvbUNhcnQiLCJjYXJ0UHJpY2VUb3RhbCIsInRvTG9jYWxlU3RyaW5nIiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiQ2F0ZWdvcnlNZW51IiwiSGVhZGVyU2VhcmNoIiwiY2F0Iiwic2V0Q2F0IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNlYXJjaFByb2R1Y3RzIiwidXNlTGF6eVF1ZXJ5IiwiR0VUX1BST0RVQ1RTIiwicmVzdWx0Iiwic2V0VGltZXIiLCJjbG9zZVNlYXJjaEZvcm0iLCJyZWR1Y2UiLCJhY2MiLCJtaW4iLCJ2YXJpYW50cyIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJtYXRjaEVtcGhhc2l6ZSIsInJlZ0V4cCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJtYXRjaCIsIm9uQ2F0U2VsZWN0Iiwic2hvd1NlYXJjaEZvcm0iLCJnb1Byb2R1Y3RQYWdlIiwic2FmZUNvbnRlbnQiLCJNYWluTWVudSIsInBhdGgiLCJzaG93QWxsRGVtb3MiLCJkZW1vSXRlbXMiLCJpIiwiYmFja2dyb3VuZEltYWdlIiwiaW5kZXhPZiIsIldpc2hsaXN0TWVudSIsIndpc2hsaXN0IiwiRGV0YWlsT25lIiwic2V0UXR5IiwicXR5MiIsInNldFF0eTIiLCJjb2xvckFycmF5Iiwic2V0Q29sb3JBcnJheSIsInNpemVBcnJheSIsInNldFNpemVBcnJheSIsInZhcmlhdGlvbkdyb3VwIiwic2V0VmFyaWF0aW9uR3JvdXAiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJjb2xvck5hbWUiLCJzaXplIiwic2hvd0NsZWFyIiwic2V0U2hvd0NsZWFyIiwic2hvd1ZhcmlhdGlvblByaWNlIiwic2V0U2hvd1ZhcmlhdGlvblByaWNlIiwic2V0TWF4UHJpY2UiLCJzZXRNaW5QcmljZSIsImN1ciIsImNvbG9yX25hbWUiLCJyZWZyZXNoU2VsZWN0YWJsZUdyb3VwIiwiY2xpY2siLCJzdGlja3lCYXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJvbldpc2hsaXN0Q2xpY2siLCJpc0luV2lzaGxpc3QiLCJhZGRUb1dpc2hsaXN0IiwidGVtcEFycmF5IiwiZmluZEluZGV4IiwiZGlzYWJsZWQiLCJzZWxlY3RDb2xvciIsInNlbGVjdFNpemUiLCJvbkNoYW5nZVF0eSIsIm9uQ2hhbmdlUXR5MiIsImNsZWFyU2VsZWN0aW9uIiwib25DYXJ0Q2xpY2siLCJuZXdQcm9kdWN0IiwiYWRkVG9DYXJ0IiwicmF0aW5ncyIsInJldmlldyIsInNob3J0X2Rlc2MiLCJvdmVyZmxvdyIsImNhbkFkZFRvQ2FydCIsIndpc2hsaXN0QWN0aW9uIiwiY2FydEFjdGlvbiIsIldyYXBwZWRBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdG9yZSIsImdldFN0YXRlIiwiX19wZXJzaXN0b3IiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3cmFwcGVyIiwiQVBJX1VSSSIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImdxbCIsIkdFVF9FTEVNRU5UX1BST0RVQ1RTIiwiR0VUX0VMRU1FTlRfUE9TVFMiLCJHRVRfUE9TVFNfQllfUEFHRSIsIkdFVF9QT1NUIiwiR0VUX0hPTUVfREFUQSIsImFjdGlvblR5cGVzIiwicmVmcmVzaFN0b3JlIiwidXBkYXRlQ2FydCIsImluaXRpYWxTdGF0ZSIsImNhcnRSZWR1Y2VyIiwiYWN0aW9uIiwicGF5bG9hZCIsInN1bSIsImZpbHRlciIsImNhcnRJdGVtcyIsImNhcnRTYWdhIiwidGFrZUV2ZXJ5Iiwic2FnYSIsInRvYXN0IiwicGVyc2lzdENvbmZpZyIsImtleVByZWZpeCIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0UmVkdWNlciIsImFkZFRvQ29tcGFyZSIsInJlbW92ZUZyb21Db21wYXJlIiwiY2xlYXJBbGxGcm9tQ29tcGFyZSIsImNvbXBhcmVSZWR1Y2VyIiwiY29tcGFyZVNhZ2EiLCJzaG93UXVpY2siLCJzaG93VmlkZW8iLCJkZW1vUmVkdWNlciIsInNob3dRdWlja1ZpZXciLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJ3aXNobGlzdFJlZHVjZXIiLCJjb21wYXJlbGlzdCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtYWtlU3RvcmUiLCJjb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwicGVyc2lzdFN0b3JlIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYWxsIiwid2lzaGxpc3RTYWdhIiwicmVtb3ZlRnJvbVdpc2hsaXN0IiwiaXNJbkNhcnQiLCJmaW5kIiwiaXNJbkNvbXBhcmUiLCJjb21wYXJlIiwic1VzckFnIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0SW5kZXgiLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsImNhdEZpbHRlciIsImZsYWciLCJhdHRyRmlsdGVyIiwiYXR0ciIsInVudGlsIiwic2Nyb2xsVG9QYWdlQ29udGVudCIsInRvIiwib2Zmc2V0VG9wIiwicGFyYWxsYXgiLCJ5IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImNvdW50VG8iLCJhbW91bnQiLCJnZXRBdHRyaWJ1dGUiLCJ0aW1lIiwiaW50ZXJ2YWwiLCJwdCIsImNvdW50VG9TY3JvbGxIYW5kbGVyIiwiaW5uZXJIVE1MIiwiaHRtbCIsIlNDUklQVF9SRUdFWCIsInRlc3QiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBRWpDLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQWtDQywrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7O0FBQ0EsUUFBTUMsYUFBYSxHQUFHLE1BQU1GLGNBQWMsQ0FBQyxDQUFDRCxhQUFGLENBQTFDOztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLHFEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJTSxNQUFDLHFEQUFEO0FBQVUsVUFBTSxFQUFFRyxhQUFsQjtBQUFpQyxVQUFNLEVBQUVILGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKTixFQVVF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QTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFtRCxVQUFNLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBSixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLDBDQUFSO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFKLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsMENBQVI7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUosQ0FMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFtRCxVQUFNLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBSixDQU5KLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLDBDQUFSO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFKLENBUEosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsMENBQVI7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUosQ0FSSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFtRCxVQUFNLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSww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Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vQURTaWRlYmFyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vQURIZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZWJhci9TaWRlQmFyXCI7XHJcbmltcG9ydCBUb3BiYXIgZnJvbSBcIi4vVG9wYmFyXCI7XHJcbmNvbnN0IEZ1bGxMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cclxuICBjb25zdCBbc2lkZWJhcklzT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHNldFNpZGViYXJPcGVuKCFzaWRlYmFySXNPcGVuKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VXcmFwcGVyIEFkbWluIFdyYXBwZXIgZC1sZy1mbGV4IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICB7LyoqKioqKioqU2lkZWJhcioqKioqKioqKiovfVxyXG5cclxuICAgICAgXHJcbiAgICAgICAgICA8U2lkZUJhciAgdG9nZ2xlPXt0b2dnbGVTaWRlYmFyfSBpc09wZW49e3NpZGViYXJJc09wZW59Lz5cclxuICAgICAgICBcclxuICAgICAgXHJcblxyXG4gICAgICB7LyoqKioqKioqQ29udGVudCBBcmVhKioqKioqKioqKi99XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNjZmRkZTMnIH19IGNsYXNzTmFtZT1cImNvbnRlbnRBcmVhXCI+XHJcbiAgICAgICAgey8qKioqKioqKmhlYWRlcioqKioqKioqKiovfVxyXG4gICAgICAgXHJcbiAgICAgICAgICA8VG9wYmFyIHRvZ2dsZVNpZGViYXI9e3RvZ2dsZVNpZGViYXJ9IHNpZGViYXJJc09wZW49e3NpZGViYXJJc09wZW59Lz5cclxuICAgICAgICBcclxuICAgICAgICB7LyoqKioqKioqTWlkZGxlIENvbnRlbnQqKioqKioqKioqL31cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInAtNCB3cmFwcGVyXCIgZmx1aWQ+XHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdWxsTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgIH0gZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IFByb2ZpbGVQaWMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy91c2Vycy91c2VyMS5qcGcnXHJcbi8vIGltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vLi4vLi4vU3RvcmUvU3RvcmVcIlxyXG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIE5hdmJhcixcclxuICBDb2xsYXBzZSxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZiYXJCcmFuZCxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIERyb3Bkb3duLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG4vLyBpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBMb2dvV2hpdGUgfSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9sb2dvcy94dHJlbWVsb2dvd2hpdGUuc3ZnXCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGxldCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBcclxuICBjb25zdCB0b2dnbGUxID0gKCkgPT4gc2V0RHJvcGRvd25PcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIGNvbnN0IEhhbmRsZXRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG4gIC8vIGNvbnN0IHNob3dNb2JpbGVtZW51ID0gKCkgPT4ge1xyXG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyQXJlYVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1NpZGViYXJcIik7XHJcbiAgLy8gfTtcclxuICBcclxuICBcclxuICAvLyBsZXQgcmVkdWNlciA9IHVzZVNlbGVjdG9yKChzdG9yZSkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIHN0b3JlLnVzZXJSZWR1Y2VyO1xyXG4gIC8vIH0pO1xyXG4gXHJcbiAgLy8gbGV0IHRvZ2dsZT0gcmVkdWNlci50b2dnbGU7XHJcbiAgLy8gbGV0IHVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VXNlclwiKVxyXG4gIC8vIGxldCBjdXJyZW50VXNlcj1KU09OLnBhcnNlKHVzZXIpXHJcbiAgLy8gbGV0IGN1cnJlbnRVc2Vycz1KU09OLnBhcnNlKGN1cnJlbnRVc2VyKVxyXG5cclxuICAgICAgICAvLyAgbGV0IGN1cnJlbnRVc2VyID1yZWR1Y2VyLmN1cnJlbnRVc2VyXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnLTFweCd9fSAgY2xhc3NOYW1lPVwiREhlYWRlclwiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvQWRtaW5EYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJkLWxnLW5vbmVcIj5cclxuICAgICAgICAgIHsvKiA8TG9nb1doaXRlIC8+ICovfVxyXG4gICAgICAgICAgSGVsbG9cclxuICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIC8vIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtbGctbm9uZSBESGVhZGVyXCJcclxuICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHRvZ2dsZSgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWxpc3RcIj48L2k+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhzdGFjayBnYXAtMlwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIC8vIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLXNtLWJsb2NrIGQtbWQtbm9uZSBESGVhZGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e0hhbmRsZXRvZ2dsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS14XCI+PC9pPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktdGhyZWUtZG90cy12ZXJ0aWNhbFwiPjwvaT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPENvbGxhcHNlIG5hdmJhciBpc09wZW49e2lzT3Blbn0+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5MZWZ0OiczJSd9fSBjbGFzc05hbWU9XCJhZG1pbk5hbWVcIj4gV2VsY29tZSAgPC9oMj5cclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDxEcm9wZG93biBpc09wZW49e2Ryb3Bkb3duT3Blbn0gdG9nZ2xlPXt0b2dnbGUxfT5cclxuICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSAgY2xhc3NOYW1lPVwiREhlYWRlclwiID5cclxuICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgIHNyYz17UHJvZmlsZVBpY31cclxuICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6XCJVU0VSX0xPR0dFRF9PVVRcIlxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5wdXNoKFwiL2xvZ2luTmF2aWdhdGlvblwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+TG9nb3V0PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgIHsvKiA8TmF2PlxyXG4gICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17UHJvZmlsZVBpY31cclxuICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzNVwiXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgPC9OYXY+ICovfVxyXG4gICAgICA8L0NvbGxhcHNlPlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQURTaWRlYmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XCJ3aWR0aFwiOlwiMjAwcHhcIn19PkFEU2lkZWJhcjwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQURTaWRlYmFyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5pbXBvcnQge1xuICBmYUhvbWUsXG4gIGZhQnJpZWZjYXNlLFxuICBmYVBhcGVyUGxhbmUsXG4gIGZhUXVlc3Rpb24sXG4gIGZhSW1hZ2UsXG4gIGZhQ29weSxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgTmF2SXRlbSwgTmF2TGluaywgTmF2IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCBTdWJNZW51IGZyb20gXCIuL1N1Yk1lbnVcIjtcblxuY29uc3QgU2lkZUJhciA9ICh7IGlzT3BlbiwgdG9nZ2xlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJzaWRlYmFyQURcIiwgeyBcImlzLW9wZW5cIjogaXNPcGVuIH0pfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItaGVhZGVyXCI+XG4gICAgICA8c3BhbiBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXt0b2dnbGV9IHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fT5cbiAgICAgICAgJnRpbWVzO1xuICAgICAgPC9zcGFuPlxuICAgICAgPGgzPkNvbW1lcmNlIEJhYmE8L2gzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1tZW51XCI+XG4gICAgICA8TmF2IHZlcnRpY2FsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcGItM1wiPlxuICAgICAgICA8cD5BZG1pbiBEYXNoYm9hcmQ8L3A+XG4gICAgICAgIDxTdWJNZW51IHRpdGxlPVwiUHJvZHVjdHNcIiAgaXRlbXM9e3N1Ym1lbnVzWzBdfSAvPlxuICAgICAgICB7LyogPE5hdkl0ZW0+XG4gICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz17XCIvYWJvdXRcIn0+IFxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJyaWVmY2FzZX0gY2xhc3NOYW1lPVwibXItMlwiIC8+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9OYXZJdGVtPiAqL31cbiAgICAgICAgey8qIDxTdWJNZW51IHRpdGxlPVwiUGFnZXNcIiBpdGVtcz17c3VibWVudXNbMV19IC8+ICovfVxuICAgICAgPC9OYXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3Qgc3VibWVudXMgPSBbXG4gIFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJBZGQgcHJvZHVjdFwiLFxuICAgICAgdGFyZ2V0OiBcInByb2R1Y3RmZWF0dXJlZHRhYmxlXCIsXG4gICAgfSxcblxuICBdLFxuICAvLyBbXG4gICAgLy8ge1xuICAgIC8vICAgdGl0bGU6IFwiUGFnZSAxXCIsXG4gICAgLy8gICB0YXJnZXQ6IFwiUGFnZS0xXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB0aXRsZTogXCJQYWdlIDJcIixcbiAgICAvLyAgIHRhcmdldDogXCJQYWdlLTJcIixcbiAgICAvLyB9LFxuICAvLyBdLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IENvbGxhcHNlLCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuY29uc3QgU3ViTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldENvbGxhcHNlZCghY29sbGFwc2VkKTtcbiAgY29uc3QgeyBpY29uLCB0aXRsZSwgaXRlbXMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJtZW51LW9wZW5cIjogIWNvbGxhcHNlZCB9KX1cbiAgICAgID5cbiAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSBjbGFzc05hbWU9XCJtci0yXCIgLz5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxDb2xsYXBzZVxuICAgICAgICBpc09wZW49eyFjb2xsYXBzZWR9XG4gICAgICAgIG5hdmJhclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJpdGVtcy1tZW51XCIsIHsgXCJtYi0xXCI6ICFjb2xsYXBzZWQgfSl9XG4gICAgICA+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPE5hdkl0ZW0ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGwtNFwiPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz17aXRlbS50YXJnZXR9PlxuICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1Yk1lbnU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQWxpZ25MZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHtcbiAgTmF2YmFyLFxuICBCdXR0b24sXG4gIE5hdmJhclRvZ2dsZXIsXG4gIENvbGxhcHNlLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmssXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIm5leHQvbGlua1wiXG4vLyBpbXBvcnQgJy4vU2lkZWJhci9zdHlsZS5jc3MnXG5cbmNvbnN0IFRvcGJhciA9ICh7IHRvZ2dsZVNpZGViYXIgfSkgPT4ge1xuICBjb25zdCBbdG9wYmFySXNPcGVuLCBzZXRUb3BiYXJPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB0b2dnbGVUb3BiYXIgPSAoKSA9PiBzZXRUb3BiYXJPcGVuKCF0b3BiYXJJc09wZW4pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdmJhclxuICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICBsaWdodFxuICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIHNoYWRvdy1zbSBwLTMgbWItNSBiZy13aGl0ZSByb3VuZGVkXCJcbiAgICAgIGV4cGFuZD1cIm1kXCJcbiAgICA+XG4gICAgICA8QnV0dG9uIHN0eWxlPXt7bWluV2lkdGg6JzEwcHgnIH19ICBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFsaWduTGVmdH0gLz5cbiAgICAgICAgey8qIFRvZ2dsZSAqL31cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlVG9wYmFyfSAvPlxuICAgICAgPENvbGxhcHNlIGlzT3Blbj17dG9wYmFySXNPcGVufSBuYXZiYXI+XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttaW5XaWR0aDonMjVweCd9fSBjb2xvcj1cImluZm9cIj5cblxuICAgICAgICAgICAgPE5hdkxpbmsgIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319IHRhZz17TGlua30gdG89e1wiL3BhZ2UtMVwifT5cbiAgICAgICAgICAgICAgPHN0cm9uZz4gTG9ndW90IDwvc3Ryb25nPiAgIFxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgXG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGJhcjtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYnMsIFRhYkxpc3QsIFRhYiwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcclxuaW1wb3J0IFNsaWRlVG9nZ2xlIGZyb20gJ3JlYWN0LXNsaWRlLXRvZ2dsZSc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIE1vYmlsZU1lbnUgKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbIHNlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm0gXSA9IHVzZVN0YXRlKCBcIlwiICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbiggJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoaWRlTW9iaWxlTWVudSApO1xyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVNb2JpbGVNZW51ICgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnbW1lbnUtYWN0aXZlJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU2VhcmNoQ2hhbmdlICggZSApIHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKCBlLnRhcmdldC52YWx1ZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3VibWl0U2VhcmNoRm9ybSAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1jb250YWluZXIgbW9iaWxlLW1lbnUtbGlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1jbG9zZVwiIG9uQ2xpY2s9eyBoaWRlTW9iaWxlTWVudSB9PjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2VcIj48L2k+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJnZXRcIiBvblN1Ym1pdD17IG9uU3VibWl0U2VhcmNoRm9ybSB9IGNsYXNzTmFtZT1cIm1vYmlsZS1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vYmlsZS1zZWFyY2hcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+U2VhcmNoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17IHNlYXJjaFRlcm0gfSBvbkNoYW5nZT17IG9uU2VhcmNoQ2hhbmdlIH0gbmFtZT1cIm1vYmlsZS1zZWFyY2hcIiBpZD1cIm1vYmlsZS1zZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBwcm9kdWN0IC4uLlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRhYnMgZGVmYXVsdEluZGV4PXsgMCB9IHNlbGVjdGVkVGFiQ2xhc3NOYW1lPVwic2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMtbW9iaWxlXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5NZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Q2F0ZWdvcmllczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb2JpbGUtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0xL1wiIHRhcmdldD1cIl9ibGFua1wiPjAxIC0gZnVybml0dXJlIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wMiAtIGZ1cm5pdHVyZSBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDMgLSBlbGVjdHJvbmljIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tNC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wNCAtIGVsZWN0cm9uaWMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby01L1wiIHRhcmdldD1cIl9ibGFua1wiPjA1IC0gZmFzaGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDYgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tNy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wNyAtIGZhc2hpb24gc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby04L1wiIHRhcmdldD1cIl9ibGFua1wiPjA4IC0gZmFzaGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDkgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTAgLSBzaG9lcyBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTExL1wiIHRhcmdldD1cIl9ibGFua1wiPjExIC0gZnVybml0dXJlIHNpbXBsZSBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTEyL1wiIHRhcmdldD1cIl9ibGFua1wiPjEyIC0gZmFzaGlvbiBzaW1wbGUgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0xMy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4xMyAtIG1hcmtldDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTE0L1wiIHRhcmdldD1cIl9ibGFua1wiPjE0IC0gbWFya2V0IGZ1bGx3aWR0aDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTE1L1wiIHRhcmdldD1cIl9ibGFua1wiPjE1IC0gbG9va2Jvb2sgMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTE2L1wiIHRhcmdldD1cIl9ibGFua1wiPjE2IC0gbG9va2Jvb2sgMjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTE3L1wiIHRhcmdldD1cIl9ibGFua1wiPjE3IC0gZmFzaGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTE4L1wiIHRhcmdldD1cIl9ibGFua1wiPjE4IC0gZmFzaGlvbiBzdG9yZSAod2l0aCBzaWRlYmFyKTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTE5L1wiIHRhcmdldD1cIl9ibGFua1wiPjE5IC0gZ2FtZXMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yMCAtIGJvb2sgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yMSAtIHNwb3J0IHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMjIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MjIgLSB0b29scyBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTIzL1wiIHRhcmdldD1cIl9ibGFua1wiPjIzIC0gZmFzaGlvbiBsZWZ0IG5hdmlnYXRpb24gc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yNC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yNCAtIGV4dHJlbWUgc3BvcnQgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yNS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yNSAtIGpld2Vscnkgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yNi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yNiAtIG1hcmtldCBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI3L1wiIHRhcmdldD1cIl9ibGFua1wiPjI3IC0gZmFzaGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI4L1wiIHRhcmdldD1cIl9ibGFua1wiPjI4IC0gZm9vZCBtYXJrZXQgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yOS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yOSAtIHQtc2hpcnRzIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMzAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MzAgLSBoZWFkcGhvbmVzIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMzEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MzEgLSB5b2dhIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCI+U2hvcCBMaXN0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8yY29sc1wiPlNob3AgR3JpZCAyIENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzXCI+U2hvcCBHcmlkIDMgQ29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvNGNvbHNcIj5TaG9wIEdyaWQgNCBDb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3AvbWFya2V0XCI+PHNwYW4+U2hvcCBNYXJrZXQ8c3BhbiBjbGFzc05hbWU9XCJ0aXAgdGlwLW5ld1wiPk5ldzwvc3Bhbj48L3NwYW4+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avbm9zaWRlYmFyL2JveGVkXCI+PHNwYW4+U2hvcCBCb3hlZCBObyBTaWRlYmFyPHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1ob3RcIj5Ib3Q8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL25vc2lkZWJhci9mdWxsd2lkdGhcIj5TaG9wIEZ1bGx3aWR0aCBObyBTaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3AvY2F0ZWdvcnkvYm94ZWRcIj5Qcm9kdWN0IENhdGVnb3J5IEJveGVkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3AvY2F0ZWdvcnkvZnVsbHdpZHRoXCI+PHNwYW4+UHJvZHVjdCBDYXRlZ29yeSBGdWxsd2lkdGg8c3BhbiBjbGFzc05hbWU9XCJ0aXAgdGlwLW5ld1wiPk5ldzwvc3Bhbj48L3NwYW4+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3AvY2FydFwiPkNhcnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9jaGVja291dFwiPkNoZWNrb3V0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIj5XaXNobGlzdDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL2Rhc2hib2FyZFwiPk15IEFjY291bnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+TG9va2Jvb2s8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9kZWZhdWx0L2RhcmsteWVsbG93LWxhY2UtY3V0LW91dC1zd2luZy1kcmVzc1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9kZWZhdWx0L2RhcmsteWVsbG93LWxhY2UtY3V0LW91dC1zd2luZy1kcmVzc1wiPkRlZmF1bHQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9iZWlnZS1yaW5nLWhhbmRsZS1jaXJjbGUtY3Jvc3MtYm9keS1iYWdcIj5DZW50ZXJlZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2V4dGVuZGVkL3llbGxvdy10aWUtc3RyYXAtYmxvY2staGVlbC1zYW5kYWxzXCI+PHNwYW4+RXh0ZW5kZWQgSW5mbzxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9nYWxsZXJ5L2JlaWdlLW1ldGFsLWhvb3AtdG90ZS1iYWdcIj5HYWxsZXJ5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc3RpY2t5L2Jyb3duLWZhdXgtZnVyLWxvbmdsaW5lLWNvYXRcIj5TdGlja3kgSW5mbzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L3NpZGViYXIvYmVpZ2Utdi1uZWNrLWJ1dHRvbi1jYXJkaWdhblwiPkJveGVkIFdpdGggU2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2Z1bGx3aWR0aC9ibGFjay1mYXV4LWxlYXRoZXItY2hhaW4tdHJpbS1zYW5kYWxzXCI+RnVsbCBXaWR0aDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L21hc29ucnkvYmxhY2stZGVuaW0tZHVuZ2FyZWUtZHJlc3NcIj5NYXNvbnJ5IFN0aWNreSBJbmZvPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXRcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+QWJvdXQgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+PC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0XCI+QWJvdXQgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0LTJcIj5BYm91dCAwMjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9jb250YWN0XCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPkNvbnRhY3QgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+PC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIj5Db250YWN0IDAxPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wYWdlcy9jb250YWN0LTJcIj5Db250YWN0IDAyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvbG9naW5cIj5Mb2dpbjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wYWdlcy9mYXFcIj5GQVFzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiLzQwNFwiPkVycm9yIDQwNDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wYWdlcy9jb21pbmctc29vblwiPkNvbWluZyBTb29uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvY2xhc3NpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9jbGFzc2ljXCI+Q2xhc3NpYzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL2xpc3RpbmdcIiA+TGlzdGluZzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+R3JpZCA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvMmNvbHNcIj5HcmlkIDIgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzNjb2xzXCI+R3JpZCAzIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvZ3JpZC80Y29sc1wiPkdyaWQgNCBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvc2lkZWJhclwiPkdyaWQgc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5NYXNvbnJ5IDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8yY29sc1wiPk1hc29ucnkgMiBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc29ucnkvM2NvbHNcIj5NYXNvbnJ5IDMgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5LzRjb2xzXCI+TWFzb25yeSA0IGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS9zaWRlYmFyXCI+TWFzb25yeSBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc2sgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNrL2dyaWRcIj5CbG9nIE1hc2sgR3JpZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNrL21hc29ucnlcIj5CbG9nIE1hc2sgTWFzb25yeTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL2RlZmF1bHQvY3Jhcy1vcm5hcmUtdHJpc3RpcXVlLWVsaXQuXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPlNpbmdsZSBQb3N0IDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL2RlZmF1bHQvY3Jhcy1vcm5hcmUtdHJpc3RpcXVlLWVsaXQuXCI+RGVmYXVsdCB3aXRoIHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL2Z1bGx3aWR0aC9mdXNjZS1wZWxsZW50ZXNxdWUtc3VzY2lwaXQuXCI+RnVsbHdpZHRoIG5vIHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL3NpZGViYXIvdXRhbGlxdWFtLXNvbGxpY2l0emR2dWRpbi1sZW9cIj5GdWxsd2lkdGggd2l0aCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvZWxlbWVudHNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvcHJvZHVjdHNcIj5Qcm9kdWN0czwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90eXBvZ3JhcGh5XCI+VHlwb2dyYXBoeTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90aXRsZXNcIj5UaXRsZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYmFubmVyc1wiPkJhbm5lcnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvY2F0ZWdvcmllc1wiPlByb2R1Y3QgQ2F0ZWdvcnk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvdmlkZW8tYmFubmVyc1wiPlZpZGVvIEJhbm5lcnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYnV0dG9uc1wiPkJ1dHRvbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYWNjb3JkaW9uc1wiPkFjY29yZGlvbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvdGFic1wiPlRhYnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvdGVzdGltb25pYWxzXCI+VGVzdGltb25pYWxzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2Jsb2ctcG9zdHNcIj5CbG9nIFBvc3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2N0YVwiPkNhbGwgdG8gQWN0aW9uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2ljb24tYm94ZXNcIj5JY29uIEJveGVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1vYmlsZS1jYXRzLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb2JpbGUtY2F0cy1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtLWNhdHMtbGVhZFwiPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1lbGVjdHJvbmljc1wiPkVsZWN0cm9uaWNzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbS1jYXRzLWxlYWRcIj48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9Z2lmdC1pZGVhXCI+R2lmdCBJZGVhczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1iZWRzXCI+QmVkczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1saWdodGluZ1wiPkxpZ2h0aW5nPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PXNvZmFzLWFuZC1zbGVlcGVyLXNvZmFzXCI+U29mYXMgJiBTbGVlcGVyIHNvZmFzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PXN0b3JhZ2VcIj5TdG9yYWdlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWFybWNoYWlycy1hbmQtY2hhaXNlc1wiPkFybWNoYWlycyAmIENoYWlzZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9ZGVjb3JhdGlvblwiPkRlY29yYXRpb24gPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWtpdGNoZW4tY2FiaW5ldHNcIj5LaXRjaGVuIENhYmluZXRzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWNvZmZlZS1hbmQtdGFibGVzXCI+Q29mZmVlICYgVGFibGVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWZ1cm5pdHVyZVwiPk91dGRvb3IgRnVybml0dXJlIDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj48aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJJbnN0YWdyYW1cIj48aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJZb3V0dWJlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi15b3V0dWJlXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIE1vYmlsZU1lbnUgKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgVGFicywgVGFiTGlzdCwgVGFiLCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5cclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuXHJcblxyXG5cclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc3LDc3LDc3LDAuNiknLFxyXG4gICAgICAgIHpJbmRleDogJzkwMDAnXHJcbiAgICB9XHJcbn1cclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoJ2JvZHknKTtcclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbk1vZGFsKCkge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbGV0IHRpbWVyO1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG4gIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2F2ZWF1dG8oZGF0YSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvY3JlYXRldXNlcicsIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLm1lc3NhZ2UpOyAgIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgdXNlcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uICBzYXZlYXV0byhkYXRhKSB7XHJcbiAgICAvLyAgICAgZGF0YS5yb2xlID0gJ1NlbGxlcic7XHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9DcmVhdGVVc2VyJywgZGF0YSk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAvLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyB1c2VyOicsIGVycm9yKTtcclxuICAgIC8vICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gYXN5bmMgZnVuY3Rpb24gc2F2ZWF1dG8oZGF0YSkge1xyXG5cclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBkYXRhLnJvbGUgPSBcIlNlbGxlclwiXHJcbiAgICAvLyAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL0NyZWF0ZVVzZXJcIiwgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLW1vZGFsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJSZWFjdE1vZGFsX19Db250ZW50LS1hZnRlci1vcGVuXCIpO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUmVhY3RNb2RhbF9fT3ZlcmxheVwiKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgfSwgMzUwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e29wZW5Nb2RhbH0+U2lnbiBpbiAvIFNpZ24gdXA8L2E+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9wZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbD1cImxvZ2luIE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9naW4tbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0TVM9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzIHNlbGVjdGVkVGFiQ2xhc3NOYW1lPVwic2hvd1wiIGRlZmF1bHRJbmRleD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3QgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBuYXYtZmlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNpZ24gSW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5SZWdpc3Rlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjJyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2luZ2luLWVtYWlsLTJcIj5Vc2VybmFtZSBvciBlbWFpbCBhZGRyZXNzICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJzaW5naW4tZW1haWwtMlwiIG5hbWU9XCJzaW5naW4tZW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaW5naW4tcGFzc3dvcmQtMlwiPlBhc3N3b3JkICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwic2luZ2luLXBhc3N3b3JkLTJcIiBuYW1lPVwic2luZ2luLXBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TE9HIElOPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJzaWduaW4tcmVtZW1iZXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cInNpZ25pbi1yZW1lbWJlci0yXCI+UmVtZW1iZXIgTWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9yZ290LWxpbmtcIj5Gb3Jnb3QgWW91ciBQYXNzd29yZD88L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPm9yIHNpZ24gaW4gd2l0aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ2luIGJ0bi1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZ29vZ2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiBXaXRoIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ2luIGJ0bi1mXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHNhdmVhdXRvKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2lzdGVyLWVtYWlsLTJcIj5Zb3VyIGVtYWlsIGFkZHJlc3MgKjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgey4uLnJlZ2lzdGVyKFwiZW1haWxcIil9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicmVnaXN0ZXItZW1haWwtMlwiIG5hbWU9XCJyZWdpc3Rlci1lbWFpbFwiIHJlcXVpcmVkIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKFwiZW1haWxcIil9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2lzdGVyLXBhc3N3b3JkLTJcIj5QYXNzd29yZCAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiKX0gdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZWdpc3Rlci1wYXNzd29yZC0yXCIgbmFtZT1cInJlZ2lzdGVyLXBhc3N3b3JkXCIgcmVxdWlyZWQgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiKX0gdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TSUdOIFVQPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cInJlZ2lzdGVyLXBvbGljeS0yXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJyZWdpc3Rlci1wb2xpY3ktMlwiPkkgYWdyZWUgdG8gdGhlIHByaXZhY3kgcG9saWN5ICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPm9yIHNpZ24gaW4gd2l0aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ2luIGJ0bi1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1nb29nbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTEgbXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dpbiAgYnRuLWZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsOyIsImltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFnbmlmaWVyIH0gZnJvbSAncmVhY3QtaW1hZ2UtbWFnbmlmaWVycyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgT3dsQ2Fyb3VzZWwgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL293bC1jYXJvdXNlbCc7XHJcbmltcG9ydCBEZXRhaWxPbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvZGV0YWlscy9kZXRhaWwtb25lJztcclxuXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ34vc2VydmVyL2Fwb2xsbyc7XHJcbmltcG9ydCB7IEdFVF9QUk9EVUNUIH0gZnJvbSAnfi9zZXJ2ZXIvcXVlcmllcyc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tICd+L3N0b3JlL2RlbW8nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUxLDUxLDUxLDAuNiknLFxyXG4gICAgICAgIHpJbmRleDogJzkwMDAnXHJcbiAgICB9XHJcbn07XHJcbiBcclxuTW9kYWwuc2V0QXBwRWxlbWVudCggJ2JvZHknICk7XHJcblxyXG5mdW5jdGlvbiBRdWlja1ZpZXdNb2RhbCAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSBwcm9wcztcclxuICAgIGlmICggIXNsdWcgKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeSggR0VUX1BST0RVQ1QsIHsgdmFyaWFibGVzOiB7IHNsdWcsIG9ubHlEYXRhOiB0cnVlIH0gfSApO1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47IC8vIFJlbmRlciBhbiBlcnJvciBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdC5zaW5nbGU7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgY2Fyb3VzZWxSZWYsIHNldENhcm91c2VsUmVmIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuICAgICAgICBvblRyYW5zbGF0ZTogZnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnF1aWNrVmlldy1jb250ZW50IC5wcm9kdWN0LWdhbGxlcnktaXRlbScgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5xdWlja1ZpZXctY29udGVudCAucHJvZHVjdC1nYWxsZXJ5LWl0ZW0uYWN0aXZlJyApLmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XHJcbiAgICAgICAgICAgIGl0ZW1zWyBlLml0ZW0uaW5kZXggXS5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCAncm91dGVDaGFuZ2VTdGFydCcsIGNsb3NlTW9kYWwgKTtcclxuICAgICAgICBjYXJvdXNlbFJlZiAmJiBjYXJvdXNlbFJlZi5jdXJyZW50ICYmIGNhcm91c2VsUmVmLmN1cnJlbnQuZ29UbyggMCApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZiggJ3JvdXRlQ2hhbmdlU3RhcnQnLCBjbG9zZU1vZGFsICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwgKCkge1xyXG4gICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCIuUmVhY3RNb2RhbF9fQ29udGVudFwiICkgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX0NvbnRlbnRcIiApLmNsYXNzTGlzdC5yZW1vdmUoIFwiUmVhY3RNb2RhbF9fQ29udGVudC0tYWZ0ZXItb3BlblwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5oaWRlUXVpY2soKTtcclxuICAgICAgICB9LCAyNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VCZ0ltYWdlICggZSwgaW5kZXggKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5xdWlja1ZpZXctY29udGVudCAucHJvZHVjdC1nYWxsZXJ5LWl0ZW0uYWN0aXZlJyApLmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5nb1RvKCBpbmRleCApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoICFzbHVnIHx8IGVycm9yICkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17IHByb3BzLm1vZGFsU2hvdyB9XHJcbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIHF1aWNrVmlldy1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJRdWlja1ZpZXdcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9eyBjdXN0b21TdHlsZXMgfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0LXF1aWNrdmlld1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2tWaWV3LWNvbnRlbnQgaG9yaXpvbnRhbCBza2VsZXRvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYHJvdyBza2VsLXByby1zaW5nbGUgc2tlbC1xdWlja3ZpZXcgbWItMCAke2xvYWRpbmcgPyAnJyA6ICdsb2FkZWQnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC0wIHByLWxnLTIgbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb2R1Y3QtZ2FsbGVyeVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxnIG1iLTEgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtbmV3XCI+TmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtc2FsZVwiPlNhbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW91dFwiPk91dCBvZiBTdG9jazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cInByb2R1Y3QtZ2FsbGVyeS1jYXJvdXNlbCBvd2wtZnVsbCBvd2wtbmF2LWRhcmsgY29scy0xIGNvbHMtbWQtMiBjb2xzLWxnLTNcIiBvbkNoYW5nZVJlZj17IHNldENhcm91c2VsUmVmIH0gZXZlbnRzPXsgZXZlbnRzIH0gb3B0aW9ucz17IHsgJ2RvdHMnOiBmYWxzZSwgJ25hdic6IGZhbHNlIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdC5waWN0dXJlcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWduaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpdGVtLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpdGVtLnVybCB9IC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdUb01vdmU9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlQWN0aXZhdGlvbj1cImhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yU3R5bGVBY3RpdmU9XCJjcm9zc2hhaXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWdhbGxlcnktaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgcGFkZGluZ1RvcDogYCR7cHJvZHVjdC5waWN0dXJlc1sgMCBdLmhlaWdodCAvIHByb2R1Y3QucGljdHVyZXNbIDAgXS53aWR0aCAqIDEwMH0lYCB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgXCJnYWxsZXJ5LVwiICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNtIHJvdyBweC0yXCIgaWQ9XCJvd2wtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnBpY3R1cmVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgcHJvZHVjdC1nYWxsZXJ5LWl0ZW0gbWItMCAkezAgPT09IGluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gIH0ga2V5PXsgcHJvZHVjdC5pZCArICctJyArIGluZGV4IH0gb25DbGljaz17IGUgPT4gY2hhbmdlQmdJbWFnZSggZSwgaW5kZXggKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgaW5kZXggXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHF1aWNrdmlldy1kZXNjIHBsLTAgcGwtbGctNCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5IHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5MSBtdC0yIG10LW1kLTBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LXN1bW1hcnkyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbE9uZSBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2xvc2UgKEVzYylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibWZwLWNsb3NlXCIgb25DbGljaz17IGNsb3NlTW9kYWwgfT48c3Bhbj7Dlzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2x1Zzogc3RhdGUuZGVtby5zaW5nbGUsXHJcbiAgICAgICAgbW9kYWxTaG93OiBzdGF0ZS5kZW1vLnF1aWNrU2hvdyxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSApKCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4uZGVtb0FjdGlvbiB9ICkoIFF1aWNrVmlld01vZGFsICkgKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL2RlbW8nO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw3Nyw3NywwLjYpJyxcclxuICAgICAgICB6SW5kZXg6ICc5MDAwJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuTW9kYWwuc2V0QXBwRWxlbWVudCggJ2JvZHknICk7XHJcblxyXG5mdW5jdGlvbiBWaWRlb01vZGFsICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHNob3dNb2RhbCB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgY2xvc2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiI3ZpZGVvLW1vZGFsXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcIlJlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW5cIiApO1xyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5oaWRlVmlkZW8oKTtcclxuICAgICAgICB9LCAzNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49eyBzaG93TW9kYWwgfVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlSGFuZGxlciB9XHJcbiAgICAgICAgICAgIHN0eWxlPXsgY3VzdG9tU3R5bGVzIH1cclxuICAgICAgICAgICAgY29udGVudExhYmVsPVwiVmlkZW8gTW9kYWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1tb2RhbCBwLTNcIlxyXG4gICAgICAgICAgICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgIGlkPVwidmlkZW8tbW9kYWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsgY2xvc2VIYW5kbGVyIH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwibWZwLWlmcmFtZSBtb2RhbC1jb250ZW50XCIgc3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvdkJQZ21BU1ExQTA/YXV0b3BsYXk9MVwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93RnVsbFNjcmVlbj1cIlwiIHRpdGxlPVwieW91dHViZVwiPjwvaWZyYW1lPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93TW9kYWw6IHN0YXRlLmRlbW8udmlkZW9TaG93XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucyApKCBWaWRlb01vZGFsICk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBRdHkgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgdmFsdWUgPSAxLCBhZENsYXNzID0gXCJcIiwgbWF4ID0gMTAwMDAsIGNoYW5nZVF0eSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSA9IHVzZVN0YXRlKCB2YWx1ZSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnQoIHZhbHVlICk7XHJcbiAgICB9LCBbIHZhbHVlIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVF0eSAmJiBjaGFuZ2VRdHkoIGN1cnJlbnQgKTtcclxuICAgIH0sIFsgY3VycmVudCBdIClcclxuXHJcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnQgKCkge1xyXG4gICAgICAgIGlmICggbWF4IDw9IDAgfHwgY3VycmVudCA+PSBtYXggKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2V0Q3VycmVudCggY3VycmVudCArIDEgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWNyZW1lbnQgKCkge1xyXG4gICAgICAgIGlmICggY3VycmVudCA+IDEgKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoIGN1cnJlbnQgLSAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnQgKCBlICkge1xyXG4gICAgICAgIGlmICggcGFyc2VJbnQoIGUuY3VycmVudFRhcmdldC52YWx1ZSApIDwgbWF4ICkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50KCBwYXJzZUludCggZS5jdXJyZW50VGFyZ2V0LnZhbHVlICkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBwcm9kdWN0LWRldGFpbHMtcXVhbnRpdHkgJHthZENsYXNzfWAgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1zcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBtaW5XaWR0aDogJzI2cHgnIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlY3JlbWVudCBidG4tc3Bpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBkZWNyZW1lbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgbWF4IH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGN1cnJlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBjaGFuZ2VDdXJyZW50IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IG1pbldpZHRoOiAnMjZweCcgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5jcmVtZW50IGJ0bi1zcGlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBpbmNyZW1lbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXR5OyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gU3RpY2t5SGVhZGVyICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHRvcCA9IDIxMCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoIFwiXCIgKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgWyBoZWlnaHQsIHNldEhlaWdodCBdID0gdXNlU3RhdGUoICdhdXRvJyApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBpbml0U3RpY2t5ICk7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwge1xyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIsIHtcclxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyICk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgcmVzaXplSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U3RpY2t5ICgpIHtcclxuICAgICAgICBsZXQgc3RpY2t5Q29udGVudCA9IHJlZi5jdXJyZW50LmNoaWxkcmVuWyAwIF07XHJcbiAgICAgICAgc2V0SGVpZ2h0KCBzdGlja3lDb250ZW50Lm9mZnNldEhlaWdodCArICdweCcgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyICgpIHtcclxuICAgICAgICBsZXQgc3RpY2t5Q29udGVudCA9IHJlZi5jdXJyZW50LmNoaWxkcmVuWyAwIF07XHJcbiAgICAgICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiB0b3AgKSB7XHJcbiAgICAgICAgICAgIGlmICggIXN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZml4ZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lDb250ZW50LmNsYXNzTGlzdC5hZGQoICdmaXhlZCcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZml4ZWQnICkgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpeGVkJyApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodCggc3RpY2t5Q29udGVudC5vZmZzZXRIZWlnaHQgKyAncHgnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIgKCkge1xyXG4gICAgICAgIGxldCBzdGlja3lDb250ZW50ID0gcmVmLmN1cnJlbnQuY2hpbGRyZW5bIDAgXTtcclxuICAgICAgICBzZXRIZWlnaHQoIHN0aWNreUNvbnRlbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JyApO1xyXG4gICAgICAgIHNjcm9sbEhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXsgcmVmIH0gY2xhc3NOYW1lPVwic3RpY2t5LXdyYXBwZXJcIiBzdHlsZT17IHsgaGVpZ2h0OiBoZWlnaHQgfSB9PlxyXG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUhlYWRlcjsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkubWluLmNzcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL3BhcnRpYWxzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0ICBBZG1pbkxheW91dCBmcm9tICcuL0FkbWluRGFzaGJvYXJkL2xheW91dHMvQURGdWxsTGF5b3V0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IFZpZGVvTW9kYWwgZnJvbSBcIi4vZmVhdHVyZXMvbW9kYWxzL3ZpZGVvLW1vZGFsXCI7XHJcbmltcG9ydCBRdWlja1ZpZXdNb2RhbCBmcm9tIFwiLi9mZWF0dXJlcy9tb2RhbHMvcXVpY2t2aWV3LW1vZGFsXCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuL2ZlYXR1cmVzL21vYmlsZS1tZW51XCI7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvZGVtbyc7XHJcbmltcG9ydCB7IGlzU2FmYXJpQnJvd3NlciwgaXNFZGdlQnJvd3NlciB9IGZyb20gXCJ+L3V0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQgKCB7IGNoaWxkcmVuLCBoaWRlUXVpY2ssIGhpZGVWaWRlbyB9ICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCBcIlwiICk7XHJcbiAgICBsZXQgc2Nyb2xsVG9wO1xyXG4gICAgaWYgKCByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoICdhZG1pbmRhc2hib2FyZCcgKSl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICA8PlxyXG4gICAgICAgICA8QWRtaW5MYXlvdXQgIGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cclxuICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyggJ3BhZ2VzL2NvbWluZy1zb29uJyApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImhlYWRlclwiICkuY2xhc3NMaXN0LmFkZCggXCJkLW5vbmVcIiApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImZvb3RlclwiICkuY2xhc3NMaXN0LmFkZCggXCJkLW5vbmVcIiApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiaGVhZGVyXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcImQtbm9uZVwiICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiZm9vdGVyXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcImQtbm9uZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaGlkZVF1aWNrKCk7XHJcbiAgICAgICAgaGlkZVZpZGVvKCk7XHJcbiAgICAgICAgc2Nyb2xsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNzY3JvbGwtdG9wJyApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwgZmFsc2UgKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiB0b1Njcm9sbFRvcCAoKSB7XHJcbiAgICAgICAgaWYgKCBpc1NhZmFyaUJyb3dzZXIoKSB8fCBpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggcG9zIDw9IDAgKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoIDAsIC0xMjAgKTtcclxuICAgICAgICAgICAgICAgIHBvcyAtPSAxMjA7XHJcbiAgICAgICAgICAgIH0sIDEgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IDQwMCApIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wLmNsYXNzTGlzdC5hZGQoICdzaG93JyApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKCAnc2hvdycgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZU1vYmlsZU1lbnUgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoICdtbWVudS1hY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LW92ZXJsYXlcIiBvbkNsaWNrPXsgaGlkZU1vYmlsZU1lbnUgfT48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNjcm9sbC10b3BcIiB0aXRsZT1cIkJhY2sgdG8gdG9wXCIgb25DbGljaz17IHRvU2Nyb2xsVG9wIH0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPE1vYmlsZU1lbnUgLz5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXsgMzAwMCB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17IDMwMCB9XHJcbiAgICAgICAgICAgICAgICBuZXdlc3RPblRvPXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2FzdC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b249eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9eyB0cnVlIH1cclxuICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wPXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxRdWlja1ZpZXdNb2RhbCAvPlxyXG4gICAgICAgICAgICA8VmlkZW9Nb2RhbCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBudWxsLCB7IC4uLmFjdGlvbnMgfSApKCBMYXlvdXQgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIgKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCBcIlwiICk7XHJcbiAgICBjb25zdCBbIGlzQm90dG9tU3RpY2t5LCBzZXRJc0JvdHRvbVN0aWNreSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBbIGNvbnRhaW5lckNsYXNzLCBzZXRDb250YWluZXJDbGFzcyBdID0gdXNlU3RhdGUoICdjb250YWluZXInICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlQm90dG9tU3RpY2t5KCk7XHJcbiAgICAgICAgc2V0Q29udGFpbmVyQ2xhc3MoIHJvdXRlci5hc1BhdGguaW5jbHVkZXMoICdmdWxsd2lkdGgnICkgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInICk7XHJcbiAgICB9LCBbIHJvdXRlci5hc1BhdGggXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgaGFuZGxlQm90dG9tU3RpY2t5LCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgaGFuZGxlQm90dG9tU3RpY2t5ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUJvdHRvbVN0aWNreSAoKSB7XHJcbiAgICAgICAgc2V0SXNCb3R0b21TdGlja3koIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyggJ3Byb2R1Y3QvZGVmYXVsdCcgKSAmJiAoIHdpbmRvdy5pbm5lcldpZHRoID4gOTkxICkgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIGZvb3Rlci0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjb250YWluZXJDbGFzcyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvXCIgYWx0PVwiRm9vdGVyIExvZ29cIiB3aWR0aD1cIjEwNVwiIGhlaWdodD1cIjI1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmFlc2VudCBkYXBpYnVzLCBuZXF1ZSBpZCBjdXJzdXMgdWNpYnVzLCB0b3J0b3IgbmVxdWUgZWdlc3RhcyBhdWd1ZSwgZXUgdnVscHV0YXRlIG1hZ25hIGVyb3MgZXUgZXJhdC4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBOYW0gZHVpIG1pLCB0aW5jaWR1bnQgcXVpcywgYWNjdW1zYW4gcG9ydHRpdG9yLCBmYWNpbGlzaXMgbHVjdHVzLCBtZXR1cy4gPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hYm91dC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2lkZ2V0LWFib3V0LXRpdGxlXCI+R290IFF1ZXN0aW9uPyBDYWxsIHVzIDI0Lzc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCJ0ZWw6MTIzNDU2Nzg5XCI+KzAxMjMgNDU2IDc4OTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aWRnZXQtYWJvdXQtdGl0bGVcIj5QYXltZW50IE1ldGhvZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImZvb3Rlci1wYXltZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wYXltZW50cy5wbmdcIiBhbHQ9XCJQYXltZW50IG1ldGhvZHNcIiB3aWR0aD1cIjI3MlwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkluZm9ybWF0aW9uPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wYWdlcy9hYm91dFwiPkFib3V0IE1vbGxhPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXRcIj5Ib3cgdG8gc2hvcCBvbiBNb2xsYTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2ZhcVwiPkZBUTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIj5Db250YWN0IHVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvbG9naW5cIj5Mb2cgaW48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkN1c3RvbWVyIFNlcnZpY2U8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlBheW1lbnQgTWV0aG9kczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPk1vbmV5LWJhY2sgZ3VhcmFudGVlITwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlJldHVybnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5TaGlwcGluZzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlRlcm1zIGFuZCBjb25kaXRpb25zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPk15IEFjY291bnQ8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlNpZ24gSW48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL2NhcnRcIj5WaWV3IENhcnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCI+TXkgV2lzaGxpc3Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5UcmFjayBNeSBPcmRlcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkhlbHA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjb250YWluZXJDbGFzcyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgeyAoIG5ldyBEYXRlKCkgKS5nZXRGdWxsWWVhcigpIH0gTW9sbGEgU3RvcmUuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+VGVybXMgT2YgVXNlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgc29jaWFsLWljb25zLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1sYWJlbFwiPlNvY2lhbCBNZWRpYTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC1mYWNlYm9va1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIkZhY2Vib29rXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC10d2l0dGVyXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzb2NpYWwtaW5zdGFncmFtXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiSW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb24gc29jaWFsLXlvdXR1YmVcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJZb3V0dWJlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi15b3V0dWJlXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC1waW50ZXJlc3RcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJQaW50ZXJlc3RcIj48aSBjbGFzc05hbWU9XCJpY29uLXBpbnRlcmVzdFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0JvdHRvbVN0aWNreSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBGb290ZXIgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvbG9naW4tbW9kYWwnO1xyXG5pbXBvcnQgSGVhZGVyU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvaGVhZGVyLXNlYXJjaCc7XHJcbmltcG9ydCBXaXNobGlzdE1lbnUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy93aXNobGlzdC1tZW51JztcclxuaW1wb3J0IENhcnRNZW51IGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2FydC1tZW51JztcclxuaW1wb3J0IENhdGVnb3J5TWVudSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2NhdGVnb3J5LW1lbnUnO1xyXG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy9tYWluLW1lbnUnO1xyXG5pbXBvcnQgU3RpY2t5SGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9zdGlja3ktaGVhZGVyJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlciAoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgY29udGFpbmVyQ2xhc3MsIHNldENvbnRhaW5lckNsYXNzIF0gPSB1c2VTdGF0ZSggJ2NvbnRhaW5lcicgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudSAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2JvZHknICkuY2xhc3NMaXN0LmFkZCggJ21tZW51LWFjdGl2ZScgKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRDb250YWluZXJDbGFzcyggcm91dGVyLmFzUGF0aC5pbmNsdWRlcyggJ2Z1bGx3aWR0aCcgKSA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicgKTtcclxuICAgIH0sIFsgcm91dGVyLmFzUGF0aCBdICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBoZWFkZXItMiBoZWFkZXItaW50cm8tY2xlYXJhbmNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjb250YWluZXJDbGFzcyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnQgb3ZlcmZsb3ctaGlkZGVuIG1yLTMgbXItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbXNnIGQtZmxleCBmbGV4LW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3BlY2lhbCBjb2xsZWN0aW9uIGFscmVhZHkgYXZhaWxhYmxlLjwvcD48QUxpbmsgaHJlZj1cIiNcIj4mbmJzcDtSZWFkIG1vcmUgLi4uPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkxpbmtzPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+VVNEPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5FdXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+VXNkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+RW5nbGlzaDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+RW5nbGlzaDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5GcmVuY2g8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+U3BhbmlzaDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Nb2RhbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNvbnRhaW5lckNsYXNzIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXRvZ2dsZXJcIiBvbkNsaWNrPXsgb3Blbk1vYmlsZU1lbnUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbW9iaWxlIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNb2xsYSBMb2dvXCIgd2lkdGg9eyAxMDQgfSBoZWlnaHQ9eyAyNyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyU2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9kYXNoYm9hcmRcIiB0aXRsZT1cIk15IGFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjY291bnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaXNobGlzdE1lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tIHN0aWNreS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNvbnRhaW5lckNsYXNzIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeU1lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibGEgbGEtbGlnaHRidWxiLW9cIj48L2k+PHAgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPkNsZWFyYW5jZTxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPiZuYnNwO1VwIHRvIDMwJSBPZmY8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0aWNreUhlYWRlcj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5pbXBvcnQgeyBjYXJ0UXR5VG90YWwsIGNhcnRQcmljZVRvdGFsIH0gZnJvbSAnfi91dGlscy9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiBDYXJ0TWVudSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBjYXJ0bGlzdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGNhcnQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9jYXJ0XCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGRhdGEtZGlzcGxheT1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1zaG9wcGluZy1jYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtY291bnRcIj57IGNhcnRRdHlUb3RhbCggY2FydGxpc3QgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXJ0PC9wPlxyXG4gICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0ICR7Y2FydGxpc3QubGVuZ3RoID09PSAwID8gJ3RleHQtY2VudGVyJyA6ICcnfWAgfSA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCA9PT0gY2FydGxpc3QubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gcHJvZHVjdHMgaW4gdGhlIGNhcnQuPC9wPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNhcnQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhcnRsaXN0Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5zbHVnfWAgfT57IGl0ZW0ubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtcXR5XCI+eyBpdGVtLnF0eSB9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggJHsgaXRlbS5zYWxlX3ByaWNlID8gaXRlbS5zYWxlX3ByaWNlLnRvRml4ZWQoIDIgKSA6IGl0ZW0ucHJpY2UudG9GaXhlZCggMiApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5zbHVnfWAgfSBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgaXRlbS5zbV9waWN0dXJlc1sgMCBdLnVybCB9IGFsdD1cInByb2R1Y3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXJlbW92ZVwiIHRpdGxlPVwiUmVtb3ZlIFByb2R1Y3RcIiBvbkNsaWNrPXsgKCkgPT4gcHJvcHMucmVtb3ZlRnJvbUNhcnQoIGl0ZW0gKSB9PjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2VcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY2FydC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXRvdGFsLXByaWNlXCI+JHsgY2FydFByaWNlVG90YWwoIGNhcnRsaXN0ICkudG9Mb2NhbGVTdHJpbmcoIHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9ICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY2FydC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL2NhcnRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3IENhcnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3AvY2hlY2tvdXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeS0yXCI+PHNwYW4+Q2hlY2tvdXQ8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzICggc3RhdGUgKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnRsaXN0OiBzdGF0ZS5jYXJ0bGlzdC5kYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyAuLi5hY3Rpb25zIH0gKSggQ2FydE1lbnUgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5TWVudSAoKSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBjYXRlZ29yeS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIHRpdGxlPVwiQnJvd3NlIENhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIEJyb3dzZSBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS12ZXJ0aWNhbCBzZi1hcnJvd3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdlbGVjdHJvbmljcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWVsZWN0cm9uaWNzXCIgc2Nyb2xsPXsgZmFsc2UgfT5FbGVjdHJvbmljczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdnaWZ0LWlkZWEnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1naWZ0LWlkZWFcIiBzY3JvbGw9eyBmYWxzZSB9PkdpZnQgSWRlYXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnYmVkcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWJlZHNcIiBzY3JvbGw9eyBmYWxzZSB9PkJlZHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnbGlnaHRpbmcnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1saWdodGluZ1wiIHNjcm9sbD17IGZhbHNlIH0+TGlnaHRpbmc8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnc29mYXMtYW5kLXNsZWVwZXItc29mYXMnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1zb2Zhcy1hbmQtc2xlZXBlci1zb2Zhc1wiIHNjcm9sbD17IGZhbHNlIH0+U29mYXMgJiBTbGVlcGVyIHNvZmFzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ3N0b3JhZ2UnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1zdG9yYWdlXCIgc2Nyb2xsPXsgZmFsc2UgfT5TdG9yYWdlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ2FybWNoYWlycy1hbmQtY2hhaXNlcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWFybWNoYWlycy1hbmQtY2hhaXNlc1wiIHNjcm9sbD17IGZhbHNlIH0+QXJtY2hhaXJzICYgQ2hhaXNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdkZWNvcmF0aW9uJyA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9ZGVjb3JhdGlvblwiIHNjcm9sbD17IGZhbHNlIH0+RGVjb3JhdGlvbiA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAna2l0Y2hlbi1jYWJpbmV0cycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWtpdGNoZW4tY2FiaW5ldHNcIiBzY3JvbGw9eyBmYWxzZSB9PktpdGNoZW4gQ2FiaW5ldHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnY29mZmVlLWFuZC10YWJsZXMnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1jb2ZmZWUtYW5kLXRhYmxlc1wiIHNjcm9sbD17IGZhbHNlIH0+Q29mZmVlICYgVGFibGVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ2Z1cm5pdHVyZScgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWZ1cm5pdHVyZVwiIHNjcm9sbD17IGZhbHNlIH0+T3V0ZG9vciBGdXJuaXR1cmUgPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeU1lbnU7ICIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IEdFVF9QUk9EVUNUUyB9IGZyb20gJ34vc2VydmVyL3F1ZXJpZXMnO1xyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBzYWZlQ29udGVudCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyU2VhcmNoICgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlciggXCJcIiApO1xyXG4gICAgY29uc3QgWyBjYXQsIHNldENhdCBdID0gdXNlU3RhdGUoIFwiXCIgKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSBdID0gdXNlU3RhdGUoIFwiXCIgKTtcclxuICAgIGNvbnN0IFsgcHJvZHVjdHMsIHNldFByb2R1Y3RzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoUHJvZHVjdHMsIHsgZGF0YSB9IF0gPSB1c2VMYXp5UXVlcnkoIEdFVF9QUk9EVUNUUyApO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLmRhdGE7XHJcbiAgICBjb25zdCBbIHRpbWVyLCBzZXRUaW1lciBdID0gdXNlU3RhdGUoIG51bGwgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImJvZHlcIiApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGNsb3NlU2VhcmNoRm9ybSApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgY2xvc2VTZWFyY2hGb3JtICk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcmVzdWx0ICYmIHNlYXJjaFRlcm0ubGVuZ3RoID4gMiApXHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKCByZXN1bHQucmVkdWNlKCAoIGFjYywgcHJvZHVjdCApID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbiA9IDk5OTk5OTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIG1pbiA+IGl0ZW0ucHJpY2UgKSBtaW4gPSBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWF4IDwgaXRlbS5wcmljZSApIG1heCA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZTogbWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhQcmljZTogbWF4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSwgW10gKSApXHJcbiAgICB9LCBbIHJlc3VsdCwgc2VhcmNoVGVybSBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHNlYXJjaFRlcm0ubGVuZ3RoID4gMiApIHtcclxuICAgICAgICAgICAgaWYgKCB0aW1lciApIGNsZWFyVGltZW91dCggdGltZXIgKTtcclxuICAgICAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9kdWN0cygge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9LCA1MDAgKTtcclxuICAgICAgICAgICAgc2V0VGltZXIoIHRpbWVySWQgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbIHNlYXJjaFRlcm0sIGNhdCBdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oZWFkZXItc2VhcmNoLnNob3ctcmVzdWx0cycgKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlci1zZWFyY2guc2hvdy1yZXN1bHRzJyApLmNsYXNzTGlzdC5yZW1vdmUoICdzaG93LXJlc3VsdHMnICk7XHJcbiAgICB9LCBbIHJvdXRlci5wYXRobmFtZSBdICk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hFbXBoYXNpemUgKCBuYW1lICkge1xyXG4gICAgICAgIGxldCByZWdFeHAgPSBuZXcgUmVnRXhwKCBzZWFyY2hUZXJtLCBcImlcIiApO1xyXG4gICAgICAgIHJldHVybiBuYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIHJlZ0V4cCxcclxuICAgICAgICAgICAgKCBtYXRjaCApID0+IFwiPHN0cm9uZz5cIiArIG1hdGNoICsgXCI8L3N0cm9uZz5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VTZWFyY2hGb3JtICggZSApIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvciggJy5oZWFkZXIgLmhlYWRlci1zZWFyY2gnIClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoICdzaG93JyApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2F0U2VsZWN0ICggZSApIHtcclxuICAgICAgICBzZXRDYXQoIGUudGFyZ2V0LnZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TZWFyY2hDaGFuZ2UgKCBlICkge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oIGUudGFyZ2V0LnZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1NlYXJjaEZvcm0gKCBlICkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlciAuaGVhZGVyLXNlYXJjaCcgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCggJ3Nob3cnICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJtaXRTZWFyY2hGb3JtICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGVybTogc2VhcmNoVGVybSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnb1Byb2R1Y3RQYWdlICgpIHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKCAnJyApO1xyXG4gICAgICAgIHNldFByb2R1Y3RzKCBbXSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoIGhlYWRlci1zZWFyY2gtZXh0ZW5kZWQgaGVhZGVyLXNlYXJjaC12aXNpYmxlIGhlYWRlci1zZWFyY2gtbm8tcmFkaXVzIGQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLXRvZ2dsZVwiPjxpIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cImdldFwiIG9uU3VibWl0PXsgb25TdWJtaXRTZWFyY2hGb3JtIH0gb25DbGljaz17IHNob3dTZWFyY2hGb3JtIH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2gtd3JhcHBlciBzZWFyY2gtd3JhcHBlci13aWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxXCIgY2xhc3NOYW1lPVwic3Itb25seVwiIHZhbHVlPXsgc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlNlYXJjaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyBvblNlYXJjaENoYW5nZSB9IHZhbHVlPXsgc2VhcmNoVGVybSB9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJxXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdCAuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPjxpIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl2ZS1zZWFyY2gtbGlzdFwiIG9uQ2xpY2s9eyBnb1Byb2R1Y3RQYWdlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggcHJvZHVjdHMubGVuZ3RoID4gMCAmJiBzZWFyY2hUZXJtLmxlbmd0aCA+IDIgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybS5sZW5ndGggPiAyICYmIHByb2R1Y3RzLm1hcCggKCBwcm9kdWN0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvblwiIGtleT17IGBzZWFyY2gtcmVzdWx0LSR7aW5kZXh9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZSBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH0gd2lkdGg9eyA0MCB9IGhlaWdodD17IDQwIH0gYWx0PVwicHJvZHVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW5hbWVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHNhZmVDb250ZW50KCBtYXRjaEVtcGhhc2l6ZSggcHJvZHVjdC5uYW1lICkgKSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5taW5QcmljZSA9PSBwcm9kdWN0Lm1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0wXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgcHJvZHVjdC5tYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj4keyBwcm9kdWN0Lm1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IHByb2R1Y3QubWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIH0gKSggSGVhZGVyU2VhcmNoICk7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBNYWluTWVudSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IHBhdGggPSByb3V0ZXIuYXNQYXRoO1xyXG4gICAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBbGxEZW1vcyggZSApIHtcclxuICAgICAgICBsZXQgZGVtb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5kZW1vLWl0ZW0uaGlkZGVuJyApO1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBkZW1vSXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIGRlbW9JdGVtc1sgaSBdLmNsYXNzTGlzdC50b2dnbGUoICdzaG93JyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy52aWV3LWFsbC1kZW1vcycgKS5jbGFzc0xpc3QudG9nZ2xlKCAnZGlzYWJsZWQtaGlkZGVuJyApO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUgc2YtYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgYG1lZ2FtZW51LWNvbnRhaW5lciAkeyBwYXRoID09PSAnLycgPyAnYWN0aXZlJyA6ICcnIH1gIH0gaWQ9XCJtZW51LWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+SG9tZTwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYW1lbnUgZGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5DaG9vc2UgeW91ciBkZW1vPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wMSAtIGZ1cm5pdHVyZSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wMiAtIGZ1cm5pdHVyZSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tM2AgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8zLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wMyAtIGVsZWN0cm9uaWMgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTRgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvNC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDQgLSBlbGVjdHJvbmljIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby01YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzUuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjA1IC0gZmFzaGlvbiBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tNmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy82LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wNiAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTdgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvNy5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDcgLSBmYXNoaW9uIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby04YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzguanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjA4IC0gZmFzaGlvbiBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tOWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy85LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wOSAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTEwYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzEwLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xMCAtIHNob2VzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTFgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTEuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjExIC0gZnVybml0dXJlIHNpbXBsZSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTEyYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzEyLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xMiAtIGZhc2hpb24gc2ltcGxlIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTNgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTMuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjEzIC0gbWFya2V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTRgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTQuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjE0IC0gbWFya2V0IGZ1bGx3aWR0aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTE1YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzE1LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xNSAtIGxvb2tib29rIDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xNmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xNi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTYgLSBsb29rYm9vayAyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTdgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTcuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjE3IC0gZmFzaGlvbiBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTE4YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzE4LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xOCAtIGZhc2hpb24gc3RvcmUgKHdpdGggc2lkZWJhcik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xOWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xOS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTkgLSBnYW1lcyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTIwYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzIwLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yMCAtIGJvb2sgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yMWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yMS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjEgLSBzcG9ydCBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTIyYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzIyLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yMiAtIHRvb2xzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMjNgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMjMuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjIzIC0gZmFzaGlvbiBsZWZ0IG5hdmlnYXRpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yNGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yNC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjQgLSBleHRyZW1lIHNwb3J0IHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMjVgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMjUuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjI1IC0gamV3ZWxyeSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTI2YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzI2LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yNiAtIG1hcmtldCBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTI3YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzI3LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yNyAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yOGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yOC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjggLSBmb29kIG1hcmtldCBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTI5YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzI5LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yOSAtIHQtc2hpcnRzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMzBgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMzAuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjMwIC0gaGVhZHBob25lcyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTMxYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzMxLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4zMSAtIHlvZ2Egc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0zMmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8zMi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MzIgLSBzdW5nbGFzc2VzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMzNgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMzMuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjMzIC0gY29zbWV0aWNzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMzRgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMzQuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjM0IC0gY2FyIHBhcnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51LWFjdGlvbiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnktMiB2aWV3LWFsbC1kZW1vc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBzaG93QWxsRGVtb3MgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VmlldyBBbGwgRGVtb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCIvc2hvcFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3A8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51IG1lZ2FtZW51LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+U2hvcCB3aXRoIHNpZGViYXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnbGlzdCcgKSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCIgc2Nyb2xsPXsgZmFsc2UgfT5TaG9wIExpc3Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnMmNvbHMnICkgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvMmNvbHNcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3AgR3JpZCAyIENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnM2NvbHMnICkgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3AgR3JpZCAzIENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnNGNvbHMnICkgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvNGNvbHNcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3AgR3JpZCA0IENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwic2hvcC9tYXJrZXRcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL21hcmtldFwiPjxzcGFuPlNob3AgTWFya2V0PHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1uZXdcIj5OZXc8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5TaG9wIG5vIHNpZGViYXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL25vc2lkZWJhclwiICkgPiAtMSAmJiBxdWVyeS50eXBlID09ICdib3hlZCcgKSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avbm9zaWRlYmFyL2JveGVkXCIgc2Nyb2xsPXsgZmFsc2UgfT48c3Bhbj5TaG9wIEJveGVkIE5vIFNpZGViYXI8c3BhbiBjbGFzc05hbWU9XCJ0aXAgdGlwLWhvdFwiPkhvdDwvc3Bhbj48L3NwYW4+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgKCBwYXRoLmluZGV4T2YoIFwic2hvcC9ub3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnZnVsbHdpZHRoJyApID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9ub3NpZGViYXIvZnVsbHdpZHRoXCIgc2Nyb2xsPXsgZmFsc2UgfT5TaG9wIEZ1bGx3aWR0aCBObyBTaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+UHJvZHVjdCBDYXRlZ29yeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJzaG9wL2NhdGVnb3J5L2JveGVkXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXRlZ29yeS9ib3hlZFwiIHNjcm9sbD17IGZhbHNlIH0+UHJvZHVjdCBDYXRlZ29yeSBCb3hlZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJzaG9wL2NhdGVnb3J5L2Z1bGx3aWR0aFwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3AvY2F0ZWdvcnkvZnVsbHdpZHRoXCIgc2Nyb2xsPXsgZmFsc2UgfT48c3Bhbj5Qcm9kdWN0IENhdGVnb3J5IEZ1bGx3aWR0aDxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5TaG9wIFBhZ2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInNob3AvY2FydFwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3AvY2FydFwiPkNhcnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwic2hvcC9jaGVja291dFwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3AvY2hlY2tvdXRcIj5DaGVja291dDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJzaG9wL3dpc2hsaXN0XCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiPldpc2hsaXN0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInNob3AvZGFzaGJvYXJkXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9kYXNoYm9hcmRcIj5NeSBBY2NvdW50PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcIiNMb29rYm9va1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiI1wiPkxvb2tib29rPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbnUvYmFubmVyLTEuanBnXCIgYWx0PVwiQmFubmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5MYXN0IDxiciAvPkNoYW5jZTxiciAvPjxzcGFuPjxzdHJvbmc+U2FsZTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9cIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9kZWZhdWx0L2RhcmsteWVsbG93LWxhY2UtY3V0LW91dC1zd2luZy1kcmVzc1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5Qcm9kdWN0PC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhbWVudSBtZWdhbWVudS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5Qcm9kdWN0IERldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwcm9kdWN0L2RlZmF1bHRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9kZWZhdWx0L2RhcmsteWVsbG93LWxhY2UtY3V0LW91dC1zd2luZy1kcmVzc1wiPkRlZmF1bHQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInByb2R1Y3QvY2VudGVyZWRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9iZWlnZS1yaW5nLWhhbmRsZS1jaXJjbGUtY3Jvc3MtYm9keS1iYWdcIj5DZW50ZXJlZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9leHRlbmRlZFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2V4dGVuZGVkL3llbGxvdy10aWUtc3RyYXAtYmxvY2staGVlbC1zYW5kYWxzXCI+PHNwYW4+RXh0ZW5kZWQgSW5mbzxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInByb2R1Y3QvZ2FsbGVyeVwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2dhbGxlcnkvYmVpZ2UtbWV0YWwtaG9vcC10b3RlLWJhZ1wiPkdhbGxlcnk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInByb2R1Y3Qvc3RpY2t5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc3RpY2t5L2Jyb3duLWZhdXgtZnVyLWxvbmdsaW5lLWNvYXRcIj5TdGlja3kgSW5mbzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9zaWRlYmFyXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc2lkZWJhci9iZWlnZS12LW5lY2stYnV0dG9uLWNhcmRpZ2FuXCI+Qm94ZWQgV2l0aCBTaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwcm9kdWN0L2Z1bGx3aWR0aFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2Z1bGx3aWR0aC9ibGFjay1mYXV4LWxlYXRoZXItY2hhaW4tdHJpbS1zYW5kYWxzXCI+RnVsbCBXaWR0aDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9tYXNvbnJ5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Byb2R1Y3QvbWFzb25yeS9ibGFjay1kZW5pbS1kdW5nYXJlZS1kcmVzc1wiPk1hc29ucnkgU3RpY2t5IEluZm88L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9kYXJrLXllbGxvdy1sYWNlLWN1dC1vdXQtc3dpbmctZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbnUvYmFubmVyLTIuanBnXCIgYWx0PVwiQmFubmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5OZXcgVHJlbmRzPGJyIC8+PHNwYW4+PHN0cm9uZz5zcHJpbmcgeyAoIG5ldyBEYXRlKCkgKS5nZXRGdWxsWWVhcigpIH08L3N0cm9uZz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInBhZ2VzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5QYWdlczwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9hYm91dFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0XCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPkFib3V0PC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9hYm91dFwiICkgPiAtMSAmJiBwYXRoLmluZGV4T2YoIFwicGFnZXMvYWJvdXQtMlwiICkgPT09IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0XCI+QWJvdXQgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9hYm91dC0yXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0LTJcIj5BYm91dCAwMjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicGFnZXMvY29udGFjdFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+Q29udGFjdDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicGFnZXMvY29udGFjdFwiICkgPiAtMSAmJiBwYXRoLmluZGV4T2YoIFwicGFnZXMvY29udGFjdC0yXCIgKSA9PT0gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29udGFjdFwiPkNvbnRhY3QgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9jb250YWN0LTJcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29udGFjdC0yXCI+Q29udGFjdCAwMjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicGFnZXMvbG9naW5cIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvbG9naW5cIj5Mb2dpbjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9mYXFcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvZmFxXCI+RkFRczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCI0MDRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvNDA0XCI+RXJyb3IgNDA0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInBhZ2VzL2NvbWluZy1zb29uXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbWluZy1zb29uXCI+Q29taW5nIFNvb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvY2xhc3NpY1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5CbG9nPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvY2xhc3NpY1wiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL2NsYXNzaWNcIj5DbGFzc2ljPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvbGlzdGluZ1wiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL2xpc3RpbmdcIiA+TGlzdGluZzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvMmNvbHNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+R3JpZDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvMmNvbHNcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzJjb2xzXCI+R3JpZCAyIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvM2NvbHNcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzNjb2xzXCI+R3JpZCAzIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvNGNvbHNcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzRjb2xzXCI+R3JpZCA0IGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvc2lkZWJhclwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvc2lkZWJhclwiPkdyaWQgc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5LzJjb2xzXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc29ucnk8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5LzJjb2xzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8yY29sc1wiPk1hc29ucnkgMiBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5LzNjb2xzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8zY29sc1wiPk1hc29ucnkgMyBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5LzRjb2xzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS80Y29sc1wiPk1hc29ucnkgNCBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5L3NpZGViYXJcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5L3NpZGViYXJcIj5NYXNvbnJ5IHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvbWFza1wiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvbWFzay9ncmlkXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc2s8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNrL2dyaWRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNrL2dyaWRcIj5CbG9nIE1hc2sgR3JpZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvbWFzay9tYXNvbnJ5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzay9tYXNvbnJ5XCI+QmxvZyBNYXNrIE1hc29ucnk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvc2luZ2xlXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZGVmYXVsdC9jcmFzLW9ybmFyZS10cmlzdGlxdWUtZWxpdC5cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+U2luZ2xlIFBvc3Q8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9zaW5nbGUvZGVmYXVsdFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL3NpbmdsZS9kZWZhdWx0L2NyYXMtb3JuYXJlLXRyaXN0aXF1ZS1lbGl0LlwiPkRlZmF1bHQgd2l0aCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9zaW5nbGUvZnVsbHdpZHRoXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL2Z1bGx3aWR0aC9mdXNjZS1wZWxsZW50ZXNxdWUtc3VzY2lwaXQuXCI+RnVsbHdpZHRoIG5vIHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL3NpbmdsZS9zaWRlYmFyXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL3NpZGViYXIvdXRhbGlxdWFtLXNvbGxpY2l0emR2dWRpbi1sZW9cIj5GdWxsd2lkdGggd2l0aCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9lbGVtZW50c1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5FbGVtZW50czwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy9wcm9kdWN0c1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvdHlwb2dyYXBoeVwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3R5cG9ncmFwaHlcIj5UeXBvZ3JhcGh5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL3RpdGxlc1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3RpdGxlc1wiPlRpdGxlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy9iYW5uZXJzXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYmFubmVyc1wiPkJhbm5lcnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvY2F0ZWdvcmllc1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2NhdGVnb3JpZXNcIj5Qcm9kdWN0IENhdGVnb3J5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL3ZpZGVvLWJhbm5lcnNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy92aWRlby1iYW5uZXJzXCI+VmlkZW8gQmFubmVyczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy9idXR0b25zXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYnV0dG9uc1wiPkJ1dHRvbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvYWNjb3JkaW9uc1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2FjY29yZGlvbnNcIj5BY2NvcmRpb25zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL3RhYnNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90YWJzXCI+VGFiczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy90ZXN0aW1vbmlhbHNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90ZXN0aW1vbmlhbHNcIj5UZXN0aW1vbmlhbHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvYmxvZy1wb3N0c1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2Jsb2ctcG9zdHNcIj5CbG9nIFBvc3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL2N0YVwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2N0YVwiPkNhbGwgdG8gQWN0aW9uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL2ljb24tYm94ZXNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9pY29uLWJveGVzXCI+SWNvbiBCb3hlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIFdpc2hsaXN0TWVudSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB3aXNobGlzdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiB0aXRsZT1cIldpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWhlYXJ0LW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2lzaGxpc3QtY291bnQgYmFkZ2VcIj57IHdpc2hsaXN0Lmxlbmd0aCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5XaXNobGlzdDwvcD5cclxuICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoIHN0YXRlICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHt9ICkoIFdpc2hsaXN0TWVudSApOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTbGlkZVRvZ2dsZSBmcm9tICdyZWFjdC1zbGlkZS10b2dnbGUnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBRdHkgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3F0eSc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcblxyXG5pbXBvcnQgeyBjYW5BZGRUb0NhcnQsIGlzSW5XaXNobGlzdCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgcXR5LCBzZXRRdHkgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIHF0eTIsIHNldFF0eTIgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIGNvbG9yQXJyYXksIHNldENvbG9yQXJyYXkgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzaXplQXJyYXksIHNldFNpemVBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHZhcmlhdGlvbkdyb3VwLCBzZXRWYXJpYXRpb25Hcm91cCBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHNlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50IF0gPSB1c2VTdGF0ZSggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICBjb25zdCBbIHNob3dDbGVhciwgc2V0U2hvd0NsZWFyIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuICAgIGNvbnN0IFsgc2hvd1ZhcmlhdGlvblByaWNlLCBzZXRTaG93VmFyaWF0aW9uUHJpY2UgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCB7XHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gOTk5OTk7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgIHNldFZhcmlhdGlvbkdyb3VwKCBwcm9kdWN0LnZhcmlhbnRzLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgY3VyLnNpemUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBjdXIucHJpY2UgKSBtaW4gPSBjdXIucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgY3VyLnByaWNlICkgbWF4ID0gY3VyLnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgWyBwcm9kdWN0IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICAgICAgc2V0UXR5KCAxICk7XHJcbiAgICAgICAgc2V0UXR5MiggMSApO1xyXG4gICAgfSwgWyByb3V0ZXIucXVlcnkuc2x1ZyBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByZWZyZXNoU2VsZWN0YWJsZUdyb3VwKCk7XHJcbiAgICB9LCBbIHZhcmlhdGlvbkdyb3VwLCBzZWxlY3RlZFZhcmlhbnQgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NsZWFyKCAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciB8fCBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgPyB0cnVlIDogZmFsc2UgKTtcclxuICAgICAgICBzZXRTaG93VmFyaWF0aW9uUHJpY2UoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/IHRydWUgOiBmYWxzZSApO1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSByZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCAnLnZhcmlhdGlvbi10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlICkge1xyXG4gICAgICAgICAgICBpZiAoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSAmJiB0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY29sbGFwc2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggKCAhKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApICkgJiYgIXRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoICdjb2xsYXBzZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFsgc2VsZWN0ZWRWYXJpYW50IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCAnL3Byb2R1Y3QvZGVmYXVsdCcgKSApIHtcclxuICAgICAgICAgICAgbGV0IHN0aWNreUJhciA9IHJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWJhcicgKTtcclxuICAgICAgICAgICAgaWYgKCBzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LnJlbW92ZSggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoICFzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LmFkZCggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFNlbGVjdGFibGVHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFsgLi4udmFyaWF0aW9uR3JvdXAgXTtcclxuICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciApIHtcclxuICAgICAgICAgICAgdGVtcEFycmF5ID0gdmFyaWF0aW9uR3JvdXAucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgIT09IGN1ci5jb2xvciApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNpemVBcnJheSggdGVtcEFycmF5LnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhY2MuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2l6ZSA9PSBjdXIuc2l6ZSApICE9PSAtMSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgdGVtcEFycmF5ID0gWyAuLi52YXJpYXRpb25Hcm91cCBdO1xyXG4gICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IHZhcmlhdGlvbkdyb3VwLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgIT09IGN1ci5zaXplICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3JBcnJheSggcHJvZHVjdC52YXJpYW50cy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5jb2xvciA9PSBjdXIuY29sb3IgKSA9PSAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGN1ci5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSwgW10gKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdENvbG9yICggZSwgaXRlbSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yICkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHtcclxuICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCgge1xyXG4gICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGl0ZW0uY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGl0ZW0uY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RTaXplICggZSApIHtcclxuICAgICAgICBpZiAoIGUudGFyZ2V0LnZhbHVlID09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IFwiXCIgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IGUudGFyZ2V0LnZhbHVlIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VRdHkgKCBjdXJyZW50ICkge1xyXG4gICAgICAgIHNldFF0eSggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUXR5MiAoIGN1cnJlbnQgKSB7XHJcbiAgICAgICAgc2V0UXR5MiggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCAoIHtcclxuICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBzaXplOiBcIlwiXHJcbiAgICAgICAgfSApICk7XHJcbiAgICAgICAgcmVmcmVzaFNlbGVjdGFibGVHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSwgaW5kZXggPSAwICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdidG4tZGlzYWJsZWQnICkgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXdQcm9kdWN0ID0geyAuLi5wcm9kdWN0IH07XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuY29sb3JOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZFZhcmlhbnQucHJpY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KFxyXG4gICAgICAgICAgICBuZXdQcm9kdWN0LFxyXG4gICAgICAgICAgICBpbmRleCA9PSAwID8gcXR5IDogcXR5MlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsc1wiIHJlZj17IHJlZiB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnsgcHJvZHVjdC5uYW1lIH08L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLXZhbFwiIHN0eWxlPXsgeyB3aWR0aDogcHJvZHVjdC5yYXRpbmdzICogMjAgKyAnJScgfSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzLXRleHRcIj4oIHsgcHJvZHVjdC5yZXZpZXcgfSBSZXZpZXdzICk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+eyBwcm9kdWN0LnNob3J0X2Rlc2MgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JBcnJheS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgJHsoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yID8gJ2FjdGl2ZSAnIDogJycgKSArICggaXRlbS5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyApfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IHNlbGVjdENvbG9yKCBlLCBpdGVtICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZpbHRlci1yb3cgZGV0YWlscy1yb3ctc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaXplXCI+U2l6ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VsZWN0ZWRWYXJpYW50LnNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHNlbGVjdFNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHNpemU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5zaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57IGl0ZW0uc2l6ZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2l6ZS1ndWlkZSBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10aC1saXN0XCI+PC9pPnNpemUgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgY2xlYXJTZWxlY3Rpb24gfT5jbGVhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgZC1ub25lIHZhcmlhdGlvbi10b2dnbGUgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpfWAgfSBvbkNsaWNrPXsgb25Ub2dnbGUgfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfSBzdHlsZT17IHsgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHNlbGVjdGVkVmFyaWFudC5wcmljZSA/IHNlbGVjdGVkVmFyaWFudC5wcmljZS50b0ZpeGVkKCAyICkgOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF0eVwiPlF0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFF0eSBjaGFuZ2VRdHk9eyBvbkNoYW5nZVF0eSB9IG1heD17IHByb2R1Y3Quc3RvY2sgfSB2YWx1ZT17IHF0eSB9PjwvUXR5PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tcHJvZHVjdCBidG4tY2FydCAkeyggIWNhbkFkZFRvQ2FydCggcHJvcHMuY2FydGxpc3QsIHByb2R1Y3QsIHF0eSApIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFzaG93VmFyaWF0aW9uUHJpY2UgKSApID8gJ2J0bi1kaXNhYmxlZCcgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBvbkNhcnRDbGljayggZSwgMCApIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdCB3LTEwMCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggY2F0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdC5zbHVnIH0gfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgY2F0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsJyA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1sYWJlbFwiPlNoYXJlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJQaW50ZXJlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1waW50ZXJlc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJhciBkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9IGFsdD1cInByb2R1Y3RcIiB3aWR0aD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS53aWR0aCB9IGhlaWdodD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS5oZWlnaHQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyBzZWxlY3RlZFZhcmlhbnQucHJpY2UgPyBzZWxlY3RlZFZhcmlhbnQucHJpY2UudG9GaXhlZCggMiApIDogMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdHkgY2hhbmdlUXR5PXsgb25DaGFuZ2VRdHkyIH0gbWF4PXsgcHJvZHVjdC5zdG9jayB9IHZhbHVlPXsgcXR5MiB9PjwvUXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLXByb2R1Y3QgYnRuLWNhcnQgJHsoICFjYW5BZGRUb0NhcnQoIHByb3BzLmNhcnRsaXN0LCBwcm9kdWN0LCBxdHkgKSB8fCAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCAmJiAhc2hvd1ZhcmlhdGlvblByaWNlICkgKSA/ICdidG4tZGlzYWJsZWQnIDogJyd9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IG9uQ2FydENsaWNrKCBlLCAxICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJ0bGlzdDogc3RhdGUuY2FydGxpc3QuZGF0YSxcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uIH0gKSggRGV0YWlsT25lICk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmUvaW5kZXguanNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tIFwiLi4vc3RvcmUvZGVtb1wiO1xyXG5cclxuaW1wb3J0ICd+L3B1YmxpYy9zY3NzL3BsdWdpbnMvb3dsLWNhcm91c2VsL293bC5jYXJvdXNlbC5zY3NzJztcclxuaW1wb3J0IFwifi9wdWJsaWMvc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVkQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5kZW1vLmN1cnJlbnQgIT0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNTykge1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChkZW1vQWN0aW9uLnJlZnJlc2hTdG9yZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPFBlcnNpc3RHYXRlXHJcbiAgICAgICAgICAgICAgICBwZXJzaXN0b3I9e3N0b3JlLl9fcGVyc2lzdG9yfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UtbG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiTW9sbGEgUmVhY3QgVGVtcGxhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNb2xsYSDigJMgIGVDb21tZXJjZSBSZWFjdCBUZW1wbGF0ZSBpcyBhIG11bHRpLXVzZSBSZWFjdCB0ZW1wbGF0ZS4gSXQgaXMgZGVzaWduZWQgdG8gZ28gd2VsbCB3aXRoIG11bHRpLXB1cnBvc2Ugd2Vic2l0ZXMuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiZC10aGVtZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9XCJNb2xsYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxpY2F0aW9uLW5hbWVcIiBjb250ZW50PVwiTW9sbGEgUmVhY3QgZUNvbW1lcmNlIFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2NjOTk2NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD1cImltYWdlcy9pY29ucy9icm93c2VyY29uZmlnLnhtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Nb2xsYSAtIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cImltYWdlcy9pY29ucy9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiaW1hZ2VzL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzY2NjY2NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgIDwvUHJvdmlkZXIgPlxyXG4gICAgKVxyXG59O1xyXG5cclxuV3JhcHBlZEFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcCk7XHJcbiIsImltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICduZXh0LWFwb2xsbyc7XHJcbmltcG9ydCBBcG9sbG9DbGllbnQsIHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcblxyXG5jb25zdCBBUElfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTH0vZ3JhcGhxbGA7XHJcblxyXG5jb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KCB7XHJcbiAgICB1cmk6IEFQSV9VUkksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59ICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCBhcG9sbG9DbGllbnQgKTsiLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0cygkc2VhcmNoVGVybTogU3RyaW5nLCAkY29sb3I6IFtTdHJpbmddLCAkc2l6ZTogW1N0cmluZ10sICRicmFuZDogW1N0cmluZ10sICRtaW5QcmljZTogSW50LCAkbWF4UHJpY2U6IEludCwgJGNhdGVnb3J5OiBTdHJpbmcsICRyYXRpbmc6IFtTdHJpbmddLCAkc29ydEJ5OiBTdHJpbmcsICRwYWdlOiBJbnQgPSAxLCAkcGVyUGFnZTogSW50LCAkbGlzdDogQm9vbGVhbiA9IGZhbHNlLCAkZnJvbTogSW50ID0gMCkge1xyXG4gICAgICAgIHByb2R1Y3RzKGRlbW86ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT30sIHNlYXJjaFRlcm06ICRzZWFyY2hUZXJtLCBjb2xvcjogJGNvbG9yLCBzaXplOiAkc2l6ZSwgYnJhbmQ6ICRicmFuZCwgbWluUHJpY2U6ICRtaW5QcmljZSwgbWF4UHJpY2U6ICRtYXhQcmljZSwgY2F0ZWdvcnk6ICRjYXRlZ29yeSwgcmF0aW5nOiAkcmF0aW5nLCBzb3J0Qnk6ICRzb3J0QnksIHBhZ2U6ICRwYWdlLCBwZXJQYWdlOiAkcGVyUGFnZSwgbGlzdDogJGxpc3QsIGZyb206ICRmcm9tKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9kZXNjIEBpbmNsdWRlKGlmOiAkbGlzdClcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1QgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0KCRzbHVnOiBTdHJpbmchLCAkb25seURhdGE6IEJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHByb2R1Y3QoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSwgc2x1ZzogJHNsdWcsIG9ubHlEYXRhOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgc2luZ2xlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgc2hvcnRfZGVzY1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmFuZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXYgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbGF0ZWQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRUxFTUVOVF9QUk9EVUNUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IGVsZW1lbnRQcm9kdWN0cyB7XHJcbiAgICAgICAgZWxlbWVudFByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9FTEVNRU5UX1BPU1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgZWxlbWVudFBvc3RzIHtcclxuICAgICAgICBlbGVtZW50UG9zdHMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RTX0JZX1BBR0UgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0c0J5UGFnZSAoJHBhZ2U6IFN0cmluZyEsICRjYXRlZ29yeTogU3RyaW5nKSB7XHJcbiAgICAgICAgcG9zdHNCeVBhZ2UocGFnZTogJHBhZ2UsIGNhdGVnb3J5OiAkY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVCA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3QoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICBwb3N0KHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmV2IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWxhdGVkIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX0RBVEEgPSBncWxgXHJcbiAgICBxdWVyeSBob21lRGF0YSB7XHJcbiAgICAgICAgaG9tZURhdGEoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9zdHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb0NhcnQ6IFwiQUREX1RPX0NBUlRcIixcclxuICAgIHJlbW92ZUZyb21DYXJ0OiBcIlJFTU9WRV9GUk9NX0NBUlRcIixcclxuICAgIHJlZnJlc2hTdG9yZTogXCJSRUZSRVNIX1NUT1JFXCIsXHJcbiAgICB1cGRhdGVDYXJ0OiBcIlVQREFURV9DQVJUXCIsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuYWRkVG9DYXJ0OlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICk7XHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBhY3Rpb24ucGF5bG9hZC5xdHkgPyBhY3Rpb24ucGF5bG9hZC5xdHkgOiAxO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCAhPT0gLTEgJiYgYWN0aW9uLnBheWxvYWQucHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5uYW1lID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCAhPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YS5yZWR1Y2UoICggYWNjLCBwcm9kdWN0LCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZmluZEluZGV4ID09IGluZGV4ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogcHJvZHVjdC5xdHkgKyBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bTogKCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlICkgKiAoIHByb2R1Y3QucXR5ICsgcXR5IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10gKVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlID8gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlIDogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bTogcXR5ICogKCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXRlbS5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMudXBkYXRlQ2FydDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5jYXJ0SXRlbXNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvQ2FydDogKCBwcm9kdWN0LCBxdHkgPSAxICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9DYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdCxcclxuICAgICAgICAgICAgcXR5OiBxdHlcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6ICggcHJvZHVjdCApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICB1cGRhdGVDYXJ0OiAoIGNhcnRJdGVtcyApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnVwZGF0ZUNhcnQsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtc1xyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNhcnRTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuYWRkVG9DYXJ0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIENhcnRcIiApO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNhcnQsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIENhcnRcIiApO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMudXBkYXRlQ2FydCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiQ2FydCB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiICk7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwibW9sbGEtXCIsXHJcbiAgICBrZXk6IFwiY2FydFwiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgY2FydFJlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb0NvbXBhcmU6ICdBRERfVE9fQ09NUEFSRScsXHJcbiAgICByZW1vdmVGcm9tQ29tcGFyZTogJ1JFTU9WRV9GUk9NX0NPTVBBUkUnLFxyXG4gICAgY2xlYXJBbGxGcm9tQ29tcGFyZTogJ0NMRUFSX0FMTF9GUk9NX0NPTVBBUkUnLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRSdcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBhcmVSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmU6XHJcbiAgICAgICAgICAgIHZhciBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmlkID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKTtcclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ29tcGFyZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgIT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuY2xlYXJBbGxGcm9tQ29tcGFyZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkVG9Db21wYXJlOiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFkZFRvQ29tcGFyZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbUNvbXBhcmU6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIGNsZWFyQWxsRnJvbUNvbXBhcmU6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmNsZWFyQWxsRnJvbUNvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge31cclxuICAgIH0gKSxcclxuXHJcbiAgICByZWZyZXNoU3RvcmU6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZSxcclxuICAgICAgICBwYXlsb2FkOiB7fVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY29tcGFyZVNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmUsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgYWRkZWQgdG8gQ29tcGFyZVwiICk7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6ICdtb2xsYS0nLFxyXG4gICAga2V5OiAnY29tcGFyZScsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBjb21wYXJlUmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBzaG93UXVpY2s6ICdTSE9XX1FVSUNLVklFVycsXHJcbiAgICBoaWRlUXVpY2s6ICdISURFX1FVSUNLVklFVycsXHJcbiAgICBzaG93VmlkZW86ICdTSE9XX1ZJREVPJyxcclxuICAgIGhpZGVWaWRlbzogJ0hJREVfVklERU8nLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRSdcclxufTtcclxuXHJcbmxldCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PLFxyXG4gICAgc2luZ2xlOiBudWxsLFxyXG4gICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgIHZpZGVvU2hvdzogZmFsc2UsXHJcbn07XHJcbmNvbnN0IGRlbW9SZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5zaG93UXVpY2s6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogYWN0aW9uLnBheWxvYWQuc2x1ZyxcclxuICAgICAgICAgICAgICAgIHF1aWNrU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmhpZGVRdWljazpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuc2hvd1ZpZGVvOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlkZW9TaG93OiB0cnVlIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5oaWRlVmlkZW86XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aWRlb1Nob3c6IGZhbHNlIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZpZGVvU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICByZWZyZXNoU3RvcmU6ICggY3VycmVudCApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgc2hvd1F1aWNrVmlldzogc2x1ZyA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5zaG93UXVpY2ssXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBzbHVnOiBzbHVnXHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIGhpZGVRdWljazogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaGlkZVF1aWNrLFxyXG4gICAgfSApLFxyXG5cclxuICAgIHNob3dWaWRlbzogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuc2hvd1ZpZGVvLFxyXG4gICAgfSApLFxyXG5cclxuICAgIGhpZGVWaWRlbzogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaGlkZVZpZGVvXHJcbiAgICB9IClcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJtb2xsYS1cIixcclxuICAgIGtleTogXCJkZW1vXCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBkZW1vUmVkdWNlciApOyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vcm9vdC1zYWdhJztcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG4vLyBpbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuXHJcbi8vIEltcG9ydCBSZWR1Y2Vyc1xyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydFwiO1xyXG5pbXBvcnQgd2lzaGxpc3RSZWR1Y2VyIGZyb20gJy4vd2lzaGxpc3QnO1xyXG5pbXBvcnQgY29tcGFyZVJlZHVjZXIgZnJvbSAnLi9jb21wYXJlJztcclxuaW1wb3J0IGRlbW9SZWR1Y2VyIGZyb20gJy4vZGVtbyc7XHJcblxyXG5jb25zdCByb290UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY2FydGxpc3Q6IGNhcnRSZWR1Y2VyLFxyXG4gICAgd2lzaGxpc3Q6IHdpc2hsaXN0UmVkdWNlcixcclxuICAgIGNvbXBhcmVsaXN0OiBjb21wYXJlUmVkdWNlcixcclxuICAgIGRlbW86IGRlbW9SZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbi8vICAgICBrZXk6ICdyb290JyxcclxuLy8gICAgIHN0b3JhZ2U6IEFzeW5jU3RvcmFnZSxcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VycylcclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBtYWtlU3RvcmU7XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pOyIsImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGNhcnRTYWdhIH0gZnJvbSAnLi9jYXJ0JztcclxuaW1wb3J0IHsgd2lzaGxpc3RTYWdhIH0gZnJvbSAnLi93aXNobGlzdCc7XHJcbmltcG9ydCB7IGNvbXBhcmVTYWdhIH0gZnJvbSAnLi9jb21wYXJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSAoKSB7XHJcbiAgICB5aWVsZCBhbGwoIFtcclxuICAgICAgICBjYXJ0U2FnYSgpLFxyXG4gICAgICAgIHdpc2hsaXN0U2FnYSgpLFxyXG4gICAgICAgIGNvbXBhcmVTYWdhKCksXHJcbiAgICBdICk7XHJcbn0iLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb1dpc2hsaXN0OiAnQUREX1RPX1dJU0hMSVNUJyxcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdDogJ1JFTU9WRV9GUk9NX1dJU0hMSVNUJyxcclxuICAgIHJlZnJlc2hTdG9yZTogJ1JFRlJFU0hfU1RPUkUnLFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxufVxyXG5cclxuY29uc3Qgd2lzaGxpc3RSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0OlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCA9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21XaXNobGlzdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvV2lzaGxpc3Q6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9XaXNobGlzdCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0OiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21XaXNobGlzdCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3aXNobGlzdFNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIFdpc2hsaXN0XCIgKTtcclxuICAgIH0gKVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcIm1vbGxhLVwiLFxyXG4gICAga2V5OiAnd2lzaGxpc3QnLFxyXG4gICAgc3RvcmFnZSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIHdpc2hsaXN0UmVkdWNlciApOyIsIi8qKlxyXG4gKiBnZXQgdG90YWwgUHJpY2Ugb2YgcHJvZHVjdHMgaW4gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEByZXR1cm4geyBGbG9hdCB9IHRvdGFsUHJpY2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXJ0UHJpY2VUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgY3VyLnN1bVxyXG4gICAgfSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICogZ2V0IG51bWJlciBvZiBwcm9kdWN0cyBpbiBjYXJ0XHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcmV0dXJuIHsgSW50ZWdlciB9IG51bWJlcnMgb2YgY2FydCBpdGVtcyBpbiBjYXJ0bGlzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhcnRRdHlUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQoIGN1ci5xdHksIDEwICk7XHJcbiAgICB9LCAwICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNpZGUgd2hlcmUgcHJvZHVjdCBpcyBpbiBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHBhcmFtIHsgT2JqZWN0IH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ2FydCA9ICggY2FydEl0ZW1zLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCApID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlybSBpZiBwcm9kdWN0IGNvdWxkIGJlIGFkZGVkIHRvIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcGFyYW0geyBPYmplY3QgfSBwcm9kdWN0IFxyXG4gKiBAcGFyYW0geyBOdW1iZXIgfSBxdHkgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FuQWRkVG9DYXJ0ID0gKCBjYXJ0SXRlbXMsIHByb2R1Y3QsIHF0eSApID0+IHtcclxuICAgIGxldCBmaW5kID0gY2FydEl0ZW1zLmZpbmQoIGl0ZW0gPT4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkICk7XHJcbiAgICBpZiAoIGZpbmQgKSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgKCBmaW5kLnF0eSArIHF0eSApICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgcXR5ICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB3aXNobGlzdCBcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbldpc2hsaXN0ID0gKCB3aXNobGlzdCwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIHdpc2hsaXN0LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNsdWcgPT0gcHJvZHVjdC5zbHVnICkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBjb21wYXJlIFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ29tcGFyZSA9ICggY29tcGFyZSwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIGNvbXBhcmUuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PSBwcm9kdWN0LnNsdWcgKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBzYWZhcmkgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzU2FmYXJpQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggJ1NhZmFyaScgKSAhPT0gLTEgJiYgc1VzckFnLmluZGV4T2YoICdDaHJvbWUnICkgPT09IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3QgRWRnZSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFZGdlQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggXCJFZGdlXCIgKSA+IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBpbmRleCBvZiB0aGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SW5kZXggPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBpZiAoIGVsZW1lbnQgPT0gY2hpbGRyZW5bIGkgXSApIHJldHVybiBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogZmlsdGVyIHByb2R1Y3RzIGJ5IGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9kdWN0cyBcclxuICogQHBhcmFtIHtBcnJheX0gY2F0ZWdvcnkgXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXRGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGNhdGVnb3J5LCBmbGFnID0gZmFsc2UgKSB7XHJcbiAgICBpZiAoIGNhdGVnb3J5WyAwIF0gPT09ICdBbGwnICkgcmV0dXJuIHByb2R1Y3RzO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBpZiAoIGl0ZW0uY2F0ZWdvcnkuZmluZCggY2F0ID0+IGNhdC5zbHVnID09IGNhdGVnb3J5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggIWZsYWcgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICggZmxhZyApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBmbGFnIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IClcclxufVxyXG5cclxuLyoqXHJcbiAqIGZpbHRlciBwcm9kdWN0cyBieSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHtBcnJheX0gcHJvZHVjdHMgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGF0dHJGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGF0dHIgKSB7XHJcbiAgICAvLyBpZihwcm9kdWN0cylcclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ2FsbCcgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAnc2FsZScgJiYgaXRlbS5zYWxlX3ByaWNlICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3JhdGVkJyAmJiBpdGVtLnJhdGluZ3MgPiAzICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3VudGlsJyAmJiBpdGVtLnVudGlsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtWyBhdHRyIF0gPT09IHRydWU7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY3JvbGxpbmcgdG8gUGFnZSBjb250ZW50IHNlY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBzY3JvbGxUb1BhZ2VDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdlLWNvbnRlbnQnIClcclxuICAgICAgICAub2Zmc2V0VG9wIC0gNzQ7XHJcbiAgICBpZiAoIGlzU2FmYXJpQnJvd3NlcigpIHx8IGlzRWRnZUJyb3dzZXIoKSApIHtcclxuICAgICAgICBsZXQgcG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBwb3MgPD0gdG8gKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KCAwLCAtMTIwICk7XHJcbiAgICAgICAgICAgICAgICBwb3MgLT0gMTIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgdG9wOiB0byxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gbWFrZSBiYWNrZ3JvdW5kIHBhcmFsbGF4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyYWxsYXggPSAoKSA9PiB7XHJcbiAgICBsZXQgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmJnLXBhcmFsbGF4JyApO1xyXG5cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFsbGF4Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGxldCB5ID0gMDtcclxuICAgICAgICBpZiAoIHBhcmFsbGF4WyBpIF0uY2xhc3NMaXN0LmNvbnRhaW5zKCAnaGVhZGVyLXBhcmFsbGF4JyApICkge1xyXG4gICAgICAgICAgICB5ID0gKCAxMCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyA5MDAgKyA1MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5ID0gKCBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCArIDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYWxsYXhbIGkgXS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0geSArICclJztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNldCBjb3VudCB0byBpbiBhYm91dC0yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY291bnQnICk7XHJcblxyXG4gICAgaWYgKCBpdGVtcyApIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbIGkgXTtcclxuICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtdG8nICksIDEwICkgLSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyb20nICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1zcGVlZCcgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWZyZXNoLWludGVydmFsJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgcHQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gMDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIGNvdW50VG9TY3JvbGxIYW5kbGVyLCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudFRvU2Nyb2xsSGFuZGxlciAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHB0IDw9IHRpbWUgJiYgaGVpZ2h0ID49IHdpbmRvdy5wYWdlWU9mZnNldCApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIDAgPT09IGZsYWcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcHQgPj0gdGltZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBwYXJzZUludCggKCBwdCAqIGFtb3VudCApIC8gdGltZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwdCArIGludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUHJldmVudCBYc3MgQXR0YWNrXHJcbiAqIEBwYXJhbSB7Tm9kZX0gaHRtbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlQ29udGVudCAoIGh0bWwgKSB7XHJcbiAgICBjb25zdCBTQ1JJUFRfUkVHRVggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcclxuXHJcbiAgICAvLyBSZW1vdmluZyB0aGUgPHNjcmlwdD4gdGFnc1xyXG4gICAgd2hpbGUgKCBTQ1JJUFRfUkVHRVgudGVzdCggaHRtbCApICkge1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIFNDUklQVF9SRUdFWCwgXCJcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92aW5nIGFsbCBldmVudHMgZnJvbSB0YWdzLi4uXHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCAvIG9uXFx3Kz1cIlteXCJdKlwiL2csIFwiXCIgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIF9faHRtbDogaHRtbFxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hcG9sbG9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YWJzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==