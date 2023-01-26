import { Router } from "express";
// const ProductManager = require('../controllers/ProductManager.js');
import ProductManager from '../controllers/ProductManager.js'

const productManager = new ProductManager();

const router = Router();

router.get('/products', async (req, res) => {
  const { limit } = req.query;
  let products;
  if (limit) {
    products = await productManager.getProducts(parseInt(limit));
  } else {
    products = await productManager.getProducts();
  }
  res.json({ products });
});

router.get('/products/:pid', async (req, res) => {
  const { pid } = req.params;
  const product = await productManager.getProductById(parseInt(pid));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({ product });
});

// router.post('/products', async (req, res) => {
//     const { title, description, price, thumbnail, code, stock } = req.body;
//     productManager.addProduct(title, description,price, thumbnail, code, stock);
//     res.status(201).json({ message: 'Product added successfully' });
//   });

export default router;
