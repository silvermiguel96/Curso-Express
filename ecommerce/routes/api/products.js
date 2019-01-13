const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');

const productsService = new ProductsService();

router.get('/', async function(req, res, next) {
  const { tags } = req.query;
  console.log('req', req.params);

  try {
    const products = await productsService.getProducts({ tags });
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
  console.log('req', req.params);

  try {
    const product = productsService.getProduct({ productId });

    res.status(200).json({
      data: product,
      message: 'Product revered'
    });
  } catch(err) {
    next(err)
  }

});

router.post('/', function(req, res, next) {
  const { body: product } = req;

  console.log('req', req.body );

  try {
    const createdProduct = productsService.createProduct({ product });

    res.status(201).json({
      data: createdProduct,
      Message: 'Created product '
    });
  }
  catch(err){
    next(err)
  }
});

router.put('/:productId', function(req, res, next){

  const { productId } = req.params;
  const { body: product } = req;
  
  console.log('req', req.params, req.body);

  try {
    const updateProduct = productsService.updateProduct({ productId, product });
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
  console.log('req', req.params);

  try {
    const deletedProduct = productsService.deleteProduct({ productId });

    res.status(200).json({
      data: deletedProduct,
      message: 'Product Delete'
    });
  } catch(err){
    next(err)
  }
});

module.exports = router;