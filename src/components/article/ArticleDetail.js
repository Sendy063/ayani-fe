import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faPenNib } from "@fortawesome/free-solid-svg-icons";
import articles from "../../data/articlesData";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <section className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
      <h1 className=" mt-11 text-3xl font-bold mb-4 text-center hover:text-green-500 transition duration-300 ease-in-out font-sans">
        {article.title}
      </h1>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full rounded-lg object-cover mb-4 hover:opacity-75 transition duration-300 ease-in-out"
      />
      <div className="text-gray-600 text-sm text-center mb-4 flex items-center justify-center">
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> {article.date}
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <p className="text-lg leading-relaxed flex items-center">
        <FontAwesomeIcon icon={faPenNib} className="mr-2" />{" "}
        {article.description}
      </p>
      <hr className="border-t-2 border-gray-300 my-4" />
      <p className="mt-4 whitespace-pre-line text-gray-700">
        {article.content}
      </p>
    </div>
    </section>
  );
};

export default ArticleDetail;
