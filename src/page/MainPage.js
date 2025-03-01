import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/content/About";
import Gallery from "../components/content/Gallery";
import Programs from "../components/content/Programs";
import WhyChooseUs from "../components/content/WhyChooseUs";
import ArticleList from "../components/article/ArticleList";
import VisiMisi from "../components/content/VisiMisi";
import Pendaftaran from "../components/content/Pendaftaran";
import Banner from "../components/common/Banner";

const MainPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <Banner />
      <section id="about" className="section-offset w-full h-auto">
        <About />
      </section>
      <section id="pendaftaran" className="section-offset w-full h-auto">
        <Pendaftaran />
      </section>
      <section id="gallery" className="section-offset w-full h-auto">
        <Gallery />
      </section>
      <section id="program" className="section-offset w-full h-auto">
        <Programs />
      </section>
      <section id="why-choose-us" className="section-offset w-full h-auto">
        <WhyChooseUs />
      </section>
      <section id="visi-misi" className="section-offset w-full h-auto">
        <VisiMisi />
      </section>
      <section id="article" className="section-offset w-full h-auto">
        <ArticleList />
      </section>
    </div>
  );
};

export default MainPage;
