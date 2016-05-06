(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-grid-layout"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-grid-layout"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-grid-layout")) : factory(root["react"], root["react-grid-layout"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactGridLayout = __webpack_require__(3);

	var _reactGridLayout2 = _interopRequireDefault(_reactGridLayout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WidthProvider = _reactGridLayout2.default.WidthProvider;

	var StaticLayout = WidthProvider(_reactGridLayout2.default);

	var Board = function (_React$Component) {
	  _inherits(Board, _React$Component);

	  function Board(props) {
	    _classCallCheck(this, Board);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Board).call(this, props));

	    _this.state = { layout: [] };
	    _this.onLayoutChange = _this.onLayoutChange.bind(_this);
	    return _this;
	  }

	  _createClass(Board, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var e = document.createEvent('Event');
	      e.initEvent('resize', true, true);
	      window.dispatchEvent(e);
	    }
	  }, {
	    key: 'onLayoutChange',
	    value: function onLayoutChange(layout) {
	      this.setState({ layout: layout });
	    }
	  }, {
	    key: 'processWidget',
	    value: function processWidget(widget) {
	      var widget_name = widget.type.name.replace(/\.?([A-Z])/g, function (x, y) {
	        return '-' + y.toLowerCase();
	      }).replace(/^\-/, '');

	      return _react2.default.createElement(
	        'div',
	        { key: widget.key, _grid: widget.props._grid, className: 'widget ' + widget_name },
	        widget
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        StaticLayout,
	        { className: 'layout', cols: this.props.cols, rowHeight: this.props.rowHeight, onLayoutChange: this.onLayoutChange },
	        _react2.default.Children.map(this.props.children, function (child) {
	          return _this2.processWidget(child);
	        })
	      );
	    }
	  }]);

	  return Board;
	}(_react2.default.Component);

	exports.default = Board;


	Board.propTypes = {
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node]).isRequired,
	  cols: _react2.default.PropTypes.number.isRequired,
	  onLayoutChange: _react2.default.PropTypes.func,
	  rowHeight: _react2.default.PropTypes.number.isRequired
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;