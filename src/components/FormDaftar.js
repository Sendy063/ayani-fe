import React from 'react';


const FormDaftar = () => {
  return (
    <section className="bg-custom-pendaftaran py-11">
      <div id="pendaftaran" className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4 text-white">Pendaftaran</h1>
        <p className="text-white text-lg mb-6">Daftarkan diri Anda untuk bergabung dengan program unggulan kami!</p>
        <div className="bg-white p-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Informasi Pendaftaran</h2>
          <p className="text-gray-700 mb-4">
            Pendaftaran untuk tahun ajaran baru sudah dibuka! Silakan lengkapi formulir pendaftaran online dengan klik tautan di bawah ini.
          </p>
          <a href="/daftar" className="text-blue-500 underline hover:text-blue-700 transition duration-300">Formulir Pendaftaran Online</a>
          <div className="text-left mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Persyaratan Umum:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Lulusan SMP/MTs atau sederajat</li>
              <li>Mengisi formulir pendaftaran</li>
              <li>Menyerahkan fotokopi rapor SMP/MTs kelas VII s.d. IX</li>
              <li>Menyerahkan pas foto berwarna ukuran 3x4 sebanyak 2 lembar</li>
            </ul>
          </div>
          <div className="text-left mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Kontak Informasi:</h3>
            <ul className="text-gray-700">
              <li>Telepon: (021) 12345678</li>
              <li>Email: <a href="mailto:info@smaahmadyani.sch.id" className="text-blue-500 underline hover:text-blue-700 transition duration-300">info@smaahmadyani.sch.id</a></li>
              <li>Website: <a href="http://www.smaahmadyani.sch.id" className="text-blue-500 underline hover:text-blue-700 transition duration-300">www.smaahmadyani.sch.id</a></li>
            </ul>
          </div>
          <div className="text-left mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Lokasi Sekolah:</h3>
            <p className="text-gray-700">
              Alamat: Jl. Ahmad Yani No. 123, Jakarta
            </p>
            <img src="/assets/images/denah-lokasi.jpg" alt="Denah Lokasi" className="w-full h-auto rounded shadow-lg mt-4"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormDaftar;
