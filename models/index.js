const mongoose = requirw("mongoose");
// Creates schema
const Schema = mongoose.Schema;
// Creates headline schema
const noteSchema = new Schema ({
    _headlineId: {
        type: Schema, Types, ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String
});

const Note = mongoose.mondel("Note", headlineSchema);

module.exports = Note;