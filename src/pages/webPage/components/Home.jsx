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





import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout/Layout';
import Card from './card/Card';
import API from '../../../http/API';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get('/products');
      console.log('API response:', res.data);

      // ✅ Correct mapping
      const productList = (res.data.responseBody || []).map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        image: p.imagePath || '/default-image.png'
      }));

      setProducts(productList);
    } catch (err) {
      console.error('Failed to fetch products', err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
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