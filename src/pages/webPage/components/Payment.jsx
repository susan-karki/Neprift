import React, { useEffect, useState } from 'react';
import './Payment.css';
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import Layout from '../../../components/layout/Layout'

const Payment = () => {
  const [formData, setformData] = useState({
    amount: "10",
    tax_amount: "0",
    total_amount: "10",
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "https://developer.esewa.com.np/success",
    failure_url: "https://developer.esewa.com.np/failure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  const generateSignature = (total_amount, transaction_uuid, product_code, secret) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    return CryptoJS.enc.Base64.stringify(hash);
  };

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;
    const hashedSignature = generateSignature(total_amount, transaction_uuid, product_code, secret);
    setformData((prev) => ({ ...prev, signature: hashedSignature }));
  }, [formData.amount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "amount" ? { total_amount: value } : {}), 
    }));
  };

  return (
    <Layout>
    <div className="paymentcontainer">
    <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
        <h1>Checkout</h1>
        <div className="field">
            <label htmlFor="">Amount</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      </div>
      <input type="hidden" name="tax_amount" value={formData.tax_amount} />
      <input type="hidden" name="total_amount" value={formData.total_amount} />
      <input type="hidden" name="transaction_uuid" value={formData.transaction_uuid} />
      <input type="hidden" name="product_service_charge" value={formData.product_service_charge} />
      <input type="hidden" name="product_delivery_charge" value={formData.product_delivery_charge} />
      <input type="hidden" name="product_code" value={formData.product_code} />
      <input type="hidden" name="success_url" value={formData.success_url} />
      <input type="hidden" name="failure_url" value={formData.failure_url} />
      <input type="hidden" name="signed_field_names" value={formData.signed_field_names} />
      <input type="hidden" name="signature" value={formData.signature} />
       <div className="field">
        <label htmlFor=""> Full Name</label>
        <input type="text" />
       </div>
      <div className="field">
        <label htmlFor=""> Email Address</label>
        <input type="email" />
       </div>
      <div className="field">
        <label htmlFor="">Phone Number</label>
        <input type="tel" />
      </div>
      <div className="field">
        <label htmlFor="">Address</label>
        <input type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
      
      <input  className ='btn'type="submit" value="Pay with E-Sewa" />
    </form>
    </div>
    </Layout>
  );
};

export default Payment;

