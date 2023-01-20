const categoryModel = require("../models/category.model")

const getAll = () => {
   return categoryModel.find()
}

const getById = (id) => {
   return categoryModel.findById(id)
}

const insertOne = (data) => {
   return categoryModel.create(data);
}

const updateById = (id, data) => {
   return categoryModel.findByIdAndUpdate(id, data, { new: true }).exec();
}

const deleteById = (id) => {
   return categoryModel.findByIdAndDelete(id, { new: true }).exec()
}

module.exports = {
   getAll,
   getById,
   insertOne,
   updateById,
   deleteById
}