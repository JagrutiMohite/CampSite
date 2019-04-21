const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CampGroundsController = require('./controllers/CampGroundsController')
const BookmarksController = require('./controllers/BookmarksController')
const RatingsController = require('./controllers/RatingsController')
const CommentsController = require('./controllers/CommentsController')

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
    BookmarksController.index)
  app.post('/bookmarks',
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete)

  app.get('/ratings',
    RatingsController.index)
  app.post('/ratings',
    BookmarksController.post)
  app.delete('/ratings/:ratingId',
    BookmarksController.delete)

  app.get('/comments',
    CommentsController.index),
  app.get('/comments/:commentId',
    CommentsController.show)
  app.post('/comments',
    CommentsController.post),
  app.put('/comments',
    CommentsController.put),
  app.delete('/comments',
    CommentsController.delete)
}
