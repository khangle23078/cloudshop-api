const productModel = require("../models/product.model")

const getAll = () => {
   return productModel.find();
}

const getById = (id) => {
   return productModel.findById(id).exec()
}

const insertOne = (data) => {
   return productModel.create(data)
}

const updateById = (id, data) => {
   return productModel.findByIdAndUpdate(id, data, { new: true }).exec()
}

const deleteById = (id) => {
   return productModel.findByIdAndRemove(id, { new: true }).exec()
}

module.exports = {
   getAll,
   getById,
   insertOne,
   updateById,
   deleteById
}