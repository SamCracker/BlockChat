module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/AccountManager.js":
/*!********************************!*\
  !*** ./core/AccountManager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethereumjs-util */ "ethereumjs-util");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethereumjs-wallet */ "ethereumjs-wallet");
/* harmony import */ var ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/Utils */ "./support/Utils.js");
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_support_Utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventHandler */ "./core/EventHandler.js");
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _TransactionManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransactionManager */ "./core/TransactionManager.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_9__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AccountManager {
  constructor(storageManager) {
    _defineProperty(this, "loadInfoFromstorageManager", () => {
      this.balance = this.storageManager.getBalance();
      this.name = this.storageManager.getName();
      this.avatarUrl = this.storageManager.getAvatarUrl();
      this.isJoined = this.storageManager.getJoinedStatus();
      this.askForTransactionApproval = this.storageManager.getAskForTransactionApproval();
    });

    _defineProperty(this, "setProfile", (name, avatarUrl, isJoined) => {
      this.name = name;
      this.avatarUrl = avatarUrl;
      this.isJoined = isJoined;
    });

    _defineProperty(this, "updateBalance", async () => {
      this.balance = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getBalance(this.walletAccount.getAddress().toString('hex'));
      this.storageManager.setBalance(this.balance);
      _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
        action: _support_Constant__WEBPACK_IMPORTED_MODULE_8___default.a.EVENT.ACCOUNT_BALANCE_UPDATED
      });
    });

    _defineProperty(this, "setAskForTransactionApproval", askForApproval => {
      this.storageManager.setAskForTransactionApproval(askForApproval);
      this.askForTransactionApproval = askForApproval;
    });

    _defineProperty(this, "loadPrivateKey", () => {
      var privateKeyHex = this.storageManager.getPrivateKey();

      if (privateKeyHex) {
        var privateKeyBuffer = Buffer.from(privateKeyHex, 'hex');
        this.walletAccount = ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_1___default.a.fromPrivateKey(privateKeyBuffer);
        this.updateBalance();
      }
    });

    _defineProperty(this, "storePrivateKey", privateKey => {
      var isValid = false;

      try {
        var privateKeyBuffer = Buffer.from(privateKey, 'hex');
        this.walletAccount = ethereumjs_wallet__WEBPACK_IMPORTED_MODULE_1___default.a.fromPrivateKey(privateKeyBuffer);
        this.storageManager.storePrivateKeyAndAddress(privateKey, this.getAddress());
        isValid = true;
      } catch (err) {}

      this.updateBalance();
      return isValid;
    });

    _defineProperty(this, "getAddress", () => {
      if (this.walletAccount) {
        return '0x' + this.walletAccount.getAddress().toString('hex');
      } else {
        return "";
      }
    });

    _defineProperty(this, "computeSecret", publicKeyBuffer => {
      var a = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createECDH('secp256k1');
      a.generateKeys();
      a.setPrivateKey(this.getPrivateKeyBuffer());
      return a.computeSecret(publicKeyBuffer);
    });

    this.isJoined = false;
    this.balance = 0;
    this.name = "";
    this.avatarUrl = "";
    this.storageManager = storageManager;
    this.loadPrivateKey();
    this.loadInfoFromstorageManager();
  }

  getPublicKeyBuffer() {
    return this.walletAccount.getPublicKey();
  }

  getPrivateKeyBuffer() {
    return this.walletAccount.getPrivateKey();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AccountManager);

/***/ }),

/***/ "./core/AppDispatcher.js":
/*!*******************************!*\
  !*** ./core/AppDispatcher.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flux */ "flux");
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flux__WEBPACK_IMPORTED_MODULE_0__);

var appDispatcher = new flux__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]();
/* harmony default export */ __webpack_exports__["default"] = (appDispatcher);

/***/ }),

/***/ "./core/AppManager.js":
/*!****************************!*\
  !*** ./core/AppManager.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountManager */ "./core/AccountManager.js");
/* harmony import */ var _LocalStorageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorageManager */ "./core/LocalStorageManager.js");
/* harmony import */ var _ContractManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContractManager */ "./core/ContractManager.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventHandler */ "./core/EventHandler.js");
/* harmony import */ var _AppDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Manage all core components of this web app includes:
 *  - contractManager: to interactive with EtherChat smart contract
 *  - storageManager: store/retrive data from window.localStorage
 *  - account: manage the local ethereum account
 * 
 * Only one instance of the App manager will be created.
 */

class AppManager {
  constructor() {
    _defineProperty(this, "getProfileFromContract", async () => {
      var profile = await this.contractManager.getProfile();
      this.account.setProfile(profile.name, profile.avatarUrl, profile.isJoined);
    });

    _defineProperty(this, "startEventHandler", accountAddress => {
      this.eventHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"](accountAddress, this.contractManager, this.storageManager);
      this.eventHandler.start();
    });
  }

  initialize() {
    this.storageManager = new _LocalStorageManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.storageManager.initialize();
    this.account = new _AccountManager__WEBPACK_IMPORTED_MODULE_0__["default"](this.storageManager);
    this.contractManager = new _ContractManager__WEBPACK_IMPORTED_MODULE_2__["default"](this.account, this.storageManager); // Need to wait until the smart contract instance in this.contractManager is ready for using
    // because it will take sometime to create the web3 contract instance.

    _AppDispatcher__WEBPACK_IMPORTED_MODULE_4__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.CONTRACT_READY) {
        var accountAddress = this.account.getAddress();

        if (accountAddress) {
          this.startEventHandler();
          this.getProfileFromContract();
        }
      }
    });
  }

  getTransactionDispatcher() {
    if (this.contractManager) {
      return this.contractManager.transactionManager.dispatcher;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AppManager);

/***/ }),

/***/ "./core/ContractManager.js":
/*!*********************************!*\
  !*** ./core/ContractManager.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_build_EtherChat_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ethereum/build/EtherChat.json */ "./ethereum/build/EtherChat.json");
var _ethereum_build_EtherChat_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../ethereum/build/EtherChat.json */ "./ethereum/build/EtherChat.json", 1);
/* harmony import */ var _TransactionManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionManager */ "./core/TransactionManager.js");
/* harmony import */ var _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../support/Utils */ "./support/Utils.js");
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_support_Utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * Responsible for interacting with the Ethereum smart contract
 */

class ContractManager {
  constructor(accountManager, storageManager) {
    _defineProperty(this, "getContract", async () => {
      this.contract = await new _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_ethereum_build_EtherChat_json__WEBPACK_IMPORTED_MODULE_1__.interface), _support_Config__WEBPACK_IMPORTED_MODULE_4___default.a.ENV.ContractAddress);
      _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
        action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.CONTRACT_READY
      });
    });

    _defineProperty(this, "getProfile", async address => {
      var result = await this.contract.methods.members(this.accountManager.getAddress()).call();
      var profile = {};

      if (result.isMember == 1) {
        profile.isJoined = true;
        profile.avatarUrl = _support_Utils__WEBPACK_IMPORTED_MODULE_6___default.a.hexStringToAsciiString(result.avatarUrl);
        profile.name = _support_Utils__WEBPACK_IMPORTED_MODULE_6___default.a.hexStringToAsciiString(result.name);
        this.storageManager.setJoinedStatus(true);
        this.storageManager.setName(this.name);
        this.storageManager.setAvatarUrl(this.avatarUrl);
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ACCOUNT_INFO_UPDATED,
          profile: profile
        });
      }

      return profile;
    });

    _defineProperty(this, "getMemberInfo", async (address, relationship) => {
      var memberInfo = await this.contract.methods.members(address).call();

      if (memberInfo.isMember) {
        var publicKey = '04' + memberInfo.publicKeyLeft.substr(2) + memberInfo.publicKeyRight.substr(2);
        var name = _support_Utils__WEBPACK_IMPORTED_MODULE_6___default.a.hexStringToAsciiString(memberInfo.name);
        var avatarUrl = _support_Utils__WEBPACK_IMPORTED_MODULE_6___default.a.hexStringToAsciiString(memberInfo.avatarUrl);
        this.storageManager.updateContact(address, publicKey, name, avatarUrl, relationship);
      }
    });

    _defineProperty(this, "getPastEvents", async (eventName, filters) => {
      return await this.contract.getPastEvents(eventName, filters);
    });

    _defineProperty(this, "joinContract", async (publicKeyBuffer, callback) => {
      var publicKeyLeft = '0x' + publicKeyBuffer.toString('hex', 0, 32);
      var publicKeyRight = '0x' + publicKeyBuffer.toString('hex', 32, 64);
      this.transactionManager.executeMethod(this.contract.methods.join(publicKeyLeft, publicKeyRight)).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED, txHash => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_REJECTED, txHash => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_REJECTED);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT, receipt => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR, (error, txHash) => {
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ENCOUNTERED_ERROR,
          message: error.message,
          title: "Error"
        });
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR);
      });
    });

    _defineProperty(this, "addContact", async (address, callback) => {
      console.log(address);
      var method = this.contract.methods.addContact(address);
      this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED, txHash => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT, receipt => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR, (error, txHash) => {
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ENCOUNTERED_ERROR,
          message: error.message,
          title: "Error"
        });
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR);
      });
    });

    _defineProperty(this, "acceptContactRequest", async (address, callback) => {
      var method = this.contract.methods.acceptContactRequest(address);
      this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED, txHash => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT, receipt => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR, (error, txHash) => {
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ENCOUNTERED_ERROR,
          message: error.message,
          title: "Error"
        });
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR);
      });
    });

    _defineProperty(this, "updateProfile", async (name, avatarUrl, callback) => {
      var nameHex = '0x' + Buffer.from(name, 'ascii').toString('hex');
      var avatarUrlHex = '0x' + Buffer.from(avatarUrl, 'ascii').toString('hex');
      var method = this.contract.methods.updateProfile(nameHex, avatarUrlHex);
      this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED, txHash => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT, receipt => {
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT);
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR, (error, txHash) => {
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ENCOUNTERED_ERROR,
          message: error.message,
          title: "Error"
        });
        if (callback) callback(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR);
      });
    });

    _defineProperty(this, "sendMessage", async (toAddress, publicKey, message) => {
      var publicKeyBuffer = Buffer.from(publicKey, 'hex');
      var encryptedRaw = _support_Utils__WEBPACK_IMPORTED_MODULE_6___default.a.encrypt(message, this.accountManager.computeSecret(publicKeyBuffer));
      var encryptedMessage = '0x' + encryptedRaw.toString('hex');
      var method = this.contract.methods.sendMessage(toAddress, encryptedMessage, _support_Utils__WEBPACK_IMPORTED_MODULE_6___default.a.getEncryptAlgorithmInHex());
      this.transactionManager.executeMethod(method).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_APPROVED, txHash => {
        this.storageManager.addMyLocalMessage(encryptedMessage, toAddress, _support_Utils__WEBPACK_IMPORTED_MODULE_6___default.a.getEncryptAlgorithm(), txHash);
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.MESSAGES_UPDATED,
          data: toAddress
        });
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_REJECTED, data => {// do nothing
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_RECEIPT, receipt => {
        this.storageManager.updateLocalMessage(toAddress, receipt.transactionHash, _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.SENT_STATUS.SUCCESS);
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.MESSAGES_UPDATED,
          data: toAddress
        });
      }).on(_support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.ON_ERROR, (error, txHash) => {
        this.storageManager.updateLocalMessage(toAddress, txHash, _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.SENT_STATUS.FAILED);
        _AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_5___default.a.EVENT.MESSAGES_UPDATED,
          data: toAddress
        });
      });
    });

    this.getContract();
    this.accountManager = accountManager;
    this.storageManager = storageManager;
    this.transactionManager = new _TransactionManager__WEBPACK_IMPORTED_MODULE_2__["default"](accountManager);
  } // Create a web3 contract object that represent the ethereum smart contract


}

/* harmony default export */ __webpack_exports__["default"] = (ContractManager);

/***/ }),

/***/ "./core/EventHandler.js":
/*!******************************!*\
  !*** ./core/EventHandler.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/Utils */ "./support/Utils.js");
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Utils__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // EventHandler object currently make requests to the smart contract periodically 
//    to get events initiated by the contract.

class EventHandler {
  constructor(myAddress, contractManager, storageManager) {
    _defineProperty(this, "pullContactEvents", async (blockNumber, currentDataBlock) => {
      // Get list of invitation requests that the current user sent
      var myRequestEvents = await this.contractManager.getPastEvents('addContactEvent', {
        filter: {
          from: this.myAddress
        },
        fromBlock: currentDataBlock + 1,
        toBlock: blockNumber
      });
      this.storageManager.addRequestEvents(myRequestEvents); // Get list of invitation requests from other users send to the current user

      var invitationEvents = await this.contractManager.getPastEvents('addContactEvent', {
        filter: {
          to: this.myAddress
        },
        fromBlock: currentDataBlock + 1,
        toBlock: blockNumber
      });
      this.storageManager.addInvitationEvents(invitationEvents);

      for (var i = 0; i < myRequestEvents.length; i++) {
        await this.contractManager.getMemberInfo(myRequestEvents[i].returnValues.to, _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.Relationship.Requested);
      }

      for (var i = 0; i < invitationEvents.length; i++) {
        await this.contractManager.getMemberInfo(invitationEvents[i].returnValues.from, _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.Relationship.NoRelation);
      }

      var myAcceptContactEvents = await this.contractManager.getPastEvents('acceptContactEvent', {
        filter: {
          from: this.myAddress
        },
        fromBlock: currentDataBlock + 1,
        toBlock: blockNumber
      });
      this.storageManager.addMyAcceptContactEvents(myAcceptContactEvents);
      var acceptContactEvents = await this.contractManager.getPastEvents('acceptContactEvent', {
        filter: {
          to: this.myAddress
        },
        fromBlock: currentDataBlock + 1,
        toBlock: blockNumber
      });
      this.storageManager.addAcceptContactEvents(acceptContactEvents); // If the one who accept our contact doesn't have publicKey yet 
      // we need to get it from the smart contract

      for (var i = 0; i < acceptContactEvents.length; i++) {
        var fromAddress = acceptContactEvents[i].returnValues.from;

        if (!this.storageManager.contacts[fromAddress].publicKey) {
          await this.contractManager.getMemberInfo(fromAddress, _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.Relationship.Connected);
        }
      } // Get profile update event to check if anyone in the current user contact list has updated their profile


      var profileUpdateEvents = await this.contractManager.getPastEvents('profileUpdateEvent', {
        filter: {
          from: this.storageManager.contactAddresses
        },
        fromBlock: currentDataBlock + 1,
        toBlock: blockNumber
      });

      for (var i = 0; i < profileUpdateEvents.length; i++) {
        var eventData = profileUpdateEvents[i].returnValues;
        this.storageManager.updateContact(eventData.from, "", _support_Utils__WEBPACK_IMPORTED_MODULE_3___default.a.hexStringToAsciiString(eventData.name), _support_Utils__WEBPACK_IMPORTED_MODULE_3___default.a.hexStringToAsciiString(eventData.avatarUrl), 0);
      }

      if (myRequestEvents.length > 0 || invitationEvents.length > 0 || profileUpdateEvents.length > 0 || myAcceptContactEvents.length > 0 || acceptContactEvents.length > 0) {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.EVENT.CONTACT_LIST_UPDATED
        });
      }
    });

    _defineProperty(this, "pullMessageEvents", async (blockNumber, currentDataBlock) => {
      var messagesSent = await this.contractManager.getPastEvents('messageSentEvent', {
        filter: {
          from: this.myAddress
        },
        fromBlock: currentDataBlock + 1,
        toBlock: blockNumber
      });
      var messagesReceived = await this.contractManager.getPastEvents('messageSentEvent', {
        filter: {
          to: this.myAddress
        },
        fromBlock: currentDataBlock + 1,
        toBlock: blockNumber
      });
      var iSent = 0;
      var iReceived = 0;

      while (iSent < messagesSent.length || iReceived < messagesReceived.length) {
        if (iSent >= messagesSent.length) {
          this.storageManager.addMessageFromFriendEvent(messagesReceived[iReceived]);
          iReceived++;
        } else if (iReceived >= messagesReceived.length) {
          this.storageManager.addMyMessageEvent(messagesSent[iSent]);
          iSent++;
        } else {
          if (messagesSent[iSent].blockNumber < messagesReceived[iReceived].blockNumber) {
            this.storageManager.addMyMessageEvent(messagesSent[iSent]);
            iSent++;
          } else {
            this.storageManager.addMessageFromFriendEvent(messagesReceived[iReceived]);
            iReceived++;
          }
        }
      }

      if (messagesReceived.length > 0 || messagesSent.length > 0) {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.EVENT.MESSAGES_UPDATED
        });
      }
    });

    _defineProperty(this, "pullEvents", async () => {
      try {
        // Get the last updated block number
        var currentDataBlock = this.storageManager.getCurrentDataBlock();
        var blockNumber = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.getBlockNumber();

        if (blockNumber > currentDataBlock) {
          await this.pullContactEvents(blockNumber, currentDataBlock);
          await this.pullMessageEvents(blockNumber, currentDataBlock);
          this.storageManager.setCurrentDataBlock(blockNumber);
        }
      } catch (err) {
        console.log(err.message);
      }

      setTimeout(this.pullEvents, 5000);
    });

    _defineProperty(this, "start", () => {
      this.pullEvents();
    });

    this.myAddress = myAddress;
    this.contractManager = contractManager;
    this.storageManager = storageManager;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EventHandler);

/***/ }),

