const {Comment} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const {campgroundId, userId} = req.query
      const comment = await Comment.findOne({
        where: {
          CampGroundId: campgroundId,
          UserId: userId
        }
      })
        res.send(comment)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to rate the campground'
      })
    }
  },
  async show (req, res) {
    try{
      const comment = await CampGround.findById(req.params.campgroundId)
        res.send(comment)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to view the comment'
      })
    }
  },
 async post (req, res) {
    try{
      const comment = await CampGround.create(req.body)
      res.send(comment)
    }catch (err) {
        res.status(500).send({
          error: 'Error occure while posting a comment '
      })
    }
},
 async put (req, res) {
   try{
    const comment = await CampGround.update(req.body, {
      where: {
        id: req.params.campgroundId
      }
    })
    res.send(req.body)
  }catch  (err) {
      res.status(500).send({
        error: 'Error occure while updating a comment '
    })
  }
}
}
