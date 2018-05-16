module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./combineReducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_movies_reducer__ = __webpack_require__("./pages/movies/reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_events_reducer__ = __webpack_require__("./pages/events/reducer.js");




/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    movReducer: __WEBPACK_IMPORTED_MODULE_1__pages_movies_reducer__["a" /* default */],
    evtReducer: __WEBPACK_IMPORTED_MODULE_2__pages_events_reducer__["a" /* default */]
}));

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
var _jsxFileName = '/Users/vikasabhale/Sites/exp/next-movies/components/header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    }]);

    return header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (header);

/***/ }),

/***/ "./helper/BMSApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BMSApi = function () {
    function BMSApi() {
        _classCallCheck(this, BMSApi);
    }

    _createClass(BMSApi, null, [{
        key: 'getAllMovies',
        value: function getAllMovies() {
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1').then(function (response) {
                //   console.log("getAllMovies === ",response)
                return response.data; // the response.data is string of src
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'getAllEvents',
        value: function getAllEvents() {
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1').then(function (response) {
                return response.data; // the response.data is string of src
            }).catch(function (response) {
                console.log(response);
            });
        }
    }]);

    return BMSApi;
}();

/* harmony default export */ __webpack_exports__["a"] = (BMSApi);

//http://data-in.bookmyshow.com/?cmd=DEGETEVENTSWEB&rc=PUNE&sr=PUNE&lt=&lg=&et=MT&f=json&t=67x1xa33b4x422b361ba&ch=mobile&issubscribed=N
//http://data-in.bookmyshow.com/?cmd=DEGETEVENTLIST&rc=MUMBAI&sr=MWEST&lt=&lg=&cc=&dt=&et=CT&f=json&t=67x1xa33b4x422b361ba&ch=mobile

/***/ }),

/***/ "./pages/events/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_EVENTS_SUCCESS; });
/* unused harmony export EVENTS_HAS_ERRORED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EVENTS_IS_LOADING; });
var LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
var EVENTS_HAS_ERRORED = 'EVENTS_HAS_ERRORED';
var EVENTS_IS_LOADING = 'EVENTS_IS_LOADING';

/***/ }),

/***/ "./pages/events/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = events;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./pages/events/actionTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



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

/***/ }),

/***/ "./pages/movies/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MOVIE_HAS_ERRORED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MOVIE_IS_LOADING; });
var LOAD_MOVIE_SUCCESS = 'LOAD_MOVIE_SUCCESS';
var MOVIE_HAS_ERRORED = 'MOVIE_HAS_ERRORED';
var MOVIE_IS_LOADING = 'MOVIE_IS_LOADING';

/***/ }),

/***/ "./pages/movies/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movActionsCreator__ = __webpack_require__("./pages/movies/movActionsCreator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__moviesAction__ = __webpack_require__("./pages/movies/moviesAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_BMSApi__ = __webpack_require__("./helper/BMSApi.js");

var _jsxFileName = '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









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
                            lineNumber: 24
                        }
                    },
                    'Loading\u2026'
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'col-md-12', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'form-group col-md-4', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'label',
                                { htmlFor: 'sel1', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 31
                                    }
                                },
                                'Select Popular movies:'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'select',
                                { className: 'form-control', id: 'sel1', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 32
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'option',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 33
                                        }
                                    },
                                    '1'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'option',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 34
                                        }
                                    },
                                    '2'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'option',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    },
                                    '3'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'option',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 36
                                        }
                                    },
                                    '4'
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'col-md-12', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                            }
                        },
                        this.props.moviesData && this.props.moviesData.map(function (mov) {
                            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-md-3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 43
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'div',
                                    { className: 'card', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 44
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'div',
                                        { className: 'card-body', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 46
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            'h6',
                                            { className: 'card-title', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 47
                                                }
                                            },
                                            mov.title
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            'p',
                                            { className: 'card-text', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 50
                                                }
                                            },
                                            mov.release_date
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            'a',
                                            {
                                                href: '/movies/' + mov.title.replace(/ /g, '-') + '/' + mov.id,
                                                className: 'btn btn-primary',
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 53
                                                }
                                            },
                                            'See Profile'
                                        )
                                    )
                                )
                            );
                        })
                    )
                );
            }
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
                var store = _ref.store;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__movActionsCreator__["a" /* loadMovs */])());
                                // const moviesData = await store.dispatch(loadMovs());
                                // console.log('getInitialProps - - - - -  ', moviesData);
                                // const movies = await Api.getAllMovies()
                                // store.dispatch({ type: 'LOAD_MOVIE_SUCCESS', movies});

                                // return {
                                //     moviesData,
                                // };

                            case 1:
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
    console.log('mapStateToProps - - -> --- >', state);
    return {
        moviesData: state.movReducer.moviesData,
        isLoading: state.movReducer.MovisLoading
    };
}

movies = __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */], mapStateToProps)(movies);

/* harmony default export */ __webpack_exports__["default"] = (movies);

/***/ }),

/***/ "./pages/movies/movActionsCreator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadMovs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_BMSApi__ = __webpack_require__("./helper/BMSApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__("./pages/movies/actionTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviesAction__ = __webpack_require__("./pages/movies/moviesAction.js");




function loadMovs() {
    return function (dispatch, getState) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__moviesAction__["a" /* MoviesIsLoading */])(true));
        // API call
        return __WEBPACK_IMPORTED_MODULE_0__helper_BMSApi__["a" /* default */].getAllMovies().then(function (movs) {
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__moviesAction__["b" /* loadMovSuccess */])(movs));
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__moviesAction__["a" /* MoviesIsLoading */])(false));
        }).catch(function () {
            return dispatch(MoviesHasErrored(true));
        });
    };
}

/***/ }),

/***/ "./pages/movies/moviesAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MoviesHasErrored */
/* harmony export (immutable) */ __webpack_exports__["a"] = MoviesIsLoading;
/* harmony export (immutable) */ __webpack_exports__["b"] = loadMovSuccess;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./pages/movies/actionTypes.js");


//Action for  Movies HasErrored
function MoviesHasErrored(bool) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* MOVIE_HAS_ERRORED */],
        hasErrored: bool
    };
}

//Action for  Movies IsLoading
function MoviesIsLoading(bool) {
    return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* MOVIE_IS_LOADING */], bool: bool };
}
//Action for load Movies Successfully
function loadMovSuccess(movies) {
    return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* LOAD_MOVIE_SUCCESS */], movies: movies };
}

/***/ }),

/***/ "./pages/movies/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = movies;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./pages/movies/actionTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function movies() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    // console.log("LOAD_MOVIE_SUCCESS - - - - - ",action);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* LOAD_MOVIE_SUCCESS */]:
            return _extends({}, state, { moviesData: action.movies.results });

        case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* MOVIE_IS_LOADING */]:
            return _extends({}, state, { MovisLoading: action.bool });

        default:
            return state;
    }
}

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var nextRoutes = __webpack_require__("next-routes");
var routes = module.exports = nextRoutes();
routes.add('movies', '/:slug/movies').add('events', '/:slug/events').add({ pattern: '/movies/:name/:id', page: 'moviesDetails' });

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combineReducers__ = __webpack_require__("./combineReducers.js");






var makeStore = function makeStore(options) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__combineReducers__["a" /* default */],
    // initialState,
    Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a), typeof window !== "undefined" && window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }));
};

/* harmony default export */ __webpack_exports__["a"] = (makeStore);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/movies/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=movies.js.map