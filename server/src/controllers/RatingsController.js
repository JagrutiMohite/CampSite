const {Rating} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const {campgroundId, userId} = req.query
      const rating = await Rating.findAll({
        where: {
          CampGroundId: campgroundId,
          UserId: userId
        }
      })
        res.send(rating)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to rate the campground'
      })
    }
  }
}
