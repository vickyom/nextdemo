webpackHotUpdate(4,{

/***/ "./pages/movies/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movActionsCreator__ = __webpack_require__("./pages/movies/movActionsCreator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__moviesAction__ = __webpack_require__("./pages/movies/moviesAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_BMSApi__ = __webpack_require__("./helper/BMSApi.js");
var _jsxFileName = '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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

        // Page.getInitialProps = ({ store }) => store.dispatch(fetchItems());
        value: function render() {
            console.log("render - - -> --- >", this.props.moviesData);
            if (this.props.isLoading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    'Loading\u2026'
                );
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-md-12', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-group col-md-4', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'label',
                            { 'for': 'sel1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            'Select Popular movies:'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'select',
                            { className: 'form-control', id: 'sel1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 41
                                    }
                                },
                                '1'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 42
                                    }
                                },
                                '2'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 43
                                    }
                                },
                                '3'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'option',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 44
                                    }
                                },
                                '4'
                            )
                        )
                    )
                ),
                this.props.moviesData && this.props.moviesData.map(function (mov) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-3', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 49
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 50
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'card-body', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 52
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'h6',
                                    { className: 'card-title', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 53
                                        }
                                    },
                                    mov.title
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    { className: 'card-text', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 54
                                        }
                                    },
                                    mov.release_date
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { href: '/movies/' + mov.title.replace(/ /g, "-") + '/' + mov.id, className: 'btn btn-primary', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 55
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
        value: function getInitialProps(_ref) {
            var store = _ref.store;


            var movies = store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__movActionsCreator__["a" /* loadMovs */])());
            console.log("getInitialProps - - - - -  ", movies);

            // const movies = await Api.getAllMovies()
            //  store.dispatch({ type: 'LOAD_MOVIE_SUCCESS', movies});


            // return {
            //     moviesData: movies.results
            // }

        }
    }]);

    return movies;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var imgStyle = {
    height: 325
};

function mapStateToProps(state) {
    console.log("mapStateToProps - - -> --- >", state);
    return {
        moviesData: state.movReducer.moviesData,
        isLoading: state.movReducer.MovisLoading
    };
}

movies = __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], mapStateToProps)(movies);

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
//# sourceMappingURL=4.ba3dd65ec7fad32ae62b.hot-update.js.map