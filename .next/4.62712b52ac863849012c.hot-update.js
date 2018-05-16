webpackHotUpdate(4,{

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
var _jsxFileName = '/Users/vikasabhale/Sites/exp/next-movies/components/header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var header = function (_Component) {
    _inherits(header, _Component);

    function header() {
        _classCallCheck(this, header);

        return _possibleConstructorReturn(this, (header.__proto__ || Object.getPrototypeOf(header)).apply(this, arguments));
    }

    _createClass(header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'navbar navbar-dark bg-dark', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { className: 'navbar-nav', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { className: 'nav-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1__routes__["Link"],
                            { href: 'movies', params: { slug: 'mumbai' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                { className: 'nav-link', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 12
                                    }
                                },
                                'Movies Listing'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { className: 'nav-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1__routes__["Link"],
                            { href: '/mumbai/events', params: { slug: 'mumbai' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                { className: 'nav-link', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 17
                                    }
                                },
                                'Events Listing'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = header;


/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(header, 'header', '/Users/vikasabhale/Sites/exp/next-movies/components/header.js');
    reactHotLoader.register(_default, 'default', '/Users/vikasabhale/Sites/exp/next-movies/components/header.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/events/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_EVENTS_SUCCESS; });
/* unused harmony export EVENTS_HAS_ERRORED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EVENTS_IS_LOADING; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
var EVENTS_HAS_ERRORED = 'EVENTS_HAS_ERRORED';
var EVENTS_IS_LOADING = 'EVENTS_IS_LOADING';
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LOAD_EVENTS_SUCCESS, 'LOAD_EVENTS_SUCCESS', '/Users/vikasabhale/Sites/exp/next-movies/pages/events/actionTypes.js');
  reactHotLoader.register(EVENTS_HAS_ERRORED, 'EVENTS_HAS_ERRORED', '/Users/vikasabhale/Sites/exp/next-movies/pages/events/actionTypes.js');
  reactHotLoader.register(EVENTS_IS_LOADING, 'EVENTS_IS_LOADING', '/Users/vikasabhale/Sites/exp/next-movies/pages/events/actionTypes.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/events/actionTypes")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/events/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = events;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./pages/events/actionTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
      var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

      enterModule && enterModule(module);
})();



function events() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { eventsData: [] };
      var action = arguments[1];


      switch (action.type) {
            case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* LOAD_EVENTS_SUCCESS */]:
                  return _extends({}, state, { eventsData: action.evts });

            case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* EVENTS_IS_LOADING */]:
                  return _extends({}, state, { EventsLoading: action.bool });

            default:
                  return state;
      }
}
;

(function () {
      var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

      var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

      if (!reactHotLoader) {
            return;
      }

      reactHotLoader.register(events, 'events', '/Users/vikasabhale/Sites/exp/next-movies/pages/events/reducer.js');
      leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/events/reducer")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.62712b52ac863849012c.hot-update.js.map