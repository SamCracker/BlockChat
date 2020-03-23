webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _views_HeaderMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/HeaderMenu */ "./views/HeaderMenu.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _views_modals_EnterPrivateKeyModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/modals/EnterPrivateKeyModal */ "./views/modals/EnterPrivateKeyModal.js");
/* harmony import */ var _views_modals_UpdateProfileModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/modals/UpdateProfileModal */ "./views/modals/UpdateProfileModal.js");
/* harmony import */ var _views_modals_GuideModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/modals/GuideModal */ "./views/modals/GuideModal.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_AppManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/AppManager */ "./core/AppManager.js");
/* harmony import */ var _views_ContactList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/ContactList */ "./views/ContactList.js");
/* harmony import */ var _views_Chat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/Chat */ "./views/Chat.js");
/* harmony import */ var _views_modals_ErrorModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/modals/ErrorModal */ "./views/modals/ErrorModal.js");
/* harmony import */ var _views_modals_SettingsModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/modals/SettingsModal */ "./views/modals/SettingsModal.js");
/* harmony import */ var _views_modals_TransactionModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/modals/TransactionModal */ "./views/modals/TransactionModal.js");
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/Footer */ "./views/Footer.js");






var _jsxFileName = "D:\\BlockChat\\BlockChat\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
















var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      width: 0,
      height: 0,
      contactList: [],
      messages: [],
      selectedContact: ""
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.app = new _core_AppManager__WEBPACK_IMPORTED_MODULE_14__["default"]();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.app.initialize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var account = this.app.account;
      var contractManager = this.app.contractManager;
      var transactionDispatcher = this.app.getTransactionDispatcher();
      var listHeight = this.state.height - 140;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "BlockChat - Decentralized messaging on Ethereum network")), __jsx(_views_modals_UpdateProfileModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        account: account,
        contractManager: contractManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx(_views_modals_EnterPrivateKeyModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        account: account,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx(_views_HeaderMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        account: account,
        transactionDispatcher: transactionDispatcher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx(_views_modals_GuideModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(_views_modals_ErrorModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx(_views_modals_SettingsModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
        account: account,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx(_views_modals_TransactionModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
        dispatcher: transactionDispatcher,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        column: 2,
        style: {
          paddingTop: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
        stretched: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        width: 6,
        style: {
          height: listHeight + "px",
          "float": 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(_views_ContactList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        height: listHeight,
        account: account,
        contractManager: contractManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        width: 10,
        style: {
          height: listHeight + "px",
          overflow: 'auto',
          "float": 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(_views_Chat__WEBPACK_IMPORTED_MODULE_16__["default"], {
        height: listHeight,
        account: account,
        contractManager: contractManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })))), __jsx(_views_Footer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c08698f8ae36200bb534.hot-update.js.map