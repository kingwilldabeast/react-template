//CHILD schema that references parent by ID

const { Schema } = require('mongoose')

const bookSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        published_date: { type: String, required: true },
        publisher_id: { type: Schema.Types.ObjectId, ref: 'publisher_id' }
    },
    {timestamps: true}

)

//VERSION THAT USES models/index.JS
module.exports = bookSchema

//ALTERNATE WITHOUT models/index.JS
// const mongoose = require('mongoose')
// const Book = mongoose.model('Book', bookSchema)
// module.exports = Book 