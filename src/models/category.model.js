const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
   name: {
      type: String,
      require: true
   }
}, { timestamps: true })

module.exports = model('category', categorySchema)