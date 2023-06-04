const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.patch('/:id',(req,res)=>{
  const{id}=req.params;
  const body=req.body;
  res.json(
    {message:'update',
    data:body,
    id,
  });
});

router.delete('/:id',(req,res)=>{
  const{id}=req.params;
  res.json({
    message:'deleted',
    id,
  });
});


module.exports = router;
