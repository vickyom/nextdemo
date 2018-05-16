webpackHotUpdate(3,{

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var nextRoutes = __webpack_require__("./node_modules/next-routes/dist/index.js");
var routes = module.exports = nextRoutes();
routes.add('movies', '/:slug/movies').add('events', '/:slug/events').add({ name: 'movies/:name/:id', pattern: '/movies/:name/:id', page: 'moviesDetails' });
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routes, 'routes', '/Users/vikasabhale/Sites/exp/next-movies/routes.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.80cdeb786c11367950b7.hot-update.js.map