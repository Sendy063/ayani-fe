import React from "react";
// import { Link } from 'react-router-dom';
import articles from "../../data/articlesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const ArticleList = () => {
  return (
    <section id="article" className=" bg-gray-100 rounded-lg ">
      <div className="container mx-auto px-4 py-8">
      <h1
        className="text-3xl font-bold mb-4 text-green-700 text-center"
        data-aos="fade-up"
      >
        Berita & Artikel
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="zoom-in">
        {articles.map((article) => (
          <a href={`/article/${article.id}`} key={article.id} className="block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h2 className="text-lg font-bold mb-2">{article.title}</h2>
                <div className="border-t border-gray-300 my-2"></div>
                <p className="text-gray-600 mb-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {article.date}
                </p>
                {/* <p className="mt-2">{article.description}</p> */}
              </div>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ArticleList;
