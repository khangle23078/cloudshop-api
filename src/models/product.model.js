const { Schema, model, ObjectId } = require("mongoose")
const categoryModel = require("./category.model")

const productSchema = new Schema({
   name: {
      type: String,
      require: true
   },
   image: {
      type: String,
      require: true
   },
   price: {
      type: Number,
      require: true
   },
   brand: {
      type: String,
      require: true
   },
   quantity: {
      type: Number,
      require: true
   },
   categoryId: {
      type: ObjectId,
      ref: categoryModel
   }
}, { timestamps: true })

module.exports = model('product', productSchema)