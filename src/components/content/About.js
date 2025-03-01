/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100">
    <div
      className="w-full h-auto flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      data-aos="fade-up"
    >
      <img
        src="/assets/images/gb1.jpeg"
        alt="About Image"
        className="border-8 w-full md:w-1/3 rounded-full mb-4 md:mb-0 md:mr-6 hover:scale-105 transform transition-transform duration-300"
        // data-aos="zoom-in"
      />
      <div className="text-center md:text-left" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Tentang SMA Islam Ahmad Yani Batang</h2>
        <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-4">
          SMA Islam Ahmad Yani Batang adalah sebuah sekolah menengah atas swasta yang terletak di Jalan Kyai Surgi Proyonanggan Selatan, Batang, Kabupaten Batang, Jawa Tengah. Didirikan pada tahun 1985, sekolah ini menawarkan kurikulum SMA 2013 MIPA dan berkomitmen untuk memberikan pendidikan berkualitas kepada para siswanya.
        </p>
        <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-4">
          Dengan akreditasi <span className="font-bold text-gray-900">B</span> dari BAN-S/M dan nilai akreditasi 84 pada tahun 2021, SMA Islam Ahmad Yani Batang terus berupaya meningkatkan standar pendidikan. Dipimpin oleh Kepala Sekolah <span className="font-semibold text-gray-900">Mohammad Akyas</span>, sekolah ini fokus pada pengembangan keterampilan dan karakter siswa untuk menghadapi tantangan masa depan.
        </p>
        <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-4">
          Selain akademik, SMA Islam Ahmad Yani Batang juga memiliki berbagai kegiatan ekstrakurikuler yang mendukung bakat dan minat siswa, mulai dari olahraga, seni, hingga organisasi kemasyarakatan. Sekolah ini berkomitmen untuk menciptakan lingkungan belajar yang kondusif dan inklusif bagi semua siswa.
        </p>
      </div>
    </div>
    </section>
  );
};

export default About;
