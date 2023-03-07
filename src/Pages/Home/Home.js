import React from "react";
import { Nav } from "react-bootstrap";
import Azkar from "../../Components/Azkar/Azkar";
import Footer from "../../Components/Footer/Footer";
import Hadith from "../../Components/Hadith/Hadith";
import QuranSection from "../../Components/QuranSection/QuranSection";
import QuranTranslation from "../../Components/QuranTranslation/QuranTranslation";
import homeImg from "../../imgs/10.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="home" id="home" style={{ backgroundImage: `url(${homeImg})` }}>
        <div className="container">
          <div className="home-content">
            <h1>مرحبا بك فى موقع اسلامنا</h1>
            <a href="#quran" className="btn btn-primary">
              تصفح الموقع
            </a>
          </div>
        </div>
      </section>

      <QuranSection />
      <QuranTranslation/>
      <Hadith />
      <Azkar/>
      <Footer/>
    </>
  );
}

export default Home;
