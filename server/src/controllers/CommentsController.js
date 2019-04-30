const {Comment} = require('../models')

module.exports = {
  async index (req, res) {
    try{ 
      const comment = await Comment.findAll(req.body)
        res.send(comment)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to comment on campground'
      })
    }
  },
  async show (req, res) {
    try{
      const comment = await Comment.findById(req.params.commentId)
        res.send(comment)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to view the comment'
      })
    }
  },
 async post (req, res) {
    try{
      const comment = await Comment.create(req.body)
      res.send(comment)
    }catch (err) {
        res.status(500).send({
          error: 'Error occure while posting a comment'
      })
    }
},
 async put (req, res) {
   try{
    const comment = await Comment.update(req.params.commentId, {
      where: {
        id: req.params.commentId
      }
    })
    res.send(comment)
  }catch  (err) {
      res.status(500).send({
        error: 'Error occure while updating a comment '
    })
  }
},
async delete (req, res) {
  try{
    const {commentId} = req.params.comentId
    const comment = await Comment.findById(commentId)
    await comment.destroy()
     res.send(comment)
  } catch (err) {
    res.status(500).send({
      error: 'Error occured while trying to delete the comment'
    })
  }
}
}
