import React, { useEffect, useState } from "react";
import "./AdminDonations.css";

const AdminDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      // Replace with your real backend API
      const res = await fetch("/api/admin/donations");
      const data = await res.json();
      setDonations(data);
    } catch (err) {
      setError("Failed to load donations");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="admindonation-loading">Loading donations...</div>;
  }

  if (error) {
    return <div className="admindonation-error">{error}</div>;
  }

  return (
    <div className="admindonation-container">
      <h2 className="admindonation-title">Donations</h2>

      {donations.length === 0 ? (
        <p className="admindonation-empty">No donations yet.</p>
      ) : (
        <table className="admindonation-table">
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Item</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.donorName}</td>
                <td>{donation.itemName}</td>
                <td>{donation.category}</td>
                <td>{donation.quantity}</td>
                <td>{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDonations;
