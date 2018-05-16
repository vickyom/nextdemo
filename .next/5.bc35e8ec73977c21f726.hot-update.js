webpackHotUpdate(5,{

/***/ "./pages/movies/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = movies;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./pages/movies/actionTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
      var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

      enterModule && enterModule(module);
})();



function movies() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments[1];


      switch (action.type) {
            // case types.LOAD_MOVIE_SUCCESS:
            //     return {  ...state, moviesData: action.movies.results}

            case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* MOVIE_IS_LOADING */]:

                  return _extends({}, state, { MovisLoading: action.bool });

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

      reactHotLoader.register(movies, 'movies', '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/reducer.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movies/reducer")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.bc35e8ec73977c21f726.hot-update.js.map