/***/ "./core/LocalStorageManager.js":
/*!*************************************!*\
  !*** ./core/LocalStorageManager.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/Utils */ "./support/Utils.js");
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_support_Utils__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LocalStorageManager {
  constructor() {
    _defineProperty(this, "loadLocalContactAddresses", () => {
      this.contactAddresses = []; // A list of Ethereum addresses in the contact list of the current user.

      if (typeof Storage != 'undefined') {
        var rawContactAddresses = window.localStorage.contactAddresses;

        if (rawContactAddresses != undefined) {
          this.contactAddresses = JSON.parse(rawContactAddresses);
        }
      }
    });

    _defineProperty(this, "loadContactMessages", () => {
      if (typeof Storage != 'undefined') {
        for (var i = 0; i < this.contactAddresses.length; i++) {
          var address = this.contactAddresses[i];
          var localContact = window.localStorage[address];
          this.contacts[address] = JSON.parse(localContact);
        }
      }
    });

    _defineProperty(this, "addContact", (address, relationship) => {
      var data = this.contacts[address];

      if (data == undefined) {
        var member = {};
        member.messages = [];
        member.relationship = relationship;
        window.localStorage.setItem(address, JSON.stringify(member));
        this.contacts[address] = member;
        this.contactAddresses.push(address);
        window.localStorage.setItem('contactAddresses', JSON.stringify(this.contactAddresses));
      }
    });

    _defineProperty(this, "updateContact", (address, publicKey, name, avatarUrl, relationship) => {
      var data = this.contacts[address];

      if (data != undefined) {
        if (data.relationship < relationship) {
          data.relationship = relationship;
        }

        if (publicKey) {
          data.publicKey = publicKey;
        }

        if (name) {
          data.name = name;
        }

        if (avatarUrl) {
          data.avatarUrl = avatarUrl;
        }

        window.localStorage.setItem(address, JSON.stringify(data));
      }
    });

    _defineProperty(this, "addInvitationEvents", events => {
      for (var i = 0; i < events.length; i++) {
        this.addContact(events[i].returnValues["from"], _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.Relationship.NoRelation);
      }
    });

    _defineProperty(this, "addRequestEvents", events => {
      for (var i = 0; i < events.length; i++) {
        this.addContact(events[i].returnValues["to"], _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.Relationship.Requested);
      }
    });

    _defineProperty(this, "addMyAcceptContactEvents", events => {
      for (var i = 0; i < events.length; i++) {
        this.updateContact(events[i].returnValues["to"], "", "", "", _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.Relationship.Connected);
      }
    });

    _defineProperty(this, "addAcceptContactEvents", events => {
      for (var i = 0; i < events.length; i++) {
        this.updateContact(events[i].returnValues["from"], "", "", "", _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.Relationship.Connected);
      }
    });

    _defineProperty(this, "addMessageFromFriendEvent", event => {
      var data = event.returnValues;
      var fromAddress = data.from;
      var message = {};
      message.isMine = false;
      message.message = data.message;
      message.encryption = _support_Utils__WEBPACK_IMPORTED_MODULE_2___default.a.hexStringToAsciiString(data.encryption);
      message.txHash = event.transactionHash;
      this.contacts[fromAddress].messages.push(message);
      window.localStorage.setItem(fromAddress, JSON.stringify(this.contacts[fromAddress]));
    });

    _defineProperty(this, "addMyMessageEvent", event => {
      var data = event.returnValues;
      var localMessages = this.contacts[data.to];
      var noMatchingItem = true;

      for (var i = localMessages.messages.length - 1; i >= 0; i--) {
        if (event.transactionHash == localMessages.messages[i].txHash) {
          localMessages.messages[i].status = _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.SENT_STATUS.SUCCESS;
          window.localStorage.setItem(data.to, JSON.stringify(this.contacts[data.to]));
          noMatchingItem = false;
        }
      }

      if (noMatchingItem) {
        var message = {};
        message.isMine = true;
        message.message = data.message;
        message.encryption = _support_Utils__WEBPACK_IMPORTED_MODULE_2___default.a.hexStringToAsciiString(data.encryption);
        message.txHash = event.transactionHash;
        localMessages.messages.push(message);
        window.localStorage.setItem(data.to, JSON.stringify(this.contacts[data.to]));
      }
    });

    _defineProperty(this, "addMyLocalMessage", (message, to, encryption, txHash) => {
      var message = {
        message,
        encryption,
        txHash
      };
      message.status = _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.SENT_STATUS.PENDING;
      message.isMine = true;
      this.contacts[to].messages.push(message);
      window.localStorage.setItem(to, JSON.stringify(this.contacts[to]));
    });

    _defineProperty(this, "updateLocalMessage", (toAddress, txHash, status) => {
      var localMessages = this.contacts[toAddress];

      for (var i = localMessages.messages.length - 1; i >= 0; i--) {
        if (txHash == localMessages.messages[i].txHash) {
          localMessages.messages[i].status = status;
          window.localStorage.setItem(toAddress, JSON.stringify(this.contacts[toAddress]));
        }
      }
    });

    _defineProperty(this, "clearMessages", contacts => {
      window.localStorage.setItem('currentDataBlock', "0");
      window.localStorage.removeItem('contactAddresses');

      for (var i = 0; i < contacts.length; i++) {
        window.localStorage.removeItem(contacts[i]);
      }
    });
  }

  initialize() {
    this.contacts = {}; // Map Ethereum addresses with all messages and information belong to an address

    this.loadLocalContactAddresses();
    this.loadContactMessages();
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
      action: _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.EVENT.CONTACT_LIST_UPDATED
    });
  }

  storePrivateKeyAndAddress(privateKey, address) {
    if (typeof Storage !== 'undefined') {
      window.localStorage.setItem("privateKey", privateKey);
      window.localStorage.setItem("address", address);
      window.localStorage.setItem("currentDataBlock", "0");
      window.localStorage.setItem("ethNetwork", "4");
    }
  }

  getPrivateKey() {
    if (typeof Storage !== 'undefined') {
      return window.localStorage.privateKey;
    }
  }

  getAddress() {
    if (typeof Storage !== 'undefined') {
      return window.localStorage.address;
    }
  }

  setBalance(balance) {
    if (typeof Storage !== 'undefined') {
      window.localStorage.setItem('balance', balance);
    }
  }

  getBalance() {
    if (typeof Storage !== 'undefined' && window.localStorage.balance != undefined) {
      return window.localStorage.balance;
    } else {
      return "0";
    }
  }

  setName(name) {
    if (typeof Storage !== 'undefined' && name != "") {
      window.localStorage.setItem('name', name);
    }
  }

  getName() {
    if (typeof Storage !== 'undefined' && window.localStorage.name != undefined) {
      return window.localStorage.name;
    } else {
      return "";
    }
  }

  setAvatarUrl(avatarUrl) {
    if (typeof Storage !== 'undefined' && avatarUrl) {
      window.localStorage.setItem('avatarUrl', avatarUrl);
    }
  }

  getAvatarUrl() {
    if (typeof Storage !== 'undefined' && window.localStorage.avatarUrl != undefined) {
      return window.localStorage.avatarUrl;
    } else {
      return "";
    }
  }

  setJoinedStatus(isJoined) {
    if (typeof Storage !== 'undefined') {
      window.localStorage.setItem('isJoined', isJoined);
    }
  }

  getJoinedStatus() {
    if (typeof Storage !== 'undefined' && window.localStorage.isJoined != undefined) {
      return window.localStorage.isJoined;
    } else {
      return false;
    }
  } // Get current block number of contract events' data (message events, invitation events...)


  getCurrentDataBlock() {
    return parseInt(window.localStorage.currentDataBlock);
  }

  setCurrentDataBlock(blockNumber) {
    window.localStorage.setItem('currentDataBlock', blockNumber);
  }

  setAskForTransactionApproval(boolValue) {
    if (typeof Storage !== 'undefined') {
      window.localStorage.setItem('askForTransactionApproval', boolValue);
    }
  }

  getAskForTransactionApproval() {
    if (typeof Storage !== 'undefined' && window.localStorage.askForTransactionApproval) {
      return window.localStorage.askForTransactionApproval == "true";
    } else {
      return false;
    }
  }

  removeNetworkDependentData() {
    if (typeof Storage !== 'undefined') {
      var rawAddresses = window.localStorage.contactAddresses;

      if (rawAddresses != undefined) {
        var addresses = JSON.parse(rawAddresses);

        for (var i = 0; i < addresses.length; i++) {
          window.localStorage.removeItem(addresses[i]);
        }

        window.localStorage.removeItem('contactAddresses');
      }

      window.localStorage.removeItem('balance');
      window.localStorage.removeItem('isJoined');
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('avatarUrl');
      window.localStorage.setItem('currentDataBlock', '0');
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LocalStorageManager);

/***/ }),

/***/ "./core/TransactionManager.js":
/*!************************************!*\
  !*** ./core/TransactionManager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flux */ "flux");
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethereumjs-tx */ "ethereumjs-tx");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class TransactionsManager {
  constructor(account) {
    _defineProperty(this, "approveTransaction", async (transactionId, gasPrice, gasAmount, method) => {
      var emitter = this.emitterMapping[transactionId];
      var data = method.encodeABI();
      var transactionCount = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getTransactionCount(this.account.getAddress());
      var rawTx = {
        nonce: parseInt(transactionCount + this.numPendingTx),
        gasPrice: parseInt(gasPrice),
        gasLimit: parseInt(gasAmount),
        to: _support_Config__WEBPACK_IMPORTED_MODULE_2___default.a.ENV.ContractAddress,
        value: 0,
        data: data
      };
      var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5___default.a(rawTx);
      tx.sign(this.account.getPrivateKeyBuffer());
      var serializedTx = tx.serialize();
      var txHash = '0x' + tx.hash().toString('hex');
      this.updatePendingTx(this.numPendingTx + 1);
      _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
        this.updatePendingTx(this.numPendingTx - 1);
        emitter.emit(_support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.EVENT.ON_RECEIPT, receipt);
      }).on('error', (err, data) => {
        this.updatePendingTx(this.numPendingTx - 1);
        emitter.emit(_support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.EVENT.ON_ERROR, err, txHash);
      });
      emitter.emit(_support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.EVENT.ON_APPROVED, txHash);
    });

    _defineProperty(this, "rejectTransaction", transactionId => {
      var emitter = this.emitterMapping[transactionId];
      emitter.emit(_support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.EVENT.ON_REJECTED);
      delete this.emitterMapping[transactionId];
    });

    _defineProperty(this, "automaticallyApproveTransaction", async (transactionId, method) => {
      var estimatedGas;

      try {
        estimatedGas = await method.estimateGas({
          gas: 3000000
        });
      } catch (err) {
        estimatedGas = 3000000;
      }

      var gasPrice = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getGasPrice();
      this.approveTransaction(transactionId, gasPrice, estimatedGas, method);
    });

    this.account = account;
    this.numPendingTx = 0; // Number of pending Ethereum transactions

    this.emitterMapping = {}; // A mapping of an increamental id with an event emitter in order
    // to emit user approval and transaction results.

    this.emitterIncrementalId = 0; // will be increased everytime executeMethod get called

    this.dispatcher = new flux__WEBPACK_IMPORTED_MODULE_3__["Dispatcher"]();
    this.dispatcher.register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.ACTION.APPROVE_TRANSACTION) {
        this.approveTransaction(payload.transactionId, payload.gasPrice, payload.gasAmount, payload.method);
      } else if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.ACTION.REJECT_TRANSACTION) {
        this.rejectTransaction(payload.transactionId);
      }
    });
  }
  /**
   * @description Get called when user click on Approve button from a TransactionModal
   */


  updatePendingTx(numPendingTx) {
    this.numPendingTx = numPendingTx;
    this.dispatcher.dispatch({
      action: _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.EVENT.PENDING_TRANSACTION_UPDATED,
      numPendingTx: this.numPendingTx
    });
  }
  /**
   * @description Execute a web3's method by signing and sending the raw transaction to EtherChat contract.
   * @param {*} method Web3 contract method instance, which contains method's parameters.
   */


  executeMethod(method) {
    this.emitterIncrementalId++;
    var emitter = new events__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.emitterMapping[this.emitterIncrementalId] = emitter;

    if (this.account.askForTransactionApproval) {
      this.dispatcher.dispatch({
        action: _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.ACTION.OPEN_TRANSACTION_MODAL,
        method: method,
        transactionId: this.emitterIncrementalId
      });
    } else {
      this.automaticallyApproveTransaction(this.emitterIncrementalId, method);
    }

    return emitter;
  }
  /**
   * @description Approve a transaction without asking for user permission. Gas price will be
   * calculated automatically
   */


}

/* harmony default export */ __webpack_exports__["default"] = (TransactionsManager);

/***/ }),

/***/ "./ethereum/build/EtherChat.json":
/*!***************************************!*\
  !*** ./ethereum/build/EtherChat.json ***!
  \***************************************/
