const Joi = require('joi')

module.exports = {
  register (req, res, next) {
      const schema = {
        FirstName: Joi.string().alphanum().min(3).max(30).required(),
        LastName: Joi.string().alphanum().min(3).max(30).required(),
        Phone: Joi.string().alphanum().min(3).max(10).required(),
        email: Joi.string().email(),
        password: Joi.string().regex(
          new RegExp('^[a-zA-Z0-9]{8,32}$')
         )   
      }

      const {error, value} = Joi.validate(req.body, schema)

      if (error) {
        switch (error.details[0].context.key) {
          case 'email':
            res.status(400).send({
              error: 'You must provide a valid email address'
            })
            break
          case 'password':
            res.status(400).send({
              error: `The password provided failed to match the following rules:
                <br>
                1. It must contain ONLY the following characters: lower case, upper case, numerics.
                <br>
                2. It must be at least 8 characters in length and not greater than 32 characters in length.
              `
            })
            break
          default: 
            res.status(400).send({
              error: 'Invalid registration information'
            })
        }
      } else {
        next()   
      }
    },
    /* campground (req, res, next) {
        const schema = {
        CampName: Joi.string().required(),
        Price: Joi.number().integer().required(),
        Image: Joi.string().required(),
        Description: Joi.string().alphanum().required(),
        Location: Joi.string().required(),
        FirstName: Joi.string().required(),
        LastName: Joi.string().required() 
      }

      const {error, value} = Joi.validate(req.body, schema)

      if (error) {
        switch (error.details[0].context.key) {
          case 'CampName':
            res.status(400).send({
              error: 'You must provide a valid CampName'
            })
            break
            case 'CampName':
            res.status(400).send({
              error: 'You must provide a valid CampName'
            })
            break
            case 'CampName':
            res.status(400).send({
              error: 'You must provide a valid CampName'
            })
            break
            case 'CampName':
            res.status(400).send({
              error: 'You must provide a valid CampName'
            })
            break
            case 'CampName':
            res.status(400).send({
              error: 'You must provide a valid CampName'
            })
            break
            case 'CampName':
            res.status(400).send({
              error: 'You must provide a valid CampName'
            })
            break
            case 'CampName':
            res.status(400).send({
              error: 'You must provide a valid CampName'
            })
            break
          default: 
            res.status(400).send({
              error: 'Invalid registration information'
            })
        }
      } else {
        next()   
      }
    }*/
  }
