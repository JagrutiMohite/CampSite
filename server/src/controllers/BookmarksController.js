const { 
  Bookmark,
  CampGround,
  User 
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try{
      const userId = req.user.id
      const {campgroundId} = req.query
      const where = {
        UserId: userId
      }
      if (campgroundId){
        where.CampGroundId = campgroundId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
         {
          model: CampGround
         }
        ]
      })
      .map(bookmark => bookmark.toJSON())
      .map(bookmark => _.extend(
        {},
        bookmark.CampGround,
        bookmark
      ))
      res.send(bookmarks)
    }catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to fetch the campground'
      })
    }
  },
  async post (req, res) {
    try{
      const userId = req.user.id
      const {campgroundId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          CampGroundId: campgroundId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        CampGroundId: campgroundId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try{
      const userId = req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'You do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
       res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Error occured while trying to delete the bookmark'
      })
    }
  }
}
