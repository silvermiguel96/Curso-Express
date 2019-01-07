const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');

const productService = new ProductService();

router.get('/', async function(req, res, next) {
  const { tags } = req.query;

  try {
    const products = await productService.getProducts({ tags });
    res.status(200).json({
      data: products,
      message: 'Products listed'
    });
  } catch(err){
    next(err)
  }
});  

router.get('/:productId', function(req, res, next) {
  const { productId } = req.params;
  try {
    const produtc = productService.getProduct({ productId });

    res.status(200).json({
      data: produtc,
      message: 'Product revered'
    });
  } catch(err) {
    next(err)
  }

});

router.post('/', function(req, res, next) {
  const { body: product } = req;

  try {
    const product = productService.createProduct({ product });

    res.status(201).json({
      data: product,
      Message: 'Product in post'
    });
  }
  catch(err){
    next(err)
  }
});

router.put('/:productId', function(req, res, next){

  const { productId } = req.params;
  const { body: product } = req;
  try {
    const updateProduct = productService.updateProduct({ productId, product });
    res.status(200).json({
      data: updateProduct,
      message: 'products update'
    });
  } catch(err){
    next(err)
  }

});

router.delete('/:prodcutId', function(req, res, next) {
  const { productId } = req.params;

  try {
    const product = prodcutService.deleteProduct({ productId });

    res.status(200).json({
      data: product,
      message: 'Product Delete'
    });
  } catch(err){
    next(err)
  }
});

module.exports = router;