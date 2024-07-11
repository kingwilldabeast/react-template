//Parent Schema

const { Schema } = require('mongoose')

const publisherSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        url: {type: String, required: true}
    },
    {timestamps: true}

)

//VERSION THAT USES models/index.JS
module.exports = publisherSchema

//ALTERNATE WITHOUT models/index.JS
// const mongoose = require('mongoose')
// const Publisher = mongoose.model('Publisher', publisherSchema)
// module.exports = Publisher 