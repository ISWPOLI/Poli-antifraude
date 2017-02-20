"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthButton = function AuthButton(props) {
  var disabled = props.disabled,
      isBig = props.isBig,
      label = props.label,
      onClick = props.onClick,
      strategy = props.strategy,
      icon = props.icon,
      primaryColor = props.primaryColor,
      foregroundColor = props.foregroundColor;


  var className = "auth0-lock-social-button";
  if (isBig) className += " auth0-lock-social-big-button";

  var backgroundStyle = primaryColor ? { backgroundColor: primaryColor } : {};
  var foregroundStyle = foregroundColor ? { color: foregroundColor } : {};
  var iconStyle = icon ? { backgroundImage: "url('" + icon + "')" } : {};

  return _react2.default.createElement(
    "button",
    {
      className: className,
      "data-provider": strategy,
      disabled: disabled,
      onClick: onClick,
      style: backgroundStyle,
      type: "button"
    },
    _react2.default.createElement("div", { className: "auth0-lock-social-button-icon", style: iconStyle }),
    _react2.default.createElement(
      "div",
      { className: "auth0-lock-social-button-text", style: foregroundStyle },
      label
    )
  );
};

AuthButton.propTypes = {
  disabled: _react2.default.PropTypes.bool.isRequired,
  isBig: _react2.default.PropTypes.bool.isRequired,
  label: _react2.default.PropTypes.string.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired,
  strategy: _react2.default.PropTypes.string.isRequired,
  icon: _react2.default.PropTypes.string,
  primaryColor: _react2.default.PropTypes.string,
  foregroundColor: _react2.default.PropTypes.string
};

AuthButton.defaultProps = {
  disabled: false,
  isBig: true
};

exports.default = AuthButton;
