'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withCookies;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function withCookies(Component) {
  function Wrapper(props, _ref) {
    var cookies = _ref.cookies;

    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return _react2.default.createElement(Component, _extends({}, remainingProps, {
      cookies: cookies,
      ref: wrappedComponentRef
    }));
  }

  Wrapper.displayName = 'withCookies(' + (Component.displayName || Component.name) + ')';
  Wrapper.WrappedComponent = Component;

  Wrapper.propTypes = {
    wrappedComponentRef: _propTypes.func
  };

  Wrapper.contextTypes = {
    cookies: (0, _propTypes.instanceOf)(_universalCookie2.default).isRequired
  };

  return (0, _hoistNonReactStatics2.default)(Wrapper, Component);
}
module.exports = exports['default'];