/*! exports provided: assembly, bytecode, functionHashes, gasEstimates, interface, metadata, opcodes, runtimeBytecode, srcmap, srcmapRuntime, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":3437,\"name\":\"POP\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":3437,\"name\":\"CODECOPY\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":3437,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a7230582009708a9d3d609c1a4e6d0f5ac71acf021c3ca9419bcb6650fd9cbf70ff0515670029\",\".code\":[{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":28,\"end\":3437,\"name\":\"CALLDATASIZE\"},{\"begin\":28,\"end\":3437,\"name\":\"LT\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":3437,\"name\":\"CALLDATALOAD\"},{\"begin\":28,\"end\":3437,\"name\":\"DIV\"},{\"begin\":28,\"end\":3437,\"name\":\"AND\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"8AE4B0C\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP2\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"A5DC5A9\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"2C4AC770\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"5B419A65\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"661B9065\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"6FBD6F6B\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"A414B379\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"A8E70DD3\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"F24113C6\"},{\"begin\":28,\"end\":3437,\"name\":\"EQ\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPI\"},{\"begin\":28,\"end\":3437,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"REVERT\"},{\"begin\":904,\"end\":946,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":904,\"end\":946,\"name\":\"JUMPDEST\"},{\"begin\":904,\"end\":946,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":904,\"end\":946,\"name\":\"CALLDATALOAD\"},{\"begin\":904,\"end\":946,\"name\":\"AND\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH [tag]\",\"value\":\"13\"},{\"begin\":904,\"end\":946,\"name\":\"JUMP\"},{\"begin\":904,\"end\":946,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":904,\"end\":946,\"name\":\"JUMPDEST\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":904,\"end\":946,\"name\":\"DUP1\"},{\"begin\":904,\"end\":946,\"name\":\"MLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP7\"},{\"begin\":904,\"end\":946,\"name\":\"DUP8\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":904,\"end\":946,\"name\":\"DUP8\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP6\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP6\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"DUP6\"},{\"begin\":904,\"end\":946,\"name\":\"DUP6\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP4\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP4\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":904,\"end\":946,\"name\":\"DUP6\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP2\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP2\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":904,\"end\":946,\"name\":\"DUP5\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"ISZERO\"},{\"begin\":904,\"end\":946,\"name\":\"ISZERO\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":904,\"end\":946,\"name\":\"DUP4\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"MLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"DUP2\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"SUB\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"C0\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"RETURN\"},{\"begin\":2365,\"end\":2635,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":2365,\"end\":2635,\"name\":\"JUMPDEST\"},{\"begin\":2365,\"end\":2635,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2365,\"end\":2635,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2365,\"end\":2635,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2365,\"end\":2635,\"name\":\"CALLDATALOAD\"},{\"begin\":2365,\"end\":2635,\"name\":\"AND\"},{\"begin\":2365,\"end\":2635,\"name\":\"PUSH [tag]\",\"value\":\"16\"},{\"begin\":2365,\"end\":2635,\"name\":\"JUMP\"},{\"begin\":2365,\"end\":2635,\"name\":\"tag\",\"value\":\"15\"},{\"begin\":2365,\"end\":2635,\"name\":\"JUMPDEST\"},{\"begin\":2365,\"end\":2635,\"name\":\"STOP\"},{\"begin\":1978,\"end\":2353,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":1978,\"end\":2353,\"name\":\"JUMPDEST\"},{\"begin\":1978,\"end\":2353,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"17\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"17\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"MLOAD\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"CALLDATALOAD\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP3\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP2\"},{\"begin\":1978,\"end\":2353,\"name\":\"ADD\"},{\"begin\":1978,\"end\":2353,\"name\":\"CALLDATALOAD\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP2\"},{\"begin\":1978,\"end\":2353,\"name\":\"ADD\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"DIV\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"MUL\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP7\"},{\"begin\":1978,\"end\":2353,\"name\":\"ADD\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"ADD\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP7\"},{\"begin\":1978,\"end\":2353,\"name\":\"MSTORE\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"MSTORE\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP4\"},{\"begin\":1978,\"end\":2353,\"name\":\"CALLDATALOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1978,\"end\":2353,\"name\":\"AND\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"CALLDATASIZE\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP6\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH\",\"value\":\"44\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP5\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP2\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP4\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP2\"},{\"begin\":1978,\"end\":2353,\"name\":\"ADD\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP2\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP2\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP5\"},{\"begin\":1978,\"end\":2353,\"name\":\"ADD\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP4\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP3\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP1\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP3\"},{\"begin\":1978,\"end\":2353,\"name\":\"DUP5\"},{\"begin\":1978,\"end\":2353,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP5\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP8\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP4\"},{\"begin\":1978,\"end\":2353,\"name\":\"CALLDATALOAD\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP5\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"PUSH [tag]\",\"value\":\"19\"},{\"begin\":1978,\"end\":2353,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"JUMP\"},{\"begin\":1690,\"end\":1966,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":1690,\"end\":1966,\"name\":\"JUMPDEST\"},{\"begin\":1690,\"end\":1966,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"20\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"20\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1690,\"end\":1966,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":1690,\"end\":1966,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1690,\"end\":1966,\"name\":\"CALLDATALOAD\"},{\"begin\":1690,\"end\":1966,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":1690,\"end\":1966,\"name\":\"CALLDATALOAD\"},{\"begin\":1690,\"end\":1966,\"name\":\"PUSH [tag]\",\"value\":\"22\"},{\"begin\":1690,\"end\":1966,\"name\":\"JUMP\"},{\"begin\":3294,\"end\":3434,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":3294,\"end\":3434,\"name\":\"JUMPDEST\"},{\"begin\":3294,\"end\":3434,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"23\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"23\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH [tag]\",\"value\":\"24\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":3294,\"end\":3434,\"name\":\"CALLDATALOAD\"},{\"begin\":3294,\"end\":3434,\"name\":\"AND\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH [tag]\",\"value\":\"25\"},{\"begin\":3294,\"end\":3434,\"name\":\"JUMP\"},{\"begin\":3294,\"end\":3434,\"name\":\"tag\",\"value\":\"24\"},{\"begin\":3294,\"end\":3434,\"name\":\"JUMPDEST\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3294,\"end\":3434,\"name\":\"MLOAD\"},{\"begin\":3294,\"end\":3434,\"name\":\"DUP1\"},{\"begin\":3294,\"end\":3434,\"name\":\"DUP3\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3294,\"end\":3434,\"name\":\"DUP2\"},{\"begin\":3294,\"end\":3434,\"name\":\"GT\"},{\"begin\":3294,\"end\":3434,\"name\":\"ISZERO\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH [tag]\",\"value\":\"26\"},{\"begin\":3294,\"end\":3434,\"name\":\"JUMPI\"},{\"begin\":3294,\"end\":3434,\"name\":\"INVALID\"},{\"begin\":3294,\"end\":3434,\"name\":\"tag\",\"value\":\"26\"},{\"begin\":3294,\"end\":3434,\"name\":\"JUMPDEST\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3294,\"end\":3434,\"name\":\"AND\"},{\"begin\":3294,\"end\":3434,\"name\":\"DUP2\"},{\"begin\":3294,\"end\":3434,\"name\":\"MSTORE\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3294,\"end\":3434,\"name\":\"ADD\"},{\"begin\":3294,\"end\":3434,\"name\":\"SWAP2\"},{\"begin\":3294,\"end\":3434,\"name\":\"POP\"},{\"begin\":3294,\"end\":3434,\"name\":\"POP\"},{\"begin\":3294,\"end\":3434,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3294,\"end\":3434,\"name\":\"MLOAD\"},{\"begin\":3294,\"end\":3434,\"name\":\"DUP1\"},{\"begin\":3294,\"end\":3434,\"name\":\"SWAP2\"},{\"begin\":3294,\"end\":3434,\"name\":\"SUB\"},{\"begin\":3294,\"end\":3434,\"name\":\"SWAP1\"},{\"begin\":3294,\"end\":3434,\"name\":\"RETURN\"},{\"begin\":1321,\"end\":1678,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":1321,\"end\":1678,\"name\":\"JUMPDEST\"},{\"begin\":1321,\"end\":1678,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"27\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"27\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1321,\"end\":1678,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1321,\"end\":1678,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1321,\"end\":1678,\"name\":\"CALLDATALOAD\"},{\"begin\":1321,\"end\":1678,\"name\":\"AND\"},{\"begin\":1321,\"end\":1678,\"name\":\"PUSH [tag]\",\"value\":\"29\"},{\"begin\":1321,\"end\":1678,\"name\":\"JUMP\"},{\"begin\":959,\"end\":1313,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":959,\"end\":1313,\"name\":\"JUMPDEST\"},{\"begin\":959,\"end\":1313,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"30\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"30\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":959,\"end\":1313,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":959,\"end\":1313,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":959,\"end\":1313,\"name\":\"CALLDATALOAD\"},{\"begin\":959,\"end\":1313,\"name\":\"AND\"},{\"begin\":959,\"end\":1313,\"name\":\"PUSH [tag]\",\"value\":\"32\"},{\"begin\":959,\"end\":1313,\"name\":\"JUMP\"},{\"begin\":2647,\"end\":2921,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":2647,\"end\":2921,\"name\":\"JUMPDEST\"},{\"begin\":2647,\"end\":2921,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"33\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"33\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2647,\"end\":2921,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2647,\"end\":2921,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2647,\"end\":2921,\"name\":\"CALLDATALOAD\"},{\"begin\":2647,\"end\":2921,\"name\":\"AND\"},{\"begin\":2647,\"end\":2921,\"name\":\"PUSH [tag]\",\"value\":\"35\"},{\"begin\":2647,\"end\":2921,\"name\":\"JUMP\"},{\"begin\":2933,\"end\":3172,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":2933,\"end\":3172,\"name\":\"JUMPDEST\"},{\"begin\":2933,\"end\":3172,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"36\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"36\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":2933,\"end\":3172,\"name\":\"PUSH [tag]\",\"value\":\"15\"},{\"begin\":2933,\"end\":3172,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2933,\"end\":3172,\"name\":\"CALLDATALOAD\"},{\"begin\":2933,\"end\":3172,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":2933,\"end\":3172,\"name\":\"CALLDATALOAD\"},{\"begin\":2933,\"end\":3172,\"name\":\"PUSH [tag]\",\"value\":\"38\"},{\"begin\":2933,\"end\":3172,\"name\":\"JUMP\"},{\"begin\":904,\"end\":946,\"name\":\"tag\",\"value\":\"13\"},{\"begin\":904,\"end\":946,\"name\":\"JUMPDEST\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":904,\"end\":946,\"name\":\"DUP2\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP2\"},{\"begin\":904,\"end\":946,\"name\":\"DUP3\"},{\"begin\":904,\"end\":946,\"name\":\"MSTORE\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP2\"},{\"begin\":904,\"end\":946,\"name\":\"KECCAK256\"},{\"begin\":904,\"end\":946,\"name\":\"DUP1\"},{\"begin\":904,\"end\":946,\"name\":\"SLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP2\"},{\"begin\":904,\"end\":946,\"name\":\"DUP2\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":904,\"end\":946,\"name\":\"DUP3\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":904,\"end\":946,\"name\":\"DUP4\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":904,\"end\":946,\"name\":\"DUP5\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP5\"},{\"begin\":904,\"end\":946,\"name\":\"ADD\"},{\"begin\":904,\"end\":946,\"name\":\"SLOAD\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP3\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP4\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP2\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP3\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP2\"},{\"begin\":904,\"end\":946,\"name\":\"SWAP1\"},{\"begin\":904,\"end\":946,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":904,\"end\":946,\"name\":\"AND\"},{\"begin\":904,\"end\":946,\"name\":\"DUP7\"},{\"begin\":904,\"end\":946,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2365,\"end\":2635,\"name\":\"tag\",\"value\":\"16\"},{\"begin\":2365,\"end\":2635,\"name\":\"JUMPDEST\"},{\"begin\":3233,\"end\":3243,\"name\":\"CALLER\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3232,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"KECCAK256\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3225,\"end\":3253,\"name\":\"ADD\"},{\"begin\":3225,\"end\":3253,\"name\":\"SLOAD\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3225,\"end\":3253,\"name\":\"AND\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"EQ\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH [tag]\",\"value\":\"40\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPI\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3217,\"end\":3262,\"name\":\"DUP1\"},{\"begin\":3217,\"end\":3262,\"name\":\"REVERT\"},{\"begin\":3217,\"end\":3262,\"name\":\"tag\",\"value\":\"40\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPDEST\"},{\"begin\":2478,\"end\":2504,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2457,\"end\":2467,\"name\":\"CALLER\"},{\"begin\":2443,\"end\":2456,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2443,\"end\":2468,\"name\":\"SWAP1\"},{\"begin\":2443,\"end\":2468,\"name\":\"DUP2\"},{\"begin\":2443,\"end\":2468,\"name\":\"MSTORE\"},{\"begin\":2443,\"end\":2468,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2443,\"end\":2468,\"name\":\"DUP2\"},{\"begin\":2443,\"end\":2468,\"name\":\"DUP2\"},{\"begin\":2443,\"end\":2468,\"name\":\"MSTORE\"},{\"begin\":2443,\"end\":2468,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2443,\"end\":2468,\"name\":\"DUP1\"},{\"begin\":2443,\"end\":2468,\"name\":\"DUP4\"},{\"begin\":2443,\"end\":2468,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2443,\"end\":2474,\"name\":\"DUP7\"},{\"begin\":2443,\"end\":2474,\"name\":\"AND\"},{\"begin\":2443,\"end\":2474,\"name\":\"DUP5\"},{\"begin\":2443,\"end\":2474,\"name\":\"MSTORE\"},{\"begin\":2443,\"end\":2474,\"name\":\"SWAP1\"},{\"begin\":2443,\"end\":2474,\"name\":\"SWAP2\"},{\"begin\":2443,\"end\":2474,\"name\":\"MSTORE\"},{\"begin\":2443,\"end\":2474,\"name\":\"SWAP1\"},{\"begin\":2443,\"end\":2474,\"name\":\"KECCAK256\"},{\"begin\":2443,\"end\":2474,\"name\":\"SLOAD\"},{\"begin\":2443,\"end\":2474,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2443,\"end\":2474,\"name\":\"AND\"},{\"begin\":2443,\"end\":2504,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2443,\"end\":2504,\"name\":\"DUP2\"},{\"begin\":2443,\"end\":2504,\"name\":\"GT\"},{\"begin\":2443,\"end\":2504,\"name\":\"ISZERO\"},{\"begin\":2443,\"end\":2504,\"name\":\"PUSH [tag]\",\"value\":\"43\"},{\"begin\":2443,\"end\":2504,\"name\":\"JUMPI\"},{\"begin\":2443,\"end\":2504,\"name\":\"INVALID\"},{\"begin\":2443,\"end\":2504,\"name\":\"tag\",\"value\":\"43\"},{\"begin\":2443,\"end\":2504,\"name\":\"JUMPDEST\"},{\"begin\":2443,\"end\":2504,\"name\":\"EQ\"},{\"begin\":2435,\"end\":2505,\"name\":\"PUSH [tag]\",\"value\":\"44\"},{\"begin\":2435,\"end\":2505,\"name\":\"JUMPI\"},{\"begin\":2435,\"end\":2505,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2435,\"end\":2505,\"name\":\"DUP1\"},{\"begin\":2435,\"end\":2505,\"name\":\"REVERT\"},{\"begin\":2435,\"end\":2505,\"name\":\"tag\",\"value\":\"44\"},{\"begin\":2435,\"end\":2505,\"name\":\"JUMPDEST\"},{\"begin\":2532,\"end\":2542,\"name\":\"CALLER\"},{\"begin\":2518,\"end\":2531,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2518,\"end\":2543,\"name\":\"DUP2\"},{\"begin\":2518,\"end\":2543,\"name\":\"DUP2\"},{\"begin\":2518,\"end\":2543,\"name\":\"MSTORE\"},{\"begin\":2518,\"end\":2543,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2518,\"end\":2543,\"name\":\"DUP2\"},{\"begin\":2518,\"end\":2543,\"name\":\"DUP2\"},{\"begin\":2518,\"end\":2543,\"name\":\"MSTORE\"},{\"begin\":2518,\"end\":2543,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2518,\"end\":2543,\"name\":\"DUP1\"},{\"begin\":2518,\"end\":2543,\"name\":\"DUP4\"},{\"begin\":2518,\"end\":2543,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2518,\"end\":2549,\"name\":\"DUP7\"},{\"begin\":2518,\"end\":2549,\"name\":\"AND\"},{\"begin\":2518,\"end\":2549,\"name\":\"DUP1\"},{\"begin\":2518,\"end\":2549,\"name\":\"DUP6\"},{\"begin\":2518,\"end\":2549,\"name\":\"MSTORE\"},{\"begin\":2518,\"end\":2549,\"name\":\"SWAP3\"},{\"begin\":2518,\"end\":2549,\"name\":\"MSTORE\"},{\"begin\":2518,\"end\":2549,\"name\":\"DUP1\"},{\"begin\":2518,\"end\":2549,\"name\":\"DUP4\"},{\"begin\":2518,\"end\":2549,\"name\":\"KECCAK256\"},{\"begin\":2518,\"end\":2576,\"name\":\"DUP1\"},{\"begin\":2518,\"end\":2576,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2518,\"end\":2576,\"name\":\"AND\"},{\"begin\":2552,\"end\":2576,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2518,\"end\":2576,\"name\":\"OR\"},{\"begin\":2518,\"end\":2576,\"name\":\"SWAP1\"},{\"begin\":2518,\"end\":2576,\"name\":\"SSTORE\"},{\"begin\":2592,\"end\":2627,\"name\":\"MLOAD\"},{\"begin\":2518,\"end\":2549,\"name\":\"SWAP1\"},{\"begin\":2518,\"end\":2549,\"name\":\"SWAP3\"},{\"begin\":2532,\"end\":2542,\"name\":\"SWAP2\"},{\"begin\":2592,\"end\":2627,\"name\":\"PUSH\",\"value\":\"94A60CBE32DCCF41AF4CEAFB3DF23A95E3A69D5785B4AC14069C3357EA3349E7\"},{\"begin\":2592,\"end\":2627,\"name\":\"SWAP2\"},{\"begin\":2592,\"end\":2627,\"name\":\"LOG3\"},{\"begin\":2365,\"end\":2635,\"name\":\"POP\"},{\"begin\":2365,\"end\":2635,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1978,\"end\":2353,\"name\":\"tag\",\"value\":\"19\"},{\"begin\":1978,\"end\":2353,\"name\":\"JUMPDEST\"},{\"begin\":3233,\"end\":3243,\"name\":\"CALLER\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3232,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"KECCAK256\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3225,\"end\":3253,\"name\":\"ADD\"},{\"begin\":3225,\"end\":3253,\"name\":\"SLOAD\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3225,\"end\":3253,\"name\":\"AND\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"EQ\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH [tag]\",\"value\":\"47\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPI\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3217,\"end\":3262,\"name\":\"DUP1\"},{\"begin\":3217,\"end\":3262,\"name\":\"REVERT\"},{\"begin\":3217,\"end\":3262,\"name\":\"tag\",\"value\":\"47\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPDEST\"},{\"begin\":2116,\"end\":2142,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2083,\"end\":2100,\"name\":\"DUP5\"},{\"begin\":2083,\"end\":2100,\"name\":\"AND\"},{\"begin\":2083,\"end\":2096,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2083,\"end\":2100,\"name\":\"SWAP1\"},{\"begin\":2083,\"end\":2100,\"name\":\"DUP2\"},{\"begin\":2083,\"end\":2100,\"name\":\"MSTORE\"},{\"begin\":2083,\"end\":2100,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2083,\"end\":2100,\"name\":\"DUP2\"},{\"begin\":2083,\"end\":2100,\"name\":\"DUP2\"},{\"begin\":2083,\"end\":2100,\"name\":\"MSTORE\"},{\"begin\":2083,\"end\":2100,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2083,\"end\":2100,\"name\":\"DUP1\"},{\"begin\":2083,\"end\":2100,\"name\":\"DUP4\"},{\"begin\":2083,\"end\":2100,\"name\":\"KECCAK256\"},{\"begin\":2101,\"end\":2111,\"name\":\"CALLER\"},{\"begin\":2083,\"end\":2112,\"name\":\"DUP5\"},{\"begin\":2083,\"end\":2112,\"name\":\"MSTORE\"},{\"begin\":2083,\"end\":2112,\"name\":\"SWAP1\"},{\"begin\":2083,\"end\":2112,\"name\":\"SWAP2\"},{\"begin\":2083,\"end\":2112,\"name\":\"MSTORE\"},{\"begin\":2083,\"end\":2112,\"name\":\"SWAP1\"},{\"begin\":2083,\"end\":2112,\"name\":\"KECCAK256\"},{\"begin\":2083,\"end\":2112,\"name\":\"SLOAD\"},{\"begin\":2083,\"end\":2112,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2083,\"end\":2112,\"name\":\"AND\"},{\"begin\":2083,\"end\":2142,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2083,\"end\":2142,\"name\":\"DUP2\"},{\"begin\":2083,\"end\":2142,\"name\":\"GT\"},{\"begin\":2083,\"end\":2142,\"name\":\"ISZERO\"},{\"begin\":2083,\"end\":2142,\"name\":\"PUSH [tag]\",\"value\":\"50\"},{\"begin\":2083,\"end\":2142,\"name\":\"JUMPI\"},{\"begin\":2083,\"end\":2142,\"name\":\"INVALID\"},{\"begin\":2083,\"end\":2142,\"name\":\"tag\",\"value\":\"50\"},{\"begin\":2083,\"end\":2142,\"name\":\"JUMPDEST\"},{\"begin\":2083,\"end\":2142,\"name\":\"EQ\"},{\"begin\":2075,\"end\":2143,\"name\":\"PUSH [tag]\",\"value\":\"51\"},{\"begin\":2075,\"end\":2143,\"name\":\"JUMPI\"},{\"begin\":2075,\"end\":2143,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2075,\"end\":2143,\"name\":\"DUP1\"},{\"begin\":2075,\"end\":2143,\"name\":\"REVERT\"},{\"begin\":2075,\"end\":2143,\"name\":\"tag\",\"value\":\"51\"},{\"begin\":2075,\"end\":2143,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2160,\"end\":2171,\"name\":\"DUP4\"},{\"begin\":2160,\"end\":2171,\"name\":\"AND\"},{\"begin\":2160,\"end\":2171,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2160,\"end\":2171,\"name\":\"SWAP1\"},{\"begin\":2160,\"end\":2171,\"name\":\"DUP2\"},{\"begin\":2160,\"end\":2171,\"name\":\"MSTORE\"},{\"begin\":2160,\"end\":2167,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2160,\"end\":2171,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2160,\"end\":2171,\"name\":\"MSTORE\"},{\"begin\":2160,\"end\":2171,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2160,\"end\":2171,\"name\":\"SWAP1\"},{\"begin\":2160,\"end\":2171,\"name\":\"KECCAK256\"},{\"begin\":2160,\"end\":2189,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2160,\"end\":2189,\"name\":\"ADD\"},{\"begin\":2160,\"end\":2189,\"name\":\"SLOAD\"},{\"begin\":2160,\"end\":2194,\"name\":\"ISZERO\"},{\"begin\":2156,\"end\":2267,\"name\":\"ISZERO\"},{\"begin\":2156,\"end\":2267,\"name\":\"PUSH [tag]\",\"value\":\"52\"},{\"begin\":2156,\"end\":2267,\"name\":\"JUMPI\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2211,\"end\":2222,\"name\":\"DUP4\"},{\"begin\":2211,\"end\":2222,\"name\":\"AND\"},{\"begin\":2211,\"end\":2222,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2211,\"end\":2222,\"name\":\"SWAP1\"},{\"begin\":2211,\"end\":2222,\"name\":\"DUP2\"},{\"begin\":2211,\"end\":2222,\"name\":\"MSTORE\"},{\"begin\":2211,\"end\":2218,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2211,\"end\":2222,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2211,\"end\":2222,\"name\":\"MSTORE\"},{\"begin\":2211,\"end\":2222,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2211,\"end\":2222,\"name\":\"SWAP1\"},{\"begin\":2211,\"end\":2222,\"name\":\"KECCAK256\"},{\"begin\":2243,\"end\":2255,\"name\":\"NUMBER\"},{\"begin\":2211,\"end\":2240,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":2211,\"end\":2240,\"name\":\"SWAP1\"},{\"begin\":2211,\"end\":2240,\"name\":\"SWAP2\"},{\"begin\":2211,\"end\":2240,\"name\":\"ADD\"},{\"begin\":2211,\"end\":2255,\"name\":\"SSTORE\"},{\"begin\":2156,\"end\":2267,\"name\":\"tag\",\"value\":\"52\"},{\"begin\":2156,\"end\":2267,\"name\":\"JUMPDEST\"},{\"begin\":2321,\"end\":2323,\"name\":\"DUP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2292,\"end\":2345,\"name\":\"AND\"},{\"begin\":2309,\"end\":2319,\"name\":\"CALLER\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2292,\"end\":2345,\"name\":\"AND\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"5E18DA76639999310AA46DDB25F79298368AA8E7D710765328A5176B263CBB3D\"},{\"begin\":2325,\"end\":2332,\"name\":\"DUP5\"},{\"begin\":2334,\"end\":2344,\"name\":\"DUP5\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2292,\"end\":2345,\"name\":\"MLOAD\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2292,\"end\":2345,\"name\":\"ADD\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP4\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2292,\"end\":2345,\"name\":\"NOT\"},{\"begin\":2292,\"end\":2345,\"name\":\"AND\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2292,\"end\":2345,\"name\":\"NOT\"},{\"begin\":2292,\"end\":2345,\"name\":\"AND\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"MSTORE\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2292,\"end\":2345,\"name\":\"ADD\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP3\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"SUB\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP3\"},{\"begin\":2292,\"end\":2345,\"name\":\"MSTORE\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP5\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"MLOAD\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"MSTORE\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2292,\"end\":2345,\"name\":\"ADD\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"MLOAD\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2292,\"end\":2345,\"name\":\"ADD\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP4\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"53\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"54\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"53\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"54\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"ADD\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":2292,\"end\":2345,\"name\":\"AND\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"ISZERO\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH [tag]\",\"value\":\"56\"},{\"begin\":2292,\"end\":2345,\"name\":\"JUMPI\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP3\"},{\"begin\":2292,\"end\":2345,\"name\":\"SUB\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"MLOAD\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP4\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2292,\"end\":2345,\"name\":\"SUB\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":2292,\"end\":2345,\"name\":\"EXP\"},{\"begin\":2292,\"end\":2345,\"name\":\"SUB\"},{\"begin\":2292,\"end\":2345,\"name\":\"NOT\"},{\"begin\":2292,\"end\":2345,\"name\":\"AND\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"MSTORE\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2292,\"end\":2345,\"name\":\"ADD\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"tag\",\"value\":\"56\"},{\"begin\":2292,\"end\":2345,\"name\":\"JUMPDEST\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP4\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"POP\"},{\"begin\":2292,\"end\":2345,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2292,\"end\":2345,\"name\":\"MLOAD\"},{\"begin\":2292,\"end\":2345,\"name\":\"DUP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP2\"},{\"begin\":2292,\"end\":2345,\"name\":\"SUB\"},{\"begin\":2292,\"end\":2345,\"name\":\"SWAP1\"},{\"begin\":2292,\"end\":2345,\"name\":\"LOG3\"},{\"begin\":1978,\"end\":2353,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"POP\"},{\"begin\":1978,\"end\":2353,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1690,\"end\":1966,\"name\":\"tag\",\"value\":\"22\"},{\"begin\":1690,\"end\":1966,\"name\":\"JUMPDEST\"},{\"begin\":1836,\"end\":1859,\"name\":\"PUSH [tag]\",\"value\":\"57\"},{\"begin\":1836,\"end\":1859,\"name\":\"PUSH [tag]\",\"value\":\"58\"},{\"begin\":1836,\"end\":1859,\"name\":\"JUMP\",\"value\":\"[in]\"},{\"begin\":1836,\"end\":1859,\"name\":\"tag\",\"value\":\"57\"},{\"begin\":1836,\"end\":1859,\"name\":\"JUMPDEST\"},{\"begin\":1785,\"end\":1795,\"name\":\"CALLER\"},{\"begin\":1777,\"end\":1796,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1777,\"end\":1796,\"name\":\"SWAP1\"},{\"begin\":1777,\"end\":1796,\"name\":\"DUP2\"},{\"begin\":1777,\"end\":1796,\"name\":\"MSTORE\"},{\"begin\":1777,\"end\":1784,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1777,\"end\":1796,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1777,\"end\":1796,\"name\":\"MSTORE\"},{\"begin\":1777,\"end\":1796,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1777,\"end\":1796,\"name\":\"SWAP1\"},{\"begin\":1777,\"end\":1796,\"name\":\"KECCAK256\"},{\"begin\":1777,\"end\":1805,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":1777,\"end\":1805,\"name\":\"ADD\"},{\"begin\":1777,\"end\":1805,\"name\":\"SLOAD\"},{\"begin\":1777,\"end\":1805,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1777,\"end\":1805,\"name\":\"AND\"},{\"begin\":1777,\"end\":1814,\"name\":\"ISZERO\"},{\"begin\":1769,\"end\":1815,\"name\":\"PUSH [tag]\",\"value\":\"60\"},{\"begin\":1769,\"end\":1815,\"name\":\"JUMPI\"},{\"begin\":1769,\"end\":1815,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1769,\"end\":1815,\"name\":\"DUP1\"},{\"begin\":1769,\"end\":1815,\"name\":\"REVERT\"},{\"begin\":1769,\"end\":1815,\"name\":\"tag\",\"value\":\"60\"},{\"begin\":1769,\"end\":1815,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":1862,\"end\":1916,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP1\"},{\"begin\":1862,\"end\":1916,\"name\":\"MLOAD\"},{\"begin\":1862,\"end\":1916,\"name\":\"PUSH\",\"value\":\"C0\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP2\"},{\"begin\":1862,\"end\":1916,\"name\":\"ADD\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP3\"},{\"begin\":1862,\"end\":1916,\"name\":\"MSTORE\"},{\"begin\":1862,\"end\":1916,\"name\":\"SWAP3\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP4\"},{\"begin\":1862,\"end\":1916,\"name\":\"MSTORE\"},{\"begin\":1862,\"end\":1916,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP1\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP5\"},{\"begin\":1862,\"end\":1916,\"name\":\"ADD\"},{\"begin\":1862,\"end\":1916,\"name\":\"SWAP3\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP4\"},{\"begin\":1862,\"end\":1916,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP5\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP4\"},{\"begin\":1862,\"end\":1916,\"name\":\"ADD\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP2\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP2\"},{\"begin\":1862,\"end\":1916,\"name\":\"MSTORE\"},{\"begin\":1862,\"end\":1916,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP7\"},{\"begin\":1862,\"end\":1916,\"name\":\"ADD\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP3\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP2\"},{\"begin\":1862,\"end\":1916,\"name\":\"MSTORE\"},{\"begin\":1862,\"end\":1916,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP8\"},{\"begin\":1862,\"end\":1916,\"name\":\"ADD\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP4\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP2\"},{\"begin\":1862,\"end\":1916,\"name\":\"MSTORE\"},{\"begin\":1911,\"end\":1915,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1862,\"end\":1916,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP10\"},{\"begin\":1862,\"end\":1916,\"name\":\"ADD\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP2\"},{\"begin\":1862,\"end\":1916,\"name\":\"DUP2\"},{\"begin\":1862,\"end\":1916,\"name\":\"MSTORE\"},{\"begin\":1935,\"end\":1945,\"name\":\"CALLER\"},{\"begin\":1927,\"end\":1946,\"name\":\"DUP7\"},{\"begin\":1927,\"end\":1946,\"name\":\"MSTORE\"},{\"begin\":1927,\"end\":1946,\"name\":\"SWAP6\"},{\"begin\":1927,\"end\":1946,\"name\":\"DUP2\"},{\"begin\":1927,\"end\":1946,\"name\":\"SWAP1\"},{\"begin\":1927,\"end\":1946,\"name\":\"MSTORE\"},{\"begin\":1927,\"end\":1946,\"name\":\"SWAP6\"},{\"begin\":1927,\"end\":1946,\"name\":\"SWAP1\"},{\"begin\":1927,\"end\":1946,\"name\":\"SWAP4\"},{\"begin\":1927,\"end\":1946,\"name\":\"KECCAK256\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP7\"},{\"begin\":1927,\"end\":1958,\"name\":\"MLOAD\"},{\"begin\":1927,\"end\":1958,\"name\":\"DUP8\"},{\"begin\":1927,\"end\":1958,\"name\":\"SSTORE\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP5\"},{\"begin\":1927,\"end\":1958,\"name\":\"MLOAD\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP4\"},{\"begin\":1927,\"end\":1958,\"name\":\"DUP7\"},{\"begin\":1927,\"end\":1958,\"name\":\"ADD\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP4\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP1\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP4\"},{\"begin\":1927,\"end\":1958,\"name\":\"SSTORE\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP2\"},{\"begin\":1927,\"end\":1958,\"name\":\"MLOAD\"},{\"begin\":1927,\"end\":1958,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":1927,\"end\":1958,\"name\":\"DUP6\"},{\"begin\":1927,\"end\":1958,\"name\":\"ADD\"},{\"begin\":1927,\"end\":1958,\"name\":\"SSTORE\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP2\"},{\"begin\":1927,\"end\":1958,\"name\":\"MLOAD\"},{\"begin\":1927,\"end\":1958,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1927,\"end\":1958,\"name\":\"DUP5\"},{\"begin\":1927,\"end\":1958,\"name\":\"ADD\"},{\"begin\":1927,\"end\":1958,\"name\":\"SSTORE\"},{\"begin\":1927,\"end\":1958,\"name\":\"MLOAD\"},{\"begin\":1927,\"end\":1958,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":1927,\"end\":1958,\"name\":\"DUP4\"},{\"begin\":1927,\"end\":1958,\"name\":\"ADD\"},{\"begin\":1927,\"end\":1958,\"name\":\"SSTORE\"},{\"begin\":1927,\"end\":1958,\"name\":\"MLOAD\"},{\"begin\":1927,\"end\":1958,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP1\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP2\"},{\"begin\":1927,\"end\":1958,\"name\":\"ADD\"},{\"begin\":1927,\"end\":1958,\"name\":\"DUP1\"},{\"begin\":1927,\"end\":1958,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1927,\"end\":1958,\"name\":\"AND\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP2\"},{\"begin\":1927,\"end\":1958,\"name\":\"ISZERO\"},{\"begin\":1927,\"end\":1958,\"name\":\"ISZERO\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP2\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP1\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP2\"},{\"begin\":1927,\"end\":1958,\"name\":\"OR\"},{\"begin\":1927,\"end\":1958,\"name\":\"SWAP1\"},{\"begin\":1927,\"end\":1958,\"name\":\"SSTORE\"},{\"begin\":1690,\"end\":1966,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":3294,\"end\":3434,\"name\":\"tag\",\"value\":\"25\"},{\"begin\":3294,\"end\":3434,\"name\":\"JUMPDEST\"},{\"begin\":3233,\"end\":3243,\"name\":\"CALLER\"},{\"begin\":3362,\"end\":3378,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3232,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP3\"},{\"begin\":3225,\"end\":3244,\"name\":\"KECCAK256\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3225,\"end\":3253,\"name\":\"ADD\"},{\"begin\":3225,\"end\":3253,\"name\":\"SLOAD\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3225,\"end\":3253,\"name\":\"AND\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"EQ\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH [tag]\",\"value\":\"62\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPI\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3217,\"end\":3262,\"name\":\"DUP1\"},{\"begin\":3217,\"end\":3262,\"name\":\"REVERT\"},{\"begin\":3217,\"end\":3262,\"name\":\"tag\",\"value\":\"62\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":3412,\"end\":3422,\"name\":\"CALLER\"},{\"begin\":3398,\"end\":3411,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3398,\"end\":3423,\"name\":\"SWAP1\"},{\"begin\":3398,\"end\":3423,\"name\":\"DUP2\"},{\"begin\":3398,\"end\":3423,\"name\":\"MSTORE\"},{\"begin\":3398,\"end\":3423,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3398,\"end\":3423,\"name\":\"DUP2\"},{\"begin\":3398,\"end\":3423,\"name\":\"DUP2\"},{\"begin\":3398,\"end\":3423,\"name\":\"MSTORE\"},{\"begin\":3398,\"end\":3423,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3398,\"end\":3423,\"name\":\"DUP1\"},{\"begin\":3398,\"end\":3423,\"name\":\"DUP4\"},{\"begin\":3398,\"end\":3423,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":3398,\"end\":3426,\"name\":\"SWAP5\"},{\"begin\":3398,\"end\":3426,\"name\":\"SWAP1\"},{\"begin\":3398,\"end\":3426,\"name\":\"SWAP5\"},{\"begin\":3398,\"end\":3426,\"name\":\"AND\"},{\"begin\":3398,\"end\":3426,\"name\":\"DUP4\"},{\"begin\":3398,\"end\":3426,\"name\":\"MSTORE\"},{\"begin\":3398,\"end\":3426,\"name\":\"SWAP3\"},{\"begin\":3398,\"end\":3426,\"name\":\"SWAP1\"},{\"begin\":3398,\"end\":3426,\"name\":\"MSTORE\"},{\"begin\":3398,\"end\":3426,\"name\":\"KECCAK256\"},{\"begin\":3398,\"end\":3426,\"name\":\"SLOAD\"},{\"begin\":3398,\"end\":3426,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3398,\"end\":3426,\"name\":\"AND\"},{\"begin\":3398,\"end\":3426,\"name\":\"SWAP1\"},{\"begin\":3294,\"end\":3434,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":1321,\"end\":1678,\"name\":\"tag\",\"value\":\"29\"},{\"begin\":1321,\"end\":1678,\"name\":\"JUMPDEST\"},{\"begin\":3233,\"end\":3243,\"name\":\"CALLER\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3232,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"KECCAK256\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3225,\"end\":3253,\"name\":\"ADD\"},{\"begin\":3225,\"end\":3253,\"name\":\"SLOAD\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3225,\"end\":3253,\"name\":\"AND\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"EQ\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH [tag]\",\"value\":\"65\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPI\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3217,\"end\":3262,\"name\":\"DUP1\"},{\"begin\":3217,\"end\":3262,\"name\":\"REVERT\"},{\"begin\":3217,\"end\":3262,\"name\":\"tag\",\"value\":\"65\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPDEST\"},{\"begin\":1437,\"end\":1463,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1402,\"end\":1421,\"name\":\"DUP3\"},{\"begin\":1402,\"end\":1421,\"name\":\"AND\"},{\"begin\":1402,\"end\":1415,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1402,\"end\":1421,\"name\":\"SWAP1\"},{\"begin\":1402,\"end\":1421,\"name\":\"DUP2\"},{\"begin\":1402,\"end\":1421,\"name\":\"MSTORE\"},{\"begin\":1402,\"end\":1421,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1402,\"end\":1421,\"name\":\"DUP2\"},{\"begin\":1402,\"end\":1421,\"name\":\"DUP2\"},{\"begin\":1402,\"end\":1421,\"name\":\"MSTORE\"},{\"begin\":1402,\"end\":1421,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1402,\"end\":1421,\"name\":\"DUP1\"},{\"begin\":1402,\"end\":1421,\"name\":\"DUP4\"},{\"begin\":1402,\"end\":1421,\"name\":\"KECCAK256\"},{\"begin\":1422,\"end\":1432,\"name\":\"CALLER\"},{\"begin\":1402,\"end\":1433,\"name\":\"DUP5\"},{\"begin\":1402,\"end\":1433,\"name\":\"MSTORE\"},{\"begin\":1402,\"end\":1433,\"name\":\"SWAP1\"},{\"begin\":1402,\"end\":1433,\"name\":\"SWAP2\"},{\"begin\":1402,\"end\":1433,\"name\":\"MSTORE\"},{\"begin\":1402,\"end\":1433,\"name\":\"SWAP1\"},{\"begin\":1402,\"end\":1433,\"name\":\"KECCAK256\"},{\"begin\":1402,\"end\":1433,\"name\":\"SLOAD\"},{\"begin\":1402,\"end\":1433,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1402,\"end\":1433,\"name\":\"AND\"},{\"begin\":1402,\"end\":1463,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1402,\"end\":1463,\"name\":\"DUP2\"},{\"begin\":1402,\"end\":1463,\"name\":\"GT\"},{\"begin\":1402,\"end\":1463,\"name\":\"ISZERO\"},{\"begin\":1402,\"end\":1463,\"name\":\"PUSH [tag]\",\"value\":\"68\"},{\"begin\":1402,\"end\":1463,\"name\":\"JUMPI\"},{\"begin\":1402,\"end\":1463,\"name\":\"INVALID\"},{\"begin\":1402,\"end\":1463,\"name\":\"tag\",\"value\":\"68\"},{\"begin\":1402,\"end\":1463,\"name\":\"JUMPDEST\"},{\"begin\":1402,\"end\":1463,\"name\":\"EQ\"},{\"begin\":1394,\"end\":1464,\"name\":\"PUSH [tag]\",\"value\":\"69\"},{\"begin\":1394,\"end\":1464,\"name\":\"JUMPI\"},{\"begin\":1394,\"end\":1464,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1394,\"end\":1464,\"name\":\"DUP1\"},{\"begin\":1394,\"end\":1464,\"name\":\"REVERT\"},{\"begin\":1394,\"end\":1464,\"name\":\"tag\",\"value\":\"69\"},{\"begin\":1394,\"end\":1464,\"name\":\"JUMPDEST\"},{\"begin\":1499,\"end\":1509,\"name\":\"CALLER\"},{\"begin\":1485,\"end\":1498,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1485,\"end\":1510,\"name\":\"DUP2\"},{\"begin\":1485,\"end\":1510,\"name\":\"DUP2\"},{\"begin\":1485,\"end\":1510,\"name\":\"MSTORE\"},{\"begin\":1485,\"end\":1510,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1485,\"end\":1510,\"name\":\"DUP2\"},{\"begin\":1485,\"end\":1510,\"name\":\"DUP2\"},{\"begin\":1485,\"end\":1510,\"name\":\"MSTORE\"},{\"begin\":1485,\"end\":1510,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1485,\"end\":1510,\"name\":\"DUP1\"},{\"begin\":1485,\"end\":1510,\"name\":\"DUP4\"},{\"begin\":1485,\"end\":1510,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1485,\"end\":1516,\"name\":\"DUP7\"},{\"begin\":1485,\"end\":1516,\"name\":\"AND\"},{\"begin\":1485,\"end\":1516,\"name\":\"DUP1\"},{\"begin\":1485,\"end\":1516,\"name\":\"DUP6\"},{\"begin\":1485,\"end\":1516,\"name\":\"MSTORE\"},{\"begin\":1485,\"end\":1516,\"name\":\"SWAP1\"},{\"begin\":1485,\"end\":1516,\"name\":\"DUP4\"},{\"begin\":1485,\"end\":1516,\"name\":\"MSTORE\"},{\"begin\":1485,\"end\":1516,\"name\":\"DUP2\"},{\"begin\":1485,\"end\":1516,\"name\":\"DUP5\"},{\"begin\":1485,\"end\":1516,\"name\":\"KECCAK256\"},{\"begin\":1485,\"end\":1545,\"name\":\"DUP1\"},{\"begin\":1485,\"end\":1545,\"name\":\"SLOAD\"},{\"begin\":1519,\"end\":1545,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1485,\"end\":1545,\"name\":\"SWAP2\"},{\"begin\":1485,\"end\":1545,\"name\":\"DUP3\"},{\"begin\":1485,\"end\":1545,\"name\":\"AND\"},{\"begin\":1485,\"end\":1545,\"name\":\"DUP2\"},{\"begin\":1485,\"end\":1545,\"name\":\"OR\"},{\"begin\":1485,\"end\":1545,\"name\":\"SWAP1\"},{\"begin\":1485,\"end\":1545,\"name\":\"SWAP3\"},{\"begin\":1485,\"end\":1545,\"name\":\"SSTORE\"},{\"begin\":1556,\"end\":1575,\"name\":\"DUP6\"},{\"begin\":1556,\"end\":1575,\"name\":\"DUP6\"},{\"begin\":1556,\"end\":1575,\"name\":\"MSTORE\"},{\"begin\":1556,\"end\":1575,\"name\":\"DUP4\"},{\"begin\":1556,\"end\":1575,\"name\":\"DUP7\"},{\"begin\":1556,\"end\":1575,\"name\":\"KECCAK256\"},{\"begin\":1556,\"end\":1587,\"name\":\"DUP8\"},{\"begin\":1556,\"end\":1587,\"name\":\"DUP8\"},{\"begin\":1556,\"end\":1587,\"name\":\"MSTORE\"},{\"begin\":1556,\"end\":1587,\"name\":\"SWAP1\"},{\"begin\":1556,\"end\":1587,\"name\":\"SWAP5\"},{\"begin\":1556,\"end\":1587,\"name\":\"MSTORE\"},{\"begin\":1556,\"end\":1587,\"name\":\"DUP3\"},{\"begin\":1556,\"end\":1587,\"name\":\"DUP6\"},{\"begin\":1556,\"end\":1587,\"name\":\"KECCAK256\"},{\"begin\":1556,\"end\":1616,\"name\":\"DUP1\"},{\"begin\":1556,\"end\":1616,\"name\":\"SLOAD\"},{\"begin\":1556,\"end\":1616,\"name\":\"SWAP1\"},{\"begin\":1556,\"end\":1616,\"name\":\"SWAP5\"},{\"begin\":1556,\"end\":1616,\"name\":\"AND\"},{\"begin\":1556,\"end\":1616,\"name\":\"OR\"},{\"begin\":1556,\"end\":1616,\"name\":\"SWAP1\"},{\"begin\":1556,\"end\":1616,\"name\":\"SWAP3\"},{\"begin\":1556,\"end\":1616,\"name\":\"SSTORE\"},{\"begin\":1634,\"end\":1670,\"name\":\"MLOAD\"},{\"begin\":1485,\"end\":1516,\"name\":\"SWAP1\"},{\"begin\":1485,\"end\":1516,\"name\":\"SWAP3\"},{\"begin\":1499,\"end\":1509,\"name\":\"SWAP2\"},{\"begin\":1634,\"end\":1670,\"name\":\"PUSH\",\"value\":\"47A21261971F27F6B8F9D4544C161E5460EA140246E78C519E951B39A877F388\"},{\"begin\":1634,\"end\":1670,\"name\":\"SWAP2\"},{\"begin\":1634,\"end\":1670,\"name\":\"LOG3\"},{\"begin\":1321,\"end\":1678,\"name\":\"POP\"},{\"begin\":1321,\"end\":1678,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":959,\"end\":1313,\"name\":\"tag\",\"value\":\"32\"},{\"begin\":959,\"end\":1313,\"name\":\"JUMPDEST\"},{\"begin\":3233,\"end\":3243,\"name\":\"CALLER\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3232,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"KECCAK256\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3225,\"end\":3253,\"name\":\"ADD\"},{\"begin\":3225,\"end\":3253,\"name\":\"SLOAD\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3225,\"end\":3253,\"name\":\"AND\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"EQ\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH [tag]\",\"value\":\"73\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPI\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3217,\"end\":3262,\"name\":\"DUP1\"},{\"begin\":3217,\"end\":3262,\"name\":\"REVERT\"},{\"begin\":3217,\"end\":3262,\"name\":\"tag\",\"value\":\"73\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPDEST\"},{\"begin\":1044,\"end\":1054,\"name\":\"CALLER\"},{\"begin\":1065,\"end\":1092,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1030,\"end\":1055,\"name\":\"SWAP1\"},{\"begin\":1030,\"end\":1055,\"name\":\"DUP2\"},{\"begin\":1030,\"end\":1055,\"name\":\"MSTORE\"},{\"begin\":1030,\"end\":1055,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1030,\"end\":1055,\"name\":\"DUP2\"},{\"begin\":1030,\"end\":1055,\"name\":\"DUP2\"},{\"begin\":1030,\"end\":1055,\"name\":\"MSTORE\"},{\"begin\":1030,\"end\":1055,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1030,\"end\":1055,\"name\":\"DUP1\"},{\"begin\":1030,\"end\":1055,\"name\":\"DUP4\"},{\"begin\":1030,\"end\":1055,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1030,\"end\":1061,\"name\":\"DUP6\"},{\"begin\":1030,\"end\":1061,\"name\":\"AND\"},{\"begin\":1030,\"end\":1061,\"name\":\"DUP5\"},{\"begin\":1030,\"end\":1061,\"name\":\"MSTORE\"},{\"begin\":1030,\"end\":1061,\"name\":\"SWAP1\"},{\"begin\":1030,\"end\":1061,\"name\":\"SWAP2\"},{\"begin\":1030,\"end\":1061,\"name\":\"MSTORE\"},{\"begin\":1030,\"end\":1061,\"name\":\"DUP2\"},{\"begin\":1030,\"end\":1061,\"name\":\"KECCAK256\"},{\"begin\":1030,\"end\":1061,\"name\":\"SLOAD\"},{\"begin\":1030,\"end\":1061,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1030,\"end\":1061,\"name\":\"AND\"},{\"begin\":1030,\"end\":1092,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1030,\"end\":1092,\"name\":\"DUP2\"},{\"begin\":1030,\"end\":1092,\"name\":\"GT\"},{\"begin\":1030,\"end\":1092,\"name\":\"ISZERO\"},{\"begin\":1030,\"end\":1092,\"name\":\"PUSH [tag]\",\"value\":\"76\"},{\"begin\":1030,\"end\":1092,\"name\":\"JUMPI\"},{\"begin\":1030,\"end\":1092,\"name\":\"INVALID\"},{\"begin\":1030,\"end\":1092,\"name\":\"tag\",\"value\":\"76\"},{\"begin\":1030,\"end\":1092,\"name\":\"JUMPDEST\"},{\"begin\":1030,\"end\":1092,\"name\":\"EQ\"},{\"begin\":1022,\"end\":1093,\"name\":\"PUSH [tag]\",\"value\":\"77\"},{\"begin\":1022,\"end\":1093,\"name\":\"JUMPI\"},{\"begin\":1022,\"end\":1093,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1022,\"end\":1093,\"name\":\"DUP1\"},{\"begin\":1022,\"end\":1093,\"name\":\"REVERT\"},{\"begin\":1022,\"end\":1093,\"name\":\"tag\",\"value\":\"77\"},{\"begin\":1022,\"end\":1093,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1112,\"end\":1131,\"name\":\"DUP2\"},{\"begin\":1112,\"end\":1131,\"name\":\"AND\"},{\"begin\":1147,\"end\":1174,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1112,\"end\":1131,\"name\":\"SWAP1\"},{\"begin\":1112,\"end\":1131,\"name\":\"DUP2\"},{\"begin\":1112,\"end\":1131,\"name\":\"MSTORE\"},{\"begin\":1112,\"end\":1131,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1112,\"end\":1131,\"name\":\"DUP2\"},{\"begin\":1112,\"end\":1131,\"name\":\"DUP2\"},{\"begin\":1112,\"end\":1131,\"name\":\"MSTORE\"},{\"begin\":1112,\"end\":1131,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1112,\"end\":1131,\"name\":\"DUP1\"},{\"begin\":1112,\"end\":1131,\"name\":\"DUP4\"},{\"begin\":1112,\"end\":1131,\"name\":\"KECCAK256\"},{\"begin\":1132,\"end\":1142,\"name\":\"CALLER\"},{\"begin\":1112,\"end\":1143,\"name\":\"DUP5\"},{\"begin\":1112,\"end\":1143,\"name\":\"MSTORE\"},{\"begin\":1112,\"end\":1143,\"name\":\"SWAP1\"},{\"begin\":1112,\"end\":1143,\"name\":\"SWAP2\"},{\"begin\":1112,\"end\":1143,\"name\":\"MSTORE\"},{\"begin\":1112,\"end\":1143,\"name\":\"DUP2\"},{\"begin\":1112,\"end\":1143,\"name\":\"KECCAK256\"},{\"begin\":1112,\"end\":1143,\"name\":\"SLOAD\"},{\"begin\":1112,\"end\":1143,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":1112,\"end\":1143,\"name\":\"AND\"},{\"begin\":1112,\"end\":1174,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":1112,\"end\":1174,\"name\":\"DUP2\"},{\"begin\":1112,\"end\":1174,\"name\":\"GT\"},{\"begin\":1112,\"end\":1174,\"name\":\"ISZERO\"},{\"begin\":1112,\"end\":1174,\"name\":\"PUSH [tag]\",\"value\":\"79\"},{\"begin\":1112,\"end\":1174,\"name\":\"JUMPI\"},{\"begin\":1112,\"end\":1174,\"name\":\"INVALID\"},{\"begin\":1112,\"end\":1174,\"name\":\"tag\",\"value\":\"79\"},{\"begin\":1112,\"end\":1174,\"name\":\"JUMPDEST\"},{\"begin\":1112,\"end\":1174,\"name\":\"EQ\"},{\"begin\":1104,\"end\":1175,\"name\":\"PUSH [tag]\",\"value\":\"80\"},{\"begin\":1104,\"end\":1175,\"name\":\"JUMPI\"},{\"begin\":1104,\"end\":1175,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1104,\"end\":1175,\"name\":\"DUP1\"},{\"begin\":1104,\"end\":1175,\"name\":\"REVERT\"},{\"begin\":1104,\"end\":1175,\"name\":\"tag\",\"value\":\"80\"},{\"begin\":1104,\"end\":1175,\"name\":\"JUMPDEST\"},{\"begin\":1210,\"end\":1220,\"name\":\"CALLER\"},{\"begin\":1196,\"end\":1209,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":1196,\"end\":1221,\"name\":\"DUP2\"},{\"begin\":1196,\"end\":1221,\"name\":\"DUP2\"},{\"begin\":1196,\"end\":1221,\"name\":\"MSTORE\"},{\"begin\":1196,\"end\":1221,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":1196,\"end\":1221,\"name\":\"DUP2\"},{\"begin\":1196,\"end\":1221,\"name\":\"DUP2\"},{\"begin\":1196,\"end\":1221,\"name\":\"MSTORE\"},{\"begin\":1196,\"end\":1221,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":1196,\"end\":1221,\"name\":\"DUP1\"},{\"begin\":1196,\"end\":1221,\"name\":\"DUP4\"},{\"begin\":1196,\"end\":1221,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":1196,\"end\":1227,\"name\":\"DUP7\"},{\"begin\":1196,\"end\":1227,\"name\":\"AND\"},{\"begin\":1196,\"end\":1227,\"name\":\"DUP1\"},{\"begin\":1196,\"end\":1227,\"name\":\"DUP6\"},{\"begin\":1196,\"end\":1227,\"name\":\"MSTORE\"},{\"begin\":1196,\"end\":1227,\"name\":\"SWAP3\"},{\"begin\":1196,\"end\":1227,\"name\":\"MSTORE\"},{\"begin\":1196,\"end\":1227,\"name\":\"DUP1\"},{\"begin\":1196,\"end\":1227,\"name\":\"DUP4\"},{\"begin\":1196,\"end\":1227,\"name\":\"KECCAK256\"},{\"begin\":1196,\"end\":1256,\"name\":\"DUP1\"},{\"begin\":1196,\"end\":1256,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":1196,\"end\":1256,\"name\":\"AND\"},{\"begin\":1230,\"end\":1256,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":1196,\"end\":1256,\"name\":\"OR\"},{\"begin\":1196,\"end\":1256,\"name\":\"SWAP1\"},{\"begin\":1196,\"end\":1256,\"name\":\"SSTORE\"},{\"begin\":1272,\"end\":1305,\"name\":\"MLOAD\"},{\"begin\":1196,\"end\":1227,\"name\":\"SWAP1\"},{\"begin\":1196,\"end\":1227,\"name\":\"SWAP3\"},{\"begin\":1210,\"end\":1220,\"name\":\"SWAP2\"},{\"begin\":1272,\"end\":1305,\"name\":\"PUSH\",\"value\":\"2E79A42D9626443E3BF4E774B989FE2179B483F037CBFC7E7EA48FA29B8F5267\"},{\"begin\":1272,\"end\":1305,\"name\":\"SWAP2\"},{\"begin\":1272,\"end\":1305,\"name\":\"LOG3\"},{\"begin\":959,\"end\":1313,\"name\":\"POP\"},{\"begin\":959,\"end\":1313,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2647,\"end\":2921,\"name\":\"tag\",\"value\":\"35\"},{\"begin\":2647,\"end\":2921,\"name\":\"JUMPDEST\"},{\"begin\":3233,\"end\":3243,\"name\":\"CALLER\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3232,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"KECCAK256\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3225,\"end\":3253,\"name\":\"ADD\"},{\"begin\":3225,\"end\":3253,\"name\":\"SLOAD\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3225,\"end\":3253,\"name\":\"AND\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"EQ\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH [tag]\",\"value\":\"83\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPI\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3217,\"end\":3262,\"name\":\"DUP1\"},{\"begin\":3217,\"end\":3262,\"name\":\"REVERT\"},{\"begin\":3217,\"end\":3262,\"name\":\"tag\",\"value\":\"83\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPDEST\"},{\"begin\":2762,\"end\":2786,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2741,\"end\":2751,\"name\":\"CALLER\"},{\"begin\":2727,\"end\":2740,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2727,\"end\":2752,\"name\":\"SWAP1\"},{\"begin\":2727,\"end\":2752,\"name\":\"DUP2\"},{\"begin\":2727,\"end\":2752,\"name\":\"MSTORE\"},{\"begin\":2727,\"end\":2752,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2727,\"end\":2752,\"name\":\"DUP2\"},{\"begin\":2727,\"end\":2752,\"name\":\"DUP2\"},{\"begin\":2727,\"end\":2752,\"name\":\"MSTORE\"},{\"begin\":2727,\"end\":2752,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2727,\"end\":2752,\"name\":\"DUP1\"},{\"begin\":2727,\"end\":2752,\"name\":\"DUP4\"},{\"begin\":2727,\"end\":2752,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2727,\"end\":2758,\"name\":\"DUP7\"},{\"begin\":2727,\"end\":2758,\"name\":\"AND\"},{\"begin\":2727,\"end\":2758,\"name\":\"DUP5\"},{\"begin\":2727,\"end\":2758,\"name\":\"MSTORE\"},{\"begin\":2727,\"end\":2758,\"name\":\"SWAP1\"},{\"begin\":2727,\"end\":2758,\"name\":\"SWAP2\"},{\"begin\":2727,\"end\":2758,\"name\":\"MSTORE\"},{\"begin\":2727,\"end\":2758,\"name\":\"SWAP1\"},{\"begin\":2727,\"end\":2758,\"name\":\"KECCAK256\"},{\"begin\":2727,\"end\":2758,\"name\":\"SLOAD\"},{\"begin\":2727,\"end\":2758,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":2727,\"end\":2758,\"name\":\"AND\"},{\"begin\":2727,\"end\":2786,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":2727,\"end\":2786,\"name\":\"DUP2\"},{\"begin\":2727,\"end\":2786,\"name\":\"GT\"},{\"begin\":2727,\"end\":2786,\"name\":\"ISZERO\"},{\"begin\":2727,\"end\":2786,\"name\":\"PUSH [tag]\",\"value\":\"86\"},{\"begin\":2727,\"end\":2786,\"name\":\"JUMPI\"},{\"begin\":2727,\"end\":2786,\"name\":\"INVALID\"},{\"begin\":2727,\"end\":2786,\"name\":\"tag\",\"value\":\"86\"},{\"begin\":2727,\"end\":2786,\"name\":\"JUMPDEST\"},{\"begin\":2727,\"end\":2786,\"name\":\"EQ\"},{\"begin\":2719,\"end\":2787,\"name\":\"PUSH [tag]\",\"value\":\"87\"},{\"begin\":2719,\"end\":2787,\"name\":\"JUMPI\"},{\"begin\":2719,\"end\":2787,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2719,\"end\":2787,\"name\":\"DUP1\"},{\"begin\":2719,\"end\":2787,\"name\":\"REVERT\"},{\"begin\":2719,\"end\":2787,\"name\":\"tag\",\"value\":\"87\"},{\"begin\":2719,\"end\":2787,\"name\":\"JUMPDEST\"},{\"begin\":2814,\"end\":2824,\"name\":\"CALLER\"},{\"begin\":2800,\"end\":2813,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":2800,\"end\":2825,\"name\":\"DUP2\"},{\"begin\":2800,\"end\":2825,\"name\":\"DUP2\"},{\"begin\":2800,\"end\":2825,\"name\":\"MSTORE\"},{\"begin\":2800,\"end\":2825,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":2800,\"end\":2825,\"name\":\"DUP2\"},{\"begin\":2800,\"end\":2825,\"name\":\"DUP2\"},{\"begin\":2800,\"end\":2825,\"name\":\"MSTORE\"},{\"begin\":2800,\"end\":2825,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":2800,\"end\":2825,\"name\":\"DUP1\"},{\"begin\":2800,\"end\":2825,\"name\":\"DUP4\"},{\"begin\":2800,\"end\":2825,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":-1,\"end\":-1,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"SUB\"},{\"begin\":2800,\"end\":2831,\"name\":\"DUP7\"},{\"begin\":2800,\"end\":2831,\"name\":\"AND\"},{\"begin\":2800,\"end\":2831,\"name\":\"DUP1\"},{\"begin\":2800,\"end\":2831,\"name\":\"DUP6\"},{\"begin\":2800,\"end\":2831,\"name\":\"MSTORE\"},{\"begin\":2800,\"end\":2831,\"name\":\"SWAP3\"},{\"begin\":2800,\"end\":2831,\"name\":\"MSTORE\"},{\"begin\":2800,\"end\":2831,\"name\":\"DUP1\"},{\"begin\":2800,\"end\":2831,\"name\":\"DUP4\"},{\"begin\":2800,\"end\":2831,\"name\":\"KECCAK256\"},{\"begin\":2800,\"end\":2860,\"name\":\"DUP1\"},{\"begin\":2800,\"end\":2860,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":2800,\"end\":2860,\"name\":\"AND\"},{\"begin\":2834,\"end\":2860,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":2800,\"end\":2860,\"name\":\"OR\"},{\"begin\":2800,\"end\":2860,\"name\":\"SWAP1\"},{\"begin\":2800,\"end\":2860,\"name\":\"SSTORE\"},{\"begin\":2876,\"end\":2913,\"name\":\"MLOAD\"},{\"begin\":2800,\"end\":2831,\"name\":\"SWAP1\"},{\"begin\":2800,\"end\":2831,\"name\":\"SWAP3\"},{\"begin\":2814,\"end\":2824,\"name\":\"SWAP2\"},{\"begin\":2876,\"end\":2913,\"name\":\"PUSH\",\"value\":\"C9604C75D678DF930C19BFD4D59E4405C566D233922FB2F3E1F6904F66DF5350\"},{\"begin\":2876,\"end\":2913,\"name\":\"SWAP2\"},{\"begin\":2876,\"end\":2913,\"name\":\"LOG3\"},{\"begin\":2647,\"end\":2921,\"name\":\"POP\"},{\"begin\":2647,\"end\":2921,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":2933,\"end\":3172,\"name\":\"tag\",\"value\":\"38\"},{\"begin\":2933,\"end\":3172,\"name\":\"JUMPDEST\"},{\"begin\":3233,\"end\":3243,\"name\":\"CALLER\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3232,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3225,\"end\":3244,\"name\":\"DUP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"MSTORE\"},{\"begin\":3225,\"end\":3244,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP1\"},{\"begin\":3225,\"end\":3244,\"name\":\"SWAP2\"},{\"begin\":3225,\"end\":3244,\"name\":\"KECCAK256\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"5\"},{\"begin\":3225,\"end\":3253,\"name\":\"ADD\"},{\"begin\":3225,\"end\":3253,\"name\":\"SLOAD\"},{\"begin\":3225,\"end\":3253,\"name\":\"PUSH\",\"value\":\"FF\"},{\"begin\":3225,\"end\":3253,\"name\":\"AND\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"ISZERO\"},{\"begin\":3225,\"end\":3261,\"name\":\"EQ\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH [tag]\",\"value\":\"90\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPI\"},{\"begin\":3217,\"end\":3262,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3217,\"end\":3262,\"name\":\"DUP1\"},{\"begin\":3217,\"end\":3262,\"name\":\"REVERT\"},{\"begin\":3217,\"end\":3262,\"name\":\"tag\",\"value\":\"90\"},{\"begin\":3217,\"end\":3262,\"name\":\"JUMPDEST\"},{\"begin\":3026,\"end\":3036,\"name\":\"CALLER\"},{\"begin\":3018,\"end\":3037,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":3018,\"end\":3037,\"name\":\"DUP2\"},{\"begin\":3018,\"end\":3037,\"name\":\"DUP2\"},{\"begin\":3018,\"end\":3037,\"name\":\"MSTORE\"},{\"begin\":3018,\"end\":3025,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":3018,\"end\":3037,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":3018,\"end\":3037,\"name\":\"SWAP1\"},{\"begin\":3018,\"end\":3037,\"name\":\"DUP2\"},{\"begin\":3018,\"end\":3037,\"name\":\"MSTORE\"},{\"begin\":3018,\"end\":3037,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":3018,\"end\":3037,\"name\":\"SWAP2\"},{\"begin\":3018,\"end\":3037,\"name\":\"DUP3\"},{\"begin\":3018,\"end\":3037,\"name\":\"SWAP1\"},{\"begin\":3018,\"end\":3037,\"name\":\"KECCAK256\"},{\"begin\":3018,\"end\":3042,\"name\":\"PUSH\",\"value\":\"2\"},{\"begin\":3018,\"end\":3042,\"name\":\"DUP2\"},{\"begin\":3018,\"end\":3042,\"name\":\"ADD\"},{\"begin\":3018,\"end\":3049,\"name\":\"DUP7\"},{\"begin\":3018,\"end\":3049,\"name\":\"SWAP1\"},{\"begin\":3018,\"end\":3049,\"name\":\"SSTORE\"},{\"begin\":3060,\"end\":3089,\"name\":\"PUSH\",\"value\":\"3\"},{\"begin\":3060,\"end\":3089,\"name\":\"ADD\"},{\"begin\":3060,\"end\":3101,\"name\":\"DUP5\"},{\"begin\":3060,\"end\":3101,\"name\":\"SWAP1\"},{\"begin\":3060,\"end\":3101,\"name\":\"SSTORE\"},{\"begin\":3117,\"end\":3164,\"name\":\"DUP2\"},{\"begin\":3117,\"end\":3164,\"name\":\"MLOAD\"},{\"begin\":3117,\"end\":3164,\"name\":\"DUP6\"},{\"begin\":3117,\"end\":3164,\"name\":\"DUP2\"},{\"begin\":3117,\"end\":3164,\"name\":\"MSTORE\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP1\"},{\"begin\":3117,\"end\":3164,\"name\":\"DUP2\"},{\"begin\":3117,\"end\":3164,\"name\":\"ADD\"},{\"begin\":3117,\"end\":3164,\"name\":\"DUP5\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP1\"},{\"begin\":3117,\"end\":3164,\"name\":\"MSTORE\"},{\"begin\":3117,\"end\":3164,\"name\":\"DUP2\"},{\"begin\":3117,\"end\":3164,\"name\":\"MLOAD\"},{\"begin\":3117,\"end\":3164,\"name\":\"PUSH\",\"value\":\"E5C28BC6808510C2214F5471AE5C449E5322279FFD1A5FC79BA6FD6FE6F592DD\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP3\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP2\"},{\"begin\":3117,\"end\":3164,\"name\":\"DUP2\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP1\"},{\"begin\":3117,\"end\":3164,\"name\":\"SUB\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP1\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP2\"},{\"begin\":3117,\"end\":3164,\"name\":\"ADD\"},{\"begin\":3117,\"end\":3164,\"name\":\"SWAP1\"},{\"begin\":3117,\"end\":3164,\"name\":\"LOG2\"},{\"begin\":2933,\"end\":3172,\"name\":\"POP\"},{\"begin\":2933,\"end\":3172,\"name\":\"POP\"},{\"begin\":2933,\"end\":3172,\"name\":\"JUMP\",\"value\":\"[out]\"},{\"begin\":28,\"end\":3437,\"name\":\"tag\",\"value\":\"58\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMPDEST\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"MLOAD\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"C0\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP2\"},{\"begin\":28,\"end\":3437,\"name\":\"ADD\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP3\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP1\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP3\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP3\"},{\"begin\":28,\"end\":3437,\"name\":\"ADD\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP2\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP2\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP2\"},{\"begin\":28,\"end\":3437,\"name\":\"ADD\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP3\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"60\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP2\"},{\"begin\":28,\"end\":3437,\"name\":\"ADD\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP3\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP2\"},{\"begin\":28,\"end\":3437,\"name\":\"ADD\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP3\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"PUSH\",\"value\":\"A0\"},{\"begin\":28,\"end\":3437,\"name\":\"DUP2\"},{\"begin\":28,\"end\":3437,\"name\":\"ADD\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP2\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP2\"},{\"begin\":28,\"end\":3437,\"name\":\"MSTORE\"},{\"begin\":28,\"end\":3437,\"name\":\"SWAP1\"},{\"begin\":28,\"end\":3437,\"name\":\"JUMP\",\"value\":\"[out]\"}]}}},\"bytecode\":\"608060405234801561001057600080fd5b50610900806100206000396000f3006080604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166308ae4b0c811461009d5780630a5dc5a9146100f35780632c4ac770146101165780635b419a651461017f578063661b90651461019a5780636fbd6f6b146101df578063a414b37914610200578063a8e70dd314610221578063f24113c614610242575b600080fd5b3480156100a957600080fd5b506100be600160a060020a036004351661025d565b6040805196875260208701959095528585019390935260608501919091526080840152151560a0830152519081900360c00190f35b3480156100ff57600080fd5b50610114600160a060020a0360043516610296565b005b34801561012257600080fd5b5060408051602060046024803582810135601f8101859004850286018501909652858552610114958335600160a060020a0316953695604494919390910191908190840183828082843750949750509335945061034e9350505050565b34801561018b57600080fd5b506101146004356024356104b3565b3480156101a657600080fd5b506101bb600160a060020a0360043516610553565b604051808260038111156101cb57fe5b60ff16815260200191505060405180910390f35b3480156101eb57600080fd5b50610114600160a060020a03600435166105a1565b34801561020c57600080fd5b50610114600160a060020a0360043516610676565b34801561022d57600080fd5b50610114600160a060020a0360043516610766565b34801561024e57600080fd5b5061011460043560243561081e565b60016020819052600091825260409091208054918101546002820154600383015460048401546005909401549293919290919060ff1686565b3360009081526001602081905260409091206005015460ff161515146102bb57600080fd5b600233600090815260208181526040808320600160a060020a038616845290915290205460ff1660038111156102ed57fe5b146102f757600080fd5b33600081815260208181526040808320600160a060020a0386168085529252808320805460ff19166003179055519092917f94a60cbe32dccf41af4ceafb3df23a95e3a69d5785b4ac14069c3357ea3349e791a350565b3360009081526001602081905260409091206005015460ff1615151461037357600080fd5b6002600160a060020a03841660009081526020818152604080832033845290915290205460ff1660038111156103a557fe5b146103af57600080fd5b600160a060020a03831660009081526001602052604090206004015415156103f157600160a060020a0383166000908152600160205260409020436004909101555b82600160a060020a031633600160a060020a03167f5e18da76639999310aa46ddb25f79298368aa8e7d710765328a5176b263cbb3d848460405180806020018360001916600019168152602001828103825284818151815260200191508051906020019080838360005b8381101561047357818101518382015260200161045b565b50505050905090810190601f1680156104a05780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3505050565b6104bb61089f565b3360009081526001602052604090206005015460ff16156104db57600080fd5b506040805160c081018252928352602080840192835260008483018181526060860182815260808701838152600160a089018181523386529581905295909320965187559451938601939093559151600285015591516003840155516004830155516005909101805460ff1916911515919091179055565b33600090815260016020819052604082206005015460ff1615151461057757600080fd5b5033600090815260208181526040808320600160a060020a03949094168352929052205460ff1690565b3360009081526001602081905260409091206005015460ff161515146105c657600080fd5b6001600160a060020a03821660009081526020818152604080832033845290915290205460ff1660038111156105f857fe5b1461060257600080fd5b33600081815260208181526040808320600160a060020a0386168085529083528184208054600260ff199182168117909255858552838620878752909452828520805490941617909255519092917f47a21261971f27f6b8f9d4544c161e5460ea140246e78c519e951b39a877f38891a350565b3360009081526001602081905260409091206005015460ff1615151461069b57600080fd5b33600090815260208181526040808320600160a060020a038516845290915281205460ff1660038111156106cb57fe5b146106d557600080fd5b600160a060020a03811660009081526020818152604080832033845290915281205460ff16600381111561070557fe5b1461070f57600080fd5b33600081815260208181526040808320600160a060020a0386168085529252808320805460ff19166001179055519092917f2e79a42d9626443e3bf4e774b989fe2179b483f037cbfc7e7ea48fa29b8f526791a350565b3360009081526001602081905260409091206005015460ff1615151461078b57600080fd5b600333600090815260208181526040808320600160a060020a038616845290915290205460ff1660038111156107bd57fe5b146107c757600080fd5b33600081815260208181526040808320600160a060020a0386168085529252808320805460ff19166002179055519092917fc9604c75d678df930c19bfd4d59e4405c566d233922fb2f3e1f6904f66df535091a350565b3360009081526001602081905260409091206005015460ff1615151461084357600080fd5b3360008181526001602090815260409182902060028101869055600301849055815185815290810184905281517fe5c28bc6808510c2214f5471ae5c449e5322279ffd1a5fc79ba6fd6fe6f592dd929181900390910190a25050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152905600a165627a7a7230582009708a9d3d609c1a4e6d0f5ac71acf021c3ca9419bcb6650fd9cbf70ff0515670029\",\"functionHashes\":{\"acceptContactRequest(address)\":\"6fbd6f6b\",\"addContact(address)\":\"a414b379\",\"blockMessagesFrom(address)\":\"0a5dc5a9\",\"getRelationWith(address)\":\"661b9065\",\"join(bytes32,bytes32)\":\"5b419a65\",\"members(address)\":\"08ae4b0c\",\"sendMessage(address,bytes,bytes32)\":\"2c4ac770\",\"unblockMessagesFrom(address)\":\"a8e70dd3\",\"updateProfile(bytes32,bytes32)\":\"f24113c6\"},\"gasEstimates\":{\"creation\":[493,460800],\"external\":{\"acceptContactRequest(address)\":43421,\"addContact(address)\":23545,\"blockMessagesFrom(address)\":22974,\"getRelationWith(address)\":1127,\"join(bytes32,bytes32)\":76234,\"members(address)\":1726,\"sendMessage(address,bytes,bytes32)\":null,\"unblockMessagesFrom(address)\":23106,\"updateProfile(bytes32,bytes32)\":42462},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"members\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"publicKeyLeft\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"publicKeyRight\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"avatarUrl\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"messageStartBlock\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"isMember\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"blockMessagesFrom\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"message\\\",\\\"type\\\":\\\"bytes\\\"},{\\\"name\\\":\\\"encryption\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"sendMessage\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"publicKeyLeft\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"publicKeyRight\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"join\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"a\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getRelationWith\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"acceptContactRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"addContact\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"unblockMessagesFrom\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"avatarUrl\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"updateProfile\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"message\\\",\\\"type\\\":\\\"bytes\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"encryption\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"messageSentEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"addContactEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"acceptContactEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"avatarUrl\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"profileUpdateEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"blockContactEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"unblockContactEvent\\\",\\\"type\\\":\\\"event\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.26+commit.4563c3fc\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"members\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"publicKeyLeft\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"publicKeyRight\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"avatarUrl\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"messageStartBlock\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"isMember\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"blockMessagesFrom\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"message\\\",\\\"type\\\":\\\"bytes\\\"},{\\\"name\\\":\\\"encryption\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"sendMessage\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"publicKeyLeft\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"publicKeyRight\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"join\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"a\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getRelationWith\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"acceptContactRequest\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"addContact\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"unblockMessagesFrom\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"name\\\":\\\"avatarUrl\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"updateProfile\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"message\\\",\\\"type\\\":\\\"bytes\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"encryption\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"messageSentEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"addContactEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"acceptContactEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"name\\\",\\\"type\\\":\\\"bytes32\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"avatarUrl\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"profileUpdateEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"blockContactEvent\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"unblockContactEvent\\\",\\\"type\\\":\\\"event\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"\\\":\\\"EtherChat\\\"},\\\"evmVersion\\\":\\\"byzantium\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"\\\":{\\\"keccak256\\\":\\\"0xfae7bf182ecae4e32ca9938054c40b45c2020db5356bf5cd9340764c3f1c94fd\\\",\\\"urls\\\":[\\\"bzzr://6b105d6e8212df7e768a981951d82a0611732f6b288de58d8f3db005263c0cc2\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x900 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x98 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x8AE4B0C DUP2 EQ PUSH2 0x9D JUMPI DUP1 PUSH4 0xA5DC5A9 EQ PUSH2 0xF3 JUMPI DUP1 PUSH4 0x2C4AC770 EQ PUSH2 0x116 JUMPI DUP1 PUSH4 0x5B419A65 EQ PUSH2 0x17F JUMPI DUP1 PUSH4 0x661B9065 EQ PUSH2 0x19A JUMPI DUP1 PUSH4 0x6FBD6F6B EQ PUSH2 0x1DF JUMPI DUP1 PUSH4 0xA414B379 EQ PUSH2 0x200 JUMPI DUP1 PUSH4 0xA8E70DD3 EQ PUSH2 0x221 JUMPI DUP1 PUSH4 0xF24113C6 EQ PUSH2 0x242 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xA9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x25D JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP7 DUP8 MSTORE PUSH1 0x20 DUP8 ADD SWAP6 SWAP1 SWAP6 MSTORE DUP6 DUP6 ADD SWAP4 SWAP1 SWAP4 MSTORE PUSH1 0x60 DUP6 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x80 DUP5 ADD MSTORE ISZERO ISZERO PUSH1 0xA0 DUP4 ADD MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0xC0 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xFF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x296 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x122 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x4 PUSH1 0x24 DUP1 CALLDATALOAD DUP3 DUP2 ADD CALLDATALOAD PUSH1 0x1F DUP2 ADD DUP6 SWAP1 DIV DUP6 MUL DUP7 ADD DUP6 ADD SWAP1 SWAP7 MSTORE DUP6 DUP6 MSTORE PUSH2 0x114 SWAP6 DUP4 CALLDATALOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP6 CALLDATASIZE SWAP6 PUSH1 0x44 SWAP5 SWAP2 SWAP4 SWAP1 SWAP2 ADD SWAP2 SWAP1 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP POP SWAP4 CALLDATALOAD SWAP5 POP PUSH2 0x34E SWAP4 POP POP POP POP JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x18B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH1 0x4 CALLDATALOAD PUSH1 0x24 CALLDATALOAD PUSH2 0x4B3 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1A6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1BB PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x553 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x1CB JUMPI INVALID JUMPDEST PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1EB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x5A1 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x20C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x676 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x22D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x766 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x24E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x114 PUSH1 0x4 CALLDATALOAD PUSH1 0x24 CALLDATALOAD PUSH2 0x81E JUMP JUMPDEST PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 DUP1 SLOAD SWAP2 DUP2 ADD SLOAD PUSH1 0x2 DUP3 ADD SLOAD PUSH1 0x3 DUP4 ADD SLOAD PUSH1 0x4 DUP5 ADD SLOAD PUSH1 0x5 SWAP1 SWAP5 ADD SLOAD SWAP3 SWAP4 SWAP2 SWAP3 SWAP1 SWAP2 SWAP1 PUSH1 0xFF AND DUP7 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x2BB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP7 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x2ED JUMPI INVALID JUMPDEST EQ PUSH2 0x2F7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP7 AND DUP1 DUP6 MSTORE SWAP3 MSTORE DUP1 DUP4 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x3 OR SWAP1 SSTORE MLOAD SWAP1 SWAP3 SWAP2 PUSH32 0x94A60CBE32DCCF41AF4CEAFB3DF23A95E3A69D5785B4AC14069C3357EA3349E7 SWAP2 LOG3 POP JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x373 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x3A5 JUMPI INVALID JUMPDEST EQ PUSH2 0x3AF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 PUSH1 0x4 ADD SLOAD ISZERO ISZERO PUSH2 0x3F1 JUMPI PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 NUMBER PUSH1 0x4 SWAP1 SWAP2 ADD SSTORE JUMPDEST DUP3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH32 0x5E18DA76639999310AA46DDB25F79298368AA8E7D710765328A5176B263CBB3D DUP5 DUP5 PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP4 PUSH1 0x0 NOT AND PUSH1 0x0 NOT AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP5 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x473 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x45B JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x4A0 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP4 POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH2 0x4BB PUSH2 0x89F JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x4DB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0xC0 DUP2 ADD DUP3 MSTORE SWAP3 DUP4 MSTORE PUSH1 0x20 DUP1 DUP5 ADD SWAP3 DUP4 MSTORE PUSH1 0x0 DUP5 DUP4 ADD DUP2 DUP2 MSTORE PUSH1 0x60 DUP7 ADD DUP3 DUP2 MSTORE PUSH1 0x80 DUP8 ADD DUP4 DUP2 MSTORE PUSH1 0x1 PUSH1 0xA0 DUP10 ADD DUP2 DUP2 MSTORE CALLER DUP7 MSTORE SWAP6 DUP2 SWAP1 MSTORE SWAP6 SWAP1 SWAP4 KECCAK256 SWAP7 MLOAD DUP8 SSTORE SWAP5 MLOAD SWAP4 DUP7 ADD SWAP4 SWAP1 SWAP4 SSTORE SWAP2 MLOAD PUSH1 0x2 DUP6 ADD SSTORE SWAP2 MLOAD PUSH1 0x3 DUP5 ADD SSTORE MLOAD PUSH1 0x4 DUP4 ADD SSTORE MLOAD PUSH1 0x5 SWAP1 SWAP2 ADD DUP1 SLOAD PUSH1 0xFF NOT AND SWAP2 ISZERO ISZERO SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 DUP3 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x577 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP5 SWAP1 SWAP5 AND DUP4 MSTORE SWAP3 SWAP1 MSTORE KECCAK256 SLOAD PUSH1 0xFF AND SWAP1 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x5C6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x5F8 JUMPI INVALID JUMPDEST EQ PUSH2 0x602 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP7 AND DUP1 DUP6 MSTORE SWAP1 DUP4 MSTORE DUP2 DUP5 KECCAK256 DUP1 SLOAD PUSH1 0x2 PUSH1 0xFF NOT SWAP2 DUP3 AND DUP2 OR SWAP1 SWAP3 SSTORE DUP6 DUP6 MSTORE DUP4 DUP7 KECCAK256 DUP8 DUP8 MSTORE SWAP1 SWAP5 MSTORE DUP3 DUP6 KECCAK256 DUP1 SLOAD SWAP1 SWAP5 AND OR SWAP1 SWAP3 SSTORE MLOAD SWAP1 SWAP3 SWAP2 PUSH32 0x47A21261971F27F6B8F9D4544C161E5460EA140246E78C519E951B39A877F388 SWAP2 LOG3 POP JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x69B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP6 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE DUP2 KECCAK256 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x6CB JUMPI INVALID JUMPDEST EQ PUSH2 0x6D5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 CALLER DUP5 MSTORE SWAP1 SWAP2 MSTORE DUP2 KECCAK256 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x705 JUMPI INVALID JUMPDEST EQ PUSH2 0x70F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP7 AND DUP1 DUP6 MSTORE SWAP3 MSTORE DUP1 DUP4 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE MLOAD SWAP1 SWAP3 SWAP2 PUSH32 0x2E79A42D9626443E3BF4E774B989FE2179B483F037CBFC7E7EA48FA29B8F5267 SWAP2 LOG3 POP JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x78B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x3 CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP7 AND DUP5 MSTORE SWAP1 SWAP2 MSTORE SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x7BD JUMPI INVALID JUMPDEST EQ PUSH2 0x7C7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP7 AND DUP1 DUP6 MSTORE SWAP3 MSTORE DUP1 DUP4 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x2 OR SWAP1 SSTORE MLOAD SWAP1 SWAP3 SWAP2 PUSH32 0xC9604C75D678DF930C19BFD4D59E4405C566D233922FB2F3E1F6904F66DF5350 SWAP2 LOG3 POP JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 PUSH1 0x5 ADD SLOAD PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x843 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP2 DUP3 SWAP1 KECCAK256 PUSH1 0x2 DUP2 ADD DUP7 SWAP1 SSTORE PUSH1 0x3 ADD DUP5 SWAP1 SSTORE DUP2 MLOAD DUP6 DUP2 MSTORE SWAP1 DUP2 ADD DUP5 SWAP1 MSTORE DUP2 MLOAD PUSH32 0xE5C28BC6808510C2214F5471AE5C449E5322279FFD1A5FC79BA6FD6FE6F592DD SWAP3 SWAP2 DUP2 SWAP1 SUB SWAP1 SWAP2 ADD SWAP1 LOG2 POP POP JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0xC0 DUP2 ADD DUP3 MSTORE PUSH1 0x0 DUP1 DUP3 MSTORE PUSH1 0x20 DUP3 ADD DUP2 SWAP1 MSTORE SWAP2 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0x60 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0x80 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0xA0 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 MULMOD PUSH17 0x8A9D3D609C1A4E6D0F5AC71ACF021C3CA9 COINBASE SWAP12 0xcb PUSH7 0x50FD9CBF70FF05 ISZERO PUSH8 0x29000000000000 \",\"runtimeBytecode\":\"6080604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166308ae4b0c811461009d5780630a5dc5a9146100f35780632c4ac770146101165780635b419a651461017f578063661b90651461019a5780636fbd6f6b146101df578063a414b37914610200578063a8e70dd314610221578063f24113c614610242575b600080fd5b3480156100a957600080fd5b506100be600160a060020a036004351661025d565b6040805196875260208701959095528585019390935260608501919091526080840152151560a0830152519081900360c00190f35b3480156100ff57600080fd5b50610114600160a060020a0360043516610296565b005b34801561012257600080fd5b5060408051602060046024803582810135601f8101859004850286018501909652858552610114958335600160a060020a0316953695604494919390910191908190840183828082843750949750509335945061034e9350505050565b34801561018b57600080fd5b506101146004356024356104b3565b3480156101a657600080fd5b506101bb600160a060020a0360043516610553565b604051808260038111156101cb57fe5b60ff16815260200191505060405180910390f35b3480156101eb57600080fd5b50610114600160a060020a03600435166105a1565b34801561020c57600080fd5b50610114600160a060020a0360043516610676565b34801561022d57600080fd5b50610114600160a060020a0360043516610766565b34801561024e57600080fd5b5061011460043560243561081e565b60016020819052600091825260409091208054918101546002820154600383015460048401546005909401549293919290919060ff1686565b3360009081526001602081905260409091206005015460ff161515146102bb57600080fd5b600233600090815260208181526040808320600160a060020a038616845290915290205460ff1660038111156102ed57fe5b146102f757600080fd5b33600081815260208181526040808320600160a060020a0386168085529252808320805460ff19166003179055519092917f94a60cbe32dccf41af4ceafb3df23a95e3a69d5785b4ac14069c3357ea3349e791a350565b3360009081526001602081905260409091206005015460ff1615151461037357600080fd5b6002600160a060020a03841660009081526020818152604080832033845290915290205460ff1660038111156103a557fe5b146103af57600080fd5b600160a060020a03831660009081526001602052604090206004015415156103f157600160a060020a0383166000908152600160205260409020436004909101555b82600160a060020a031633600160a060020a03167f5e18da76639999310aa46ddb25f79298368aa8e7d710765328a5176b263cbb3d848460405180806020018360001916600019168152602001828103825284818151815260200191508051906020019080838360005b8381101561047357818101518382015260200161045b565b50505050905090810190601f1680156104a05780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3505050565b6104bb61089f565b3360009081526001602052604090206005015460ff16156104db57600080fd5b506040805160c081018252928352602080840192835260008483018181526060860182815260808701838152600160a089018181523386529581905295909320965187559451938601939093559151600285015591516003840155516004830155516005909101805460ff1916911515919091179055565b33600090815260016020819052604082206005015460ff1615151461057757600080fd5b5033600090815260208181526040808320600160a060020a03949094168352929052205460ff1690565b3360009081526001602081905260409091206005015460ff161515146105c657600080fd5b6001600160a060020a03821660009081526020818152604080832033845290915290205460ff1660038111156105f857fe5b1461060257600080fd5b33600081815260208181526040808320600160a060020a0386168085529083528184208054600260ff199182168117909255858552838620878752909452828520805490941617909255519092917f47a21261971f27f6b8f9d4544c161e5460ea140246e78c519e951b39a877f38891a350565b3360009081526001602081905260409091206005015460ff1615151461069b57600080fd5b33600090815260208181526040808320600160a060020a038516845290915281205460ff1660038111156106cb57fe5b146106d557600080fd5b600160a060020a03811660009081526020818152604080832033845290915281205460ff16600381111561070557fe5b1461070f57600080fd5b33600081815260208181526040808320600160a060020a0386168085529252808320805460ff19166001179055519092917f2e79a42d9626443e3bf4e774b989fe2179b483f037cbfc7e7ea48fa29b8f526791a350565b3360009081526001602081905260409091206005015460ff1615151461078b57600080fd5b600333600090815260208181526040808320600160a060020a038616845290915290205460ff1660038111156107bd57fe5b146107c757600080fd5b33600081815260208181526040808320600160a060020a0386168085529252808320805460ff19166002179055519092917fc9604c75d678df930c19bfd4d59e4405c566d233922fb2f3e1f6904f66df535091a350565b3360009081526001602081905260409091206005015460ff1615151461084357600080fd5b3360008181526001602090815260409182902060028101869055600301849055815185815290810184905281517fe5c28bc6808510c2214f5471ae5c449e5322279ffd1a5fc79ba6fd6fe6f592dd929181900390910190a25050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152905600a165627a7a7230582009708a9d3d609c1a4e6d0f5ac71acf021c3ca9419bcb6650fd9cbf70ff0515670029\",\"srcmap\":\"28:3409:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:3409:0;;;;;;;\",\"srcmapRuntime\":\"28:3409:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;904:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;904:42:0;-1:-1:-1;;;;;904:42:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2365:270;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2365:270:0;-1:-1:-1;;;;;2365:270:0;;;;;;;1978:375;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1978:375:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1978:375:0;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1978:375:0;;-1:-1:-1;;1978:375:0;;;-1:-1:-1;1978:375:0;;-1:-1:-1;;;;1978:375:0;1690:276;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1690:276:0;;;;;;;3294:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3294:140:0;-1:-1:-1;;;;;3294:140:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1321:357;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1321:357:0;-1:-1:-1;;;;;1321:357:0;;;;;959:354;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;959:354:0;-1:-1:-1;;;;;959:354:0;;;;;2647:274;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2647:274:0;-1:-1:-1;;;;;2647:274:0;;;;;2933:239;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2933:239:0;;;;;;;904:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2365:270::-;3233:10;3225:19;;;;:7;:19;;;;;;;;:28;;;;;:36;;;3217:45;;;;;;2478:26;2457:10;2443:13;:25;;;;;;;;;;;-1:-1:-1;;;;;2443:31:0;;;;;;;;;;;;:61;;;;;;;;;2435:70;;;;;;2532:10;2518:13;:25;;;;;;;;;;;-1:-1:-1;;;;;2518:31:0;;;;;;;;;;:58;;-1:-1:-1;;2518:58:0;2552:24;2518:58;;;2592:35;2518:31;;2532:10;2592:35;;;2365:270;:::o;1978:375::-;3233:10;3225:19;;;;:7;:19;;;;;;;;:28;;;;;:36;;;3217:45;;;;;;2116:26;-1:-1:-1;;;;;2083:17:0;;:13;:17;;;;;;;;;;;2101:10;2083:29;;;;;;;;;;:59;;;;;;;;;2075:68;;;;;;-1:-1:-1;;;;;2160:11:0;;;;;;:7;:11;;;;;:29;;;:34;2156:111;;;-1:-1:-1;;;;;2211:11:0;;;;;;:7;:11;;;;;2243:12;2211:29;;;;:44;2156:111;2321:2;-1:-1:-1;;;;;2292:53:0;2309:10;-1:-1:-1;;;;;2292:53:0;;2325:7;2334:10;2292:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;2292:53:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1978:375;;;:::o;1690:276::-;1836:23;;:::i;:::-;1785:10;1777:19;;;;:7;:19;;;;;:28;;;;;:37;1769:46;;;;;;-1:-1:-1;1862:54:0;;;;;;;;;;;;;;;;;;-1:-1:-1;1862:54:0;;;;;;;;;;;;;;;;;;1911:4;1862:54;;;;;;1935:10;1927:19;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1927:31:0;;;;;;;;;;1690:276::o;3294:140::-;3233:10;3362:16;3225:19;;;:7;:19;;;;;;;:28;;;;;:36;;;3217:45;;;;;;-1:-1:-1;3412:10:0;3398:13;:25;;;;;;;;;;;-1:-1:-1;;;;;3398:28:0;;;;;;;;;;;;;;3294:140::o;1321:357::-;3233:10;3225:19;;;;:7;:19;;;;;;;;:28;;;;;:36;;;3217:45;;;;;;1437:26;-1:-1:-1;;;;;1402:19:0;;:13;:19;;;;;;;;;;;1422:10;1402:31;;;;;;;;;;:61;;;;;;;;;1394:70;;;;;;1499:10;1485:13;:25;;;;;;;;;;;-1:-1:-1;;;;;1485:31:0;;;;;;;;;;;:60;;1519:26;-1:-1:-1;;1485:60:0;;;;;;;;1556:19;;;;;;:31;;;;;;;;;:60;;;;;;;;;1634:36;1485:31;;1499:10;1634:36;;;1321:357;:::o;959:354::-;3233:10;3225:19;;;;:7;:19;;;;;;;;:28;;;;;:36;;;3217:45;;;;;;1044:10;1065:27;1030:25;;;;;;;;;;;-1:-1:-1;;;;;1030:31:0;;;;;;;;;;;;:62;;;;;;;;;1022:71;;;;;;-1:-1:-1;;;;;1112:19:0;;1147:27;1112:19;;;;;;;;;;;1132:10;1112:31;;;;;;;;;;:62;;;;;;;;;1104:71;;;;;;1210:10;1196:13;:25;;;;;;;;;;;-1:-1:-1;;;;;1196:31:0;;;;;;;;;;:60;;-1:-1:-1;;1196:60:0;1230:26;1196:60;;;1272:33;1196:31;;1210:10;1272:33;;;959:354;:::o;2647:274::-;3233:10;3225:19;;;;:7;:19;;;;;;;;:28;;;;;:36;;;3217:45;;;;;;2762:24;2741:10;2727:13;:25;;;;;;;;;;;-1:-1:-1;;;;;2727:31:0;;;;;;;;;;;;:59;;;;;;;;;2719:68;;;;;;2814:10;2800:13;:25;;;;;;;;;;;-1:-1:-1;;;;;2800:31:0;;;;;;;;;;:60;;-1:-1:-1;;2800:60:0;2834:26;2800:60;;;2876:37;2800:31;;2814:10;2876:37;;;2647:274;:::o;2933:239::-;3233:10;3225:19;;;;:7;:19;;;;;;;;:28;;;;;:36;;;3217:45;;;;;;3026:10;3018:19;;;;:7;:19;;;;;;;;;:24;;;:31;;;3060:29;;:41;;;3117:47;;;;;;;;;;;;;;;;;;;;;;;;2933:239;;:::o;28:3409::-;;;;;;;;;-1:-1:-1;28:3409:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o\"}");

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_1__);


let web3;
const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(_support_Config__WEBPACK_IMPORTED_MODULE_1___default.a.ENV.ProviderUrl);
web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_HeaderMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/HeaderMenu */ "./views/HeaderMenu.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _views_modals_EnterPrivateKeyModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/modals/EnterPrivateKeyModal */ "./views/modals/EnterPrivateKeyModal.js");
/* harmony import */ var _views_modals_UpdateProfileModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/modals/UpdateProfileModal */ "./views/modals/UpdateProfileModal.js");
/* harmony import */ var _views_modals_GuideModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/modals/GuideModal */ "./views/modals/GuideModal.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_AppManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/AppManager */ "./core/AppManager.js");
/* harmony import */ var _views_ContactList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/ContactList */ "./views/ContactList.js");
/* harmony import */ var _views_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/Chat */ "./views/Chat.js");
/* harmony import */ var _views_modals_ErrorModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/modals/ErrorModal */ "./views/modals/ErrorModal.js");
/* harmony import */ var _views_modals_SettingsModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/modals/SettingsModal */ "./views/modals/SettingsModal.js");
/* harmony import */ var _views_modals_TransactionModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/modals/TransactionModal */ "./views/modals/TransactionModal.js");
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/Footer */ "./views/Footer.js");
var _jsxFileName = "D:\\BlockChat\\BlockChat\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      contactList: [],
      messages: [],
      selectedContact: ""
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.app = new _core_AppManager__WEBPACK_IMPORTED_MODULE_8__["default"]();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  UNSAFE_componentWillMount() {
    this.app.initialize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    var account = this.app.account;
    var contractManager = this.app.contractManager;
    var transactionDispatcher = this.app.getTransactionDispatcher();
    var listHeight = this.state.height - 140;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
    }, "BlockChat - Decentralized messaging on Ethereum network")), __jsx(_views_modals_UpdateProfileModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      account: account,
      contractManager: contractManager,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx(_views_modals_EnterPrivateKeyModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      account: account,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx(_views_HeaderMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      account: account,
      transactionDispatcher: transactionDispatcher,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx(_views_modals_GuideModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx(_views_modals_ErrorModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), __jsx(_views_modals_SettingsModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      account: account,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx(_views_modals_TransactionModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
      dispatcher: transactionDispatcher,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      column: 2,
      style: {
        paddingTop: 100
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      stretched: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 6,
      style: {
        height: listHeight + "px",
        float: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_views_ContactList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      height: listHeight,
      account: account,
      contractManager: contractManager,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 10,
      style: {
        height: listHeight + "px",
        overflow: 'auto',
        float: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(_views_Chat__WEBPACK_IMPORTED_MODULE_10__["default"], {
      height: listHeight,
      account: account,
      contractManager: contractManager,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })))), __jsx(_views_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./support/Config.js":
/*!***************************!*\
  !*** ./support/Config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.NETWORK_LIST = [{
  id: 1,
  name: 'Main Network',
  contractAddress: '0x163485b3cddc7b3202e56ad31fb1921a00759f21',
  explorerUrl: 'https://etherscan.io/',
  providerUrl: 'https://mainnet.infura.io/Q2aBIgYNhIB60VsqyrN1'
}, {
  id: 2,
  name: 'Ropsten Test Net',
  contractAddress: '0x97e1dc3169a01b51b6d7d7e11c14308ead4692e2',
  explorerUrl: 'https://ropsten.etherscan.io/',
  providerUrl: 'https://ropsten.infura.io/v3/10330c483afc4a93a939de9dac39939d'
}, {
  id: 4,
  name: 'Rinkeby Test Net',
  contractAddress: '0xa8d27Eda6518Ac6CcF3eb7Ec100B1fc8ef850e80',
  explorerUrl: 'https://rinkeby.etherscan.io/',
  providerUrl: 'https://rinkeby.infura.io/v3/10330c483afc4a93a939de9dac39939d'
}];
module.exports.ENV = {
  get ContractAddress() {
    if (typeof Storage !== 'undefined' && window.localStorage.ethNetwork != undefined) {
      var network = parseInt(window.localStorage.ethNetwork);

      for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
        if (network == module.exports.NETWORK_LIST[i].id) {
          return module.exports.NETWORK_LIST[i].contractAddress;
        }
      }
    } else {
      return "";
    }
  },

  get NetworkName() {
    if (typeof Storage !== 'undefined' && window.localStorage.ethNetwork != undefined) {
      var network = parseInt(window.localStorage.ethNetwork);

      for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
        if (network == module.exports.NETWORK_LIST[i].id) {
          return module.exports.NETWORK_LIST[i].name;
        }
      }
    } else {
      return "";
    }
  },

  get ProviderUrl() {
    if (typeof Storage !== 'undefined' && window.localStorage.ethNetwork != undefined) {
      var network = parseInt(window.localStorage.ethNetwork);

      for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
        if (network == module.exports.NETWORK_LIST[i].id) {
          return module.exports.NETWORK_LIST[i].providerUrl;
        }
      }
    } else {
      return module.exports.NETWORK_LIST[0].providerUrl;
    }
  },

  get ExplorerUrl() {
    if (typeof Storage !== 'undefined' && window.localStorage.ethNetwork != undefined) {
      var network = parseInt(window.localStorage.ethNetwork);

      for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
        if (network == module.exports.NETWORK_LIST[i].id) {
          return module.exports.NETWORK_LIST[i].explorerUrl;
        }
      }
    } else {
      return module.exports.NETWORK_LIST[0].explorerUrl;
    }
  },

  set EthNetworkId(networkId) {
    if (typeof Storage != 'undefined') {
      window.localStorage.setItem('ethNetwork', networkId);
    }
  },

  get EthNetworkId() {
    if (typeof Storage !== 'undefined' || window.localStorage.ethNetwork == undefined) {
      return parseInt(window.localStorage.ethNetwork);
    } else {
      return 0;
    }
  }

};

/***/ }),

/***/ "./support/Constant.js":
/*!*****************************!*\
  !*** ./support/Constant.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.APP_NAME = "BlockChat";
module.exports.GITHUB_LINK = "#";
module.exports.MEDIUM_LINK = "#";
module.exports.ACTION = {
  ADD_CONTACT: 'ADD_CONTACT_ACTION',
  SELECT_CONTACT: 'SELECT_CONTACT_ACTION',
  OPEN_UPDATE_PROFILE: 'OPEN_UPDATE_PROFILE',
  OPEN_PRIVATE_KEY_MODAL: 'OPEN_PRIVATE_KEY_MODAL',
  OPEN_GUIDE: 'OPEN_GUIDE',
  OPEN_SETTINGS_MODAL: 'OPEN_SETTINGS_MODAL',
  OPEN_TRANSACTION_MODAL: 'OPEN_TRANSACTION_MODAL',
  REJECT_TRANSACTION: 'REJECT_TRANSACTION',
  APPROVE_TRANSACTION: 'APRROVE_TRANSACTION'
};
module.exports.EVENT = {
  CONTRACT_READY: 'CONTRACT_READY',
  CONTACT_LIST_UPDATED: 'CONTACT_LIST_UPDATED',
  MESSAGES_UPDATED: 'MESSAGES_UPDATED',
  ACCOUNT_BALANCE_UPDATED: 'ACCOUNT_BALANCE_UPDATED',
  ACCOUNT_INFO_UPDATED: 'ACCOUNT_INFO_UPDATED',
  PENDING_TRANSACTION_UPDATED: 'PENDING_TRANSACTION_UPDATED',
  ENCOUNTERED_ERROR: 'ENCOUNTERED_ERROR',
  ON_ERROR: 'onError',
  ON_RECEIPT: 'onReceipt',
  ON_APPROVED: 'onApproved',
  ON_REJECTED: 'onRejected'
};
module.exports.SENT_STATUS = {
  PENDING: 1,
  SUCCESS: 2,
  FAILED: 3
};
module.exports.Relationship = {
  NoRelation: 0,
  Requested: 1,
  Connected: 2,
  Blocked: 3
};

/***/ }),

/***/ "./support/Utils.js":
/*!**************************!*\
  !*** ./support/Utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var crypto = __webpack_require__(/*! crypto */ "crypto");

var wallet = __webpack_require__(/*! ethereumjs-wallet */ "ethereumjs-wallet");

var algorithm = 'aes256';

module.exports.getEncryptAlgorithm = () => {
  return algorithm;
};

module.exports.getEncryptAlgorithmInHex = () => {
  return '0x' + Buffer.from(algorithm, 'ascii').toString('hex');
};

module.exports.hexStringToAsciiString = hexString => {
  if (hexString.startsWith('0x')) {
    hexString = hexString.substr(2);
  }

  return Buffer.from(hexString, 'hex').toString('ascii').replace(/\0/g, '');
};

module.exports.privateToPublic = privateKey => {
  var account = crypto.createECDH('secp256k1');
  account.setPrivateKey(privateKey);
  return account.getPublicKey().slice(1);
};

module.exports.computeSecret = (privateKeyFromA, publicKeyFromB) => {
  var A = crypto.createECDH('secp256k1');
  A.setPrivateKey(privateKeyFromA);
  return A.computeSecret(publicKeyFromB);
};

exports.encrypt = (message, secret) => {
  var cipher = crypto.createCipher(algorithm, secret);
  var crypted = cipher.update(message, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

exports.decrypt = (encryptedMessage, secret) => {
  var decipher = crypto.createDecipher(algorithm, secret);
  var dec = decipher.update(encryptedMessage, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}; // exports.getPubkeyFromTransaction = (rawTx) => {
//       var localTx = {
//         nonce: parseInt(rawTx.nonce),
//         gasPrice: parseInt(rawTx.gasPrice),
//         gasLimit: parseInt(rawTx.gas),
//         to: rawTx.to,
//         value: parseInt(rawTx.value),
//         r: rawTx.r,
//         s: rawTx.s,
//         v: rawTx.v,
//         data: rawTx.input,
//       };
//     var txInstance = new Transaction(localTx);
//     return txInstance.getSenderPublicKey().toString('hex');
//   }

/***/ }),

/***/ "./views/Chat.js":
/*!***********************!*\
  !*** ./views/Chat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/Utils */ "./support/Utils.js");
/* harmony import */ var _support_Utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_support_Utils__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\Chat.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Chat extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "sendMessage", message => {
      this.contractManager.sendMessage(this.state.address, this.account.storageManager.contacts[this.state.address].publicKey, message);
    });

    this.account = props.account;
    this.contractManager = props.contractManager;
    this.state = {
      address: "",
      messages: [],
      publicKey: ""
    };
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.lastObjectAnchor != undefined) {
      this.lastObjectAnchor.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  componentDidMount() {
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.SELECT_CONTACT) {
        this.setState({
          address: payload.data,
          publicKey: this.account.storageManager.contacts[payload.data].publicKey,
          messages: this.account.storageManager.contacts[payload.data].messages
        });
      } else if (this.state.address != "" && payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.MESSAGES_UPDATED) {
        if (payload.data == undefined || payload.data == this.state.address) {
          this.setState({
            messages: this.account.storageManager.contacts[this.state.address].messages
          });
        }
      }
    });
  }

  render() {
    const {
      height
    } = this.props;
    const {
      publicKey,
      messages
    } = this.state;
    var messageItems = [];

    if (publicKey) {
      if (messages.length > 0) {
        for (var i = 0; i < messages.length; i++) {
          var decryptedMessage;

          if (messages[i].encryption == 'aes256') {
            decryptedMessage = _support_Utils__WEBPACK_IMPORTED_MODULE_5___default.a.decrypt(messages[i].message.substr(2), this.account.computeSecret(Buffer.from(publicKey, 'hex')));
          } else {
            decryptedMessage = messages[i].message;
          }

          var lastObjectAnchor = __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          });

          if (i == messages.length - 1) {
            lastObjectAnchor = __jsx("span", {
              ref: lastObjectAnchor => {
                this.lastObjectAnchor = lastObjectAnchor;
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            });
          }

          var explorerUrl = _support_Config__WEBPACK_IMPORTED_MODULE_4___default.a.ENV.ExplorerUrl + 'tx/' + messages[i].txHash;

          if (messages[i].isMine) {
            if (messages[i].status == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.SENT_STATUS.PENDING) {
              messageItems.push(__jsx("p", {
                align: "right",
                key: 'msg_' + i,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
                pointing: "right",
                as: "span",
                size: "large",
                color: "blue",
                style: {
                  fontWeight: '100',
                  lineHeight: '1.5'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                name: "circle notched",
                loading: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                },
                __self: this
              }), decryptedMessage, lastObjectAnchor)));
            } else if (messages[i].status == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.SENT_STATUS.FAILED) {
              messageItems.push(__jsx("p", {
                align: "right",
                key: 'msg_' + i,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
                pointing: "right",
                as: "span",
                key: 'msg_' + i,
                size: "large",
                color: "blue",
                style: {
                  fontWeight: '100',
                  lineHeight: '1.5'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                name: "warning sign",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                },
                __self: this
              }), decryptedMessage, lastObjectAnchor)));
            } else {
              messageItems.push(__jsx("p", {
                align: "right",
                key: 'msg_' + i,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: this
              }, __jsx("a", {
                href: explorerUrl,
                target: "_blank",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                },
                __self: this
              }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
                pointing: "right",
                as: "span",
                key: 'msg_' + i,
                size: "large",
                color: "blue",
                style: {
                  fontWeight: '100',
                  lineHeight: '1.5'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                },
                __self: this
              }, decryptedMessage, lastObjectAnchor))));
            }
          } else {
            messageItems.push(__jsx("p", {
              key: 'msg_' + i,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, __jsx("a", {
              href: explorerUrl,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
              pointing: "left",
              as: "span",
              key: 'msg_' + i,
              size: "large",
              style: {
                fontWeight: '100',
                lineHeight: '1.5'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }, decryptedMessage, lastObjectAnchor))));
          }
        }
      } else {
        messageItems.push(__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
          as: "h2",
          textAlign: "center",
          key: "no_messages",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, "No messages"));
      }
    }

    return __jsx("div", {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      style: {
        height: height - 90 + "px",
        width: '100%',
        overflow: 'auto'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, messageItems), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx(TextInput, {
      disabled: this.state.address ? false : true,
      onSend: this.sendMessage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    })));
  }

}

