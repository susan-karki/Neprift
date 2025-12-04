import React, { useState } from 'react';
import './Form.css';

const Form = ({ type = 'Sign Up', onSubmit }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    address: '',
    birthday: '',
    gender: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'Login') {
      onSubmit?.({ email: data.email, password: data.password });
    } else {
      onSubmit?.(data);
    }
  };

  return (
    <div className="app-container">
      <div className="form-box">
        <div className="form-header">
          <h2>{type === 'Login' ? 'Login' : 'Sign Up'}</h2>
          <div className="underline" />
        </div>

        <form onSubmit={handleSubmit} className="form-body">
          {type !== 'Login' && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={data.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          {type !== 'Login' && (
            <>
              <div className="form-grid">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phonenumber"
                    placeholder="Your Phone Number"
                    value={data.phonenumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    value={data.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group has-icon">
                  <label>Birthday</label>
                  <input
                    type="date"
                    name="birthday"
                    value={data.birthday}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-icon calendar-icon" aria-hidden="true" />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <div className="select-wrap">
                    <select
                      name="gender"
                      value={data.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="select-arrow" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Role</label>
                <div className="select-wrap">
                  <select
                    name="role"
                    value={data.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="Customer">Customer</option>
                    <option value="Seller">Seller</option>
                  </select>
                  <span className="select-arrow" aria-hidden="true" />
                </div>
              </div>
            </>
          )}

          {type === 'Login' && (
            <div className="forgot-password">
              Forgot password? <span>Click Here!</span>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {type === 'Login' ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
