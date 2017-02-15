'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmationPane = function ConfirmationPane(_ref) {
  var backHandler = _ref.backHandler,
      children = _ref.children,
      closeHandler = _ref.closeHandler,
      svg = _ref.svg;
  return _react2.default.createElement(
    'div',
    { className: 'auth0-lock-confirmation' },
    closeHandler && _react2.default.createElement(_button.CloseButton, { onClick: closeHandler }),
    backHandler && _react2.default.createElement(_button.BackButton, { onClick: backHandler }),
    _react2.default.createElement(
      'div',
      { className: 'auth0-lock-confirmation-content' },
      _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: svg } }),
      children
    )
  );
};

ConfirmationPane.propTypes = {
  backHandler: _react2.default.PropTypes.func,
  closeHandler: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element.isRequired, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element).isRequired]),
  svg: _react2.default.PropTypes.string.isRequired
};

exports.default = ConfirmationPane;
