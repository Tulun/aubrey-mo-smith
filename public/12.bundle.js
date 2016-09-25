webpackJsonp([12],{

/***/ 391:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This component is for Skill transferability factors. 
	// Note: The maximum # of points for this is 100 points.

	var DonutChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./donut_chart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _require = __webpack_require__(354);

	var connector = _require.connector;

	var CrsCD = function (_Component) {
	  _inherits(CrsCD, _Component);

	  function CrsCD(props) {
	    _classCallCheck(this, CrsCD);

	    var _this = _possibleConstructorReturn(this, (CrsCD.__proto__ || Object.getPrototypeOf(CrsCD)).call(this, props));

	    _this.state = {
	      yes_no: [{ value: null, name: 'Select...' }, { value: true, name: 'Yes' }, { value: false, name: 'No' }]
	    };

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    return _this;
	  }

	  _createClass(CrsCD, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var node = _reactDom2.default.findDOMNode(this.refs.crscdform);

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
	      if (value === 'Select...') {
	        value = null;
	        switch (event.target.id) {
	          case 'cert-qualify':
	            this.props.handleCertQualify(value);
	            break;
	          case 'arranged-employ':
	            this.props.handleArrangedEmploy(value);
	            break;
	          case 'prov-territory-nom':
	            this.props.handleProvTerritoryNom(value);
	            break;
	        }
	      } else {
	        value = value == 'true';
	        switch (event.target.id) {
	          case 'cert-qualify':
	            this.props.handleCertQualify(value);
	            break;
	          case 'arranged-employ':
	            this.props.handleArrangedEmploy(value);
	            break;
	          case 'prov-territory-nom':
	            this.props.handleProvTerritoryNom(value);
	            break;
	        }
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
	          { className: 'crs-c-d' },
	          _react2.default.createElement(
	            'form',
	            { ref: 'crscdform', className: 'crs-b-form' },
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-cd-question' },
	              'Do you have a certifcate of qualification?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'cert-qualify',
	                onChange: this.handleChange,
	                className: 'crs-select' },
	              this.state.yes_no.map(createList)
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-cd-question' },
	              'Do you have arranged employment? (positive Labour Market Impact Assessment required)'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'arranged-employ',
	                onChange: this.handleChange, className: 'crs-select' },
	              this.state.yes_no.map(createList)
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'crs-cd-question' },
	              'Do you have provincial or territorial nomination?'
	            ),
	            _react2.default.createElement(
	              'select',
	              { id: 'prov-territory-nom',
	                onChange: this.handleChange, className: 'crs-select' },
	              this.state.yes_no.map(createList)
	            )
	          )
	        ),
	        _react2.default.createElement(DonutChart, null)
	      );
	    }
	  }]);

	  return CrsCD;
	}(_react.Component);

	module.exports = connector(CrsCD);

/***/ }

});