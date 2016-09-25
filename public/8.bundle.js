webpackJsonp([8],{

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

	var DonutChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./donut_chart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing(props) {
	    _classCallCheck(this, Landing);

	    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));

	    _this.state = {
	      married: [{ value: null, name: 'Select...' }, { value: true, name: 'Married or Common Law' }, { value: false, name: 'Single' }]
	    };
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(Landing, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var value = event.target.value;
	      if (value === 'Select...') {
	        value = null;
	        switch (event.target.id) {
	          case 'married':
	            this.props.handleMaritalStatus(value);
	            break;
	        }
	      } else {
	        value = value == 'true';
	        switch (event.target.id) {
	          case 'married':
	            this.props.handleMaritalStatus(value);
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var createList = function createList(item, key) {
	        return React.createElement(
	          'option',
	          { className: 'crs-option', key: key, value: item.value },
	          item.name
	        );
	      };
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'p',
	          { className: 'pre-question' },
	          ' Are you married or common law, or single?'
	        ),
	        React.createElement(
	          'select',
	          {
	            id: 'married',
	            className: 'pre-question-select',
	            onChange: this.handleChange },
	          this.state.married.map(createList)
	        )
	      );
	    }
	  }]);

	  return Landing;
	}(React.Component);

	module.exports = connector(Landing);

/***/ }

});