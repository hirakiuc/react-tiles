(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Widget2 = __webpack_require__(5);

	var _Widget3 = _interopRequireDefault(_Widget2);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ClockWidget
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Ref: https://cssanimation.rocks/clocks/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ClockWidget = function (_Widget) {
	  _inherits(ClockWidget, _Widget);

	  function ClockWidget() {
	    _classCallCheck(this, ClockWidget);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ClockWidget).apply(this, arguments));
	  }

	  _createClass(ClockWidget, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.initLocalClocks();
	      this.setUpMinuteHands();
	      this.moveSecondHands();
	    }
	  }, {
	    key: 'initLocalClocks',
	    value: function initLocalClocks() {
	      var date = new Date();
	      var seconds = date.getSeconds();
	      var minutes = date.getMinutes();
	      var hours = date.getHours();

	      var hands = [{
	        hand: 'hours',
	        angle: hours * 30 + minutes / 2
	      }, {
	        hand: 'minutes',
	        angle: minutes * 6
	      }, {
	        hand: 'seconds',
	        angle: seconds * 6
	      }];

	      var myClock = this.refs.myClock;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = hands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var hand = _step.value;

	          var elements = myClock.querySelectorAll('.' + hand.hand);

	          for (var i = 0; i < elements.length; i++) {
	            var element = elements[i];
	            var style = 'rotateZ(' + hand.angle + 'deg)';

	            element.style.webkitTransform = style;
	            element.style.transform = style;

	            if (hand.hand == 'minutes') {
	              element.parentNode.setAttribute('data-second-angle', hands[2].angle);
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }

	    /**
	     * Set a timeout for the first minute hand movement (less than 1 minute),
	     * then rotate it every minute after that.
	     */

	  }, {
	    key: 'setUpMinuteHands',
	    value: function setUpMinuteHands() {
	      var _this2 = this;

	      var containers = this.refs.myClock.querySelectorAll('.minutes-container');
	      var secondAngle = containers[0].getAttribute('data-second-angle');
	      if (secondAngle > 0) {
	        // Set a timeout until the end of the current minute, to move the hand
	        var delay = ((360 - secondAngle) / 6 + 0.1) * 1000;
	        setTimeout(function () {
	          _this2.moveMinuteHands(containers);
	        }, delay);
	      }
	    }

	    /**
	     *  Do the first minute's rotation
	     */

	  }, {
	    key: 'moveMinuteHands',
	    value: function moveMinuteHands(containers) {
	      for (var i = 0; i < containers.length; i++) {
	        containers[i].style.webkitTransform = 'rotateZ(6deg)';
	        containers[i].style.transform = 'rotateZ(6deg)';
	      }

	      // Then continue with a 60 second interval
	      setInterval(function () {
	        for (var i = 0; i < containers.length; i++) {
	          if (containers[i].angle === undefined) {
	            containers[i].angle = 12;
	          } else {
	            containers[i].angle += 6;
	          }

	          var style = 'rotateZ(' + containers[i].angle + 'deg)';

	          containers[i].style.webkitTransform = style;
	          containers[i].style.transform = style;
	        }
	      }, 60000);
	    }

	    /*
	     * Move the second containers
	     */

	  }, {
	    key: 'moveSecondHands',
	    value: function moveSecondHands() {
	      var containers = this.refs.myClock.querySelectorAll('.seconds-container');
	      setInterval(function () {
	        for (var i = 0; i < containers.length; i++) {
	          if (containers[i].angle === undefined) {
	            containers[i].angle = 6;
	          } else {
	            containers[i].angle += 6;
	          }

	          var style = 'rotateZ(' + containers[i].angle + 'deg)';
	          containers[i].style.webkitTransform = style;
	          containers[i].style.transform = style;
	        }
	      }, 1000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'myClock', className: 'widget clock-widget', _grid: this.props._grid },
	        _react2.default.createElement(
	          'article',
	          { className: 'clock simple' },
	          _react2.default.createElement(
	            'div',
	            { className: 'hours-container' },
	            _react2.default.createElement('div', { className: 'hours' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'minutes-container' },
	            _react2.default.createElement('div', { className: 'minutes' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'seconds-container' },
	            _react2.default.createElement('div', { className: 'seconds' })
	          )
	        )
	      );
	    }
	  }]);

	  return ClockWidget;
	}(_Widget3.default);

	exports.default = ClockWidget;


	ClockWidget.propTypes = {};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Widget = function (_React$Component) {
	  _inherits(Widget, _React$Component);

	  function Widget(props) {
	    _classCallCheck(this, Widget);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Widget).call(this, props));

	    _this.onLayoutChange = _this.onLayoutChange.bind(_this);
	    return _this;
	  }

	  _createClass(Widget, [{
	    key: 'onLayoutChange',
	    value: function onLayoutChange(layout) {
	      this.props.onLayoutChange(layout);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: 'widget' });
	    }
	  }]);

	  return Widget;
	}(_react2.default.Component);

	exports.default = Widget;


	Widget.propTypes = {
	  _grid: _react2.default.PropTypes.object
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js?minimize!./clock_widget.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js?minimize!./clock_widget.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".react-grid-item.clock-widget {\n  background: #47bbb3;\n  color: #fff;\n}\n.clock-widget .clock {\n  border-radius: 50%;\n  background: #fff url(\"/lib/ios_clock.svg\") no-repeat center;\n  background-size: 88%;\n  height: 20em;\n  position: relative;\n  width: 20em;\n  margin: 0 auto;\n}\n.clock-widget .clock .minutes-container,\n.clock-widget .clock .hours-container,\n.clock-widget .clock .seconds-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.clock-widget .clock .hours {\n  background: #000;\n  height: 25%;\n  left: 48.75%;\n  position: absolute;\n  top: 25%;\n  transform-origin: 50% 100%;\n  width: 2.5%;\n}\n.clock-widget .clock .minutes {\n  background: #000;\n  height: 40%;\n  left: 49%;\n  position: absolute;\n  top: 10%;\n  transform-origin: 50% 100%;\n  width: 2%;\n}\n.clock-widget .clock .seconds {\n  background: #ff4500;\n  height: 45%;\n  left: 49.5%;\n  position: absolute;\n  top: 14%;\n  transform-origin: 50% 80%;\n  width: 1%;\n  z-index: 8;\n}\n.clock-widget .clock .hours-container {\n  animation: rotate 43200s infinite linear;\n}\n.clock-widget .clock .minutes-container {\n  transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);\n}\n.clock-widget .clock .seconds-container {\n  transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44);\n}\n@-moz-keyframes rotate {\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@-o-keyframes rotate {\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes rotate {\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n.clock-widget .clock.simple:after {\n  background: #000;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 5%;\n  height: 5%;\n  z-index: 10;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;