'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _auth_button = require('../button/auth_button');

var _auth_button2 = _interopRequireDefault(_auth_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuickAuthPane = function QuickAuthPane(props) {
  var alternativeLabel = props.alternativeLabel,
      alternativeClickHandler = props.alternativeClickHandler,
      buttonLabel = props.buttonLabel,
      buttonClickHandler = props.buttonClickHandler,
      header = props.header,
      strategy = props.strategy,
      buttonIcon = props.buttonIcon,
      primaryColor = props.primaryColor,
      foregroundColor = props.foregroundColor;


  var alternative = alternativeLabel ? _react2.default.createElement(
    'p',
    { className: 'auth0-lock-alternative' },
    _react2.default.createElement(
      'a',
      {
        className: 'auth0-lock-alternative-link',
        href: '#',
        onClick: function onClick(e) {
          e.preventDefault();alternativeClickHandler(e);
        }
      },
      alternativeLabel
    )
  ) : null;

  return _react2.default.createElement(
    'div',
    { className: 'auth0-lock-last-login-pane' },
    header,
    _react2.default.createElement(_auth_button2.default, {
      label: buttonLabel,
      onClick: function onClick(e) {
        e.preventDefault();buttonClickHandler(e);
      },
      strategy: strategy,
      primaryColor: primaryColor,
      foregroundColor: foregroundColor,
      icon: buttonIcon
    }),
    alternative,
    _react2.default.createElement(
      'div',
      { className: 'auth0-loading-container' },
      _react2.default.createElement('div', { className: 'auth0-loading' })
    )
  );
};

QuickAuthPane.propTypes = {
  alternativeLabel: _react2.default.PropTypes.string,
  alternativeClickHandler: function alternativeClickHandler(props, propName, component) {
    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    if (props.alternativeLabel !== undefined) {
      var _React$PropTypes$func;

      return (_React$PropTypes$func = _react2.default.PropTypes.func).isRequired.apply(_React$PropTypes$func, [props, propName, component].concat(rest));
    }
  },
  buttonLabel: _react2.default.PropTypes.string.isRequired,
  buttonClickHandler: _react2.default.PropTypes.func.isRequired,
  header: _react2.default.PropTypes.element,
  strategy: _react2.default.PropTypes.string.isRequired
};

exports.default = QuickAuthPane;
