import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../../components/layout/Layout';
import Card from './card/Card';
import API from '../../../http/API';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartReady, setCartReady] = useState(false); 
  const cartCreatedRef = useRef(false);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const res = await API.get('/auth/products');
      const productList = (res.data?.responseBody || []).map(p => ({
        id: p.id || p._id, 
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        image: p.imagePath || '/default-image.png',
      }));
      setProducts(productList);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const createCart = async () => {
    if (cartCreatedRef.current) return;

    const token = localStorage.getItem('token1');
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');

    if (!token || role !== 'CUSTOMER' || !userId) return;

    try {
      cartCreatedRef.current = true;

      const res = await API.post(
        '/cart',
        {
          userId: Number(userId),
          createdAt: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const cartId = res.data?.responseBody?.id || res.data?.responseBody?.cartId;

      if (!cartId) throw new Error('Cart ID missing');

      localStorage.setItem('cartId', cartId);
      Cookies.set('cartId', cartId, { path: '/', expires: 7 });
      setCartReady(true); 
    } catch (err) {
      cartCreatedRef.current = false;
      console.error('Cart creation failed', err);
      toast.error('Failed to create cart');
    }
  };

  const handleAddToCart = async (product) => {
    if (!cartReady) {
      toast.warning('Cart is not ready yet, please try again in a moment');
      return;
    }

    const token = localStorage.getItem('token1');
    const cartId = localStorage.getItem('cartId');
    const userId = localStorage.getItem('userId');

    if (!token || !cartId || !userId || !product?.id) {
      toast.error('Missing data to add cart');
      console.log({ token, cartId, userId, product });
      return;
    }

    try {
      await API.post(
        '/add-cart',
        {
          quantity: 1,
          cartId: Number(cartId),
          productId: Number(product.id),
          userId: Number(userId),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success('Item added to cart');
    } catch (err) {
      console.error('Add to cart failed', err);
      toast.error('Failed to add item to cart');
    }
  };

  useEffect(() => {
    fetchProducts();
    createCart();
  }, []);

  return (
    <Layout>
      <div className="container-card">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map(product => (
            <Card
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
              disabled={!cartReady} 
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Home;
