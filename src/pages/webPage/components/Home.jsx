// import React from 'react'
// import Layout from '../../../components/layout/Layout'
// import Card from './card/Card'


// const Home = () => {
//   return (
//     <Layout>
//       <div className='container-card'>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//       </div>
        
//     </Layout>
    
   
//   )
// }

// export default Home


// import React, { useEffect, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';


// const Home = () => {
//   const [products, setProducts] = useState([]);

//   // Example: fetch products from backend or use static array
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Replace with your backend API
//         // const res = await fetch('/api/products');
//         // const data = await res.json();
//         // setProducts(data);

//         // For testing, static array
//         setProducts([
//           {
//             id: 1,
//             name: 'Luffy Action Figure',
//             description: 'This is Monkey D. Luffy, the man who is gonna be King of Pirates.',
//             price: 4000,
//             image: anime,
//           },
//           {
//             id: 2,
//             name: 'Zoro Action Figure',
//             description: 'Roronoa Zoro, the greatest swordsman in the world.',
//             price: 4500,
//             image: anime,
//           },
//           {
//             id: 3,
//             name: 'Nami Figure',
//             description: 'Navigator of the Straw Hat Pirates.',
//             price: 3500,
//             image: anime,
//           },
//           // Add more products here
//         ]);
//       } catch (err) {
//         console.error('Failed to fetch products', err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map((product) => <Card key={product.id} product={product} />)
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/products');
//       setProducts(res.data); // Assuming BaseController wraps data in "data"
//     } catch (err) {
//       console.error('Failed to fetch products', err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map((product) => <Card key={product.id} product={product} />)
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/products');
//       // Extract the actual array from backend response
//       setProducts(res.data.data || []); // ✅ fix here
//     } catch (err) {
//       console.error('Failed to fetch products', err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map((product) => <Card key={product.id} product={product} />)
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;





// import React, { useEffect, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/auth/products');
//       console.log('API response:', res.data);

//       // ✅ Correct mapping
//       const productList = (res.data.responseBody || []).map(p => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || '/default-image.png'
//       }));

//       setProducts(productList);
//     } catch (err) {
//       console.error('Failed to fetch products', err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map(product => (
//             <Card key={product.id} product={product} />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;









// import React, { useEffect, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/auth/products');
//       console.log('Products API response:', res.data);

//       const productList = (res.data.responseBody || []).map(p => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || '/default-image.png'
//       }));

//       setProducts(productList);
//     } catch (err) {
//       console.error('Failed to fetch products', err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Create cart only if it does not exist
//   const createCartIfNotExists = async () => {
//     const token = localStorage.getItem('token1');
//     const role = localStorage.getItem('role');
//     const userId = localStorage.getItem('userId');
//     const existingCartId = localStorage.getItem('cartId');

//     if (!token || role !== 'CUSTOMER' || !userId) return;

//     // ✅ Only create cart if it doesn't exist
//     if (existingCartId) {
//       console.log('Cart already exists:', existingCartId);
//       return;
//     }

