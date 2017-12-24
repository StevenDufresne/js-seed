(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("JsSeed", [], factory);
	else if(typeof exports === 'object')
		exports["JsSeed"] = factory();
	else
		root["JsSeed"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _core = __webpack_require__(2);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var core = new _core2.default();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Core = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dummydata = __webpack_require__(3);
	
	var _factory = __webpack_require__(5);
	
	var _factory2 = _interopRequireDefault(_factory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Core = exports.Core = function () {
	  function Core() {
	    _classCallCheck(this, Core);
	
	    var preInfo = this.getPreflightInfo();
	    var layers = this.checkForLayers(preInfo);
	
	    if (layers.length > 0) {
	      _factory2.default.renderComponents(layers);
	    }
	  }
	
	  _createClass(Core, [{
	    key: 'checkForLayers',
	    value: function checkForLayers() {
	      //check the server
	      return _dummydata.payload;
	    }
	  }, {
	    key: 'getPreflightInfo',
	    value: function getPreflightInfo() {
	      return {
	        'href': window.location.href
	      };
	    }
	  }]);
	
	  return Core;
	}();
	
	exports.default = Core;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.payload = undefined;
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var payload = exports.payload = [{
	  type: _types2.default.nano,
	  content: {
	    text: 'This is the nano data <a href="https://www.rebel.com">go here</a>.'
	  },
	  options: {
	    style: {
	      bg: '#17C671'
	    }
	  }
	}];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  nano: 'Nanobar',
	  dialog: 'Dialog'
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Factory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _components = __webpack_require__(6);
	
	var _components2 = _interopRequireDefault(_components);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Factory = exports.Factory = function () {
	  function Factory() {
	    _classCallCheck(this, Factory);
	  }
	
	  _createClass(Factory, [{
	    key: 'renderComponents',
	    value: function renderComponents(layers) {
	      for (var i = 0; i < layers.length; i++) {
	        var comp = new _components2.default[layers[i].type](layers[i]);
	      }
	    }
	  }]);
	
	  return Factory;
	}();
	
	exports.default = new Factory();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nano = __webpack_require__(7);
	
	var _nano2 = _interopRequireDefault(_nano);
	
	var _dialog = __webpack_require__(8);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  Nanobar: _nano2.default,
	  Dialog: _dialog2.default
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Nanobar = exports.Nanobar = function () {
	  function Nanobar(serverConfig) {
	    _classCallCheck(this, Nanobar);
	
	    this.config = serverConfig;
	    this.appendTemplate();
	  }
	
	  _createClass(Nanobar, [{
	    key: 'getTemplate',
	    value: function getTemplate(nanoData) {
	      var style = 'background:' + nanoData.options.style.bg;
	
	      return '<div style=' + style + ' class="lc lc-nano">\n              <div class="lc-nano-inner">\n                <p>' + nanoData.content.text + '</p>\n              </div>\n              <span class="lc-nano-close">x</span>\n           </div>';
	    }
	  }, {
	    key: 'appendTemplate',
	    value: function appendTemplate() {
	      var handle = document.querySelector('body');
	      var container = document.createElement('div');
	
	      container.innerHTML = this.getTemplate(this.config);
	
	      handle.insertBefore(container, handle.children[0]);
	      this.modifySibling(container);
	      this.bindClose(container);
	    }
	  }, {
	    key: 'modifySibling',
	    value: function modifySibling(container) {
	      var offset = container.children[0].offsetHeight;
	      container.nextSibling.style.marginTop = offset + 'px';
	    }
	  }, {
	    key: 'bindClose',
	    value: function bindClose(container) {
	      var close = document.querySelector('.lc-nano-close');
	      var parent = document.querySelector('.lc-nano');
	
	      close.addEventListener('click', function () {
	        container.removeChild(parent);
	        container.nextSibling.style.marginTop = 0;
	      });
	    }
	  }]);
	
	  return Nanobar;
	}();
	
	exports.default = Nanobar;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Dialog = exports.Dialog = function () {
	  function Dialog(serverConfig) {
	    _classCallCheck(this, Dialog);
	
	    this.config = serverConfig;
	    this.appendTemplate();
	  }
	
	  _createClass(Dialog, [{
	    key: 'getTemplate',
	    value: function getTemplate(nanoData) {
	      return '<div class="lc-dialog lc-dialog--' + nanoData.options.type + '">\n              <p>' + nanoData.content.text + '</p>\n           </div>';
	    }
	  }, {
	    key: 'appendTemplate',
	    value: function appendTemplate() {
	      var handle = document.querySelector('body');
	      var container = document.createElement('div');
	
	      container.innerHTML = this.getTemplate(this.config);
	      handle.appendChild(container);
	    }
	  }]);
	
	  return Dialog;
	}();
	
	exports.default = Dialog;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map