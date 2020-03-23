webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./support/Config.js":
/*!***************************!*\
  !*** ./support/Config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _parseInt = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");

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
  contractAddress: '',
  explorerUrl: 'https://rinkeby.etherscan.io/',
  providerUrl: 'https://rinkeby.infura.io/v3/10330c483afc4a93a939de9dac39939d'
}];
module.exports.ENV = {
  get ContractAddress() {
    if (typeof Storage !== 'undefined' && window.localStorage.ethNetwork != undefined) {
      var network = _parseInt(window.localStorage.ethNetwork);

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
      var network = _parseInt(window.localStorage.ethNetwork);

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
      var network = _parseInt(window.localStorage.ethNetwork);

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
      var network = _parseInt(window.localStorage.ethNetwork);

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
      return _parseInt(window.localStorage.ethNetwork);
    } else {
      return 0;
    }
  }

};

/***/ })

})
//# sourceMappingURL=index.js.c6c9d3eee0d2d019721a.hot-update.js.map