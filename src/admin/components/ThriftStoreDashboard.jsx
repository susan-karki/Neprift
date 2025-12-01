import React from "react";
import "./dashboard.css"; // external CSS
import { Home, BookOpen, Award, Wallet, ShoppingBag, Users, LogOut, Calendar, Box, Download, PlusCircle, Menu } from "lucide-react";

export default function ThriftStoreDashboard() {
  const stats = [
    { id: 1, title: "Active Listings", value: 128, icon: BookOpen },
    { id: 2, title: "Completed Sales", value: 54, icon: Award },
    { id: 3, title: "Pending Payments", value: 8, icon: Wallet },
  ];

  const items = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      mentor: "Condition: Good",
      imagesrc: "https://via.placeholder.com/64",
      qty: 1,
      price: "$28",
    },
    {
      id: 2,
      title: "Retro Lamp",
      mentor: "Condition: Fair",
      imagesrc: "https://via.placeholder.com/64",
      qty: 1,
      price: "$45",
    },
  ];

  const receipts = [
    { id: 1, title: "Order #1024", date: "Nov 17, 2025" },
    { id: 2, title: "Order #1017", date: "May 29, 2025" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">&lt;/&gt; CODE IT</div>

        <nav className="menu">
          <a className="menu-item active"><Home size={18}/> Dashboard</a>
          <a className="menu-item"><ShoppingBag size={18}/> My Listings</a>
          <a className="menu-item"><PlusCircle size={18}/> Add New Item</a>
          <a className="menu-item"><Award size={18}/> Certificates</a>
          <a className="menu-item"><Users size={18}/> Sellers</a>
          <a className="menu-item"><Box size={18}/> Inventory</a>
          <a className="menu-item"><Calendar size={18}/> Payment Receipts</a>
          <a className="menu-item"><Menu size={18}/> Suggestions</a>
        </nav>

        <div className="logout-section">
          <button className="menu-item"><LogOut size={18}/> Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="topbar">
          <div>
            <div className="date"><Calendar size={14}/> Wednesday, November 19, 2025</div>
            <h1 className="welcome">Welcome back, Susan! 👋</h1>
            <p className="subtitle">Your thrift store updates for today.</p>
          </div>

          <div className="profile-box">
            <button className="enroll-btn">+ Enroll in a Course</button>
            <div className="profile">
              <img src="https://i.pravatar.cc/40" className="avatar"/>
              <div className="profile-text">
                <div className="name">Susan karki</div>
                <div className="edit">Edit Profile</div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.id}>
              <div className="icon-box"><s.icon size={20}/></div>
              <div>
                <div className="stat-title">{s.title}</div>
                <div className="stat-value">{s.value}</div>
              </div>
            </div>
          ))}
        </section>

        <section className="content-grid">
          {/* Listings */}
          <div className="box">
            <div className="box-header">
              <h2>Your Listings</h2>
              <a className="see-all">See All</a>
            </div>

            {items.map((it) => (
              <div key={it.id} className="list-item">
                <img src={it.imagesrc} className="item-img" />
                <div className="list-text">
                  <div className="item-title">{it.title}</div>
                  <div className="item-sub">{it.mentor}</div>
                  <div className="item-price">{it.price} · Qty: {it.qty}</div>
                </div>
                <a className="view">View</a>
              </div>
            ))}
          </div>

          {/* Receipts */}
          <div className="box">
            <div className="box-header">
              <h2>Receipts</h2>
              <a className="see-all">See All</a>
            </div>

            {receipts.map((r) => (
              <div key={r.id} className="receipt-item">
                <div>
                  <div className="receipt-title">{r.title}</div>
                  <div className="receipt-date">Completed: {r.date}</div>
                </div>
                <div className="download"><Download size={16}/> Download</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom-grid">
          <div className="box">
            <h3 className="box-title">Recent Sales</h3>
            <p className="muted">No recent sales to show. Add new listings to get started.</p>
          </div>

          <div className="cta-box">
            <h3>List a New Item</h3>
            <p>Quickly add an item to your thrift store inventory.</p>
            <button className="cta-btn">Add Item</button>
          </div>
        </section>
      </main>
    </div>
  );
}
