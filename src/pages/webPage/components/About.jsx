import React from "react";
import "./About.css";
import Layout from '../../../components/layout/Layout'

const About = () => {
  return (
    <Layout>
    <div className="about-container">
      <h1>
        About <span>NePrift</span>
      </h1>
      <p className="tagline">Reviving fashion, reusing with passion ♻️</p>

      <div className="about-content">
        <p>
          Welcome to <strong>NePrift</strong> — Nepal’s cozy online thrift store
          where fashion meets sustainability. We believe that great style
          doesn’t have to cost the earth 🌍.
        </p>

        <p>
          Our mission is simple: to give pre-loved clothes a second chance and
          help you find unique pieces that match your vibe — all while reducing
          waste and promoting eco-friendly living.
        </p>

        <p>
          Every item in our store is handpicked with care, cleaned, and checked
          for quality. Whether you’re looking for vintage styles, trendy
          streetwear, or timeless classics — NePrift has something for everyone.
        </p>

        <p className="closing">
          Join us on our journey to make thrift shopping stylish, affordable,
          and sustainable. Together, we can redefine fashion in Nepal 🇳🇵.
        </p>
      </div>

      <div className="about-footer">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default About;
