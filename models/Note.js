// Require mongoose
let mongoose = require("mongoose");
// Create a schema class
let Schema = mongoose.Schema;

// Create the Note schema
let NoteSchema = new Schema({
  // Just a string
  article_id: {
    type: Schema.Types.ObjectId
  },
  body: {
    type: String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model

// Create the Note model with the NoteSchema
let Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
