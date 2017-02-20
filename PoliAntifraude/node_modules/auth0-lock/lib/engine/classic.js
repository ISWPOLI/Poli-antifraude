'use strict';

exports.__esModule = true;
exports.isSSOEnabled = isSSOEnabled;
exports.matchesEnterpriseConnection = matchesEnterpriseConnection;
exports.usernameStyle = usernameStyle;
exports.hasOnlyClassicConnections = hasOnlyClassicConnections;
exports.useBigSocialButtons = useBigSocialButtons;

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _login = require('./classic/login');

var _login2 = _interopRequireDefault(_login);

var _sign_up_screen = require('./classic/sign_up_screen');

var _sign_up_screen2 = _interopRequireDefault(_sign_up_screen);

var _mfa_login_screen = require('./classic/mfa_login_screen');

var _mfa_login_screen2 = _interopRequireDefault(_mfa_login_screen);

var _reset_password = require('../connection/database/reset_password');

var _reset_password2 = _interopRequireDefault(_reset_password);

var _index3 = require('../core/sso/index');

var _index4 = require('../connection/database/index');

var _enterprise = require('../connection/enterprise');

var _tenant = require('../core/tenant');

var _index5 = require('../connection/social/index');

var _email = require('../field/email');

var _username = require('../field/username');

var _index6 = require('../core/index');

var l = _interopRequireWildcard(_index6);

var _kerberos_screen = require('../connection/enterprise/kerberos_screen');

var _kerberos_screen2 = _interopRequireDefault(_kerberos_screen);

var _hrd_screen = require('../connection/enterprise/hrd_screen');

var _hrd_screen2 = _interopRequireDefault(_hrd_screen);

var _quick_auth_screen = require('../connection/enterprise/quick_auth_screen');

var _quick_auth_screen2 = _interopRequireDefault(_quick_auth_screen);

var _quick_auth = require('../quick_auth');

var _loading_screen = require('../core/loading_screen');

var _loading_screen2 = _interopRequireDefault(_loading_screen);

var _error_screen = require('../core/error_screen');

var _error_screen2 = _interopRequireDefault(_error_screen);

var _last_login_screen = require('../core/sso/last_login_screen');

var _last_login_screen2 = _interopRequireDefault(_last_login_screen);

var _sync = require('../sync');

var _index7 = require('../field/index');

var _index8 = require('../store/index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function isSSOEnabled(m) {
  return matchesEnterpriseConnection(m, (0, _index4.databaseUsernameValue)(m));
}

function matchesEnterpriseConnection(m, usernameValue) {
  return (0, _enterprise.isEnterpriseDomain)(m, usernameValue);
}

function usernameStyle(m) {
  return (0, _index4.authWithUsername)(m) && !isADEnabled(m) ? "username" : "email";
}

function hasOnlyClassicConnections(m) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  for (var _len = arguments.length, strategies = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    strategies[_key - 2] = arguments[_key];
  }

  return l.hasOnlyConnections.apply(l, [m, type].concat(strategies)) && !l.hasSomeConnections(m, "passwordless");
}

function useBigSocialButtons(m) {
  return (0, _index5.useBigButtons)(m, hasOnlyClassicConnections(m, "social") ? 5 : 3);
}

