import React from "react";
import "./NepriftPolicies.css";

function NepriftPolicies() {
  return (
    <div className="policies_container">
      <h1 className="policies_title">Terms & Conditions</h1>

      <div className="policies_content">
        <p>
          Welcome to <strong>Neprift</strong>! By accessing or using our website, 
          you agree to be bound by these Terms and Conditions. Please read them carefully.
        </p>

        <h2>1. General Use</h2>
        <p>
          The content on Neprift is for personal use only. You may not copy, reproduce, or redistribute 
          any part of this website without our permission.
        </p>

        <h2>2. Account Responsibilities</h2>
        <p>
          If you create an account with us, you are responsible for maintaining the confidentiality of your 
          account information and password. Any activity under your account is your responsibility.
        </p>

        <h2>3. Products & Pricing</h2>
        <p>
          All products listed on Neprift are second-hand items and sold as-is. We make every effort to 
          provide accurate descriptions, but we do not guarantee perfection. Prices are subject to change 
          without notice.
        </p>

        <h2>4. Orders & Payments</h2>
        <p>
          By placing an order, you agree to provide accurate information and complete the payment in full. 
          We reserve the right to cancel orders if payment fails or if fraudulent activity is detected.
        </p>

        <h2>5. Shipping & Returns</h2>
        <p>
          Shipping times may vary depending on your location. Returns are accepted only for damaged or 
          misrepresented items, and must be requested within 7 days of delivery.
        </p>

        <h2>6. Privacy</h2>
        <p>
          We respect your privacy. Any personal information you provide will be used only to process orders 
          and improve our services, in accordance with our Privacy Policy.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Neprift is not liable for any direct, indirect, or incidental damages arising from the use of our 
          website or products.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We may update these Terms & Conditions at any time. Your continued use of Neprift indicates your 
          acceptance of the updated terms.
        </p>

        <p className="policies_footer">
          Thank you for shopping with <strong>Neprift</strong> – your favorite thrift store!
        </p>
      </div>
    </div>
  );
}

export default NepriftPolicies;
