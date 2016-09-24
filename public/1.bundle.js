webpackJsonp([1],{

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(291);

	var browserHistory = _require.browserHistory;

	var _require2 = __webpack_require__(291);

	var Link = _require2.Link;

	var _require3 = __webpack_require__(354);

	var connector = _require3.connector;

	var CrsA = __webpack_require__(381);

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing() {
	    _classCallCheck(this, Landing);

	    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
	  }

	  _createClass(Landing, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          'Hello World'
	        ),
	        React.createElement(CrsA, null)
	      );
	    }
	  }]);

	  return Landing;
	}(React.Component);

	module.exports = connector(Landing);

/***/ },

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

	var _require = __webpack_require__(354);

	var connector = _require.connector;

	var CrsA = function (_Component) {
	  _inherits(CrsA, _Component);

	  function CrsA(props) {
	    _classCallCheck(this, CrsA);

	    var _this = _possibleConstructorReturn(this, (CrsA.__proto__ || Object.getPrototypeOf(CrsA)).call(this, props));

	    _this.state = {
	      schooling: [{ value: null, name: 'Select...' }, { value: 'crs-school-1', name: 'Less than secondary' }, { value: 'crs-school-2', name: 'Secondary diploma' }, { value: 'crs-school-3', name: 'One-year degree, diploma or certificate from a university, college,' + 'trade or technical school, or other institute' }, { value: 'crs-school-4', name: 'One-year degree, diploma or certificate from  a university, college, trade or technical school, or other institute' }, { value: 'crs-school-5', name: 'Two-year program at a university, college, trade or technical school, or other institute' }, { value: 'crs-school-6', name: "Bachelor's degree OR  a three or more year program at a university, college, trade or technical school,or other institute" }, { value: 'crs-school-7', name: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years' }, { value: 'crs-school-8', name: "Master's degree, OR professional degree needed to practice in a licensed profession (For professional degree, the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)" }, { value: 'crs-school-9', name: 'Doctoral level university degree (Ph.D.)' }],
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
	      var createSchoolList = function createSchoolList(item, key) {
	        return _react2.default.createElement(
	          'option',
	          { className: 'crs-option', key: key, value: item.value },
	          item.name
	        );
	      };
	      var createFirstLanguage = function createFirstLanguage(item, key) {};
	      return _react2.default.createElement(
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
	            onChange: this.handleChange,
	            onBlur: this.handleChange,
	            onKeyPress: this.checkEnter.bind(this, 'age') }),
	          _react2.default.createElement(
	            'p',
	            { className: 'crs-a-question' },
	            'What\'s your level of education?'
	          ),
	          _react2.default.createElement(
	            'select',
	            { id: 'education',
	              className: 'crs-select',
	              onChange: this.handleChange },
	            this.state.schooling.map(createSchoolList)
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'crs-a-question' },
	            'What\'s your first official language profiency?'
	          ),
	          _react2.default.createElement(
	            'select',
	            { id: 'first-lang', className: 'crs-select', onChange: this.handleChange },
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'language-benchmark' },
	              'Less than CLB 4'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'language-benchmark' },
	              'CLB 4 or 5'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'language-benchmark' },
	              'CLB 6'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'language-benchmark' },
	              'CLB 7'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'language-benchmark' },
	              'CLB 8'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'language-benchmark' },
	              'CLB 9'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'language-benchmark' },
	              'CLB 10 or more'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'crs-a-question' },
	            'What\'s your second official language profiency?'
	          ),
	          _react2.default.createElement(
	            'select',
	            { id: 'second-lang', className: 'crs-select', onChange: this.handleChange },
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'second-language-benchmark' },
	              'Less than CLB 4'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'second-language-benchmark' },
	              'CLB 5 or 6'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'second-language-benchmark' },
	              'CLB 7 or 8'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'second-language-benchmark' },
	              'CLB 9 or more'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'crs-a-question' },
	            'How much experience do you have working for a Canadian company?'
	          ),
	          _react2.default.createElement(
	            'select',
	            { id: 'experience', className: 'crs-select', onChange: this.handleChange },
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'work-experience' },
	              'Less than 1 year'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'work-experience' },
	              '1 year'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'work-experience' },
	              '2 years'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'work-experience' },
	              '3 years'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'work-experience' },
	              '4 years'
	            ),
	            _react2.default.createElement(
	              'option',
	              { className: 'crs-option', value: 'work-experience' },
	              '5 or more years'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return CrsA;
	}(_react.Component);

	module.exports = connector(CrsA);

/***/ }

});