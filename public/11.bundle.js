webpackJsonp([11],{

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This component is for Spousal factors of the calculator. 
	// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

	var DonutChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./donut_chart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _require = __webpack_require__(354);

	var connector = _require.connector;

	var CrsB = function (_Component) {
	  _inherits(CrsB, _Component);

	  function CrsB(props) {
	    _classCallCheck(this, CrsB);

	    var _this = _possibleConstructorReturn(this, (CrsB.__proto__ || Object.getPrototypeOf(CrsB)).call(this, props));

	    _this.state = {
	      spouseSchooling: [{ value: null, name: 'Select...' }, { value: 'no-high-school', name: 'Less than secondary' }, { value: 'high-school', name: 'Secondary School (high school graduation)' }, { value: 'one-year-ps', name: 'One-year program at a university, college, trade or technical school, or other institute ' }, { value: 'two-year-ps', name: 'Two-year program at a university, college, trade or technical school, or other institute' }, { value: 'bachelor-deg', name: "Bachelor's degree OR a three or more year program at a university, college, trade or technical school,or other institute" }, { value: 'two-degs', name: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years' }, { value: 'masters', name: "Master's degree, OR professional degree needed to practice in a licensed profession" }, { value: 'PHD', name: 'Doctoral level university degree (Ph.D.)' }],
	      spouseFirstLanguage: [{ value: null, name: 'Select...' }, { value: 'CLB-4-or-less', name: 'CLB 4 or less' }, { value: 'CLB-4-or-5', name: 'CLB 5 or 6' }, { value: 'CLB-7-or-8', name: 'CLB 7 or 8' }, { value: 'CLB-9-or-more', name: 'CLB 9 or more' }]
	    };
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    return _this;
	  }

	  _createClass(CrsB, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var node = _reactDom2.default.findDOMNode(this.refs.crsbform);

	      var addEvent = node.addEventListener || node.attachEvent;

	      addEvent('keypress', this.handleKeyPress, false);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var removeEvent = node.removeEventListener || node.detachEvent;

	      removeEvent('keypress', this.handleKeyPress);
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(event) {
	      if (event.keyCode === 13) {
	        event.preventDefault();
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var value = event.target.value;
	      switch (event.target.id) {
	        case 'spouse-education':
	          this.props.handleSpouseEducation(value);
	          break;
	        case 'spouse-first-lang':
	          this.props.handleSpouseFirstLang(value);
	          break;
	      }
	    }
	  }, {
	    key: 'checkEnter',
	    value: function checkEnter(event) {
	      if (event.key === 'Enter') {
	        this.handleChange(event);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var createList = function createList(item, key) {
	        return _react2.default.createElement(
	          'option',
	          { className: 'crs-option', key: key, value: item.value },
	          item.name
	        );
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'crs-b' },
	          _react2.default.createElement(
	            'form',
	            { ref: 'crsbform', className: 'crs-b-form' },
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-b-question' },
	              'What\'s your spouse or common law\'s level of education?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'spouse-education',
	                onChange: this.handleChange,
	                className: 'crs-select' },
	              this.state.spouseSchooling.map(createList)
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-b-question' },
	              'What\'s your spouse or common law\'s first official language profiency?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'spouse-first-lang',
	                onChange: this.handleChange, className: 'crs-select' },
	              this.state.spouseFirstLanguage.map(createList)
	            )
	          )
	        ),
	        _react2.default.createElement(DonutChart, null)
	      );
	    }
	  }]);

	  return CrsB;
	}(_react.Component);

	module.exports = connector(CrsB);

/***/ }

});