//summarizes and exports all other models
const mongoose = require('mongoose')
const BookSchema = require('./book')
const PublisherSchema = require('./publisher')

//NOTE: unlike controller files, cannot put these in same line with brackets, as far as I know
//const {PublisherSchema, BookSchema} = require('./')

//convert schema to model with the same name
const Book = mongoose.model('Book', BookSchema)
const Publisher = mongoose.model('Publisher', PublisherSchema)

module.exports = {
    Book,
    Publisher
  }
   