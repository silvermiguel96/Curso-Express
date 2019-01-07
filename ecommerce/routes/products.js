const express = require('express');
const router = express.Router();
const productMocks = require('../utils/mocks/products');


const products = [
  {
    name: "Red Shoes",
    price: 75,
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2018/07/15/5b4b99a9fe51518f9cf01863/m_5b4b99b5a31c333d40eeb608.jpg"
  },
  {
    name: "Black bike",
    price: 300,
    image: "https://black-bikes.com/wp-content/uploads/2017/03/gents-bike.jpg"
  }
]

router.get('/', function(req, res){
  res.render("products", { products })
})

module.exports = router;