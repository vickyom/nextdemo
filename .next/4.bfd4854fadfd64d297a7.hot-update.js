webpackHotUpdate(4,{

/***/ "./pages/movies/movActionsCreator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = loadMovs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_BMSApi__ = __webpack_require__("./helper/BMSApi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__("./pages/movies/actionTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviesAction__ = __webpack_require__("./pages/movies/moviesAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();






function loadMovs() {
    return function (dispatch, getState) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__moviesAction__["a" /* MoviesIsLoading */])(true));
        // API call

        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1').then(function (json) {
            return dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__moviesAction__["b" /* loadMovSuccess */])(json.data));
        }).catch(function (err) {
            console.log(err.response);
        });

        // return Api.getAllMovies()
        //     .then(movs => {
        //         return dispatch(loadMovSuccess(movs));
        //         // dispatch(MoviesIsLoading(false));
        //     })
        //     .catch(() => dispatch(MoviesHasErrored(true)));
    };
}
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(loadMovs, 'loadMovs', '/Users/vikasabhale/Sites/exp/next-movies/pages/movies/movActionsCreator.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movies/movActionsCreator")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.bfd4854fadfd64d297a7.hot-update.js.map