webpackHotUpdate(4,{

/***/ "./pages/movies/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movActionsCreator__ = __webpack_require__("./pages/movies/movActionsCreator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__moviesAction__ = __webpack_require__("./pages/movies/moviesAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_BMSApi__ = __webpack_require__("./helper/BMSApi.js");

var _jsxFileName = '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// https://github.com/zeit/next.js/blob/master/examples/with-redux/store.js

var movies = function (_Component) {
    _inherits(movies, _Component);

    function movies() {
        _classCallCheck(this, movies);

        return _possibleConstructorReturn(this, (movies.__proto__ || Object.getPrototypeOf(movies)).apply(this, arguments));
    }

    _createClass(movies, [{
        key: 'render',
        value: function render() {
            console.log("render - - -> --- >", this.props.moviesData);
            if (this.props.isLoading) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    'Loading\u2026'
                );
            }
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'col-md-12', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'form-group col-md-4', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { 'for': 'sel1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                }
                            },
                            'Select Popular movies:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'select',
                            { className: 'form-control', id: 'sel1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 48
                                    }
                                },
                                '1'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 49
                                    }
                                },
                                '2'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 50
                                    }
                                },
                                '3'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 51
                                    }
                                },
                                '4'
                            )
                        )
                    )
                ),
                this.props.moviesData && this.props.moviesData.map(function (mov) {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'col-md-3', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'card', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 57
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'card-body', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 59
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'h6',
                                    { className: 'card-title', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 60
                                        }
                                    },
                                    mov.title
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'p',
                                    { className: 'card-text', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 61
                                        }
                                    },
                                    mov.release_date
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'a',
                                    { href: '/movies/' + mov.title.replace(/ /g, "-") + '/' + mov.id, className: 'btn btn-primary', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 62
                                        }
                                    },
                                    'See Profile'
                                )
                            )
                        )
                    );
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
                var store = _ref.store,
                    isServer = _ref.isServer;
                var movies;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_7__helper_BMSApi__["a" /* default */].getAllMovies();

                            case 2:
                                movies = _context.sent;
                                return _context.abrupt('return', store.dispatch({ type: 'LOAD_MOVIE_SUCCESS', movies: movies }));

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return movies;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var imgStyle = {
    height: 325
};

function mapStateToProps(state) {
    console.log("mapStateToProps - - -> --- >", state);
    return {
        moviesData1: state.movReducer.moviesData,
        isLoading: state.movReducer.MovisLoading
    };
}

movies = __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */], mapStateToProps)(movies);

var _default = movies;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(movies, 'movies', '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/index.js');
    reactHotLoader.register(imgStyle, 'imgStyle', '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/index.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/index.js');
    reactHotLoader.register(_default, 'default', '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/index.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movies")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.4a7815f280847cb050a0.hot-update.js.map