//     try {
//       const res = await API.post(
//         '/cart',
//         {
//           userId: Number(userId),
//           createdAt: new Date().toISOString(),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const cartId = res.data?.responseBody?.cartId;
//       if (cartId) {
//         localStorage.setItem('cartId', cartId);
//         console.log('Created new cart with ID:', cartId);
//       }
//     } catch (err) {
//       console.error('Failed to create cart', err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     createCartIfNotExists(); // call cart creation if needed
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map(product => (
//             <Card key={product.id} product={product} />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;





// import React, { useEffect, useRef, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';
// import Cookies from 'js-cookie';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // prevents duplicate API calls
//   const cartCreatedRef = useRef(false);

//   // Fetch products
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/auth/products');
//       console.log('Products API response:', res.data);

//       const productList = (res.data.responseBody || []).map(p => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || '/default-image.png',
//       }));

//       setProducts(productList);
//     } catch (err) {
//       console.error('Failed to fetch products', err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Create cart only if it does not exist
//   const createCartIfNotExists = async () => {
//     if (cartCreatedRef.current) return;

//     const token = localStorage.getItem('token1');
//     const role = localStorage.getItem('role');
//     const userId = localStorage.getItem('userId');

//     if (!token || role !== 'CUSTOMER' || !userId) return;

//     // ✅ Check cookie and localStorage first
//     const existingCartId =
//       Cookies.get('cartId') || localStorage.getItem('cartId');
//     if (existingCartId) {
//       console.log('Cart already exists:', existingCartId);
//       return;
//     }

//     try {
//       cartCreatedRef.current = true;

//       const res = await API.post(
//         '/cart',
//         {
//           userId: Number(userId),
//           createdAt: new Date().toISOString(),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log('Cart API response:', res.data);

//       // ✅ handle multiple possible paths for cartId
//       const cartId =
//         res.data?.responseBody?.cartId ||
//         res.data?.responseBody?.id ||
//         res.data?.cartId ||
//         res.data?.id;

//       if (cartId) {
//         Cookies.set('cartId', cartId, {
//           path: '/',
//           expires: 7, 
//           sameSite: 'Lax',
//         });
//         localStorage.setItem('cartId', cartId);
//         console.log('New cart created with ID:', cartId);
//       } else {
//         console.error('Cart ID not found in API response');
//       }
//     } catch (err) {
//       cartCreatedRef.current = false;
//       console.error('Failed to create cart', err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     createCartIfNotExists();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map(product => (
//             <Card key={product.id} product={product} />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;





//new 






// import React, { useEffect, useRef, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';
// import Cookies from 'js-cookie';
// import { toast } from "react-toastify";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const cartCreatedRef = useRef(false);

//   // Fetch products
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/auth/products');

//       const productList = (res.data.responseBody || []).map(p => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || '/default-image.png',
//       }));

//       setProducts(productList);
//     } catch (err) {
//       console.error(err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Create cart if not exists
//   const createCartIfNotExists = async () => {
//     if (cartCreatedRef.current) return;

//     const token = localStorage.getItem('token1');
//     const role = localStorage.getItem('role');
//     const userId = localStorage.getItem('userId');

//     if (!token || role !== 'CUSTOMER' || !userId) return;

//     const existingCartId =
//       Cookies.get('cartId') || localStorage.getItem('cartId');
//     if (existingCartId) return;

//     try {
//       cartCreatedRef.current = true;

//       const res = await API.post(
//         '/cart',
//         { userId: Number(userId) },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const cartId =
//         res.data?.responseBody?.id ||
//         res.data?.responseBody?.cartId;

//       if (cartId) {
//         Cookies.set('cartId', cartId, { path: '/', expires: 7 });
//         localStorage.setItem('cartId', cartId);
//       }
//     } catch (err) {
//       cartCreatedRef.current = false;
//       console.error(err);
//     }
//   };

//   // ✅ ADD TO CART (THIS IS THE MISSING PIECE)
//   const handleAddToCart = async (productId) => {
//     const token = localStorage.getItem("token1");
//     const cartId = Cookies.get("cartId") || localStorage.getItem("cartId");

//     if (!token || !cartId) {
//       toast.warning("Please login first ❗");
//       return;
//     }

//     try {
//       await API.post(
//         "/cart/item",
//         {
//           cartId: Number(cartId),
//           productId: Number(productId),
//           qty: 1,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       toast.success("Added to cart 🛒");
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to add to cart ❌");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     createCartIfNotExists();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map(product => (
//             <Card
//               key={product.id}
//               product={product}
//               onAddToCart={() => handleAddToCart(product.id)}
//             />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;














// import React, { useEffect, useRef, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';
// import Cookies from 'js-cookie';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // prevents duplicate cart creation
//   const cartCreatedRef = useRef(false);

//   /* ================= FETCH PRODUCTS ================= */
//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       const res = await API.get('/auth/products');

//       const productList = (res.data?.responseBody || []).map(p => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || '/default-image.png',
//       }));

//       setProducts(productList);
//     } catch (error) {
//       console.error('Failed to fetch products:', error);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= CREATE CART ================= */
//   const createCartIfNotExists = async () => {
//     console.log('Checking cart creation...');

//     if (cartCreatedRef.current) {
//       console.log('Cart creation already attempted');
//       return;
//     }

//     const token = localStorage.getItem('token1');
//     const role = localStorage.getItem('role');
//     const userId = localStorage.getItem('userId');

//     console.log({ token, role, userId });

//     if (!token || role !== 'CUSTOMER' || !userId) {
//       console.log('User not eligible for cart creation');
//       return;
//     }

//     const existingCartId =
//       Cookies.get('cartId') || localStorage.getItem('cartId');

//     if (existingCartId) {
//       console.log('Existing cart found:', existingCartId);
//       return;
//     }

//     try {
//       cartCreatedRef.current = true;

//       const res = await API.post(
//         '/cart',
//         { userId: Number(userId) },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log('Cart API response:', res.data);

//       const cartId =
//         res.data?.responseBody?.cartId ||
//         res.data?.responseBody?.id ||
//         res.data?.cartId ||
//         res.data?.id;

//       if (!cartId) {
//         throw new Error('Cart ID not found in response');
//       }

//       Cookies.set('cartId', cartId, {
//         path: '/',
//         expires: 7,
//         sameSite: 'Lax',
//       });

//       localStorage.setItem('cartId', cartId);

//       console.log('Cart created successfully:', cartId);
//     } catch (error) {
//       cartCreatedRef.current = false;
//       console.error('Failed to create cart:', error);
//     }
//   };

//   /* ================= EFFECT ================= */
//   useEffect(() => {
//     fetchProducts();

//     // delay ensures localStorage is ready
//     setTimeout(() => {
//       createCartIfNotExists();
//     }, 100);
//   }, []);

//   /* ================= UI ================= */
//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map(product => (
//             <Card key={product.id} product={product} />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;






























// import React, { useEffect, useRef, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';
// import Cookies from 'js-cookie';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const cartCreatedRef = useRef(false);

//   /* ================= FETCH PRODUCTS ================= */
//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       const res = await API.get('/auth/products');

//       const productList = (res.data?.responseBody || []).map(p => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || '/default-image.png',
//       }));

//       setProducts(productList);
//     } catch (err) {
//       console.error('Product fetch failed', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= CREATE CART (🔥 IMPORTANT FIX) ================= */
//   const createCart = async () => {
//     if (cartCreatedRef.current) return;

//     const token = localStorage.getItem('token1');
//     const role = localStorage.getItem('role');
//     const userId = localStorage.getItem('userId');

//     if (!token || role !== 'CUSTOMER' || !userId) return;

//     try {
//       cartCreatedRef.current = true;

//       const res = await API.post(
//         '/cart',
//         {
//           userId: Number(userId),
//           createdAt: new Date().toISOString(),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log('Cart API hit successfully:', res.data);

//       const cartId =
//         res.data?.responseBody?.cartId ||
//         res.data?.responseBody?.id ||
//         res.data?.cartId ||
//         res.data?.id;

//       if (!cartId) {
//         throw new Error('Cart ID missing in response');
//       }

//       localStorage.setItem('cartId', cartId);
//       Cookies.set('cartId', cartId, { path: '/', expires: 7 });

//     } catch (err) {
//       cartCreatedRef.current = false;
//       console.error('Cart creation failed', err);
//     }
//   };

//   /* ================= EFFECT ================= */
//   useEffect(() => {
//     fetchProducts();
//     createCart(); // 🔥 ALWAYS HIT API
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           products.map(product => (
//             <Card key={product.id} product={product} />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;


















// import React, { useEffect, useRef, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';
// import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const cartCreatedRef = useRef(false);
//   const navigate = useNavigate();

//   /* ================= FETCH PRODUCTS ================= */
//   const fetchProducts = async () => {
//     try {
//       const res = await API.get('/auth/products');
//       setProducts(res.data?.responseBody || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= CREATE CART ================= */
//   const createCart = async () => {
//     if (cartCreatedRef.current) return;

//     const token = localStorage.getItem('token1');
//     const role = localStorage.getItem('role');
//     const userId = localStorage.getItem('userId');

//     if (!token || role !== 'CUSTOMER' || !userId) return;

//     try {
//       cartCreatedRef.current = true;

//       const res = await API.post(
//         '/cart',
//         {
//           userId: Number(userId),
//           createdAt: new Date().toISOString(),
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const cartId =
//         res.data?.responseBody?.id ||
//         res.data?.responseBody?.cartId;

//       localStorage.setItem('cartId', cartId);
//       Cookies.set('cartId', cartId);
//     } catch (err) {
//       cartCreatedRef.current = false;
//       console.error(err);
//     }
//   };

//   /* ================= ADD TO CART ================= */
//   const handleAddToCart = async (product) => {
//     const token = localStorage.getItem('token1');
//     const cartId = localStorage.getItem('cartId');
//     const userId = localStorage.getItem('userId');

//     if (!token || !cartId || !userId) {
//       toast.warning('Please login first');
//       return;
//     }

//     try {
//       await API.post(
//         '/add-cart',
//         {
//           quantity: 1,
//           cartId: Number(cartId),
//           productId: product.id,
//           userId: Number(userId),
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       toast.success('Item added to cart 🛒');

//       // ✅ REDIRECT TO CART PAGE
//       navigate('/cart');
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to add item to cart');
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     createCart();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           products.map(product => (
//             <Card
//               key={product.id}
//               product={product}
//               onAddToCart={() => handleAddToCart(product)}
//             />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;



















// import React, { useEffect, useRef, useState } from 'react';
// import Layout from '../../../components/layout/Layout';
// import Card from './card/Card';
// import API from '../../../http/API';
// import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const cartCreatedRef = useRef(false);
//   const navigate = useNavigate();

//   // Fetch products
//   const fetchProducts = async () => {
//     try {
//       const res = await API.get('/auth/products');
//       const productList = (res.data?.responseBody || []).map(p => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || '/default-image.png',
//       }));
//       setProducts(productList);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Create cart if not exists
//   const createCart = async () => {
//     if (cartCreatedRef.current) return;

//     const token = localStorage.getItem('token1');
//     const role = localStorage.getItem('role');
//     const userId = localStorage.getItem('userId');

//     if (!token || role !== 'CUSTOMER' || !userId) return;

//     try {
//       cartCreatedRef.current = true;

//       const res = await API.post(
//         '/cart',
//         {
//           userId: Number(userId),
//           createdAt: new Date().toISOString(),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const cartId = res.data?.responseBody?.id || res.data?.responseBody?.cartId;

//       if (!cartId) throw new Error('Cart ID missing');

//       localStorage.setItem('cartId', cartId);
//       Cookies.set('cartId', cartId, { path: '/', expires: 7 });
//     } catch (err) {
//       cartCreatedRef.current = false;
//       console.error('Cart creation failed', err);
//     }
//   };

//   // Add product to cart
//   const handleAddToCart = async (product) => {
//     const token = localStorage.getItem('token1');
//     const cartId = localStorage.getItem('cartId');
//     const userId = localStorage.getItem('userId');

//     // Ensure all data exists
//     if (!token || !cartId || !userId || !product?.id) {
//       toast.error('Missing data to add cart');
//       console.log({ token, cartId, userId, product });
//       return;
//     }

//     try {
//       await API.post(
//         '/add-cart',
//         {
//           quantity: 1,
//           cartId: Number(cartId),
//           productId: Number(product.id),
//           userId: Number(userId),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json', // VERY IMPORTANT
//           },
//         }
//       );

//       toast.success('Item added to cart 🛒');
//       navigate('/cart'); // Redirect after add
//     } catch (err) {
//       console.error('Add to cart failed', err);
//       toast.error('Failed to add item to cart');
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     createCart();
//   }, []);

//   return (
//     <Layout>
//       <div className="container-card">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           products.map(product => (
//             <Card
//               key={product.id}
//               product={product}
//               onAddToCart={() => handleAddToCart(product)}
//             />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Home;






















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
  const [cartReady, setCartReady] = useState(false); // ✅ only allow add after cart ready
  const cartCreatedRef = useRef(false);
  const navigate = useNavigate();

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await API.get('/auth/products');
      const productList = (res.data?.responseBody || []).map(p => ({
        id: p.id || p._id, // ✅ in case your backend uses _id
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

  // Create cart if not exists
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
      setCartReady(true); // ✅ cart is now ready
    } catch (err) {
      cartCreatedRef.current = false;
      console.error('Cart creation failed', err);
      toast.error('Failed to create cart');
    }
  };

  // Add product to cart
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

      toast.success('Item added to cart 🛒');
      navigate('/cart'); // redirect after add
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
              disabled={!cartReady} // optional: disable button until cart is ready
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Home;
