import React from "react";
import "./AdminLayout.css";
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

// Line chart for Sales
function SalesChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales (Rs.)",
        data: [12000, 19000, 15000, 22000, 28000, 35000],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.4,
    plugins: {
      legend: { display: true, position: "top" },
    },
  };

  return <Line data={data} options={options} />;
}

// Horizontal Bar chart for Customer Reviews
function CustomerReviewChart() {
  const data = {
    labels: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
    datasets: [
      {
        label: "Number of Reviews",
        data: [12, 19, 30, 45, 80],
        backgroundColor: "#ff8a33",
      },
    ],
  };

  const options = {
    indexAxis: "y", // horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
    },
  };

  return <Bar data={data} options={options} />;
}

function AdminLayout() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="admin_container">
      {/* Sidebar */}
      <aside className="admin_sidebar" aria-label="Main sidebar">
        <div className="admin_brand_wrap">
          <h2 className="admin_brand">Neprift</h2>
        </div>

        <nav className="admin_navmenu" aria-label="Main navigation">
          <ul className="admin_menu_list">
            <li className="admin_menu_item"><a href="#dashboard">Dashboard</a></li>
            <li className="admin_menu_item"><a href="#profile">Profile</a></li>
            <li className="admin_menu_item"><a href="#logout">Logout</a></li>
          </ul>
        </nav>
      </aside>

      {/* Navbar */}
      <header className="admin_navbar" role="banner">
        <div className="admin_nav_left">{today}</div>
        <div className="admin_nav_right">
          <div className="admin_profile_circle" aria-hidden="true">S</div>
          <span className="admin_profile_name">Susan Karki</span>
        </div>
      </header>

      {/* Main content */}
      <main className="admin_content_area" role="main">
        <h1 className="admin_page_title">Welcome to Dashboard</h1>

        <div className="admin_dashboard_row">
          {/* Sales Line Chart */}
          <div className="admin_sales_chart_box">
            <h2 className="admin_section_title">Monthly Sales</h2>
            <SalesChart />
          </div>

          {/* Highest Selling Item */}
          <div className="admin_top_item_box">
            <h2 className="admin_section_title">Highest Selling Item</h2>
            <p className="admin_big_number">32,400 units</p>
            <p className="admin_item_label">
              Product: <strong>Premium Headphones</strong>
            </p>
          </div>

          {/* Customer Review Horizontal Bar Chart */}
          <div className="admin_sales_chart_box">
            <h2 className="admin_section_title">Customer Reviews</h2>
            <CustomerReviewChart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
