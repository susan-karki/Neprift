// // import React from "react";
// // import "./Charts.css";

// // import {
// //   Chart as ChartJS,
// //   LineElement,
// //   BarElement,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";

// // import { Line, Bar } from "react-chartjs-2";

// // ChartJS.register(
// //   LineElement,
// //   BarElement,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   Tooltip,
// //   Legend
// // );

// // // Sales Line Chart
// // function SalesChart() {
// //   const data = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Sales (Rs.)",
// //         data: [12000, 19000, 15000, 22000, 28000, 35000],
// //         borderWidth: 3,
// //         borderColor: "#ff8a33",
// //         backgroundColor: "rgba(255, 138, 51, 0.2)",
// //       },
// //     ],
// //   };

// //   const options = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     tension: 0.4,
// //     plugins: {
// //       legend: { display: true, position: "top" },
// //     },
// //     scales: {
// //       x: {
// //         ticks: {
// //           maxRotation: 0,
// //           minRotation: 0,
// //           autoSkip: false,
// //         },
// //       },
// //       y: {
// //         beginAtZero: true,
// //       },
// //     },
// //   };

// //   return <Line data={data} options={options} />;
// // }

// // // Customer Review Chart
// // function CustomerReviewChart() {
// //   const data = {
// //     labels: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
// //     datasets: [
// //       {
// //         label: "Reviews",
// //         data: [12, 19, 30, 45, 80],
// //         backgroundColor: "#ff8a33",
// //       },
// //     ],
// //   };

// //   const options = {
// //     indexAxis: "y",
// //     responsive: true,
// //     plugins: {
// //       legend: { display: true, position: "top" },
// //     },
// //     scales: {
// //       x: { beginAtZero: true },
// //       y: { ticks: { autoSkip: false } },
// //     },
// //   };

// //   return <Bar data={data} options={options} />;
// // }

// // // Top 5 Customers
// // function TopCustomers() {
// //   const customers = [
// //     { name: "Aarav Shrestha", order: 12, spent: "Rs. 45,000" },
// //     { name: "Sita Thapa", order: 10, spent: "Rs. 38,500" },
// //     { name: "Bibek Khadka", order: 9, spent: "Rs. 32,000" },
// //     { name: "Smriti Gurung", order: 7, spent: "Rs. 28,900" },
// //     { name: "Rohan Basnet", order: 6, spent: "Rs. 22,700" },
// //   ];

// //   return (
// //     <div className="top_customers_box">
// //       <h2 className="top_title">Top 5 Customers</h2>
// //       <div className="customers_list">
// //         {customers.map((c, idx) => (
// //           <div className="customer_row" key={idx}>
// //             <div className="customer_avatar">{c.name.charAt(0)}</div>
// //             <div className="customer_info">
// //               <p className="customer_name">{c.name}</p>
// //               <p className="customer_stats">
// //                 Orders: {c.order} • Spent: {c.spent}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // PAGE EXPORT — FINAL
// // function Charts() {
// //   return (
// //     <div className="charts-page">
// //       {/* Dashboard Title */}
// //       <h1 className="dashboard_title">Welcome to My Dashboard</h1>

// //       {/* 2 Charts Side by Side */}
// //       <div className="charts_grid">
// //         <div className="chart_box">
// //           <h3>Sales Overview</h3>
// //           <SalesChart />
// //         </div>
// //         <div className="chart_box">
// //           <h3>Customer Reviews</h3>
// //           <CustomerReviewChart />
// //         </div>
// //       </div>

// //       {/* Top 5 Customers */}
// //       <TopCustomers />
// //     </div>
// //   );
// // }

// // export default Charts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Charts.css";

import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// ================= SALES CHART =================
function SalesChart({ sales }) {
  const data = {
    labels: sales.map((s) => s.month),
    datasets: [
      {
        label: "Sales (Rs.)",
        data: sales.map((s) => s.total),
        borderWidth: 3,
        borderColor: "#ff8a33",
        backgroundColor: "rgba(255, 138, 51, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Line data={data} options={options} />;
}

function CustomerReviewChart({ reviews }) {
  const data = {
    labels: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
    datasets: [
      {
        label: "Reviews",
        data: reviews,
        backgroundColor: "#ff8a33",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      x: { beginAtZero: true },
    },
  };

  return <Bar data={data} options={options} />;
}


function TopCustomers({ customers }) {
  return (
    <div className="seller-top_customers_box">
      <h2 className="seller-top_title">Top 5 Customers</h2>

      <div className="seller-customers_list">
        {customers.map((c, idx) => (
          <div className="seller-customer_row" key={idx}>
            <div className="seller-customer_avatar">
              {c.name.charAt(0)}
            </div>
            <div className="seller-customer_info">
              <p className="seller-customer_name">{c.name}</p>
              <p className="seller-customer_stats">
                Orders: {c.orders} • Spent: Rs. {c.spent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Charts() {
  const [sales, setSales] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [topCustomers, setTopCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        "http://100.78.28.88:8080/api/admin/dashboard"
      );

      setSales(res.data.monthlySales);
      setReviews(res.data.reviews);
      setTopCustomers(res.data.topCustomers.slice(0, 5));
    } catch (err) {
      console.error("Dashboard fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="seller-loading">Loading dashboard...</div>;
  }

  return (
    <div className="seller-charts-page">
      <h1 className="seller-dashboard_title">Admin Dashboard</h1>

      <div className="seller-charts_grid">
        <div className="seller-chart_box">
          <h3>Sales Overview</h3>
          <SalesChart sales={sales} />
        </div>

        <div className="seller-chart_box">
          <h3>Customer Reviews</h3>
          <CustomerReviewChart reviews={reviews} />
        </div>
      </div>

      <TopCustomers customers={topCustomers} />
    </div>
  );
}

export default Charts;

