webpackHotUpdate(4,{

/***/ "./helper/BMSApi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BMSApi = function () {
    function BMSApi() {
        _classCallCheck(this, BMSApi);
    }

    _createClass(BMSApi, null, [{
        key: "getAllMovies",
        value: function getAllMovies() {
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1").then(function (response) {
                //   console.log("getAllMovies === ",response)
                return response.data; // the response.data is string of src
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: "getAllEvents",
        value: function getAllEvents() {

            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1").then(function (response) {

                return response.data; // the response.data is string of src
            }).catch(function (response) {
                console.log(response);
            });
        }
    }]);

    return BMSApi;
}();

var _default = BMSApi;

/* harmony default export */ __webpack_exports__["a"] = (_default);

//http://data-in.bookmyshow.com/?cmd=DEGETEVENTSWEB&rc=PUNE&sr=PUNE&lt=&lg=&et=MT&f=json&t=67x1xa33b4x422b361ba&ch=mobile&issubscribed=N
//http://data-in.bookmyshow.com/?cmd=DEGETEVENTLIST&rc=MUMBAI&sr=MWEST&lt=&lg=&cc=&dt=&et=CT&f=json&t=67x1xa33b4x422b361ba&ch=mobile

;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(BMSApi, "BMSApi", "/Users/vikasabhale/Sites/exp/next-movies/helper/BMSApi.js");
    reactHotLoader.register(_default, "default", "/Users/vikasabhale/Sites/exp/next-movies/helper/BMSApi.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d8df94586c0352fc660e.hot-update.js.map