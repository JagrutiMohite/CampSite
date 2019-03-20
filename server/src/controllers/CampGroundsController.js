const {CampGround} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const campgrounds = CampGround.findAll({
          limit: 10
      })
        res.send(campgrounds)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to fetch the campground'
      })
    }
  },
 async post (req, res) {
    try{
      const campground = CampGround.create(req.body)
      res.send(campground)
    }catch (err) {
        res.status(500).send({
          error: 'Error occure while creating a campground '
      })
    }
}
}
