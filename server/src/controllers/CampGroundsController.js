const {CampGround} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      let campgrounds = null
      const search = req.query.search
      if(search) {
        campgrounds = await CampGround.findAll({
          where: {
            $or: [
              'CampName', 'Location'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        campgrounds = await CampGround.findAll({
          limit: 10
      })
      }
        res.send(campgrounds)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to fetch the campground'
      })
    }
  },
  async show (req, res) {
    try{
      const campground = await CampGround.findById(req.params.campgroundId)
        res.send(campground)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to view the campground'
      })
    }
  },
 async post (req, res) {
    try{
      const campground = await CampGround.create(req.body)
      res.send(campground)
    }catch (err) {
        res.status(500).send({
          error: 'Error occure while creating a campground '
      })
    }
},
 async put (req, res) {
   try{
    const campground = await CampGround.update(req.body, {
      where: {
        id: req.params.campgroundId
      }
    })
    res.send(req.body)
  }catch  (err) {
      res.status(500).send({
        error: 'Error occure while updating a campground '
    })
  }
}
}
