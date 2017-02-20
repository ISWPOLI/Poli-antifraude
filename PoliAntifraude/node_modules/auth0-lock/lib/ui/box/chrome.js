'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _multisize_slide = require('./multisize_slide');

var _multisize_slide2 = _interopRequireDefault(_multisize_slide);

var _global_message = require('./global_message');

var _global_message2 = _interopRequireDefault(_global_message);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var submitSvg = '<svg width="43px" height="42px" viewBox="0 0 43 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Lock" sketch:type="MSArtboardGroup" transform="translate(-280.000000, -3592.000000)"><g id="SMS" sketch:type="MSLayerGroup" transform="translate(153.000000, 3207.000000)"><g id="Group" sketch:type="MSShapeGroup"><g id="Login" transform="translate(0.000000, 369.000000)"><g id="Btn"><g id="Oval-302-+-Shape" transform="translate(128.000000, 17.000000)"><circle id="Oval-302" stroke="#FFFFFF" stroke-width="2" cx="20.5" cy="20" r="20"></circle><path d="M17.8,15.4 L19.2,14 L25.2,20 L19.2,26 L17.8,24.6 L22.4,20 L17.8,15.4 Z" id="Shape" fill="#FFFFFF"></path></g></g></g></g></g></g></g></svg>';
var submitText = '<svg class="icon-text" width="8px" height="12px" viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Web/Submit/Active" transform="translate(-148.000000, -32.000000)" fill="#FFFFFF"><polygon id="Shape" points="148 33.4 149.4 32 155.4 38 149.4 44 148 42.6 152.6 38"></polygon></g></g></svg>';

var SubmitButton = function (_React$Component) {
  _inherits(SubmitButton, _React$Component);

  function SubmitButton() {
    _classCallCheck(this, SubmitButton);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SubmitButton.prototype.focus = function focus() {
    _reactDom2.default.findDOMNode(this).focus();
  };

  SubmitButton.prototype.render = function render() {
    var _props = this.props,
        color = _props.color,
        disabled = _props.disabled,
        label = _props.label;

    var content = label ? _react2.default.createElement(
      'span',
      { className: 'auth0-label-submit' },
      label,
      _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: submitText } })
    ) : _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: submitSvg } });

    return _react2.default.createElement(
      'button',
      {
        className: 'auth0-lock-submit',
        disabled: disabled,
        style: { backgroundColor: color },
        type: 'submit'
      },
      _react2.default.createElement(
        'div',
        { className: 'auth0-loading-container' },
        _react2.default.createElement('div', { className: 'auth0-loading' })
      ),
      content
    );
  };

  return SubmitButton;
}(_react2.default.Component);

SubmitButton.propTypes = {
  color: _react2.default.PropTypes.string.isRequired,
  disabled: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.string
};

var MESSAGE_ANIMATION_DURATION = 250;
var AUXILIARY_ANIMATION_DURATION = 350;

