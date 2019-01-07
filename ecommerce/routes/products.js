const express = require('express');
const router = express.Router();
const productService = new productsService();

router.get('/', async function(req, res, next){
  const { tags } = req.query;
  try {
    const products = productService.getProducts({ tags });
    res.render("products", { products })
  } catch (err){
    next(err)
  }

})

module.exports = router;