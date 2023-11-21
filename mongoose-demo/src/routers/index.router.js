import { Router } from 'express';
import ProductModel from '../dao/models/products.model.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'lista productos ' });
});

router.get('/products', async (req, res) => {
  const products = await ProductModel.get();
  res.render('productos', { products: products.map(student => student.toJSON()), title: 'Lista de productos' })
});

router.get('/chat', (req,res) =>{
    res.render('chat', {title: ' Chat de clientes'})
})

export default router;