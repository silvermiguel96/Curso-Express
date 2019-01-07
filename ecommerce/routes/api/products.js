const express = require('express');
const router = express.Router();
const productMock = require('../../utils/mocks/products');

router.get('/', function(req, res) {
  const { query } = req.query;

  res.status(200).json({
    data: productMock,
    message: 'Products listed'
  });
});

router.get('/:productId', function(req, res) {
  const { productId } = req.params;

  res.status(200).json({
    data: productMock[0],
    message: 'Product revered'
  });
});

router.post('/', function(req, res) {

  res.status(201).json({
    data: productMock[0],
    Message: 'Product in post'
  });
});

router.put('/:productId', function(req, res){

  res.status(200).json({
    data: productMock,
    message: 'products update'
  })
})

router.delete('/', function(req, res) {
  
  res.status(200).json({
    data: productMock,
    message: 'Product Delete'
  })
})

module.exports = router;