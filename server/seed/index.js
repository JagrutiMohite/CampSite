const {
    sequelize,
    CampGround,
    User,
    Bookmark,
    Rating,
    Comment,
    Histories
} = require('../src/models')

const Promise = require('bluebird')
const campgrounds = require('./campgrounds.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const ratings = require('./ratings.json')
const comments = require('./comments.json')
const histories = require('./history.json')

sequelize.sync({ force: true })
 .then(async function () {
     await Promise.all (
         users.map(user => {
            User.create(user)
         })
      )
      await Promise.all (
        campgrounds.map(campground => {
           CampGround.create(campground)
        })
     )
     await Promise.all (
      bookmarks.map(bookmark => {
         Bookmark.create(bookmark)
      })
   )
   await Promise.all (
      ratings.map(rating => {
         Rating.create(rating)
      })
   )
   await Promise.all (
      comments.map(comment => {
         Comment.create(comment)
      })
   )
   await Promise.all (
      histories.map(history => {
         Histories.create(history)
      })
   )
    })