class TextInput extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      disabled: props.disabled,
      content: ""
    };
    this.onSend = props.onSend;
  }

  componentWillReceiveProps(props) {
    this.setState({
      disabled: props.disabled
    });
  }

  sendMessageClicked() {
    if (this.state.content) {
      this.onSend(this.state.content);
      this.setState({
        content: ""
      });
    }
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      fluid: true,
      disabled: this.state.disabled,
      value: this.state.content,
      onChange: e => this.setState({
        content: e.target.value
      }),
      action: {
        color: 'orange',
        labelPosition: 'right',
        icon: 'send',
        content: 'Send',
        onClick: e => this.sendMessageClicked()
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./views/ContactList.js":
/*!******************************!*\
  !*** ./views/ContactList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modals_AddContactModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/AddContactModal */ "./views/modals/AddContactModal.js");
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\ContactList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class ContactList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "addContactClicked", () => {
      if (this.account.isJoined) {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.ADD_CONTACT
        });
      } else {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ENCOUNTERED_ERROR,
          message: 'Please join ' + _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.APP_NAME + ' first by click on the \'Join\' button on the top-right corner'
        });
      }
    });

    _defineProperty(this, "acceptContactRequest", event => {
      if (this.account.isJoined) {
        var address = event.target.value;
        this.account.storageManager.contacts[address].isAccepting = true;
        this.forceUpdate();
        this.contractManager.acceptContactRequest(address, resultEvent => {
          if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ON_REJECTED) {
            this.account.storageManager.contacts[address].isAccepting = false;
            this.forceUpdate();
          } else if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ON_ERROR) {
            this.account.storageManager.contacts[address].isAccepting = false;
            this.forceUpdate();
          } else if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ON_RECEIPT) {
            this.account.storageManager.contacts[address].isAccepting = false;
            this.account.storageManager.contacts[address].relationship = _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.Relationship.Connected;
            this.setState({
              contactAddresses: this.account.storageManager.contactAddresses
            });
          }
        });
      } else {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ENCOUNTERED_ERROR,
          message: 'Please join ' + _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.APP_NAME + ' first by click on the \'Join\' button on the top-right corner'
        });
      }
    });

    _defineProperty(this, "listItemClicked", (address, event) => {
      if (this.account.storageManager.contacts[address].relationship == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.Relationship.Connected && this.account.storageManager.contacts[address].publicKey) {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.SELECT_CONTACT,
          data: address
        });
        this.setState({
          selectedAddress: address
        });
      }
    });

    this.account = props.account;
    this.contractManager = props.contractManager;
    this.state = {
      contactAddresses: [],
      isAccepting: [],
      selectedAddress: ""
    };
  }

  componentDidMount() {
    this.setState({
      contactAddresses: this.account.storageManager.contactAddresses
    });
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.CONTACT_LIST_UPDATED) {
        this.setState({
          contactAddresses: this.account.storageManager.contactAddresses
        });
      }
    });
  }

  render() {
    const {
      contactAddresses
    } = this.state;
    const {
      height
    } = this.props;
    var htmlContent;
    var contactItems = [];

    if (contactAddresses == undefined) {
      htmlContent = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    } else if (contactAddresses.length == 0) {
      contactItems.push(__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        key: 'contact_' + i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Empty"))));
      htmlContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        selection: true,
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, contactItems);
    } else {
      for (var i = 0; i < contactAddresses.length; i++) {
        var user = this.account.storageManager.contacts[contactAddresses[i]];
        var addressExplorerUrl = _support_Config__WEBPACK_IMPORTED_MODULE_4___default.a.ENV.ExplorerUrl + 'address/' + contactAddresses[i];
        var rightAlignedContent;

        if (user.relationship == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.Relationship.NoRelation) {
          rightAlignedContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
            floated: "right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            color: "orange",
            loading: user.isAccepting,
            disabled: user.isAccepting,
            onClick: this.acceptContactRequest,
            value: contactAddresses[i],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, "Accept"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
            key: 'info_button_popup_' + i,
            trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              color: "green",
              as: "a",
              href: addressExplorerUrl,
              target: "_blank",
              circular: true,
              icon: "info circle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }),
            content: "View on Etherscan",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }));
        } else if (user.relationship == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.Relationship.Requested) {
          rightAlignedContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
            floated: "right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
            key: 'wait_popup_' + i,
            trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              color: "yellow",
              circular: true,
              icon: "wait",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            }),
            content: "Pending acceptance",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
            key: 'info_button_popup_' + i,
            trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              color: "green",
              as: "a",
              href: addressExplorerUrl,
              target: "_blank",
              circular: true,
              icon: "info circle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }),
            content: "View on Etherscan",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }));
        } else {
          rightAlignedContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
            floated: "right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
            key: 'info_button_popup_' + i,
            trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              color: "green",
              as: "a",
              href: addressExplorerUrl,
              target: "_blank",
              circular: true,
              icon: "info circle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              },
              __self: this
            }),
            content: "View on Etherscan",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }));
        }

        var address = contactAddresses[i];
        contactItems.push(__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          active: address == this.state.selectedAddress,
          key: 'contact_' + i,
          value: address,
          onClick: this.listItemClicked.bind(this, address),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          avatar: true,
          src: user.avatarUrl ? user.avatarUrl : 'static/images/user.png',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, user.name ? user.name : address.substr(0, 10)), address.substr(0, 14) + '...'), rightAlignedContent));
      }

      htmlContent = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        selection: true,
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, contactItems);
    }

    return __jsx("div", {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("div", {
      style: {
        height: 40,
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h2",
      style: {
        float: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Contact list"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "blue",
      style: {
        float: 'right'
      },
      onClick: this.addContactClicked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "add user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), "Add")), __jsx("div", {
      style: {
        height: height - 40,
        overflow: 'auto',
        float: 'left',
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, htmlContent), __jsx(_modals_AddContactModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      contractManager: this.contractManager,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContactList);

/***/ }),

/***/ "./views/Footer.js":
/*!*************************!*\
  !*** ./views/Footer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  openGuide(e) {
    e.preventDefault();
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch({
      action: _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.ACTION.OPEN_GUIDE
    });
  }

  render() {
    return __jsx("div", {
      style: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Home"), __jsx("a", {
      style: {
        marginLeft: 20
      },
      onClick: this.openGuide,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Guide"), __jsx("a", {
      style: {
        marginLeft: 20
      },
      href: "/terms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Term of use"), __jsx("a", {
      style: {
        marginLeft: 20
      },
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "About ", _support_Constant__WEBPACK_IMPORTED_MODULE_1___default.a.APP_NAME));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./views/HeaderMenu.js":
/*!*****************************!*\
  !*** ./views/HeaderMenu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/Config */ "./support/Config.js");
/* harmony import */ var _support_Config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_support_Config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _core_ContractManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/ContractManager */ "./core/ContractManager.js");
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\HeaderMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class HeaderMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "clearAllData", () => {
      window.localStorage.clear();
    });

    _defineProperty(this, "getAccountInfo", () => {
      var address = this.account.getAddress();

      if (address) {
        this.setState({
          address: address,
          balance: this.account.balance,
          isLoading: false,
          isJoined: this.account.isJoined
        });
      } else {
        if (this.reloadCount == 1) {
          this.setState({
            isLoading: false
          });
        } else {
          this.reloadCount++;
          setTimeout(this.getAccountInfo, 800);
        }
      }
    });

    _defineProperty(this, "handleDropdownClicked", (event, data) => {
      if (data.name == 'updateProfile') {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.ACTION.OPEN_UPDATE_PROFILE
        });
      } else if (data.name == 'logOutItem') {
        this.clearAllData();
        window.location.reload();
      } else if (data.name == 'settingsItem') {
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.ACTION.OPEN_SETTINGS_MODAL
        });
      } else if (data.name == 'changeEthNetwork') {
        if (data.networkid != _support_Config__WEBPACK_IMPORTED_MODULE_5___default.a.ENV.EthNetworkId) {
          _support_Config__WEBPACK_IMPORTED_MODULE_5___default.a.ENV.EthNetworkId = data.networkid;
          this.removeNetworkDependentData();
          window.location.reload();
        }
      }
    });

    _defineProperty(this, "removeNetworkDependentData", () => {
      this.account.storageManager.removeNetworkDependentData();
    });

    _defineProperty(this, "handleJoinClicked", () => {
      var publicKeyBuffer = this.account.getPublicKeyBuffer();
      this.contractManager.joinContract(publicKeyBuffer, resultEvent => {
        if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.EVENT.ON_REJECTED || resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.EVENT.ON_ERROR) {
          this.setState({
            isJoinButtonLoading: false
          });
        } else if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.EVENT.ON_RECEIPT) {
          window.location.reload();
        }
      });
      this.setState({
        isJoinButtonLoading: true
      });
    });

    _defineProperty(this, "handleImportPrivateKeyClicked", () => {
      _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch({
        action: _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.ACTION.OPEN_PRIVATE_KEY_MODAL
      });
    });

    this.account = props.account;
    this.contractManager = _core_ContractManager__WEBPACK_IMPORTED_MODULE_7__["default"];
    this.transactionDispatcher = props.transactionDispatcher;
    this.state = {
      address: "",
      balance: "",
      name: "",
      avatarUrl: "",
      isLoading: true,
      isJoinButtonLoading: false,
      isJoined: false,
      numPendingTx: 0
    };
    this.reloadCount = 0;
  }

  componentDidMount() {
    if (this.account) {
      this.getAccountInfo();
      _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"].register(payload => {
        if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.EVENT.ACCOUNT_BALANCE_UPDATED) {
          this.setState({
            balance: this.account.balance
          });
        } else if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.EVENT.ACCOUNT_INFO_UPDATED) {
          this.setState({
            name: payload.profile.name,
            avatarUrl: payload.profile.avatarUrl,
            isJoined: payload.profile.isJoined
          });
        }
      });
      this.transactionDispatcher.register(payload => {
        if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.EVENT.PENDING_TRANSACTION_UPDATED) {
          this.setState({
            numPendingTx: payload.numPendingTx
          });
        }
      });
    }
  }

  render() {
    var accountInfo = __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    });

    if (this.account) {
      if (this.state.isLoading == false) {
        if (this.state.address) {
          var addressExplorerUrl = _support_Config__WEBPACK_IMPORTED_MODULE_5___default.a.ENV.ExplorerUrl + 'address/' + this.state.address;
          var dropdownTrigger;

          if (this.state.avatarUrl) {
            dropdownTrigger = __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              src: this.state.avatarUrl,
              avatar: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            }), this.state.name ? this.state.name : this.state.address.substr(0, 10));
          } else {
            dropdownTrigger = __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              name: "user",
              size: "large",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            }), this.state.name ? this.state.name : this.state.address.substr(0, 10));
          }

          var networkItems = [];

          for (var i = 0; i < _support_Config__WEBPACK_IMPORTED_MODULE_5___default.a.NETWORK_LIST.length; i++) {
            networkItems.push(__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
              key: 'networkItem' + i,
              networkid: _support_Config__WEBPACK_IMPORTED_MODULE_5___default.a.NETWORK_LIST[i].id,
              name: "changeEthNetwork",
              onClick: this.handleDropdownClicked,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            }, _support_Config__WEBPACK_IMPORTED_MODULE_5___default.a.NETWORK_LIST[i].name));
          }

          var memberInfo;

          if (this.account.isJoined) {
            memberInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
              item: true,
              trigger: dropdownTrigger,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 143
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
              name: "updateProfile",
              onClick: this.handleDropdownClicked,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              name: "write",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 145
              },
              __self: this
            }), "Update profile"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
              name: "settingsItem",
              onClick: this.handleDropdownClicked,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              name: "settings",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            }), "Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
              name: "logOutItem",
              onClick: this.handleDropdownClicked,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              name: "log out",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              },
              __self: this
            }), "Log out")));
          } else {
            memberInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              color: "orange",
              onClick: this.handleJoinClicked,
              loading: this.state.isJoinButtonLoading,
              disabled: this.state.isJoinButtonLoading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              },
              __self: this
            }, "Join ", _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.APP_NAME);
          }

          var pendingTxItem;

          if (this.state.numPendingTx > 0) {
            pendingTxItem = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
              as: "a",
              color: "yellow",
              href: addressExplorerUrl,
              target: "_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              },
              __self: this
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
              name: "spinner",
              loading: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            }), this.state.numPendingTx, " pending tx");
          }

          accountInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
            position: "right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
            item: true,
            text: _support_Config__WEBPACK_IMPORTED_MODULE_5___default.a.ENV.NetworkName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }, networkItems))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }, __jsx("a", {
            href: addressExplorerUrl,
            target: "_blank",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, this.state.address)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          }, "Balance: ", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
            as: "a",
            href: addressExplorerUrl,
            target: "_blank",
            color: "orange",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, parseFloat(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei("" + this.state.balance, 'ether')).toFixed(8) + ' ETH'), pendingTxItem))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }, memberInfo));
        } else {
          accountInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
            position: "right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            onClick: this.handleImportPrivateKeyClicked,
            color: "blue",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, "Import private key")));
        }
      } else {
        accountInfo = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
          inverted: true,
          active: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        });
      }
    }

    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      fixed: "top",
      color: "grey",
      inverted: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("link", {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "static/images/blockchat.png",
      height: 55,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }))), this.account ? accountInfo : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderMenu);

