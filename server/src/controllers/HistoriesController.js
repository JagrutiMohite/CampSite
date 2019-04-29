const { 
  History,
  CampGround,
  User 
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try{
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
         {
          model: CampGround
         }
        ]
      })
      .map(history => history.toJSON())
      .map(history => _.extend(
        {},
        history.CampGround,
        history
      ))
      res.send(_.uniqBy(histories, history => history.CampGroundId))
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to fetch the history '
      })
    }
  },
  async post (req, res) {
    try{
      const userId = req.user.id
      const {campgroundId} = req.body
      const history = await History.create({
        CampGroundId: campgroundId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the history object'
      })
    }
  }
}