var Chrome = function (_React$Component2) {
  _inherits(Chrome, _React$Component2);

  function Chrome(props) {
    _classCallCheck(this, Chrome);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = { moving: false, reverse: false };
    return _this2;
  }

  Chrome.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    var _props2 = this.props,
        auxiliaryPane = _props2.auxiliaryPane,
        showSubmitButton = _props2.showSubmitButton;
    var delayingShowSubmitButton = this.state.delayingShowSubmitButton;


    if (!showSubmitButton && nextProps.showSubmitButton && !delayingShowSubmitButton) {
      this.setState({ delayingShowSubmitButton: true });
    }

    if (!auxiliaryPane && nextProps.auxiliaryPane) {
      this.auxiliaryPaneTriggerInput = global.document.activeElement;
      this.setState({ moving: true });
    }

    if (auxiliaryPane && !nextProps.auxiliaryPane) {
      // TODO clear timeout
      setTimeout(function () {
        return _this3.setState({ moving: false });
      }, AUXILIARY_ANIMATION_DURATION + 50);
    }
  };

  Chrome.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this4 = this;

    var _props3 = this.props,
        autofocus = _props3.autofocus,
        auxiliaryPane = _props3.auxiliaryPane,
        error = _props3.error,
        screenName = _props3.screenName;


    if (!autofocus) return;

    if (auxiliaryPane && !prevProps.auxiliaryPane) {
      var _ret = function () {
        var input = _this4.findAutofocusInput(_this4.refs.auxiliary);

        if (input) {
          // TODO clear timeout
          setTimeout(function () {
            return input.focus();
          }, AUXILIARY_ANIMATION_DURATION);
        }

        return {
          v: void 0
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }

    if (!auxiliaryPane && prevProps.auxiliaryPane) {
      if (this.auxiliaryPaneTriggerInput) {
        // TODO clear timeout
        setTimeout(function () {
          return _this4.auxiliaryPaneTriggerInput.focus();
        }, AUXILIARY_ANIMATION_DURATION);
      }

      return;
    }

    if (screenName !== prevProps.screenName) {
      var _ret2 = function () {
        var input = _this4.findAutofocusInput();

        if (input) {
          if (_this4.mainScreenName(prevProps.screenName) !== _this4.mainScreenName()) {
            _this4.inputToFocus = input;
          } else {
            // TODO clear timeout
            setTimeout(function () {
              return input.focus();
            }, 17);
          }
        }

        return {
          v: void 0
        };
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    }

    if (!prevProps.error && error) {
      var _ret3 = function () {
        var input = _this4.findAutofocusInput();

        if (input) {
          // TODO clear timeout
          setTimeout(function () {
            return input.focus();
          }, 17);
        }

        return {
          v: void 0
        };
      }();

      if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
    }
  };

  Chrome.prototype.onWillSlide = function onWillSlide() {
    this.setState({ moving: true });
    this.sliding = true;
  };

  Chrome.prototype.onDidSlide = function onDidSlide() {
    this.sliding = false;
    this.setState({ reverse: false });
  };

  Chrome.prototype.onDidAppear = function onDidAppear() {
    this.setState({ moving: false });
    if (this.state.delayingShowSubmitButton) {
      this.setState({ delayingShowSubmitButton: false });
    }

    if (this.inputToFocus) {
      this.inputToFocus.focus();
      delete this.inputToFocus;
    }
  };

  Chrome.prototype.mainScreenName = function mainScreenName(str) {
    return (str || this.props.screenName || "").split(".")[0];
  };

  Chrome.prototype.findAutofocusInput = function findAutofocusInput(ref) {
    return _reactDom2.default.findDOMNode(ref || this.refs.screen).querySelector("input");
  };

  Chrome.prototype.focusError = function focusError() {
    var node = _reactDom2.default.findDOMNode(this.refs.screen);
    // TODO: make the error input selector configurable via props.
    var error = node.querySelector(".auth0-lock-error input");

    if (error) {
      error.focus();
    }
  };

  Chrome.prototype.render = function render() {
    var _props4 = this.props,
        avatar = _props4.avatar,
        auxiliaryPane = _props4.auxiliaryPane,
        backHandler = _props4.backHandler,
        contentComponent = _props4.contentComponent,
        contentProps = _props4.contentProps,
        disableSubmitButton = _props4.disableSubmitButton,
        error = _props4.error,
        isSubmitting = _props4.isSubmitting,
        logo = _props4.logo,
        primaryColor = _props4.primaryColor,
        screenName = _props4.screenName,
        showSubmitButton = _props4.showSubmitButton,
        submitButtonLabel = _props4.submitButtonLabel,
        success = _props4.success,
        terms = _props4.terms,
        title = _props4.title,
        transitionName = _props4.transitionName;
    var _state = this.state,
        delayingShowSubmitButton = _state.delayingShowSubmitButton,
        moving = _state.moving,
        reverse = _state.reverse;


    var backgroundUrl = void 0,
        name = void 0;
    if (avatar) {
      backgroundUrl = avatar;
      name = title;
    } else {
      backgroundUrl = logo;
      name = "";
    }

    var submitButton = showSubmitButton && !delayingShowSubmitButton && _react2.default.createElement(SubmitButton, {
      color: primaryColor,
      disabled: disableSubmitButton,
      key: 'submit',
      label: submitButtonLabel,
      ref: 'submit'
    });

    var globalError = error ? _react2.default.createElement(_global_message2.default, { key: 'global-error', message: error, type: 'error' }) : null;
    var globalSuccess = success ? _react2.default.createElement(_global_message2.default, { key: 'global-success', message: success, type: 'success' }) : null;

    var Content = contentComponent;

    var className = "auth0-lock-cred-pane";
    var isQuiet = !moving && !delayingShowSubmitButton;
    className += isQuiet ? " auth0-lock-quiet" : " auth0-lock-moving";

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(_header2.default, { title: title, name: name, backHandler: backHandler && this.handleBack.bind(this), backgroundUrl: backgroundUrl, backgroundColor: primaryColor, logoUrl: logo }),
      _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          transitionName: 'global-message',
          transitionEnterTimeout: MESSAGE_ANIMATION_DURATION,
          transitionLeaveTimeout: MESSAGE_ANIMATION_DURATION
        },
        globalSuccess,
        globalError
      ),
      _react2.default.createElement(
        'div',
        { style: { position: "relative" } },
        _react2.default.createElement(
          _multisize_slide2.default,
          {
            delay: 550,
            onDidAppear: this.onDidAppear.bind(this),
            onDidSlide: this.onDidSlide.bind(this),
            onWillSlide: this.onWillSlide.bind(this),
            transitionName: transitionName,
            reverse: reverse
          },
          _react2.default.createElement(
            'div',
            { key: this.mainScreenName(), className: 'auth0-lock-view-content' },
            _react2.default.createElement(
              'div',
              { style: { position: "relative" } },
              _react2.default.createElement(
                'div',
                { className: 'auth0-lock-body-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'auth0-lock-content' },
                  _react2.default.createElement(
                    'div',
                    { className: 'auth0-lock-form', ref: 'screen' },
                    _react2.default.createElement(Content, _extends({ focusSubmit: this.focusSubmit.bind(this) }, contentProps))
                  )
                ),
                terms && _react2.default.createElement(
                  'small',
                  { className: 'auth0-lock-terms' },
                  terms
                )
              )
            )
          )
        )
      ),
      submitButton,
      _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          ref: 'auxiliary',
          transitionName: 'slide',
          transitionEnterTimeout: AUXILIARY_ANIMATION_DURATION,
          transitionLeaveTimeout: AUXILIARY_ANIMATION_DURATION
        },
        auxiliaryPane
      )
    );
  };

  Chrome.prototype.focusSubmit = function focusSubmit() {
    this.refs.submit.focus();
  };

  Chrome.prototype.handleBack = function handleBack() {
    if (this.sliding) return;

    var backHandler = this.props.backHandler;

    this.setState({ reverse: true });
    backHandler();
  };

  return Chrome;
}(_react2.default.Component);

exports.default = Chrome;


Chrome.propTypes = {
  autofocus: _react2.default.PropTypes.bool.isRequired,
  avatar: _react2.default.PropTypes.string,
  auxiliaryPane: _react2.default.PropTypes.element,
  backHandler: _react2.default.PropTypes.func,
  contentComponent: _react2.default.PropTypes.func.isRequired, // TODO: it also can be a class component
  contentProps: _react2.default.PropTypes.object.isRequired,
  disableSubmitButton: _react2.default.PropTypes.bool.isRequired,
  error: _react2.default.PropTypes.string,
  isSubmitting: _react2.default.PropTypes.bool.isRequired,
  logo: _react2.default.PropTypes.string.isRequired,
  primaryColor: _react2.default.PropTypes.string.isRequired,
  showSubmitButton: _react2.default.PropTypes.bool.isRequired,
  submitButtonLabel: _react2.default.PropTypes.string,
  success: _react2.default.PropTypes.string,
  terms: _react2.default.PropTypes.element,
  title: _react2.default.PropTypes.string,
  transitionName: _react2.default.PropTypes.string.isRequired
};

Chrome.defaultProps = {
  autofocus: false,
  disableSubmitButton: false,
  showSubmitButton: true
};
