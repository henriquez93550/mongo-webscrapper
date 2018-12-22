const mongoose = requirw("mongoose");
// Creates schema
const Schema = mongoose.Schema;
// Creates headline schema
const headlineSchema = new Schema ({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }
});

const Headline = mongoose.mondel("Headline", headlineSchema);

module.exports = Headline;