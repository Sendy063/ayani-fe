import React from 'react';

const Pendaftaran = () => {
  return (
    <section className="bg-gray-800 bg-opacity-50 backdrop-filter-lg py-11">
      <div id="pendaftaran" className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4 text-white">Pendaftaran</h1>
        <p className="text-white text-lg mb-6">Daftarkan diri Anda untuk bergabung dengan program unggulan kami!</p>
        <div className="bg-white p-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Informasi Pendaftaran</h2>
          <p className="text-gray-700 mb-4">
            Pendaftaran untuk tahun ajaran baru sudah dibuka! Silakan lengkapi formulir pendaftaran online dengan klik tautan di bawah ini.
          </p>
          <a href="/formdaftar" className="text-blue-500 underline hover:text-blue-700 transition duration-300">Formulir Pendaftaran Online</a>
        </div>
      </div>
    </section>
  );
};

export default Pendaftaran;
