const mongoose = require('mongoose')

//add schema instance
const Schema = mongoose.Schema

//define a schema-struture

let blogSchema = new Schema({

    title: {
        type: String,
        default: '' //default value of type is empty
    },
    blogId: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    bodyHtml: {
        type: String,
        default: ''
    },
    tags: [
    ],
    views: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: ''
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    author: {
        type: String,
        default: ''
    },
    created: {
        type: Date,
        default: Date.now
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
})

//Supply schema to model
module.exports = mongoose.model('BlogModel', blogSchema)