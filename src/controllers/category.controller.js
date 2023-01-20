const categoryService = require('./../services/category.service')

const getCategories = async (req, res) => {
   try {
      const categories = await categoryService.getAll();
      return res.status(200).json({
         status: 200,
         data: categories,
         message: null
      })
   } catch (error) {
      return res.status(400).json({
         status: 400,
         data: null,
         message: error.message
      })
   }
}

const getCategoryById = async (req, res) => {
   const { id } = req.params;
   try {
      const category = await categoryService.getById(id);
      return res.status(200).json({
         status: 200,
         data: category,
         message: null
      })
   } catch (error) {
      return res.status(400).json({
         status: 400,
         data: null,
         message: error.message
      })
   }
}


const createCategory = async (req, res) => {
   try {
      const category = await categoryService.insertOne(req.body)
      category.save()
      return res.status(200).json({
         status: 200,
         data: category,
         message: 'create category success'
      })
   } catch (error) {
      return res.status(400).json({
         status: 400,
         data: null,
         message: error.message
      })
   }
}

const updateCategoryById = async (req, res) => {
   const { id } = req.params;
   try {
      const category = await categoryService.updateById(id, req.body);
      return res.status(200).json({
         status: 200,
         data: category,
         message: 'update category success'
      })
   } catch (error) {
      return res.status(400).json({
         status: 400,
         data: null,
         message: error.message
      })
   }
}

const deleteCategoryById = async (req, res) => {
   const { id } = req.params;
   try {
      const category = await categoryService.deleteById(id);
      return res.status(200).json({
         status: 200,
         data: category,
         message: 'delete category success'
      })
   } catch (error) {
      return res.status(400).json({
         status: 400,
         data: null,
         message: error.message
      })
   }
}


module.exports = {
   getCategories,
   getCategoryById,
   createCategory,
   updateCategoryById,
   deleteCategoryById
}