;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react'), require('react-dom'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'react', 'react-dom'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.ReactBigCalendar = {}), global.React, global.ReactDOM))
})(this, function (exports, React, ReactDOM) {
  'use strict'

  function _interopDefault(e) {
    return e && e.__esModule ? e : { default: e }
  }

  var React__default = /*#__PURE__*/ _interopDefault(React)
  var ReactDOM__default = /*#__PURE__*/ _interopDefault(ReactDOM)

  function NoopWrapper(props) {
    return props.children
  }

  function _typeof(obj) {
    '@babel/helpers - typeof'

    return (
      (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      _typeof(obj)
    )
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, 'string')
    return _typeof(key) === 'symbol' ? key : String(key)
  }

  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      })
    } else {
      obj[key] = value
    }
    return obj
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object)
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object)
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable
        })),
        keys.push.apply(keys, symbols)
    }
    return keys
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {}
      i % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty$1(target, key, source[key])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
    }
    return target
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {}
    var target = {}
    var sourceKeys = Object.keys(source)
    var key, i
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i]
      if (excluded.indexOf(key) >= 0) continue
      target[key] = source[key]
    }
    return target
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {}
    var target = _objectWithoutPropertiesLoose(source, excluded)
    var key, i
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
        target[key] = source[key]
      }
    }
    return target
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor)
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', {
      writable: false,
    })
    return Constructor
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p
          return o
        }
    return _setPrototypeOf(o, p)
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true,
      },
    })
    Object.defineProperty(subClass, 'prototype', {
      writable: false,
    })
    if (superClass) _setPrototypeOf(subClass, superClass)
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return _getPrototypeOf(o)
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false
    if (Reflect.construct.sham) return false
    if (typeof Proxy === 'function') return true
    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
      return true
    } catch (e) {
      return false
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return self
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
      return call
    } else if (call !== void 0) {
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    }
    return _assertThisInitialized(self)
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct()
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor
        result = Reflect.construct(Super, arguments, NewTarget)
      } else {
        result = Super.apply(this, arguments)
      }
      return _possibleConstructorReturn(this, result)
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
  }

  function _iterableToArrayLimit(arr, i) {
    var _i =
      null == arr
        ? null
        : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
          arr['@@iterator']
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1
      try {
        if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
          if (Object(_i) !== _i) return
          _n = !1
        } else
          for (
            ;
            !(_n = (_s = _x.call(_i)).done) &&
            (_arr.push(_s.value), _arr.length !== i);
            _n = !0
          );
      } catch (err) {
        ;(_d = !0), (_e = err)
      } finally {
        try {
          if (
            !_n &&
            null != _i['return'] &&
            ((_r = _i['return']()), Object(_r) !== _r)
          )
            return
        } finally {
          if (_d) throw _e
        }
      }
      return _arr
    }
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
    return arr2
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
    var n = Object.prototype.toString.call(o).slice(8, -1)
    if (n === 'Object' && o.constructor) n = o.constructor.name
    if (n === 'Map' || n === 'Set') return Array.from(o)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen)
  }

  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    )
  }

  function _extends() {
    _extends = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }
    return _extends.apply(this, arguments)
  }

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {}

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var invariant = function (condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument')
      }
    }

    if (!condition) {
      var error
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.'
        )
      } else {
        var args = [a, b, c, d, e, f]
        var argIndex = 0
        error = new Error(
          format.replace(/%s/g, function () {
            return args[argIndex++]
          })
        )
        error.name = 'Invariant Violation'
      }

      error.framesToPop = 1 // we don't care about invariant's own frame
      throw error
    }
  }

  var invariant_1 = invariant

  var noop$1 = function noop() {}

  function readOnlyPropType(handler, name) {
    return function (props, propName) {
      if (props[propName] !== undefined) {
        if (!props[handler]) {
          return new Error(
            'You have provided a `' +
              propName +
              '` prop to `' +
              name +
              '` ' +
              ('without an `' +
                handler +
                '` handler prop. This will render a read-only field. ') +
              ('If the field should be mutable use `' +
                defaultKey(propName) +
                '`. ') +
              ('Otherwise, set `' + handler + '`.')
          )
        }
      }
    }
  }

  function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {}
    Object.keys(controlledValues).forEach(function (prop) {
      // add default propTypes for folks that use runtime checks
      propTypes[defaultKey(prop)] = noop$1

      {
        var handler = controlledValues[prop]
        !(typeof handler === 'string' && handler.trim().length)
          ? invariant_1(
              false,
              'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable',
              displayName,
              prop
            )
          : void 0
        propTypes[prop] = readOnlyPropType(handler, displayName)
      }
    })
    return propTypes
  }
  function isProp(props, prop) {
    return props[prop] !== undefined
  }
  function defaultKey(key) {
    return 'default' + key.charAt(0).toUpperCase() + key.substr(1)
  }
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  function canAcceptRef(component) {
    return (
      !!component &&
      (typeof component !== 'function' ||
        (component.prototype && component.prototype.isReactComponent))
    )
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype)
    subClass.prototype.constructor = subClass
    _setPrototypeOf(subClass, superClass)
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(
      this.props,
      this.state
    )
    if (state !== null && state !== undefined) {
      this.setState(state)
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(
        nextProps,
        prevState
      )
      return state !== null && state !== undefined ? state : null
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this))
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props
      var prevState = this.state
      this.props = nextProps
      this.state = nextState
      this.__reactInternalSnapshotFlag = true
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      )
    } finally {
      this.props = prevProps
      this.state = prevState
    }
  }

  // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.
  componentWillMount.__suppressDeprecationWarning = true
  componentWillReceiveProps.__suppressDeprecationWarning = true
  componentWillUpdate.__suppressDeprecationWarning = true

  function polyfill(Component) {
    var prototype = Component.prototype

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components')
    }

    if (
      typeof Component.getDerivedStateFromProps !== 'function' &&
      typeof prototype.getSnapshotBeforeUpdate !== 'function'
    ) {
      return Component
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null
    var foundWillReceivePropsName = null
    var foundWillUpdateName = null
    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount'
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount'
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps'
    } else if (
      typeof prototype.UNSAFE_componentWillReceiveProps === 'function'
    ) {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps'
    }
    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate'
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate'
    }
    if (
      foundWillMountName !== null ||
      foundWillReceivePropsName !== null ||
      foundWillUpdateName !== null
    ) {
      var componentName = Component.displayName || Component.name
      var newApiName =
        typeof Component.getDerivedStateFromProps === 'function'
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()'

      throw Error(
        'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
          componentName +
          ' uses ' +
          newApiName +
          ' but also contains the following legacy lifecycles:' +
          (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
          (foundWillReceivePropsName !== null
            ? '\n  ' + foundWillReceivePropsName
            : '') +
          (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
          '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
          'https://fb.me/react-async-component-lifecycle-hooks'
      )
    }

    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount
      prototype.componentWillReceiveProps = componentWillReceiveProps
    }

    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error(
          'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
        )
      }

      prototype.componentWillUpdate = componentWillUpdate

      var componentDidUpdate = prototype.componentDidUpdate

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(
        prevProps,
        prevState,
        maybeSnapshot
      ) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag
          ? this.__reactInternalSnapshot
          : maybeSnapshot

        componentDidUpdate.call(this, prevProps, prevState, snapshot)
      }
    }

    return Component
  }

  var _jsxFileName = '/Users/jquense/src/uncontrollable/src/uncontrollable.js'
  function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) {
      methods = []
    }

    var displayName = Component.displayName || Component.name || 'Component'
    var canAcceptRef$1 = canAcceptRef(Component)
    var controlledProps = Object.keys(controlledValues)
    var PROPS_TO_OMIT = controlledProps.map(defaultKey)
    !(canAcceptRef$1 || !methods.length)
      ? invariant_1(
          false,
          '[uncontrollable] stateless function components cannot pass through methods ' +
            'because they have no associated instances. Check component: ' +
            displayName +
            ', ' +
            'attempting to pass through methods: ' +
            methods.join(', ')
        )
      : void 0

    var UncontrolledComponent =
      /*#__PURE__*/
      (function (_React$Component) {
        _inheritsLoose(UncontrolledComponent, _React$Component)

        function UncontrolledComponent() {
          var _this

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key]
          }

          _this =
            _React$Component.call.apply(
              _React$Component,
              [this].concat(args)
            ) || this
          _this.handlers = Object.create(null)
          controlledProps.forEach(function (propName) {
            var handlerName = controlledValues[propName]

            var handleChange = function handleChange(value) {
              if (_this.props[handlerName]) {
                var _this$props

                _this._notifying = true

                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2 - 1] = arguments[_key2]
                }

                ;(_this$props = _this.props)[handlerName].apply(
                  _this$props,
                  [value].concat(args)
                )

                _this._notifying = false
              }

              if (!_this.unmounted)
                _this.setState(function (_ref) {
                  var _extends2

                  var values = _ref.values
                  return {
                    values: _extends(
                      Object.create(null),
                      values,
                      ((_extends2 = {}),
                      (_extends2[propName] = value),
                      _extends2)
                    ),
                  }
                })
            }

            _this.handlers[handlerName] = handleChange
          })
          if (methods.length)
            _this.attachRef = function (ref) {
              _this.inner = ref
            }
          var values = Object.create(null)
          controlledProps.forEach(function (key) {
            values[key] = _this.props[defaultKey(key)]
          })
          _this.state = {
            values: values,
            prevProps: {},
          }
          return _this
        }

        var _proto = UncontrolledComponent.prototype

        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
          //let setState trigger the update
          return !this._notifying
        }

        UncontrolledComponent.getDerivedStateFromProps =
          function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values,
              prevProps = _ref2.prevProps
            var nextState = {
              values: _extends(Object.create(null), values),
              prevProps: {},
            }
            controlledProps.forEach(function (key) {
              /**
               * If a prop switches from controlled to Uncontrolled
               * reset its value to the defaultValue
               */
              nextState.prevProps[key] = props[key]

              if (!isProp(props, key) && isProp(prevProps, key)) {
                nextState.values[key] = props[defaultKey(key)]
              }
            })
            return nextState
          }

        _proto.componentWillUnmount = function componentWillUnmount() {
          this.unmounted = true
        }

        _proto.render = function render() {
          var _this2 = this

          var _this$props2 = this.props,
            innerRef = _this$props2.innerRef,
            props = _objectWithoutPropertiesLoose(_this$props2, ['innerRef'])

          PROPS_TO_OMIT.forEach(function (prop) {
            delete props[prop]
          })
          var newProps = {}
          controlledProps.forEach(function (propName) {
            var propValue = _this2.props[propName]
            newProps[propName] =
              propValue !== undefined
                ? propValue
                : _this2.state.values[propName]
          })
          return React__default.default.createElement(
            Component,
            _extends({}, props, newProps, this.handlers, {
              ref: innerRef || this.attachRef,
            })
          )
        }

        return UncontrolledComponent
      })(React__default.default.Component)

    polyfill(UncontrolledComponent)
    UncontrolledComponent.displayName = 'Uncontrolled(' + displayName + ')'
    UncontrolledComponent.propTypes = _extends(
      {
        innerRef: function innerRef() {},
      },
      uncontrolledPropTypes(controlledValues, displayName)
    )
    methods.forEach(function (method) {
      UncontrolledComponent.prototype[method] = function $proxiedMethod() {
        var _this$inner

        return (_this$inner = this.inner)[method].apply(_this$inner, arguments)
      }
    })
    var WrappedComponent = UncontrolledComponent

    if (React__default.default.forwardRef) {
      WrappedComponent = React__default.default.forwardRef(function (
        props,
        ref
      ) {
        return React__default.default.createElement(
          UncontrolledComponent,
          _extends({}, props, {
            innerRef: ref,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128,
            },
            __self: this,
          })
        )
      })
      WrappedComponent.propTypes = UncontrolledComponent.propTypes
    }

    WrappedComponent.ControlledComponent = Component
    /**
     * useful when wrapping a Component and you want to control
     * everything
     */

    WrappedComponent.deferControlTo = function (
      newComponent,
      additions,
      nextMethods
    ) {
      if (additions === void 0) {
        additions = {}
      }

      return uncontrollable(
        newComponent,
        _extends({}, controlledValues, additions),
        nextMethods
      )
    }

    return WrappedComponent
  }

  function r(e) {
    var t,
      f,
      n = ''
    if ('string' == typeof e || 'number' == typeof e) n += e
    else if ('object' == typeof e)
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f))
      else for (t in e) e[t] && (n && (n += ' '), (n += t))
    return n
  }
  function clsx() {
    for (var e, t, f = 0, n = ''; f < arguments.length; )
      (e = arguments[f++]) && (t = r(e)) && (n && (n += ' '), (n += t))
    return n
  }

  var propTypesExports = {}
  var propTypes = {
    get exports() {
      return propTypesExports
    },
    set exports(v) {
      propTypesExports = v
    },
  }

  var reactIsExports = {}
  var reactIs = {
    get exports() {
      return reactIsExports
    },
    set exports(v) {
      reactIsExports = v
    },
  }

  var reactIs_development = {}

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    ;(function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for('react.fragment')
        : 0xeacb
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for('react.strict_mode')
        : 0xeacc
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for('react.profiler')
        : 0xead2
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for('react.provider')
        : 0xeacd
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for('react.async_mode')
        : 0xeacf
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for('react.concurrent_mode')
        : 0xeacf
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for('react.forward_ref')
        : 0xead0
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for('react.suspense')
        : 0xead1
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for('react.suspense_list')
        : 0xead8
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for('react.fundamental')
        : 0xead5
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for('react.responder')
        : 0xead6
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7

      function isValidElementType(type) {
        return (
          typeof type === 'string' ||
          typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === 'object' &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        )
      }

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type

                default:
                  var $$typeofType = type && type.$$typeof

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType

                    default:
                      return $$typeof
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof
          }
        }

        return undefined
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE
      var ContextConsumer = REACT_CONTEXT_TYPE
      var ContextProvider = REACT_PROVIDER_TYPE
      var Element = REACT_ELEMENT_TYPE
      var ForwardRef = REACT_FORWARD_REF_TYPE
      var Fragment = REACT_FRAGMENT_TYPE
      var Lazy = REACT_LAZY_TYPE
      var Memo = REACT_MEMO_TYPE
      var Portal = REACT_PORTAL_TYPE
      var Profiler = REACT_PROFILER_TYPE
      var StrictMode = REACT_STRICT_MODE_TYPE
      var Suspense = REACT_SUSPENSE_TYPE
      var hasWarnedAboutDeprecatedIsAsyncMode = false // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true // Using console['warn'] to evade Babel and ESLint

            console['warn'](
              'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                'and will be removed in React 17+. Update your code to use ' +
                'ReactIs.isConcurrentMode() instead. It has the exact same API.'
            )
          }
        }

        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        )
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE
      }
      function isElement(object) {
        return (
          typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        )
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE
      }

      reactIs_development.AsyncMode = AsyncMode
      reactIs_development.ConcurrentMode = ConcurrentMode
      reactIs_development.ContextConsumer = ContextConsumer
      reactIs_development.ContextProvider = ContextProvider
      reactIs_development.Element = Element
      reactIs_development.ForwardRef = ForwardRef
      reactIs_development.Fragment = Fragment
      reactIs_development.Lazy = Lazy
      reactIs_development.Memo = Memo
      reactIs_development.Portal = Portal
      reactIs_development.Profiler = Profiler
      reactIs_development.StrictMode = StrictMode
      reactIs_development.Suspense = Suspense
      reactIs_development.isAsyncMode = isAsyncMode
      reactIs_development.isConcurrentMode = isConcurrentMode
      reactIs_development.isContextConsumer = isContextConsumer
      reactIs_development.isContextProvider = isContextProvider
      reactIs_development.isElement = isElement
      reactIs_development.isForwardRef = isForwardRef
      reactIs_development.isFragment = isFragment
      reactIs_development.isLazy = isLazy
      reactIs_development.isMemo = isMemo
      reactIs_development.isPortal = isPortal
      reactIs_development.isProfiler = isProfiler
      reactIs_development.isStrictMode = isStrictMode
      reactIs_development.isSuspense = isSuspense
      reactIs_development.isValidElementType = isValidElementType
      reactIs_development.typeOf = typeOf
    })()
  }

  ;(function (module) {
    {
      module.exports = reactIs_development
    }
  })(reactIs)

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols
  var hasOwnProperty$e = Object.prototype.hasOwnProperty
  var propIsEnumerable = Object.prototype.propertyIsEnumerable

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    }

    return Object(val)
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc') // eslint-disable-line no-new-wrappers
      test1[5] = 'de'
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {}
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n]
      })
      if (order2.join('') !== '0123456789') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {}
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter
      })
      if (
        Object.keys(Object.assign({}, test3)).join('') !==
        'abcdefghijklmnopqrst'
      ) {
        return false
      }

      return true
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false
    }
  }

  var objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from
        var to = toObject(target)
        var symbols

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s])

          for (var key in from) {
            if (hasOwnProperty$e.call(from, key)) {
              to[key] = from[key]
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from)
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]]
              }
            }
          }
        }

        return to
      }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$2

  var has$2 = Function.call.bind(Object.prototype.hasOwnProperty)

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var printWarning$2 = function () {}

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1
    var loggedTypeFailures = {}
    var has$1 = has$2

    printWarning$2 = function (text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {
        /**/
      }
    }
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes$1(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has$1(typeSpecs, typeSpecName)) {
          var error
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') +
                  ': ' +
                  location +
                  ' type `' +
                  typeSpecName +
                  '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' +
                  typeof typeSpecs[typeSpecName] +
                  '`.' +
                  'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              )
              err.name = 'Invariant Violation'
              throw err
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret$1
            )
          } catch (ex) {
            error = ex
          }
          if (error && !(error instanceof Error)) {
            printWarning$2(
              (componentName || 'React class') +
                ': type specification of ' +
                location +
                ' `' +
                typeSpecName +
                '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' +
                typeof error +
                '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
            )
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true

            var stack = getStack ? getStack() : ''

            printWarning$2(
              'Failed ' +
                location +
                ' type: ' +
                error.message +
                (stack != null ? stack : '')
            )
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes$1.resetWarningCache = function () {
    {
      loggedTypeFailures = {}
    }
  }

  var checkPropTypes_1 = checkPropTypes$1

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactIs$1 = reactIsExports
  var assign = objectAssign

  var ReactPropTypesSecret = ReactPropTypesSecret_1
  var has = has$2
  var checkPropTypes = checkPropTypes_1

  var printWarning$1 = function () {}

  {
    printWarning$1 = function (text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }

  function emptyFunctionThatReturnsNull() {
    return null
  }

  var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
    var FAUX_ITERATOR_SYMBOL = '@@iterator' // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL])
      if (typeof iteratorFn === 'function') {
        return iteratorFn
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>'

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    }

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message
      this.data = data && typeof data === 'object' ? data : {}
      this.stack = ''
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {}
        var manualPropTypeWarningCount = 0
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS
        propFullName = propFullName || propName

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            )
            err.name = 'Invariant Violation'
            throw err
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                  'function for the `' +
                  propFullName +
                  '` prop on `' +
                  componentName +
                  '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                  'for details.'
              )
              manualPropTypeCallCache[cacheKey] = true
              manualPropTypeWarningCount++
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                'The ' +
                  location +
                  ' `' +
                  propFullName +
                  '` is marked as required ' +
                  ('in `' + componentName + '`, but its value is `null`.')
              )
            }
            return new PropTypeError(
              'The ' +
                location +
                ' `' +
                propFullName +
                '` is marked as required in ' +
                ('`' + componentName + '`, but its value is `undefined`.')
            )
          }
          return null
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          )
        }
      }

      var chainedCheckType = checkType.bind(null, false)
      chainedCheckType.isRequired = checkType.bind(null, true)

      return chainedCheckType
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue)

          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                preciseType +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('`' + expectedType + '`.'),
            { expectedType: expectedType }
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull)
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside arrayOf.'
          )
        }
        var propValue = props[propName]
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an array.')
          )
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + '[' + i + ']',
            ReactPropTypesSecret
          )
          if (error instanceof Error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!ReactIs$1.isValidElementType(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement type.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS
          var actualClassName = getClassName(props[propName])
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                actualClassName +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('instance of `' + expectedClassName + '`.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' +
                arguments.length +
                ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            )
          } else {
            printWarning$1(
              'Invalid argument supplied to oneOf, expected an array.'
            )
          }
        }
        return emptyFunctionThatReturnsNull
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null
          }
        }

        var valuesString = JSON.stringify(
          expectedValues,
          function replacer(key, value) {
            var type = getPreciseType(value)
            if (type === 'symbol') {
              return String(value)
            }
            return value
          }
        )
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` of value `' +
            String(propValue) +
            '` ' +
            ('supplied to `' +
              componentName +
              '`, expected one of ' +
              valuesString +
              '.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside objectOf.'
          )
        }
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an object.')
          )
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret
            )
            if (error instanceof Error) {
              return error
            }
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1(
          'Invalid argument supplied to oneOfType, expected an instance of array.'
        )
        return emptyFunctionThatReturnsNull
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i]
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' +
              getPostfixForTypeWarning(checker) +
              ' at index ' +
              i +
              '.'
          )
          return emptyFunctionThatReturnsNull
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var expectedTypes = []
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i]
          var checkerResult = checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret
          )
          if (checkerResult == null) {
            return null
          }
          if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType)
          }
        }
        var expectedTypesMessage =
          expectedTypes.length > 0
            ? ', expected one of type [' + expectedTypes.join(', ') + ']'
            : ''
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` supplied to ' +
            ('`' + componentName + '`' + expectedTypesMessage + '.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`, expected a ReactNode.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function invalidValidatorError(
      componentName,
      location,
      propFullName,
      key,
      type
    ) {
      return new PropTypeError(
        (componentName || 'React class') +
          ': ' +
          location +
          ' type `' +
          propFullName +
          '.' +
          key +
          '` is invalid; ' +
          'it must be a function, usually from the `prop-types` package, but received `' +
          type +
          '`.'
      )
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key]
          if (typeof checker !== 'function') {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker)
            )
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret
          )
          if (error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes)
        for (var key in allKeys) {
          var checker = shapeTypes[key]
          if (has(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker)
            )
          }
          if (!checker) {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` key `' +
                key +
                '` supplied to `' +
                componentName +
                '`.' +
                '\nBad object: ' +
                JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(shapeTypes), null, '  ')
            )
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret
          )
          if (error) {
            return error
          }
        }
        return null
      }

      return createChainableTypeChecker(validate)
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true
        case 'boolean':
          return !propValue
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode)
          }
          if (propValue === null || isValidElement(propValue)) {
            return true
          }

          var iteratorFn = getIteratorFn(propValue)
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue)
            var step
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false
                  }
                }
              }
            }
          } else {
            return false
          }

          return true
        default:
          return false
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true
      }

      return false
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue
      if (Array.isArray(propValue)) {
        return 'array'
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object'
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol'
      }
      return propType
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue
      }
      var propType = getPropType(propValue)
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date'
        } else if (propValue instanceof RegExp) {
          return 'regexp'
        }
      }
      return propType
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value)
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type
        default:
          return type
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS
      }
      return propValue.constructor.name
    }

    ReactPropTypes.checkPropTypes = checkPropTypes
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache
    ReactPropTypes.PropTypes = ReactPropTypes

    return ReactPropTypes
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIsExports

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true
    propTypes.exports = factoryWithTypeCheckers(
      ReactIs.isElement,
      throwOnDirectAccess
    )
  }

  var navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
  }
  var views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda',
  }

  var viewNames$1 = Object.keys(views).map(function (k) {
    return views[k]
  })
  propTypesExports.oneOfType([propTypesExports.string, propTypesExports.func])
  propTypesExports.any
  propTypesExports.func

  /**
   * accepts either an array of builtin view names:
   *
   * ```
   * views={['month', 'day', 'agenda']}
   * ```
   *
   * or an object hash of the view name and the component (or boolean for builtin)
   *
   * ```
   * views={{
   *   month: true,
   *   week: false,
   *   workweek: WorkWeekViewComponent,
   * }}
   * ```
   */

  propTypesExports.oneOfType([
    propTypesExports.arrayOf(propTypesExports.oneOf(viewNames$1)),
    propTypesExports.objectOf(function (prop, key) {
      var isBuiltinView =
        viewNames$1.indexOf(key) !== -1 && typeof prop[key] === 'boolean'
      if (isBuiltinView) {
        return null
      } else {
        for (
          var _len = arguments.length,
            args = new Array(_len > 2 ? _len - 2 : 0),
            _key = 2;
          _key < _len;
          _key++
        ) {
          args[_key - 2] = arguments[_key]
        }
        return propTypesExports.elementType.apply(
          propTypesExports,
          [prop, key].concat(args)
        )
      }
    }),
  ])
  propTypesExports.oneOfType([
    propTypesExports.oneOf(['overlap', 'no-overlap']),
    propTypesExports.func,
  ])

  function notify(handler, args) {
    handler && handler.apply(null, [].concat(args))
  }

  var MILI = 'milliseconds',
    SECONDS = 'seconds',
    MINUTES = 'minutes',
    HOURS = 'hours',
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
    DECADE = 'decade',
    CENTURY = 'century'

  var multiplierMilli = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
  }

  var multiplierMonth = {
    month: 1,
    year: 12,
    decade: 10 * 12,
    century: 100 * 12,
  }

  function daysOf(year) {
    return [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }

  function daysInFeb(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28
  }

  function add(d, num, unit) {
    d = new Date(d)

    switch (unit) {
      case MILI:
      case SECONDS:
      case MINUTES:
      case HOURS:
      case DAY:
      case WEEK:
        return addMillis(d, num * multiplierMilli[unit])
      case MONTH:
      case YEAR:
      case DECADE:
      case CENTURY:
        return addMonths(d, num * multiplierMonth[unit])
    }

    throw new TypeError('Invalid units: "' + unit + '"')
  }

  function addMillis(d, num) {
    var nextDate = new Date(+d + num)

    return solveDST(d, nextDate)
  }

  function addMonths(d, num) {
    var year = d.getFullYear(),
      month = d.getMonth(),
      day = d.getDate(),
      totalMonths = year * 12 + month + num,
      nextYear = Math.trunc(totalMonths / 12),
      nextMonth = totalMonths % 12,
      nextDay = Math.min(day, daysOf(nextYear)[nextMonth])

    var nextDate = new Date(d)
    nextDate.setFullYear(nextYear)

    // To avoid a bug when sets the Feb month
    // with a date > 28 or date > 29 (leap year)
    nextDate.setDate(1)

    nextDate.setMonth(nextMonth)
    nextDate.setDate(nextDay)

    return nextDate
  }

  function solveDST(currentDate, nextDate) {
    var currentOffset = currentDate.getTimezoneOffset(),
      nextOffset = nextDate.getTimezoneOffset()

    // if is DST, add the difference in minutes
    // else the difference is zero
    var diffMinutes = nextOffset - currentOffset

    return new Date(+nextDate + diffMinutes * multiplierMilli['minutes'])
  }

  function subtract(d, num, unit) {
    return add(d, -num, unit)
  }

  function startOf(d, unit, firstOfWeek) {
    d = new Date(d)

    switch (unit) {
      case CENTURY:
      case DECADE:
      case YEAR:
        d = month(d, 0)
      case MONTH:
        d = date(d, 1)
      case WEEK:
      case DAY:
        d = hours(d, 0)
      case HOURS:
        d = minutes(d, 0)
      case MINUTES:
        d = seconds(d, 0)
      case SECONDS:
        d = milliseconds(d, 0)
    }

    if (unit === DECADE) d = subtract(d, year(d) % 10, 'year')

    if (unit === CENTURY) d = subtract(d, year(d) % 100, 'year')

    if (unit === WEEK) d = weekday(d, 0, firstOfWeek)

    return d
  }

  function endOf(d, unit, firstOfWeek) {
    d = new Date(d)
    d = startOf(d, unit, firstOfWeek)
    switch (unit) {
      case CENTURY:
      case DECADE:
      case YEAR:
      case MONTH:
      case WEEK:
        d = add(d, 1, unit)
        d = subtract(d, 1, DAY)
        d.setHours(23, 59, 59, 999)
        break
      case DAY:
        d.setHours(23, 59, 59, 999)
        break
      case HOURS:
      case MINUTES:
      case SECONDS:
        d = add(d, 1, unit)
        d = subtract(d, 1, MILI)
    }
    return d
  }

  var eq$6 = createComparer(function (a, b) {
    return a === b
  })
  var neq = createComparer(function (a, b) {
    return a !== b
  })
  var gt = createComparer(function (a, b) {
    return a > b
  })
  var gte = createComparer(function (a, b) {
    return a >= b
  })
  var lt = createComparer(function (a, b) {
    return a < b
  })
  var lte = createComparer(function (a, b) {
    return a <= b
  })

  function min$1() {
    return new Date(Math.min.apply(Math, arguments))
  }

  function max$1() {
    return new Date(Math.max.apply(Math, arguments))
  }

  function inRange$1(day, min, max, unit) {
    unit = unit || 'day'

    return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit))
  }

  var milliseconds = createAccessor('Milliseconds')
  var seconds = createAccessor('Seconds')
  var minutes = createAccessor('Minutes')
  var hours = createAccessor('Hours')
  var day = createAccessor('Day')
  var date = createAccessor('Date')
  var month = createAccessor('Month')
  var year = createAccessor('FullYear')

  function weekday(d, val, firstDay) {
    var w = (day(d) + 7 - (firstDay || 0)) % 7

    return val === undefined ? w : add(d, val - w, DAY)
  }

  function createAccessor(method) {
    var hourLength = (function (method) {
      switch (method) {
        case 'Milliseconds':
          return 3600000
        case 'Seconds':
          return 3600
        case 'Minutes':
          return 60
        case 'Hours':
          return 1
        default:
          return null
      }
    })(method)

    return function (d, val) {
      if (val === undefined) return d['get' + method]()

      var dateOut = new Date(d)
      dateOut['set' + method](val)

      if (
        hourLength &&
        dateOut['get' + method]() != val &&
        (method === 'Hours' ||
          (val >= hourLength &&
            dateOut.getHours() - d.getHours() < Math.floor(val / hourLength)))
      ) {
        //Skip DST hour, if it occurs
        dateOut['set' + method](val + hourLength)
      }

      return dateOut
    }
  }

  function createComparer(operator) {
    return function (a, b, unit) {
      return operator(+startOf(a, unit), +startOf(b, unit))
    }
  }

  /* eslint no-fallthrough: off */
  var MILLI = {
    seconds: 1000,
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
  }
  function firstVisibleDay(date, localizer) {
    var firstOfMonth = startOf(date, 'month')
    return startOf(firstOfMonth, 'week', localizer.startOfWeek())
  }
  function lastVisibleDay(date, localizer) {
    var endOfMonth = endOf(date, 'month')
    return endOf(endOfMonth, 'week', localizer.startOfWeek())
  }
  function visibleDays(date, localizer) {
    var current = firstVisibleDay(date, localizer),
      last = lastVisibleDay(date, localizer),
      days = []
    while (lte(current, last, 'day')) {
      days.push(current)
      current = add(current, 1, 'day')
    }
    return days
  }
  function ceil(date, unit) {
    var floor = startOf(date, unit)
    return eq$6(floor, date) ? floor : add(floor, 1, unit)
  }
  function range$1(start, end) {
    var unit =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day'
    var current = start,
      days = []
    while (lte(current, end, unit)) {
      days.push(current)
      current = add(current, 1, unit)
    }
    return days
  }
  function merge(date, time) {
    if (time == null && date == null) return null
    if (time == null) time = new Date()
    if (date == null) date = new Date()
    date = startOf(date, 'day')
    date = hours(date, hours(time))
    date = minutes(date, minutes(time))
    date = seconds(date, seconds(time))
    return milliseconds(date, milliseconds(time))
  }
  function isJustDate(date) {
    return (
      hours(date) === 0 &&
      minutes(date) === 0 &&
      seconds(date) === 0 &&
      milliseconds(date) === 0
    )
  }
  function diff(dateA, dateB, unit) {
    if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB)

    // the .round() handles an edge case
    // with DST where the total won't be exact
    // since one day in the range may be shorter/longer by an hour
    return Math.round(
      Math.abs(
        +startOf(dateA, unit) / MILLI[unit] -
          +startOf(dateB, unit) / MILLI[unit]
      )
    )
  }

  var localePropType = propTypesExports.oneOfType([
    propTypesExports.string,
    propTypesExports.func,
  ])
  function _format(localizer, formatter, value, format, culture) {
    var result =
      typeof format === 'function'
        ? format(value, culture, localizer)
        : formatter.call(localizer, value, format, culture)
    invariant_1(
      result == null || typeof result === 'string',
      '`localizer format(..)` must return a string, null, or undefined'
    )
    return result
  }

  /**
   * This date conversion was moved out of TimeSlots.js, to
   * allow for localizer override
   * @param {Date} dt - The date to start from
   * @param {Number} minutesFromMidnight
   * @param {Number} offset
   * @returns {Date}
   */
  function getSlotDate(dt, minutesFromMidnight, offset) {
    return new Date(
      dt.getFullYear(),
      dt.getMonth(),
      dt.getDate(),
      0,
      minutesFromMidnight + offset,
      0,
      0
    )
  }
  function getDstOffset(start, end) {
    return start.getTimezoneOffset() - end.getTimezoneOffset()
  }

  // if the start is on a DST-changing day but *after* the moment of DST
  // transition we need to add those extra minutes to our minutesFromMidnight
  function getTotalMin(start, end) {
    return diff(start, end, 'minutes') + getDstOffset(start, end)
  }
  function getMinutesFromMidnight(start) {
    var daystart = startOf(start, 'day')
    return diff(daystart, start, 'minutes') + getDstOffset(daystart, start)
  }

  // These two are used by DateSlotMetrics
  function continuesPrior(start, first) {
    return lt(start, first, 'day')
  }
  function continuesAfter(start, end, last) {
    var singleDayDuration = eq$6(start, end, 'minutes')
    return singleDayDuration
      ? gte(end, last, 'minutes')
      : gt(end, last, 'minutes')
  }

  // These two are used by eventLevels
  function sortEvents$1(_ref) {
    var _ref$evtA = _ref.evtA,
      aStart = _ref$evtA.start,
      aEnd = _ref$evtA.end,
      aAllDay = _ref$evtA.allDay,
      _ref$evtB = _ref.evtB,
      bStart = _ref$evtB.start,
      bEnd = _ref$evtB.end,
      bAllDay = _ref$evtB.allDay
    var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day')
    var durA = diff(aStart, ceil(aEnd, 'day'), 'day')
    var durB = diff(bStart, ceil(bEnd, 'day'), 'day')
    return (
      startSort ||
      // sort by start Day first
      Math.max(durB, 1) - Math.max(durA, 1) ||
      // events spanning multiple days go first
      !!bAllDay - !!aAllDay ||
      // then allDay single day events
      +aStart - +bStart ||
      // then sort by start time
      +aEnd - +bEnd // then sort by end time
    )
  }

  function inEventRange(_ref2) {
    var _ref2$event = _ref2.event,
      start = _ref2$event.start,
      end = _ref2$event.end,
      _ref2$range = _ref2.range,
      rangeStart = _ref2$range.start,
      rangeEnd = _ref2$range.end
    var eStart = startOf(start, 'day')
    var startsBeforeEnd = lte(eStart, rangeEnd, 'day')
    // when the event is zero duration we need to handle a bit differently
    var sameMin = neq(eStart, end, 'minutes')
    var endsAfterStart = sameMin
      ? gt(end, rangeStart, 'minutes')
      : gte(end, rangeStart, 'minutes')
    return startsBeforeEnd && endsAfterStart
  }

  // other localizers treats 'day' and 'date' equality very differently, so we
  // abstract the change the 'localizer.eq(date1, date2, 'day') into this
  // new method, where they can be treated correctly by the localizer overrides
  function isSameDate(date1, date2) {
    return eq$6(date1, date2, 'day')
  }
  function startAndEndAreDateOnly(start, end) {
    return isJustDate(start) && isJustDate(end)
  }
  var DateLocalizer = /*#__PURE__*/ _createClass(function DateLocalizer(spec) {
    var _this = this
    _classCallCheck(this, DateLocalizer)
    invariant_1(
      typeof spec.format === 'function',
      'date localizer `format(..)` must be a function'
    )
    invariant_1(
      typeof spec.firstOfWeek === 'function',
      'date localizer `firstOfWeek(..)` must be a function'
    )
    this.propType = spec.propType || localePropType
    this.formats = spec.formats
    this.format = function () {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }
      return _format.apply(void 0, [_this, spec.format].concat(args))
    }
    // These date arithmetic methods can be overriden by the localizer
    this.startOfWeek = spec.firstOfWeek
    this.merge = spec.merge || merge
    this.inRange = spec.inRange || inRange$1
    this.lt = spec.lt || lt
    this.lte = spec.lte || lte
    this.gt = spec.gt || gt
    this.gte = spec.gte || gte
    this.eq = spec.eq || eq$6
    this.neq = spec.neq || neq
    this.startOf = spec.startOf || startOf
    this.endOf = spec.endOf || endOf
    this.add = spec.add || add
    this.range = spec.range || range$1
    this.diff = spec.diff || diff
    this.ceil = spec.ceil || ceil
    this.min = spec.min || min$1
    this.max = spec.max || max$1
    this.minutes = spec.minutes || minutes
    this.firstVisibleDay = spec.firstVisibleDay || firstVisibleDay
    this.lastVisibleDay = spec.lastVisibleDay || lastVisibleDay
    this.visibleDays = spec.visibleDays || visibleDays
    this.getSlotDate = spec.getSlotDate || getSlotDate
    this.getTimezoneOffset =
      spec.getTimezoneOffset ||
      function (value) {
        return value.getTimezoneOffset()
      }
    this.getDstOffset = spec.getDstOffset || getDstOffset
    this.getTotalMin = spec.getTotalMin || getTotalMin
    this.getMinutesFromMidnight =
      spec.getMinutesFromMidnight || getMinutesFromMidnight
    this.continuesPrior = spec.continuesPrior || continuesPrior
    this.continuesAfter = spec.continuesAfter || continuesAfter
    this.sortEvents = spec.sortEvents || sortEvents$1
    this.inEventRange = spec.inEventRange || inEventRange
    this.isSameDate = spec.isSameDate || isSameDate
    this.startAndEndAreDateOnly =
      spec.startAndEndAreDateOnly || startAndEndAreDateOnly
    this.segmentOffset = spec.browserTZOffset ? spec.browserTZOffset() : 0
  })
  function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
    var formats = _objectSpread2(
      _objectSpread2({}, localizer.formats),
      formatOverrides
    )
    return _objectSpread2(
      _objectSpread2({}, localizer),
      {},
      {
        messages: messages,
        startOfWeek: function startOfWeek() {
          return localizer.startOfWeek(culture)
        },
        format: function format(value, _format2) {
          return localizer.format(value, formats[_format2] || _format2, culture)
        },
      }
    )
  }

  var defaultMessages = {
    date: 'Date',
    time: 'Time',
    event: 'Event',
    allDay: 'All Day',
    week: 'Week',
    work_week: 'Work Week',
    day: 'Day',
    month: 'Month',
    previous: 'Back',
    next: 'Next',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    today: 'Today',
    agenda: 'Agenda',
    noEventsInRange: 'There are no events in this range.',
    showMore: function showMore(total) {
      return '+'.concat(total, ' more')
    },
  }
  function messages(msgs) {
    return _objectSpread2(_objectSpread2({}, defaultMessages), msgs)
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr)
  }

  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
      iter['@@iterator'] != null
    )
      return Array.from(iter)
  }

  function _nonIterableSpread() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    )
  }

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */

  function baseSlice$2(array, start, end) {
    var index = -1,
      length = array.length

    if (start < 0) {
      start = -start > length ? 0 : length + start
    }
    end = end > length ? length : end
    if (end < 0) {
      end += length
    }
    length = start > end ? 0 : (end - start) >>> 0
    start >>>= 0

    var result = Array(length)
    while (++index < length) {
      result[index] = array[index + start]
    }
    return result
  }

  var _baseSlice = baseSlice$2

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq$5(value, other) {
    return value === other || (value !== value && other !== other)
  }

  var eq_1 = eq$5

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 =
    typeof commonjsGlobal == 'object' &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal

  var _freeGlobal = freeGlobal$1

  var freeGlobal = _freeGlobal

  /** Detect free variable `self`. */
  var freeSelf =
    typeof self == 'object' && self && self.Object === Object && self

  /** Used as a reference to the global object. */
  var root$8 = freeGlobal || freeSelf || Function('return this')()

  var _root = root$8

  var root$7 = _root

  /** Built-in value references. */
  var Symbol$7 = root$7.Symbol

  var _Symbol = Symbol$7

  var Symbol$6 = _Symbol

  /** Used for built-in method references. */
  var objectProto$g = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$d = objectProto$g.hasOwnProperty

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$g.toString

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$6 ? Symbol$6.toStringTag : undefined

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$d.call(value, symToStringTag$1),
      tag = value[symToStringTag$1]

    try {
      value[symToStringTag$1] = undefined
      var unmasked = true
    } catch (e) {}

    var result = nativeObjectToString$1.call(value)
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag
      } else {
        delete value[symToStringTag$1]
      }
    }
    return result
  }

  var _getRawTag = getRawTag$1

  /** Used for built-in method references. */

  var objectProto$f = Object.prototype

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$f.toString

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value)
  }

  var _objectToString = objectToString$1

  var Symbol$5 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]'

  /** Built-in value references. */
  var symToStringTag = Symbol$5 ? Symbol$5.toStringTag : undefined

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$6(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag
    }
    return symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : objectToString(value)
  }

  var _baseGetTag = baseGetTag$6

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$9(value) {
    var type = typeof value
    return value != null && (type == 'object' || type == 'function')
  }

  var isObject_1 = isObject$9

  var baseGetTag$5 = _baseGetTag,
    isObject$8 = isObject_1

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]'

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$4(value) {
    if (!isObject$8(value)) {
      return false
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$5(value)
    return (
      tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag
    )
  }

  var isFunction_1 = isFunction$4

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength$3(value) {
    return (
      typeof value == 'number' &&
      value > -1 &&
      value % 1 == 0 &&
      value <= MAX_SAFE_INTEGER$1
    )
  }

  var isLength_1 = isLength$3

  var isFunction$3 = isFunction_1,
    isLength$2 = isLength_1

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$5(value) {
    return value != null && isLength$2(value.length) && !isFunction$3(value)
  }

  var isArrayLike_1 = isArrayLike$5

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex$3(value, length) {
    var type = typeof value
    length = length == null ? MAX_SAFE_INTEGER : length

    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    )
  }

  var _isIndex = isIndex$3

  var eq$4 = eq_1,
    isArrayLike$4 = isArrayLike_1,
    isIndex$2 = _isIndex,
    isObject$7 = isObject_1

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall$4(value, index, object) {
    if (!isObject$7(object)) {
      return false
    }
    var type = typeof index
    if (
      type == 'number'
        ? isArrayLike$4(object) && isIndex$2(index, object.length)
        : type == 'string' && index in object
    ) {
      return eq$4(object[index], value)
    }
    return false
  }

  var _isIterateeCall = isIterateeCall$4

  /** Used to match a single whitespace character. */

  var reWhitespace = /\s/

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex$1(string) {
    var index = string.length

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index
  }

  var _trimmedEndIndex = trimmedEndIndex$1

  var trimmedEndIndex = _trimmedEndIndex

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim$1(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string
  }

  var _baseTrim = baseTrim$1

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$8(value) {
    return value != null && typeof value == 'object'
  }

  var isObjectLike_1 = isObjectLike$8

  var baseGetTag$4 = _baseGetTag,
    isObjectLike$7 = isObjectLike_1

  /** `Object#toString` result references. */
  var symbolTag$3 = '[object Symbol]'

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$5(value) {
    return (
      typeof value == 'symbol' ||
      (isObjectLike$7(value) && baseGetTag$4(value) == symbolTag$3)
    )
  }

  var isSymbol_1 = isSymbol$5

  var baseTrim = _baseTrim,
    isObject$6 = isObject_1,
    isSymbol$4 = isSymbol_1

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber$1(value) {
    if (typeof value == 'number') {
      return value
    }
    if (isSymbol$4(value)) {
      return NAN
    }
    if (isObject$6(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value
      value = isObject$6(other) ? other + '' : other
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value
    }
    value = baseTrim(value)
    var isBinary = reIsBinary.test(value)
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
      ? NAN
      : +value
  }

  var toNumber_1 = toNumber$1

  var toNumber = toNumber_1

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e308

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite$2(value) {
    if (!value) {
      return value === 0 ? value : 0
    }
    value = toNumber(value)
    if (value === INFINITY$2 || value === -INFINITY$2) {
      var sign = value < 0 ? -1 : 1
      return sign * MAX_INTEGER
    }
    return value === value ? value : 0
  }

  var toFinite_1 = toFinite$2

  var toFinite$1 = toFinite_1

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger$2(value) {
    var result = toFinite$1(value),
      remainder = result % 1

    return result === result ? (remainder ? result - remainder : result) : 0
  }

  var toInteger_1 = toInteger$2

  var baseSlice$1 = _baseSlice,
    isIterateeCall$3 = _isIterateeCall,
    toInteger$1 = toInteger_1

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil$1 = Math.ceil,
    nativeMax$3 = Math.max

  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * elements.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  function chunk(array, size, guard) {
    if (guard ? isIterateeCall$3(array, size, guard) : size === undefined) {
      size = 1
    } else {
      size = nativeMax$3(toInteger$1(size), 0)
    }
    var length = array == null ? 0 : array.length
    if (!length || size < 1) {
      return []
    }
    var index = 0,
      resIndex = 0,
      result = Array(nativeCeil$1(length / size))

    while (index < length) {
      result[resIndex++] = baseSlice$1(array, index, (index += size))
    }
    return result
  }

  var chunk_1 = chunk

  /**
   * Returns the owner document of a given element.
   *
   * @param node the element
   */
  function ownerDocument$1(node) {
    return (node && node.ownerDocument) || document
  }

  /**
   * Returns the owner window of a given element.
   *
   * @param node the element
   */

  function ownerWindow(node) {
    var doc = ownerDocument$1(node)
    return (doc && doc.defaultView) || window
  }

  /**
   * Returns one or all computed style properties of an element.
   *
   * @param node the element
   * @param psuedoElement the style property
   */

  function getComputedStyle$1(node, psuedoElement) {
    return ownerWindow(node).getComputedStyle(node, psuedoElement)
  }

  var rUpper = /([A-Z])/g
  function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase()
  }

  /**
   * Copyright 2013-2014, Facebook, Inc.
   * All rights reserved.
   * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
   */
  var msPattern = /^ms-/
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-')
  }

  var supportedTransforms =
    /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
  function isTransform(value) {
    return !!(value && supportedTransforms.test(value))
  }

  function style(node, property) {
    var css = ''
    var transforms = ''

    if (typeof property === 'string') {
      return (
        node.style.getPropertyValue(hyphenateStyleName(property)) ||
        getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property))
      )
    }

    Object.keys(property).forEach(function (key) {
      var value = property[key]

      if (!value && value !== 0) {
        node.style.removeProperty(hyphenateStyleName(key))
      } else if (isTransform(key)) {
        transforms += key + '(' + value + ') '
      } else {
        css += hyphenateStyleName(key) + ': ' + value + ';'
      }
    })

    if (transforms) {
      css += 'transform: ' + transforms + ';'
    }

    node.style.cssText += ';' + css
  }

  /* eslint-disable no-bitwise, no-cond-assign */

  /**
   * Checks if an element contains another given element.
   *
   * @param context the context element
   * @param node the element to check
   */
  function contains$1(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node)
    if (context.compareDocumentPosition)
      return context === node || !!(context.compareDocumentPosition(node) & 16)
  }

  function isDocument(element) {
    return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE
  }

  function isWindow(node) {
    if ('window' in node && node.window === node) return node
    if (isDocument(node)) return node.defaultView || false
    return false
  }

  function getscrollAccessor(offset) {
    var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop'

    function scrollAccessor(node, val) {
      var win = isWindow(node)

      if (val === undefined) {
        return win ? win[offset] : node[prop]
      }

      if (win) {
        win.scrollTo(win[offset], val)
      } else {
        node[prop] = val
      }
    }

    return scrollAccessor
  }

  /**
   * Gets or sets the scroll left position of a given element.
   *
   * @param node the element
   * @param val the position to set
   */

  var scrollLeft = getscrollAccessor('pageXOffset')

  /**
   * Gets or sets the scroll top position of a given element.
   *
   * @param node the element
   * @param val the position to set
   */

  var scrollTop = getscrollAccessor('pageYOffset')

  /**
   * Returns the offset of a given element, including top and left positions, width and height.
   *
   * @param node the element
   */

  function offset$2(node) {
    var doc = ownerDocument$1(node)
    var box = {
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    }
    var docElem = doc && doc.documentElement // Make sure it's not a disconnected DOM node

    if (!docElem || !contains$1(docElem, node)) return box
    if (node.getBoundingClientRect !== undefined)
      box = node.getBoundingClientRect()
    box = {
      top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
      left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
      width: box.width,
      height: box.height,
    }
    return box
  }

  var isHTMLElement$1 = function isHTMLElement(e) {
    return !!e && 'offsetParent' in e
  }

  function offsetParent(node) {
    var doc = ownerDocument$1(node)
    var parent = node && node.offsetParent

    while (
      isHTMLElement$1(parent) &&
      parent.nodeName !== 'HTML' &&
      style(parent, 'position') === 'static'
    ) {
      parent = parent.offsetParent
    }

    return parent || doc.documentElement
  }

  var nodeName = function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase()
  }
  /**
   * Returns the relative position of a given element.
   *
   * @param node the element
   * @param offsetParent the offset parent
   */

  function position(node, offsetParent$1) {
    var parentOffset = {
      top: 0,
      left: 0,
    }
    var offset // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent

    if (style(node, 'position') === 'fixed') {
      offset = node.getBoundingClientRect()
    } else {
      var parent = offsetParent$1 || offsetParent(node)
      offset = offset$2(node)
      if (nodeName(parent) !== 'html') parentOffset = offset$2(parent)
      var borderTop = String(style(parent, 'borderTopWidth') || 0)
      parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0
      var borderLeft = String(style(parent, 'borderLeftWidth') || 0)
      parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0
    }

    var marginTop = String(style(node, 'marginTop') || 0)
    var marginLeft = String(style(node, 'marginLeft') || 0) // Subtract parent offsets and node margins

    return _extends({}, offset, {
      top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
      left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0),
    })
  }

  var canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )

  /* https://github.com/component/raf */
  var prev = new Date().getTime()

  function fallback(fn) {
    var curr = new Date().getTime()
    var ms = Math.max(0, 16 - (curr - prev))
    var handle = setTimeout(fn, ms)
    prev = curr
    return handle
  }

  var vendors = ['', 'webkit', 'moz', 'o', 'ms']
  var cancelMethod = 'clearTimeout'
  var rafImpl = fallback // eslint-disable-next-line import/no-mutable-exports

  var getKey$1 = function getKey(vendor, k) {
    return (
      vendor +
      (!vendor ? k : k[0].toUpperCase() + k.substr(1)) +
      'AnimationFrame'
    )
  }

  if (canUseDOM) {
    vendors.some(function (vendor) {
      var rafMethod = getKey$1(vendor, 'request')

      if (rafMethod in window) {
        cancelMethod = getKey$1(vendor, 'cancel') // @ts-ignore

        rafImpl = function rafImpl(cb) {
          return window[rafMethod](cb)
        }
      }

      return !!rafImpl
    })
  }

  var cancel = function cancel(id) {
    // @ts-ignore
    if (typeof window[cancelMethod] === 'function') window[cancelMethod](id)
  }
  var request = rafImpl

  var matchesImpl
  /**
   * Checks if a given element matches a selector.
   *
   * @param node the element
   * @param selector the selector
   */

  function matches(node, selector) {
    if (!matchesImpl) {
      var body = document.body
      var nativeMatch =
        body.matches ||
        body.matchesSelector ||
        body.webkitMatchesSelector ||
        body.mozMatchesSelector ||
        body.msMatchesSelector

      matchesImpl = function matchesImpl(n, s) {
        return nativeMatch.call(n, s)
      }
    }

    return matchesImpl(node, selector)
  }

  var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice)
  /**
   * Runs `querySelectorAll` on a given element.
   *
   * @param element the element
   * @param selector the selector
   */

  function qsa(element, selector) {
    return toArray(element.querySelectorAll(selector))
  }

  /* eslint-disable no-return-assign */
  var optionsSupported = false
  var onceSupported = false

  try {
    var options = {
      get passive() {
        return (optionsSupported = true)
      },

      get once() {
        // eslint-disable-next-line no-multi-assign
        return (onceSupported = optionsSupported = true)
      },
    }

    if (canUseDOM) {
      window.addEventListener('test', options, options)
      window.removeEventListener('test', options, true)
    }
  } catch (e) {
    /* */
  }

  /**
   * An `addEventListener` ponyfill, supports the `once` option
   *
   * @param node the element
   * @param eventName the event name
   * @param handle the handler
   * @param options event options
   */
  function addEventListener$1(node, eventName, handler, options) {
    if (options && typeof options !== 'boolean' && !onceSupported) {
      var once = options.once,
        capture = options.capture
      var wrappedHandler = handler

      if (!onceSupported && once) {
        wrappedHandler =
          handler.__once ||
          function onceHandler(event) {
            this.removeEventListener(eventName, onceHandler, capture)
            handler.call(this, event)
          }

        handler.__once = wrappedHandler
      }

      node.addEventListener(
        eventName,
        wrappedHandler,
        optionsSupported ? options : capture
      )
    }

    node.addEventListener(eventName, handler, options)
  }

  /**
   * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
   * value is the one rendered with. Generally only required for Concurrent mode usage
   * where previous work in `render()` may be discarded before being used.
   *
   * This is safe to access in an event handler.
   *
   * @param value The `Ref` value
   */

  function useCommittedRef(value) {
    var ref = React.useRef(value)
    React.useEffect(
      function () {
        ref.current = value
      },
      [value]
    )
    return ref
  }

  function useEventCallback(fn) {
    var ref = useCommittedRef(fn)
    return React.useCallback(
      function () {
        return ref.current && ref.current.apply(ref, arguments)
      },
      [ref]
    )
  }

  /**
   * A convenience hook around `useState` designed to be paired with
   * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
   * Callback refs are useful over `useRef()` when you need to respond to the ref being set
   * instead of lazily accessing it in an effect.
   *
   * ```ts
   * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
   *
   * useEffect(() => {
   *   if (!element) return
   *
   *   const calendar = new FullCalendar.Calendar(element)
   *
   *   return () => {
   *     calendar.destroy()
   *   }
   * }, [element])
   *
   * return <div ref={attachRef} />
   * ```
   *
   * @category refs
   */

  function useCallbackRef() {
    return React.useState(null)
  }

  /**
   * Track whether a component is current mounted. Generally less preferable than
   * properlly canceling effects so they don't run after a component is unmounted,
   * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
   *
   * @returns a function that returns the current isMounted state of the component
   *
   * ```ts
   * const [data, setData] = useState(null)
   * const isMounted = useMounted()
   *
   * useEffect(() => {
   *   fetchdata().then((newData) => {
   *      if (isMounted()) {
   *        setData(newData);
   *      }
   *   })
   * })
   * ```
   */

  function useMounted() {
    var mounted = React.useRef(true)
    var isMounted = React.useRef(function () {
      return mounted.current
    })
    React.useEffect(function () {
      mounted.current = true
      return function () {
        mounted.current = false
      }
    }, [])
    return isMounted.current
  }

  function useSafeState(state) {
    var isMounted = useMounted()
    return [
      state[0],
      React.useCallback(
        function (nextState) {
          if (!isMounted()) return
          return state[1](nextState)
        },
        [isMounted, state[1]]
      ),
    ]
  }

  var top = 'top'
  var bottom = 'bottom'
  var right = 'right'
  var left = 'left'
  var auto = 'auto'
  var basePlacements = [top, bottom, right, left]
  var start = 'start'
  var end = 'end'
  var clippingParents = 'clippingParents'
  var viewport = 'viewport'
  var popper = 'popper'
  var reference = 'reference'
  var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function (
    acc,
    placement
  ) {
    return acc.concat([placement + '-' + start, placement + '-' + end])
  },
  [])
  var placements = /*#__PURE__*/ []
    .concat(basePlacements, [auto])
    .reduce(function (acc, placement) {
      return acc.concat([
        placement,
        placement + '-' + start,
        placement + '-' + end,
      ])
    }, []) // modifiers that need to read the DOM

  var beforeRead = 'beforeRead'
  var read = 'read'
  var afterRead = 'afterRead' // pure-logic modifiers

  var beforeMain = 'beforeMain'
  var main = 'main'
  var afterMain = 'afterMain' // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite'
  var write = 'write'
  var afterWrite = 'afterWrite'
  var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite,
  ]

  function getBasePlacement(placement) {
    return placement.split('-')[0]
  }

  function getWindow(node) {
    if (node == null) {
      return window
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument
      return ownerDocument ? ownerDocument.defaultView || window : window
    }

    return node
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element
    return node instanceof OwnElement || node instanceof Element
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement
    return node instanceof OwnElement || node instanceof HTMLElement
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false
    }

    var OwnElement = getWindow(node).ShadowRoot
    return node instanceof OwnElement || node instanceof ShadowRoot
  }

  var max = Math.max
  var min = Math.min
  var round = Math.round

  function getUAString() {
    var uaData = navigator.userAgentData

    if (uaData != null && uaData.brands) {
      return uaData.brands
        .map(function (item) {
          return item.brand + '/' + item.version
        })
        .join(' ')
    }

    return navigator.userAgent
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString())
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false
    }

    if (isFixedStrategy === void 0) {
      isFixedStrategy = false
    }

    var clientRect = element.getBoundingClientRect()
    var scaleX = 1
    var scaleY = 1

    if (includeScale && isHTMLElement(element)) {
      scaleX =
        element.offsetWidth > 0
          ? round(clientRect.width) / element.offsetWidth || 1
          : 1
      scaleY =
        element.offsetHeight > 0
          ? round(clientRect.height) / element.offsetHeight || 1
          : 1
    }

    var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport

    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy
    var x =
      (clientRect.left +
        (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) /
      scaleX
    var y =
      (clientRect.top +
        (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) /
      scaleY
    var width = clientRect.width / scaleX
    var height = clientRect.height / scaleY
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y,
    }
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element) // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth
    var height = element.offsetHeight

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height,
    }
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode() // First, attempt with faster native method

    if (parent.contains(child)) {
      return true
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child

      do {
        if (next && parent.isSameNode(next)) {
          return true
        } // $FlowFixMe[prop-missing]: need a better way to handle this...

        next = next.parentNode || next.host
      } while (next)
    } // Give up, the result is false

    return false
  }

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element)
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (
      (isElement(element)
        ? element.ownerDocument // $FlowFixMe[prop-missing]
        : element.document) || window.document
    ).documentElement
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element
    }

    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback
    )
  }

  function getTrueOffsetParent(element) {
    if (
      !isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
      getComputedStyle(element).position === 'fixed'
    ) {
      return null
    }

    return element.offsetParent
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block

  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString())
    var isIE = /Trident/i.test(getUAString())

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle(element)

      if (elementCss.position === 'fixed') {
        return null
      }
    }

    var currentNode = getParentNode(element)

    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host
    }

    while (
      isHTMLElement(currentNode) &&
      ['html', 'body'].indexOf(getNodeName(currentNode)) < 0
    ) {
      var css = getComputedStyle(currentNode) // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (
        css.transform !== 'none' ||
        css.perspective !== 'none' ||
        css.contain === 'paint' ||
        ['transform', 'perspective'].indexOf(css.willChange) !== -1 ||
        (isFirefox && css.willChange === 'filter') ||
        (isFirefox && css.filter && css.filter !== 'none')
      ) {
        return currentNode
      } else {
        currentNode = currentNode.parentNode
      }
    }

    return null
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.

  function getOffsetParent(element) {
    var window = getWindow(element)
    var offsetParent = getTrueOffsetParent(element)

    while (
      offsetParent &&
      isTableElement(offsetParent) &&
      getComputedStyle(offsetParent).position === 'static'
    ) {
      offsetParent = getTrueOffsetParent(offsetParent)
    }

    if (
      offsetParent &&
      (getNodeName(offsetParent) === 'html' ||
        (getNodeName(offsetParent) === 'body' &&
          getComputedStyle(offsetParent).position === 'static'))
    ) {
      return window
    }

    return offsetParent || getContainingBlock(element) || window
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y'
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1))
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max)
    return v > max ? max : v
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject)
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value
      return hashMap
    }, {})
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding =
      typeof padding === 'function'
        ? padding(
            Object.assign({}, state.rects, {
              placement: state.placement,
            })
          )
        : padding
    return mergePaddingObject(
      typeof padding !== 'number'
        ? padding
        : expandToHashMap(padding, basePlacements)
    )
  }

  function arrow(_ref) {
    var _state$modifiersData$

    var state = _ref.state,
      name = _ref.name,
      options = _ref.options
    var arrowElement = state.elements.arrow
    var popperOffsets = state.modifiersData.popperOffsets
    var basePlacement = getBasePlacement(state.placement)
    var axis = getMainAxisFromPlacement(basePlacement)
    var isVertical = [left, right].indexOf(basePlacement) >= 0
    var len = isVertical ? 'height' : 'width'

    if (!arrowElement || !popperOffsets) {
      return
    }

    var paddingObject = toPaddingObject(options.padding, state)
    var arrowRect = getLayoutRect(arrowElement)
    var minProp = axis === 'y' ? top : left
    var maxProp = axis === 'y' ? bottom : right
    var endDiff =
      state.rects.reference[len] +
      state.rects.reference[axis] -
      popperOffsets[axis] -
      state.rects.popper[len]
    var startDiff = popperOffsets[axis] - state.rects.reference[axis]
    var arrowOffsetParent = getOffsetParent(arrowElement)
    var clientSize = arrowOffsetParent
      ? axis === 'y'
        ? arrowOffsetParent.clientHeight || 0
        : arrowOffsetParent.clientWidth || 0
      : 0
    var centerToReference = endDiff / 2 - startDiff / 2 // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp]
    var max = clientSize - arrowRect[len] - paddingObject[maxProp]
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference
    var offset = within(min, center, max) // Prevents breaking syntax highlighting...

    var axisProp = axis
    state.modifiersData[name] =
      ((_state$modifiersData$ = {}),
      (_state$modifiersData$[axisProp] = offset),
      (_state$modifiersData$.centerOffset = offset - center),
      _state$modifiersData$)
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
      options = _ref2.options
    var _options$element = options.element,
      arrowElement =
        _options$element === void 0 ? '[data-popper-arrow]' : _options$element

    if (arrowElement == null) {
      return
    } // CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement)

      if (!arrowElement) {
        return
      }
    }

    {
      if (!isHTMLElement(arrowElement)) {
        console.error(
          [
            'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
            'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
            'the arrow.',
          ].join(' ')
        )
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      {
        console.error(
          [
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.',
          ].join(' ')
        )
      }

      return
    }

    state.elements.arrow = arrowElement
  } // eslint-disable-next-line import/no-unused-modules

  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  }

  function getVariation(placement) {
    return placement.split('-')[1]
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  } // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
      y = _ref.y
    var win = window
    var dpr = win.devicePixelRatio || 1
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0,
    }
  }

  function mapToStyles(_ref2) {
    var _Object$assign2

    var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed
    var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y

    var _ref3 =
      typeof roundOffsets === 'function'
        ? roundOffsets({
            x: x,
            y: y,
          })
        : {
            x: x,
            y: y,
          }

    x = _ref3.x
    y = _ref3.y
    var hasX = offsets.hasOwnProperty('x')
    var hasY = offsets.hasOwnProperty('y')
    var sideX = left
    var sideY = top
    var win = window

    if (adaptive) {
      var offsetParent = getOffsetParent(popper)
      var heightProp = 'clientHeight'
      var widthProp = 'clientWidth'

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper)

        if (
          getComputedStyle(offsetParent).position !== 'static' &&
          position === 'absolute'
        ) {
          heightProp = 'scrollHeight'
          widthProp = 'scrollWidth'
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      offsetParent = offsetParent

      if (
        placement === top ||
        ((placement === left || placement === right) && variation === end)
      ) {
        sideY = bottom
        var offsetY =
          isFixed && offsetParent === win && win.visualViewport
            ? win.visualViewport.height // $FlowFixMe[prop-missing]
            : offsetParent[heightProp]
        y -= offsetY - popperRect.height
        y *= gpuAcceleration ? 1 : -1
      }

      if (
        placement === left ||
        ((placement === top || placement === bottom) && variation === end)
      ) {
        sideX = right
        var offsetX =
          isFixed && offsetParent === win && win.visualViewport
            ? win.visualViewport.width // $FlowFixMe[prop-missing]
            : offsetParent[widthProp]
        x -= offsetX - popperRect.width
        x *= gpuAcceleration ? 1 : -1
      }
    }

    var commonStyles = Object.assign(
      {
        position: position,
      },
      adaptive && unsetSides
    )

    var _ref4 =
      roundOffsets === true
        ? roundOffsetsByDPR({
            x: x,
            y: y,
          })
        : {
            x: x,
            y: y,
          }

    x = _ref4.x
    y = _ref4.y

    if (gpuAcceleration) {
      var _Object$assign

      return Object.assign(
        {},
        commonStyles,
        ((_Object$assign = {}),
        (_Object$assign[sideY] = hasY ? '0' : ''),
        (_Object$assign[sideX] = hasX ? '0' : ''),
        (_Object$assign.transform =
          (win.devicePixelRatio || 1) <= 1
            ? 'translate(' + x + 'px, ' + y + 'px)'
            : 'translate3d(' + x + 'px, ' + y + 'px, 0)'),
        _Object$assign)
      )
    }

    return Object.assign(
      {},
      commonStyles,
      ((_Object$assign2 = {}),
      (_Object$assign2[sideY] = hasY ? y + 'px' : ''),
      (_Object$assign2[sideX] = hasX ? x + 'px' : ''),
      (_Object$assign2.transform = ''),
      _Object$assign2)
    )
  }

  function computeStyles(_ref5) {
    var state = _ref5.state,
      options = _ref5.options
    var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration =
        _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets =
        _options$roundOffsets === void 0 ? true : _options$roundOffsets

    {
      var transitionProperty =
        getComputedStyle(state.elements.popper).transitionProperty || ''

      if (
        adaptive &&
        ['transform', 'top', 'right', 'bottom', 'left'].some(function (
          property
        ) {
          return transitionProperty.indexOf(property) >= 0
        })
      ) {
        console.warn(
          [
            'Popper: Detected CSS transitions on at least one of the following',
            'CSS properties: "transform", "top", "right", "bottom", "left".',
            '\n\n',
            'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
            'for smooth transitions, or remove these properties from the CSS',
            'transition declaration on the popper element if only transitioning',
            'opacity or background-color for example.',
            '\n\n',
            'We recommend using the popper element as a wrapper around an inner',
            'element that can have any CSS property transitioned for animations.',
          ].join(' ')
        )
      }
    }

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed',
    }

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign(
        {},
        state.styles.popper,
        mapToStyles(
          Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets,
          })
        )
      )
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign(
        {},
        state.styles.arrow,
        mapToStyles(
          Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: 'absolute',
            adaptive: false,
            roundOffsets: roundOffsets,
          })
        )
      )
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement,
    })
  } // eslint-disable-next-line import/no-unused-modules

  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {},
  }

  var passive = {
    passive: true,
  }

  function effect(_ref) {
    var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options
    var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize
    var window = getWindow(state.elements.popper)
    var scrollParents = [].concat(
      state.scrollParents.reference,
      state.scrollParents.popper
    )

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive)
      })
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive)
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive)
        })
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive)
      }
    }
  } // eslint-disable-next-line import/no-unused-modules

  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {},
  }

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom',
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched]
    })
  }

  var hash = {
    start: 'end',
    end: 'start',
  }
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched]
    })
  }

  function getWindowScroll(node) {
    var win = getWindow(node)
    var scrollLeft = win.pageXOffset
    var scrollTop = win.pageYOffset
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop,
    }
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (
      getBoundingClientRect(getDocumentElement(element)).left +
      getWindowScroll(element).scrollLeft
    )
  }

  function getViewportRect(element, strategy) {
    var win = getWindow(element)
    var html = getDocumentElement(element)
    var visualViewport = win.visualViewport
    var width = html.clientWidth
    var height = html.clientHeight
    var x = 0
    var y = 0

    if (visualViewport) {
      width = visualViewport.width
      height = visualViewport.height
      var layoutViewport = isLayoutViewport()

      if (layoutViewport || (!layoutViewport && strategy === 'fixed')) {
        x = visualViewport.offsetLeft
        y = visualViewport.offsetTop
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y,
    }
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen

    var html = getDocumentElement(element)
    var winScroll = getWindowScroll(element)
    var body =
      (_element$ownerDocumen = element.ownerDocument) == null
        ? void 0
        : _element$ownerDocumen.body
    var width = max(
      html.scrollWidth,
      html.clientWidth,
      body ? body.scrollWidth : 0,
      body ? body.clientWidth : 0
    )
    var height = max(
      html.scrollHeight,
      html.clientHeight,
      body ? body.scrollHeight : 0,
      body ? body.clientHeight : 0
    )
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element)
    var y = -winScroll.scrollTop

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y,
    }
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node
    }

    return getScrollParent(getParentNode(node))
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen

    if (list === void 0) {
      list = []
    }

    var scrollParent = getScrollParent(element)
    var isBody =
      scrollParent ===
      ((_element$ownerDocumen = element.ownerDocument) == null
        ? void 0
        : _element$ownerDocumen.body)
    var win = getWindow(scrollParent)
    var target = isBody
      ? [win].concat(
          win.visualViewport || [],
          isScrollParent(scrollParent) ? scrollParent : []
        )
      : scrollParent
    var updatedList = list.concat(target)
    return isBody
      ? updatedList // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      : updatedList.concat(listScrollParents(getParentNode(target)))
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height,
    })
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === 'fixed')
    rect.top = rect.top + element.clientTop
    rect.left = rect.left + element.clientLeft
    rect.bottom = rect.top + element.clientHeight
    rect.right = rect.left + element.clientWidth
    rect.width = element.clientWidth
    rect.height = element.clientHeight
    rect.x = rect.left
    rect.y = rect.top
    return rect
  }

  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport
      ? rectToClientRect(getViewportRect(element, strategy))
      : isElement(clippingParent)
      ? getInnerBoundingClientRect(clippingParent, strategy)
      : rectToClientRect(getDocumentRect(getDocumentElement(element)))
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`

  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element))
    var canEscapeClipping =
      ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0
    var clipperElement =
      canEscapeClipping && isHTMLElement(element)
        ? getOffsetParent(element)
        : element

    if (!isElement(clipperElement)) {
      return []
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

    return clippingParents.filter(function (clippingParent) {
      return (
        isElement(clippingParent) &&
        contains(clippingParent, clipperElement) &&
        getNodeName(clippingParent) !== 'body'
      )
    })
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents

  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents =
      boundary === 'clippingParents'
        ? getClippingParents(element)
        : [].concat(boundary)
    var clippingParents = [].concat(mainClippingParents, [rootBoundary])
    var firstClippingParent = clippingParents[0]
    var clippingRect = clippingParents.reduce(function (
      accRect,
      clippingParent
    ) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy)
      accRect.top = max(rect.top, accRect.top)
      accRect.right = min(rect.right, accRect.right)
      accRect.bottom = min(rect.bottom, accRect.bottom)
      accRect.left = max(rect.left, accRect.left)
      return accRect
    },
    getClientRectFromMixedType(element, firstClippingParent, strategy))
    clippingRect.width = clippingRect.right - clippingRect.left
    clippingRect.height = clippingRect.bottom - clippingRect.top
    clippingRect.x = clippingRect.left
    clippingRect.y = clippingRect.top
    return clippingRect
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement
    var basePlacement = placement ? getBasePlacement(placement) : null
    var variation = placement ? getVariation(placement) : null
    var commonX = reference.x + reference.width / 2 - element.width / 2
    var commonY = reference.y + reference.height / 2 - element.height / 2
    var offsets

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height,
        }
        break

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height,
        }
        break

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY,
        }
        break

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY,
        }
        break

      default:
        offsets = {
          x: reference.x,
          y: reference.y,
        }
    }

    var mainAxis = basePlacement
      ? getMainAxisFromPlacement(basePlacement)
      : null

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width'

      switch (variation) {
        case start:
          offsets[mainAxis] =
            offsets[mainAxis] - (reference[len] / 2 - element[len] / 2)
          break

        case end:
          offsets[mainAxis] =
            offsets[mainAxis] + (reference[len] / 2 - element[len] / 2)
          break
      }
    }

    return offsets
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {}
    }

    var _options = options,
      _options$placement = _options.placement,
      placement =
        _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy =
        _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary =
        _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary =
        _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext =
        _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary =
        _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding
    var paddingObject = mergePaddingObject(
      typeof padding !== 'number'
        ? padding
        : expandToHashMap(padding, basePlacements)
    )
    var altContext = elementContext === popper ? reference : popper
    var popperRect = state.rects.popper
    var element = state.elements[altBoundary ? altContext : elementContext]
    var clippingClientRect = getClippingRect(
      isElement(element)
        ? element
        : element.contextElement || getDocumentElement(state.elements.popper),
      boundary,
      rootBoundary,
      strategy
    )
    var referenceClientRect = getBoundingClientRect(state.elements.reference)
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement,
    })
    var popperClientRect = rectToClientRect(
      Object.assign({}, popperRect, popperOffsets)
    )
    var elementClientRect =
      elementContext === popper ? popperClientRect : referenceClientRect // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom:
        elementClientRect.bottom -
        clippingClientRect.bottom +
        paddingObject.bottom,
      left:
        clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right:
        elementClientRect.right -
        clippingClientRect.right +
        paddingObject.right,
    }
    var offsetData = state.modifiersData.offset // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement]
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x'
        overflowOffsets[key] += offset[axis] * multiply
      })
    }

    return overflowOffsets
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {}
    }

    var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements =
        _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP
    var variation = getVariation(placement)
    var placements$1 = variation
      ? flipVariations
        ? variationPlacements
        : variationPlacements.filter(function (placement) {
            return getVariation(placement) === variation
          })
      : basePlacements
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0
    })

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1

      {
        console.error(
          [
            'Popper: The `allowedAutoPlacements` option did not allow any',
            'placements. Ensure the `placement` option matches the variation',
            'of the allowed placements.',
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.',
          ].join(' ')
        )
      }
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
      })[getBasePlacement(placement)]
      return acc
    }, {})
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b]
    })
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return []
    }

    var oppositePlacement = getOppositePlacement(placement)
    return [
      getOppositeVariationPlacement(placement),
      oppositePlacement,
      getOppositeVariationPlacement(oppositePlacement),
    ]
  }

  function flip(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name

    if (state.modifiersData[name]._skip) {
      return
    }

    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations =
        _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements
    var preferredPlacement = state.options.placement
    var basePlacement = getBasePlacement(preferredPlacement)
    var isBasePlacement = basePlacement === preferredPlacement
    var fallbackPlacements =
      specifiedFallbackPlacements ||
      (isBasePlacement || !flipVariations
        ? [getOppositePlacement(preferredPlacement)]
        : getExpandedFallbackPlacements(preferredPlacement))
    var placements = [preferredPlacement]
      .concat(fallbackPlacements)
      .reduce(function (acc, placement) {
        return acc.concat(
          getBasePlacement(placement) === auto
            ? computeAutoPlacement(state, {
                placement: placement,
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                flipVariations: flipVariations,
                allowedAutoPlacements: allowedAutoPlacements,
              })
            : placement
        )
      }, [])
    var referenceRect = state.rects.reference
    var popperRect = state.rects.popper
    var checksMap = new Map()
    var makeFallbackChecks = true
    var firstFittingPlacement = placements[0]

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i]

      var _basePlacement = getBasePlacement(placement)

      var isStartVariation = getVariation(placement) === start
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0
      var len = isVertical ? 'width' : 'height'
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding,
      })
      var mainVariationSide = isVertical
        ? isStartVariation
          ? right
          : left
        : isStartVariation
        ? bottom
        : top

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide)
      }

      var altVariationSide = getOppositePlacement(mainVariationSide)
      var checks = []

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0)
      }

      if (checkAltAxis) {
        checks.push(
          overflow[mainVariationSide] <= 0,
          overflow[altVariationSide] <= 0
        )
      }

      if (
        checks.every(function (check) {
          return check
        })
      ) {
        firstFittingPlacement = placement
        makeFallbackChecks = false
        break
      }

      checksMap.set(placement, checks)
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement)

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check
            })
          }
        })

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement
          return 'break'
        }
      }

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i)

        if (_ret === 'break') break
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true
      state.placement = firstFittingPlacement
      state.reset = true
    }
  } // eslint-disable-next-line import/no-unused-modules

  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false,
    },
  }

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0,
      }
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x,
    }
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0
    })
  }

  function hide(_ref) {
    var state = _ref.state,
      name = _ref.name
    var referenceRect = state.rects.reference
    var popperRect = state.rects.popper
    var preventedOffsets = state.modifiersData.preventOverflow
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference',
    })
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true,
    })
    var referenceClippingOffsets = getSideOffsets(
      referenceOverflow,
      referenceRect
    )
    var popperEscapeOffsets = getSideOffsets(
      popperAltOverflow,
      popperRect,
      preventedOffsets
    )
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets)
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets)
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped,
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped,
    })
  } // eslint-disable-next-line import/no-unused-modules

  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide,
  }

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement)
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1

    var _ref =
        typeof offset === 'function'
          ? offset(
              Object.assign({}, rects, {
                placement: placement,
              })
            )
          : offset,
      skidding = _ref[0],
      distance = _ref[1]

    skidding = skidding || 0
    distance = (distance || 0) * invertDistance
    return [left, right].indexOf(basePlacement) >= 0
      ? {
          x: distance,
          y: skidding,
        }
      : {
          x: skidding,
          y: distance,
        }
  }

  function offset(_ref2) {
    var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name
    var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset)
      return acc
    }, {})
    var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x
      state.modifiersData.popperOffsets.y += y
    }

    state.modifiersData[name] = data
  } // eslint-disable-next-line import/no-unused-modules

  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset,
  }

  function popperOffsets(_ref) {
    var state = _ref.state,
      name = _ref.name
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement,
    })
  } // eslint-disable-next-line import/no-unused-modules

  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {},
  }

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x'
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset =
        _options$tetherOffset === void 0 ? 0 : _options$tetherOffset
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary,
    })
    var basePlacement = getBasePlacement(state.placement)
    var variation = getVariation(state.placement)
    var isBasePlacement = !variation
    var mainAxis = getMainAxisFromPlacement(basePlacement)
    var altAxis = getAltAxis(mainAxis)
    var popperOffsets = state.modifiersData.popperOffsets
    var referenceRect = state.rects.reference
    var popperRect = state.rects.popper
    var tetherOffsetValue =
      typeof tetherOffset === 'function'
        ? tetherOffset(
            Object.assign({}, state.rects, {
              placement: state.placement,
            })
          )
        : tetherOffset
    var normalizedTetherOffsetValue =
      typeof tetherOffsetValue === 'number'
        ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue,
          }
        : Object.assign(
            {
              mainAxis: 0,
              altAxis: 0,
            },
            tetherOffsetValue
          )
    var offsetModifierState = state.modifiersData.offset
      ? state.modifiersData.offset[state.placement]
      : null
    var data = {
      x: 0,
      y: 0,
    }

    if (!popperOffsets) {
      return
    }

    if (checkMainAxis) {
      var _offsetModifierState$

      var mainSide = mainAxis === 'y' ? top : left
      var altSide = mainAxis === 'y' ? bottom : right
      var len = mainAxis === 'y' ? 'height' : 'width'
      var offset = popperOffsets[mainAxis]
      var min$1 = offset + overflow[mainSide]
      var max$1 = offset - overflow[altSide]
      var additive = tether ? -popperRect[len] / 2 : 0
      var minLen = variation === start ? referenceRect[len] : popperRect[len]
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len] // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow
      var arrowRect =
        tether && arrowElement
          ? getLayoutRect(arrowElement)
          : {
              width: 0,
              height: 0,
            }
      var arrowPaddingObject = state.modifiersData['arrow#persistent']
        ? state.modifiersData['arrow#persistent'].padding
        : getFreshSideObject()
      var arrowPaddingMin = arrowPaddingObject[mainSide]
      var arrowPaddingMax = arrowPaddingObject[altSide] // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len])
      var minOffset = isBasePlacement
        ? referenceRect[len] / 2 -
          additive -
          arrowLen -
          arrowPaddingMin -
          normalizedTetherOffsetValue.mainAxis
        : minLen -
          arrowLen -
          arrowPaddingMin -
          normalizedTetherOffsetValue.mainAxis
      var maxOffset = isBasePlacement
        ? -referenceRect[len] / 2 +
          additive +
          arrowLen +
          arrowPaddingMax +
          normalizedTetherOffsetValue.mainAxis
        : maxLen +
          arrowLen +
          arrowPaddingMax +
          normalizedTetherOffsetValue.mainAxis
      var arrowOffsetParent =
        state.elements.arrow && getOffsetParent(state.elements.arrow)
      var clientOffset = arrowOffsetParent
        ? mainAxis === 'y'
          ? arrowOffsetParent.clientTop || 0
          : arrowOffsetParent.clientLeft || 0
        : 0
      var offsetModifierValue =
        (_offsetModifierState$ =
          offsetModifierState == null
            ? void 0
            : offsetModifierState[mainAxis]) != null
          ? _offsetModifierState$
          : 0
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset
      var tetherMax = offset + maxOffset - offsetModifierValue
      var preventedOffset = within(
        tether ? min(min$1, tetherMin) : min$1,
        offset,
        tether ? max(max$1, tetherMax) : max$1
      )
      popperOffsets[mainAxis] = preventedOffset
      data[mainAxis] = preventedOffset - offset
    }

    if (checkAltAxis) {
      var _offsetModifierState$2

      var _mainSide = mainAxis === 'x' ? top : left

      var _altSide = mainAxis === 'x' ? bottom : right

      var _offset = popperOffsets[altAxis]

      var _len = altAxis === 'y' ? 'height' : 'width'

      var _min = _offset + overflow[_mainSide]

      var _max = _offset - overflow[_altSide]

      var isOriginSide = [top, left].indexOf(basePlacement) !== -1

      var _offsetModifierValue =
        (_offsetModifierState$2 =
          offsetModifierState == null
            ? void 0
            : offsetModifierState[altAxis]) != null
          ? _offsetModifierState$2
          : 0

      var _tetherMin = isOriginSide
        ? _min
        : _offset -
          referenceRect[_len] -
          popperRect[_len] -
          _offsetModifierValue +
          normalizedTetherOffsetValue.altAxis

      var _tetherMax = isOriginSide
        ? _offset +
          referenceRect[_len] +
          popperRect[_len] -
          _offsetModifierValue -
          normalizedTetherOffsetValue.altAxis
        : _max

      var _preventedOffset =
        tether && isOriginSide
          ? withinMaxClamp(_tetherMin, _offset, _tetherMax)
          : within(
              tether ? _tetherMin : _min,
              _offset,
              tether ? _tetherMax : _max
            )

      popperOffsets[altAxis] = _preventedOffset
      data[altAxis] = _preventedOffset - _offset
    }

    state.modifiersData[name] = data
  } // eslint-disable-next-line import/no-unused-modules

  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset'],
  }

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop,
    }
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node)
    } else {
      return getHTMLElementScroll(node)
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect()
    var scaleX = round(rect.width) / element.offsetWidth || 1
    var scaleY = round(rect.height) / element.offsetHeight || 1
    return scaleX !== 1 || scaleY !== 1
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent)
    var offsetParentIsScaled =
      isHTMLElement(offsetParent) && isElementScaled(offsetParent)
    var documentElement = getDocumentElement(offsetParent)
    var rect = getBoundingClientRect(
      elementOrVirtualElement,
      offsetParentIsScaled,
      isFixed
    )
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0,
    }
    var offsets = {
      x: 0,
      y: 0,
    }

    if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
      if (
        getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        isScrollParent(documentElement)
      ) {
        scroll = getNodeScroll(offsetParent)
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true)
        offsets.x += offsetParent.clientLeft
        offsets.y += offsetParent.clientTop
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement)
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height,
    }
  }

  function order(modifiers) {
    var map = new Map()
    var visited = new Set()
    var result = []
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier)
    }) // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name)
      var requires = [].concat(
        modifier.requires || [],
        modifier.requiresIfExists || []
      )
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep)

          if (depModifier) {
            sort(depModifier)
          }
        }
      })
      result.push(modifier)
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier)
      }
    })
    return result
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers) // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(
        orderedModifiers.filter(function (modifier) {
          return modifier.phase === phase
        })
      )
    }, [])
  }

  function debounce(fn) {
    var pending
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined
            resolve(fn())
          })
        })
      }

      return pending
    }
  }

  function format(str) {
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key]
    }

    return [].concat(args).reduce(function (p, c) {
      return p.replace(/%s/, c)
    }, str)
  }

  var INVALID_MODIFIER_ERROR =
    'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
  var MISSING_DEPENDENCY_ERROR =
    'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
  var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options',
  ]
  function validateModifiers(modifiers) {
    modifiers.forEach(function (modifier) {
      ;[]
        .concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function (value, index, self) {
          return self.indexOf(value) === index
        })
        .forEach(function (key) {
          switch (key) {
            case 'name':
              if (typeof modifier.name !== 'string') {
                console.error(
                  format(
                    INVALID_MODIFIER_ERROR,
                    String(modifier.name),
                    '"name"',
                    '"string"',
                    '"' + String(modifier.name) + '"'
                  )
                )
              }

              break

            case 'enabled':
              if (typeof modifier.enabled !== 'boolean') {
                console.error(
                  format(
                    INVALID_MODIFIER_ERROR,
                    modifier.name,
                    '"enabled"',
                    '"boolean"',
                    '"' + String(modifier.enabled) + '"'
                  )
                )
              }

              break

            case 'phase':
              if (modifierPhases.indexOf(modifier.phase) < 0) {
                console.error(
                  format(
                    INVALID_MODIFIER_ERROR,
                    modifier.name,
                    '"phase"',
                    'either ' + modifierPhases.join(', '),
                    '"' + String(modifier.phase) + '"'
                  )
                )
              }

              break

            case 'fn':
              if (typeof modifier.fn !== 'function') {
                console.error(
                  format(
                    INVALID_MODIFIER_ERROR,
                    modifier.name,
                    '"fn"',
                    '"function"',
                    '"' + String(modifier.fn) + '"'
                  )
                )
              }

              break

            case 'effect':
              if (
                modifier.effect != null &&
                typeof modifier.effect !== 'function'
              ) {
                console.error(
                  format(
                    INVALID_MODIFIER_ERROR,
                    modifier.name,
                    '"effect"',
                    '"function"',
                    '"' + String(modifier.fn) + '"'
                  )
                )
              }

              break

            case 'requires':
              if (
                modifier.requires != null &&
                !Array.isArray(modifier.requires)
              ) {
                console.error(
                  format(
                    INVALID_MODIFIER_ERROR,
                    modifier.name,
                    '"requires"',
                    '"array"',
                    '"' + String(modifier.requires) + '"'
                  )
                )
              }

              break

            case 'requiresIfExists':
              if (!Array.isArray(modifier.requiresIfExists)) {
                console.error(
                  format(
                    INVALID_MODIFIER_ERROR,
                    modifier.name,
                    '"requiresIfExists"',
                    '"array"',
                    '"' + String(modifier.requiresIfExists) + '"'
                  )
                )
              }

              break

            case 'options':
            case 'data':
              break

            default:
              console.error(
                'PopperJS: an invalid property has been provided to the "' +
                  modifier.name +
                  '" modifier, valid properties are ' +
                  VALID_PROPERTIES.map(function (s) {
                    return '"' + s + '"'
                  }).join(', ') +
                  '; but "' +
                  key +
                  '" was provided.'
              )
          }

          modifier.requires &&
            modifier.requires.forEach(function (requirement) {
              if (
                modifiers.find(function (mod) {
                  return mod.name === requirement
                }) == null
              ) {
                console.error(
                  format(
                    MISSING_DEPENDENCY_ERROR,
                    String(modifier.name),
                    requirement,
                    requirement
                  )
                )
              }
            })
        })
    })
  }

  function uniqueBy(arr, fn) {
    var identifiers = new Set()
    return arr.filter(function (item) {
      var identifier = fn(item)

      if (!identifiers.has(identifier)) {
        identifiers.add(identifier)
        return true
      }
    })
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name]
      merged[current.name] = existing
        ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data),
          })
        : current
      return merged
    }, {}) // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key]
    })
  }

  var INVALID_ELEMENT_ERROR =
    'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.'
  var INFINITE_LOOP_ERROR =
    'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.'
  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute',
  }

  function areValidElements() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function')
    })
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {}
    }

    var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers =
        _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions =
        _generatorOptions$def2 === void 0
          ? DEFAULT_OPTIONS
          : _generatorOptions$def2
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper,
        },
        attributes: {},
        styles: {},
      }
      var effectCleanupFns = []
      var isDestroyed = false
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options =
            typeof setOptionsAction === 'function'
              ? setOptionsAction(state.options)
              : setOptionsAction
          cleanupModifierEffects()
          state.options = Object.assign(
            {},
            defaultOptions,
            state.options,
            options
          )
          state.scrollParents = {
            reference: isElement(reference)
              ? listScrollParents(reference)
              : reference.contextElement
              ? listScrollParents(reference.contextElement)
              : [],
            popper: listScrollParents(popper),
          } // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(
            mergeByName([].concat(defaultModifiers, state.options.modifiers))
          ) // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled
          }) // Validate the provided modifiers so that the consumer will get warned
          // if one of the modifiers is invalid for any reason

          {
            var modifiers = uniqueBy(
              [].concat(orderedModifiers, state.options.modifiers),
              function (_ref) {
                var name = _ref.name
                return name
              }
            )
            validateModifiers(modifiers)

            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function (_ref2) {
                var name = _ref2.name
                return name === 'flip'
              })

              if (!flipModifier) {
                console.error(
                  [
                    'Popper: "auto" placements require the "flip" modifier be',
                    'present and enabled to work.',
                  ].join(' ')
                )
              }
            }

            var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft // We no longer take into account `margins` on the popper, and it can
            // cause bugs with positioning, so we'll warn the consumer

            if (
              [marginTop, marginRight, marginBottom, marginLeft].some(function (
                margin
              ) {
                return parseFloat(margin)
              })
            ) {
              console.warn(
                [
                  'Popper: CSS "margin" styles cannot be used to apply padding',
                  'between the popper and its reference element or boundary.',
                  'To replicate margin, use the `offset` modifier, as well as',
                  'the `padding` option in the `preventOverflow` and `flip`',
                  'modifiers.',
                ].join(' ')
              )
            }
          }

          runModifierEffects()
          return instance.update()
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return
          }

          var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            {
              console.error(INVALID_ELEMENT_ERROR)
            }

            return
          } // Store the reference and popper rects to be read by modifiers

          state.rects = {
            reference: getCompositeRect(
              reference,
              getOffsetParent(popper),
              state.options.strategy === 'fixed'
            ),
            popper: getLayoutRect(popper),
          } // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false
          state.placement = state.options.placement // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return (state.modifiersData[modifier.name] = Object.assign(
              {},
              modifier.data
            ))
          })
          var __debug_loops__ = 0

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            {
              __debug_loops__ += 1

              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR)
                break
              }
            }

            if (state.reset === true) {
              state.reset = false
              index = -1
              continue
            }

            var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options =
                _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name

            if (typeof fn === 'function') {
              state =
                fn({
                  state: state,
                  options: _options,
                  name: name,
                  instance: instance,
                }) || state
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate()
            resolve(state)
          })
        }),
        destroy: function destroy() {
          cleanupModifierEffects()
          isDestroyed = true
        },
      }

      if (!areValidElements(reference, popper)) {
        {
          console.error(INVALID_ELEMENT_ERROR)
        }

        return instance
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state)
        }
      }) // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options,
            })

            var noopFn = function noopFn() {}

            effectCleanupFns.push(cleanupFn || noopFn)
          }
        })
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn()
        })
        effectCleanupFns = []
      }

      return instance
    }
  }

  // This is b/c the Popper lib is all esm files, and would break in a common js only environment

  var createPopper = popperGenerator({
    defaultModifiers: [
      hide$1,
      popperOffsets$1,
      computeStyles$1,
      eventListeners,
      offset$1,
      flip$1,
      preventOverflow$1,
      arrow$1,
    ],
  })

  var initialPopperStyles = function initialPopperStyles(position) {
    return {
      position: position,
      top: '0',
      left: '0',
      opacity: '0',
      pointerEvents: 'none',
    }
  }

  var disabledApplyStylesModifier = {
    name: 'applyStyles',
    enabled: false,
  } // In order to satisfy the current usage of options, including undefined

  var ariaDescribedByModifier = {
    name: 'ariaDescribedBy',
    enabled: true,
    phase: 'afterWrite',
    effect: function effect(_ref) {
      var state = _ref.state
      return function () {
        var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper

        if ('removeAttribute' in reference) {
          var ids = (reference.getAttribute('aria-describedby') || '')
            .split(',')
            .filter(function (id) {
              return id.trim() !== popper.id
            })
          if (!ids.length) reference.removeAttribute('aria-describedby')
          else reference.setAttribute('aria-describedby', ids.join(','))
        }
      }
    },
    fn: function fn(_ref2) {
      var _popper$getAttribute

      var state = _ref2.state
      var _state$elements2 = state.elements,
        popper = _state$elements2.popper,
        reference = _state$elements2.reference
      var role =
        (_popper$getAttribute = popper.getAttribute('role')) == null
          ? void 0
          : _popper$getAttribute.toLowerCase()

      if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
        var ids = reference.getAttribute('aria-describedby')

        if (ids && ids.split(',').indexOf(popper.id) !== -1) {
          return
        }

        reference.setAttribute(
          'aria-describedby',
          ids ? ids + ',' + popper.id : popper.id
        )
      }
    },
  }
  var EMPTY_MODIFIERS = []
  /**
   * Position an element relative some reference element using Popper.js
   *
   * @param referenceElement
   * @param popperElement
   * @param {object}      options
   * @param {object=}     options.modifiers Popper.js modifiers
   * @param {boolean=}    options.enabled toggle the popper functionality on/off
   * @param {string=}     options.placement The popper element placement relative to the reference element
   * @param {string=}     options.strategy the positioning strategy
   * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
   * @param {function=}   options.onCreate called when the popper is created
   * @param {function=}   options.onUpdate called when the popper is updated
   *
   * @returns {UsePopperState} The popper state
   */

  function usePopper(referenceElement, popperElement, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
      _ref3$strategy = _ref3.strategy,
      strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
      _ref3$modifiers = _ref3.modifiers,
      modifiers =
        _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
      config = _objectWithoutPropertiesLoose(_ref3, [
        'enabled',
        'placement',
        'strategy',
        'modifiers',
      ])

    var popperInstanceRef = React.useRef()
    var update = React.useCallback(function () {
      var _popperInstanceRef$cu
      ;(_popperInstanceRef$cu = popperInstanceRef.current) == null
        ? void 0
        : _popperInstanceRef$cu.update()
    }, [])
    var forceUpdate = React.useCallback(function () {
      var _popperInstanceRef$cu2
      ;(_popperInstanceRef$cu2 = popperInstanceRef.current) == null
        ? void 0
        : _popperInstanceRef$cu2.forceUpdate()
    }, [])

    var _useSafeState = useSafeState(
        React.useState({
          placement: placement,
          update: update,
          forceUpdate: forceUpdate,
          attributes: {},
          styles: {
            popper: initialPopperStyles(strategy),
            arrow: {},
          },
        })
      ),
      popperState = _useSafeState[0],
      setState = _useSafeState[1]

    var updateModifier = React.useMemo(
      function () {
        return {
          name: 'updateStateModifier',
          enabled: true,
          phase: 'write',
          requires: ['computeStyles'],
          fn: function fn(_ref4) {
            var state = _ref4.state
            var styles = {}
            var attributes = {}
            Object.keys(state.elements).forEach(function (element) {
              styles[element] = state.styles[element]
              attributes[element] = state.attributes[element]
            })
            setState({
              state: state,
              styles: styles,
              attributes: attributes,
              update: update,
              forceUpdate: forceUpdate,
              placement: state.placement,
            })
          },
        }
      },
      [update, forceUpdate, setState]
    )
    React.useEffect(
      function () {
        if (!popperInstanceRef.current || !enabled) return
        popperInstanceRef.current.setOptions({
          placement: placement,
          strategy: strategy,
          modifiers: [].concat(modifiers, [
            updateModifier,
            disabledApplyStylesModifier,
          ]),
        }) // intentionally NOT re-running on new modifiers
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [strategy, placement, updateModifier, enabled]
    )
    React.useEffect(
      function () {
        if (!enabled || referenceElement == null || popperElement == null) {
          return undefined
        }

        popperInstanceRef.current = createPopper(
          referenceElement,
          popperElement,
          _extends({}, config, {
            placement: placement,
            strategy: strategy,
            modifiers: [].concat(modifiers, [
              ariaDescribedByModifier,
              updateModifier,
            ]),
          })
        )
        return function () {
          if (popperInstanceRef.current != null) {
            popperInstanceRef.current.destroy()
            popperInstanceRef.current = undefined
            setState(function (s) {
              return _extends({}, s, {
                attributes: {},
                styles: {
                  popper: initialPopperStyles(strategy),
                },
              })
            })
          }
        } // This is only run once to _create_ the popper
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [enabled, referenceElement, popperElement]
    )
    return popperState
  }

  /**
   * A `removeEventListener` ponyfill
   *
   * @param node the element
   * @param eventName the event name
   * @param handle the handler
   * @param options event options
   */
  function removeEventListener(node, eventName, handler, options) {
    var capture =
      options && typeof options !== 'boolean' ? options.capture : options
    node.removeEventListener(eventName, handler, capture)

    if (handler.__once) {
      node.removeEventListener(eventName, handler.__once, capture)
    }
  }

  function listen(node, eventName, handler, options) {
    addEventListener$1(node, eventName, handler, options)
    return function () {
      removeEventListener(node, eventName, handler, options)
    }
  }

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function () {}

  {
    var printWarning = function printWarning(format, args) {
      var len = arguments.length
      args = new Array(len > 1 ? len - 1 : 0)
      for (var key = 1; key < len; key++) {
        args[key - 1] = arguments[key]
      }
      var argIndex = 0
      var message =
        'Warning: ' +
        format.replace(/%s/g, function () {
          return args[argIndex++]
        })
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }

    warning = function (condition, format, args) {
      var len = arguments.length
      args = new Array(len > 2 ? len - 2 : 0)
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key]
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        )
      }
      if (!condition) {
        printWarning.apply(null, [format].concat(args))
      }
    }
  }

  var warning_1 = warning

  function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && 'setState' in componentOrElement) {
      return ReactDOM__default.default.findDOMNode(componentOrElement)
    }

    return componentOrElement != null ? componentOrElement : null
  }

  var ownerDocument = function (componentOrElement) {
    return ownerDocument$1(safeFindDOMNode(componentOrElement))
  }

  var escapeKeyCode = 27

  var noop = function noop() {}

  function isLeftClickEvent(event) {
    return event.button === 0
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
  }

  var getRefTarget = function getRefTarget(ref) {
    return ref && ('current' in ref ? ref.current : ref)
  }

  /**
   * The `useRootClose` hook registers your callback on the document
   * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
   * style behavior where your callback is triggered when the user tries to
   * interact with the rest of the document or hits the `esc` key.
   *
   * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
   * @param {function} onRootClose
   * @param {object=}  options
   * @param {boolean=} options.disabled
   * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
   */
  function useRootClose(ref, onRootClose, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger

    var preventMouseRootCloseRef = React.useRef(false)
    var onClose = onRootClose || noop
    var handleMouseCapture = React.useCallback(
      function (e) {
        var _e$composedPath$

        var currentTarget = getRefTarget(ref)
        warning_1(
          !!currentTarget,
          'RootClose captured a close event but does not have a ref to compare it to. ' +
            'useRootClose(), should be passed a ref that resolves to a DOM node'
        )
        preventMouseRootCloseRef.current =
          !currentTarget ||
          isModifiedEvent(e) ||
          !isLeftClickEvent(e) ||
          !!contains$1(
            currentTarget,
            (_e$composedPath$ =
              e.composedPath == null ? void 0 : e.composedPath()[0]) != null
              ? _e$composedPath$
              : e.target
          )
      },
      [ref]
    )
    var handleMouse = useEventCallback(function (e) {
      if (!preventMouseRootCloseRef.current) {
        onClose(e)
      }
    })
    var handleKeyUp = useEventCallback(function (e) {
      if (e.keyCode === escapeKeyCode) {
        onClose(e)
      }
    })
    React.useEffect(
      function () {
        if (disabled || ref == null) return undefined // Store the current event to avoid triggering handlers immediately
        // https://github.com/facebook/react/issues/20074

        var currentEvent = window.event
        var doc = ownerDocument(getRefTarget(ref)) // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.

        var removeMouseCaptureListener = listen(
          doc,
          clickTrigger,
          handleMouseCapture,
          true
        )
        var removeMouseListener = listen(doc, clickTrigger, function (e) {
          // skip if this event is the same as the one running when we added the handlers
          if (e === currentEvent) {
            currentEvent = undefined
            return
          }

          handleMouse(e)
        })
        var removeKeyupListener = listen(doc, 'keyup', function (e) {
          // skip if this event is the same as the one running when we added the handlers
          if (e === currentEvent) {
            currentEvent = undefined
            return
          }

          handleKeyUp(e)
        })
        var mobileSafariHackListeners = []

        if ('ontouchstart' in doc.documentElement) {
          mobileSafariHackListeners = [].slice
            .call(doc.body.children)
            .map(function (el) {
              return listen(el, 'mousemove', noop)
            })
        }

        return function () {
          removeMouseCaptureListener()
          removeMouseListener()
          removeKeyupListener()
          mobileSafariHackListeners.forEach(function (remove) {
            return remove()
          })
        }
      },
      [
        ref,
        disabled,
        clickTrigger,
        handleMouseCapture,
        handleMouse,
        handleKeyUp,
      ]
    )
  }

  function toModifierMap(modifiers) {
    var result = {}

    if (!Array.isArray(modifiers)) {
      return modifiers || result
    } // eslint-disable-next-line no-unused-expressions

    modifiers == null
      ? void 0
      : modifiers.forEach(function (m) {
          result[m.name] = m
        })
    return result
  }
  function toModifierArray(map) {
    if (map === void 0) {
      map = {}
    }

    if (Array.isArray(map)) return map
    return Object.keys(map).map(function (k) {
      map[k].name = k
      return map[k]
    })
  }
  function mergeOptionsWithPopperConfig(_ref) {
    var _modifiers$preventOve,
      _modifiers$preventOve2,
      _modifiers$offset,
      _modifiers$arrow

    var enabled = _ref.enabled,
      enableEvents = _ref.enableEvents,
      placement = _ref.placement,
      flip = _ref.flip,
      offset = _ref.offset,
      fixed = _ref.fixed,
      containerPadding = _ref.containerPadding,
      arrowElement = _ref.arrowElement,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig
    var modifiers = toModifierMap(popperConfig.modifiers)
    return _extends({}, popperConfig, {
      placement: placement,
      enabled: enabled,
      strategy: fixed ? 'fixed' : popperConfig.strategy,
      modifiers: toModifierArray(
        _extends({}, modifiers, {
          eventListeners: {
            enabled: enableEvents,
          },
          preventOverflow: _extends({}, modifiers.preventOverflow, {
            options: containerPadding
              ? _extends(
                  {
                    padding: containerPadding,
                  },
                  (_modifiers$preventOve = modifiers.preventOverflow) == null
                    ? void 0
                    : _modifiers$preventOve.options
                )
              : (_modifiers$preventOve2 = modifiers.preventOverflow) == null
              ? void 0
              : _modifiers$preventOve2.options,
          }),
          offset: {
            options: _extends(
              {
                offset: offset,
              },
              (_modifiers$offset = modifiers.offset) == null
                ? void 0
                : _modifiers$offset.options
            ),
          },
          arrow: _extends({}, modifiers.arrow, {
            enabled: !!arrowElement,
            options: _extends(
              {},
              (_modifiers$arrow = modifiers.arrow) == null
                ? void 0
                : _modifiers$arrow.options,
              {
                element: arrowElement,
              }
            ),
          }),
          flip: _extends(
            {
              enabled: !!flip,
            },
            modifiers.flip
          ),
        })
      ),
    })
  }

  /**
   * Checks if a given element has a CSS class.
   *
   * @param element the element
   * @param className the CSS class name
   */
  function hasClass(element, className) {
    if (element.classList)
      return !!className && element.classList.contains(className)
    return (
      (' ' + (element.className.baseVal || element.className) + ' ').indexOf(
        ' ' + className + ' '
      ) !== -1
    )
  }

  /**
   * Adds a CSS class to a given element.
   *
   * @param element the element
   * @param className the CSS class name
   */

  function addClass(element, className) {
    if (element.classList) element.classList.add(className)
    else if (!hasClass(element, className))
      if (typeof element.className === 'string')
        element.className = element.className + ' ' + className
      else
        element.setAttribute(
          'class',
          ((element.className && element.className.baseVal) || '') +
            ' ' +
            className
        )
  }

  function replaceClassName(origClass, classToRemove) {
    return origClass
      .replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1')
      .replace(/\s+/g, ' ')
      .replace(/^\s*|\s*$/g, '')
  }
  /**
   * Removes a CSS class from a given element.
   *
   * @param element the element
   * @param className the CSS class name
   */

  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className)
    } else if (typeof element.className === 'string') {
      element.className = replaceClassName(element.className, className)
    } else {
      element.setAttribute(
        'class',
        replaceClassName(
          (element.className && element.className.baseVal) || '',
          className
        )
      )
    }
  }

  var size
  function scrollbarSize(recalc) {
    if ((!size && size !== 0) || recalc) {
      if (canUseDOM) {
        var scrollDiv = document.createElement('div')
        scrollDiv.style.position = 'absolute'
        scrollDiv.style.top = '-9999px'
        scrollDiv.style.width = '50px'
        scrollDiv.style.height = '50px'
        scrollDiv.style.overflow = 'scroll'
        document.body.appendChild(scrollDiv)
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth
        document.body.removeChild(scrollDiv)
      }
    }

    return size
  }

  var resolveContainerRef = function resolveContainerRef(ref) {
    var _ref

    if (typeof document === 'undefined') return null
    if (ref == null) return ownerDocument$1().body
    if (typeof ref === 'function') ref = ref()
    if (ref && 'current' in ref) ref = ref.current
    if ((_ref = ref) != null && _ref.nodeType) return ref || null
    return null
  }
  function useWaitForDOMRef(ref, onResolved) {
    var _useState = React.useState(function () {
        return resolveContainerRef(ref)
      }),
      resolvedRef = _useState[0],
      setRef = _useState[1]

    if (!resolvedRef) {
      var earlyRef = resolveContainerRef(ref)
      if (earlyRef) setRef(earlyRef)
    }

    React.useEffect(
      function () {
        if (onResolved && resolvedRef) {
          onResolved(resolvedRef)
        }
      },
      [onResolved, resolvedRef]
    )
    React.useEffect(
      function () {
        var nextRef = resolveContainerRef(ref)

        if (nextRef !== resolvedRef) {
          setRef(nextRef)
        }
      },
      [ref, resolvedRef]
    )
    return resolvedRef
  }

  var toFnRef = function toFnRef(ref) {
    return !ref || typeof ref === 'function'
      ? ref
      : function (value) {
          ref.current = value
        }
  }

  function mergeRefs(refA, refB) {
    var a = toFnRef(refA)
    var b = toFnRef(refB)
    return function (value) {
      if (a) a(value)
      if (b) b(value)
    }
  }
  /**
   * Create and returns a single callback ref composed from two other Refs.
   *
   * ```tsx
   * const Button = React.forwardRef((props, ref) => {
   *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
   *   const mergedRef = useMergedRefs(ref, attachRef);
   *
   *   return <button ref={mergedRef} {...props}/>
   * })
   * ```
   *
   * @param refA A Callback or mutable Ref
   * @param refB A Callback or mutable Ref
   * @category refs
   */

  function useMergedRefs(refA, refB) {
    return React.useMemo(
      function () {
        return mergeRefs(refA, refB)
      },
      [refA, refB]
    )
  }

  /**
   * Built on top of `Popper.js`, the overlay component is
   * great for custom tooltip overlays.
   */
  var Overlay = /*#__PURE__*/ React__default.default.forwardRef(function (
    props,
    outerRef
  ) {
    var flip = props.flip,
      offset = props.offset,
      placement = props.placement,
      _props$containerPaddi = props.containerPadding,
      containerPadding =
        _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition

    var _useCallbackRef = useCallbackRef(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1]

    var _useCallbackRef2 = useCallbackRef(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1]

    var mergedRef = useMergedRefs(attachRef, outerRef)
    var container = useWaitForDOMRef(props.container)
    var target = useWaitForDOMRef(props.target)

    var _useState = React.useState(!props.show),
      exited = _useState[0],
      setExited = _useState[1]

    var _usePopper = usePopper(
        target,
        rootElement,
        mergeOptionsWithPopperConfig({
          placement: placement,
          enableEvents: !!props.show,
          containerPadding: containerPadding || 5,
          flip: flip,
          offset: offset,
          arrowElement: arrowElement,
          popperConfig: popperConfig,
        })
      ),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = _objectWithoutPropertiesLoose(_usePopper, [
        'styles',
        'attributes',
      ])

    if (props.show) {
      if (exited) setExited(false)
    } else if (!props.transition && !exited) {
      setExited(true)
    }

    var handleHidden = function handleHidden() {
      setExited(true)

      if (props.onExited) {
        props.onExited.apply(props, arguments)
      }
    } // Don't un-render the overlay while it's transitioning out.

    var mountOverlay = props.show || (Transition && !exited)
    useRootClose(rootElement, props.onHide, {
      disabled: !props.rootClose || props.rootCloseDisabled,
      clickTrigger: props.rootCloseEvent,
    })

    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null
    }

    var child = props.children(
      _extends({}, popper, {
        show: !!props.show,
        props: _extends({}, attributes.popper, {
          style: styles.popper,
          ref: mergedRef,
        }),
        arrowProps: _extends({}, attributes.arrow, {
          style: styles.arrow,
          ref: attachArrowRef,
        }),
      })
    )

    if (Transition) {
      var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered
      child = /*#__PURE__*/ React__default.default.createElement(
        Transition,
        {
          in: props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered,
        },
        child
      )
    }

    return container
      ? /*#__PURE__*/ ReactDOM__default.default.createPortal(child, container)
      : null
  })
  Overlay.displayName = 'Overlay'
  Overlay.propTypes = {
    /**
     * Set the visibility of the Overlay
     */
    show: propTypesExports.bool,

    /** Specify where the overlay element is positioned in relation to the target element */
    placement: propTypesExports.oneOf(placements),

    /**
     * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
     * the overlay is positioned relative to.
     */
    target: propTypesExports.any,

    /**
     * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: propTypesExports.any,

    /**
     * Enables the Popper.js `flip` modifier, allowing the Overlay to
     * automatically adjust it's placement in case of overlap with the viewport or toggle.
     * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
     */
    flip: propTypesExports.bool,

    /**
     * A render prop that returns an element to overlay and position. See
     * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
     *
     * @type {Function ({
     *   show: boolean,
     *   placement: Placement,
     *   update: () => void,
     *   forceUpdate: () => void,
     *   props: {
     *     ref: (?HTMLElement) => void,
     *     style: { [string]: string | number },
     *     aria-labelledby: ?string
     *     [string]: string | number,
     *   },
     *   arrowProps: {
     *     ref: (?HTMLElement) => void,
     *     style: { [string]: string | number },
     *     [string]: string | number,
     *   },
     * }) => React.Element}
     */
    children: propTypesExports.func.isRequired,

    /**
     * Control how much space there is between the edge of the boundary element and overlay.
     * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
     */
    containerPadding: propTypesExports.number,

    /**
     * A set of popper options and props passed directly to react-popper's Popper component.
     */
    popperConfig: propTypesExports.object,

    /**
     * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
     */
    rootClose: propTypesExports.bool,

    /**
     * Specify event for toggling overlay
     */
    rootCloseEvent: propTypesExports.oneOf(['click', 'mousedown']),

    /**
     * Specify disabled for disable RootCloseWrapper
     */
    rootCloseDisabled: propTypesExports.bool,

    /**
     * A Callback fired by the Overlay when it wishes to be hidden.
     *
     * __required__ when `rootClose` is `true`.
     *
     * @type func
     */
    onHide: function onHide(props) {
      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key]
      }

      if (props.rootClose) {
        var _PropTypes$func

        return (_PropTypes$func = propTypesExports.func).isRequired.apply(
          _PropTypes$func,
          [props].concat(args)
        )
      }

      return propTypesExports.func.apply(propTypesExports, [props].concat(args))
    },

    /**
     * A `react-transition-group@2.0.0` `<Transition/>` component
     * used to animate the overlay as it changes visibility.
     */
    // @ts-ignore
    transition: propTypesExports.elementType,

    /**
     * Callback fired before the Overlay transitions in
     */
    onEnter: propTypesExports.func,

    /**
     * Callback fired as the Overlay begins to transition in
     */
    onEntering: propTypesExports.func,

    /**
     * Callback fired after the Overlay finishes transitioning in
     */
    onEntered: propTypesExports.func,

    /**
     * Callback fired right before the Overlay transitions out
     */
    onExit: propTypesExports.func,

    /**
     * Callback fired as the Overlay begins to transition out
     */
    onExiting: propTypesExports.func,

    /**
     * Callback fired after the Overlay finishes transitioning out
     */
    onExited: propTypesExports.func,
  }
  var Overlay$1 = Overlay

  function useClickOutside(_ref) {
    var ref = _ref.ref,
      callback = _ref.callback
    React.useEffect(
      function () {
        var handleClickOutside = function handleClickOutside(e) {
          if (ref.current && !ref.current.contains(e.target)) {
            callback()
          }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return function () {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      },
      [ref, callback]
    )
  }

  var _excluded$7 = [
    'style',
    'className',
    'event',
    'selected',
    'isAllDay',
    'onSelect',
    'onDoubleClick',
    'onKeyPress',
    'localizer',
    'continuesPrior',
    'continuesAfter',
    'accessors',
    'getters',
    'children',
    'components',
    'slotStart',
    'slotEnd',
  ]
  var EventCell = /*#__PURE__*/ (function (_React$Component) {
    _inherits(EventCell, _React$Component)
    var _super = _createSuper(EventCell)
    function EventCell() {
      _classCallCheck(this, EventCell)
      return _super.apply(this, arguments)
    }
    _createClass(EventCell, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            style = _this$props.style,
            className = _this$props.className,
            event = _this$props.event,
            selected = _this$props.selected,
            isAllDay = _this$props.isAllDay,
            onSelect = _this$props.onSelect,
            _onDoubleClick = _this$props.onDoubleClick,
            _onKeyPress = _this$props.onKeyPress,
            localizer = _this$props.localizer,
            continuesPrior = _this$props.continuesPrior,
            continuesAfter = _this$props.continuesAfter,
            accessors = _this$props.accessors,
            getters = _this$props.getters,
            children = _this$props.children,
            _this$props$component = _this$props.components,
            Event = _this$props$component.event,
            EventWrapper = _this$props$component.eventWrapper,
            slotStart = _this$props.slotStart,
            slotEnd = _this$props.slotEnd,
            props = _objectWithoutProperties(_this$props, _excluded$7)
          delete props.resizable
          var title = accessors.title(event)
          var tooltip = accessors.tooltip(event)
          var end = accessors.end(event)
          var start = accessors.start(event)
          var allDay = accessors.allDay(event)
          var showAsAllDay =
            isAllDay ||
            allDay ||
            localizer.diff(start, localizer.ceil(end, 'day'), 'day') > 1
          var userProps = getters.eventProp(event, start, end, selected)
          var content = /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: 'rbc-event-content',
              title: tooltip || undefined,
            },
            Event
              ? /*#__PURE__*/ React__default.default.createElement(Event, {
                  event: event,
                  continuesPrior: continuesPrior,
                  continuesAfter: continuesAfter,
                  title: title,
                  isAllDay: allDay,
                  localizer: localizer,
                  slotStart: slotStart,
                  slotEnd: slotEnd,
                })
              : title
          )
          return /*#__PURE__*/ React__default.default.createElement(
            EventWrapper,
            Object.assign({}, this.props, {
              type: 'date',
            }),
            /*#__PURE__*/ React__default.default.createElement(
              'div',
              Object.assign({}, props, {
                tabIndex: 0,
                style: _objectSpread2(
                  _objectSpread2({}, userProps.style),
                  style
                ),
                className: clsx('rbc-event', className, userProps.className, {
                  'rbc-selected': selected,
                  'rbc-event-allday': showAsAllDay,
                  'rbc-event-continues-prior': continuesPrior,
                  'rbc-event-continues-after': continuesAfter,
                }),
                onClick: function onClick(e) {
                  return onSelect && onSelect(event, e)
                },
                onDoubleClick: function onDoubleClick(e) {
                  return _onDoubleClick && _onDoubleClick(event, e)
                },
                onKeyPress: function onKeyPress(e) {
                  return _onKeyPress && _onKeyPress(event, e)
                },
              }),
              typeof children === 'function' ? children(content) : content
            )
          )
        },
      },
    ])
    return EventCell
  })(React__default.default.Component)

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */

  function listCacheClear$1() {
    this.__data__ = []
    this.size = 0
  }

  var _listCacheClear = listCacheClear$1

  var eq$3 = eq_1

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf$4(array, key) {
    var length = array.length
    while (length--) {
      if (eq$3(array[length][0], key)) {
        return length
      }
    }
    return -1
  }

  var _assocIndexOf = assocIndexOf$4

  var assocIndexOf$3 = _assocIndexOf

  /** Used for built-in method references. */
  var arrayProto = Array.prototype

  /** Built-in value references. */
  var splice = arrayProto.splice

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete$1(key) {
    var data = this.__data__,
      index = assocIndexOf$3(data, key)

    if (index < 0) {
      return false
    }
    var lastIndex = data.length - 1
    if (index == lastIndex) {
      data.pop()
    } else {
      splice.call(data, index, 1)
    }
    --this.size
    return true
  }

  var _listCacheDelete = listCacheDelete$1

  var assocIndexOf$2 = _assocIndexOf

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet$1(key) {
    var data = this.__data__,
      index = assocIndexOf$2(data, key)

    return index < 0 ? undefined : data[index][1]
  }

  var _listCacheGet = listCacheGet$1

  var assocIndexOf$1 = _assocIndexOf

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1
  }

  var _listCacheHas = listCacheHas$1

  var assocIndexOf = _assocIndexOf

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet$1(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key)

    if (index < 0) {
      ++this.size
      data.push([key, value])
    } else {
      data[index][1] = value
    }
    return this
  }

  var _listCacheSet = listCacheSet$1

  var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache$4(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      var entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  // Add methods to `ListCache`.
  ListCache$4.prototype.clear = listCacheClear
  ListCache$4.prototype['delete'] = listCacheDelete
  ListCache$4.prototype.get = listCacheGet
  ListCache$4.prototype.has = listCacheHas
  ListCache$4.prototype.set = listCacheSet

  var _ListCache = ListCache$4

  var ListCache$3 = _ListCache

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear$1() {
    this.__data__ = new ListCache$3()
    this.size = 0
  }

  var _stackClear = stackClear$1

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function stackDelete$1(key) {
    var data = this.__data__,
      result = data['delete'](key)

    this.size = data.size
    return result
  }

  var _stackDelete = stackDelete$1

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function stackGet$1(key) {
    return this.__data__.get(key)
  }

  var _stackGet = stackGet$1

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function stackHas$1(key) {
    return this.__data__.has(key)
  }

  var _stackHas = stackHas$1

  var root$6 = _root

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root$6['__core-js_shared__']

  var _coreJsData = coreJsData$1

  var coreJsData = _coreJsData

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
    )
    return uid ? 'Symbol(src)_1.' + uid : ''
  })()

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func
  }

  var _isMasked = isMasked$1

  /** Used for built-in method references. */

  var funcProto$2 = Function.prototype

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func)
      } catch (e) {}
      try {
        return func + ''
      } catch (e) {}
    }
    return ''
  }

  var _toSource = toSource$2

  var isFunction$2 = isFunction_1,
    isMasked = _isMasked,
    isObject$5 = isObject_1,
    toSource$1 = _toSource

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
    objectProto$e = Object.prototype

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$e.hasOwnProperty

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    '^' +
      funcToString$1
        .call(hasOwnProperty$c)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  )

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject$5(value) || isMasked(value)) {
      return false
    }
    var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor
    return pattern.test(toSource$1(value))
  }

  var _baseIsNative = baseIsNative$1

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key]
  }

  var _getValue = getValue$1

  var baseIsNative = _baseIsNative,
    getValue = _getValue

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$7(object, key) {
    var value = getValue(object, key)
    return baseIsNative(value) ? value : undefined
  }

  var _getNative = getNative$7

  var getNative$6 = _getNative,
    root$5 = _root

  /* Built-in method references that are verified to be native. */
  var Map$4 = getNative$6(root$5, 'Map')

  var _Map = Map$4

  var getNative$5 = _getNative

  /* Built-in method references that are verified to be native. */
  var nativeCreate$4 = getNative$5(Object, 'create')

  var _nativeCreate = nativeCreate$4

  var nativeCreate$3 = _nativeCreate

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {}
    this.size = 0
  }

  var _hashClear = hashClear$1

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key]
    this.size -= result ? 1 : 0
    return result
  }

  var _hashDelete = hashDelete$1

  var nativeCreate$2 = _nativeCreate

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__'

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$d.hasOwnProperty

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet$1(key) {
    var data = this.__data__
    if (nativeCreate$2) {
      var result = data[key]
      return result === HASH_UNDEFINED$2 ? undefined : result
    }
    return hasOwnProperty$b.call(data, key) ? data[key] : undefined
  }

  var _hashGet = hashGet$1

  var nativeCreate$1 = _nativeCreate

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$c.hasOwnProperty

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas$1(key) {
    var data = this.__data__
    return nativeCreate$1
      ? data[key] !== undefined
      : hasOwnProperty$a.call(data, key)
  }

  var _hashHas = hashHas$1

  var nativeCreate = _nativeCreate

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__'

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet$1(key, value) {
    var data = this.__data__
    this.size += this.has(key) ? 0 : 1
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value
    return this
  }

  var _hashSet = hashSet$1

  var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash$1(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      var entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  // Add methods to `Hash`.
  Hash$1.prototype.clear = hashClear
  Hash$1.prototype['delete'] = hashDelete
  Hash$1.prototype.get = hashGet
  Hash$1.prototype.has = hashHas
  Hash$1.prototype.set = hashSet

  var _Hash = Hash$1

  var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$3 = _Map

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear$1() {
    this.size = 0
    this.__data__ = {
      hash: new Hash(),
      map: new (Map$3 || ListCache$2)(),
      string: new Hash(),
    }
  }

  var _mapCacheClear = mapCacheClear$1

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */

  function isKeyable$1(value) {
    var type = typeof value
    return type == 'string' ||
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean'
      ? value !== '__proto__'
      : value === null
  }

  var _isKeyable = isKeyable$1

  var isKeyable = _isKeyable

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData$4(map, key) {
    var data = map.__data__
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map
  }

  var _getMapData = getMapData$4

  var getMapData$3 = _getMapData

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)['delete'](key)
    this.size -= result ? 1 : 0
    return result
  }

  var _mapCacheDelete = mapCacheDelete$1

  var getMapData$2 = _getMapData

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key)
  }

  var _mapCacheGet = mapCacheGet$1

  var getMapData$1 = _getMapData

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key)
  }

  var _mapCacheHas = mapCacheHas$1

  var getMapData = _getMapData

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
      size = data.size

    data.set(key, value)
    this.size += data.size == size ? 0 : 1
    return this
  }

  var _mapCacheSet = mapCacheSet$1

  var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache$3(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      var entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  // Add methods to `MapCache`.
  MapCache$3.prototype.clear = mapCacheClear
  MapCache$3.prototype['delete'] = mapCacheDelete
  MapCache$3.prototype.get = mapCacheGet
  MapCache$3.prototype.has = mapCacheHas
  MapCache$3.prototype.set = mapCacheSet

  var _MapCache = MapCache$3

  var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache$2 = _MapCache

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet$1(key, value) {
    var data = this.__data__
    if (data instanceof ListCache$1) {
      var pairs = data.__data__
      if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value])
        this.size = ++data.size
        return this
      }
      data = this.__data__ = new MapCache$2(pairs)
    }
    data.set(key, value)
    this.size = data.size
    return this
  }

  var _stackSet = stackSet$1

  var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack$3(entries) {
    var data = (this.__data__ = new ListCache(entries))
    this.size = data.size
  }

  // Add methods to `Stack`.
  Stack$3.prototype.clear = stackClear
  Stack$3.prototype['delete'] = stackDelete
  Stack$3.prototype.get = stackGet
  Stack$3.prototype.has = stackHas
  Stack$3.prototype.set = stackSet

  var _Stack = Stack$3

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__'

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED)
    return this
  }

  var _setCacheAdd = setCacheAdd$1

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */

  function setCacheHas$1(value) {
    return this.__data__.has(value)
  }

  var _setCacheHas = setCacheHas$1

  var MapCache$1 = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache$1(values) {
    var index = -1,
      length = values == null ? 0 : values.length

    this.__data__ = new MapCache$1()
    while (++index < length) {
      this.add(values[index])
    }
  }

  // Add methods to `SetCache`.
  SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd
  SetCache$1.prototype.has = setCacheHas

  var _SetCache = SetCache$1

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */

  function arraySome$1(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true
      }
    }
    return false
  }

  var _arraySome = arraySome$1

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function cacheHas$1(cache, key) {
    return cache.has(key)
  }

  var _cacheHas = cacheHas$1

  var SetCache = _SetCache,
    arraySome = _arraySome,
    cacheHas = _cacheHas

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array)
    var othStacked = stack.get(other)
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array
    }
    var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : undefined

    stack.set(array, other)
    stack.set(other, array)

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
        othValue = other[index]

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack)
      }
      if (compared !== undefined) {
        if (compared) {
          continue
        }
        result = false
        break
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (
          !arraySome(other, function (othValue, othIndex) {
            if (
              !cacheHas(seen, othIndex) &&
              (arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack))
            ) {
              return seen.push(othIndex)
            }
          })
        ) {
          result = false
          break
        }
      } else if (
        !(
          arrValue === othValue ||
          equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )
      ) {
        result = false
        break
      }
    }
    stack['delete'](array)
    stack['delete'](other)
    return result
  }

  var _equalArrays = equalArrays$2

  var root$4 = _root

  /** Built-in value references. */
  var Uint8Array$2 = root$4.Uint8Array

  var _Uint8Array = Uint8Array$2

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */

  function mapToArray$1(map) {
    var index = -1,
      result = Array(map.size)

    map.forEach(function (value, key) {
      result[++index] = [key, value]
    })
    return result
  }

  var _mapToArray = mapToArray$1

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */

  function setToArray$1(set) {
    var index = -1,
      result = Array(set.size)

    set.forEach(function (value) {
      result[++index] = value
    })
    return result
  }

  var _setToArray = setToArray$1

  var Symbol$4 = _Symbol,
    Uint8Array$1 = _Uint8Array,
    eq$2 = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray = _setToArray

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2

  /** `Object#toString` result references. */
  var boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    mapTag$5 = '[object Map]',
    numberTag$3 = '[object Number]',
    regexpTag$3 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$2 = '[object Symbol]'

  var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]'

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : undefined,
    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag$1(
    object,
    other,
    tag,
    bitmask,
    customizer,
    equalFunc,
    stack
  ) {
    switch (tag) {
      case dataViewTag$4:
        if (
          object.byteLength != other.byteLength ||
          object.byteOffset != other.byteOffset
        ) {
          return false
        }
        object = object.buffer
        other = other.buffer

      case arrayBufferTag$3:
        if (
          object.byteLength != other.byteLength ||
          !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))
        ) {
          return false
        }
        return true

      case boolTag$3:
      case dateTag$3:
      case numberTag$3:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq$2(+object, +other)

      case errorTag$2:
        return object.name == other.name && object.message == other.message

      case regexpTag$3:
      case stringTag$3:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == other + ''

      case mapTag$5:
        var convert = mapToArray

      case setTag$5:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4
        convert || (convert = setToArray)

        if (object.size != other.size && !isPartial) {
          return false
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object)
        if (stacked) {
          return stacked == other
        }
        bitmask |= COMPARE_UNORDERED_FLAG$2

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other)
        var result = equalArrays$1(
          convert(object),
          convert(other),
          bitmask,
          customizer,
          equalFunc,
          stack
        )
        stack['delete'](object)
        return result

      case symbolTag$2:
        if (symbolValueOf$1) {
          return symbolValueOf$1.call(object) == symbolValueOf$1.call(other)
        }
    }
    return false
  }

  var _equalByTag = equalByTag$1

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush$3(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length

    while (++index < length) {
      array[offset + index] = values[index]
    }
    return array
  }

  var _arrayPush = arrayPush$3

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray$c = Array.isArray

  var isArray_1 = isArray$c

  var arrayPush$2 = _arrayPush,
    isArray$b = isArray_1

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object)
    return isArray$b(object) ? result : arrayPush$2(result, symbolsFunc(object))
  }

  var _baseGetAllKeys = baseGetAllKeys$2

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */

  function arrayFilter$1(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = []

    while (++index < length) {
      var value = array[index]
      if (predicate(value, index, array)) {
        result[resIndex++] = value
      }
    }
    return result
  }

  var _arrayFilter = arrayFilter$1

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */

  function stubArray$2() {
    return []
  }

  var stubArray_1 = stubArray$2

  var arrayFilter = _arrayFilter,
    stubArray$1 = stubArray_1

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols$3 = !nativeGetSymbols$1
    ? stubArray$1
    : function (object) {
        if (object == null) {
          return []
        }
        object = Object(object)
        return arrayFilter(nativeGetSymbols$1(object), function (symbol) {
          return propertyIsEnumerable$1.call(object, symbol)
        })
      }

  var _getSymbols = getSymbols$3

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
      result = Array(n)

    while (++index < n) {
      result[index] = iteratee(index)
    }
    return result
  }

  var _baseTimes = baseTimes$1

  var baseGetTag$3 = _baseGetTag,
    isObjectLike$6 = isObjectLike_1

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]'

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$3
  }

  var _baseIsArguments = baseIsArguments$1

  var baseIsArguments = _baseIsArguments,
    isObjectLike$5 = isObjectLike_1

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$a.hasOwnProperty

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$a.propertyIsEnumerable

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments$3 = baseIsArguments(
    (function () {
      return arguments
    })()
  )
    ? baseIsArguments
    : function (value) {
        return (
          isObjectLike$5(value) &&
          hasOwnProperty$9.call(value, 'callee') &&
          !propertyIsEnumerable.call(value, 'callee')
        )
      }

  var isArguments_1 = isArguments$3

  var isBufferExports = {}
  var isBuffer$4 = {
    get exports() {
      return isBufferExports
    },
    set exports(v) {
      isBufferExports = v
    },
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false
  }

  var stubFalse_1 = stubFalse

  ;(function (module, exports) {
    var root = _root,
      stubFalse = stubFalse_1

    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports

    /** Detect free variable `module`. */
    var freeModule =
      freeExports &&
      'object' == 'object' &&
      module &&
      !module.nodeType &&
      module

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse

    module.exports = isBuffer
  })(isBuffer$4, isBufferExports)

  var baseGetTag$2 = _baseGetTag,
    isLength$1 = isLength_1,
    isObjectLike$4 = isObjectLike_1

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$4 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag$2 = '[object WeakMap]'

  var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]'

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {}
  typedArrayTags[float32Tag$2] =
    typedArrayTags[float64Tag$2] =
    typedArrayTags[int8Tag$2] =
    typedArrayTags[int16Tag$2] =
    typedArrayTags[int32Tag$2] =
    typedArrayTags[uint8Tag$2] =
    typedArrayTags[uint8ClampedTag$2] =
    typedArrayTags[uint16Tag$2] =
    typedArrayTags[uint32Tag$2] =
      true
  typedArrayTags[argsTag$2] =
    typedArrayTags[arrayTag$2] =
    typedArrayTags[arrayBufferTag$2] =
    typedArrayTags[boolTag$2] =
    typedArrayTags[dataViewTag$3] =
    typedArrayTags[dateTag$2] =
    typedArrayTags[errorTag$1] =
    typedArrayTags[funcTag$1] =
    typedArrayTags[mapTag$4] =
    typedArrayTags[numberTag$2] =
    typedArrayTags[objectTag$4] =
    typedArrayTags[regexpTag$2] =
    typedArrayTags[setTag$4] =
    typedArrayTags[stringTag$2] =
    typedArrayTags[weakMapTag$2] =
      false

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray$1(value) {
    return (
      isObjectLike$4(value) &&
      isLength$1(value.length) &&
      !!typedArrayTags[baseGetTag$2(value)]
    )
  }

  var _baseIsTypedArray = baseIsTypedArray$1

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$4(func) {
    return function (value) {
      return func(value)
    }
  }

  var _baseUnary = baseUnary$4

  var _nodeUtilExports = {}
  var _nodeUtil = {
    get exports() {
      return _nodeUtilExports
    },
    set exports(v) {
      _nodeUtilExports = v
    },
  }

  ;(function (module, exports) {
    var freeGlobal = _freeGlobal

    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports

    /** Detect free variable `module`. */
    var freeModule =
      freeExports &&
      'object' == 'object' &&
      module &&
      !module.nodeType &&
      module

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports

    /** Detect free variable `process` from Node.js. */
    var freeProcess = moduleExports && freeGlobal.process

    /** Used to access faster Node.js helpers. */
    var nodeUtil = (function () {
      try {
        // Use `util.types` for Node.js 10+.
        var types =
          freeModule && freeModule.require && freeModule.require('util').types

        if (types) {
          return types
        }

        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util')
      } catch (e) {}
    })()

    module.exports = nodeUtil
  })(_nodeUtil, _nodeUtilExports)

  var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$3 = _baseUnary,
    nodeUtil$2 = _nodeUtilExports

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray$3 = nodeIsTypedArray
    ? baseUnary$3(nodeIsTypedArray)
    : baseIsTypedArray

  var isTypedArray_1 = isTypedArray$3

  var baseTimes = _baseTimes,
    isArguments$2 = isArguments_1,
    isArray$a = isArray_1,
    isBuffer$3 = isBufferExports,
    isIndex$1 = _isIndex,
    isTypedArray$2 = isTypedArray_1

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$9.hasOwnProperty

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$a(value),
      isArg = !isArr && isArguments$2(value),
      isBuff = !isArr && !isArg && isBuffer$3(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$2(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length

    for (var key in value) {
      if (
        (inherited || hasOwnProperty$8.call(value, key)) &&
        !(
          skipIndexes &&
          // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == 'length' ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            (isBuff && (key == 'offset' || key == 'parent')) ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            (isType &&
              (key == 'buffer' ||
                key == 'byteLength' ||
                key == 'byteOffset')) ||
            // Skip index properties.
            isIndex$1(key, length))
        )
      ) {
        result.push(key)
      }
    }
    return result
  }

  var _arrayLikeKeys = arrayLikeKeys$2

  /** Used for built-in method references. */

  var objectProto$8 = Object.prototype

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype$3(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8

    return value === proto
  }

  var _isPrototype = isPrototype$3

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function (arg) {
      return func(transform(arg))
    }
  }

  var _overArg = overArg$2

  var overArg$1 = _overArg

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys$1 = overArg$1(Object.keys, Object)

  var _nativeKeys = nativeKeys$1

  var isPrototype$2 = _isPrototype,
    nativeKeys = _nativeKeys

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$7.hasOwnProperty

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys$1(object) {
    if (!isPrototype$2(object)) {
      return nativeKeys(object)
    }
    var result = []
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key)
      }
    }
    return result
  }

  var _baseKeys = baseKeys$1

  var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$3 = isArrayLike_1

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$5(object) {
    return isArrayLike$3(object) ? arrayLikeKeys$1(object) : baseKeys(object)
  }

  var keys_1 = keys$5

  var baseGetAllKeys$1 = _baseGetAllKeys,
    getSymbols$2 = _getSymbols,
    keys$4 = keys_1

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys$2(object) {
    return baseGetAllKeys$1(object, keys$4, getSymbols$2)
  }

  var _getAllKeys = getAllKeys$2

  var getAllKeys$1 = _getAllKeys

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$6.hasOwnProperty

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects$1(
    object,
    other,
    bitmask,
    customizer,
    equalFunc,
    stack
  ) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys$1(object),
      objLength = objProps.length,
      othProps = getAllKeys$1(other),
      othLength = othProps.length

    if (objLength != othLength && !isPartial) {
      return false
    }
    var index = objLength
    while (index--) {
      var key = objProps[index]
      if (!(isPartial ? key in other : hasOwnProperty$6.call(other, key))) {
        return false
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object)
    var othStacked = stack.get(other)
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object
    }
    var result = true
    stack.set(object, other)
    stack.set(other, object)

    var skipCtor = isPartial
    while (++index < objLength) {
      key = objProps[index]
      var objValue = object[key],
        othValue = other[key]

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack)
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (
        !(compared === undefined
          ? objValue === othValue ||
            equalFunc(objValue, othValue, bitmask, customizer, stack)
          : compared)
      ) {
        result = false
        break
      }
      skipCtor || (skipCtor = key == 'constructor')
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
        othCtor = other.constructor

      // Non `Object` object instances with different constructors are not equal.
      if (
        objCtor != othCtor &&
        'constructor' in object &&
        'constructor' in other &&
        !(
          typeof objCtor == 'function' &&
          objCtor instanceof objCtor &&
          typeof othCtor == 'function' &&
          othCtor instanceof othCtor
        )
      ) {
        result = false
      }
    }
    stack['delete'](object)
    stack['delete'](other)
    return result
  }

  var _equalObjects = equalObjects$1

  var getNative$4 = _getNative,
    root$3 = _root

  /* Built-in method references that are verified to be native. */
  var DataView$1 = getNative$4(root$3, 'DataView')

  var _DataView = DataView$1

  var getNative$3 = _getNative,
    root$2 = _root

  /* Built-in method references that are verified to be native. */
  var Promise$2 = getNative$3(root$2, 'Promise')

  var _Promise = Promise$2

  var getNative$2 = _getNative,
    root$1 = _root

  /* Built-in method references that are verified to be native. */
  var Set$2 = getNative$2(root$1, 'Set')

  var _Set = Set$2

  var getNative$1 = _getNative,
    root = _root

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative$1(root, 'WeakMap')

  var _WeakMap = WeakMap$1

  var DataView = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set$1 = _Set,
    WeakMap = _WeakMap,
    baseGetTag$1 = _baseGetTag,
    toSource = _toSource

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]',
    objectTag$3 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$3 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]'

  var dataViewTag$2 = '[object DataView]'

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap)

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag$4 = baseGetTag$1

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if (
    (DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$1 && getTag$4(new Map$1()) != mapTag$3) ||
    (Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag$4(new Set$1()) != setTag$3) ||
    (WeakMap && getTag$4(new WeakMap()) != weakMapTag$1)
  ) {
    getTag$4 = function (value) {
      var result = baseGetTag$1(value),
        Ctor = result == objectTag$3 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : ''

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2
          case mapCtorString:
            return mapTag$3
          case promiseCtorString:
            return promiseTag
          case setCtorString:
            return setTag$3
          case weakMapCtorString:
            return weakMapTag$1
        }
      }
      return result
    }
  }

  var _getTag = getTag$4

  var Stack$2 = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag$3 = _getTag,
    isArray$9 = isArray_1,
    isBuffer$2 = isBufferExports,
    isTypedArray$1 = isTypedArray_1

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]'

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$5.hasOwnProperty

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep$1(
    object,
    other,
    bitmask,
    customizer,
    equalFunc,
    stack
  ) {
    var objIsArr = isArray$9(object),
      othIsArr = isArray$9(other),
      objTag = objIsArr ? arrayTag$1 : getTag$3(object),
      othTag = othIsArr ? arrayTag$1 : getTag$3(other)

    objTag = objTag == argsTag$1 ? objectTag$2 : objTag
    othTag = othTag == argsTag$1 ? objectTag$2 : othTag

    var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag

    if (isSameTag && isBuffer$2(object)) {
      if (!isBuffer$2(other)) {
        return false
      }
      objIsArr = true
      objIsObj = false
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack$2())
      return objIsArr || isTypedArray$1(object)
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(
            object,
            other,
            objTag,
            bitmask,
            customizer,
            equalFunc,
            stack
          )
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
      var objIsWrapped =
          objIsObj && hasOwnProperty$5.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$5.call(other, '__wrapped__')

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other

        stack || (stack = new Stack$2())
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
      }
    }
    if (!isSameTag) {
      return false
    }
    stack || (stack = new Stack$2())
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack)
  }

  var _baseIsEqualDeep = baseIsEqualDeep$1

  var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike$3 = isObjectLike_1

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual$3(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true
    }
    if (
      value == null ||
      other == null ||
      (!isObjectLike$3(value) && !isObjectLike$3(other))
    ) {
      return value !== value && other !== other
    }
    return baseIsEqualDeep(
      value,
      other,
      bitmask,
      customizer,
      baseIsEqual$3,
      stack
    )
  }

  var _baseIsEqual = baseIsEqual$3

  var baseIsEqual$2 = _baseIsEqual

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual$2(value, other) {
    return baseIsEqual$2(value, other)
  }

  var isEqual_1 = isEqual$2

  function isSelected(event, selected) {
    if (!event || selected == null) return false
    return isEqual_1(event, selected)
  }
  function slotWidth(rowBox, slots) {
    var rowWidth = rowBox.right - rowBox.left
    var cellWidth = rowWidth / slots
    return cellWidth
  }
  function getSlotAtX(rowBox, x, rtl, slots) {
    var cellWidth = slotWidth(rowBox, slots)
    return rtl
      ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth)
      : Math.floor((x - rowBox.left) / cellWidth)
  }
  function pointInBox(box, _ref) {
    var x = _ref.x,
      y = _ref.y
    return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right
  }
  function dateCellSelection(start, rowBox, box, slots, rtl) {
    var startIdx = -1
    var endIdx = -1
    var lastSlotIdx = slots - 1
    var cellWidth = slotWidth(rowBox, slots)

    // cell under the mouse
    var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots)

    // Identify row as either the initial row
    // or the row under the current mouse point
    var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y
    var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y

    // this row's position relative to the start point
    var isAboveStart = start.y > rowBox.bottom
    var isBelowStart = rowBox.top > start.y
    var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom

    // this row is between the current and start rows, so entirely selected
    if (isBetween) {
      startIdx = 0
      endIdx = lastSlotIdx
    }
    if (isCurrentRow) {
      if (isBelowStart) {
        startIdx = 0
        endIdx = currentSlot
      } else if (isAboveStart) {
        startIdx = currentSlot
        endIdx = lastSlotIdx
      }
    }
    if (isStartRow) {
      // select the cell under the initial point
      startIdx = endIdx = rtl
        ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth)
        : Math.floor((start.x - rowBox.left) / cellWidth)
      if (isCurrentRow) {
        if (currentSlot < startIdx) startIdx = currentSlot
        else endIdx = currentSlot //select current range
      } else if (start.y < box.y) {
        // the current row is below start row
        // select cells to the right of the start cell
        endIdx = lastSlotIdx
      } else {
        // select cells to the left of the start cell
        startIdx = 0
      }
    }
    return {
      startIdx: startIdx,
      endIdx: endIdx,
    }
  }

  /**
   * Changes to react-overlays cause issue with auto positioning,
   * so we need to manually calculate the position of the popper,
   * and constrain it to the Month container.
   */
  function getPosition(_ref) {
    var target = _ref.target,
      offset = _ref.offset,
      container = _ref.container,
      box = _ref.box
    var _getOffset = offset$2(target),
      top = _getOffset.top,
      left = _getOffset.left,
      width = _getOffset.width,
      height = _getOffset.height
    var _getOffset2 = offset$2(container),
      cTop = _getOffset2.top,
      cLeft = _getOffset2.left,
      cWidth = _getOffset2.width,
      cHeight = _getOffset2.height
    var _getOffset3 = offset$2(box),
      bWidth = _getOffset3.width,
      bHeight = _getOffset3.height
    var viewBottom = cTop + cHeight
    var viewRight = cLeft + cWidth
    var bottom = top + bHeight
    var right = left + bWidth
    var x = offset.x,
      y = offset.y
    var topOffset = bottom > viewBottom ? top - bHeight - y : top + y + height
    var leftOffset = right > viewRight ? left + x - bWidth + width : left + x
    return {
      topOffset: topOffset,
      leftOffset: leftOffset,
    }
  }
  function Pop(_ref2) {
    var containerRef = _ref2.containerRef,
      accessors = _ref2.accessors,
      getters = _ref2.getters,
      selected = _ref2.selected,
      components = _ref2.components,
      localizer = _ref2.localizer,
      position = _ref2.position,
      show = _ref2.show,
      events = _ref2.events,
      slotStart = _ref2.slotStart,
      slotEnd = _ref2.slotEnd,
      onSelect = _ref2.onSelect,
      onDoubleClick = _ref2.onDoubleClick,
      onKeyPress = _ref2.onKeyPress,
      handleDragStart = _ref2.handleDragStart,
      popperRef = _ref2.popperRef,
      target = _ref2.target,
      offset = _ref2.offset
    useClickOutside({
      ref: popperRef,
      callback: show,
    })
    React.useLayoutEffect(
      function () {
        var _getPosition = getPosition({
            target: target,
            offset: offset,
            container: containerRef.current,
            box: popperRef.current,
          }),
          topOffset = _getPosition.topOffset,
          leftOffset = _getPosition.leftOffset
        popperRef.current.style.top = ''.concat(topOffset, 'px')
        popperRef.current.style.left = ''.concat(leftOffset, 'px')
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [offset.x, offset.y, target]
    )
    var width = position.width
    var style = {
      minWidth: width + width / 2,
    }
    return /*#__PURE__*/ React__default.default.createElement(
      'div',
      {
        style: style,
        className: 'rbc-overlay',
        ref: popperRef,
      },
      /*#__PURE__*/ React__default.default.createElement(
        'div',
        {
          className: 'rbc-overlay-header',
        },
        localizer.format(slotStart, 'dayHeaderFormat')
      ),
      events.map(function (event, idx) {
        return /*#__PURE__*/ React__default.default.createElement(EventCell, {
          key: idx,
          type: 'popup',
          localizer: localizer,
          event: event,
          getters: getters,
          onSelect: onSelect,
          accessors: accessors,
          components: components,
          onDoubleClick: onDoubleClick,
          onKeyPress: onKeyPress,
          continuesPrior: localizer.lt(accessors.end(event), slotStart, 'day'),
          continuesAfter: localizer.gte(accessors.start(event), slotEnd, 'day'),
          slotStart: slotStart,
          slotEnd: slotEnd,
          selected: isSelected(event, selected),
          draggable: true,
          onDragStart: function onDragStart() {
            return handleDragStart(event)
          },
          onDragEnd: function onDragEnd() {
            return show()
          },
        })
      })
    )
  }
  var Popup = /*#__PURE__*/ React__default.default.forwardRef(function (
    props,
    ref
  ) {
    return /*#__PURE__*/ React__default.default.createElement(
      Pop,
      Object.assign({}, props, {
        popperRef: ref,
      })
    )
  })
  Popup.propTypes = {
    accessors: propTypesExports.object.isRequired,
    getters: propTypesExports.object.isRequired,
    selected: propTypesExports.object,
    components: propTypesExports.object.isRequired,
    localizer: propTypesExports.object.isRequired,
    position: propTypesExports.object.isRequired,
    show: propTypesExports.func.isRequired,
    events: propTypesExports.array.isRequired,
    slotStart: propTypesExports.instanceOf(Date).isRequired,
    slotEnd: propTypesExports.instanceOf(Date),
    onSelect: propTypesExports.func,
    onDoubleClick: propTypesExports.func,
    onKeyPress: propTypesExports.func,
    handleDragStart: propTypesExports.func,
    style: propTypesExports.object,
    offset: propTypesExports.shape({
      x: propTypesExports.number,
      y: propTypesExports.number,
    }),
  }

  function CalOverlay(_ref) {
    var containerRef = _ref.containerRef,
      _ref$popupOffset = _ref.popupOffset,
      popupOffset = _ref$popupOffset === void 0 ? 5 : _ref$popupOffset,
      overlay = _ref.overlay,
      accessors = _ref.accessors,
      localizer = _ref.localizer,
      components = _ref.components,
      getters = _ref.getters,
      selected = _ref.selected,
      handleSelectEvent = _ref.handleSelectEvent,
      handleDoubleClickEvent = _ref.handleDoubleClickEvent,
      handleKeyPressEvent = _ref.handleKeyPressEvent,
      handleDragStart = _ref.handleDragStart,
      onHide = _ref.onHide,
      overlayDisplay = _ref.overlayDisplay
    var popperRef = React.useRef(null)
    if (!overlay.position) return null
    var offset = popupOffset
    if (!isNaN(popupOffset)) {
      offset = {
        x: popupOffset,
        y: popupOffset,
      }
    }
    var position = overlay.position,
      events = overlay.events,
      date = overlay.date,
      end = overlay.end
    return /*#__PURE__*/ React__default.default.createElement(
      Overlay$1,
      {
        rootClose: true,
        flip: true,
        show: true,
        placement: 'bottom',
        onHide: onHide,
        target: overlay.target,
      },
      function (_ref2) {
        var props = _ref2.props
        return /*#__PURE__*/ React__default.default.createElement(
          Popup,
          Object.assign({}, props, {
            containerRef: containerRef,
            ref: popperRef,
            target: overlay.target,
            offset: offset,
            accessors: accessors,
            getters: getters,
            selected: selected,
            components: components,
            localizer: localizer,
            position: position,
            show: overlayDisplay,
            events: events,
            slotStart: date,
            slotEnd: end,
            onSelect: handleSelectEvent,
            onDoubleClick: handleDoubleClickEvent,
            onKeyPress: handleKeyPressEvent,
            handleDragStart: handleDragStart,
          })
        )
      }
    )
  }
  var PopOverlay = /*#__PURE__*/ React__default.default.forwardRef(function (
    props,
    ref
  ) {
    return /*#__PURE__*/ React__default.default.createElement(
      CalOverlay,
      Object.assign({}, props, {
        containerRef: ref,
      })
    )
  })
  PopOverlay.propTypes = {
    popupOffset: propTypesExports.oneOfType([
      propTypesExports.number,
      propTypesExports.shape({
        x: propTypesExports.number,
        y: propTypesExports.number,
      }),
    ]),
    overlay: propTypesExports.shape({
      position: propTypesExports.object,
      events: propTypesExports.array,
      date: propTypesExports.instanceOf(Date),
      end: propTypesExports.instanceOf(Date),
    }),
    accessors: propTypesExports.object.isRequired,
    localizer: propTypesExports.object.isRequired,
    components: propTypesExports.object.isRequired,
    getters: propTypesExports.object.isRequired,
    selected: propTypesExports.object,
    handleSelectEvent: propTypesExports.func,
    handleDoubleClickEvent: propTypesExports.func,
    handleKeyPressEvent: propTypesExports.func,
    handleDragStart: propTypesExports.func,
    onHide: propTypesExports.func,
    overlayDisplay: propTypesExports.func,
  }

  /**
   * Returns the height of a given element.
   *
   * @param node the element
   * @param client whether to use `clientHeight` if possible
   */

  function height(node, client) {
    var win = isWindow(node)
    return win
      ? win.innerHeight
      : client
      ? node.clientHeight
      : offset$2(node).height
  }

  /**
   * Returns the closest parent element that matches a given selector.
   *
   * @param node the reference element
   * @param selector the selector to match
   * @param stopAt stop traversing when this element is found
   */

  function closest(node, selector, stopAt) {
    if (node.closest && !stopAt) node.closest(selector)
    var nextNode = node

    do {
      if (matches(nextNode, selector)) return nextNode
      nextNode = nextNode.parentElement
    } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE)

    return null
  }

  function addEventListener(type, handler) {
    var target =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : document
    return listen(target, type, handler, {
      passive: false,
    })
  }
  function isOverContainer(container, x, y) {
    return !container || contains$1(container, document.elementFromPoint(x, y))
  }
  function getEventNodeFromPoint(node, _ref) {
    var clientX = _ref.clientX,
      clientY = _ref.clientY
    var target = document.elementFromPoint(clientX, clientY)
    return closest(target, '.rbc-event', node)
  }
  function isEvent(node, bounds) {
    return !!getEventNodeFromPoint(node, bounds)
  }
  function getEventCoordinates(e) {
    var target = e
    if (e.touches && e.touches.length) {
      target = e.touches[0]
    }
    return {
      clientX: target.clientX,
      clientY: target.clientY,
      pageX: target.pageX,
      pageY: target.pageY,
    }
  }
  var clickTolerance = 5
  var clickInterval = 250
  var Selection = /*#__PURE__*/ (function () {
    function Selection(node) {
      var _ref2 =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {},
        _ref2$global = _ref2.global,
        global = _ref2$global === void 0 ? false : _ref2$global,
        _ref2$longPressThresh = _ref2.longPressThreshold,
        longPressThreshold =
          _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh,
        _ref2$validContainers = _ref2.validContainers,
        validContainers =
          _ref2$validContainers === void 0 ? [] : _ref2$validContainers
      _classCallCheck(this, Selection)
      this.isDetached = false
      this.container = node
      this.globalMouse = !node || global
      this.longPressThreshold = longPressThreshold
      this.validContainers = validContainers
      this._listeners = Object.create(null)
      this._handleInitialEvent = this._handleInitialEvent.bind(this)
      this._handleMoveEvent = this._handleMoveEvent.bind(this)
      this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this)
      this._keyListener = this._keyListener.bind(this)
      this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this)
      this._dragOverFromOutsideListener =
        this._dragOverFromOutsideListener.bind(this)

      // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
      // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356
      this._removeTouchMoveWindowListener = addEventListener(
        'touchmove',
        function () {},
        window
      )
      this._removeKeyDownListener = addEventListener(
        'keydown',
        this._keyListener
      )
      this._removeKeyUpListener = addEventListener('keyup', this._keyListener)
      this._removeDropFromOutsideListener = addEventListener(
        'drop',
        this._dropFromOutsideListener
      )
      this._removeDragOverFromOutsideListener = addEventListener(
        'dragover',
        this._dragOverFromOutsideListener
      )
      this._addInitialEventListener()
    }
    _createClass(Selection, [
      {
        key: 'on',
        value: function on(type, handler) {
          var handlers = this._listeners[type] || (this._listeners[type] = [])
          handlers.push(handler)
          return {
            remove: function remove() {
              var idx = handlers.indexOf(handler)
              if (idx !== -1) handlers.splice(idx, 1)
            },
          }
        },
      },
      {
        key: 'emit',
        value: function emit(type) {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key]
          }
          var result
          var handlers = this._listeners[type] || []
          handlers.forEach(function (fn) {
            if (result === undefined) result = fn.apply(void 0, args)
          })
          return result
        },
      },
      {
        key: 'teardown',
        value: function teardown() {
          this.isDetached = true
          this._listeners = Object.create(null)
          this._removeTouchMoveWindowListener &&
            this._removeTouchMoveWindowListener()
          this._removeInitialEventListener && this._removeInitialEventListener()
          this._removeEndListener && this._removeEndListener()
          this._onEscListener && this._onEscListener()
          this._removeMoveListener && this._removeMoveListener()
          this._removeKeyUpListener && this._removeKeyUpListener()
          this._removeKeyDownListener && this._removeKeyDownListener()
          this._removeDropFromOutsideListener &&
            this._removeDropFromOutsideListener()
          this._removeDragOverFromOutsideListener &&
            this._removeDragOverFromOutsideListener()
        },
      },
      {
        key: 'isSelected',
        value: function isSelected(node) {
          var box = this._selectRect
          if (!box || !this.selecting) return false
          return objectsCollide(box, getBoundsForNode(node))
        },
      },
      {
        key: 'filter',
        value: function filter(items) {
          var box = this._selectRect

          //not selecting
          if (!box || !this.selecting) return []
          return items.filter(this.isSelected, this)
        },

        // Adds a listener that will call the handler only after the user has pressed on the screen
        // without moving their finger for 250ms.
      },
      {
        key: '_addLongPressListener',
        value: function _addLongPressListener(handler, initialEvent) {
          var _this = this
          var timer = null
          var removeTouchMoveListener = null
          var removeTouchEndListener = null
          var handleTouchStart = function handleTouchStart(initialEvent) {
            timer = setTimeout(function () {
              cleanup()
              handler(initialEvent)
            }, _this.longPressThreshold)
            removeTouchMoveListener = addEventListener(
              'touchmove',
              function () {
                return cleanup()
              }
            )
            removeTouchEndListener = addEventListener('touchend', function () {
              return cleanup()
            })
          }
          var removeTouchStartListener = addEventListener(
            'touchstart',
            handleTouchStart
          )
          var cleanup = function cleanup() {
            if (timer) {
              clearTimeout(timer)
            }
            if (removeTouchMoveListener) {
              removeTouchMoveListener()
            }
            if (removeTouchEndListener) {
              removeTouchEndListener()
            }
            timer = null
            removeTouchMoveListener = null
            removeTouchEndListener = null
          }
          if (initialEvent) {
            handleTouchStart(initialEvent)
          }
          return function () {
            cleanup()
            removeTouchStartListener()
          }
        },

        // Listen for mousedown and touchstart events. When one is received, disable the other and setup
        // future event handling based on the type of event.
      },
      {
        key: '_addInitialEventListener',
        value: function _addInitialEventListener() {
          var _this2 = this
          var removeMouseDownListener = addEventListener(
            'mousedown',
            function (e) {
              _this2._removeInitialEventListener()
              _this2._handleInitialEvent(e)
              _this2._removeInitialEventListener = addEventListener(
                'mousedown',
                _this2._handleInitialEvent
              )
            }
          )
          var removeTouchStartListener = addEventListener(
            'touchstart',
            function (e) {
              _this2._removeInitialEventListener()
              _this2._removeInitialEventListener = _this2._addLongPressListener(
                _this2._handleInitialEvent,
                e
              )
            }
          )
          this._removeInitialEventListener = function () {
            removeMouseDownListener()
            removeTouchStartListener()
          }
        },
      },
      {
        key: '_dropFromOutsideListener',
        value: function _dropFromOutsideListener(e) {
          var _getEventCoordinates = getEventCoordinates(e),
            pageX = _getEventCoordinates.pageX,
            pageY = _getEventCoordinates.pageY,
            clientX = _getEventCoordinates.clientX,
            clientY = _getEventCoordinates.clientY
          this.emit('dropFromOutside', {
            x: pageX,
            y: pageY,
            clientX: clientX,
            clientY: clientY,
          })
          e.preventDefault()
        },
      },
      {
        key: '_dragOverFromOutsideListener',
        value: function _dragOverFromOutsideListener(e) {
          var _getEventCoordinates2 = getEventCoordinates(e),
            pageX = _getEventCoordinates2.pageX,
            pageY = _getEventCoordinates2.pageY,
            clientX = _getEventCoordinates2.clientX,
            clientY = _getEventCoordinates2.clientY
          this.emit('dragOverFromOutside', {
            x: pageX,
            y: pageY,
            clientX: clientX,
            clientY: clientY,
          })
          e.preventDefault()
        },
      },
      {
        key: '_handleInitialEvent',
        value: function _handleInitialEvent(e) {
          if (this.isDetached) {
            return
          }
          var _getEventCoordinates3 = getEventCoordinates(e),
            clientX = _getEventCoordinates3.clientX,
            clientY = _getEventCoordinates3.clientY,
            pageX = _getEventCoordinates3.pageX,
            pageY = _getEventCoordinates3.pageY
          var node = this.container(),
            collides,
            offsetData

          // Right clicks
          if (
            e.which === 3 ||
            e.button === 2 ||
            !isOverContainer(node, clientX, clientY)
          )
            return
          if (!this.globalMouse && node && !contains$1(node, e.target)) {
            var _normalizeDistance = normalizeDistance(0),
              top = _normalizeDistance.top,
              left = _normalizeDistance.left,
              bottom = _normalizeDistance.bottom,
              right = _normalizeDistance.right
            offsetData = getBoundsForNode(node)
            collides = objectsCollide(
              {
                top: offsetData.top - top,
                left: offsetData.left - left,
                bottom: offsetData.bottom + bottom,
                right: offsetData.right + right,
              },
              {
                top: pageY,
                left: pageX,
              }
            )
            if (!collides) return
          }
          var result = this.emit(
            'beforeSelect',
            (this._initialEventData = {
              isTouch: /^touch/.test(e.type),
              x: pageX,
              y: pageY,
              clientX: clientX,
              clientY: clientY,
            })
          )
          if (result === false) return
          switch (e.type) {
            case 'mousedown':
              this._removeEndListener = addEventListener(
                'mouseup',
                this._handleTerminatingEvent
              )
              this._onEscListener = addEventListener(
                'keydown',
                this._handleTerminatingEvent
              )
              this._removeMoveListener = addEventListener(
                'mousemove',
                this._handleMoveEvent
              )
              break
            case 'touchstart':
              this._handleMoveEvent(e)
              this._removeEndListener = addEventListener(
                'touchend',
                this._handleTerminatingEvent
              )
              this._removeMoveListener = addEventListener(
                'touchmove',
                this._handleMoveEvent
              )
              break
          }
        },

        // Check whether provided event target element
        // - is contained within a valid container
      },
      {
        key: '_isWithinValidContainer',
        value: function _isWithinValidContainer(e) {
          var eventTarget = e.target
          var containers = this.validContainers
          if (!containers || !containers.length || !eventTarget) {
            return true
          }
          return containers.some(function (target) {
            return !!eventTarget.closest(target)
          })
        },
      },
      {
        key: '_handleTerminatingEvent',
        value: function _handleTerminatingEvent(e) {
          var _getEventCoordinates4 = getEventCoordinates(e),
            pageX = _getEventCoordinates4.pageX,
            pageY = _getEventCoordinates4.pageY
          this.selecting = false
          this._removeEndListener && this._removeEndListener()
          this._removeMoveListener && this._removeMoveListener()
          if (!this._initialEventData) return
          var inRoot = !this.container || contains$1(this.container(), e.target)
          var isWithinValidContainer = this._isWithinValidContainer(e)
          var bounds = this._selectRect
          var click = this.isClick(pageX, pageY)
          this._initialEventData = null
          if (e.key === 'Escape' || !isWithinValidContainer) {
            return this.emit('reset')
          }
          if (click && inRoot) {
            return this._handleClickEvent(e)
          }

          // User drag-clicked in the Selectable area
          if (!click) return this.emit('select', bounds)
          return this.emit('reset')
        },
      },
      {
        key: '_handleClickEvent',
        value: function _handleClickEvent(e) {
          var _getEventCoordinates5 = getEventCoordinates(e),
            pageX = _getEventCoordinates5.pageX,
            pageY = _getEventCoordinates5.pageY,
            clientX = _getEventCoordinates5.clientX,
            clientY = _getEventCoordinates5.clientY
          var now = new Date().getTime()
          if (
            this._lastClickData &&
            now - this._lastClickData.timestamp < clickInterval
          ) {
            // Double click event
            this._lastClickData = null
            return this.emit('doubleClick', {
              x: pageX,
              y: pageY,
              clientX: clientX,
              clientY: clientY,
            })
          }

          // Click event
          this._lastClickData = {
            timestamp: now,
          }
          return this.emit('click', {
            x: pageX,
            y: pageY,
            clientX: clientX,
            clientY: clientY,
          })
        },
      },
      {
        key: '_handleMoveEvent',
        value: function _handleMoveEvent(e) {
          if (this._initialEventData === null || this.isDetached) {
            return
          }
          var _this$_initialEventDa = this._initialEventData,
            x = _this$_initialEventDa.x,
            y = _this$_initialEventDa.y
          var _getEventCoordinates6 = getEventCoordinates(e),
            pageX = _getEventCoordinates6.pageX,
            pageY = _getEventCoordinates6.pageY
          var w = Math.abs(x - pageX)
          var h = Math.abs(y - pageY)
          var left = Math.min(pageX, x),
            top = Math.min(pageY, y),
            old = this.selecting

          // Prevent emitting selectStart event until mouse is moved.
          // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.
          if (this.isClick(pageX, pageY) && !old && !(w || h)) {
            return
          }
          this.selecting = true
          this._selectRect = {
            top: top,
            left: left,
            x: pageX,
            y: pageY,
            right: left + w,
            bottom: top + h,
          }
          if (!old) {
            this.emit('selectStart', this._initialEventData)
          }
          if (!this.isClick(pageX, pageY))
            this.emit('selecting', this._selectRect)
          e.preventDefault()
        },
      },
      {
        key: '_keyListener',
        value: function _keyListener(e) {
          this.ctrl = e.metaKey || e.ctrlKey
        },
      },
      {
        key: 'isClick',
        value: function isClick(pageX, pageY) {
          var _this$_initialEventDa2 = this._initialEventData,
            x = _this$_initialEventDa2.x,
            y = _this$_initialEventDa2.y,
            isTouch = _this$_initialEventDa2.isTouch
          return (
            !isTouch &&
            Math.abs(pageX - x) <= clickTolerance &&
            Math.abs(pageY - y) <= clickTolerance
          )
        },
      },
    ])
    return Selection
  })()
  /**
   * Resolve the disance prop from either an Int or an Object
   * @return {Object}
   */
  function normalizeDistance() {
    var distance =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    if (_typeof(distance) !== 'object')
      distance = {
        top: distance,
        left: distance,
        right: distance,
        bottom: distance,
      }
    return distance
  }

  /**
   * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
   * properties, determine if they collide.
   * @param  {Object|HTMLElement} a
   * @param  {Object|HTMLElement} b
   * @return {bool}
   */
  function objectsCollide(nodeA, nodeB) {
    var tolerance =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
    var _getBoundsForNode = getBoundsForNode(nodeA),
      aTop = _getBoundsForNode.top,
      aLeft = _getBoundsForNode.left,
      _getBoundsForNode$rig = _getBoundsForNode.right,
      aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
      _getBoundsForNode$bot = _getBoundsForNode.bottom,
      aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot
    var _getBoundsForNode2 = getBoundsForNode(nodeB),
      bTop = _getBoundsForNode2.top,
      bLeft = _getBoundsForNode2.left,
      _getBoundsForNode2$ri = _getBoundsForNode2.right,
      bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
      _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
      bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo
    return !(
      // 'a' bottom doesn't touch 'b' top

      (
        aBottom - tolerance < bTop ||
        // 'a' top doesn't touch 'b' bottom
        aTop + tolerance > bBottom ||
        // 'a' right doesn't touch 'b' left
        aRight - tolerance < bLeft ||
        // 'a' left doesn't touch 'b' right
        aLeft + tolerance > bRight
      )
    )
  }

  /**
   * Given a node, get everything needed to calculate its boundaries
   * @param  {HTMLElement} node
   * @return {Object}
   */
  function getBoundsForNode(node) {
    if (!node.getBoundingClientRect) return node
    var rect = node.getBoundingClientRect(),
      left = rect.left + pageOffset('left'),
      top = rect.top + pageOffset('top')
    return {
      top: top,
      left: left,
      right: (node.offsetWidth || 0) + left,
      bottom: (node.offsetHeight || 0) + top,
    }
  }
  function pageOffset(dir) {
    if (dir === 'left')
      return window.pageXOffset || document.body.scrollLeft || 0
    if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0
  }

  var BackgroundCells = /*#__PURE__*/ (function (_React$Component) {
    _inherits(BackgroundCells, _React$Component)
    var _super = _createSuper(BackgroundCells)
    function BackgroundCells(props, context) {
      var _this
      _classCallCheck(this, BackgroundCells)
      _this = _super.call(this, props, context)
      _this.state = {
        selecting: false,
      }
      _this.containerRef = /*#__PURE__*/ React.createRef()
      return _this
    }
    _createClass(BackgroundCells, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props.selectable && this._selectable()
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._teardownSelectable()
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (!prevProps.selectable && this.props.selectable) this._selectable()
          if (prevProps.selectable && !this.props.selectable)
            this._teardownSelectable()
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            range = _this$props.range,
            getNow = _this$props.getNow,
            getters = _this$props.getters,
            currentDate = _this$props.date,
            Wrapper = _this$props.components.dateCellWrapper,
            localizer = _this$props.localizer
          var _this$state = this.state,
            selecting = _this$state.selecting,
            startIdx = _this$state.startIdx,
            endIdx = _this$state.endIdx
          var current = getNow()
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: 'rbc-row-bg',
              ref: this.containerRef,
            },
            range.map(function (date, index) {
              var selected = selecting && index >= startIdx && index <= endIdx
              var _getters$dayProp = getters.dayProp(date),
                className = _getters$dayProp.className,
                style = _getters$dayProp.style
              return /*#__PURE__*/ React__default.default.createElement(
                Wrapper,
                {
                  key: index,
                  value: date,
                  range: range,
                },
                /*#__PURE__*/ React__default.default.createElement('div', {
                  style: style,
                  className: clsx(
                    'rbc-day-bg',
                    className,
                    selected && 'rbc-selected-cell',
                    localizer.isSameDate(date, current) && 'rbc-today',
                    currentDate &&
                      localizer.neq(currentDate, date, 'month') &&
                      'rbc-off-range-bg'
                  ),
                })
              )
            })
          )
        },
      },
      {
        key: '_selectable',
        value: function _selectable() {
          var _this2 = this
          var node = this.containerRef.current
          var selector = (this._selector = new Selection(this.props.container, {
            longPressThreshold: this.props.longPressThreshold,
          }))
          var selectorClicksHandler = function selectorClicksHandler(
            point,
            actionType
          ) {
            if (!isEvent(node, point)) {
              var rowBox = getBoundsForNode(node)
              var _this2$props = _this2.props,
                range = _this2$props.range,
                rtl = _this2$props.rtl
              if (pointInBox(rowBox, point)) {
                var currentCell = getSlotAtX(rowBox, point.x, rtl, range.length)
                _this2._selectSlot({
                  startIdx: currentCell,
                  endIdx: currentCell,
                  action: actionType,
                  box: point,
                })
              }
            }
            _this2._initial = {}
            _this2.setState({
              selecting: false,
            })
          }
          selector.on('selecting', function (box) {
            var _this2$props2 = _this2.props,
              range = _this2$props2.range,
              rtl = _this2$props2.rtl
            var startIdx = -1
            var endIdx = -1
            if (!_this2.state.selecting) {
              notify(_this2.props.onSelectStart, [box])
              _this2._initial = {
                x: box.x,
                y: box.y,
              }
            }
            if (selector.isSelected(node)) {
              var nodeBox = getBoundsForNode(node)
              var _dateCellSelection = dateCellSelection(
                _this2._initial,
                nodeBox,
                box,
                range.length,
                rtl
              )
              startIdx = _dateCellSelection.startIdx
              endIdx = _dateCellSelection.endIdx
            }
            _this2.setState({
              selecting: true,
              startIdx: startIdx,
              endIdx: endIdx,
            })
          })
          selector.on('beforeSelect', function (box) {
            if (_this2.props.selectable !== 'ignoreEvents') return
            return !isEvent(_this2.containerRef.current, box)
          })
          selector.on('click', function (point) {
            return selectorClicksHandler(point, 'click')
          })
          selector.on('doubleClick', function (point) {
            return selectorClicksHandler(point, 'doubleClick')
          })
          selector.on('select', function (bounds) {
            _this2._selectSlot(
              _objectSpread2(
                _objectSpread2({}, _this2.state),
                {},
                {
                  action: 'select',
                  bounds: bounds,
                }
              )
            )
            _this2._initial = {}
            _this2.setState({
              selecting: false,
            })
            notify(_this2.props.onSelectEnd, [_this2.state])
          })
        },
      },
      {
        key: '_teardownSelectable',
        value: function _teardownSelectable() {
          if (!this._selector) return
          this._selector.teardown()
          this._selector = null
        },
      },
      {
        key: '_selectSlot',
        value: function _selectSlot(_ref) {
          var endIdx = _ref.endIdx,
            startIdx = _ref.startIdx,
            action = _ref.action,
            bounds = _ref.bounds,
            box = _ref.box
          if (endIdx !== -1 && startIdx !== -1)
            this.props.onSelectSlot &&
              this.props.onSelectSlot({
                start: startIdx,
                end: endIdx,
                action: action,
                bounds: bounds,
                box: box,
                resourceId: this.props.resourceId,
              })
        },
      },
    ])
    return BackgroundCells
  })(React__default.default.Component)

  /* eslint-disable react/prop-types */
  var EventRowMixin = {
    propTypes: {
      slotMetrics: propTypesExports.object.isRequired,
      selected: propTypesExports.object,
      isAllDay: propTypesExports.bool,
      accessors: propTypesExports.object.isRequired,
      localizer: propTypesExports.object.isRequired,
      components: propTypesExports.object.isRequired,
      getters: propTypesExports.object.isRequired,
      onSelect: propTypesExports.func,
      onDoubleClick: propTypesExports.func,
      onKeyPress: propTypesExports.func,
    },
    defaultProps: {
      segments: [],
      selected: {},
    },
    renderEvent: function renderEvent(props, event) {
      var selected = props.selected
      props.isAllDay
      var accessors = props.accessors,
        getters = props.getters,
        onSelect = props.onSelect,
        onDoubleClick = props.onDoubleClick,
        onKeyPress = props.onKeyPress,
        localizer = props.localizer,
        slotMetrics = props.slotMetrics,
        components = props.components,
        resizable = props.resizable
      var continuesPrior = slotMetrics.continuesPrior(event)
      var continuesAfter = slotMetrics.continuesAfter(event)
      return /*#__PURE__*/ React__default.default.createElement(EventCell, {
        event: event,
        getters: getters,
        localizer: localizer,
        accessors: accessors,
        components: components,
        onSelect: onSelect,
        onDoubleClick: onDoubleClick,
        onKeyPress: onKeyPress,
        continuesPrior: continuesPrior,
        continuesAfter: continuesAfter,
        slotStart: slotMetrics.first,
        slotEnd: slotMetrics.last,
        selected: isSelected(event, selected),
        resizable: resizable,
      })
    },
    renderSpan: function renderSpan(slots, len, key) {
      var content =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' '
      var per = (Math.abs(len) / slots) * 100 + '%'
      return /*#__PURE__*/ React__default.default.createElement(
        'div',
        {
          key: key,
          className: 'rbc-row-segment',
          // IE10/11 need max-width. flex-basis doesn't respect box-sizing
          style: {
            WebkitFlexBasis: per,
            flexBasis: per,
            maxWidth: per,
          },
        },
        content
      )
    },
  }

  var EventRow = /*#__PURE__*/ (function (_React$Component) {
    _inherits(EventRow, _React$Component)
    var _super = _createSuper(EventRow)
    function EventRow() {
      _classCallCheck(this, EventRow)
      return _super.apply(this, arguments)
    }
    _createClass(EventRow, [
      {
        key: 'render',
        value: function render() {
          var _this = this
          var _this$props = this.props,
            segments = _this$props.segments,
            slots = _this$props.slotMetrics.slots,
            className = _this$props.className
          var lastEnd = 1
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: clsx(className, 'rbc-row'),
            },
            segments.reduce(function (row, _ref, li) {
              var event = _ref.event,
                left = _ref.left,
                right = _ref.right,
                span = _ref.span
              var key = '_lvl_' + li
              var gap = left - lastEnd
              var content = EventRowMixin.renderEvent(_this.props, event)
              if (gap)
                row.push(
                  EventRowMixin.renderSpan(slots, gap, ''.concat(key, '_gap'))
                )
              row.push(EventRowMixin.renderSpan(slots, span, key, content))
              lastEnd = right + 1
              return row
            }, [])
          )
        },
      },
    ])
    return EventRow
  })(React__default.default.Component)
  EventRow.defaultProps = _objectSpread2({}, EventRowMixin.defaultProps)

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
    var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1)

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index
      }
    }
    return -1
  }

  var _baseFindIndex = baseFindIndex$1

  var Stack$1 = _Stack,
    baseIsEqual$1 = _baseIsEqual

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch$1(object, source, matchData, customizer) {
    var index = matchData.length,
      length = index,
      noCustomizer = !customizer

    if (object == null) {
      return !length
    }
    object = Object(object)
    while (index--) {
      var data = matchData[index]
      if (
        noCustomizer && data[2]
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
      ) {
        return false
      }
    }
    while (++index < length) {
      data = matchData[index]
      var key = data[0],
        objValue = object[key],
        srcValue = data[1]

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false
        }
      } else {
        var stack = new Stack$1()
        if (customizer) {
          var result = customizer(
            objValue,
            srcValue,
            key,
            object,
            source,
            stack
          )
        }
        if (
          !(result === undefined
            ? baseIsEqual$1(
                srcValue,
                objValue,
                COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1,
                customizer,
                stack
              )
            : result)
        ) {
          return false
        }
      }
    }
    return true
  }

  var _baseIsMatch = baseIsMatch$1

  var isObject$4 = isObject_1

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable$2(value) {
    return value === value && !isObject$4(value)
  }

  var _isStrictComparable = isStrictComparable$2

  var isStrictComparable$1 = _isStrictComparable,
    keys$3 = keys_1

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData$1(object) {
    var result = keys$3(object),
      length = result.length

    while (length--) {
      var key = result[length],
        value = object[key]

      result[length] = [key, value, isStrictComparable$1(value)]
    }
    return result
  }

  var _getMatchData = getMatchData$1

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */

  function matchesStrictComparable$2(key, srcValue) {
    return function (object) {
      if (object == null) {
        return false
      }
      return (
        object[key] === srcValue &&
        (srcValue !== undefined || key in Object(object))
      )
    }
  }

  var _matchesStrictComparable = matchesStrictComparable$2

  var baseIsMatch = _baseIsMatch,
    getMatchData = _getMatchData,
    matchesStrictComparable$1 = _matchesStrictComparable

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches$1(source) {
    var matchData = getMatchData(source)
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable$1(matchData[0][0], matchData[0][1])
    }
    return function (object) {
      return object === source || baseIsMatch(object, source, matchData)
    }
  }

  var _baseMatches = baseMatches$1

  var isArray$8 = isArray_1,
    isSymbol$3 = isSymbol_1

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey$3(value, object) {
    if (isArray$8(value)) {
      return false
    }
    var type = typeof value
    if (
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean' ||
      value == null ||
      isSymbol$3(value)
    ) {
      return true
    }
    return (
      reIsPlainProp.test(value) ||
      !reIsDeepProp.test(value) ||
      (object != null && value in Object(object))
    )
  }

  var _isKey = isKey$3

  var MapCache = _MapCache

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function'

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize$1(func, resolver) {
    if (
      typeof func != 'function' ||
      (resolver != null && typeof resolver != 'function')
    ) {
      throw new TypeError(FUNC_ERROR_TEXT)
    }
    var memoized = function () {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache

      if (cache.has(key)) {
        return cache.get(key)
      }
      var result = func.apply(this, args)
      memoized.cache = cache.set(key, result) || cache
      return result
    }
    memoized.cache = new (memoize$1.Cache || MapCache)()
    return memoized
  }

  // Expose `MapCache`.
  memoize$1.Cache = MapCache

  var memoize_1 = memoize$1

  var memoize = memoize_1

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped$1(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear()
      }
      return key
    })

    var cache = result.cache
    return result
  }

  var _memoizeCapped = memoizeCapped$1

  var memoizeCapped = _memoizeCapped

  /** Used to match property names within property paths. */
  var rePropName =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath$1 = memoizeCapped(function (string) {
    var result = []
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('')
    }
    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(
        quote ? subString.replace(reEscapeChar, '$1') : number || match
      )
    })
    return result
  })

  var _stringToPath = stringToPath$1

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function arrayMap$3(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length)

    while (++index < length) {
      result[index] = iteratee(array[index], index, array)
    }
    return result
  }

  var _arrayMap = arrayMap$3

  var Symbol$3 = _Symbol,
    arrayMap$2 = _arrayMap,
    isArray$7 = isArray_1,
    isSymbol$2 = isSymbol_1

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString$1(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value
    }
    if (isArray$7(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap$2(value, baseToString$1) + ''
    }
    if (isSymbol$2(value)) {
      return symbolToString ? symbolToString.call(value) : ''
    }
    var result = value + ''
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result
  }

  var _baseToString = baseToString$1

  var baseToString = _baseToString

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString$1(value) {
    return value == null ? '' : baseToString(value)
  }

  var toString_1 = toString$1

  var isArray$6 = isArray_1,
    isKey$2 = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath$4(value, object) {
    if (isArray$6(value)) {
      return value
    }
    return isKey$2(value, object) ? [value] : stringToPath(toString(value))
  }

  var _castPath = castPath$4

  var isSymbol$1 = isSymbol_1

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey$5(value) {
    if (typeof value == 'string' || isSymbol$1(value)) {
      return value
    }
    var result = value + ''
    return result == '0' && 1 / value == -INFINITY ? '-0' : result
  }

  var _toKey = toKey$5

  var castPath$3 = _castPath,
    toKey$4 = _toKey

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet$4(object, path) {
    path = castPath$3(path, object)

    var index = 0,
      length = path.length

    while (object != null && index < length) {
      object = object[toKey$4(path[index++])]
    }
    return index && index == length ? object : undefined
  }

  var _baseGet = baseGet$4

  var baseGet$3 = _baseGet

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get$1(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet$3(object, path)
    return result === undefined ? defaultValue : result
  }

  var get_1 = get$1

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */

  function baseHasIn$1(object, key) {
    return object != null && key in Object(object)
  }

  var _baseHasIn = baseHasIn$1

  var castPath$2 = _castPath,
    isArguments$1 = isArguments_1,
    isArray$5 = isArray_1,
    isIndex = _isIndex,
    isLength = isLength_1,
    toKey$3 = _toKey

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath$1(object, path, hasFunc) {
    path = castPath$2(path, object)

    var index = -1,
      length = path.length,
      result = false

    while (++index < length) {
      var key = toKey$3(path[index])
      if (!(result = object != null && hasFunc(object, key))) {
        break
      }
      object = object[key]
    }
    if (result || ++index != length) {
      return result
    }
    length = object == null ? 0 : object.length
    return (
      !!length &&
      isLength(length) &&
      isIndex(key, length) &&
      (isArray$5(object) || isArguments$1(object))
    )
  }

  var _hasPath = hasPath$1

  var baseHasIn = _baseHasIn,
    hasPath = _hasPath

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn$1(object, path) {
    return object != null && hasPath(object, path, baseHasIn)
  }

  var hasIn_1 = hasIn$1

  var baseIsEqual = _baseIsEqual,
    get = get_1,
    hasIn = hasIn_1,
    isKey$1 = _isKey,
    isStrictComparable = _isStrictComparable,
    matchesStrictComparable = _matchesStrictComparable,
    toKey$2 = _toKey

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty$1(path, srcValue) {
    if (isKey$1(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey$2(path), srcValue)
    }
    return function (object) {
      var objValue = get(object, path)
      return objValue === undefined && objValue === srcValue
        ? hasIn(object, path)
        : baseIsEqual(
            srcValue,
            objValue,
            COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
          )
    }
  }

  var _baseMatchesProperty = baseMatchesProperty$1

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity$4(value) {
    return value
  }

  var identity_1 = identity$4

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */

  function baseProperty$1(key) {
    return function (object) {
      return object == null ? undefined : object[key]
    }
  }

  var _baseProperty = baseProperty$1

  var baseGet$2 = _baseGet

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep$1(path) {
    return function (object) {
      return baseGet$2(object, path)
    }
  }

  var _basePropertyDeep = basePropertyDeep$1

  var baseProperty = _baseProperty,
    basePropertyDeep = _basePropertyDeep,
    isKey = _isKey,
    toKey$1 = _toKey

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property$1(path) {
    return isKey(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path)
  }

  var property_1 = property$1

  var baseMatches = _baseMatches,
    baseMatchesProperty = _baseMatchesProperty,
    identity$3 = identity_1,
    isArray$4 = isArray_1,
    property = property_1

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee$4(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value
    }
    if (value == null) {
      return identity$3
    }
    if (typeof value == 'object') {
      return isArray$4(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value)
    }
    return property(value)
  }

  var _baseIteratee = baseIteratee$4

  var baseFindIndex = _baseFindIndex,
    baseIteratee$3 = _baseIteratee,
    toInteger = toInteger_1

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$2 = Math.max

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length
    if (!length) {
      return -1
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex)
    if (index < 0) {
      index = nativeMax$2(length + index, 0)
    }
    return baseFindIndex(array, baseIteratee$3(predicate), index)
  }

  var findIndex_1 = findIndex

  function endOfRange(_ref) {
    var dateRange = _ref.dateRange,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? 'day' : _ref$unit,
      localizer = _ref.localizer
    return {
      first: dateRange[0],
      last: localizer.add(dateRange[dateRange.length - 1], 1, unit),
    }
  }

  // properly calculating segments requires working with dates in
  // the timezone we're working with, so we use the localizer
  function eventSegments(event, range, accessors, localizer) {
    var _endOfRange = endOfRange({
        dateRange: range,
        localizer: localizer,
      }),
      first = _endOfRange.first,
      last = _endOfRange.last
    var slots = localizer.diff(first, last, 'day')
    var start = localizer.max(
      localizer.startOf(accessors.start(event), 'day'),
      first
    )
    var end = localizer.min(localizer.ceil(accessors.end(event), 'day'), last)
    var padding = findIndex_1(range, function (x) {
      return localizer.isSameDate(x, start)
    })
    var span = localizer.diff(start, end, 'day')
    span = Math.min(span, slots)
    // The segmentOffset is necessary when adjusting for timezones
    // ahead of the browser timezone
    span = Math.max(span - localizer.segmentOffset, 1)
    return {
      event: event,
      span: span,
      left: padding + 1,
      right: Math.max(padding + span, 1),
    }
  }
  function eventLevels(rowSegments) {
    var limit =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : Infinity
    var i,
      j,
      seg,
      levels = [],
      extra = []
    for (i = 0; i < rowSegments.length; i++) {
      seg = rowSegments[i]
      for (j = 0; j < levels.length; j++)
        if (!segsOverlap(seg, levels[j])) break
      if (j >= limit) {
        extra.push(seg)
      } else {
        ;(levels[j] || (levels[j] = [])).push(seg)
      }
    }
    for (i = 0; i < levels.length; i++) {
      levels[i].sort(function (a, b) {
        return a.left - b.left
      }) //eslint-disable-line
    }

    return {
      levels: levels,
      extra: extra,
    }
  }
  function inRange(e, start, end, accessors, localizer) {
    var event = {
      start: accessors.start(e),
      end: accessors.end(e),
    }
    var range = {
      start: start,
      end: end,
    }
    return localizer.inEventRange({
      event: event,
      range: range,
    })
  }
  function segsOverlap(seg, otherSegs) {
    return otherSegs.some(function (otherSeg) {
      return otherSeg.left <= seg.right && otherSeg.right >= seg.left
    })
  }
  function sortEvents(eventA, eventB, accessors, localizer) {
    var evtA = {
      start: accessors.start(eventA),
      end: accessors.end(eventA),
      allDay: accessors.allDay(eventA),
    }
    var evtB = {
      start: accessors.start(eventB),
      end: accessors.end(eventB),
      allDay: accessors.allDay(eventB),
    }
    return localizer.sortEvents({
      evtA: evtA,
      evtB: evtB,
    })
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeCeil = Math.ceil,
    nativeMax$1 = Math.max

  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */
  function baseRange$1(start, end, step, fromRight) {
    var index = -1,
      length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length)

    while (length--) {
      result[fromRight ? length : ++index] = start
      start += step
    }
    return result
  }

  var _baseRange = baseRange$1

  var baseRange = _baseRange,
    isIterateeCall$2 = _isIterateeCall,
    toFinite = toFinite_1

  /**
   * Creates a `_.range` or `_.rangeRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new range function.
   */
  function createRange$1(fromRight) {
    return function (start, end, step) {
      if (
        step &&
        typeof step != 'number' &&
        isIterateeCall$2(start, end, step)
      ) {
        end = step = undefined
      }
      // Ensure the sign of `-0` is preserved.
      start = toFinite(start)
      if (end === undefined) {
        end = start
        start = 0
      } else {
        end = toFinite(end)
      }
      step = step === undefined ? (start < end ? 1 : -1) : toFinite(step)
      return baseRange(start, end, step, fromRight)
    }
  }

  var _createRange = createRange$1

  var createRange = _createRange

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to, but not including, `end`. A step of `-1` is used if a negative
   * `start` is specified without an `end` or `step`. If `end` is not specified,
   * it's set to `start` with `start` then set to `0`.
   *
   * **Note:** JavaScript follows the IEEE-754 standard for resolving
   * floating-point values which can produce unexpected results.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns the range of numbers.
   * @see _.inRange, _.rangeRight
   * @example
   *
   * _.range(4);
   * // => [0, 1, 2, 3]
   *
   * _.range(-4);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 5);
   * // => [1, 2, 3, 4]
   *
   * _.range(0, 20, 5);
   * // => [0, 5, 10, 15]
   *
   * _.range(0, -4, -1);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.range(0);
   * // => []
   */
  var range = createRange()

  var range_1 = range

  var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
    return seg.left <= slot && seg.right >= slot
  }
  var eventsInSlot = function eventsInSlot(segments, slot) {
    return segments.filter(function (seg) {
      return isSegmentInSlot$1(seg, slot)
    }).length
  }
  var EventEndingRow = /*#__PURE__*/ (function (_React$Component) {
    _inherits(EventEndingRow, _React$Component)
    var _super = _createSuper(EventEndingRow)
    function EventEndingRow() {
      _classCallCheck(this, EventEndingRow)
      return _super.apply(this, arguments)
    }
    _createClass(EventEndingRow, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            segments = _this$props.segments,
            slots = _this$props.slotMetrics.slots
          var rowSegments = eventLevels(segments).levels[0]
          var current = 1,
            lastEnd = 1,
            row = []
          while (current <= slots) {
            var key = '_lvl_' + current
            var _ref =
                rowSegments.filter(function (seg) {
                  return isSegmentInSlot$1(seg, current)
                })[0] || {},
              event = _ref.event,
              left = _ref.left,
              right = _ref.right,
              span = _ref.span //eslint-disable-line

            if (!event) {
              current++
              continue
            }
            var gap = Math.max(0, left - lastEnd)
            if (this.canRenderSlotEvent(left, span)) {
              var content = EventRowMixin.renderEvent(this.props, event)
              if (gap) {
                row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
              }
              row.push(EventRowMixin.renderSpan(slots, span, key, content))
              lastEnd = current = right + 1
            } else {
              if (gap) {
                row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
              }
              row.push(
                EventRowMixin.renderSpan(
                  slots,
                  1,
                  key,
                  this.renderShowMore(segments, current)
                )
              )
              lastEnd = current = current + 1
            }
          }
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: 'rbc-row',
            },
            row
          )
        },
      },
      {
        key: 'canRenderSlotEvent',
        value: function canRenderSlotEvent(slot, span) {
          var segments = this.props.segments
          return range_1(slot, slot + span).every(function (s) {
            var count = eventsInSlot(segments, s)
            return count === 1
          })
        },
      },
      {
        key: 'renderShowMore',
        value: function renderShowMore(segments, slot) {
          var _this = this
          var localizer = this.props.localizer
          var count = eventsInSlot(segments, slot)
          return count
            ? /*#__PURE__*/ React__default.default.createElement(
                'button',
                {
                  type: 'button',
                  key: 'sm_' + slot,
                  className: clsx('rbc-button-link', 'rbc-show-more'),
                  onClick: function onClick(e) {
                    return _this.showMore(slot, e)
                  },
                },
                localizer.messages.showMore(count)
              )
            : false
        },
      },
      {
        key: 'showMore',
        value: function showMore(slot, e) {
          e.preventDefault()
          e.stopPropagation()
          this.props.onShowMore(slot, e.target)
        },
      },
    ])
    return EventEndingRow
  })(React__default.default.Component)
  EventEndingRow.defaultProps = _objectSpread2({}, EventRowMixin.defaultProps)

  var ScrollableWeekWrapper = function ScrollableWeekWrapper(_ref) {
    var children = _ref.children
    return /*#__PURE__*/ React__default.default.createElement(
      'div',
      {
        className: 'rbc-row-content-scroll-container',
      },
      children
    )
  }

  var safeIsNaN =
    Number.isNaN ||
    function ponyfill(value) {
      return typeof value === 'number' && value !== value
    }
  function isEqual$1(first, second) {
    if (first === second) {
      return true
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
      return true
    }
    return false
  }
  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false
    }
    for (var i = 0; i < newInputs.length; i++) {
      if (!isEqual$1(newInputs[i], lastInputs[i])) {
        return false
      }
    }
    return true
  }

  function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
      isEqual = areInputsEqual
    }
    var cache = null
    function memoized() {
      var newArgs = []
      for (var _i = 0; _i < arguments.length; _i++) {
        newArgs[_i] = arguments[_i]
      }
      if (
        cache &&
        cache.lastThis === this &&
        isEqual(newArgs, cache.lastArgs)
      ) {
        return cache.lastResult
      }
      var lastResult = resultFn.apply(this, newArgs)
      cache = {
        lastResult: lastResult,
        lastArgs: newArgs,
        lastThis: this,
      }
      return lastResult
    }
    memoized.clear = function clear() {
      cache = null
    }
    return memoized
  }

  var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
    return seg.left <= slot && seg.right >= slot
  }
  var isEqual = function isEqual(a, b) {
    return a[0].range === b[0].range && a[0].events === b[0].events
  }
  function getSlotMetrics$1() {
    return memoizeOne(function (options) {
      var range = options.range,
        events = options.events,
        maxRows = options.maxRows,
        minRows = options.minRows,
        accessors = options.accessors,
        localizer = options.localizer
      var _endOfRange = endOfRange({
          dateRange: range,
          localizer: localizer,
        }),
        first = _endOfRange.first,
        last = _endOfRange.last
      var segments = events.map(function (evt) {
        return eventSegments(evt, range, accessors, localizer)
      })
      var _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)),
        levels = _eventLevels.levels,
        extra = _eventLevels.extra
      while (levels.length < minRows) levels.push([])
      return {
        first: first,
        last: last,
        levels: levels,
        extra: extra,
        range: range,
        slots: range.length,
        clone: function clone(args) {
          var metrics = getSlotMetrics$1()
          return metrics(_objectSpread2(_objectSpread2({}, options), args))
        },
        getDateForSlot: function getDateForSlot(slotNumber) {
          return range[slotNumber]
        },
        getSlotForDate: function getSlotForDate(date) {
          return range.find(function (r) {
            return localizer.isSameDate(r, date)
          })
        },
        getEventsForSlot: function getEventsForSlot(slot) {
          return segments
            .filter(function (seg) {
              return isSegmentInSlot(seg, slot)
            })
            .map(function (seg) {
              return seg.event
            })
        },
        continuesPrior: function continuesPrior(event) {
          return localizer.continuesPrior(accessors.start(event), first)
        },
        continuesAfter: function continuesAfter(event) {
          var start = accessors.start(event)
          var end = accessors.end(event)
          return localizer.continuesAfter(start, end, last)
        },
      }
    }, isEqual)
  }

  var DateContentRow = /*#__PURE__*/ (function (_React$Component) {
    _inherits(DateContentRow, _React$Component)
    var _super = _createSuper(DateContentRow)
    function DateContentRow() {
      var _this
      _classCallCheck(this, DateContentRow)
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }
      _this = _super.call.apply(_super, [this].concat(args))
      _this.handleSelectSlot = function (slot) {
        var _this$props = _this.props,
          range = _this$props.range,
          onSelectSlot = _this$props.onSelectSlot
        onSelectSlot(range.slice(slot.start, slot.end + 1), slot)
      }
      _this.handleShowMore = function (slot, target) {
        var _this$props2 = _this.props,
          range = _this$props2.range,
          onShowMore = _this$props2.onShowMore
        var metrics = _this.slotMetrics(_this.props)
        var row = qsa(_this.containerRef.current, '.rbc-row-bg')[0]
        var cell
        if (row) cell = row.children[slot - 1]
        var events = metrics.getEventsForSlot(slot)
        onShowMore(events, range[slot - 1], cell, slot, target)
      }
      _this.getContainer = function () {
        var container = _this.props.container
        return container ? container() : _this.containerRef.current
      }
      _this.renderHeadingCell = function (date, index) {
        var _this$props3 = _this.props,
          renderHeader = _this$props3.renderHeader,
          getNow = _this$props3.getNow,
          localizer = _this$props3.localizer
        return renderHeader({
          date: date,
          key: 'header_'.concat(index),
          className: clsx(
            'rbc-date-cell',
            localizer.isSameDate(date, getNow()) && 'rbc-now'
          ),
        })
      }
      _this.renderDummy = function () {
        var _this$props4 = _this.props,
          className = _this$props4.className,
          range = _this$props4.range,
          renderHeader = _this$props4.renderHeader,
          showAllEvents = _this$props4.showAllEvents
        return /*#__PURE__*/ React__default.default.createElement(
          'div',
          {
            className: className,
            ref: _this.containerRef,
          },
          /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: clsx(
                'rbc-row-content',
                showAllEvents && 'rbc-row-content-scrollable'
              ),
            },
            renderHeader &&
              /*#__PURE__*/ React__default.default.createElement(
                'div',
                {
                  className: 'rbc-row',
                  ref: _this.headingRowRef,
                },
                range.map(_this.renderHeadingCell)
              ),
            /*#__PURE__*/ React__default.default.createElement(
              'div',
              {
                className: 'rbc-row',
                ref: _this.eventRowRef,
              },
              /*#__PURE__*/ React__default.default.createElement(
                'div',
                {
                  className: 'rbc-row-segment',
                },
                /*#__PURE__*/ React__default.default.createElement(
                  'div',
                  {
                    className: 'rbc-event',
                  },
                  /*#__PURE__*/ React__default.default.createElement(
                    'div',
                    {
                      className: 'rbc-event-content',
                    },
                    '\xA0'
                  )
                )
              )
            )
          )
        )
      }
      _this.containerRef = /*#__PURE__*/ React.createRef()
      _this.headingRowRef = /*#__PURE__*/ React.createRef()
      _this.eventRowRef = /*#__PURE__*/ React.createRef()
      _this.slotMetrics = getSlotMetrics$1()
      return _this
    }
    _createClass(DateContentRow, [
      {
        key: 'getRowLimit',
        value: function getRowLimit() {
          var _this$headingRowRef
          /* Guessing this only gets called on the dummyRow */
          var eventHeight = height(this.eventRowRef.current)
          var headingHeight =
            (_this$headingRowRef = this.headingRowRef) !== null &&
            _this$headingRowRef !== void 0 &&
            _this$headingRowRef.current
              ? height(this.headingRowRef.current)
              : 0
          var eventSpace = height(this.containerRef.current) - headingHeight
          return Math.max(Math.floor(eventSpace / eventHeight), 1)
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props5 = this.props,
            date = _this$props5.date,
            rtl = _this$props5.rtl,
            range = _this$props5.range,
            className = _this$props5.className,
            selected = _this$props5.selected,
            selectable = _this$props5.selectable,
            renderForMeasure = _this$props5.renderForMeasure,
            accessors = _this$props5.accessors,
            getters = _this$props5.getters,
            components = _this$props5.components,
            getNow = _this$props5.getNow,
            renderHeader = _this$props5.renderHeader,
            onSelect = _this$props5.onSelect,
            localizer = _this$props5.localizer,
            onSelectStart = _this$props5.onSelectStart,
            onSelectEnd = _this$props5.onSelectEnd,
            onDoubleClick = _this$props5.onDoubleClick,
            onKeyPress = _this$props5.onKeyPress,
            resourceId = _this$props5.resourceId,
            longPressThreshold = _this$props5.longPressThreshold,
            isAllDay = _this$props5.isAllDay,
            resizable = _this$props5.resizable,
            showAllEvents = _this$props5.showAllEvents
          if (renderForMeasure) return this.renderDummy()
          var metrics = this.slotMetrics(this.props)
          var levels = metrics.levels,
            extra = metrics.extra
          var ScrollableWeekComponent = showAllEvents
            ? ScrollableWeekWrapper
            : NoopWrapper
          var WeekWrapper = components.weekWrapper
          var eventRowProps = {
            selected: selected,
            accessors: accessors,
            getters: getters,
            localizer: localizer,
            components: components,
            onSelect: onSelect,
            onDoubleClick: onDoubleClick,
            onKeyPress: onKeyPress,
            resourceId: resourceId,
            slotMetrics: metrics,
            resizable: resizable,
          }
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: className,
              role: 'rowgroup',
              ref: this.containerRef,
            },
            /*#__PURE__*/ React__default.default.createElement(
              BackgroundCells,
              {
                localizer: localizer,
                date: date,
                getNow: getNow,
                rtl: rtl,
                range: range,
                selectable: selectable,
                container: this.getContainer,
                getters: getters,
                onSelectStart: onSelectStart,
                onSelectEnd: onSelectEnd,
                onSelectSlot: this.handleSelectSlot,
                components: components,
                longPressThreshold: longPressThreshold,
                resourceId: resourceId,
              }
            ),
            /*#__PURE__*/ React__default.default.createElement(
              'div',
              {
                className: clsx(
                  'rbc-row-content',
                  showAllEvents && 'rbc-row-content-scrollable'
                ),
                role: 'row',
              },
              renderHeader &&
                /*#__PURE__*/ React__default.default.createElement(
                  'div',
                  {
                    className: 'rbc-row ',
                    ref: this.headingRowRef,
                  },
                  range.map(this.renderHeadingCell)
                ),
              /*#__PURE__*/ React__default.default.createElement(
                ScrollableWeekComponent,
                null,
                /*#__PURE__*/ React__default.default.createElement(
                  WeekWrapper,
                  Object.assign(
                    {
                      isAllDay: isAllDay,
                    },
                    eventRowProps
                  ),
                  levels.map(function (segs, idx) {
                    return /*#__PURE__*/ React__default.default.createElement(
                      EventRow,
                      Object.assign(
                        {
                          key: idx,
                          segments: segs,
                        },
                        eventRowProps
                      )
                    )
                  }),
                  !!extra.length &&
                    /*#__PURE__*/ React__default.default.createElement(
                      EventEndingRow,
                      Object.assign(
                        {
                          segments: extra,
                          onShowMore: this.handleShowMore,
                        },
                        eventRowProps
                      )
                    )
                )
              )
            )
          )
        },
      },
    ])
    return DateContentRow
  })(React__default.default.Component)
  DateContentRow.defaultProps = {
    minRows: 0,
    maxRows: Infinity,
  }

  var Header = function Header(_ref) {
    var label = _ref.label
    return /*#__PURE__*/ React__default.default.createElement(
      'span',
      {
        role: 'columnheader',
        'aria-sort': 'none',
      },
      label
    )
  }

  var DateHeader = function DateHeader(_ref) {
    var label = _ref.label,
      drilldownView = _ref.drilldownView,
      onDrillDown = _ref.onDrillDown
    if (!drilldownView) {
      return /*#__PURE__*/ React__default.default.createElement(
        'span',
        null,
        label
      )
    }
    return /*#__PURE__*/ React__default.default.createElement(
      'button',
      {
        type: 'button',
        className: 'rbc-button-link',
        onClick: onDrillDown,
        role: 'cell',
      },
      label
    )
  }
  DateHeader.propTypes =
    'development' !== 'production'
      ? {
          label: propTypesExports.node,
          date: propTypesExports.instanceOf(Date),
          drilldownView: propTypesExports.string,
          onDrillDown: propTypesExports.func,
          isOffRange: propTypesExports.bool,
        }
      : {}

  var _excluded$6 = ['date', 'className']
  var eventsForWeek = function eventsForWeek(
    evts,
    start,
    end,
    accessors,
    localizer
  ) {
    return evts.filter(function (e) {
      return inRange(e, start, end, accessors, localizer)
    })
  }
  var MonthView = /*#__PURE__*/ (function (_React$Component) {
    _inherits(MonthView, _React$Component)
    var _super = _createSuper(MonthView)
    function MonthView() {
      var _this
      _classCallCheck(this, MonthView)
      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }
      _this = _super.call.apply(_super, [this].concat(_args))
      _this.getContainer = function () {
        return _this.containerRef.current
      }
      _this.renderWeek = function (week, weekIdx) {
        var _this$props = _this.props,
          events = _this$props.events,
          components = _this$props.components,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          selected = _this$props.selected,
          date = _this$props.date,
          localizer = _this$props.localizer,
          longPressThreshold = _this$props.longPressThreshold,
          accessors = _this$props.accessors,
          getters = _this$props.getters,
          showAllEvents = _this$props.showAllEvents
        var _this$state = _this.state,
          needLimitMeasure = _this$state.needLimitMeasure,
          rowLimit = _this$state.rowLimit

        // let's not mutate props
        var weeksEvents = eventsForWeek(
          _toConsumableArray(events),
          week[0],
          week[week.length - 1],
          accessors,
          localizer
        )
        weeksEvents.sort(function (a, b) {
          return sortEvents(a, b, accessors, localizer)
        })
        return /*#__PURE__*/ React__default.default.createElement(
          DateContentRow,
          {
            key: weekIdx,
            ref: weekIdx === 0 ? _this.slotRowRef : undefined,
            container: _this.getContainer,
            className: 'rbc-month-row',
            getNow: getNow,
            date: date,
            range: week,
            events: weeksEvents,
            maxRows: showAllEvents ? Infinity : rowLimit,
            selected: selected,
            selectable: selectable,
            components: components,
            accessors: accessors,
            getters: getters,
            localizer: localizer,
            renderHeader: _this.readerDateHeading,
            renderForMeasure: needLimitMeasure,
            onShowMore: _this.handleShowMore,
            onSelect: _this.handleSelectEvent,
            onDoubleClick: _this.handleDoubleClickEvent,
            onKeyPress: _this.handleKeyPressEvent,
            onSelectSlot: _this.handleSelectSlot,
            longPressThreshold: longPressThreshold,
            rtl: _this.props.rtl,
            resizable: _this.props.resizable,
            showAllEvents: showAllEvents,
          }
        )
      }
      _this.readerDateHeading = function (_ref) {
        var date = _ref.date,
          className = _ref.className,
          props = _objectWithoutProperties(_ref, _excluded$6)
        var _this$props2 = _this.props,
          currentDate = _this$props2.date,
          getDrilldownView = _this$props2.getDrilldownView,
          localizer = _this$props2.localizer
        var isOffRange = localizer.neq(date, currentDate, 'month')
        var isCurrent = localizer.isSameDate(date, currentDate)
        var drilldownView = getDrilldownView(date)
        var label = localizer.format(date, 'dateFormat')
        var DateHeaderComponent =
          _this.props.components.dateHeader || DateHeader
        return /*#__PURE__*/ React__default.default.createElement(
          'div',
          Object.assign({}, props, {
            className: clsx(
              className,
              isOffRange && 'rbc-off-range',
              isCurrent && 'rbc-current'
            ),
            role: 'cell',
          }),
          /*#__PURE__*/ React__default.default.createElement(
            DateHeaderComponent,
            {
              label: label,
              date: date,
              drilldownView: drilldownView,
              isOffRange: isOffRange,
              onDrillDown: function onDrillDown(e) {
                return _this.handleHeadingClick(date, drilldownView, e)
              },
            }
          )
        )
      }
      _this.handleSelectSlot = function (range, slotInfo) {
        _this._pendingSelection = _this._pendingSelection.concat(range)
        clearTimeout(_this._selectTimer)
        _this._selectTimer = setTimeout(function () {
          return _this.selectDates(slotInfo)
        })
      }
      _this.handleHeadingClick = function (date, view, e) {
        e.preventDefault()
        _this.clearSelection()
        notify(_this.props.onDrillDown, [date, view])
      }
      _this.handleSelectEvent = function () {
        _this.clearSelection()
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2]
        }
        notify(_this.props.onSelectEvent, args)
      }
      _this.handleDoubleClickEvent = function () {
        _this.clearSelection()
        for (
          var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3] = arguments[_key3]
        }
        notify(_this.props.onDoubleClickEvent, args)
      }
      _this.handleKeyPressEvent = function () {
        _this.clearSelection()
        for (
          var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          args[_key4] = arguments[_key4]
        }
        notify(_this.props.onKeyPressEvent, args)
      }
      _this.handleShowMore = function (events, date, cell, slot, target) {
        var _this$props3 = _this.props,
          popup = _this$props3.popup,
          onDrillDown = _this$props3.onDrillDown,
          onShowMore = _this$props3.onShowMore,
          getDrilldownView = _this$props3.getDrilldownView,
          doShowMoreDrillDown = _this$props3.doShowMoreDrillDown
        //cancel any pending selections so only the event click goes through.
        _this.clearSelection()
        if (popup) {
          var position$1 = position(cell, _this.containerRef.current)
          _this.setState({
            overlay: {
              date: date,
              events: events,
              position: position$1,
              target: target,
            },
          })
        } else if (doShowMoreDrillDown) {
          notify(onDrillDown, [date, getDrilldownView(date) || views.DAY])
        }
        notify(onShowMore, [events, date, slot])
      }
      _this.overlayDisplay = function () {
        _this.setState({
          overlay: null,
        })
      }
      _this.state = {
        rowLimit: 5,
        needLimitMeasure: true,
        date: null,
      }
      _this.containerRef = /*#__PURE__*/ React.createRef()
      _this.slotRowRef = /*#__PURE__*/ React.createRef()
      _this._bgRows = []
      _this._pendingSelection = []
      return _this
    }
    _createClass(
      MonthView,
      [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this2 = this
            var running
            if (this.state.needLimitMeasure) this.measureRowLimit(this.props)
            window.addEventListener(
              'resize',
              (this._resizeListener = function () {
                if (!running) {
                  request(function () {
                    running = false
                    _this2.setState({
                      needLimitMeasure: true,
                    }) //eslint-disable-line
                  })
                }
              }),
              false
            )
          },
        },
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate() {
            if (this.state.needLimitMeasure) this.measureRowLimit(this.props)
          },
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            window.removeEventListener('resize', this._resizeListener, false)
          },
        },
        {
          key: 'render',
          value: function render() {
            var _this$props4 = this.props,
              date = _this$props4.date,
              localizer = _this$props4.localizer,
              className = _this$props4.className,
              month = localizer.visibleDays(date, localizer),
              weeks = chunk_1(month, 7)
            this._weekCount = weeks.length
            return /*#__PURE__*/ React__default.default.createElement(
              'div',
              {
                className: clsx('rbc-month-view', className),
                role: 'table',
                'aria-label': 'Month View',
                ref: this.containerRef,
              },
              /*#__PURE__*/ React__default.default.createElement(
                'div',
                {
                  className: 'rbc-row rbc-month-header',
                  role: 'row',
                },
                this.renderHeaders(weeks[0])
              ),
              weeks.map(this.renderWeek),
              this.props.popup && this.renderOverlay()
            )
          },
        },
        {
          key: 'renderHeaders',
          value: function renderHeaders(row) {
            var _this$props5 = this.props,
              localizer = _this$props5.localizer,
              components = _this$props5.components
            var first = row[0]
            var last = row[row.length - 1]
            var HeaderComponent = components.header || Header
            return localizer.range(first, last, 'day').map(function (day, idx) {
              return /*#__PURE__*/ React__default.default.createElement(
                'div',
                {
                  key: 'header_' + idx,
                  className: 'rbc-header',
                },
                /*#__PURE__*/ React__default.default.createElement(
                  HeaderComponent,
                  {
                    date: day,
                    localizer: localizer,
                    label: localizer.format(day, 'weekdayFormat'),
                  }
                )
              )
            })
          },
        },
        {
          key: 'renderOverlay',
          value: function renderOverlay() {
            var _this$state$overlay,
              _this$state2,
              _this3 = this
            var overlay =
              (_this$state$overlay =
                (_this$state2 = this.state) === null || _this$state2 === void 0
                  ? void 0
                  : _this$state2.overlay) !== null &&
              _this$state$overlay !== void 0
                ? _this$state$overlay
                : {}
            var _this$props6 = this.props,
              accessors = _this$props6.accessors,
              localizer = _this$props6.localizer,
              components = _this$props6.components,
              getters = _this$props6.getters,
              selected = _this$props6.selected,
              popupOffset = _this$props6.popupOffset,
              handleDragStart = _this$props6.handleDragStart
            var onHide = function onHide() {
              return _this3.setState({
                overlay: null,
              })
            }
            return /*#__PURE__*/ React__default.default.createElement(
              PopOverlay,
              {
                overlay: overlay,
                accessors: accessors,
                localizer: localizer,
                components: components,
                getters: getters,
                selected: selected,
                popupOffset: popupOffset,
                ref: this.containerRef,
                handleKeyPressEvent: this.handleKeyPressEvent,
                handleSelectEvent: this.handleSelectEvent,
                handleDoubleClickEvent: this.handleDoubleClickEvent,
                handleDragStart: handleDragStart,
                show: !!overlay.position,
                overlayDisplay: this.overlayDisplay,
                onHide: onHide,
              }
            )

            /* return (
          <Overlay
            rootClose
            placement="bottom"
            show={!!overlay.position}
            onHide={() => this.setState({ overlay: null })}
            target={() => overlay.target}
          >
            {({ props }) => (
              <Popup
                {...props}
                popupOffset={popupOffset}
                accessors={accessors}
                getters={getters}
                selected={selected}
                components={components}
                localizer={localizer}
                position={overlay.position}
                show={this.overlayDisplay}
                events={overlay.events}
                slotStart={overlay.date}
                slotEnd={overlay.end}
                onSelect={this.handleSelectEvent}
                onDoubleClick={this.handleDoubleClickEvent}
                onKeyPress={this.handleKeyPressEvent}
                handleDragStart={this.props.handleDragStart}
              />
            )}
          </Overlay>
        ) */
          },
        },
        {
          key: 'measureRowLimit',
          value: function measureRowLimit() {
            this.setState({
              needLimitMeasure: false,
              rowLimit: this.slotRowRef.current.getRowLimit(),
            })
          },
        },
        {
          key: 'selectDates',
          value: function selectDates(slotInfo) {
            var slots = this._pendingSelection.slice()
            this._pendingSelection = []
            slots.sort(function (a, b) {
              return +a - +b
            })
            var start = new Date(slots[0])
            var end = new Date(slots[slots.length - 1])
            end.setDate(slots[slots.length - 1].getDate() + 1)
            notify(this.props.onSelectSlot, {
              slots: slots,
              start: start,
              end: end,
              action: slotInfo.action,
              bounds: slotInfo.bounds,
              box: slotInfo.box,
            })
          },
        },
        {
          key: 'clearSelection',
          value: function clearSelection() {
            clearTimeout(this._selectTimer)
            this._pendingSelection = []
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(_ref2, state) {
            var date = _ref2.date,
              localizer = _ref2.localizer
            return {
              date: date,
              needLimitMeasure: localizer.neq(date, state.date, 'month'),
            }
          },
        },
      ]
    )
    return MonthView
  })(React__default.default.Component)
  MonthView.range = function (date, _ref3) {
    var localizer = _ref3.localizer
    var start = localizer.firstVisibleDay(date, localizer)
    var end = localizer.lastVisibleDay(date, localizer)
    return {
      start: start,
      end: end,
    }
  }
  MonthView.navigate = function (date, action, _ref4) {
    var localizer = _ref4.localizer
    switch (action) {
      case navigate.PREVIOUS:
        return localizer.add(date, -1, 'month')
      case navigate.NEXT:
        return localizer.add(date, 1, 'month')
      default:
        return date
    }
  }
  MonthView.title = function (date, _ref5) {
    var localizer = _ref5.localizer
    return localizer.format(date, 'monthHeaderFormat')
  }

  var getKey = function getKey(_ref) {
    var min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      slots = _ref.slots,
      localizer = _ref.localizer
    return (
      ''.concat(+localizer.startOf(min, 'minutes')) +
      ''.concat(+localizer.startOf(max, 'minutes')) +
      ''.concat(step, '-').concat(slots)
    )
  }
  function getSlotMetrics(_ref2) {
    var start = _ref2.min,
      end = _ref2.max,
      step = _ref2.step,
      timeslots = _ref2.timeslots,
      localizer = _ref2.localizer
    var key = getKey({
      start: start,
      end: end,
      step: step,
      timeslots: timeslots,
      localizer: localizer,
    })

    // DST differences are handled inside the localizer
    var totalMin = 1 + localizer.getTotalMin(start, end)
    var minutesFromMidnight = localizer.getMinutesFromMidnight(start)
    var numGroups = Math.ceil((totalMin - 1) / (step * timeslots))
    var numSlots = numGroups * timeslots
    var groups = new Array(numGroups)
    var slots = new Array(numSlots)
    // Each slot date is created from "zero", instead of adding `step` to
    // the previous one, in order to avoid DST oddities
    for (var grp = 0; grp < numGroups; grp++) {
      groups[grp] = new Array(timeslots)
      for (var slot = 0; slot < timeslots; slot++) {
        var slotIdx = grp * timeslots + slot
        var minFromStart = slotIdx * step
        // A date with total minutes calculated from the start of the day
        slots[slotIdx] = groups[grp][slot] = localizer.getSlotDate(
          start,
          minutesFromMidnight,
          minFromStart
        )
      }
    }

    // Necessary to be able to select up until the last timeslot in a day
    var lastSlotMinFromStart = slots.length * step
    slots.push(
      localizer.getSlotDate(start, minutesFromMidnight, lastSlotMinFromStart)
    )
    function positionFromDate(date) {
      var diff =
        localizer.diff(start, date, 'minutes') +
        localizer.getDstOffset(start, date)
      return Math.min(diff, totalMin)
    }
    return {
      groups: groups,
      update: function update(args) {
        if (getKey(args) !== key) return getSlotMetrics(args)
        return this
      },
      dateIsInGroup: function dateIsInGroup(date, groupIndex) {
        var nextGroup = groups[groupIndex + 1]
        return localizer.inRange(
          date,
          groups[groupIndex][0],
          nextGroup ? nextGroup[0] : end,
          'minutes'
        )
      },
      nextSlot: function nextSlot(slot) {
        var next = slots[Math.min(slots.indexOf(slot) + 1, slots.length - 1)]
        // in the case of the last slot we won't a long enough range so manually get it
        if (next === slot) next = localizer.add(slot, step, 'minutes')
        return next
      },
      closestSlotToPosition: function closestSlotToPosition(percent) {
        var slot = Math.min(
          slots.length - 1,
          Math.max(0, Math.floor(percent * numSlots))
        )
        return slots[slot]
      },
      closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
        var range = Math.abs(boundaryRect.top - boundaryRect.bottom)
        return this.closestSlotToPosition((point.y - boundaryRect.top) / range)
      },
      closestSlotFromDate: function closestSlotFromDate(date) {
        var offset =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
        if (localizer.lt(date, start, 'minutes')) return slots[0]
        if (localizer.gt(date, end, 'minutes')) return slots[slots.length - 1]
        var diffMins = localizer.diff(start, date, 'minutes')
        return slots[(diffMins - (diffMins % step)) / step + offset]
      },
      startsBeforeDay: function startsBeforeDay(date) {
        return localizer.lt(date, start, 'day')
      },
      startsAfterDay: function startsAfterDay(date) {
        return localizer.gt(date, end, 'day')
      },
      startsBefore: function startsBefore(date) {
        return localizer.lt(localizer.merge(start, date), start, 'minutes')
      },
      startsAfter: function startsAfter(date) {
        return localizer.gt(localizer.merge(end, date), end, 'minutes')
      },
      getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
        if (!ignoreMin)
          rangeStart = localizer.min(end, localizer.max(start, rangeStart))
        if (!ignoreMax)
          rangeEnd = localizer.min(end, localizer.max(start, rangeEnd))
        var rangeStartMin = positionFromDate(rangeStart)
        var rangeEndMin = positionFromDate(rangeEnd)
        var top =
          rangeEndMin > step * numSlots && !localizer.eq(end, rangeEnd)
            ? ((rangeStartMin - step) / (step * numSlots)) * 100
            : (rangeStartMin / (step * numSlots)) * 100
        return {
          top: top,
          height: (rangeEndMin / (step * numSlots)) * 100 - top,
          start: positionFromDate(rangeStart),
          startDate: rangeStart,
          end: positionFromDate(rangeEnd),
          endDate: rangeEnd,
        }
      },
      getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
        var rangeStartMin = positionFromDate(rangeStart)
        var top = (rangeStartMin / (step * numSlots)) * 100
        return top
      },
    }
  }

  var Symbol$2 = _Symbol,
    isArguments = isArguments_1,
    isArray$3 = isArray_1

  /** Built-in value references. */
  var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : undefined

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable$1(value) {
    return (
      isArray$3(value) ||
      isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol])
    )
  }

  var _isFlattenable = isFlattenable$1

  var arrayPush$1 = _arrayPush,
    isFlattenable = _isFlattenable

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten$2(array, depth, predicate, isStrict, result) {
    var index = -1,
      length = array.length

    predicate || (predicate = isFlattenable)
    result || (result = [])

    while (++index < length) {
      var value = array[index]
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten$2(value, depth - 1, predicate, isStrict, result)
        } else {
          arrayPush$1(result, value)
        }
      } else if (!isStrict) {
        result[result.length] = value
      }
    }
    return result
  }

  var _baseFlatten = baseFlatten$2

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseFor$1(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length

      while (length--) {
        var key = props[fromRight ? length : ++index]
        if (iteratee(iterable[key], key, iterable) === false) {
          break
        }
      }
      return object
    }
  }

  var _createBaseFor = createBaseFor$1

  var createBaseFor = _createBaseFor

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor$1 = createBaseFor()

  var _baseFor = baseFor$1

  var baseFor = _baseFor,
    keys$2 = keys_1

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn$3(object, iteratee) {
    return object && baseFor(object, iteratee, keys$2)
  }

  var _baseForOwn = baseForOwn$3

  var isArrayLike$2 = isArrayLike_1

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach$1(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection
      }
      if (!isArrayLike$2(collection)) {
        return eachFunc(collection, iteratee)
      }
      var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection)

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break
        }
      }
      return collection
    }
  }

  var _createBaseEach = createBaseEach$1

  var baseForOwn$2 = _baseForOwn,
    createBaseEach = _createBaseEach

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach$1 = createBaseEach(baseForOwn$2)

  var _baseEach = baseEach$1

  var baseEach = _baseEach,
    isArrayLike$1 = isArrayLike_1

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap$1(collection, iteratee) {
    var index = -1,
      result = isArrayLike$1(collection) ? Array(collection.length) : []

    baseEach(collection, function (value, key, collection) {
      result[++index] = iteratee(value, key, collection)
    })
    return result
  }

  var _baseMap = baseMap$1

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */

  function baseSortBy$1(array, comparer) {
    var length = array.length

    array.sort(comparer)
    while (length--) {
      array[length] = array[length].value
    }
    return array
  }

  var _baseSortBy = baseSortBy$1

  var isSymbol = isSymbol_1

  /**
   * Compares values to sort them in ascending order.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function compareAscending$1(value, other) {
    if (value !== other) {
      var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value)

      var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other)

      if (
        (!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol &&
          othIsDefined &&
          othIsReflexive &&
          !othIsNull &&
          !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive
      ) {
        return 1
      }
      if (
        (!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol &&
          valIsDefined &&
          valIsReflexive &&
          !valIsNull &&
          !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive
      ) {
        return -1
      }
    }
    return 0
  }

  var _compareAscending = compareAscending$1

  var compareAscending = _compareAscending

  /**
   * Used by `_.orderBy` to compare multiple properties of a value to another
   * and stable sort them.
   *
   * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
   * specify an order of "desc" for descending or "asc" for ascending sort order
   * of corresponding values.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {boolean[]|string[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple$1(object, other, orders) {
    var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length

    while (++index < length) {
      var result = compareAscending(objCriteria[index], othCriteria[index])
      if (result) {
        if (index >= ordersLength) {
          return result
        }
        var order = orders[index]
        return result * (order == 'desc' ? -1 : 1)
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index
  }

  var _compareMultiple = compareMultiple$1

  var arrayMap$1 = _arrayMap,
    baseGet$1 = _baseGet,
    baseIteratee$2 = _baseIteratee,
    baseMap = _baseMap,
    baseSortBy = _baseSortBy,
    baseUnary$2 = _baseUnary,
    compareMultiple = _compareMultiple,
    identity$2 = identity_1,
    isArray$2 = isArray_1

  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy$1(collection, iteratees, orders) {
    if (iteratees.length) {
      iteratees = arrayMap$1(iteratees, function (iteratee) {
        if (isArray$2(iteratee)) {
          return function (value) {
            return baseGet$1(
              value,
              iteratee.length === 1 ? iteratee[0] : iteratee
            )
          }
        }
        return iteratee
      })
    } else {
      iteratees = [identity$2]
    }

    var index = -1
    iteratees = arrayMap$1(iteratees, baseUnary$2(baseIteratee$2))

    var result = baseMap(collection, function (value, key, collection) {
      var criteria = arrayMap$1(iteratees, function (iteratee) {
        return iteratee(value)
      })
      return { criteria: criteria, index: ++index, value: value }
    })

    return baseSortBy(result, function (object, other) {
      return compareMultiple(object, other, orders)
    })
  }

  var _baseOrderBy = baseOrderBy$1

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg)
      case 1:
        return func.call(thisArg, args[0])
      case 2:
        return func.call(thisArg, args[0], args[1])
      case 3:
        return func.call(thisArg, args[0], args[1], args[2])
    }
    return func.apply(thisArg, args)
  }

  var _apply = apply$1

  var apply = _apply

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest$2(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0)
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length)

      while (++index < length) {
        array[index] = args[start + index]
      }
      index = -1
      var otherArgs = Array(start + 1)
      while (++index < start) {
        otherArgs[index] = args[index]
      }
      otherArgs[start] = transform(array)
      return apply(func, this, otherArgs)
    }
  }

  var _overRest = overRest$2

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function () {
      return value
    }
  }

  var constant_1 = constant$1

  var getNative = _getNative

  var defineProperty$2 = (function () {
    try {
      var func = getNative(Object, 'defineProperty')
      func({}, '', {})
      return func
    } catch (e) {}
  })()

  var _defineProperty = defineProperty$2

  var constant = constant_1,
    defineProperty$1 = _defineProperty,
    identity$1 = identity_1

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString$1 = !defineProperty$1
    ? identity$1
    : function (func, string) {
        return defineProperty$1(func, 'toString', {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true,
        })
      }

  var _baseSetToString = baseSetToString$1

  /** Used to detect hot functions by number of calls within a span of milliseconds. */

  var HOT_COUNT = 800,
    HOT_SPAN = 16

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut$1(func) {
    var count = 0,
      lastCalled = 0

    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled)

      lastCalled = stamp
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0]
        }
      } else {
        count = 0
      }
      return func.apply(undefined, arguments)
    }
  }

  var _shortOut = shortOut$1

  var baseSetToString = _baseSetToString,
    shortOut = _shortOut

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString$2 = shortOut(baseSetToString)

  var _setToString = setToString$2

  var identity = identity_1,
    overRest$1 = _overRest,
    setToString$1 = _setToString

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest$2(func, start) {
    return setToString$1(overRest$1(func, start, identity), func + '')
  }

  var _baseRest = baseRest$2

  var baseFlatten$1 = _baseFlatten,
    baseOrderBy = _baseOrderBy,
    baseRest$1 = _baseRest,
    isIterateeCall$1 = _isIterateeCall

  /**
   * Creates an array of elements, sorted in ascending order by the results of
   * running each element in a collection thru each iteratee. This method
   * performs a stable sort, that is, it preserves the original sort order of
   * equal elements. The iteratees are invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {...(Function|Function[])} [iteratees=[_.identity]]
   *  The iteratees to sort by.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 48 },
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 30 },
   *   { 'user': 'barney', 'age': 34 }
   * ];
   *
   * _.sortBy(users, [function(o) { return o.user; }]);
   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
   *
   * _.sortBy(users, ['user', 'age']);
   * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
   */
  var sortBy = baseRest$1(function (collection, iteratees) {
    if (collection == null) {
      return []
    }
    var length = iteratees.length
    if (
      length > 1 &&
      isIterateeCall$1(collection, iteratees[0], iteratees[1])
    ) {
      iteratees = []
    } else if (
      length > 2 &&
      isIterateeCall$1(iteratees[0], iteratees[1], iteratees[2])
    ) {
      iteratees = [iteratees[0]]
    }
    return baseOrderBy(collection, baseFlatten$1(iteratees, 1), [])
  })

  var sortBy_1 = sortBy

  var Event = /*#__PURE__*/ (function () {
    function Event(data, _ref) {
      var accessors = _ref.accessors,
        slotMetrics = _ref.slotMetrics
      _classCallCheck(this, Event)
      var _slotMetrics$getRange = slotMetrics.getRange(
          accessors.start(data),
          accessors.end(data)
        ),
        start = _slotMetrics$getRange.start,
        startDate = _slotMetrics$getRange.startDate,
        end = _slotMetrics$getRange.end,
        endDate = _slotMetrics$getRange.endDate,
        top = _slotMetrics$getRange.top,
        height = _slotMetrics$getRange.height
      this.start = start
      this.end = end
      this.startMs = +startDate
      this.endMs = +endDate
      this.top = top
      this.height = height
      this.data = data
    }

    /**
     * The event's width without any overlap.
     */
    _createClass(Event, [
      {
        key: '_width',
        get: function get() {
          // The container event's width is determined by the maximum number of
          // events in any of its rows.
          if (this.rows) {
            var columns =
              this.rows.reduce(
                function (max, row) {
                  return Math.max(max, row.leaves.length + 1)
                },
                // add itself
                0
              ) + 1 // add the container

            return 100 / columns
          }

          // The row event's width is the space left by the container, divided
          // among itself and its leaves.
          if (this.leaves) {
            var availableWidth = 100 - this.container._width
            return availableWidth / (this.leaves.length + 1)
          }

          // The leaf event's width is determined by its row's width
          return this.row._width
        },

        /**
         * The event's calculated width, possibly with extra width added for
         * overlapping effect.
         */
      },
      {
        key: 'width',
        get: function get() {
          var noOverlap = this._width
          var overlap = Math.min(100, this._width * 1.7)

          // Containers can always grow.
          if (this.rows) {
            return overlap
          }

          // Rows can grow if they have leaves.
          if (this.leaves) {
            return this.leaves.length > 0 ? overlap : noOverlap
          }

          // Leaves can grow unless they're the last item in a row.
          var leaves = this.row.leaves
          var index = leaves.indexOf(this)
          return index === leaves.length - 1 ? noOverlap : overlap
        },
      },
      {
        key: 'xOffset',
        get: function get() {
          // Containers have no offset.
          if (this.rows) return 0

          // Rows always start where their container ends.
          if (this.leaves) return this.container._width

          // Leaves are spread out evenly on the space left by its row.
          var _this$row = this.row,
            leaves = _this$row.leaves,
            xOffset = _this$row.xOffset,
            _width = _this$row._width
          var index = leaves.indexOf(this) + 1
          return xOffset + index * _width
        },
      },
    ])
    return Event
  })()
  /**
   * Return true if event a and b is considered to be on the same row.
   */
  function onSameRow(a, b, minimumStartDifference) {
    return (
      // Occupies the same start slot.
      Math.abs(b.start - a.start) < minimumStartDifference ||
      // A's start slot overlaps with b's end slot.
      (b.start > a.start && b.start < a.end)
    )
  }
  function sortByRender(events) {
    var sortedByTime = sortBy_1(events, [
      'startMs',
      function (e) {
        return -e.endMs
      },
    ])
    var sorted = []
    while (sortedByTime.length > 0) {
      var event = sortedByTime.shift()
      sorted.push(event)
      for (var i = 0; i < sortedByTime.length; i++) {
        var test = sortedByTime[i]

        // Still inside this event, look for next.
        if (event.endMs > test.startMs) continue

        // We've found the first event of the next event group.
        // If that event is not right next to our current event, we have to
        // move it here.
        if (i > 0) {
          var _event = sortedByTime.splice(i, 1)[0]
          sorted.push(_event)
        }

        // We've already found the next event group, so stop looking.
        break
      }
    }
    return sorted
  }
  function getStyledEvents$1(_ref2) {
    var events = _ref2.events,
      minimumStartDifference = _ref2.minimumStartDifference,
      slotMetrics = _ref2.slotMetrics,
      accessors = _ref2.accessors
    // Create proxy events and order them so that we don't have
    // to fiddle with z-indexes.
    var proxies = events.map(function (event) {
      return new Event(event, {
        slotMetrics: slotMetrics,
        accessors: accessors,
      })
    })
    var eventsInRenderOrder = sortByRender(proxies)

    // Group overlapping events, while keeping order.
    // Every event is always one of: container, row or leaf.
    // Containers can contain rows, and rows can contain leaves.
    var containerEvents = []
    var _loop = function _loop() {
      var event = eventsInRenderOrder[i]

      // Check if this event can go into a container event.
      var container = containerEvents.find(function (c) {
        return (
          c.end > event.start ||
          Math.abs(event.start - c.start) < minimumStartDifference
        )
      })

      // Couldn't find a container — that means this event is a container.
      if (!container) {
        event.rows = []
        containerEvents.push(event)
        return 'continue'
      }

      // Found a container for the event.
      event.container = container

      // Check if the event can be placed in an existing row.
      // Start looking from behind.
      var row = null
      for (var j = container.rows.length - 1; !row && j >= 0; j--) {
        if (onSameRow(container.rows[j], event, minimumStartDifference)) {
          row = container.rows[j]
        }
      }
      if (row) {
        // Found a row, so add it.
        row.leaves.push(event)
        event.row = row
      } else {
        // Couldn't find a row – that means this event is a row.
        event.leaves = []
        container.rows.push(event)
      }
    }
    for (var i = 0; i < eventsInRenderOrder.length; i++) {
      var _ret = _loop()
      if (_ret === 'continue') continue
    }

    // Return the original events, along with their styles.
    return eventsInRenderOrder.map(function (event) {
      return {
        event: event.data,
        style: {
          top: event.top,
          height: event.height,
          width: event.width,
          xOffset: Math.max(0, event.xOffset),
        },
      }
    })
  }

  function getMaxIdxDFS(node, maxIdx, visited) {
    for (var i = 0; i < node.friends.length; ++i) {
      if (visited.indexOf(node.friends[i]) > -1) continue
      maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx
      // TODO : trace it by not object but kinda index or something for performance
      visited.push(node.friends[i])
      var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited)
      maxIdx = maxIdx > newIdx ? maxIdx : newIdx
    }
    return maxIdx
  }
  function noOverlap(_ref) {
    var events = _ref.events,
      minimumStartDifference = _ref.minimumStartDifference,
      slotMetrics = _ref.slotMetrics,
      accessors = _ref.accessors
    var styledEvents = getStyledEvents$1({
      events: events,
      minimumStartDifference: minimumStartDifference,
      slotMetrics: slotMetrics,
      accessors: accessors,
    })
    styledEvents.sort(function (a, b) {
      a = a.style
      b = b.style
      if (a.top !== b.top) return a.top > b.top ? 1 : -1
      else return a.top + a.height < b.top + b.height ? 1 : -1
    })
    for (var i = 0; i < styledEvents.length; ++i) {
      styledEvents[i].friends = []
      delete styledEvents[i].style.left
      delete styledEvents[i].style.left
      delete styledEvents[i].idx
      delete styledEvents[i].size
    }
    for (var _i2 = 0; _i2 < styledEvents.length - 1; ++_i2) {
      var se1 = styledEvents[_i2]
      var y1 = se1.style.top
      var y2 = se1.style.top + se1.style.height
      for (var j = _i2 + 1; j < styledEvents.length; ++j) {
        var se2 = styledEvents[j]
        var y3 = se2.style.top
        var y4 = se2.style.top + se2.style.height
        if (
          (y3 >= y1 && y4 <= y2) ||
          (y4 > y1 && y4 <= y2) ||
          (y3 >= y1 && y3 < y2)
        ) {
          // TODO : hashmap would be effective for performance
          se1.friends.push(se2)
          se2.friends.push(se1)
        }
      }
    }
    for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
      var se = styledEvents[_i4]
      var bitmap = []
      for (var _j2 = 0; _j2 < 100; ++_j2) bitmap.push(1) // 1 means available

      for (var _j4 = 0; _j4 < se.friends.length; ++_j4)
        if (se.friends[_j4].idx !== undefined) bitmap[se.friends[_j4].idx] = 0 // 0 means reserved

      se.idx = bitmap.indexOf(1)
    }
    for (var _i6 = 0; _i6 < styledEvents.length; ++_i6) {
      var size = 0
      if (styledEvents[_i6].size) continue
      var allFriends = []
      var maxIdx = getMaxIdxDFS(styledEvents[_i6], 0, allFriends)
      size = 100 / (maxIdx + 1)
      styledEvents[_i6].size = size
      for (var _j6 = 0; _j6 < allFriends.length; ++_j6)
        allFriends[_j6].size = size
    }
    for (var _i8 = 0; _i8 < styledEvents.length; ++_i8) {
      var e = styledEvents[_i8]
      e.style.left = e.idx * e.size

      // stretch to maximum
      var _maxIdx = 0
      for (var _j8 = 0; _j8 < e.friends.length; ++_j8) {
        var idx = e.friends[_j8].idx
        _maxIdx = _maxIdx > idx ? _maxIdx : idx
      }
      if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size

      // padding between events
      // for this feature, `width` is not percentage based unit anymore
      // it will be used with calc()
      var padding = e.idx === 0 ? 0 : 3
      e.style.width = 'calc('.concat(e.size, '% - ').concat(padding, 'px)')
      e.style.height = 'calc('.concat(e.style.height, '% - 2px)')
      e.style.xOffset = 'calc('
        .concat(e.style.left, '% + ')
        .concat(padding, 'px)')
    }
    return styledEvents
  }

  /*eslint no-unused-vars: "off"*/
  var DefaultAlgorithms = {
    overlap: getStyledEvents$1,
    'no-overlap': noOverlap,
  }
  function isFunction$1(a) {
    return !!(a && a.constructor && a.call && a.apply)
  }

  //
  function getStyledEvents(_ref) {
    _ref.events
    _ref.minimumStartDifference
    _ref.slotMetrics
    _ref.accessors
    var dayLayoutAlgorithm = _ref.dayLayoutAlgorithm
    var algorithm = dayLayoutAlgorithm
    if (dayLayoutAlgorithm in DefaultAlgorithms)
      algorithm = DefaultAlgorithms[dayLayoutAlgorithm]
    if (!isFunction$1(algorithm)) {
      // invalid algorithm
      return []
    }
    return algorithm.apply(this, arguments)
  }

  var TimeSlotGroup = /*#__PURE__*/ (function (_Component) {
    _inherits(TimeSlotGroup, _Component)
    var _super = _createSuper(TimeSlotGroup)
    function TimeSlotGroup() {
      _classCallCheck(this, TimeSlotGroup)
      return _super.apply(this, arguments)
    }
    _createClass(TimeSlotGroup, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            renderSlot = _this$props.renderSlot,
            resource = _this$props.resource,
            group = _this$props.group,
            getters = _this$props.getters,
            _this$props$component = _this$props.components,
            _this$props$component2 =
              _this$props$component === void 0 ? {} : _this$props$component,
            _this$props$component3 = _this$props$component2.timeSlotWrapper,
            Wrapper =
              _this$props$component3 === void 0
                ? NoopWrapper
                : _this$props$component3
          var groupProps = getters ? getters.slotGroupProp(group) : {}
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            Object.assign(
              {
                className: 'rbc-timeslot-group',
              },
              groupProps
            ),
            group.map(function (value, idx) {
              var slotProps = getters ? getters.slotProp(value, resource) : {}
              return /*#__PURE__*/ React__default.default.createElement(
                Wrapper,
                {
                  key: idx,
                  value: value,
                  resource: resource,
                },
                /*#__PURE__*/ React__default.default.createElement(
                  'div',
                  Object.assign({}, slotProps, {
                    className: clsx('rbc-time-slot', slotProps.className),
                  }),
                  renderSlot && renderSlot(value, idx)
                )
              )
            })
          )
        },
      },
    ])
    return TimeSlotGroup
  })(React.Component)

  function stringifyPercent(v) {
    return typeof v === 'string' ? v : v + '%'
  }

  /* eslint-disable react/prop-types */
  function TimeGridEvent(props) {
    var style = props.style,
      className = props.className,
      event = props.event,
      accessors = props.accessors,
      rtl = props.rtl,
      selected = props.selected,
      label = props.label,
      continuesPrior = props.continuesPrior,
      continuesAfter = props.continuesAfter,
      getters = props.getters,
      onClick = props.onClick,
      onDoubleClick = props.onDoubleClick,
      isBackgroundEvent = props.isBackgroundEvent,
      onKeyPress = props.onKeyPress,
      _props$components = props.components,
      Event = _props$components.event,
      EventWrapper = _props$components.eventWrapper
    var title = accessors.title(event)
    var tooltip = accessors.tooltip(event)
    var end = accessors.end(event)
    var start = accessors.start(event)
    var userProps = getters.eventProp(event, start, end, selected)
    var height = style.height,
      top = style.top,
      width = style.width,
      xOffset = style.xOffset
    var inner = [
      /*#__PURE__*/ React__default.default.createElement(
        'div',
        {
          key: '1',
          className: 'rbc-event-label',
        },
        label
      ),
      /*#__PURE__*/ React__default.default.createElement(
        'div',
        {
          key: '2',
          className: 'rbc-event-content',
        },
        Event
          ? /*#__PURE__*/ React__default.default.createElement(Event, {
              event: event,
              title: title,
            })
          : title
      ),
    ]
    var eventStyle = isBackgroundEvent
      ? _objectSpread2(
          _objectSpread2({}, userProps.style),
          {},
          _defineProperty$1(
            {
              top: stringifyPercent(top),
              height: stringifyPercent(height),
              // Adding 10px to take events container right margin into account
              width: 'calc('.concat(width, ' + 10px)'),
            },
            rtl ? 'right' : 'left',
            stringifyPercent(Math.max(0, xOffset))
          )
        )
      : _objectSpread2(
          _objectSpread2({}, userProps.style),
          {},
          _defineProperty$1(
            {
              top: stringifyPercent(top),
              width: stringifyPercent(width),
              height: stringifyPercent(height),
            },
            rtl ? 'right' : 'left',
            stringifyPercent(xOffset)
          )
        )
    return /*#__PURE__*/ React__default.default.createElement(
      EventWrapper,
      Object.assign(
        {
          type: 'time',
        },
        props
      ),
      /*#__PURE__*/ React__default.default.createElement(
        'div',
        {
          onClick: onClick,
          onDoubleClick: onDoubleClick,
          style: eventStyle,
          onKeyPress: onKeyPress,
          title: tooltip
            ? (typeof label === 'string' ? label + ': ' : '') + tooltip
            : undefined,
          className: clsx(
            isBackgroundEvent ? 'rbc-background-event' : 'rbc-event',
            className,
            userProps.className,
            {
              'rbc-selected': selected,
              'rbc-event-continues-earlier': continuesPrior,
              'rbc-event-continues-later': continuesAfter,
            }
          ),
        },
        inner
      )
    )
  }

  var DayColumnWrapper = function DayColumnWrapper(_ref) {
    var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      innerRef = _ref.innerRef
    return /*#__PURE__*/ React__default.default.createElement(
      'div',
      {
        className: className,
        style: style,
        ref: innerRef,
      },
      children
    )
  }
  var DayColumnWrapper$1 = /*#__PURE__*/ React__default.default.forwardRef(
    function (props, ref) {
      return /*#__PURE__*/ React__default.default.createElement(
        DayColumnWrapper,
        Object.assign({}, props, {
          innerRef: ref,
        })
      )
    }
  )

  var _excluded$5 = ['dayProp'],
    _excluded2$1 = ['eventContainerWrapper']
  var DayColumn = /*#__PURE__*/ (function (_React$Component) {
    _inherits(DayColumn, _React$Component)
    var _super = _createSuper(DayColumn)
    function DayColumn() {
      var _this
      _classCallCheck(this, DayColumn)
      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }
      _this = _super.call.apply(_super, [this].concat(_args))
      _this.state = {
        selecting: false,
        timeIndicatorPosition: null,
      }
      _this.intervalTriggered = false
      _this.renderEvents = function (_ref) {
        var events = _ref.events,
          isBackgroundEvent = _ref.isBackgroundEvent
        var _this$props = _this.props,
          rtl = _this$props.rtl,
          selected = _this$props.selected,
          accessors = _this$props.accessors,
          localizer = _this$props.localizer,
          getters = _this$props.getters,
          components = _this$props.components,
          step = _this$props.step,
          timeslots = _this$props.timeslots,
          dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm,
          resizable = _this$props.resizable
        var _assertThisInitialize = _assertThisInitialized(_this),
          slotMetrics = _assertThisInitialize.slotMetrics
        var messages = localizer.messages
        var styledEvents = getStyledEvents({
          events: events,
          accessors: accessors,
          slotMetrics: slotMetrics,
          minimumStartDifference: Math.ceil((step * timeslots) / 2),
          dayLayoutAlgorithm: dayLayoutAlgorithm,
        })
        return styledEvents.map(function (_ref2, idx) {
          var event = _ref2.event,
            style = _ref2.style
          var end = accessors.end(event)
          var start = accessors.start(event)
          var format = 'eventTimeRangeFormat'
          var label
          var startsBeforeDay = slotMetrics.startsBeforeDay(start)
          var startsAfterDay = slotMetrics.startsAfterDay(end)
          if (startsBeforeDay) format = 'eventTimeRangeEndFormat'
          else if (startsAfterDay) format = 'eventTimeRangeStartFormat'
          if (startsBeforeDay && startsAfterDay) label = messages.allDay
          else
            label = localizer.format(
              {
                start: start,
                end: end,
              },
              format
            )
          var continuesPrior =
            startsBeforeDay || slotMetrics.startsBefore(start)
          var continuesAfter = startsAfterDay || slotMetrics.startsAfter(end)
          return /*#__PURE__*/ React__default.default.createElement(
            TimeGridEvent,
            {
              style: style,
              event: event,
              label: label,
              key: 'evt_' + idx,
              getters: getters,
              rtl: rtl,
              components: components,
              continuesPrior: continuesPrior,
              continuesAfter: continuesAfter,
              accessors: accessors,
              selected: isSelected(event, selected),
              onClick: function onClick(e) {
                return _this._select(event, e)
              },
              onDoubleClick: function onDoubleClick(e) {
                return _this._doubleClick(event, e)
              },
              isBackgroundEvent: isBackgroundEvent,
              onKeyPress: function onKeyPress(e) {
                return _this._keyPress(event, e)
              },
              resizable: resizable,
            }
          )
        })
      }
      _this._selectable = function () {
        var node = _this.containerRef.current
        var _this$props2 = _this.props,
          longPressThreshold = _this$props2.longPressThreshold,
          localizer = _this$props2.localizer
        var selector = (_this._selector = new Selection(
          function () {
            return node
          },
          {
            longPressThreshold: longPressThreshold,
          }
        ))
        var maybeSelect = function maybeSelect(box) {
          var onSelecting = _this.props.onSelecting
          var current = _this.state || {}
          var state = selectionState(box)
          var start = state.startDate,
            end = state.endDate
          if (onSelecting) {
            if (
              (localizer.eq(current.startDate, start, 'minutes') &&
                localizer.eq(current.endDate, end, 'minutes')) ||
              onSelecting({
                start: start,
                end: end,
                resourceId: _this.props.resource,
              }) === false
            )
              return
          }
          if (
            _this.state.start !== state.start ||
            _this.state.end !== state.end ||
            _this.state.selecting !== state.selecting
          ) {
            _this.setState(state)
          }
        }
        var selectionState = function selectionState(point) {
          var currentSlot = _this.slotMetrics.closestSlotFromPoint(
            point,
            getBoundsForNode(node)
          )
          if (!_this.state.selecting) {
            _this._initialSlot = currentSlot
          }
          var initialSlot = _this._initialSlot
          if (localizer.lte(initialSlot, currentSlot)) {
            currentSlot = _this.slotMetrics.nextSlot(currentSlot)
          } else if (localizer.gt(initialSlot, currentSlot)) {
            initialSlot = _this.slotMetrics.nextSlot(initialSlot)
          }
          var selectRange = _this.slotMetrics.getRange(
            localizer.min(initialSlot, currentSlot),
            localizer.max(initialSlot, currentSlot)
          )
          return _objectSpread2(
            _objectSpread2({}, selectRange),
            {},
            {
              selecting: true,
              top: ''.concat(selectRange.top, '%'),
              height: ''.concat(selectRange.height, '%'),
            }
          )
        }
        var selectorClicksHandler = function selectorClicksHandler(
          box,
          actionType
        ) {
          if (!isEvent(_this.containerRef.current, box)) {
            var _selectionState = selectionState(box),
              startDate = _selectionState.startDate,
              endDate = _selectionState.endDate
            _this._selectSlot({
              startDate: startDate,
              endDate: endDate,
              action: actionType,
              box: box,
            })
          }
          _this.setState({
            selecting: false,
          })
        }
        selector.on('selecting', maybeSelect)
        selector.on('selectStart', maybeSelect)
        selector.on('beforeSelect', function (box) {
          if (_this.props.selectable !== 'ignoreEvents') return
          return !isEvent(_this.containerRef.current, box)
        })
        selector.on('click', function (box) {
          return selectorClicksHandler(box, 'click')
        })
        selector.on('doubleClick', function (box) {
          return selectorClicksHandler(box, 'doubleClick')
        })
        selector.on('select', function (bounds) {
          if (_this.state.selecting) {
            _this._selectSlot(
              _objectSpread2(
                _objectSpread2({}, _this.state),
                {},
                {
                  action: 'select',
                  bounds: bounds,
                }
              )
            )
            _this.setState({
              selecting: false,
            })
          }
        })
        selector.on('reset', function () {
          if (_this.state.selecting) {
            _this.setState({
              selecting: false,
            })
          }
        })
      }
      _this._teardownSelectable = function () {
        if (!_this._selector) return
        _this._selector.teardown()
        _this._selector = null
      }
      _this._selectSlot = function (_ref3) {
        var startDate = _ref3.startDate,
          endDate = _ref3.endDate,
          action = _ref3.action,
          bounds = _ref3.bounds,
          box = _ref3.box
        var current = startDate,
          slots = []
        while (_this.props.localizer.lte(current, endDate)) {
          slots.push(current)
          current = new Date(+current + _this.props.step * 60 * 1000) // using Date ensures not to create an endless loop the day DST begins
        }

        notify(_this.props.onSelectSlot, {
          slots: slots,
          start: startDate,
          end: endDate,
          resourceId: _this.props.resource,
          action: action,
          bounds: bounds,
          box: box,
        })
      }
      _this._select = function () {
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2]
        }
        notify(_this.props.onSelectEvent, args)
      }
      _this._doubleClick = function () {
        for (
          var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3] = arguments[_key3]
        }
        notify(_this.props.onDoubleClickEvent, args)
      }
      _this._keyPress = function () {
        for (
          var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          args[_key4] = arguments[_key4]
        }
        notify(_this.props.onKeyPressEvent, args)
      }
      _this.slotMetrics = getSlotMetrics(_this.props)
      _this.containerRef = /*#__PURE__*/ React.createRef()
      return _this
    }
    _createClass(DayColumn, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props.selectable && this._selectable()
          if (this.props.isNow) {
            this.setTimeIndicatorPositionUpdateInterval()
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._teardownSelectable()
          this.clearTimeIndicatorInterval()
        },
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          if (nextProps.selectable && !this.props.selectable) this._selectable()
          if (!nextProps.selectable && this.props.selectable)
            this._teardownSelectable()
          this.slotMetrics = this.slotMetrics.update(nextProps)
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          var _this$props3 = this.props,
            getNow = _this$props3.getNow,
            isNow = _this$props3.isNow,
            localizer = _this$props3.localizer,
            date = _this$props3.date,
            min = _this$props3.min,
            max = _this$props3.max
          var getNowChanged = localizer.neq(
            prevProps.getNow(),
            getNow(),
            'minutes'
          )
          if (prevProps.isNow !== isNow || getNowChanged) {
            this.clearTimeIndicatorInterval()
            if (isNow) {
              var tail =
                !getNowChanged &&
                localizer.eq(prevProps.date, date, 'minutes') &&
                prevState.timeIndicatorPosition ===
                  this.state.timeIndicatorPosition
              this.setTimeIndicatorPositionUpdateInterval(tail)
            }
          } else if (
            isNow &&
            (localizer.neq(prevProps.min, min, 'minutes') ||
              localizer.neq(prevProps.max, max, 'minutes'))
          ) {
            this.positionTimeIndicator()
          }
        },

        /**
         * @param tail {Boolean} - whether `positionTimeIndicator` call should be
         *   deferred or called upon setting interval (`true` - if deferred);
         */
      },
      {
        key: 'setTimeIndicatorPositionUpdateInterval',
        value: function setTimeIndicatorPositionUpdateInterval() {
          var _this2 = this
          var tail =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : false
          if (!this.intervalTriggered && !tail) {
            this.positionTimeIndicator()
          }
          this._timeIndicatorTimeout = window.setTimeout(function () {
            _this2.intervalTriggered = true
            _this2.positionTimeIndicator()
            _this2.setTimeIndicatorPositionUpdateInterval()
          }, 60000)
        },
      },
      {
        key: 'clearTimeIndicatorInterval',
        value: function clearTimeIndicatorInterval() {
          this.intervalTriggered = false
          window.clearTimeout(this._timeIndicatorTimeout)
        },
      },
      {
        key: 'positionTimeIndicator',
        value: function positionTimeIndicator() {
          var _this$props4 = this.props,
            min = _this$props4.min,
            max = _this$props4.max,
            getNow = _this$props4.getNow
          var current = getNow()
          if (current >= min && current <= max) {
            var top = this.slotMetrics.getCurrentTimePosition(current)
            this.intervalTriggered = true
            this.setState({
              timeIndicatorPosition: top,
            })
          } else {
            this.clearTimeIndicatorInterval()
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props5 = this.props,
            date = _this$props5.date,
            max = _this$props5.max,
            rtl = _this$props5.rtl,
            isNow = _this$props5.isNow,
            resource = _this$props5.resource,
            accessors = _this$props5.accessors,
            localizer = _this$props5.localizer,
            _this$props5$getters = _this$props5.getters,
            dayProp = _this$props5$getters.dayProp,
            getters = _objectWithoutProperties(
              _this$props5$getters,
              _excluded$5
            ),
            _this$props5$componen = _this$props5.components,
            EventContainer = _this$props5$componen.eventContainerWrapper,
            components = _objectWithoutProperties(
              _this$props5$componen,
              _excluded2$1
            )
          var slotMetrics = this.slotMetrics
          var _this$state = this.state,
            selecting = _this$state.selecting,
            top = _this$state.top,
            height = _this$state.height,
            startDate = _this$state.startDate,
            endDate = _this$state.endDate
          var selectDates = {
            start: startDate,
            end: endDate,
          }
          var _dayProp = dayProp(max),
            className = _dayProp.className,
            style = _dayProp.style
          var DayColumnWrapperComponent =
            components.dayColumnWrapper || DayColumnWrapper$1
          return /*#__PURE__*/ React__default.default.createElement(
            DayColumnWrapperComponent,
            {
              ref: this.containerRef,
              date: date,
              style: style,
              className: clsx(
                className,
                'rbc-day-slot',
                'rbc-time-column',
                isNow && 'rbc-now',
                isNow && 'rbc-today',
                // WHY
                selecting && 'rbc-slot-selecting'
              ),
              slotMetrics: slotMetrics,
            },
            slotMetrics.groups.map(function (grp, idx) {
              return /*#__PURE__*/ React__default.default.createElement(
                TimeSlotGroup,
                {
                  key: idx,
                  group: grp,
                  resource: resource,
                  getters: getters,
                  components: components,
                }
              )
            }),
            /*#__PURE__*/ React__default.default.createElement(
              EventContainer,
              {
                localizer: localizer,
                resource: resource,
                accessors: accessors,
                getters: getters,
                components: components,
                slotMetrics: slotMetrics,
              },
              /*#__PURE__*/ React__default.default.createElement(
                'div',
                {
                  className: clsx('rbc-events-container', rtl && 'rtl'),
                },
                this.renderEvents({
                  events: this.props.backgroundEvents,
                  isBackgroundEvent: true,
                }),
                this.renderEvents({
                  events: this.props.events,
                })
              )
            ),
            selecting &&
              /*#__PURE__*/ React__default.default.createElement(
                'div',
                {
                  className: 'rbc-slot-selection',
                  style: {
                    top: top,
                    height: height,
                  },
                },
                /*#__PURE__*/ React__default.default.createElement(
                  'span',
                  null,
                  localizer.format(selectDates, 'selectRangeFormat')
                )
              ),
            isNow &&
              this.intervalTriggered &&
              /*#__PURE__*/ React__default.default.createElement('div', {
                className: 'rbc-current-time-indicator',
                style: {
                  top: ''.concat(this.state.timeIndicatorPosition, '%'),
                },
              })
          )
        },
      },
    ])
    return DayColumn
  })(React__default.default.Component)
  DayColumn.defaultProps = {
    dragThroughEvents: true,
    timeslots: 2,
  }

  /**
   * Since the TimeGutter only displays the 'times' of slots in a day, and is separate
   * from the Day Columns themselves, we check to see if the range contains an offset difference
   * and, if so, change the beginning and end 'date' by a day to properly display the slots times
   * used.
   */
  function adjustForDST(_ref) {
    var min = _ref.min,
      max = _ref.max,
      localizer = _ref.localizer
    if (localizer.getTimezoneOffset(min) !== localizer.getTimezoneOffset(max)) {
      return {
        start: localizer.add(min, -1, 'day'),
        end: localizer.add(max, -1, 'day'),
      }
    }
    return {
      start: min,
      end: max,
    }
  }
  var TimeGutter = function TimeGutter(_ref2) {
    var min = _ref2.min,
      max = _ref2.max,
      timeslots = _ref2.timeslots,
      step = _ref2.step,
      localizer = _ref2.localizer,
      getNow = _ref2.getNow,
      resource = _ref2.resource,
      components = _ref2.components,
      getters = _ref2.getters,
      gutterRef = _ref2.gutterRef
    var TimeGutterWrapper = components.timeGutterWrapper
    var _useMemo = React.useMemo(
        function () {
          return adjustForDST({
            min: min,
            max: max,
            localizer: localizer,
          })
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          min === null || min === void 0 ? void 0 : min.toISOString(),
          max === null || max === void 0 ? void 0 : max.toISOString(),
          localizer,
        ]
      ),
      start = _useMemo.start,
      end = _useMemo.end
    var _useState = React.useState(
        getSlotMetrics({
          min: start,
          max: end,
          timeslots: timeslots,
          step: step,
          localizer: localizer,
        })
      ),
      _useState2 = _slicedToArray(_useState, 2),
      slotMetrics = _useState2[0],
      setSlotMetrics = _useState2[1]
    React.useEffect(
      function () {
        if (slotMetrics) {
          setSlotMetrics(
            slotMetrics.update({
              min: start,
              max: end,
              timeslots: timeslots,
              step: step,
              localizer: localizer,
            })
          )
        }
        /**
         * We don't want this to fire when slotMetrics is updated as it would recursively bomb
         */
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [
        start === null || start === void 0 ? void 0 : start.toISOString(),
        end === null || end === void 0 ? void 0 : end.toISOString(),
        timeslots,
        step,
      ]
    )
    var renderSlot = React.useCallback(
      function (value, idx) {
        if (idx) return null // don't return the first (0) idx

        var isNow = slotMetrics.dateIsInGroup(getNow(), idx)
        return /*#__PURE__*/ React__default.default.createElement(
          'span',
          {
            className: clsx('rbc-label', isNow && 'rbc-now'),
          },
          localizer.format(value, 'timeGutterFormat')
        )
      },
      [slotMetrics, localizer, getNow]
    )
    return /*#__PURE__*/ React__default.default.createElement(
      TimeGutterWrapper,
      {
        slotMetrics: slotMetrics,
      },
      /*#__PURE__*/ React__default.default.createElement(
        'div',
        {
          className: 'rbc-time-gutter rbc-time-column',
          ref: gutterRef,
        },
        slotMetrics.groups.map(function (grp, idx) {
          return /*#__PURE__*/ React__default.default.createElement(
            TimeSlotGroup,
            {
              key: idx,
              group: grp,
              resource: resource,
              components: components,
              renderSlot: renderSlot,
              getters: getters,
            }
          )
        })
      )
    )
  }
  var TimeGutter$1 = /*#__PURE__*/ React__default.default.forwardRef(function (
    props,
    ref
  ) {
    return /*#__PURE__*/ React__default.default.createElement(
      TimeGutter,
      Object.assign(
        {
          gutterRef: ref,
        },
        props
      )
    )
  })

  /**
   * Returns the width of a given element.
   *
   * @param node the element
   * @param client whether to use `clientWidth` if possible
   */

  function getWidth(node, client) {
    var win = isWindow(node)
    return win
      ? win.innerWidth
      : client
      ? node.clientWidth
      : offset$2(node).width
  }

  var ResourceHeader = function ResourceHeader(_ref) {
    var label = _ref.label
    return /*#__PURE__*/ React__default.default.createElement(
      React__default.default.Fragment,
      null,
      label
    )
  }
  ResourceHeader.propTypes =
    'development' !== 'production'
      ? {
          label: propTypesExports.node,
          index: propTypesExports.number,
          resource: propTypesExports.object,
        }
      : {}

  var TimeGridHeader = /*#__PURE__*/ (function (_React$Component) {
    _inherits(TimeGridHeader, _React$Component)
    var _super = _createSuper(TimeGridHeader)
    function TimeGridHeader() {
      var _this
      _classCallCheck(this, TimeGridHeader)
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }
      _this = _super.call.apply(_super, [this].concat(args))
      _this.handleHeaderClick = function (date, view, e) {
        e.preventDefault()
        notify(_this.props.onDrillDown, [date, view])
      }
      _this.renderRow = function (resource) {
        var _this$props = _this.props,
          events = _this$props.events,
          rtl = _this$props.rtl,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          range = _this$props.range,
          getters = _this$props.getters,
          localizer = _this$props.localizer,
          accessors = _this$props.accessors,
          components = _this$props.components,
          resizable = _this$props.resizable
        var resourceId = accessors.resourceId(resource)
        var eventsToDisplay = resource
          ? events.filter(function (event) {
              return accessors.resource(event) === resourceId
            })
          : events
        return /*#__PURE__*/ React__default.default.createElement(
          DateContentRow,
          {
            isAllDay: true,
            rtl: rtl,
            getNow: getNow,
            minRows: 2,
            range: range,
            events: eventsToDisplay,
            resourceId: resourceId,
            className: 'rbc-allday-cell',
            selectable: selectable,
            selected: _this.props.selected,
            components: components,
            accessors: accessors,
            getters: getters,
            localizer: localizer,
            onSelect: _this.props.onSelectEvent,
            onDoubleClick: _this.props.onDoubleClickEvent,
            onKeyPress: _this.props.onKeyPressEvent,
            onSelectSlot: _this.props.onSelectSlot,
            longPressThreshold: _this.props.longPressThreshold,
            resizable: resizable,
          }
        )
      }
      return _this
    }
    _createClass(TimeGridHeader, [
      {
        key: 'renderHeaderCells',
        value: function renderHeaderCells(range) {
          var _this2 = this
          var _this$props2 = this.props,
            localizer = _this$props2.localizer,
            getDrilldownView = _this$props2.getDrilldownView,
            getNow = _this$props2.getNow,
            dayProp = _this$props2.getters.dayProp,
            _this$props2$componen = _this$props2.components.header,
            HeaderComponent =
              _this$props2$componen === void 0 ? Header : _this$props2$componen
          var today = getNow()
          return range.map(function (date, i) {
            var drilldownView = getDrilldownView(date)
            var label = localizer.format(date, 'dayFormat')
            var _dayProp = dayProp(date),
              className = _dayProp.className,
              style = _dayProp.style
            var header = /*#__PURE__*/ React__default.default.createElement(
              HeaderComponent,
              {
                date: date,
                label: label,
                localizer: localizer,
              }
            )
            return /*#__PURE__*/ React__default.default.createElement(
              'div',
              {
                key: i,
                style: style,
                className: clsx(
                  'rbc-header',
                  className,
                  localizer.isSameDate(date, today) && 'rbc-today'
                ),
              },
              drilldownView
                ? /*#__PURE__*/ React__default.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'rbc-button-link',
                      onClick: function onClick(e) {
                        return _this2.handleHeaderClick(date, drilldownView, e)
                      },
                    },
                    header
                  )
                : /*#__PURE__*/ React__default.default.createElement(
                    'span',
                    null,
                    header
                  )
            )
          })
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this3 = this
          var _this$props3 = this.props,
            width = _this$props3.width,
            rtl = _this$props3.rtl,
            resources = _this$props3.resources,
            range = _this$props3.range,
            events = _this$props3.events,
            getNow = _this$props3.getNow,
            accessors = _this$props3.accessors,
            selectable = _this$props3.selectable,
            components = _this$props3.components,
            getters = _this$props3.getters,
            scrollRef = _this$props3.scrollRef,
            localizer = _this$props3.localizer,
            isOverflowing = _this$props3.isOverflowing,
            _this$props3$componen = _this$props3.components,
            TimeGutterHeader = _this$props3$componen.timeGutterHeader,
            _this$props3$componen2 = _this$props3$componen.resourceHeader,
            ResourceHeaderComponent =
              _this$props3$componen2 === void 0
                ? ResourceHeader
                : _this$props3$componen2,
            resizable = _this$props3.resizable
          var style = {}
          if (isOverflowing) {
            style[rtl ? 'marginLeft' : 'marginRight'] = ''.concat(
              scrollbarSize() - 1,
              'px'
            )
          }
          var groupedEvents = resources.groupEvents(events)
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              style: style,
              ref: scrollRef,
              className: clsx(
                'rbc-time-header',
                isOverflowing && 'rbc-overflowing'
              ),
            },
            /*#__PURE__*/ React__default.default.createElement(
              'div',
              {
                className: 'rbc-label rbc-time-header-gutter',
                style: {
                  width: width,
                  minWidth: width,
                  maxWidth: width,
                },
              },
              TimeGutterHeader &&
                /*#__PURE__*/ React__default.default.createElement(
                  TimeGutterHeader,
                  null
                )
            ),
            resources.map(function (_ref, idx) {
              var _ref2 = _slicedToArray(_ref, 2),
                id = _ref2[0],
                resource = _ref2[1]
              return /*#__PURE__*/ React__default.default.createElement(
                'div',
                {
                  className: 'rbc-time-header-content',
                  key: id || idx,
                },
                resource &&
                  /*#__PURE__*/ React__default.default.createElement(
                    'div',
                    {
                      className: 'rbc-row rbc-row-resource',
                      key: 'resource_'.concat(idx),
                    },
                    /*#__PURE__*/ React__default.default.createElement(
                      'div',
                      {
                        className: 'rbc-header',
                      },
                      /*#__PURE__*/ React__default.default.createElement(
                        ResourceHeaderComponent,
                        {
                          index: idx,
                          label: accessors.resourceTitle(resource),
                          resource: resource,
                        }
                      )
                    )
                  ),
                /*#__PURE__*/ React__default.default.createElement(
                  'div',
                  {
                    className: 'rbc-row rbc-time-header-cell'.concat(
                      range.length <= 1
                        ? ' rbc-time-header-cell-single-day'
                        : ''
                    ),
                  },
                  _this3.renderHeaderCells(range)
                ),
                /*#__PURE__*/ React__default.default.createElement(
                  DateContentRow,
                  {
                    isAllDay: true,
                    rtl: rtl,
                    getNow: getNow,
                    minRows: 2,
                    range: range,
                    events: groupedEvents.get(id) || [],
                    resourceId: resource && id,
                    className: 'rbc-allday-cell',
                    selectable: selectable,
                    selected: _this3.props.selected,
                    components: components,
                    accessors: accessors,
                    getters: getters,
                    localizer: localizer,
                    onSelect: _this3.props.onSelectEvent,
                    onDoubleClick: _this3.props.onDoubleClickEvent,
                    onKeyPress: _this3.props.onKeyPressEvent,
                    onSelectSlot: _this3.props.onSelectSlot,
                    longPressThreshold: _this3.props.longPressThreshold,
                    resizable: resizable,
                  }
                )
              )
            })
          )
        },
      },
    ])
    return TimeGridHeader
  })(React__default.default.Component)

  var NONE = {}
  function Resources(resources, accessors) {
    return {
      map: function map(fn) {
        if (!resources) return [fn([NONE, null], 0)]
        return resources.map(function (resource, idx) {
          return fn([accessors.resourceId(resource), resource], idx)
        })
      },
      groupEvents: function groupEvents(events) {
        var eventsByResource = new Map()
        if (!resources) {
          // Return all events if resources are not provided
          eventsByResource.set(NONE, events)
          return eventsByResource
        }
        events.forEach(function (event) {
          var id = accessors.resource(event) || NONE
          var resourceEvents = eventsByResource.get(id) || []
          resourceEvents.push(event)
          eventsByResource.set(id, resourceEvents)
        })
        return eventsByResource
      },
    }
  }

  var TimeGrid = /*#__PURE__*/ (function (_Component) {
    _inherits(TimeGrid, _Component)
    var _super = _createSuper(TimeGrid)
    function TimeGrid(props) {
      var _this
      _classCallCheck(this, TimeGrid)
      _this = _super.call(this, props)
      _this.handleScroll = function (e) {
        if (_this.scrollRef.current) {
          _this.scrollRef.current.scrollLeft = e.target.scrollLeft
        }
      }
      _this.handleResize = function () {
        cancel(_this.rafHandle)
        _this.rafHandle = request(_this.checkOverflow)
      }
      _this.handleSelectAlldayEvent = function () {
        //cancel any pending selections so only the event click goes through.
        _this.clearSelection()
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key]
        }
        notify(_this.props.onSelectEvent, args)
      }
      _this.handleSelectAllDaySlot = function (slots, slotInfo) {
        var onSelectSlot = _this.props.onSelectSlot
        var start = new Date(slots[0])
        var end = new Date(slots[slots.length - 1])
        end.setDate(slots[slots.length - 1].getDate() + 1)
        notify(onSelectSlot, {
          slots: slots,
          start: start,
          end: end,
          action: slotInfo.action,
          resourceId: slotInfo.resourceId,
        })
      }
      _this.checkOverflow = function () {
        if (_this._updatingOverflow) return
        var content = _this.contentRef.current
        var isOverflowing = content.scrollHeight > content.clientHeight
        if (_this.state.isOverflowing !== isOverflowing) {
          _this._updatingOverflow = true
          _this.setState(
            {
              isOverflowing: isOverflowing,
            },
            function () {
              _this._updatingOverflow = false
            }
          )
        }
      }
      _this.memoizedResources = memoizeOne(function (resources, accessors) {
        return Resources(resources, accessors)
      })
      _this.state = {
        gutterWidth: undefined,
        isOverflowing: null,
      }
      _this.scrollRef = /*#__PURE__*/ React__default.default.createRef()
      _this.contentRef = /*#__PURE__*/ React__default.default.createRef()
      _this._scrollRatio = null
      _this.gutterRef = /*#__PURE__*/ React.createRef()
      return _this
    }
    _createClass(TimeGrid, [
      {
        key: 'getSnapshotBeforeUpdate',
        value: function getSnapshotBeforeUpdate() {
          this.checkOverflow()
          return null
        },
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.width == null) {
            this.measureGutter()
          }
          this.calculateScroll()
          this.applyScroll()
          window.addEventListener('resize', this.handleResize)
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.handleResize)
          cancel(this.rafHandle)
          if (this.measureGutterAnimationFrameRequest) {
            window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest)
          }
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.applyScroll()
        },
      },
      {
        key: 'renderEvents',
        value: function renderEvents(range, events, backgroundEvents, now) {
          var _this2 = this
          var _this$props = this.props,
            min = _this$props.min,
            max = _this$props.max,
            components = _this$props.components,
            accessors = _this$props.accessors,
            localizer = _this$props.localizer,
            dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm
          var resources = this.memoizedResources(
            this.props.resources,
            accessors
          )
          var groupedEvents = resources.groupEvents(events)
          var groupedBackgroundEvents = resources.groupEvents(backgroundEvents)
          return resources.map(function (_ref, i) {
            var _ref2 = _slicedToArray(_ref, 2),
              id = _ref2[0],
              resource = _ref2[1]
            return range.map(function (date, jj) {
              var daysEvents = (groupedEvents.get(id) || []).filter(function (
                event
              ) {
                return localizer.inRange(
                  date,
                  accessors.start(event),
                  accessors.end(event),
                  'day'
                )
              })
              var daysBackgroundEvents = (
                groupedBackgroundEvents.get(id) || []
              ).filter(function (event) {
                return localizer.inRange(
                  date,
                  accessors.start(event),
                  accessors.end(event),
                  'day'
                )
              })
              return /*#__PURE__*/ React__default.default.createElement(
                DayColumn,
                Object.assign({}, _this2.props, {
                  localizer: localizer,
                  min: localizer.merge(date, min),
                  max: localizer.merge(date, max),
                  resource: resource && id,
                  components: components,
                  isNow: localizer.isSameDate(date, now),
                  key: i + '-' + jj,
                  date: date,
                  events: daysEvents,
                  backgroundEvents: daysBackgroundEvents,
                  dayLayoutAlgorithm: dayLayoutAlgorithm,
                })
              )
            })
          })
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            events = _this$props2.events,
            backgroundEvents = _this$props2.backgroundEvents,
            range = _this$props2.range,
            width = _this$props2.width,
            rtl = _this$props2.rtl,
            selected = _this$props2.selected,
            getNow = _this$props2.getNow,
            resources = _this$props2.resources,
            components = _this$props2.components,
            accessors = _this$props2.accessors,
            getters = _this$props2.getters,
            localizer = _this$props2.localizer,
            min = _this$props2.min,
            max = _this$props2.max,
            showMultiDayTimes = _this$props2.showMultiDayTimes,
            longPressThreshold = _this$props2.longPressThreshold,
            resizable = _this$props2.resizable
          width = width || this.state.gutterWidth
          var start = range[0],
            end = range[range.length - 1]
          this.slots = range.length
          var allDayEvents = [],
            rangeEvents = [],
            rangeBackgroundEvents = []
          events.forEach(function (event) {
            if (inRange(event, start, end, accessors, localizer)) {
              var eStart = accessors.start(event),
                eEnd = accessors.end(event)
              if (
                accessors.allDay(event) ||
                localizer.startAndEndAreDateOnly(eStart, eEnd) ||
                (!showMultiDayTimes && !localizer.isSameDate(eStart, eEnd))
              ) {
                allDayEvents.push(event)
              } else {
                rangeEvents.push(event)
              }
            }
          })
          backgroundEvents.forEach(function (event) {
            if (inRange(event, start, end, accessors, localizer)) {
              rangeBackgroundEvents.push(event)
            }
          })
          allDayEvents.sort(function (a, b) {
            return sortEvents(a, b, accessors, localizer)
          })
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: clsx(
                'rbc-time-view',
                resources && 'rbc-time-view-resources'
              ),
            },
            /*#__PURE__*/ React__default.default.createElement(TimeGridHeader, {
              range: range,
              events: allDayEvents,
              width: width,
              rtl: rtl,
              getNow: getNow,
              localizer: localizer,
              selected: selected,
              resources: this.memoizedResources(resources, accessors),
              selectable: this.props.selectable,
              accessors: accessors,
              getters: getters,
              components: components,
              scrollRef: this.scrollRef,
              isOverflowing: this.state.isOverflowing,
              longPressThreshold: longPressThreshold,
              onSelectSlot: this.handleSelectAllDaySlot,
              onSelectEvent: this.handleSelectAlldayEvent,
              onDoubleClickEvent: this.props.onDoubleClickEvent,
              onKeyPressEvent: this.props.onKeyPressEvent,
              onDrillDown: this.props.onDrillDown,
              getDrilldownView: this.props.getDrilldownView,
              resizable: resizable,
            }),
            /*#__PURE__*/ React__default.default.createElement(
              'div',
              {
                ref: this.contentRef,
                className: 'rbc-time-content',
                onScroll: this.handleScroll,
              },
              /*#__PURE__*/ React__default.default.createElement(TimeGutter$1, {
                date: start,
                ref: this.gutterRef,
                localizer: localizer,
                min: localizer.merge(start, min),
                max: localizer.merge(start, max),
                step: this.props.step,
                getNow: this.props.getNow,
                timeslots: this.props.timeslots,
                components: components,
                className: 'rbc-time-gutter',
                getters: getters,
              }),
              this.renderEvents(
                range,
                rangeEvents,
                rangeBackgroundEvents,
                getNow()
              )
            )
          )
        },
      },
      {
        key: 'clearSelection',
        value: function clearSelection() {
          clearTimeout(this._selectTimer)
          this._pendingSelection = []
        },
      },
      {
        key: 'measureGutter',
        value: function measureGutter() {
          var _this3 = this
          if (this.measureGutterAnimationFrameRequest) {
            window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest)
          }
          this.measureGutterAnimationFrameRequest =
            window.requestAnimationFrame(function () {
              var _this3$gutterRef
              var width =
                (_this3$gutterRef = _this3.gutterRef) !== null &&
                _this3$gutterRef !== void 0 &&
                _this3$gutterRef.current
                  ? getWidth(_this3.gutterRef.current)
                  : undefined
              if (width && _this3.state.gutterWidth !== width) {
                _this3.setState({
                  gutterWidth: width,
                })
              }
            })
        },
      },
      {
        key: 'applyScroll',
        value: function applyScroll() {
          // If auto-scroll is disabled, we don't actually apply the scroll
          if (
            this._scrollRatio != null &&
            this.props.enableAutoScroll === true
          ) {
            var content = this.contentRef.current
            content.scrollTop = content.scrollHeight * this._scrollRatio
            // Only do this once
            this._scrollRatio = null
          }
        },
      },
      {
        key: 'calculateScroll',
        value: function calculateScroll() {
          var props =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props
          var min = props.min,
            max = props.max,
            scrollToTime = props.scrollToTime,
            localizer = props.localizer
          var diffMillis = scrollToTime - localizer.startOf(scrollToTime, 'day')
          var totalMillis = localizer.diff(min, max, 'milliseconds')
          this._scrollRatio = diffMillis / totalMillis
        },
      },
    ])
    return TimeGrid
  })(React.Component)
  TimeGrid.defaultProps = {
    step: 30,
    timeslots: 2,
  }

  var _excluded$4 = [
    'date',
    'localizer',
    'min',
    'max',
    'scrollToTime',
    'enableAutoScroll',
  ]
  var Day = /*#__PURE__*/ (function (_React$Component) {
    _inherits(Day, _React$Component)
    var _super = _createSuper(Day)
    function Day() {
      _classCallCheck(this, Day)
      return _super.apply(this, arguments)
    }
    _createClass(Day, [
      {
        key: 'render',
        value: function render() {
          /**
           * This allows us to default min, max, and scrollToTime
           * using our localizer. This is necessary until such time
           * as TODO: TimeGrid is converted to a functional component.
           */
          var _this$props = this.props,
            date = _this$props.date,
            localizer = _this$props.localizer,
            _this$props$min = _this$props.min,
            min =
              _this$props$min === void 0
                ? localizer.startOf(new Date(), 'day')
                : _this$props$min,
            _this$props$max = _this$props.max,
            max =
              _this$props$max === void 0
                ? localizer.endOf(new Date(), 'day')
                : _this$props$max,
            _this$props$scrollToT = _this$props.scrollToTime,
            scrollToTime =
              _this$props$scrollToT === void 0
                ? localizer.startOf(new Date(), 'day')
                : _this$props$scrollToT,
            _this$props$enableAut = _this$props.enableAutoScroll,
            enableAutoScroll =
              _this$props$enableAut === void 0 ? true : _this$props$enableAut,
            props = _objectWithoutProperties(_this$props, _excluded$4)
          var range = Day.range(date, {
            localizer: localizer,
          })
          return /*#__PURE__*/ React__default.default.createElement(
            TimeGrid,
            Object.assign({}, props, {
              range: range,
              eventOffset: 10,
              localizer: localizer,
              min: min,
              max: max,
              scrollToTime: scrollToTime,
              enableAutoScroll: enableAutoScroll,
            })
          )
        },
      },
    ])
    return Day
  })(React__default.default.Component)
  Day.range = function (date, _ref) {
    var localizer = _ref.localizer
    return [localizer.startOf(date, 'day')]
  }
  Day.navigate = function (date, action, _ref2) {
    var localizer = _ref2.localizer
    switch (action) {
      case navigate.PREVIOUS:
        return localizer.add(date, -1, 'day')
      case navigate.NEXT:
        return localizer.add(date, 1, 'day')
      default:
        return date
    }
  }
  Day.title = function (date, _ref3) {
    var localizer = _ref3.localizer
    return localizer.format(date, 'dayHeaderFormat')
  }

  function _toArray(arr) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableRest()
    )
  }

  var _excluded$3 = [
    'date',
    'localizer',
    'min',
    'max',
    'scrollToTime',
    'enableAutoScroll',
  ]
  var Week = /*#__PURE__*/ (function (_React$Component) {
    _inherits(Week, _React$Component)
    var _super = _createSuper(Week)
    function Week() {
      _classCallCheck(this, Week)
      return _super.apply(this, arguments)
    }
    _createClass(Week, [
      {
        key: 'render',
        value: function render() {
          /**
           * This allows us to default min, max, and scrollToTime
           * using our localizer. This is necessary until such time
           * as TimeGrid is converted to a functional component.
           */
          var _this$props = this.props,
            date = _this$props.date,
            localizer = _this$props.localizer,
            _this$props$min = _this$props.min,
            min =
              _this$props$min === void 0
                ? localizer.startOf(new Date(), 'day')
                : _this$props$min,
            _this$props$max = _this$props.max,
            max =
              _this$props$max === void 0
                ? localizer.endOf(new Date(), 'day')
                : _this$props$max,
            _this$props$scrollToT = _this$props.scrollToTime,
            scrollToTime =
              _this$props$scrollToT === void 0
                ? localizer.startOf(new Date(), 'day')
                : _this$props$scrollToT,
            _this$props$enableAut = _this$props.enableAutoScroll,
            enableAutoScroll =
              _this$props$enableAut === void 0 ? true : _this$props$enableAut,
            props = _objectWithoutProperties(_this$props, _excluded$3)
          var range = Week.range(date, this.props)
          return /*#__PURE__*/ React__default.default.createElement(
            TimeGrid,
            Object.assign({}, props, {
              range: range,
              eventOffset: 15,
              localizer: localizer,
              min: min,
              max: max,
              scrollToTime: scrollToTime,
              enableAutoScroll: enableAutoScroll,
            })
          )
        },
      },
    ])
    return Week
  })(React__default.default.Component)
  Week.defaultProps = TimeGrid.defaultProps
  Week.navigate = function (date, action, _ref) {
    var localizer = _ref.localizer
    switch (action) {
      case navigate.PREVIOUS:
        return localizer.add(date, -1, 'week')
      case navigate.NEXT:
        return localizer.add(date, 1, 'week')
      default:
        return date
    }
  }
  Week.range = function (date, _ref2) {
    var localizer = _ref2.localizer
    var firstOfWeek = localizer.startOfWeek()
    var start = localizer.startOf(date, 'week', firstOfWeek)
    var end = localizer.endOf(date, 'week', firstOfWeek)
    return localizer.range(start, end)
  }
  Week.title = function (date, _ref3) {
    var localizer = _ref3.localizer
    var _Week$range = Week.range(date, {
        localizer: localizer,
      }),
      _Week$range2 = _toArray(_Week$range),
      start = _Week$range2[0],
      rest = _Week$range2.slice(1)
    return localizer.format(
      {
        start: start,
        end: rest.pop(),
      },
      'dayRangeHeaderFormat'
    )
  }

  var _excluded$2 = [
    'date',
    'localizer',
    'min',
    'max',
    'scrollToTime',
    'enableAutoScroll',
  ]
  function workWeekRange(date, options) {
    return Week.range(date, options).filter(function (d) {
      return [6, 0].indexOf(d.getDay()) === -1
    })
  }
  var WorkWeek = /*#__PURE__*/ (function (_React$Component) {
    _inherits(WorkWeek, _React$Component)
    var _super = _createSuper(WorkWeek)
    function WorkWeek() {
      _classCallCheck(this, WorkWeek)
      return _super.apply(this, arguments)
    }
    _createClass(WorkWeek, [
      {
        key: 'render',
        value: function render() {
          /**
           * This allows us to default min, max, and scrollToTime
           * using our localizer. This is necessary until such time
           * as TimeGrid is converted to a functional component.
           */
          var _this$props = this.props,
            date = _this$props.date,
            localizer = _this$props.localizer,
            _this$props$min = _this$props.min,
            min =
              _this$props$min === void 0
                ? localizer.startOf(new Date(), 'day')
                : _this$props$min,
            _this$props$max = _this$props.max,
            max =
              _this$props$max === void 0
                ? localizer.endOf(new Date(), 'day')
                : _this$props$max,
            _this$props$scrollToT = _this$props.scrollToTime,
            scrollToTime =
              _this$props$scrollToT === void 0
                ? localizer.startOf(new Date(), 'day')
                : _this$props$scrollToT,
            _this$props$enableAut = _this$props.enableAutoScroll,
            enableAutoScroll =
              _this$props$enableAut === void 0 ? true : _this$props$enableAut,
            props = _objectWithoutProperties(_this$props, _excluded$2)
          var range = workWeekRange(date, this.props)
          return /*#__PURE__*/ React__default.default.createElement(
            TimeGrid,
            Object.assign({}, props, {
              range: range,
              eventOffset: 15,
              localizer: localizer,
              min: min,
              max: max,
              scrollToTime: scrollToTime,
              enableAutoScroll: enableAutoScroll,
            })
          )
        },
      },
    ])
    return WorkWeek
  })(React__default.default.Component)
  WorkWeek.defaultProps = TimeGrid.defaultProps
  WorkWeek.range = workWeekRange
  WorkWeek.navigate = Week.navigate
  WorkWeek.title = function (date, _ref) {
    var localizer = _ref.localizer
    var _workWeekRange = workWeekRange(date, {
        localizer: localizer,
      }),
      _workWeekRange2 = _toArray(_workWeekRange),
      start = _workWeekRange2[0],
      rest = _workWeekRange2.slice(1)
    return localizer.format(
      {
        start: start,
        end: rest.pop(),
      },
      'dayRangeHeaderFormat'
    )
  }

  function Agenda(_ref) {
    var accessors = _ref.accessors,
      components = _ref.components,
      date = _ref.date,
      events = _ref.events,
      getters = _ref.getters,
      length = _ref.length,
      localizer = _ref.localizer,
      onDoubleClickEvent = _ref.onDoubleClickEvent,
      onSelectEvent = _ref.onSelectEvent,
      selected = _ref.selected
    var headerRef = React.useRef(null)
    var dateColRef = React.useRef(null)
    var timeColRef = React.useRef(null)
    var contentRef = React.useRef(null)
    var tbodyRef = React.useRef(null)
    React.useEffect(function () {
      _adjustHeader()
    })
    var renderDay = function renderDay(day, events, dayKey) {
      var Event = components.event,
        AgendaDate = components.date
      events = events.filter(function (e) {
        return inRange(
          e,
          localizer.startOf(day, 'day'),
          localizer.endOf(day, 'day'),
          accessors,
          localizer
        )
      })
      return events.map(function (event, idx) {
        var title = accessors.title(event)
        var end = accessors.end(event)
        var start = accessors.start(event)
        var userProps = getters.eventProp(
          event,
          start,
          end,
          isSelected(event, selected)
        )
        var dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat')
        var first =
          idx === 0
            ? /*#__PURE__*/ React__default.default.createElement(
                'td',
                {
                  rowSpan: events.length,
                  className: 'rbc-agenda-date-cell',
                },
                AgendaDate
                  ? /*#__PURE__*/ React__default.default.createElement(
                      AgendaDate,
                      {
                        day: day,
                        label: dateLabel,
                      }
                    )
                  : dateLabel
              )
            : false
        return /*#__PURE__*/ React__default.default.createElement(
          'tr',
          {
            key: dayKey + '_' + idx,
            className: userProps.className,
            style: userProps.style,
          },
          first,
          /*#__PURE__*/ React__default.default.createElement(
            'td',
            {
              className: 'rbc-agenda-time-cell',
            },
            timeRangeLabel(day, event)
          ),
          /*#__PURE__*/ React__default.default.createElement(
            'td',
            {
              className: 'rbc-agenda-event-cell',
              onClick: function onClick(e) {
                return onSelectEvent && onSelectEvent(event, e)
              },
              onDoubleClick: function onDoubleClick(e) {
                return onDoubleClickEvent && onDoubleClickEvent(event, e)
              },
            },
            Event
              ? /*#__PURE__*/ React__default.default.createElement(Event, {
                  event: event,
                  title: title,
                })
              : title
          )
        )
      }, [])
    }
    var timeRangeLabel = function timeRangeLabel(day, event) {
      var labelClass = '',
        TimeComponent = components.time,
        label = localizer.messages.allDay
      var end = accessors.end(event)
      var start = accessors.start(event)
      if (!accessors.allDay(event)) {
        if (localizer.eq(start, end)) {
          label = localizer.format(start, 'agendaTimeFormat')
        } else if (localizer.isSameDate(start, end)) {
          label = localizer.format(
            {
              start: start,
              end: end,
            },
            'agendaTimeRangeFormat'
          )
        } else if (localizer.isSameDate(day, start)) {
          label = localizer.format(start, 'agendaTimeFormat')
        } else if (localizer.isSameDate(day, end)) {
          label = localizer.format(end, 'agendaTimeFormat')
        }
      }
      if (localizer.gt(day, start, 'day')) labelClass = 'rbc-continues-prior'
      if (localizer.lt(day, end, 'day')) labelClass += ' rbc-continues-after'
      return /*#__PURE__*/ React__default.default.createElement(
        'span',
        {
          className: labelClass.trim(),
        },
        TimeComponent
          ? /*#__PURE__*/ React__default.default.createElement(TimeComponent, {
              event: event,
              day: day,
              label: label,
            })
          : label
      )
    }
    var _adjustHeader = function _adjustHeader() {
      if (!tbodyRef.current) return
      var header = headerRef.current
      var firstRow = tbodyRef.current.firstChild
      if (!firstRow) return
      var isOverflowing =
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      var _widths = []
      var widths = _widths
      _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])]
      if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
        dateColRef.current.style.width = _widths[0] + 'px'
        timeColRef.current.style.width = _widths[1] + 'px'
      }
      if (isOverflowing) {
        addClass(header, 'rbc-header-overflowing')
        header.style.marginRight = scrollbarSize() + 'px'
      } else {
        removeClass(header, 'rbc-header-overflowing')
      }
    }
    var messages = localizer.messages
    var end = localizer.add(date, length, 'day')
    var range = localizer.range(date, end, 'day')
    events = events.filter(function (event) {
      return inRange(
        event,
        localizer.startOf(date, 'day'),
        localizer.endOf(end, 'day'),
        accessors,
        localizer
      )
    })
    events.sort(function (a, b) {
      return +accessors.start(a) - +accessors.start(b)
    })
    return /*#__PURE__*/ React__default.default.createElement(
      'div',
      {
        className: 'rbc-agenda-view',
      },
      events.length !== 0
        ? /*#__PURE__*/ React__default.default.createElement(
            React__default.default.Fragment,
            null,
            /*#__PURE__*/ React__default.default.createElement(
              'table',
              {
                ref: headerRef,
                className: 'rbc-agenda-table',
              },
              /*#__PURE__*/ React__default.default.createElement(
                'thead',
                null,
                /*#__PURE__*/ React__default.default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ React__default.default.createElement(
                    'th',
                    {
                      className: 'rbc-header',
                      ref: dateColRef,
                    },
                    messages.date
                  ),
                  /*#__PURE__*/ React__default.default.createElement(
                    'th',
                    {
                      className: 'rbc-header',
                      ref: timeColRef,
                    },
                    messages.time
                  ),
                  /*#__PURE__*/ React__default.default.createElement(
                    'th',
                    {
                      className: 'rbc-header',
                    },
                    messages.event
                  )
                )
              )
            ),
            /*#__PURE__*/ React__default.default.createElement(
              'div',
              {
                className: 'rbc-agenda-content',
                ref: contentRef,
              },
              /*#__PURE__*/ React__default.default.createElement(
                'table',
                {
                  className: 'rbc-agenda-table',
                },
                /*#__PURE__*/ React__default.default.createElement(
                  'tbody',
                  {
                    ref: tbodyRef,
                  },
                  range.map(function (day, idx) {
                    return renderDay(day, events, idx)
                  })
                )
              )
            )
          )
        : /*#__PURE__*/ React__default.default.createElement(
            'span',
            {
              className: 'rbc-agenda-empty',
            },
            messages.noEventsInRange
          )
    )
  }
  Agenda.defaultProps = {
    length: 30,
  }
  Agenda.range = function (start, _ref2) {
    var _ref2$length = _ref2.length,
      length =
        _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length,
      localizer = _ref2.localizer
    var end = localizer.add(start, length, 'day')
    return {
      start: start,
      end: end,
    }
  }
  Agenda.navigate = function (date, action, _ref3) {
    var _ref3$length = _ref3.length,
      length =
        _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length,
      localizer = _ref3.localizer
    switch (action) {
      case navigate.PREVIOUS:
        return localizer.add(date, -length, 'day')
      case navigate.NEXT:
        return localizer.add(date, length, 'day')
      default:
        return date
    }
  }
  Agenda.title = function (start, _ref4) {
    var _ref4$length = _ref4.length,
      length =
        _ref4$length === void 0 ? Agenda.defaultProps.length : _ref4$length,
      localizer = _ref4.localizer
    var end = localizer.add(start, length, 'day')
    return localizer.format(
      {
        start: start,
        end: end,
      },
      'agendaHeaderFormat'
    )
  }

  var _VIEWS
  var VIEWS =
    ((_VIEWS = {}),
    _defineProperty$1(_VIEWS, views.MONTH, MonthView),
    _defineProperty$1(_VIEWS, views.WEEK, Week),
    _defineProperty$1(_VIEWS, views.WORK_WEEK, WorkWeek),
    _defineProperty$1(_VIEWS, views.DAY, Day),
    _defineProperty$1(_VIEWS, views.AGENDA, Agenda),
    _VIEWS)

  var _excluded$1 = ['action', 'date', 'today']
  function moveDate(View, _ref) {
    var action = _ref.action,
      date = _ref.date,
      today = _ref.today,
      props = _objectWithoutProperties(_ref, _excluded$1)
    View = typeof View === 'string' ? VIEWS[View] : View
    switch (action) {
      case navigate.TODAY:
        date = today || new Date()
        break
      case navigate.DATE:
        break
      default:
        invariant_1(
          View && typeof View.navigate === 'function',
          'Calendar View components must implement a static `.navigate(date, action)` method.s'
        )
        date = View.navigate(date, action, props)
    }
    return date
  }

  var Toolbar = /*#__PURE__*/ (function (_React$Component) {
    _inherits(Toolbar, _React$Component)
    var _super = _createSuper(Toolbar)
    function Toolbar() {
      var _this
      _classCallCheck(this, Toolbar)
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }
      _this = _super.call.apply(_super, [this].concat(args))
      _this.navigate = function (action) {
        _this.props.onNavigate(action)
      }
      _this.view = function (view) {
        _this.props.onView(view)
      }
      return _this
    }
    _createClass(Toolbar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            messages = _this$props.localizer.messages,
            label = _this$props.label
          return /*#__PURE__*/ React__default.default.createElement(
            'div',
            {
              className: 'rbc-toolbar',
            },
            /*#__PURE__*/ React__default.default.createElement(
              'span',
              {
                className: 'rbc-btn-group',
              },
              /*#__PURE__*/ React__default.default.createElement(
                'button',
                {
                  type: 'button',
                  onClick: this.navigate.bind(null, navigate.TODAY),
                },
                messages.today
              ),
              /*#__PURE__*/ React__default.default.createElement(
                'button',
                {
                  type: 'button',
                  onClick: this.navigate.bind(null, navigate.PREVIOUS),
                },
                messages.previous
              ),
              /*#__PURE__*/ React__default.default.createElement(
                'button',
                {
                  type: 'button',
                  onClick: this.navigate.bind(null, navigate.NEXT),
                },
                messages.next
              )
            ),
            /*#__PURE__*/ React__default.default.createElement(
              'span',
              {
                className: 'rbc-toolbar-label',
              },
              label
            ),
            /*#__PURE__*/ React__default.default.createElement(
              'span',
              {
                className: 'rbc-btn-group',
              },
              this.viewNamesGroup(messages)
            )
          )
        },
      },
      {
        key: 'viewNamesGroup',
        value: function viewNamesGroup(messages) {
          var _this2 = this
          var viewNames = this.props.views
          var view = this.props.view
          if (viewNames.length > 1) {
            return viewNames.map(function (name) {
              return /*#__PURE__*/ React__default.default.createElement(
                'button',
                {
                  type: 'button',
                  key: name,
                  className: clsx({
                    'rbc-active': view === name,
                  }),
                  onClick: _this2.view.bind(null, name),
                },
                messages[name]
              )
            })
          }
        },
      },
    ])
    return Toolbar
  })(React__default.default.Component)

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$2(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break
      }
    }
    return array
  }

  var _arrayEach = arrayEach$2

  var defineProperty = _defineProperty

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue$3(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      })
    } else {
      object[key] = value
    }
  }

  var _baseAssignValue = baseAssignValue$3

  var baseAssignValue$2 = _baseAssignValue,
    eq$1 = eq_1

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue$2(object, key, value) {
    var objValue = object[key]
    if (
      !(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) ||
      (value === undefined && !(key in object))
    ) {
      baseAssignValue$2(object, key, value)
    }
  }

  var _assignValue = assignValue$2

  var assignValue$1 = _assignValue,
    baseAssignValue$1 = _baseAssignValue

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject$5(source, props, object, customizer) {
    var isNew = !object
    object || (object = {})

    var index = -1,
      length = props.length

    while (++index < length) {
      var key = props[index]

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined

      if (newValue === undefined) {
        newValue = source[key]
      }
      if (isNew) {
        baseAssignValue$1(object, key, newValue)
      } else {
        assignValue$1(object, key, newValue)
      }
    }
    return object
  }

  var _copyObject = copyObject$5

  var copyObject$4 = _copyObject,
    keys$1 = keys_1

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign$1(object, source) {
    return object && copyObject$4(source, keys$1(source), object)
  }

  var _baseAssign = baseAssign$1

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function nativeKeysIn$1(object) {
    var result = []
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key)
      }
    }
    return result
  }

  var _nativeKeysIn = nativeKeysIn$1

  var isObject$3 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn$1(object) {
    if (!isObject$3(object)) {
      return nativeKeysIn(object)
    }
    var isProto = isPrototype$1(object),
      result = []

    for (var key in object) {
      if (
        !(
          key == 'constructor' &&
          (isProto || !hasOwnProperty$3.call(object, key))
        )
      ) {
        result.push(key)
      }
    }
    return result
  }

  var _baseKeysIn = baseKeysIn$1

  var arrayLikeKeys = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike = isArrayLike_1

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$4(object) {
    return isArrayLike(object)
      ? arrayLikeKeys(object, true)
      : baseKeysIn(object)
  }

  var keysIn_1 = keysIn$4

  var copyObject$3 = _copyObject,
    keysIn$3 = keysIn_1

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn$1(object, source) {
    return object && copyObject$3(source, keysIn$3(source), object)
  }

  var _baseAssignIn = baseAssignIn$1

  var _cloneBufferExports = {}
  var _cloneBuffer = {
    get exports() {
      return _cloneBufferExports
    },
    set exports(v) {
      _cloneBufferExports = v
    },
  }

  ;(function (module, exports) {
    var root = _root

    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports

    /** Detect free variable `module`. */
    var freeModule =
      freeExports &&
      'object' == 'object' &&
      module &&
      !module.nodeType &&
      module

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice()
      }
      var length = buffer.length,
        result = allocUnsafe
          ? allocUnsafe(length)
          : new buffer.constructor(length)

      buffer.copy(result)
      return result
    }

    module.exports = cloneBuffer
  })(_cloneBuffer, _cloneBufferExports)

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */

  function copyArray$1(source, array) {
    var index = -1,
      length = source.length

    array || (array = Array(length))
    while (++index < length) {
      array[index] = source[index]
    }
    return array
  }

  var _copyArray = copyArray$1

  var copyObject$2 = _copyObject,
    getSymbols$1 = _getSymbols

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols$1(source, object) {
    return copyObject$2(source, getSymbols$1(source), object)
  }

  var _copySymbols = copySymbols$1

  var overArg = _overArg

  /** Built-in value references. */
  var getPrototype$4 = overArg(Object.getPrototypeOf, Object)

  var _getPrototype = getPrototype$4

  var arrayPush = _arrayPush,
    getPrototype$3 = _getPrototype,
    getSymbols = _getSymbols,
    stubArray = stubArray_1

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn$2 = !nativeGetSymbols
    ? stubArray
    : function (object) {
        var result = []
        while (object) {
          arrayPush(result, getSymbols(object))
          object = getPrototype$3(object)
        }
        return result
      }

  var _getSymbolsIn = getSymbolsIn$2

  var copyObject$1 = _copyObject,
    getSymbolsIn$1 = _getSymbolsIn

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn$1(source, object) {
    return copyObject$1(source, getSymbolsIn$1(source), object)
  }

  var _copySymbolsIn = copySymbolsIn$1

  var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn$2 = keysIn_1

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn$2(object) {
    return baseGetAllKeys(object, keysIn$2, getSymbolsIn)
  }

  var _getAllKeysIn = getAllKeysIn$2

  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray$1(array) {
    var length = array.length,
      result = new array.constructor(length)

    // Add properties assigned by `RegExp#exec`.
    if (
      length &&
      typeof array[0] == 'string' &&
      hasOwnProperty$2.call(array, 'index')
    ) {
      result.index = array.index
      result.input = array.input
    }
    return result
  }

  var _initCloneArray = initCloneArray$1

  var Uint8Array = _Uint8Array

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength)
    new Uint8Array(result).set(new Uint8Array(arrayBuffer))
    return result
  }

  var _cloneArrayBuffer = cloneArrayBuffer$3

  var cloneArrayBuffer$2 = _cloneArrayBuffer

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer
    return new dataView.constructor(
      buffer,
      dataView.byteOffset,
      dataView.byteLength
    )
  }

  var _cloneDataView = cloneDataView$1

  /** Used to match `RegExp` flags from their coerced string values. */

  var reFlags = /\w*$/

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp))
    result.lastIndex = regexp.lastIndex
    return result
  }

  var _cloneRegExp = cloneRegExp$1

  var Symbol$1 = _Symbol

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {}
  }

  var _cloneSymbol = cloneSymbol$1

  var cloneArrayBuffer$1 = _cloneArrayBuffer

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep
      ? cloneArrayBuffer$1(typedArray.buffer)
      : typedArray.buffer
    return new typedArray.constructor(
      buffer,
      typedArray.byteOffset,
      typedArray.length
    )
  }

  var _cloneTypedArray = cloneTypedArray$1

  var cloneArrayBuffer = _cloneArrayBuffer,
    cloneDataView = _cloneDataView,
    cloneRegExp = _cloneRegExp,
    cloneSymbol = _cloneSymbol,
    cloneTypedArray = _cloneTypedArray

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]'

  var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]'

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object)

      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object)

      case dataViewTag$1:
        return cloneDataView(object, isDeep)

      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep)

      case mapTag$2:
        return new Ctor()

      case numberTag$1:
      case stringTag$1:
        return new Ctor(object)

      case regexpTag$1:
        return cloneRegExp(object)

      case setTag$2:
        return new Ctor()

      case symbolTag$1:
        return cloneSymbol(object)
    }
  }

  var _initCloneByTag = initCloneByTag$1

  var isObject$2 = isObject_1

  /** Built-in value references. */
  var objectCreate = Object.create

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate$2 = (function () {
    function object() {}
    return function (proto) {
      if (!isObject$2(proto)) {
        return {}
      }
      if (objectCreate) {
        return objectCreate(proto)
      }
      object.prototype = proto
      var result = new object()
      object.prototype = undefined
      return result
    }
  })()

  var _baseCreate = baseCreate$2

  var baseCreate$1 = _baseCreate,
    getPrototype$2 = _getPrototype,
    isPrototype = _isPrototype

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject$1(object) {
    return typeof object.constructor == 'function' && !isPrototype(object)
      ? baseCreate$1(getPrototype$2(object))
      : {}
  }

  var _initCloneObject = initCloneObject$1

  var getTag$2 = _getTag,
    isObjectLike$2 = isObjectLike_1

  /** `Object#toString` result references. */
  var mapTag$1 = '[object Map]'

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap$1(value) {
    return isObjectLike$2(value) && getTag$2(value) == mapTag$1
  }

  var _baseIsMap = baseIsMap$1

  var baseIsMap = _baseIsMap,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtilExports

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap

  var isMap_1 = isMap$1

  var getTag$1 = _getTag,
    isObjectLike$1 = isObjectLike_1

  /** `Object#toString` result references. */
  var setTag$1 = '[object Set]'

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet$1(value) {
    return isObjectLike$1(value) && getTag$1(value) == setTag$1
  }

  var _baseIsSet = baseIsSet$1

  var baseIsSet = _baseIsSet,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet

  var isSet_1 = isSet$1

  var Stack = _Stack,
    arrayEach$1 = _arrayEach,
    assignValue = _assignValue,
    baseAssign = _baseAssign,
    baseAssignIn = _baseAssignIn,
    cloneBuffer = _cloneBufferExports,
    copyArray = _copyArray,
    copySymbols = _copySymbols,
    copySymbolsIn = _copySymbolsIn,
    getAllKeys = _getAllKeys,
    getAllKeysIn$1 = _getAllKeysIn,
    getTag = _getTag,
    initCloneArray = _initCloneArray,
    initCloneByTag = _initCloneByTag,
    initCloneObject = _initCloneObject,
    isArray$1 = isArray_1,
    isBuffer$1 = isBufferExports,
    isMap = isMap_1,
    isObject$1 = isObject_1,
    isSet = isSet_1,
    keys = keys_1,
    keysIn$1 = keysIn_1

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG$1 = 2,
    CLONE_SYMBOLS_FLAG$1 = 4

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]'

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]'

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {}
  cloneableTags[argsTag] =
    cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] =
    cloneableTags[dataViewTag] =
    cloneableTags[boolTag] =
    cloneableTags[dateTag] =
    cloneableTags[float32Tag] =
    cloneableTags[float64Tag] =
    cloneableTags[int8Tag] =
    cloneableTags[int16Tag] =
    cloneableTags[int32Tag] =
    cloneableTags[mapTag] =
    cloneableTags[numberTag] =
    cloneableTags[objectTag$1] =
    cloneableTags[regexpTag] =
    cloneableTags[setTag] =
    cloneableTags[stringTag] =
    cloneableTags[symbolTag] =
    cloneableTags[uint8Tag] =
    cloneableTags[uint8ClampedTag] =
    cloneableTags[uint16Tag] =
    cloneableTags[uint32Tag] =
      true
  cloneableTags[errorTag] =
    cloneableTags[funcTag] =
    cloneableTags[weakMapTag] =
      false

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG$1,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1

    if (customizer) {
      result = object
        ? customizer(value, key, object, stack)
        : customizer(value)
    }
    if (result !== undefined) {
      return result
    }
    if (!isObject$1(value)) {
      return value
    }
    var isArr = isArray$1(value)
    if (isArr) {
      result = initCloneArray(value)
      if (!isDeep) {
        return copyArray(value, result)
      }
    } else {
      var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag

      if (isBuffer$1(value)) {
        return cloneBuffer(value, isDeep)
      }
      if (tag == objectTag$1 || tag == argsTag || (isFunc && !object)) {
        result = isFlat || isFunc ? {} : initCloneObject(value)
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value))
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {}
        }
        result = initCloneByTag(value, tag, isDeep)
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack())
    var stacked = stack.get(value)
    if (stacked) {
      return stacked
    }
    stack.set(value, result)

    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(
          baseClone$1(subValue, bitmask, customizer, subValue, value, stack)
        )
      })
    } else if (isMap(value)) {
      value.forEach(function (subValue, key) {
        result.set(
          key,
          baseClone$1(subValue, bitmask, customizer, key, value, stack)
        )
      })
    }

    var keysFunc = isFull
      ? isFlat
        ? getAllKeysIn$1
        : getAllKeys
      : isFlat
      ? keysIn$1
      : keys

    var props = isArr ? undefined : keysFunc(value)
    arrayEach$1(props || value, function (subValue, key) {
      if (props) {
        key = subValue
        subValue = value[key]
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(
        result,
        key,
        baseClone$1(subValue, bitmask, customizer, key, value, stack)
      )
    })
    return result
  }

  var _baseClone = baseClone$1

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */

  function last$1(array) {
    var length = array == null ? 0 : array.length
    return length ? array[length - 1] : undefined
  }

  var last_1 = last$1

  var baseGet = _baseGet,
    baseSlice = _baseSlice

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent$1(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1))
  }

  var _parent = parent$1

  var castPath$1 = _castPath,
    last = last_1,
    parent = _parent,
    toKey = _toKey

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset$1(object, path) {
    path = castPath$1(path, object)
    object = parent(object, path)
    return object == null || delete object[toKey(last(path))]
  }

  var _baseUnset = baseUnset$1

  var baseGetTag = _baseGetTag,
    getPrototype$1 = _getPrototype,
    isObjectLike = isObjectLike_1

  /** `Object#toString` result references. */
  var objectTag = '[object Object]'

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto$1 = Object.prototype

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object)

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject$1(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false
    }
    var proto = getPrototype$1(value)
    if (proto === null) {
      return true
    }
    var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor
    return (
      typeof Ctor == 'function' &&
      Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString
    )
  }

  var isPlainObject_1 = isPlainObject$1

  var isPlainObject = isPlainObject_1

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone$1(value) {
    return isPlainObject(value) ? undefined : value
  }

  var _customOmitClone = customOmitClone$1

  var baseFlatten = _baseFlatten

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten$1(array) {
    var length = array == null ? 0 : array.length
    return length ? baseFlatten(array, 1) : []
  }

  var flatten_1 = flatten$1

  var flatten = flatten_1,
    overRest = _overRest,
    setToString = _setToString

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest$1(func) {
    return setToString(overRest(func, undefined, flatten), func + '')
  }

  var _flatRest = flatRest$1

  var arrayMap = _arrayMap,
    baseClone = _baseClone,
    baseUnset = _baseUnset,
    castPath = _castPath,
    copyObject = _copyObject,
    customOmitClone = _customOmitClone,
    flatRest = _flatRest,
    getAllKeysIn = _getAllKeysIn

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = flatRest(function (object, paths) {
    var result = {}
    if (object == null) {
      return result
    }
    var isDeep = false
    paths = arrayMap(paths, function (path) {
      path = castPath(path, object)
      isDeep || (isDeep = path.length > 1)
      return path
    })
    copyObject(object, getAllKeysIn(object), result)
    if (isDeep) {
      result = baseClone(
        result,
        CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG,
        customOmitClone
      )
    }
    var length = paths.length
    while (length--) {
      baseUnset(result, paths[length])
    }
    return result
  })

  var omit_1 = omit

  var baseRest = _baseRest,
    eq = eq_1,
    isIterateeCall = _isIterateeCall,
    keysIn = keysIn_1

  /** Used for built-in method references. */
  var objectProto = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = baseRest(function (object, sources) {
    object = Object(object)

    var index = -1
    var length = sources.length
    var guard = length > 2 ? sources[2] : undefined

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1
    }

    while (++index < length) {
      var source = sources[index]
      var props = keysIn(source)
      var propsIndex = -1
      var propsLength = props.length

      while (++propsIndex < propsLength) {
        var key = props[propsIndex]
        var value = object[key]

        if (
          value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))
        ) {
          object[key] = source[key]
        }
      }
    }

    return object
  })

  var defaults_1 = defaults

  var arrayEach = _arrayEach,
    baseCreate = _baseCreate,
    baseForOwn$1 = _baseForOwn,
    baseIteratee$1 = _baseIteratee,
    getPrototype = _getPrototype,
    isArray = isArray_1,
    isBuffer = isBufferExports,
    isFunction = isFunction_1,
    isObject = isObject_1,
    isTypedArray = isTypedArray_1

  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own
   * enumerable string keyed properties thru `iteratee`, with each invocation
   * potentially mutating the `accumulator` object. If `accumulator` is not
   * provided, a new object with the same `[[Prototype]]` will be used. The
   * iteratee is invoked with four arguments: (accumulator, value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */
  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object)

    iteratee = baseIteratee$1(iteratee)
    if (accumulator == null) {
      var Ctor = object && object.constructor
      if (isArrLike) {
        accumulator = isArr ? new Ctor() : []
      } else if (isObject(object)) {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {}
      } else {
        accumulator = {}
      }
    }
    ;(isArrLike
      ? arrayEach
      : baseForOwn$1)(object, function (value, index, object) {
      return iteratee(accumulator, value, index, object)
    })
    return accumulator
  }

  var transform_1 = transform

  var baseAssignValue = _baseAssignValue,
    baseForOwn = _baseForOwn,
    baseIteratee = _baseIteratee

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {}
    iteratee = baseIteratee(iteratee)

    baseForOwn(object, function (value, key, object) {
      baseAssignValue(result, key, iteratee(value, key, object))
    })
    return result
  }

  var mapValues_1 = mapValues

  /**
   * Retrieve via an accessor-like property
   *
   *    accessor(obj, 'name')   // => retrieves obj['name']
   *    accessor(data, func)    // => retrieves func(data)
   *    ... otherwise null
   */
  function accessor(data, field) {
    var value = null
    if (typeof field === 'function') value = field(data)
    else if (
      typeof field === 'string' &&
      _typeof(data) === 'object' &&
      data != null &&
      field in data
    )
      value = data[field]
    return value
  }
  var wrapAccessor = function wrapAccessor(acc) {
    return function (data) {
      return accessor(data, acc)
    }
  }

  var _excluded = ['view', 'date', 'getNow', 'onNavigate'],
    _excluded2 = [
      'view',
      'toolbar',
      'events',
      'backgroundEvents',
      'style',
      'className',
      'elementProps',
      'date',
      'getNow',
      'length',
      'showMultiDayTimes',
      'onShowMore',
      'doShowMoreDrillDown',
      'components',
      'formats',
      'messages',
      'culture',
    ]
  function viewNames(_views) {
    if (Array.isArray(_views)) {
      return _views
    }
    var views = []
    for (
      var _i = 0, _Object$entries = Object.entries(_views);
      _i < _Object$entries.length;
      _i++
    ) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1]
      if (value) {
        views.push(key)
      }
    }
    return views
  }
  function isValidView(view, _ref) {
    var _views = _ref.views
    var names = viewNames(_views)
    return names.indexOf(view) !== -1
  }
  var Calendar = /*#__PURE__*/ (function (_React$Component) {
    _inherits(Calendar, _React$Component)
    var _super = _createSuper(Calendar)
    function Calendar() {
      var _this
      _classCallCheck(this, Calendar)
      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }
      _this = _super.call.apply(_super, [this].concat(_args))
      _this.getViews = function () {
        var views = _this.props.views
        if (Array.isArray(views)) {
          return transform_1(
            views,
            function (obj, name) {
              return (obj[name] = VIEWS[name])
            },
            {}
          )
        }
        if (_typeof(views) === 'object') {
          return mapValues_1(views, function (value, key) {
            if (value === true) {
              return VIEWS[key]
            }
            return value
          })
        }
        return VIEWS
      }
      _this.getView = function () {
        var views = _this.getViews()
        return views[_this.props.view]
      }
      _this.getDrilldownView = function (date) {
        var _this$props = _this.props,
          view = _this$props.view,
          drilldownView = _this$props.drilldownView,
          getDrilldownView = _this$props.getDrilldownView
        if (!getDrilldownView) return drilldownView
        return getDrilldownView(date, view, Object.keys(_this.getViews()))
      }
      _this.handleRangeChange = function (date, viewComponent, view) {
        var _this$props2 = _this.props,
          onRangeChange = _this$props2.onRangeChange,
          localizer = _this$props2.localizer
        if (onRangeChange) {
          if (viewComponent.range) {
            onRangeChange(
              viewComponent.range(date, {
                localizer: localizer,
              }),
              view
            )
          } else {
            {
              console.error('onRangeChange prop not supported for this view')
            }
          }
        }
      }
      _this.handleNavigate = function (action, newDate) {
        var _this$props3 = _this.props,
          view = _this$props3.view,
          date = _this$props3.date,
          getNow = _this$props3.getNow,
          onNavigate = _this$props3.onNavigate,
          props = _objectWithoutProperties(_this$props3, _excluded)
        var ViewComponent = _this.getView()
        var today = getNow()
        date = moveDate(
          ViewComponent,
          _objectSpread2(
            _objectSpread2({}, props),
            {},
            {
              action: action,
              date: newDate || date || today,
              today: today,
            }
          )
        )
        onNavigate(date, view, action)
        _this.handleRangeChange(date, ViewComponent)
      }
      _this.handleViewChange = function (view) {
        if (view !== _this.props.view && isValidView(view, _this.props)) {
          _this.props.onView(view)
        }
        var views = _this.getViews()
        _this.handleRangeChange(
          _this.props.date || _this.props.getNow(),
          views[view],
          view
        )
      }
      _this.handleSelectEvent = function () {
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2]
        }
        notify(_this.props.onSelectEvent, args)
      }
      _this.handleDoubleClickEvent = function () {
        for (
          var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3] = arguments[_key3]
        }
        notify(_this.props.onDoubleClickEvent, args)
      }
      _this.handleKeyPressEvent = function () {
        for (
          var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          args[_key4] = arguments[_key4]
        }
        notify(_this.props.onKeyPressEvent, args)
      }
      _this.handleSelectSlot = function (slotInfo) {
        notify(_this.props.onSelectSlot, slotInfo)
      }
      _this.handleDrillDown = function (date, view) {
        var onDrillDown = _this.props.onDrillDown
        if (onDrillDown) {
          onDrillDown(date, view, _this.drilldownView)
          return
        }
        if (view) _this.handleViewChange(view)
        _this.handleNavigate(navigate.DATE, date)
      }
      _this.state = {
        context: Calendar.getContext(_this.props),
      }
      return _this
    }
    _createClass(
      Calendar,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props4 = this.props,
              view = _this$props4.view,
              toolbar = _this$props4.toolbar,
              events = _this$props4.events,
              backgroundEvents = _this$props4.backgroundEvents,
              style = _this$props4.style,
              className = _this$props4.className,
              elementProps = _this$props4.elementProps,
              current = _this$props4.date,
              getNow = _this$props4.getNow,
              length = _this$props4.length,
              showMultiDayTimes = _this$props4.showMultiDayTimes,
              onShowMore = _this$props4.onShowMore,
              doShowMoreDrillDown = _this$props4.doShowMoreDrillDown
            _this$props4.components
            _this$props4.formats
            _this$props4.messages
            _this$props4.culture
            var props = _objectWithoutProperties(_this$props4, _excluded2)
            current = current || getNow()
            var View = this.getView()
            var _this$state$context = this.state.context,
              accessors = _this$state$context.accessors,
              components = _this$state$context.components,
              getters = _this$state$context.getters,
              localizer = _this$state$context.localizer,
              viewNames = _this$state$context.viewNames
            var CalToolbar = components.toolbar || Toolbar
            var label = View.title(current, {
              localizer: localizer,
              length: length,
            })
            return /*#__PURE__*/ React__default.default.createElement(
              'div',
              Object.assign({}, elementProps, {
                className: clsx(
                  className,
                  'rbc-calendar',
                  props.rtl && 'rbc-rtl'
                ),
                style: style,
              }),
              toolbar &&
                /*#__PURE__*/ React__default.default.createElement(CalToolbar, {
                  date: current,
                  view: view,
                  views: viewNames,
                  label: label,
                  onView: this.handleViewChange,
                  onNavigate: this.handleNavigate,
                  localizer: localizer,
                }),
              /*#__PURE__*/ React__default.default.createElement(
                View,
                Object.assign({}, props, {
                  events: events,
                  backgroundEvents: backgroundEvents,
                  date: current,
                  getNow: getNow,
                  length: length,
                  localizer: localizer,
                  getters: getters,
                  components: components,
                  accessors: accessors,
                  showMultiDayTimes: showMultiDayTimes,
                  getDrilldownView: this.getDrilldownView,
                  onNavigate: this.handleNavigate,
                  onDrillDown: this.handleDrillDown,
                  onSelectEvent: this.handleSelectEvent,
                  onDoubleClickEvent: this.handleDoubleClickEvent,
                  onKeyPressEvent: this.handleKeyPressEvent,
                  onSelectSlot: this.handleSelectSlot,
                  onShowMore: onShowMore,
                  doShowMoreDrillDown: doShowMoreDrillDown,
                })
              )
            )
          },

          /**
           *
           * @param date
           * @param viewComponent
           * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
           * parameter. It appears when range change on view changing. It could be handy
           * when you need to have both: range and view type at once, i.e. for manage rbc
           * state via url
           */
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(nextProps) {
            return {
              context: Calendar.getContext(nextProps),
            }
          },
        },
        {
          key: 'getContext',
          value: function getContext(_ref2) {
            var startAccessor = _ref2.startAccessor,
              endAccessor = _ref2.endAccessor,
              allDayAccessor = _ref2.allDayAccessor,
              tooltipAccessor = _ref2.tooltipAccessor,
              titleAccessor = _ref2.titleAccessor,
              resourceAccessor = _ref2.resourceAccessor,
              resourceIdAccessor = _ref2.resourceIdAccessor,
              resourceTitleAccessor = _ref2.resourceTitleAccessor,
              eventPropGetter = _ref2.eventPropGetter,
              backgroundEventPropGetter = _ref2.backgroundEventPropGetter,
              slotPropGetter = _ref2.slotPropGetter,
              slotGroupPropGetter = _ref2.slotGroupPropGetter,
              dayPropGetter = _ref2.dayPropGetter,
              view = _ref2.view,
              views = _ref2.views,
              localizer = _ref2.localizer,
              culture = _ref2.culture,
              _ref2$messages = _ref2.messages,
              messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages,
              _ref2$components = _ref2.components,
              components = _ref2$components === void 0 ? {} : _ref2$components,
              _ref2$formats = _ref2.formats,
              formats = _ref2$formats === void 0 ? {} : _ref2$formats
            var names = viewNames(views)
            var msgs = messages(messages$1)
            return {
              viewNames: names,
              localizer: mergeWithDefaults(localizer, culture, formats, msgs),
              getters: {
                eventProp: function eventProp() {
                  return (
                    (eventPropGetter &&
                      eventPropGetter.apply(void 0, arguments)) ||
                    {}
                  )
                },
                backgroundEventProp: function backgroundEventProp() {
                  return (
                    (backgroundEventPropGetter &&
                      backgroundEventPropGetter.apply(void 0, arguments)) ||
                    {}
                  )
                },
                slotProp: function slotProp() {
                  return (
                    (slotPropGetter &&
                      slotPropGetter.apply(void 0, arguments)) ||
                    {}
                  )
                },
                slotGroupProp: function slotGroupProp() {
                  return (
                    (slotGroupPropGetter &&
                      slotGroupPropGetter.apply(void 0, arguments)) ||
                    {}
                  )
                },
                dayProp: function dayProp() {
                  return (
                    (dayPropGetter && dayPropGetter.apply(void 0, arguments)) ||
                    {}
                  )
                },
              },
              components: defaults_1(
                components[view] || {},
                omit_1(components, names),
                {
                  eventWrapper: NoopWrapper,
                  backgroundEventWrapper: NoopWrapper,
                  eventContainerWrapper: NoopWrapper,
                  dateCellWrapper: NoopWrapper,
                  weekWrapper: NoopWrapper,
                  timeSlotWrapper: NoopWrapper,
                  timeGutterWrapper: NoopWrapper,
                }
              ),
              accessors: {
                start: wrapAccessor(startAccessor),
                end: wrapAccessor(endAccessor),
                allDay: wrapAccessor(allDayAccessor),
                tooltip: wrapAccessor(tooltipAccessor),
                title: wrapAccessor(titleAccessor),
                resource: wrapAccessor(resourceAccessor),
                resourceId: wrapAccessor(resourceIdAccessor),
                resourceTitle: wrapAccessor(resourceTitleAccessor),
              },
            }
          },
        },
      ]
    )
    return Calendar
  })(React__default.default.Component)
  Calendar.defaultProps = {
    events: [],
    backgroundEvents: [],
    elementProps: {},
    popup: false,
    toolbar: true,
    view: views.MONTH,
    views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
    step: 30,
    length: 30,
    doShowMoreDrillDown: true,
    drilldownView: views.DAY,
    titleAccessor: 'title',
    tooltipAccessor: 'title',
    allDayAccessor: 'allDay',
    startAccessor: 'start',
    endAccessor: 'end',
    resourceAccessor: 'resourceId',
    resourceIdAccessor: 'id',
    resourceTitleAccessor: 'title',
    longPressThreshold: 250,
    getNow: function getNow() {
      return new Date()
    },
    dayLayoutAlgorithm: 'overlap',
  }
  var Calendar$1 = uncontrollable(Calendar, {
    view: 'onView',
    date: 'onNavigate',
    selected: 'onSelectEvent',
  })

  var weekRangeFormat$5 = function weekRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(start, 'MMMM DD', culture) +
      ' – ' +
      // updated to use this localizer 'eq()' method
      local.format(
        end,
        local.eq(start, end, 'month') ? 'DD' : 'MMMM DD',
        culture
      )
    )
  }
  var dateRangeFormat$5 = function dateRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(start, 'L', culture) +
      ' – ' +
      local.format(end, 'L', culture)
    )
  }
  var timeRangeFormat$5 = function timeRangeFormat(_ref3, culture, local) {
    var start = _ref3.start,
      end = _ref3.end
    return (
      local.format(start, 'LT', culture) +
      ' – ' +
      local.format(end, 'LT', culture)
    )
  }
  var timeRangeStartFormat$5 = function timeRangeStartFormat(
    _ref4,
    culture,
    local
  ) {
    var start = _ref4.start
    return local.format(start, 'LT', culture) + ' – '
  }
  var timeRangeEndFormat$5 = function timeRangeEndFormat(
    _ref5,
    culture,
    local
  ) {
    var end = _ref5.end
    return ' – ' + local.format(end, 'LT', culture)
  }
  var formats$5 = {
    dateFormat: 'DD',
    dayFormat: 'DD ddd',
    weekdayFormat: 'ddd',
    selectRangeFormat: timeRangeFormat$5,
    eventTimeRangeFormat: timeRangeFormat$5,
    eventTimeRangeStartFormat: timeRangeStartFormat$5,
    eventTimeRangeEndFormat: timeRangeEndFormat$5,
    timeGutterFormat: 'LT',
    monthHeaderFormat: 'MMMM YYYY',
    dayHeaderFormat: 'dddd MMM DD',
    dayRangeHeaderFormat: weekRangeFormat$5,
    agendaHeaderFormat: dateRangeFormat$5,
    agendaDateFormat: 'ddd MMM DD',
    agendaTimeFormat: 'LT',
    agendaTimeRangeFormat: timeRangeFormat$5,
  }
  function fixUnit$2(unit) {
    var datePart = unit ? unit.toLowerCase() : unit
    if (datePart === 'FullYear') {
      datePart = 'year'
    } else if (!datePart) {
      datePart = undefined
    }
    return datePart
  }
  function moment(moment) {
    var locale = function locale(m, c) {
      return c ? m.locale(c) : m
    }
    function getTimezoneOffset(date) {
      // ensures this gets cast to timezone
      return moment(date).toDate().getTimezoneOffset()
    }
    function getDstOffset(start, end) {
      var _st$_z$name, _st$_z
      // convert to moment, in case
      // Calculate the offset in the timezone of the Events (local)
      // not in the timezone of the calendar (moment.tz)
      var st = moment(start).local()
      var ed = moment(end).local()
      // if not using moment timezone
      if (!moment.tz) {
        return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset()
      }
      /**
       * If using moment-timezone, and a timezone has been applied, then
       * use this to get the proper timezone offset, otherwise default
       * the timezone to the browser local
       */
      var tzName =
        (_st$_z$name =
          st === null || st === void 0
            ? void 0
            : (_st$_z = st._z) === null || _st$_z === void 0
            ? void 0
            : _st$_z.name) !== null && _st$_z$name !== void 0
          ? _st$_z$name
          : moment.tz.guess()
      var startOffset = moment.tz.zone(tzName).utcOffset(+st)
      var endOffset = moment.tz.zone(tzName).utcOffset(+ed)
      return startOffset - endOffset
    }
    function getDayStartDstOffset(start) {
      var dayStart = moment(start).startOf('day')
      return getDstOffset(dayStart, start)
    }

    /*** BEGIN localized date arithmetic methods with moment ***/
    function defineComparators(a, b, unit) {
      var datePart = fixUnit$2(unit)
      var dtA = datePart ? moment(a).startOf(datePart) : moment(a)
      var dtB = datePart ? moment(b).startOf(datePart) : moment(b)
      return [dtA, dtB, datePart]
    }
    function startOf() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
      var unit = arguments.length > 1 ? arguments[1] : undefined
      var datePart = fixUnit$2(unit)
      if (datePart) {
        return moment(date).startOf(datePart).toDate()
      }
      return moment(date).toDate()
    }
    function endOf() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
      var unit = arguments.length > 1 ? arguments[1] : undefined
      var datePart = fixUnit$2(unit)
      if (datePart) {
        return moment(date).endOf(datePart).toDate()
      }
      return moment(date).toDate()
    }

    // moment comparison operations *always* convert both sides to moment objects
    // prior to running the comparisons
    function eq(a, b, unit) {
      var _defineComparators = defineComparators(a, b, unit),
        _defineComparators2 = _slicedToArray(_defineComparators, 3),
        dtA = _defineComparators2[0],
        dtB = _defineComparators2[1],
        datePart = _defineComparators2[2]
      return dtA.isSame(dtB, datePart)
    }
    function neq(a, b, unit) {
      return !eq(a, b, unit)
    }
    function gt(a, b, unit) {
      var _defineComparators3 = defineComparators(a, b, unit),
        _defineComparators4 = _slicedToArray(_defineComparators3, 3),
        dtA = _defineComparators4[0],
        dtB = _defineComparators4[1],
        datePart = _defineComparators4[2]
      return dtA.isAfter(dtB, datePart)
    }
    function lt(a, b, unit) {
      var _defineComparators5 = defineComparators(a, b, unit),
        _defineComparators6 = _slicedToArray(_defineComparators5, 3),
        dtA = _defineComparators6[0],
        dtB = _defineComparators6[1],
        datePart = _defineComparators6[2]
      return dtA.isBefore(dtB, datePart)
    }
    function gte(a, b, unit) {
      var _defineComparators7 = defineComparators(a, b, unit),
        _defineComparators8 = _slicedToArray(_defineComparators7, 3),
        dtA = _defineComparators8[0],
        dtB = _defineComparators8[1],
        datePart = _defineComparators8[2]
      return dtA.isSameOrBefore(dtB, datePart)
    }
    function lte(a, b, unit) {
      var _defineComparators9 = defineComparators(a, b, unit),
        _defineComparators10 = _slicedToArray(_defineComparators9, 3),
        dtA = _defineComparators10[0],
        dtB = _defineComparators10[1],
        datePart = _defineComparators10[2]
      return dtA.isSameOrBefore(dtB, datePart)
    }
    function inRange(day, min, max) {
      var unit =
        arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : 'day'
      var datePart = fixUnit$2(unit)
      var mDay = moment(day)
      var mMin = moment(min)
      var mMax = moment(max)
      return mDay.isBetween(mMin, mMax, datePart, '[]')
    }
    function min(dateA, dateB) {
      var dtA = moment(dateA)
      var dtB = moment(dateB)
      var minDt = moment.min(dtA, dtB)
      return minDt.toDate()
    }
    function max(dateA, dateB) {
      var dtA = moment(dateA)
      var dtB = moment(dateB)
      var maxDt = moment.max(dtA, dtB)
      return maxDt.toDate()
    }
    function merge(date, time) {
      if (!date && !time) return null
      var tm = moment(time).format('HH:mm:ss')
      var dt = moment(date).startOf('day').format('MM/DD/YYYY')
      // We do it this way to avoid issues when timezone switching
      return moment(
        ''.concat(dt, ' ').concat(tm),
        'MM/DD/YYYY HH:mm:ss'
      ).toDate()
    }
    function add(date, adder, unit) {
      var datePart = fixUnit$2(unit)
      return moment(date).add(adder, datePart).toDate()
    }
    function range(start, end) {
      var unit =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : 'day'
      var datePart = fixUnit$2(unit)
      // because the add method will put these in tz, we have to start that way
      var current = moment(start).toDate()
      var days = []
      while (lte(current, end)) {
        days.push(current)
        current = add(current, 1, datePart)
      }
      return days
    }
    function ceil(date, unit) {
      var datePart = fixUnit$2(unit)
      var floor = startOf(date, datePart)
      return eq(floor, date) ? floor : add(floor, 1, datePart)
    }
    function diff(a, b) {
      var unit =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : 'day'
      var datePart = fixUnit$2(unit)
      // don't use 'defineComparators' here, as we don't want to mutate the values
      var dtA = moment(a)
      var dtB = moment(b)
      return dtB.diff(dtA, datePart)
    }
    function minutes(date) {
      var dt = moment(date)
      return dt.minutes()
    }
    function firstOfWeek(culture) {
      var data = culture ? moment.localeData(culture) : moment.localeData()
      return data ? data.firstDayOfWeek() : 0
    }
    function firstVisibleDay(date) {
      return moment(date).startOf('month').startOf('week').toDate()
    }
    function lastVisibleDay(date) {
      return moment(date).endOf('month').endOf('week').toDate()
    }
    function visibleDays(date) {
      var current = firstVisibleDay(date)
      var last = lastVisibleDay(date)
      var days = []
      while (lte(current, last)) {
        days.push(current)
        current = add(current, 1, 'd')
      }
      return days
    }
    /*** END localized date arithmetic methods with moment ***/

    /**
     * Moved from TimeSlots.js, this method overrides the method of the same name
     * in the localizer.js, using moment to construct the js Date
     * @param {Date} dt - date to start with
     * @param {Number} minutesFromMidnight
     * @param {Number} offset
     * @returns {Date}
     */
    function getSlotDate(dt, minutesFromMidnight, offset) {
      return moment(dt)
        .startOf('day')
        .minute(minutesFromMidnight + offset)
        .toDate()
    }

    // moment will automatically handle DST differences in it's calculations
    function getTotalMin(start, end) {
      return diff(start, end, 'minutes')
    }
    function getMinutesFromMidnight(start) {
      var dayStart = moment(start).startOf('day')
      var day = moment(start)
      return day.diff(dayStart, 'minutes') + getDayStartDstOffset(start)
    }

    // These two are used by DateSlotMetrics
    function continuesPrior(start, first) {
      var mStart = moment(start)
      var mFirst = moment(first)
      return mStart.isBefore(mFirst, 'day')
    }
    function continuesAfter(start, end, last) {
      var mEnd = moment(end)
      var mLast = moment(last)
      return mEnd.isSameOrAfter(mLast, 'minutes')
    }

    // These two are used by eventLevels
    function sortEvents(_ref6) {
      var _ref6$evtA = _ref6.evtA,
        aStart = _ref6$evtA.start,
        aEnd = _ref6$evtA.end,
        aAllDay = _ref6$evtA.allDay,
        _ref6$evtB = _ref6.evtB,
        bStart = _ref6$evtB.start,
        bEnd = _ref6$evtB.end,
        bAllDay = _ref6$evtB.allDay
      var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day')
      var durA = diff(aStart, ceil(aEnd, 'day'), 'day')
      var durB = diff(bStart, ceil(bEnd, 'day'), 'day')
      return (
        startSort ||
        // sort by start Day first
        Math.max(durB, 1) - Math.max(durA, 1) ||
        // events spanning multiple days go first
        !!bAllDay - !!aAllDay ||
        // then allDay single day events
        +aStart - +bStart ||
        // then sort by start time *don't need moment conversion here
        +aEnd - +bEnd // then sort by end time *don't need moment conversion here either
      )
    }

    function inEventRange(_ref7) {
      var _ref7$event = _ref7.event,
        start = _ref7$event.start,
        end = _ref7$event.end,
        _ref7$range = _ref7.range,
        rangeStart = _ref7$range.start,
        rangeEnd = _ref7$range.end
      var startOfDay = moment(start).startOf('day')
      var eEnd = moment(end)
      var rStart = moment(rangeStart)
      var rEnd = moment(rangeEnd)
      var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, 'day')
      // when the event is zero duration we need to handle a bit differently
      var sameMin = !startOfDay.isSame(eEnd, 'minutes')
      var endsAfterStart = sameMin
        ? eEnd.isAfter(rStart, 'minutes')
        : eEnd.isSameOrAfter(rStart, 'minutes')
      return startsBeforeEnd && endsAfterStart
    }
    function isSameDate(date1, date2) {
      var dt = moment(date1)
      var dt2 = moment(date2)
      return dt.isSame(dt2, 'day')
    }

    /**
     * This method, called once in the localizer constructor, is used by eventLevels
     * 'eventSegments()' to assist in determining the 'span' of the event in the display,
     * specifically when using a timezone that is greater than the browser native timezone.
     * @returns number
     */
    function browserTZOffset() {
      /**
       * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
       * what you see in it's string, so we have to jump through some hoops to get a value
       * we can actually compare.
       */
      var dt = new Date()
      var neg = /-/.test(dt.toString()) ? '-' : ''
      var dtOffset = dt.getTimezoneOffset()
      var comparator = Number(''.concat(neg).concat(Math.abs(dtOffset)))
      // moment correctly provides positive/negative offset, as expected
      var mtOffset = moment().utcOffset()
      return mtOffset > comparator ? 1 : 0
    }
    return new DateLocalizer({
      formats: formats$5,
      firstOfWeek: firstOfWeek,
      firstVisibleDay: firstVisibleDay,
      lastVisibleDay: lastVisibleDay,
      visibleDays: visibleDays,
      format: function format(value, _format, culture) {
        return locale(moment(value), culture).format(_format)
      },
      lt: lt,
      lte: lte,
      gt: gt,
      gte: gte,
      eq: eq,
      neq: neq,
      merge: merge,
      inRange: inRange,
      startOf: startOf,
      endOf: endOf,
      range: range,
      add: add,
      diff: diff,
      ceil: ceil,
      min: min,
      max: max,
      minutes: minutes,
      getSlotDate: getSlotDate,
      getTimezoneOffset: getTimezoneOffset,
      getDstOffset: getDstOffset,
      getTotalMin: getTotalMin,
      getMinutesFromMidnight: getMinutesFromMidnight,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      sortEvents: sortEvents,
      inEventRange: inEventRange,
      isSameDate: isSameDate,
      browserTZOffset: browserTZOffset,
    })
  }

  function pluralizeUnit(unit) {
    return /s$/.test(unit) ? unit : unit + 's'
  }
  var weekRangeFormat$4 = function weekRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(start, 'MMMM dd', culture) +
      ' – ' +
      // updated to use this localizer 'eq()' method
      local.format(
        end,
        local.eq(start, end, 'month') ? 'dd' : 'MMMM dd',
        culture
      )
    )
  }
  var dateRangeFormat$4 = function dateRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(start, 'D', culture) +
      ' – ' +
      local.format(end, 'D', culture)
    )
  }
  var timeRangeFormat$4 = function timeRangeFormat(_ref3, culture, local) {
    var start = _ref3.start,
      end = _ref3.end
    return (
      local.format(start, 't', culture) +
      ' – ' +
      local.format(end, 't', culture)
    )
  }
  var timeRangeStartFormat$4 = function timeRangeStartFormat(
    _ref4,
    culture,
    local
  ) {
    var start = _ref4.start
    return local.format(start, 't', culture) + ' – '
  }
  var timeRangeEndFormat$4 = function timeRangeEndFormat(
    _ref5,
    culture,
    local
  ) {
    var end = _ref5.end
    return ' – ' + local.format(end, 't', culture)
  }
  var formats$4 = {
    dateFormat: 'dd',
    dayFormat: 'dd EEE',
    weekdayFormat: 'EEE',
    selectRangeFormat: timeRangeFormat$4,
    eventTimeRangeFormat: timeRangeFormat$4,
    eventTimeRangeStartFormat: timeRangeStartFormat$4,
    eventTimeRangeEndFormat: timeRangeEndFormat$4,
    timeGutterFormat: 't',
    monthHeaderFormat: 'MMMM yyyy',
    dayHeaderFormat: 'EEEE MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$4,
    agendaHeaderFormat: dateRangeFormat$4,
    agendaDateFormat: 'EEE MMM dd',
    agendaTimeFormat: 't',
    agendaTimeRangeFormat: timeRangeFormat$4,
  }
  function fixUnit$1(unit) {
    var datePart = unit ? pluralizeUnit(unit.toLowerCase()) : unit
    if (datePart === 'FullYear') {
      datePart = 'year'
    } else if (!datePart) {
      datePart = undefined
    }
    return datePart
  }

  // Luxon does not currently have weekInfo by culture
  // Luxon uses 1 based values for month and weekday
  // So we default to Sunday (7)
  function luxon(DateTime) {
    var _ref6 =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$firstDayOfWeek = _ref6.firstDayOfWeek,
      firstDayOfWeek =
        _ref6$firstDayOfWeek === void 0 ? 7 : _ref6$firstDayOfWeek
    function formatDate(value, format) {
      return DateTime.fromJSDate(value).toFormat(format)
    }
    function formatDateWithCulture(value, culture, format) {
      return DateTime.fromJSDate(value).setLocale(culture).toFormat(format)
    }

    /*** BEGIN localized date arithmetic methods with Luxon ***/
    function defineComparators(a, b, unit) {
      var datePart = fixUnit$1(unit)
      var dtA = datePart
        ? DateTime.fromJSDate(a).startOf(datePart)
        : DateTime.fromJSDate(a)
      var dtB = datePart
        ? DateTime.fromJSDate(b).startOf(datePart)
        : DateTime.fromJSDate(b)
      return [dtA, dtB, datePart]
    }

    // Since Luxon (and current Intl API) has no support
    // for culture based weekInfo, we need to handle
    // the start of the week differently
    // depending on locale, the firstDayOfWeek could also be Saturday, Sunday or Monday
    function startOfDTWeek(dtObj) {
      var weekday = dtObj.weekday
      if (weekday === firstDayOfWeek) {
        return dtObj.startOf('day') // already beginning of week
      } else if (firstDayOfWeek === 1) {
        return dtObj.startOf('week') // fow is Monday, which is Luxon default
      }

      var diff = firstDayOfWeek === 7 ? weekday : weekday + (7 - firstDayOfWeek)
      return dtObj
        .minus({
          day: diff,
        })
        .startOf('day')
    }
    function endOfDTWeek(dtObj) {
      var weekday = dtObj.weekday
      var eow = firstDayOfWeek === 1 ? 7 : firstDayOfWeek - 1
      if (weekday === eow) {
        return dtObj.endOf('day') // already last day of the week
      } else if (firstDayOfWeek === 1) {
        return dtObj.endOf('week') // use Luxon default (Sunday)
      }

      var fromDate =
        firstDayOfWeek > eow
          ? dtObj.plus({
              day: firstDayOfWeek - eow,
            })
          : dtObj
      return fromDate
        .set({
          weekday: eow,
        })
        .endOf('day')
    }

    // This returns a DateTime instance
    function startOfDT() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : new Date()
      var unit = arguments.length > 1 ? arguments[1] : undefined
      var datePart = fixUnit$1(unit)
      if (datePart) {
        var dt = DateTime.fromJSDate(date)
        return datePart.includes('week')
          ? startOfDTWeek(dt)
          : dt.startOf(datePart)
      }
      return DateTime.fromJSDate(date)
    }
    function firstOfWeek() {
      return firstDayOfWeek
    }

    // This returns a JS Date from a DateTime instance
    function startOf() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : new Date()
      var unit = arguments.length > 1 ? arguments[1] : undefined
      return startOfDT(date, unit).toJSDate()
    }

    // This returns a DateTime instance
    function endOfDT() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : new Date()
      var unit = arguments.length > 1 ? arguments[1] : undefined
      var datePart = fixUnit$1(unit)
      if (datePart) {
        var dt = DateTime.fromJSDate(date)
        return datePart.includes('week') ? endOfDTWeek(dt) : dt.endOf(datePart)
      }
      return DateTime.fromJSDate(date)
    }
    function endOf() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : new Date()
      var unit = arguments.length > 1 ? arguments[1] : undefined
      return endOfDT(date, unit).toJSDate()
    }
    function eq(a, b, unit) {
      var _defineComparators = defineComparators(a, b, unit),
        _defineComparators2 = _slicedToArray(_defineComparators, 2),
        dtA = _defineComparators2[0],
        dtB = _defineComparators2[1]
      return +dtA == +dtB
    }
    function neq(a, b, unit) {
      return !eq(a, b, unit)
    }
    function gt(a, b, unit) {
      var _defineComparators3 = defineComparators(a, b, unit),
        _defineComparators4 = _slicedToArray(_defineComparators3, 2),
        dtA = _defineComparators4[0],
        dtB = _defineComparators4[1]
      return +dtA > +dtB
    }
    function lt(a, b, unit) {
      var _defineComparators5 = defineComparators(a, b, unit),
        _defineComparators6 = _slicedToArray(_defineComparators5, 2),
        dtA = _defineComparators6[0],
        dtB = _defineComparators6[1]
      return +dtA < +dtB
    }
    function gte(a, b, unit) {
      var _defineComparators7 = defineComparators(a, b, unit),
        _defineComparators8 = _slicedToArray(_defineComparators7, 2),
        dtA = _defineComparators8[0],
        dtB = _defineComparators8[1]
      return +dtA >= +dtB
    }
    function lte(a, b, unit) {
      var _defineComparators9 = defineComparators(a, b, unit),
        _defineComparators10 = _slicedToArray(_defineComparators9, 2),
        dtA = _defineComparators10[0],
        dtB = _defineComparators10[1]
      return +dtA <= +dtB
    }
    function inRange(day, min, max) {
      var unit =
        arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : 'day'
      var datePart = fixUnit$1(unit)
      var mDay = startOfDT(day, datePart)
      var mMin = startOfDT(min, datePart)
      var mMax = startOfDT(max, datePart)
      return +mDay >= +mMin && +mDay <= +mMax
    }
    function min(dateA, dateB) {
      var dtA = DateTime.fromJSDate(dateA)
      var dtB = DateTime.fromJSDate(dateB)
      var minDt = DateTime.min(dtA, dtB)
      return minDt.toJSDate()
    }
    function max(dateA, dateB) {
      var dtA = DateTime.fromJSDate(dateA)
      var dtB = DateTime.fromJSDate(dateB)
      var maxDt = DateTime.max(dtA, dtB)
      return maxDt.toJSDate()
    }
    function merge(date, time) {
      if (!date && !time) return null
      var tm = DateTime.fromJSDate(time)
      var dt = startOfDT(date, 'day')
      return dt
        .set({
          hour: tm.hour,
          minute: tm.minute,
          second: tm.second,
          millisecond: tm.millisecond,
        })
        .toJSDate()
    }
    function add(date, adder, unit) {
      var datePart = fixUnit$1(unit)
      return DateTime.fromJSDate(date)
        .plus(_defineProperty$1({}, datePart, adder))
        .toJSDate()
    }
    function range(start, end) {
      var unit =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : 'day'
      var datePart = fixUnit$1(unit)
      var current = DateTime.fromJSDate(start).toJSDate() // this is to get it to tz
      var days = []
      while (lte(current, end)) {
        days.push(current)
        current = add(current, 1, datePart)
      }
      return days
    }
    function ceil(date, unit) {
      var datePart = fixUnit$1(unit)
      var floor = startOf(date, datePart)
      return eq(floor, date) ? floor : add(floor, 1, datePart)
    }
    function diff(a, b) {
      var unit =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : 'day'
      var datePart = fixUnit$1(unit)
      // don't use 'defineComparators' here, as we don't want to mutate the values
      var dtA = DateTime.fromJSDate(a)
      var dtB = DateTime.fromJSDate(b)
      return Math.floor(
        dtB
          .diff(dtA, datePart, {
            conversionAccuracy: 'longterm',
          })
          .toObject()[datePart]
      )
    }
    function firstVisibleDay(date) {
      var startOfMonth = startOfDT(date, 'month')
      return startOfDTWeek(startOfMonth).toJSDate()
    }
    function lastVisibleDay(date) {
      var endOfMonth = endOfDT(date, 'month')
      return endOfDTWeek(endOfMonth).toJSDate()
    }
    function visibleDays(date) {
      var current = firstVisibleDay(date)
      var last = lastVisibleDay(date)
      var days = []
      while (lte(current, last)) {
        days.push(current)
        current = add(current, 1, 'day')
      }
      return days
    }
    /*** END localized date arithmetic methods with moment ***/

    /**
     * Moved from TimeSlots.js, this method overrides the method of the same name
     * in the localizer.js, using moment to construct the js Date
     * @param {Date} dt - date to start with
     * @param {Number} minutesFromMidnight
     * @param {Number} offset
     * @returns {Date}
     */
    function getSlotDate(dt, minutesFromMidnight, offset) {
      return startOfDT(dt, 'day')
        .set({
          minutes: minutesFromMidnight + offset,
        })
        .toJSDate()
    }

    // Luxon will automatically handle DST differences in it's calculations
    function getTotalMin(start, end) {
      return diff(start, end, 'minutes')
    }
    function getMinutesFromMidnight(start) {
      var dayStart = startOfDT(start, 'day')
      var day = DateTime.fromJSDate(start)
      return Math.round(
        day
          .diff(dayStart, 'minutes', {
            conversionAccuracy: 'longterm',
          })
          .toObject().minutes
      )
    }

    // These two are used by DateSlotMetrics
    function continuesPrior(start, first) {
      return lt(start, first)
    }
    function continuesAfter(start, end, last) {
      return gte(end, last)
    }

    // These two are used by eventLevels
    function sortEvents(_ref7) {
      var _ref7$evtA = _ref7.evtA,
        aStart = _ref7$evtA.start,
        aEnd = _ref7$evtA.end,
        aAllDay = _ref7$evtA.allDay,
        _ref7$evtB = _ref7.evtB,
        bStart = _ref7$evtB.start,
        bEnd = _ref7$evtB.end,
        bAllDay = _ref7$evtB.allDay
      var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day')
      var durA = diff(aStart, ceil(aEnd, 'day'), 'day')
      var durB = diff(bStart, ceil(bEnd, 'day'), 'day')
      return (
        startSort ||
        // sort by start Day first
        Math.max(durB, 1) - Math.max(durA, 1) ||
        // events spanning multiple days go first
        !!bAllDay - !!aAllDay ||
        // then allDay single day events
        +aStart - +bStart ||
        // then sort by start time *don't need moment conversion here
        +aEnd - +bEnd // then sort by end time *don't need moment conversion here either
      )
    }

    function inEventRange(_ref8) {
      var _ref8$event = _ref8.event,
        start = _ref8$event.start,
        end = _ref8$event.end,
        _ref8$range = _ref8.range,
        rangeStart = _ref8$range.start,
        rangeEnd = _ref8$range.end
      var eStart = startOf(start, 'day')
      var startsBeforeEnd = lte(eStart, rangeEnd, 'day')
      // when the event is zero duration we need to handle a bit differently
      var sameMin = neq(eStart, end, 'minutes')
      var endsAfterStart = sameMin
        ? gt(end, rangeStart, 'minutes')
        : gte(end, rangeStart, 'minutes')
      return startsBeforeEnd && endsAfterStart
    }

    // moment treats 'day' and 'date' equality very different
    // moment(date1).isSame(date2, 'day') would test that they were both the same day of the week
    // moment(date1).isSame(date2, 'date') would test that they were both the same date of the month of the year
    function isSameDate(date1, date2) {
      var dt = DateTime.fromJSDate(date1)
      var dt2 = DateTime.fromJSDate(date2)
      return dt.hasSame(dt2, 'day')
    }

    /**
     * This method, called once in the localizer constructor, is used by eventLevels
     * 'eventSegments()' to assist in determining the 'span' of the event in the display,
     * specifically when using a timezone that is greater than the browser native timezone.
     * @returns number
     */
    function browserTZOffset() {
      /**
       * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
       * what you see in it's string, so we have to jump through some hoops to get a value
       * we can actually compare.
       */
      var dt = new Date()
      var neg = /-/.test(dt.toString()) ? '-' : ''
      var dtOffset = dt.getTimezoneOffset()
      var comparator = Number(''.concat(neg).concat(Math.abs(dtOffset)))
      // moment correctly provides positive/negative offset, as expected
      var mtOffset = DateTime.local().offset
      return mtOffset > comparator ? 1 : 0
    }
    return new DateLocalizer({
      format: function format(value, _format, culture) {
        if (culture) {
          return formatDateWithCulture(value, culture, _format)
        }
        return formatDate(value, _format)
      },
      formats: formats$4,
      firstOfWeek: firstOfWeek,
      firstVisibleDay: firstVisibleDay,
      lastVisibleDay: lastVisibleDay,
      visibleDays: visibleDays,
      lt: lt,
      lte: lte,
      gt: gt,
      gte: gte,
      eq: eq,
      neq: neq,
      merge: merge,
      inRange: inRange,
      startOf: startOf,
      endOf: endOf,
      range: range,
      add: add,
      diff: diff,
      ceil: ceil,
      min: min,
      max: max,
      getSlotDate: getSlotDate,
      getTotalMin: getTotalMin,
      getMinutesFromMidnight: getMinutesFromMidnight,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      sortEvents: sortEvents,
      inEventRange: inEventRange,
      isSameDate: isSameDate,
      browserTZOffset: browserTZOffset,
    })
  }

  var dateRangeFormat$3 = function dateRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(start, 'd', culture) +
      ' – ' +
      local.format(end, 'd', culture)
    )
  }
  var timeRangeFormat$3 = function timeRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(start, 't', culture) +
      ' – ' +
      local.format(end, 't', culture)
    )
  }
  var timeRangeStartFormat$3 = function timeRangeStartFormat(
    _ref3,
    culture,
    local
  ) {
    var start = _ref3.start
    return local.format(start, 't', culture) + ' – '
  }
  var timeRangeEndFormat$3 = function timeRangeEndFormat(
    _ref4,
    culture,
    local
  ) {
    var end = _ref4.end
    return ' – ' + local.format(end, 't', culture)
  }
  var weekRangeFormat$3 = function weekRangeFormat(_ref5, culture, local) {
    var start = _ref5.start,
      end = _ref5.end
    return (
      local.format(start, 'MMM dd', culture) +
      ' – ' +
      local.format(end, eq$6(start, end, 'month') ? 'dd' : 'MMM dd', culture)
    )
  }
  var formats$3 = {
    dateFormat: 'dd',
    dayFormat: 'ddd dd/MM',
    weekdayFormat: 'ddd',
    selectRangeFormat: timeRangeFormat$3,
    eventTimeRangeFormat: timeRangeFormat$3,
    eventTimeRangeStartFormat: timeRangeStartFormat$3,
    eventTimeRangeEndFormat: timeRangeEndFormat$3,
    timeGutterFormat: 't',
    monthHeaderFormat: 'Y',
    dayHeaderFormat: 'dddd MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$3,
    agendaHeaderFormat: dateRangeFormat$3,
    agendaDateFormat: 'ddd MMM dd',
    agendaTimeFormat: 't',
    agendaTimeRangeFormat: timeRangeFormat$3,
  }
  function oldGlobalize(globalize) {
    function getCulture(culture) {
      return culture
        ? globalize.findClosestCulture(culture)
        : globalize.culture()
    }
    function firstOfWeek(culture) {
      culture = getCulture(culture)
      return (culture && culture.calendar.firstDay) || 0
    }
    return new DateLocalizer({
      firstOfWeek: firstOfWeek,
      formats: formats$3,
      format: function format(value, _format, culture) {
        return globalize.format(value, _format, culture)
      },
    })
  }

  var dateRangeFormat$2 = function dateRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(
        start,
        {
          date: 'short',
        },
        culture
      ) +
      ' – ' +
      local.format(
        end,
        {
          date: 'short',
        },
        culture
      )
    )
  }
  var timeRangeFormat$2 = function timeRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(
        start,
        {
          time: 'short',
        },
        culture
      ) +
      ' – ' +
      local.format(
        end,
        {
          time: 'short',
        },
        culture
      )
    )
  }
  var timeRangeStartFormat$2 = function timeRangeStartFormat(
    _ref3,
    culture,
    local
  ) {
    var start = _ref3.start
    return (
      local.format(
        start,
        {
          time: 'short',
        },
        culture
      ) + ' – '
    )
  }
  var timeRangeEndFormat$2 = function timeRangeEndFormat(
    _ref4,
    culture,
    local
  ) {
    var end = _ref4.end
    return (
      ' – ' +
      local.format(
        end,
        {
          time: 'short',
        },
        culture
      )
    )
  }
  var weekRangeFormat$2 = function weekRangeFormat(_ref5, culture, local) {
    var start = _ref5.start,
      end = _ref5.end
    return (
      local.format(start, 'MMM dd', culture) +
      ' – ' +
      local.format(end, eq$6(start, end, 'month') ? 'dd' : 'MMM dd', culture)
    )
  }
  var formats$2 = {
    dateFormat: 'dd',
    dayFormat: 'eee dd/MM',
    weekdayFormat: 'eee',
    selectRangeFormat: timeRangeFormat$2,
    eventTimeRangeFormat: timeRangeFormat$2,
    eventTimeRangeStartFormat: timeRangeStartFormat$2,
    eventTimeRangeEndFormat: timeRangeEndFormat$2,
    timeGutterFormat: {
      time: 'short',
    },
    monthHeaderFormat: 'MMMM yyyy',
    dayHeaderFormat: 'eeee MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$2,
    agendaHeaderFormat: dateRangeFormat$2,
    agendaDateFormat: 'eee MMM dd',
    agendaTimeFormat: {
      time: 'short',
    },
    agendaTimeRangeFormat: timeRangeFormat$2,
  }
  function globalize(globalize) {
    var locale = function locale(culture) {
      return culture ? globalize(culture) : globalize
    }

    // return the first day of the week from the locale data. Defaults to 'world'
    // territory if no territory is derivable from CLDR.
    // Failing to use CLDR supplemental (not loaded?), revert to the original
    // method of getting first day of week.
    function firstOfWeek(culture) {
      try {
        var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        var cldr = locale(culture).cldr
        var territory = cldr.attributes.territory
        var weekData = cldr.get('supplemental').weekData
        var firstDay = weekData.firstDay[territory || '001']
        return days.indexOf(firstDay)
      } catch (e) {
        {
          console.error(
            'Failed to accurately determine first day of the week.' +
              ' Is supplemental data loaded into CLDR?'
          )
        }
        // maybe cldr supplemental is not loaded? revert to original method
        var date = new Date()
        //cldr-data doesn't seem to be zero based
        var localeDay = Math.max(
          parseInt(
            locale(culture).formatDate(date, {
              raw: 'e',
            }),
            10
          ) - 1,
          0
        )
        return Math.abs(date.getDay() - localeDay)
      }
    }
    if (!globalize.load) return oldGlobalize(globalize)
    return new DateLocalizer({
      firstOfWeek: firstOfWeek,
      formats: formats$2,
      format: function format(value, _format, culture) {
        _format =
          typeof _format === 'string'
            ? {
                raw: _format,
              }
            : _format
        return locale(culture).formatDate(value, _format)
      },
    })
  }

  var dateRangeFormat$1 = function dateRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return ''
      .concat(local.format(start, 'P', culture), ' \u2013 ')
      .concat(local.format(end, 'P', culture))
  }
  var timeRangeFormat$1 = function timeRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return ''
      .concat(local.format(start, 'p', culture), ' \u2013 ')
      .concat(local.format(end, 'p', culture))
  }
  var timeRangeStartFormat$1 = function timeRangeStartFormat(
    _ref3,
    culture,
    local
  ) {
    var start = _ref3.start
    return ''.concat(local.format(start, 'h:mma', culture), ' \u2013 ')
  }
  var timeRangeEndFormat$1 = function timeRangeEndFormat(
    _ref4,
    culture,
    local
  ) {
    var end = _ref4.end
    return ' \u2013 '.concat(local.format(end, 'h:mma', culture))
  }
  var weekRangeFormat$1 = function weekRangeFormat(_ref5, culture, local) {
    var start = _ref5.start,
      end = _ref5.end
    return ''
      .concat(local.format(start, 'MMMM dd', culture), ' \u2013 ')
      .concat(
        local.format(end, eq$6(start, end, 'month') ? 'dd' : 'MMMM dd', culture)
      )
  }
  var formats$1 = {
    dateFormat: 'dd',
    dayFormat: 'dd eee',
    weekdayFormat: 'cccc',
    selectRangeFormat: timeRangeFormat$1,
    eventTimeRangeFormat: timeRangeFormat$1,
    eventTimeRangeStartFormat: timeRangeStartFormat$1,
    eventTimeRangeEndFormat: timeRangeEndFormat$1,
    timeGutterFormat: 'p',
    monthHeaderFormat: 'MMMM yyyy',
    dayHeaderFormat: 'cccc MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$1,
    agendaHeaderFormat: dateRangeFormat$1,
    agendaDateFormat: 'ccc MMM dd',
    agendaTimeFormat: 'p',
    agendaTimeRangeFormat: timeRangeFormat$1,
  }
  var dateFnsLocalizer = function dateFnsLocalizer(_ref6) {
    var startOfWeek = _ref6.startOfWeek,
      getDay = _ref6.getDay,
      _format = _ref6.format,
      locales = _ref6.locales
    return new DateLocalizer({
      formats: formats$1,
      firstOfWeek: function firstOfWeek(culture) {
        return getDay(
          startOfWeek(new Date(), {
            locale: locales[culture],
          })
        )
      },
      format: function format(value, formatString, culture) {
        return _format(new Date(value), formatString, {
          locale: locales[culture],
        })
      },
    })
  }

  var isBetweenExports = {}
  var isBetween$1 = {
    get exports() {
      return isBetweenExports
    },
    set exports(v) {
      isBetweenExports = v
    },
  }

  ;(function (module, exports) {
    !(function (e, i) {
      module.exports = i()
    })(commonjsGlobal, function () {
      return function (e, i, t) {
        i.prototype.isBetween = function (e, i, s, f) {
          var n = t(e),
            o = t(i),
            r = '(' === (f = f || '()')[0],
            u = ')' === f[1]
          return (
            ((r ? this.isAfter(n, s) : !this.isBefore(n, s)) &&
              (u ? this.isBefore(o, s) : !this.isAfter(o, s))) ||
            ((r ? this.isBefore(n, s) : !this.isAfter(n, s)) &&
              (u ? this.isAfter(o, s) : !this.isBefore(o, s)))
          )
        }
      }
    })
  })(isBetween$1)

  var isBetween = isBetweenExports

  var isSameOrAfterExports = {}
  var isSameOrAfter$1 = {
    get exports() {
      return isSameOrAfterExports
    },
    set exports(v) {
      isSameOrAfterExports = v
    },
  }

  ;(function (module, exports) {
    !(function (e, t) {
      module.exports = t()
    })(commonjsGlobal, function () {
      return function (e, t) {
        t.prototype.isSameOrAfter = function (e, t) {
          return this.isSame(e, t) || this.isAfter(e, t)
        }
      }
    })
  })(isSameOrAfter$1)

  var isSameOrAfter = isSameOrAfterExports

  var isSameOrBeforeExports = {}
  var isSameOrBefore$1 = {
    get exports() {
      return isSameOrBeforeExports
    },
    set exports(v) {
      isSameOrBeforeExports = v
    },
  }

  ;(function (module, exports) {
    !(function (e, i) {
      module.exports = i()
    })(commonjsGlobal, function () {
      return function (e, i) {
        i.prototype.isSameOrBefore = function (e, i) {
          return this.isSame(e, i) || this.isBefore(e, i)
        }
      }
    })
  })(isSameOrBefore$1)

  var isSameOrBefore = isSameOrBeforeExports

  var localeDataExports = {}
  var localeData$1 = {
    get exports() {
      return localeDataExports
    },
    set exports(v) {
      localeDataExports = v
    },
  }

  ;(function (module, exports) {
    !(function (n, e) {
      module.exports = e()
    })(commonjsGlobal, function () {
      return function (n, e, t) {
        var r = e.prototype,
          o = function (n) {
            return n && (n.indexOf ? n : n.s)
          },
          u = function (n, e, t, r, u) {
            var i = n.name ? n : n.$locale(),
              a = o(i[e]),
              s = o(i[t]),
              f =
                a ||
                s.map(function (n) {
                  return n.slice(0, r)
                })
            if (!u) return f
            var d = i.weekStart
            return f.map(function (n, e) {
              return f[(e + (d || 0)) % 7]
            })
          },
          i = function () {
            return t.Ls[t.locale()]
          },
          a = function (n, e) {
            return (
              n.formats[e] ||
              (function (n) {
                return n.replace(
                  /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                  function (n, e, t) {
                    return e || t.slice(1)
                  }
                )
              })(n.formats[e.toUpperCase()])
            )
          },
          s = function () {
            var n = this
            return {
              months: function (e) {
                return e ? e.format('MMMM') : u(n, 'months')
              },
              monthsShort: function (e) {
                return e ? e.format('MMM') : u(n, 'monthsShort', 'months', 3)
              },
              firstDayOfWeek: function () {
                return n.$locale().weekStart || 0
              },
              weekdays: function (e) {
                return e ? e.format('dddd') : u(n, 'weekdays')
              },
              weekdaysMin: function (e) {
                return e ? e.format('dd') : u(n, 'weekdaysMin', 'weekdays', 2)
              },
              weekdaysShort: function (e) {
                return e
                  ? e.format('ddd')
                  : u(n, 'weekdaysShort', 'weekdays', 3)
              },
              longDateFormat: function (e) {
                return a(n.$locale(), e)
              },
              meridiem: this.$locale().meridiem,
              ordinal: this.$locale().ordinal,
            }
          }
        ;(r.localeData = function () {
          return s.bind(this)()
        }),
          (t.localeData = function () {
            var n = i()
            return {
              firstDayOfWeek: function () {
                return n.weekStart || 0
              },
              weekdays: function () {
                return t.weekdays()
              },
              weekdaysShort: function () {
                return t.weekdaysShort()
              },
              weekdaysMin: function () {
                return t.weekdaysMin()
              },
              months: function () {
                return t.months()
              },
              monthsShort: function () {
                return t.monthsShort()
              },
              longDateFormat: function (e) {
                return a(n, e)
              },
              meridiem: n.meridiem,
              ordinal: n.ordinal,
            }
          }),
          (t.months = function () {
            return u(i(), 'months')
          }),
          (t.monthsShort = function () {
            return u(i(), 'monthsShort', 'months', 3)
          }),
          (t.weekdays = function (n) {
            return u(i(), 'weekdays', null, null, n)
          }),
          (t.weekdaysShort = function (n) {
            return u(i(), 'weekdaysShort', 'weekdays', 3, n)
          }),
          (t.weekdaysMin = function (n) {
            return u(i(), 'weekdaysMin', 'weekdays', 2, n)
          })
      }
    })
  })(localeData$1)

  var localeData = localeDataExports

  var localizedFormatExports = {}
  var localizedFormat$1 = {
    get exports() {
      return localizedFormatExports
    },
    set exports(v) {
      localizedFormatExports = v
    },
  }

  ;(function (module, exports) {
    !(function (e, t) {
      module.exports = t()
    })(commonjsGlobal, function () {
      var e = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
      }
      return function (t, o, n) {
        var r = o.prototype,
          i = r.format
        ;(n.en.formats = e),
          (r.format = function (t) {
            void 0 === t && (t = 'YYYY-MM-DDTHH:mm:ssZ')
            var o = this.$locale().formats,
              n = (function (t, o) {
                return t.replace(
                  /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                  function (t, n, r) {
                    var i = r && r.toUpperCase()
                    return (
                      n ||
                      o[r] ||
                      e[r] ||
                      o[i].replace(
                        /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                        function (e, t, o) {
                          return t || o.slice(1)
                        }
                      )
                    )
                  }
                )
              })(t, void 0 === o ? {} : o)
            return i.call(this, n)
          })
      }
    })
  })(localizedFormat$1)

  var localizedFormat = localizedFormatExports

  var minMaxExports = {}
  var minMax$1 = {
    get exports() {
      return minMaxExports
    },
    set exports(v) {
      minMaxExports = v
    },
  }

  ;(function (module, exports) {
    !(function (e, n) {
      module.exports = n()
    })(commonjsGlobal, function () {
      return function (e, n, t) {
        var i = function (e, n) {
          if (!n || !n.length || !n[0] || (1 === n.length && !n[0].length))
            return null
          var t
          1 === n.length && n[0].length > 0 && (n = n[0])
          t = n[0]
          for (var i = 1; i < n.length; i += 1)
            (n[i].isValid() && !n[i][e](t)) || (t = n[i])
          return t
        }
        ;(t.max = function () {
          var e = [].slice.call(arguments, 0)
          return i('isAfter', e)
        }),
          (t.min = function () {
            var e = [].slice.call(arguments, 0)
            return i('isBefore', e)
          })
      }
    })
  })(minMax$1)

  var minMax = minMaxExports

  var utcExports = {}
  var utc$1 = {
    get exports() {
      return utcExports
    },
    set exports(v) {
      utcExports = v
    },
  }

  ;(function (module, exports) {
    !(function (t, i) {
      module.exports = i()
    })(commonjsGlobal, function () {
      var t = 'minute',
        i = /[+-]\d\d(?::?\d\d)?/g,
        e = /([+-]|\d\d)/g
      return function (s, f, n) {
        var u = f.prototype
        ;(n.utc = function (t) {
          var i = { date: t, utc: !0, args: arguments }
          return new f(i)
        }),
          (u.utc = function (i) {
            var e = n(this.toDate(), { locale: this.$L, utc: !0 })
            return i ? e.add(this.utcOffset(), t) : e
          }),
          (u.local = function () {
            return n(this.toDate(), { locale: this.$L, utc: !1 })
          })
        var o = u.parse
        u.parse = function (t) {
          t.utc && (this.$u = !0),
            this.$utils().u(t.$offset) || (this.$offset = t.$offset),
            o.call(this, t)
        }
        var r = u.init
        u.init = function () {
          if (this.$u) {
            var t = this.$d
            ;(this.$y = t.getUTCFullYear()),
              (this.$M = t.getUTCMonth()),
              (this.$D = t.getUTCDate()),
              (this.$W = t.getUTCDay()),
              (this.$H = t.getUTCHours()),
              (this.$m = t.getUTCMinutes()),
              (this.$s = t.getUTCSeconds()),
              (this.$ms = t.getUTCMilliseconds())
          } else r.call(this)
        }
        var a = u.utcOffset
        u.utcOffset = function (s, f) {
          var n = this.$utils().u
          if (n(s))
            return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset
          if (
            'string' == typeof s &&
            ((s = (function (t) {
              void 0 === t && (t = '')
              var s = t.match(i)
              if (!s) return null
              var f = ('' + s[0]).match(e) || ['-', 0, 0],
                n = f[0],
                u = 60 * +f[1] + +f[2]
              return 0 === u ? 0 : '+' === n ? u : -u
            })(s)),
            null === s)
          )
            return this
          var u = Math.abs(s) <= 16 ? 60 * s : s,
            o = this
          if (f) return (o.$offset = u), (o.$u = 0 === s), o
          if (0 !== s) {
            var r = this.$u
              ? this.toDate().getTimezoneOffset()
              : -1 * this.utcOffset()
            ;((o = this.local().add(u + r, t)).$offset = u),
              (o.$x.$localOffset = r)
          } else o = this.utc()
          return o
        }
        var h = u.format
        ;(u.format = function (t) {
          var i = t || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '')
          return h.call(this, i)
        }),
          (u.valueOf = function () {
            var t = this.$utils().u(this.$offset)
              ? 0
              : this.$offset +
                (this.$x.$localOffset || this.$d.getTimezoneOffset())
            return this.$d.valueOf() - 6e4 * t
          }),
          (u.isUTC = function () {
            return !!this.$u
          }),
          (u.toISOString = function () {
            return this.toDate().toISOString()
          }),
          (u.toString = function () {
            return this.toDate().toUTCString()
          })
        var l = u.toDate
        u.toDate = function (t) {
          return 's' === t && this.$offset
            ? n(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
            : l.call(this)
        }
        var c = u.diff
        u.diff = function (t, i, e) {
          if (t && this.$u === t.$u) return c.call(this, t, i, e)
          var s = this.local(),
            f = n(t).local()
          return c.call(s, f, i, e)
        }
      }
    })
  })(utc$1)

  var utc = utcExports

  var weekRangeFormat = function weekRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(start, 'MMMM DD', culture) +
      ' – ' +
      // updated to use this localizer 'eq()' method
      local.format(
        end,
        local.eq(start, end, 'month') ? 'DD' : 'MMMM DD',
        culture
      )
    )
  }
  var dateRangeFormat = function dateRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(start, 'L', culture) +
      ' – ' +
      local.format(end, 'L', culture)
    )
  }
  var timeRangeFormat = function timeRangeFormat(_ref3, culture, local) {
    var start = _ref3.start,
      end = _ref3.end
    return (
      local.format(start, 'LT', culture) +
      ' – ' +
      local.format(end, 'LT', culture)
    )
  }
  var timeRangeStartFormat = function timeRangeStartFormat(
    _ref4,
    culture,
    local
  ) {
    var start = _ref4.start
    return local.format(start, 'LT', culture) + ' – '
  }
  var timeRangeEndFormat = function timeRangeEndFormat(_ref5, culture, local) {
    var end = _ref5.end
    return ' – ' + local.format(end, 'LT', culture)
  }
  var formats = {
    dateFormat: 'DD',
    dayFormat: 'DD ddd',
    weekdayFormat: 'ddd',
    selectRangeFormat: timeRangeFormat,
    eventTimeRangeFormat: timeRangeFormat,
    eventTimeRangeStartFormat: timeRangeStartFormat,
    eventTimeRangeEndFormat: timeRangeEndFormat,
    timeGutterFormat: 'LT',
    monthHeaderFormat: 'MMMM YYYY',
    dayHeaderFormat: 'dddd MMM DD',
    dayRangeHeaderFormat: weekRangeFormat,
    agendaHeaderFormat: dateRangeFormat,
    agendaDateFormat: 'ddd MMM DD',
    agendaTimeFormat: 'LT',
    agendaTimeRangeFormat: timeRangeFormat,
  }
  function fixUnit(unit) {
    var datePart = unit ? unit.toLowerCase() : unit
    if (datePart === 'FullYear') {
      datePart = 'year'
    } else if (!datePart) {
      datePart = undefined
    }
    return datePart
  }
  function dayjs(dayjsLib) {
    // load dayjs plugins
    dayjsLib.extend(isBetween)
    dayjsLib.extend(isSameOrAfter)
    dayjsLib.extend(isSameOrBefore)
    dayjsLib.extend(localeData)
    dayjsLib.extend(localizedFormat)
    dayjsLib.extend(minMax)
    dayjsLib.extend(utc)
    var locale = function locale(dj, c) {
      return c ? dj.locale(c) : dj
    }

    // if the timezone plugin is loaded,
    // then use the timezone aware version
    var dayjs = dayjsLib.tz ? dayjsLib.tz : dayjsLib
    function getTimezoneOffset(date) {
      // ensures this gets cast to timezone
      return dayjs(date).toDate().getTimezoneOffset()
    }
    function getDstOffset(start, end) {
      var _st$tz$$x$$timezone
      // convert to dayjs, in case
      var st = dayjs(start)
      var ed = dayjs(end)
      // if not using the dayjs timezone plugin
      if (!dayjs.tz) {
        return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset()
      }
      /**
       * If a default timezone has been applied, then
       * use this to get the proper timezone offset, otherwise default
       * the timezone to the browser local
       */
      var tzName =
        (_st$tz$$x$$timezone = st.tz().$x.$timezone) !== null &&
        _st$tz$$x$$timezone !== void 0
          ? _st$tz$$x$$timezone
          : dayjsLib.tz.guess()
      // invert offsets to be inline with moment.js
      var startOffset = -dayjs.tz(+st, tzName).utcOffset()
      var endOffset = -dayjs.tz(+ed, tzName).utcOffset()
      return startOffset - endOffset
    }
    function getDayStartDstOffset(start) {
      var dayStart = dayjs(start).startOf('day')
      return getDstOffset(dayStart, start)
    }

    /*** BEGIN localized date arithmetic methods with dayjs ***/
    function defineComparators(a, b, unit) {
      var datePart = fixUnit(unit)
      var dtA = datePart ? dayjs(a).startOf(datePart) : dayjs(a)
      var dtB = datePart ? dayjs(b).startOf(datePart) : dayjs(b)
      return [dtA, dtB, datePart]
    }
    function startOf() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
      var unit = arguments.length > 1 ? arguments[1] : undefined
      var datePart = fixUnit(unit)
      if (datePart) {
        return dayjs(date).startOf(datePart).toDate()
      }
      return dayjs(date).toDate()
    }
    function endOf() {
      var date =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
      var unit = arguments.length > 1 ? arguments[1] : undefined
      var datePart = fixUnit(unit)
      if (datePart) {
        return dayjs(date).endOf(datePart).toDate()
      }
      return dayjs(date).toDate()
    }

    // dayjs comparison operations *always* convert both sides to dayjs objects
    // prior to running the comparisons
    function eq(a, b, unit) {
      var _defineComparators = defineComparators(a, b, unit),
        _defineComparators2 = _slicedToArray(_defineComparators, 3),
        dtA = _defineComparators2[0],
        dtB = _defineComparators2[1],
        datePart = _defineComparators2[2]
      return dtA.isSame(dtB, datePart)
    }
    function neq(a, b, unit) {
      return !eq(a, b, unit)
    }
    function gt(a, b, unit) {
      var _defineComparators3 = defineComparators(a, b, unit),
        _defineComparators4 = _slicedToArray(_defineComparators3, 3),
        dtA = _defineComparators4[0],
        dtB = _defineComparators4[1],
        datePart = _defineComparators4[2]
      return dtA.isAfter(dtB, datePart)
    }
    function lt(a, b, unit) {
      var _defineComparators5 = defineComparators(a, b, unit),
        _defineComparators6 = _slicedToArray(_defineComparators5, 3),
        dtA = _defineComparators6[0],
        dtB = _defineComparators6[1],
        datePart = _defineComparators6[2]
      return dtA.isBefore(dtB, datePart)
    }
    function gte(a, b, unit) {
      var _defineComparators7 = defineComparators(a, b, unit),
        _defineComparators8 = _slicedToArray(_defineComparators7, 3),
        dtA = _defineComparators8[0],
        dtB = _defineComparators8[1],
        datePart = _defineComparators8[2]
      return dtA.isSameOrBefore(dtB, datePart)
    }
    function lte(a, b, unit) {
      var _defineComparators9 = defineComparators(a, b, unit),
        _defineComparators10 = _slicedToArray(_defineComparators9, 3),
        dtA = _defineComparators10[0],
        dtB = _defineComparators10[1],
        datePart = _defineComparators10[2]
      return dtA.isSameOrBefore(dtB, datePart)
    }
    function inRange(day, min, max) {
      var unit =
        arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : 'day'
      var datePart = fixUnit(unit)
      var djDay = dayjs(day)
      var djMin = dayjs(min)
      var djMax = dayjs(max)
      return djDay.isBetween(djMin, djMax, datePart, '[]')
    }
    function min(dateA, dateB) {
      var dtA = dayjs(dateA)
      var dtB = dayjs(dateB)
      var minDt = dayjsLib.min(dtA, dtB)
      return minDt.toDate()
    }
    function max(dateA, dateB) {
      var dtA = dayjs(dateA)
      var dtB = dayjs(dateB)
      var maxDt = dayjsLib.max(dtA, dtB)
      return maxDt.toDate()
    }
    function merge(date, time) {
      if (!date && !time) return null
      var tm = dayjs(time).format('HH:mm:ss')
      var dt = dayjs(date).startOf('day').format('MM/DD/YYYY')
      // We do it this way to avoid issues when timezone switching
      return dayjsLib(
        ''.concat(dt, ' ').concat(tm),
        'MM/DD/YYYY HH:mm:ss'
      ).toDate()
    }
    function add(date, adder, unit) {
      var datePart = fixUnit(unit)
      return dayjs(date).add(adder, datePart).toDate()
    }
    function range(start, end) {
      var unit =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : 'day'
      var datePart = fixUnit(unit)
      // because the add method will put these in tz, we have to start that way
      var current = dayjs(start).toDate()
      var days = []
      while (lte(current, end)) {
        days.push(current)
        current = add(current, 1, datePart)
      }
      return days
    }
    function ceil(date, unit) {
      var datePart = fixUnit(unit)
      var floor = startOf(date, datePart)
      return eq(floor, date) ? floor : add(floor, 1, datePart)
    }
    function diff(a, b) {
      var unit =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : 'day'
      var datePart = fixUnit(unit)
      // don't use 'defineComparators' here, as we don't want to mutate the values
      var dtA = dayjs(a)
      var dtB = dayjs(b)
      return dtB.diff(dtA, datePart)
    }
    function minutes(date) {
      var dt = dayjs(date)
      return dt.minutes()
    }
    function firstOfWeek(culture) {
      var data = culture ? dayjsLib.localeData(culture) : dayjsLib.localeData()
      return data ? data.firstDayOfWeek() : 0
    }
    function firstVisibleDay(date) {
      return dayjs(date).startOf('month').startOf('week').toDate()
    }
    function lastVisibleDay(date) {
      return dayjs(date).endOf('month').endOf('week').toDate()
    }
    function visibleDays(date) {
      var current = firstVisibleDay(date)
      var last = lastVisibleDay(date)
      var days = []
      while (lte(current, last)) {
        days.push(current)
        current = add(current, 1, 'd')
      }
      return days
    }
    /*** END localized date arithmetic methods with dayjs ***/

    /**
     * Moved from TimeSlots.js, this method overrides the method of the same name
     * in the localizer.js, using dayjs to construct the js Date
     * @param {Date} dt - date to start with
     * @param {Number} minutesFromMidnight
     * @param {Number} offset
     * @returns {Date}
     */
    function getSlotDate(dt, minutesFromMidnight, offset) {
      return dayjs(dt)
        .startOf('day')
        .minute(minutesFromMidnight + offset)
        .toDate()
    }

    // dayjs will automatically handle DST differences in it's calculations
    function getTotalMin(start, end) {
      return diff(start, end, 'minutes')
    }
    function getMinutesFromMidnight(start) {
      var dayStart = dayjs(start).startOf('day')
      var day = dayjs(start)
      return day.diff(dayStart, 'minutes') + getDayStartDstOffset(start)
    }

    // These two are used by DateSlotMetrics
    function continuesPrior(start, first) {
      var djStart = dayjs(start)
      var djFirst = dayjs(first)
      return djStart.isBefore(djFirst, 'day')
    }
    function continuesAfter(start, end, last) {
      var djEnd = dayjs(end)
      var djLast = dayjs(last)
      return djEnd.isSameOrAfter(djLast, 'minutes')
    }

    // These two are used by eventLevels
    function sortEvents(_ref6) {
      var _ref6$evtA = _ref6.evtA,
        aStart = _ref6$evtA.start,
        aEnd = _ref6$evtA.end,
        aAllDay = _ref6$evtA.allDay,
        _ref6$evtB = _ref6.evtB,
        bStart = _ref6$evtB.start,
        bEnd = _ref6$evtB.end,
        bAllDay = _ref6$evtB.allDay
      var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day')
      var durA = diff(aStart, ceil(aEnd, 'day'), 'day')
      var durB = diff(bStart, ceil(bEnd, 'day'), 'day')
      return (
        startSort ||
        // sort by start Day first
        Math.max(durB, 1) - Math.max(durA, 1) ||
        // events spanning multiple days go first
        !!bAllDay - !!aAllDay ||
        // then allDay single day events
        +aStart - +bStart ||
        // then sort by start time *don't need dayjs conversion here
        +aEnd - +bEnd // then sort by end time *don't need dayjs conversion here either
      )
    }

    function inEventRange(_ref7) {
      var _ref7$event = _ref7.event,
        start = _ref7$event.start,
        end = _ref7$event.end,
        _ref7$range = _ref7.range,
        rangeStart = _ref7$range.start,
        rangeEnd = _ref7$range.end
      var startOfDay = dayjs(start).startOf('day')
      var eEnd = dayjs(end)
      var rStart = dayjs(rangeStart)
      var rEnd = dayjs(rangeEnd)
      var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, 'day')
      // when the event is zero duration we need to handle a bit differently
      var sameMin = !startOfDay.isSame(eEnd, 'minutes')
      var endsAfterStart = sameMin
        ? eEnd.isAfter(rStart, 'minutes')
        : eEnd.isSameOrAfter(rStart, 'minutes')
      return startsBeforeEnd && endsAfterStart
    }
    function isSameDate(date1, date2) {
      var dt = dayjs(date1)
      var dt2 = dayjs(date2)
      return dt.isSame(dt2, 'day')
    }

    /**
     * This method, called once in the localizer constructor, is used by eventLevels
     * 'eventSegments()' to assist in determining the 'span' of the event in the display,
     * specifically when using a timezone that is greater than the browser native timezone.
     * @returns number
     */
    function browserTZOffset() {
      /**
       * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
       * what you see in it's string, so we have to jump through some hoops to get a value
       * we can actually compare.
       */
      var dt = new Date()
      var neg = /-/.test(dt.toString()) ? '-' : ''
      var dtOffset = dt.getTimezoneOffset()
      var comparator = Number(''.concat(neg).concat(Math.abs(dtOffset)))
      // dayjs correctly provides positive/negative offset, as expected
      var mtOffset = dayjs().utcOffset()
      return mtOffset > comparator ? 1 : 0
    }
    return new DateLocalizer({
      formats: formats,
      firstOfWeek: firstOfWeek,
      firstVisibleDay: firstVisibleDay,
      lastVisibleDay: lastVisibleDay,
      visibleDays: visibleDays,
      format: function format(value, _format, culture) {
        return locale(dayjs(value), culture).format(_format)
      },
      lt: lt,
      lte: lte,
      gt: gt,
      gte: gte,
      eq: eq,
      neq: neq,
      merge: merge,
      inRange: inRange,
      startOf: startOf,
      endOf: endOf,
      range: range,
      add: add,
      diff: diff,
      ceil: ceil,
      min: min,
      max: max,
      minutes: minutes,
      getSlotDate: getSlotDate,
      getTimezoneOffset: getTimezoneOffset,
      getDstOffset: getDstOffset,
      getTotalMin: getTotalMin,
      getMinutesFromMidnight: getMinutesFromMidnight,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      sortEvents: sortEvents,
      inEventRange: inEventRange,
      isSameDate: isSameDate,
      browserTZOffset: browserTZOffset,
    })
  }

  var components = {
    eventWrapper: NoopWrapper,
    timeSlotWrapper: NoopWrapper,
    dateCellWrapper: NoopWrapper,
  }

  exports.Calendar = Calendar$1
  exports.DateLocalizer = DateLocalizer
  exports.Navigate = navigate
  exports.Views = views
  exports.components = components
  exports.dateFnsLocalizer = dateFnsLocalizer
  exports.dayjsLocalizer = dayjs
  exports.globalizeLocalizer = globalize
  exports.luxonLocalizer = luxon
  exports.momentLocalizer = moment
  exports.move = moveDate
})
