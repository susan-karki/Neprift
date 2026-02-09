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