/***/ }),

/***/ "./views/modals/AddContactModal.js":
/*!*****************************************!*\
  !*** ./views/modals/AddContactModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\modals\\AddContactModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AddContactModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", e => {
      e.preventDefault();
      this.setState({
        errorMessage: ""
      });
      this.setState({
        modalOpen: false
      });
    });

    _defineProperty(this, "handleAddContact", e => {
      if (_ethereum_web3__WEBPACK_IMPORTED_MODULE_1__["default"].utils.isAddress(this.state.address)) {
        this.contractManager.addContact(this.state.address);
        this.setState({
          errorMessage: "",
          modalOpen: false
        });
      } else {
        this.setState({
          errorMessage: "Invalid ethereum address"
        });
      }
    });

    this.state = {
      modalOpen: false,
      errorMessage: "",
      address: ""
    };
    this.contractManager = props.contractManager;
  }

  componentDidMount() {
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_4___default.a.ACTION.ADD_CONTACT) {
        this.setState({
          modalOpen: true,
          errorMessage: "",
          isLoading: false,
          address: ""
        });
      }
    });
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      open: this.state.modalOpen,
      onClose: this.handleClose,
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      icon: "",
      content: "Add contact by address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      fluid: true,
      value: this.state.address,
      onChange: event => this.setState({
        address: event.target.value
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
      error: true,
      header: this.state.errorMessage,
      hidden: this.state.errorMessage == "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "orange",
      onClick: this.handleAddContact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "checkmark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), " Add"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "grey",
      onClick: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), " Close")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddContactModal);

/***/ }),

