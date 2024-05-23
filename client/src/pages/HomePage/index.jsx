import React from "react";
import "./index.scss"
import { Card } from 'antd';




const HomePage = () => {
  return <div id="home-page">
      <div className="home-page">
        <section id="banner">
         <div className="banner">
         <div className="container">
          <div className="content">
          <p>SPRING / SUMMER COLLECTION 2017</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button className="shop">SHOP NOW</button>
         </div> 
         </div></div>       
        </section>
        <section id="popular-items">
          <div className="contaienr">
            <div className="popular-items">
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
    <div className="custom-image">
      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </div>
    <div className="custom-card">
      <h3>Europe Street beat</h3>
      <p>www.instagram.com</p>
    </div>
  </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
};

export default HomePage;