function validateAllowedConnections(m) {
  var anyDBConnection = l.hasSomeConnections(m, "database");
  var anySocialConnection = l.hasSomeConnections(m, "social");
  var anyEnterpriseConnection = l.hasSomeConnections(m, "enterprise");

  if (!anyDBConnection && !anySocialConnection && !anyEnterpriseConnection) {
    var error = new Error("At least one database, enterprise or social connection needs to be available.");
    error.code = "no_connection";
    m = l.stop(m, error);
  } else if (!anyDBConnection && (0, _index4.hasInitialScreen)(m, "forgotPassword")) {
    var _error = new Error("The `initialScreen` option was set to \"forgotPassword\" but no database connection is available.");
    _error.code = "unavailable_initial_screen";
    m = l.stop(m, _error);
  } else if (!anyDBConnection && !anySocialConnection && (0, _index4.hasInitialScreen)(m, "signUp")) {
    var _error2 = new Error("The `initialScreen` option was set to \"signUp\" but no database or social connection is available.");
    _error2.code = "unavailable_initial_screen";
    m = l.stop(m, _error2);
  }

  if ((0, _tenant.defaultDirectoryName)(m) && !(0, _tenant.defaultDirectory)(m)) {
    l.error(m, 'The account\'s default directory "' + (0, _tenant.defaultDirectoryName)(m) + '" is not enabled.');
  }

  if ((0, _index4.defaultDatabaseConnectionName)(m) && !(0, _index4.defaultDatabaseConnection)(m)) {
    l.warn(m, 'The provided default database connection "' + (0, _index4.defaultDatabaseConnectionName)(m) + '" is not enabled.');
  }

  if ((0, _enterprise.defaultEnterpriseConnectionName)(m) && !(0, _enterprise.defaultEnterpriseConnection)(m)) {
    l.warn(m, 'The provided default enterprise connection "' + (0, _enterprise.defaultEnterpriseConnectionName)(m) + '" is not enabled or does not allow email/password authentication.');
  }

  return m;
}

var Classic = function () {
  function Classic() {
    _classCallCheck(this, Classic);
  }

  Classic.prototype.didInitialize = function didInitialize(model, options) {
    model = (0, _index5.initSocial)(model, options);
    model = (0, _index4.initDatabase)(model, options);
    model = (0, _enterprise.initEnterprise)(model, options);

    var _ref = options.prefill || {},
        email = _ref.email,
        username = _ref.username;

    if (typeof email === "string") model = (0, _email.setEmail)(model, email);
    if (typeof username === "string") model = (0, _username.setUsername)(model, username, "username", false);

    return model;
  };

  Classic.prototype.didReceiveClientSettings = function didReceiveClientSettings(m) {
    return validateAllowedConnections(m);
  };

  Classic.prototype.willShow = function willShow(m, opts) {
    m = (0, _index4.overrideDatabaseOptions)(m, opts);
    if ((0, _sync.isSuccess)(m, "client")) {
      m = validateAllowedConnections(m);
    }
    return m;
  };

  Classic.prototype.render = function render(m) {
    // TODO: remove the detail about the loading pane being pinned,
    // sticky screens should be handled at the box module.
    if (!(0, _sync.isDone)(m) || m.get("isLoadingPanePinned")) {
      return new _loading_screen2.default();
    }

    if (l.hasStopped(m)) {
      return new _error_screen2.default();
    }

    if ((0, _index4.hasScreen)(m, "login")) {
      if (!(0, _quick_auth.hasSkippedQuickAuth)(m) && l.ui.rememberLastLogin(m) && (0, _index4.hasInitialScreen)(m, "login")) {
        if ((0, _enterprise.isInCorpNetwork)(m)) {
          return new _kerberos_screen2.default();
        }

        var conn = (0, _index3.lastUsedConnection)(m);
        if (conn && (0, _sync.isSuccess)(m, "sso")) {
          if (l.hasConnection(m, conn.get("name"))) {
            return new _last_login_screen2.default();
          }
        }
      }

      if ((0, _enterprise.quickAuthConnection)(m)) {
        return new _quick_auth_screen2.default();
      }

      if ((0, _enterprise.isHRDActive)(m)) {
        return new _hrd_screen2.default();
      }
    }

    var Screen = Classic.SCREENS[(0, _index4.getScreen)(m)];
    if (Screen) return new Screen();

    setTimeout(function () {
      var stopError = new Error("Internal error");
      stopError.code = "internal_error";
      stopError.description = 'Couldn\'t find a screen "' + (0, _index4.getScreen)(m) + '"';
      (0, _index8.swap)(_index8.updateEntity, "lock", l.id(m), l.stop, stopError);
    }, 0);

    return new _error_screen2.default();
  };

  return Classic;
}();

Classic.SCREENS = {
  login: _login2.default,
  forgotPassword: _reset_password2.default,
  signUp: _sign_up_screen2.default,
  mfaLogin: _mfa_login_screen2.default
};
exports.default = new Classic();
