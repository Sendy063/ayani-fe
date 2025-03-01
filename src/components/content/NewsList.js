import React from 'react';

const NewsList = () => {
  const news = [
    { title: 'Berita 1', content: 'Konten berita 1' },
    { title: 'Berita 2', content: 'Konten berita 2' },
    { title: 'Berita 3', content: 'Konten berita 3' },
  ];

  return (
    <div>
      {news.map((item, index) => (
        <div key={index} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