/***/ "./views/modals/EnterPrivateKeyModal.js":
/*!**********************************************!*\
  !*** ./views/modals/EnterPrivateKeyModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\modals\\EnterPrivateKeyModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class EnterPrivateKeyModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", e => {
      e.preventDefault();
      this.setState({
        errorMessage: ""
      });
      this.setState({
        modalOpen: false
      });
    });

    _defineProperty(this, "handleConfirm", e => {
      e.preventDefault();
      this.setState({
        errorMessage: ""
      });
      var success = this.account.storePrivateKey(this.state.key);

      if (success) {
        this.setState({
          modalOpen: false
        });
        window.location.reload();
      } else {
        this.setState({
          errorMessage: "Invalid private key"
        });
      }
    });

    this.state = {
      modalOpen: false,
      key: "",
      errorMessage: ""
    };
    this.account = props.account;
  }

  componentDidMount() {
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.OPEN_PRIVATE_KEY_MODAL) {
        this.setState({
          modalOpen: true
        });
      }
    });
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.state.modalOpen,
      onClose: this.handleClose,
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "",
      content: "Import private key",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      fluid: true,
      value: this.state.key,
      onChange: event => this.setState({
        key: event.target.value
      }),
      placeholder: "Ethereum private key",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      error: true,
      header: this.state.errorMessage,
      hidden: this.state.errorMessage == "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("p", {
      style: {
        marginTop: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "By clicking Confirm, you also agree to our ", __jsx("a", {
      href: "/terms",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Terms of use"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "blue",
      onClick: this.handleConfirm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "checkmark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), " Confirm"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "grey",
      onClick: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), " Close")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EnterPrivateKeyModal);

/***/ }),

