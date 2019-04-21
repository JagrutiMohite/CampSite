const {Rating} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const {campgroundId, userId} = req.query
      const rating = await Rating.findOne({
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
  },
  async post (req, res) {
    try{
      const rating = req.body
      await Rating.create(rating)
        res.send(rating)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to rate'
      })
    }
  },
  async delete (req, res) {
    try{
      const {ratingId} = req.params
      const rating = await Rating.findById(ratingId)
      await rating.destroy()
       res.send(rating)
    } catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to delete the rate'
      })
    }
  }
  }
