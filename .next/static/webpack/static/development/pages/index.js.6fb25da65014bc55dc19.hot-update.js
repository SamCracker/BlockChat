webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./views/HeaderMenu.js":
/*!*****************************!*\
  !*** ./views/HeaderMenu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _core_ContractManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/ContractManager */ "./core/ContractManager.js");








var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\HeaderMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var HeaderMenu = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(HeaderMenu, _Component);

  function HeaderMenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HeaderMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderMenu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "clearAllData", function () {
      window.localStorage.clear();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getAccountInfo", function () {
      var address = _this.account.getAddress();

      if (address) {
        _this.setState({
          address: address,
          balance: _this.account.balance,
          isLoading: false,
          isJoined: _this.account.isJoined
        });
      } else {
        if (_this.reloadCount == 1) {
          _this.setState({
            isLoading: false
          });
        } else {
          _this.reloadCount++;
          setTimeout(_this.getAccountInfo, 800);
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDropdownClicked", function (event, data) {
      if (data.name == 'updateProfile') {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_14__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.ACTION.OPEN_UPDATE_PROFILE
        });
      } else if (data.name == 'logOutItem') {
        _this.clearAllData();

        window.location.reload();
      } else if (data.name == 'settingsItem') {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_14__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.ACTION.OPEN_SETTINGS_MODAL
        });
      } else if (data.name == 'changeEthNetwork') {
        if (data.networkid != _support_Config__WEBPACK_IMPORTED_MODULE_13___default.a.ENV.EthNetworkId) {
          _support_Config__WEBPACK_IMPORTED_MODULE_13___default.a.ENV.EthNetworkId = data.networkid;

          _this.removeNetworkDependentData();

          window.location.reload();
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "removeNetworkDependentData", function () {
      _this.account.storageManager.removeNetworkDependentData();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleJoinClicked", function () {
      var publicKeyBuffer = _this.account.getPublicKeyBuffer();

      _this.contractManager.joinContract(publicKeyBuffer, function (resultEvent) {
        if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.EVENT.ON_REJECTED || resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.EVENT.ON_ERROR) {
          _this.setState({
            isJoinButtonLoading: false
          });
        } else if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.EVENT.ON_RECEIPT) {
          window.location.reload();
        }
      });

      _this.setState({
        isJoinButtonLoading: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleImportPrivateKeyClicked", function () {
      _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_14__["default"].dispatch({
        action: _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.ACTION.OPEN_PRIVATE_KEY_MODAL
      });
    });

    _this.account = props.account;
    _this.contractManager = props.contractManager;
    console.log(_core_ContractManager__WEBPACK_IMPORTED_MODULE_15__["default"]);
    _this.transactionDispatcher = props.transactionDispatcher;
    _this.state = {
      address: "",
      balance: "",
      name: "",
      avatarUrl: "",
      isLoading: true,
      isJoinButtonLoading: false,
      isJoined: false,
      numPendingTx: 0
    };
    _this.reloadCount = 0;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HeaderMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.account) {
        this.getAccountInfo();
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_14__["default"].register(function (payload) {
          if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.EVENT.ACCOUNT_BALANCE_UPDATED) {
            _this2.setState({
              balance: _this2.account.balance
            });
          } else if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.EVENT.ACCOUNT_INFO_UPDATED) {
            _this2.setState({
              name: payload.profile.name,
              avatarUrl: payload.profile.avatarUrl,
              isJoined: payload.profile.isJoined
            });
          }
        });
        this.transactionDispatcher.register(function (payload) {
          if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.EVENT.PENDING_TRANSACTION_UPDATED) {
            _this2.setState({
              numPendingTx: payload.numPendingTx
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var accountInfo = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      });

      if (this.account) {
        if (this.state.isLoading == false) {
          if (this.state.address) {
            var addressExplorerUrl = _support_Config__WEBPACK_IMPORTED_MODULE_13___default.a.ENV.ExplorerUrl + 'address/' + this.state.address;
            var dropdownTrigger;

            if (this.state.avatarUrl) {
              dropdownTrigger = __jsx("span", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                src: this.state.avatarUrl,
                avatar: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124
                },
                __self: this
              }), this.state.name ? this.state.name : this.state.address.substr(0, 10));
            } else {
              dropdownTrigger = __jsx("span", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
                name: "user",
                size: "large",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128
                },
                __self: this
              }), this.state.name ? this.state.name : this.state.address.substr(0, 10));
            }

            var networkItems = [];

            for (var i = 0; i < _support_Config__WEBPACK_IMPORTED_MODULE_13___default.a.NETWORK_LIST.length; i++) {
              networkItems.push(__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
                key: 'networkItem' + i,
                networkid: _support_Config__WEBPACK_IMPORTED_MODULE_13___default.a.NETWORK_LIST[i].id,
                name: "changeEthNetwork",
                onClick: this.handleDropdownClicked,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              }, _support_Config__WEBPACK_IMPORTED_MODULE_13___default.a.NETWORK_LIST[i].name));
            }

            var memberInfo;

            if (this.account.isJoined) {
              memberInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
                item: true,
                trigger: dropdownTrigger,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 144
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 145
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
                name: "updateProfile",
                onClick: this.handleDropdownClicked,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 146
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
                name: "write",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                },
                __self: this
              }), "Update profile"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
                name: "settingsItem",
                onClick: this.handleDropdownClicked,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
                name: "settings",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 150
                },
                __self: this
              }), "Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
                name: "logOutItem",
                onClick: this.handleDropdownClicked,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
                name: "log out",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 153
                },
                __self: this
              }), "Log out")));
            } else {
              memberInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                color: "orange",
                onClick: this.handleJoinClicked,
                loading: this.state.isJoinButtonLoading,
                disabled: this.state.isJoinButtonLoading,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 160
                },
                __self: this
              }, "Join ", _support_Constant__WEBPACK_IMPORTED_MODULE_12___default.a.APP_NAME);
            }

            var pendingTxItem;

            if (this.state.numPendingTx > 0) {
              pendingTxItem = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Label"], {
                as: "a",
                color: "yellow",
                href: addressExplorerUrl,
                target: "_blank",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
                name: "spinner",
                loading: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 170
                },
                __self: this
              }), this.state.numPendingTx, " pending tx");
            }

            accountInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Menu, {
              position: "right",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 177
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
              item: true,
              text: _support_Config__WEBPACK_IMPORTED_MODULE_13___default.a.ENV.NetworkName,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 180
              },
              __self: this
            }, networkItems))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 185
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 186
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187
              },
              __self: this
            }, __jsx("a", {
              href: addressExplorerUrl,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              },
              __self: this
            }, this.state.address)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              },
              __self: this
            }, "Balance: ", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Label"], {
              as: "a",
              href: addressExplorerUrl,
              target: "_blank",
              color: "orange",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: this
            }, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].utils.fromWei("" + this.state.balance, 'ether')).toFixed(8) + ' ETH'), pendingTxItem))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198
              },
              __self: this
            }, memberInfo));
          } else {
            accountInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Menu, {
              position: "right",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
              onClick: this.handleImportPrivateKeyClicked,
              color: "blue",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 207
              },
              __self: this
            }, "Import private key")));
          }
        } else {
          accountInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
            inverted: true,
            active: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          });
        }
      }

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
        fixed: "top",
        color: "grey",
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
        src: "static/images/blockchat.png",
        height: 55,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }))), this.account ? accountInfo : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      })));
    }
  }]);

  return HeaderMenu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeaderMenu);

/***/ })

})
//# sourceMappingURL=index.js.6fb25da65014bc55dc19.hot-update.js.map