/***/ "./views/modals/ErrorModal.js":
/*!************************************!*\
  !*** ./views/modals/ErrorModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\modals\\ErrorModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ErrorModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modalOpen: false,
      message: "",
      title: ""
    });

    _defineProperty(this, "handleClose", e => {
      e.preventDefault();
      this.setState({
        modalOpen: false
      });
    });
  }

  componentDidMount() {
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ENCOUNTERED_ERROR) {
        this.setState({
          modalOpen: true,
          message: payload.message,
          title: payload.title
        });
      }
    });
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.state.modalOpen,
      onClose: this.handleClose,
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "",
      content: this.state.title ? this.state.title : "Notice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      error: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, this.state.message)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "grey",
      onClick: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Close")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ErrorModal);

/***/ }),

/***/ "./views/modals/GuideModal.js":
/*!************************************!*\
  !*** ./views/modals/GuideModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\modals\\GuideModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class GuideModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modalOpen: false,
      key: ""
    });

    _defineProperty(this, "handleClose", e => {
      e.preventDefault();
      this.setState({
        modalOpen: false
      });
      var firstTimeUse = window.localStorage.firstTimeUse;

      if (firstTimeUse == undefined) {
        window.localStorage.setItem('firstTimeUse', "false");
        _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch({
          action: _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.OPEN_PRIVATE_KEY_MODAL
        });
      }
    });
  }

  componentDidMount() {
    this.checkForFirstTime();
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.OPEN_GUIDE) {
        this.setState({
          modalOpen: true
        });
      }
    });
  }

  checkForFirstTime() {
    if (typeof Storage !== "undefined") {
      var firstTimeUse = window.localStorage.firstTimeUse;

      if (firstTimeUse == undefined || firstTimeUse == false) {
        this.setState({
          modalOpen: true
        });
      }
    }
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.state.modalOpen,
      onClose: this.handleClose,
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "",
      content: "Welcome to BlockChat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
      style: {
        fontSize: '1.2em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Please read our note carefully"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "BlockChat is an Ethereum app that allows you to send encrypted messages via a smart contract that only you and the recipient of a message can decrypt it. BlockChat can operate without any centralized server"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "You will be required to key in your BlockChat private key in order to use BlockChat. Make sure that you understand the risk of giving your private key to any third party."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "We recommend you to try BlockChat on Rinkeby test net or Ropsten test Net. You can get free ether on Rinkeby at https://faucet.rinkeby.io/ and https://faucet.ropsten.be/")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "green",
      onClick: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "checkmark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), " Got it")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GuideModal);

/***/ }),

