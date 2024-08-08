import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import cardData from "./components/CardData";
import "./styles.css";

function MyApp() {
  let [excelImage, setExcelImage] = useState([]);

  function favAddExcelentia(imgSrc) {
    setExcelImage([...excelImage, imgSrc]);
  }

  function removeExcelImg(imgSrc) {
    setExcelImage(excelImage.filter((currentImg) => currentImg !== imgSrc));
  }

  let lastImage = excelImage.map((imgSrc) => {
    return (
      <div className="favImg" key={imgSrc}>
        <i className="las la-times-circle" onClick={() => removeExcelImg(imgSrc)}></i>
        <img src={imgSrc} alt="img" />
      </div>
    );
  });

  let card = cardData.map((cardItem) => {
    return (
      <Card
        key={cardItem.imgSrc}
        cardContent={{
          imgSrc: cardItem.imgSrc,
          name: cardItem.name,
          phone: cardItem.phone,
          email: cardItem.email,
        }}
        cardFn={favAddExcelentia}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="main-container">
        <div className="main-content">
          <h3>Unions</h3>
          <div className="card-container">
            {card}
          </div>
        </div>
        <aside>
          <h3>Favorites</h3>
          {lastImage}
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
