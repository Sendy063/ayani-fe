import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import MainPage from "./page/MainPage";
import ArticleList from "./components/article/ArticleList";
import ArticleDetail from "./components/article/ArticleDetail";
// import FormDaftar from "./components/FormDaftar";

import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="bg-custom min-h-screen scroll-smooth overflow-x-hidden">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/article" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            {/* <Route path="/formdaftar" element={<FormDaftar />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
