const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()
routes
.add('movies', '/:slug/movies')
.add('events', '/:slug/events')
.add({pattern: '/movies/:name/:id', page: 'moviesDetails'})