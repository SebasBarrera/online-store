var express = require('express');
var router = express.Router();
var data = require('../data/categories');


/* GET CATEGORIES */
router.get('/categories', function(req, res, next) {
  
  let categories = [...data];
  // for(let item of categories){
  //   delete item.products;
  // }

  res.status(200).json(categories);

});

/* GET PRODUCTS OF SPECIFIC CATEGORY*/
router.get('/category/:id', function(req, res, next) {
  
  const idCategory = parseInt(req.params.id);

  let category = data.find( item => item.id === idCategory);
  if(category === undefined){
    res.status(400).json({
      message: "Category not found"
    });
    
  }else {
    res.status(200).json(category.products)
  }

});

/* GET PRODUCT */
router.get('/category/:id/product/:idProduct', function(req, res, next) {
  
  const idCategory = parseInt(req.params.id);
  const idProduct = parseInt(req.params.idProduct);

  let category = data.find( item => item.id === idCategory);
  let product = category.products.find( item => item.id === idProduct);
  
  if(product === undefined){
    res.status(400).json({
      message: "Category not found"
    });
    
  }else {
    res.status(200).json(product)
  }

});

module.exports = router;
