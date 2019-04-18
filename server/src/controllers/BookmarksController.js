const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const {campgroundId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          CampGroundId: campgroundId,
          UserId: userId
        }
      })
        res.send(bookmark)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to fetch the campground'
      })
    }
  },
  async post (req, res) {
    try{
      const bookmark = req.body
      await Bookmark.create(bookmark)
        res.send(bookmark)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to creating the bookmark'
      })
    }
  },
  async delete (req, res) {
    try{
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
       res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to delete the bookmark'
      })
    }
  }
}
