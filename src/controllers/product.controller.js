const productService = require('./../services/product.service');

const getProducts = async (req, res) => {
   try {
      const products = await productService.getAll();
      return res.status(200).json({
         status: 200,
         data: products,
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

const getProduct = async (req, res) => {
   const { id } = req.params;
   try {
      const product = await productService.getById(id);
      console.log(id);

      if (!product) {
         return res.status(404).json({
            status: 404,
            data: null,
            message: 'Not found'
         })
      }

      return res.status(200).json({
         status: 200,
         data: product,
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

const createProduct = async (req, res) => {
   try {
      const product = await productService.insertOne(req.body)
      product.save()
      return res.status(200).json({
         status: 200,
         data: product,
         message: 'create product success!'
      })
   } catch (error) {
      return res.status(400).json({
         status: 400,
         data: null,
         message: error.message
      })
   }
}

const updateProductById = async (req, res) => {
   const { id } = req.params;
   try {
      const product = await productService.updateById(id, req.body)
      return res.status(200).json({
         status: 200,
         data: product,
         message: 'update product success!'
      })
   } catch (error) {
      return res.status(400).json({
         status: 400,
         data: null,
         message: error.message
      })
   }
}

const deleteProductById = async (req, res) => {
   const { id } = req.params
   try {
      const product = await productService.deleteById(id)
      return res.status(200).json({
         status: 200,
         data: product,
         message: 'delete product success!'
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
   getProducts,
   getProduct,
   createProduct,
   updateProductById,
   deleteProductById
}