/***/ "./views/modals/SettingsModal.js":
/*!***************************************!*\
  !*** ./views/modals/SettingsModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\modals\\SettingsModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SettingsModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", e => {
      e.preventDefault();
      this.setState({
        modalOpen: false
      });
    });

    _defineProperty(this, "handleUpdate", () => {
      this.account.setAskForTransactionApproval(this.state.askForApproval);
      this.setState({
        modalOpen: false
      });
    });

    this.account = props.account;
    this.state = {
      modalOpen: false,
      askForApproval: false
    };
  }

  componentDidMount() {
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.OPEN_SETTINGS_MODAL) {
        var askForApproval = this.account.askForTransactionApproval;
        this.setState({
          modalOpen: true,
          askForApproval
        });
      }
    });
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.state.modalOpen,
      onClose: this.handleClose,
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "",
      content: "Settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      toggle: true,
      label: "Ask for transaction approval",
      checked: this.state.askForApproval,
      onChange: (event, data) => this.setState({
        askForApproval: data.checked
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "blue",
      onClick: this.handleUpdate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Update"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "grey",
      onClick: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Close")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SettingsModal);

/***/ }),

/***/ "./views/modals/TransactionModal.js":
/*!******************************************!*\
  !*** ./views/modals/TransactionModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\modals\\TransactionModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class TransactionModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleReject", e => {
      e.preventDefault();
      this.setState({
        modalOpen: false
      });
      this.dispatcher.dispatch({
        action: _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.ACTION.REJECT_TRANSACTION,
        transactionId: this.state.transactionId
      });
    });

    _defineProperty(this, "handleApprove", e => {
      e.preventDefault();
      this.setState({
        modalOpen: false
      });
      this.dispatcher.dispatch({
        action: _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.ACTION.APPROVE_TRANSACTION,
        transactionId: this.state.transactionId,
        method: this.method,
        gasPrice: this.state.gasPrice,
        gasAmount: this.state.estimatedGas
      });
    });

    _defineProperty(this, "componentDidMount", () => {
      this.dispatcher.register(payload => {
        if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_2___default.a.ACTION.OPEN_TRANSACTION_MODAL) {
          this.method = payload.method;
          this.setState({
            modalOpen: true,
            estimatedGas: 0,
            gasPrice: 0,
            transactionId: payload.transactionId
          });
          this.updateInfo();
        }
      });
    });

    _defineProperty(this, "updateInfo", async () => {
      var estimatedGas;
      var warningMessage = "";

      try {
        estimatedGas = await this.method.estimateGas({
          gas: 3000000 // from: this.account.getAddress()

        });
      } catch (err) {
        estimatedGas = 3000000;

        if (err) {
          warningMessage = err.message;
        }
      }

      var gasPrice = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getGasPrice();
      this.setState({
        estimatedGas,
        gasPrice,
        warningMessage
      });
    });

    this.dispatcher = props.dispatcher;
    this.state = {
      modalOpen: false,
      estimatedGas: 0,
      gasPrice: 0,
      transactionId: 0,
      warningMessage: ""
    };
  }

  render() {
    var content = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"].Dimmable, {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"], {
      active: true,
      inverted: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
      active: true,
      inline: "centered",
      inverted: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })));

    if (this.state.gasPrice) {
      content = __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        warning: this.state.warningMessage != "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "The gas price is suggested by the last few blocks median gas price."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Gas limit: "), __jsx("input", {
        value: this.state.estimatedGas,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Gas price"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(this.state.gasPrice, 'gwei'),
        label: {
          basic: true,
          content: 'Gwei'
        },
        labelPosition: "right",
        onChange: e => {
          if (e.target.value < 1000000) {
            this.setState({
              gasPrice: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.toWei(e.target.value, 'gwei')
            });
          }
        },
        style: {
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Transaction fee: "), __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei((this.state.estimatedGas * this.state.gasPrice).toString(), 'ether') + ' ETH')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
        warning: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, this.state.warningMessage))));
    }

    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.state.modalOpen,
      onClose: this.handleClose,
      size: "mini",
      closeOnDimmerClick: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "",
      content: "Confirm transaction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), content, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "orange",
      onClick: this.handleApprove,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Approve"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "red",
      onClick: this.handleReject,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Reject")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TransactionModal);

/***/ }),

/***/ "./views/modals/UpdateProfileModal.js":
/*!********************************************!*\
  !*** ./views/modals/UpdateProfileModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/AppDispatcher */ "./core/AppDispatcher.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/Constant */ "./support/Constant.js");
/* harmony import */ var _support_Constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_support_Constant__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\BlockChat\\BlockChat\\views\\modals\\UpdateProfileModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class UpdateProfileModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", e => {
      e.preventDefault();
      this.setState({
        modalOpen: false
      });
    });

    _defineProperty(this, "updateProfileClicked", e => {
      e.preventDefault();
      this.contractManager.updateProfile(this.state.name, this.state.avatarUrl, resultEvent => {
        if (resultEvent == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ON_RECEIPT) {
          window.location.reload();
        }
      });
      this.setState({
        modalOpen: false
      });
    });

    this.account = props.account;
    this.contractManager = props.contractManager;
    this.state = {
      modalOpen: false,
      name: this.account.name,
      avatarUrl: this.account.avatarUrl
    };
  }

  componentDidMount() {
    _core_AppDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].register(payload => {
      if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.ACTION.OPEN_UPDATE_PROFILE) {
        this.setState({
          modalOpen: true
        });
      } else if (payload.action == _support_Constant__WEBPACK_IMPORTED_MODULE_3___default.a.EVENT.ACCOUNT_INFO_UPDATED) {
        this.setState({
          name: payload.profile.name,
          avatarUrl: payload.profile.avatarUrl
        });
      }
    });
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.state.modalOpen,
      onClose: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: "",
      content: "Update name and avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Name"), __jsx("input", {
      placeholder: "Maximum 32 characters",
      value: this.state.name,
      onChange: e => {
        if (e.target.value.length <= 32) {
          this.setState({
            name: e.target.value
          });
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Avatar URL"), __jsx("input", {
      placeholder: "Maximum 32 characters",
      value: this.state.avatarUrl,
      onChange: e => {
        if (e.target.value.length <= 32) {
          this.setState({
            avatarUrl: e.target.value
          });
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "If your avatar URL is longer than 32 characters, please consider using ", __jsx("a", {
      href: "https://goo.gl/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Google URL Shortener"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "orange",
      onClick: this.updateProfileClicked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Update"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "grey",
      onClick: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Close")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UpdateProfileModal);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BlockChat\BlockChat\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "ethereumjs-tx":
/*!********************************!*\
  !*** external "ethereumjs-tx" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-tx");

/***/ }),

/***/ "ethereumjs-util":
/*!**********************************!*\
  !*** external "ethereumjs-util" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-util");

/***/ }),

/***/ "ethereumjs-wallet":
/*!************************************!*\
  !*** external "ethereumjs-wallet" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-wallet");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "flux":
/*!***********************!*\
  !*** external "flux" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("flux");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map