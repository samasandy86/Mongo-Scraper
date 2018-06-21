// Require mongoose
let mongoose = require("mongoose");
// Create Schema class
let Schema = mongoose.Schema;

// Create article schema
let ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
  },
   byline: {
   type: String,
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// Create the Article model with the ArticleSchema
let Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
