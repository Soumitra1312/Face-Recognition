const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testingdb");

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: String,
    section: String, // Changed to lowercase 's' to match HTML (or update HTML)
    subject: String,
    periods: Number,
    roomNumber: String,
    likes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "user" }
    ]
});

module.exports = mongoose.model('post', postSchema);