import React from 'react'
import BrandLogo from '/images/brand_logo.png'
import ShoeImage from '/images/shoe_image.png'
import amazonelogo from '/images/amazon.png'
import flipkartimage from '/images/flipkart.png'
const Home = () => {
  return (
    <div>
      <nav className="container">
        <div className="Logo">
          <img src={BrandLogo} alt="BrandLogo"></img>
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="Login">Login</button>
      </nav>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
        <div className="hero-btn">
          <button className="shopnow"> Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="hero-logo">
          <p>Also Available On</p>
          <div className="hero-logo1">
          <img className="logoAZ" src={flipkartimage} alt="Amazon"></img>
          <img className="logoFK" src={amazonelogo} alt="Flipkart"></img>
          </div>
        </div>
        </div>
        <div className="hero-image">
          <img className="imgShoe" src={ShoeImage}></img>
        </div>
      </main>
    </div>
  )
}

export default Home
