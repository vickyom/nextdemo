webpackHotUpdate(4,{

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
//# sourceMappingURL=4.74f01af6617af51f4e64.hot-update.js.map