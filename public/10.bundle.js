webpackJsonp([10],{

/***/ 381:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This component is for Core / Human capital factors of the calculator. 
	// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

	var DonutChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./donut_chart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _require = __webpack_require__(354);

	var connector = _require.connector;

	var CrsA = function (_Component) {
	  _inherits(CrsA, _Component);

	  function CrsA(props) {
	    _classCallCheck(this, CrsA);

	    var _this = _possibleConstructorReturn(this, (CrsA.__proto__ || Object.getPrototypeOf(CrsA)).call(this, props));

	    _this.state = {
	      schooling: [{ value: null, name: 'Select...' }, { value: 'lessHighSchool', name: 'Less than secondary' }, { value: 'highSchool', name: 'Secondary diploma' }, { value: 'oneYearPS', name: 'One-year degree, diploma or certificate from a university, college,' + 'trade or technical school, or other institute' }, { value: 'twoYearPS', name: 'Two-year program at a university, college, trade or technical school, or other institute' }, { value: 'bachelor', name: "Bachelor's degree OR  a three or more year program at a university, college, trade or technical school,or other institute" }, { value: 'bachelorPG', name: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years' }, { value: 'masterProfBatch', name: "Master's degree, OR professional degree needed to practice in a licensed profession" }, { value: 'phd', name: 'Doctoral level university degree (Ph.D.)' }],
	      firstLanguage: [{ value: null, name: 'Select...' }, { value: 'crs-first-lang-1', name: 'Less than CLB 4' }, { value: 'crs-first-lang-2', name: 'CLB 4 or 5' }, { value: 'crs-first-lang-3', name: 'CLB 6' }, { value: 'crs-first-lang-4', name: 'CLB 7' }, { value: 'crs-first-lang-5', name: 'CLB 8' }, { value: 'crs-first-lang-6', name: 'CLB 9' }, { value: 'crs-first-lang-7', name: 'CLB 10 or more' }],
	      secondLanguage: [{ value: null, name: 'Select...' }, { value: 'crs-second-lang-1', name: 'Less than CLB 4' }, { value: 'crs-second-lang-2', name: 'CLB 5 or 6' }, { value: 'crs-second-lang-3', name: 'CLB 7 or 8' }, { value: 'crs-second-lang-4', name: 'CLB 9 or more' }],
	      workExperience: [{ value: null, name: 'Select...' }, { value: 'crs-work-experience-1', name: 'Less than 1 year' }, { value: 'crs-work-experience-2', name: '1 year' }, { value: 'crs-work-experience-3', name: '2 years' }, { value: 'crs-work-experience-4', name: '3 years' }, { value: 'crs-work-experience-5', name: '4 years' }, { value: 'crs-work-experience-6', name: '5 or more years' }],
	      age: 0,
	      school: ''
	    };
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(CrsA, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var node = _reactDom2.default.findDOMNode(this.refs.crsaform);

	      var addEvent = node.addEventListener || node.attachEvent;

	      addEvent('keypress', this.handleKeyPress.bind(this), false);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var removeEvent = node.removeEventListener || node.detachEvent;

	      removeEvent('keypress', this.handleKeyPress.bind(this));
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
	        case 'age':
	          this.props.handleAge(value);
	          break;
	        case 'education':
	          this.props.handleEducation(value);
	          break;
	        case 'first-lang':
	          this.props.handleFirstLang(value);
	          break;
	        case 'second-lang':
	          this.props.handleSecondLang(value);
	          break;
	        case 'experience':
	          this.props.handleExperience(value);
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
	          { className: 'crs-a' },
	          _react2.default.createElement(
	            'form',
	            { ref: 'crsaform', className: 'crs-a-form' },
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-a-question' },
	              'How old are you?'
	            ),
	            _react2.default.createElement('input', {
	              id: 'age',
	              type: 'number',
	              onBlur: this.handleChange,
	              onKeyPress: this.checkEnter.bind(this) }),
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-a-question' },
	              'What\'s your level of education?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'education',
	                onChange: this.handleChange,
	                className: 'crs-select' },
	              this.state.schooling.map(createList)
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-a-question' },
	              'What\'s your first official language profiency?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'first-lang',
	                onChange: this.handleChange, className: 'crs-select' },
	              this.state.firstLanguage.map(createList)
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-a-question' },
	              'What\'s your second official language profiency?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'second-lang',
	                onChange: this.handleChange, className: 'crs-select' },
	              this.state.secondLanguage.map(createList)
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-a-question' },
	              'How much experience do you have working for a Canadian company?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'experience',
	                onChange: this.handleChange, className: 'crs-select' },
	              this.state.workExperience.map(createList)
	            )
	          )
	        ),
	        _react2.default.createElement(DonutChart, null)
	      );
	    }
	  }]);

	  return CrsA;
	}(_react.Component);

	module.exports = connector(CrsA);

/***/ }

});