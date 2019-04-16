const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CampGroundsController = require('./controllers/CampGroundsController')

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
}
