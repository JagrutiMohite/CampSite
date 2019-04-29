const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CampGroundsController = require('./controllers/CampGroundsController')
const BookmarksController = require('./controllers/BookmarksController')
const RatingsController = require('./controllers/RatingsController')
const CommentsController = require('./controllers/CommentsController')
const HistoriesController = require('./controllers/HistoriesController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/campgrounds',
    CampGroundsController.index)

  app.get('/campgrounds/:campgroundId',
    CampGroundsController.show)
  app.put('/campgrounds/:campgroundId',
    CampGroundsController.put)
  app.post('/campgrounds',
    CampGroundsController.post)

  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete)

  app.get('/ratings',
    RatingsController.index)
  app.post('/ratings',
    BookmarksController.post)
  app.delete('/ratings/:ratingId',
    BookmarksController.delete)

  app.get('/comments/:commentId',
    isAuthenticated,
    CommentsController.index),
  app.get('/comments',
    isAuthenticated,
    CommentsController.show)
  app.post('/comments',
    isAuthenticated,
    CommentsController.post),
  app.put('/comments',
    CommentsController.put),
  app.delete('/comments',
    CommentsController.delete)

  app.get('/histories',
    isAuthenticated,
    HistoriesController.index),
  app.post('/histories',
   isAuthenticated,
    HistoriesController.post)
}
