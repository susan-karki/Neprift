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


import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../../components/layout/Layout';
import Card from './card/Card';
import API from '../../../http/API';
import Cookies from 'js-cookie';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // prevents duplicate API calls
  const cartCreatedRef = useRef(false);

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get('/auth/products');
      console.log('Products API response:', res.data);

      const productList = (res.data.responseBody || []).map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        image: p.imagePath || '/default-image.png',
      }));

      setProducts(productList);
    } catch (err) {
      console.error('Failed to fetch products', err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Create cart only if it does not exist
  const createCartIfNotExists = async () => {
    if (cartCreatedRef.current) return;

    const token = localStorage.getItem('token1');
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');

    if (!token || role !== 'CUSTOMER' || !userId) return;

    // ✅ Check cookie and localStorage first
    const existingCartId =
      Cookies.get('cartId') || localStorage.getItem('cartId');
    if (existingCartId) {
      console.log('Cart already exists:', existingCartId);
      return;
    }

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
          },
        }
      );

      console.log('Cart API response:', res.data);

      // ✅ handle multiple possible paths for cartId
      const cartId =
        res.data?.responseBody?.cartId ||
        res.data?.responseBody?.id ||
        res.data?.cartId ||
        res.data?.id;

      if (cartId) {
        // Save cartId in cookie and localStorage
        Cookies.set('cartId', cartId, {
          path: '/',
          expires: 7, // 7 days
          sameSite: 'Lax',
        });
        localStorage.setItem('cartId', cartId);
        console.log('New cart created with ID:', cartId);
      } else {
        console.error('Cart ID not found in API response');
      }
    } catch (err) {
      cartCreatedRef.current = false;
      console.error('Failed to create cart', err);
    }
  };

  useEffect(() => {
    fetchProducts();
    createCartIfNotExists();
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
            <Card key={product.id} product={product} />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Home;
