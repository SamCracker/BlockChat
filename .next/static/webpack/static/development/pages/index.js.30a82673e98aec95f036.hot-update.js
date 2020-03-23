webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./core/ContractManager.js":
/*!*********************************!*\
  !*** ./core/ContractManager.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_build_EtherChat_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/build/EtherChat.json */ "./ethereum/build/EtherChat.json");
var _ethereum_build_EtherChat_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../ethereum/build/EtherChat.json */ "./ethereum/build/EtherChat.json", 1);
/* harmony import */ var _TransactionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionManager */ "./core/TransactionManager.js");
/* harmony import */ var _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/Utils */ "./support/Utils.js");
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_support_Utils__WEBPACK_IMPORTED_MODULE_9__);









 // import crypto from 'crypto';

/**
 * Responsible for interacting with the Ethereum smart contract
 */

var ContractManager = function ContractManager(accountManager, storageManager) {
  var _this = this;

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContractManager);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getContract", function _callee() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.Contract(JSON.parse(_ethereum_build_EtherChat_json__WEBPACK_IMPORTED_MODULE_4__["interface"]), _support_Config__WEBPACK_IMPORTED_MODULE_7___default.a.ENV.ContractAddress));

          case 2:
            _this.contract = _context.sent;
            _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
              action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.CONTRACT_READY
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getProfile", function _callee2(address) {
    var result, profile;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.contract.methods.members(_this.accountManager.getAddress()).call());

          case 2:
            result = _context2.sent;
            profile = {};

            if (result.isMember == 1) {
              profile.isJoined = true;
              profile.avatarUrl = _support_Utils__WEBPACK_IMPORTED_MODULE_9___default.a.hexStringToAsciiString(result.avatarUrl);
              profile.name = _support_Utils__WEBPACK_IMPORTED_MODULE_9___default.a.hexStringToAsciiString(result.name);

              _this.storageManager.setJoinedStatus(true);

              _this.storageManager.setName(_this.name);

              _this.storageManager.setAvatarUrl(_this.avatarUrl);

              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ACCOUNT_INFO_UPDATED,
                profile: profile
              });
            }

            return _context2.abrupt("return", profile);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getMemberInfo", function _callee3(address, relationship) {
    var memberInfo, publicKey, name, avatarUrl;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.contract.methods.members(address).call());

          case 2:
            memberInfo = _context3.sent;

            if (memberInfo.isMember) {
              publicKey = '04' + memberInfo.publicKeyLeft.substr(2) + memberInfo.publicKeyRight.substr(2);
              name = _support_Utils__WEBPACK_IMPORTED_MODULE_9___default.a.hexStringToAsciiString(memberInfo.name);
              avatarUrl = _support_Utils__WEBPACK_IMPORTED_MODULE_9___default.a.hexStringToAsciiString(memberInfo.avatarUrl);

              _this.storageManager.updateContact(address, publicKey, name, avatarUrl, relationship);
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getPastEvents", function _callee4(eventName, filters) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.contract.getPastEvents(eventName, filters));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "joinContract", function _callee5(publicKeyBuffer, callback) {
    var publicKeyLeft, publicKeyRight;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            publicKeyLeft = '0x' + publicKeyBuffer.toString('hex', 0, 32);
            publicKeyRight = '0x' + publicKeyBuffer.toString('hex', 32, 64);

            _this.transactionManager.executeMethod(_this.contract.methods.join(publicKeyLeft, publicKeyRight)).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED, function (txHash) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_REJECTED, function (txHash) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_REJECTED);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT, function (receipt) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR, function (error, txHash) {
              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ENCOUNTERED_ERROR,
                message: error.message,
                title: "Error"
              });
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR);
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "addContact", function _callee6(address, callback) {
    var method;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(address);
            method = _this.contract.methods.addContact(address);

            _this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED, function (txHash) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT, function (receipt) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR, function (error, txHash) {
              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ENCOUNTERED_ERROR,
                message: error.message,
                title: "Error"
              });
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR);
            });

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "acceptContactRequest", function _callee7(address, callback) {
    var method;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            method = _this.contract.methods.acceptContactRequest(address);

            _this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED, function (txHash) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT, function (receipt) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR, function (error, txHash) {
              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ENCOUNTERED_ERROR,
                message: error.message,
                title: "Error"
              });
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR);
            });

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "updateProfile", function _callee8(name, avatarUrl, callback) {
    var nameHex, avatarUrlHex, method;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            nameHex = '0x' + Buffer.from(name, 'ascii').toString('hex');
            avatarUrlHex = '0x' + Buffer.from(avatarUrl, 'ascii').toString('hex');
            method = _this.contract.methods.updateProfile(nameHex, avatarUrlHex);

            _this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED, function (txHash) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT, function (receipt) {
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT);
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR, function (error, txHash) {
              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ENCOUNTERED_ERROR,
                message: error.message,
                title: "Error"
              });
              if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR);
            });

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "sendMessage", function _callee9(toAddress, publicKey, message) {
    var publicKeyBuffer, encryptedRaw, encryptedMessage, method;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            publicKeyBuffer = Buffer.from(publicKey, 'hex');
            encryptedRaw = _support_Utils__WEBPACK_IMPORTED_MODULE_9___default.a.encrypt(message, _this.accountManager.computeSecret(publicKeyBuffer));
            encryptedMessage = '0x' + encryptedRaw.toString('hex');
            method = _this.contract.methods.sendMessage(toAddress, encryptedMessage, _support_Utils__WEBPACK_IMPORTED_MODULE_9___default.a.getEncryptAlgorithmInHex());

            _this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_APPROVED, function (txHash) {
              _this.storageManager.addMyLocalMessage(encryptedMessage, toAddress, _support_Utils__WEBPACK_IMPORTED_MODULE_9___default.a.getEncryptAlgorithm(), txHash);

              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.MESSAGES_UPDATED,
                data: toAddress
              });
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_REJECTED, function (data) {// do nothing
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_RECEIPT, function (receipt) {
              _this.storageManager.updateLocalMessage(toAddress, receipt.transactionHash, _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.SENT_STATUS.SUCCESS);

              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.MESSAGES_UPDATED,
                data: toAddress
              });
            }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ON_ERROR, function (error, txHash) {
              _this.storageManager.updateLocalMessage(toAddress, txHash, _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.SENT_STATUS.FAILED);

              _AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
                action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.MESSAGES_UPDATED,
                data: toAddress
              });
            });

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    });
  });

  this.getContract(); // this.joinContract();

  this.accountManager = accountManager;
  this.storageManager = storageManager;
  this.transactionManager = new _TransactionManager__WEBPACK_IMPORTED_MODULE_5__["default"](accountManager);
} // Create a web3 contract object that represent the ethereum smart contract
;

/* harmony default export */ __webpack_exports__["default"] = (ContractManager);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=index.js.30a82673e98aec95f036.hot-update.js.map