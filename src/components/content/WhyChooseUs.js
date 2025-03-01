import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSchool, faUsers, faRunning, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="text-center py-8 px-4 rounded-lg bg-gray-100"  data-aos="fade-up">
      <h2 className="text-4xl font-bold text-green-700 mb-10">Mengapa Memilih SMA ISLAM AHMAD YANI?</h2>
      <div className="flex flex-col md:flex-row justify-around items-stretch md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/5" data-aos="zoom-in">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center h-full">
            <FontAwesomeIcon icon={faBook} className="text-green-700 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">Pendidikan Berkualitas</h3>
            <p className="text-gray-700 text-center flex-grow">Sekolah ini telah terakreditasi <span className="font-semibold text-gray-900">B</span> oleh BAN-S/M, yang menunjukkan bahwa sekolah ini memenuhi standar kualitas pendidikan yang tinggi. Dengan kurikulum SMA 2013 MIPA, siswa mendapatkan pendidikan yang komprehensif dan sesuai dengan perkembangan ilmu pengetahuan dan teknologi.</p>
          </div>
        </div>
        <div className="w-full md:w-1/5" data-aos="zoom-in" data-aos-delay="100">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center h-full">
            <FontAwesomeIcon icon={faSchool} className="text-green-700 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">Lingkungan Belajar Kondusif</h3>
            <p className="text-gray-700 text-center flex-grow">Sekolah ini berkomitmen menciptakan lingkungan belajar yang kondusif dan inklusif bagi semua siswa. Fasilitas yang memadai dan dukungan dari tenaga pendidik yang kompeten membantu siswa untuk belajar dengan nyaman dan maksimal.</p>
          </div>
        </div>
        <div className="w-full md:w-1/5" data-aos="zoom-in" data-aos-delay="200">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center h-full">
            <FontAwesomeIcon icon={faUsers} className="text-green-700 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">Pengembangan Karakter</h3>
            <p className="text-gray-700 text-center flex-grow">Selain pendidikan akademik, sekolah ini juga fokus pada pengembangan karakter siswa, termasuk nilai-nilai keagamaan, moral, dan sosial. Program-program pengembangan diri dan bimbingan konseling membantu siswa dalam menghadapi tantangan masa depan.</p>
          </div>
        </div>
        <div className="w-full md:w-1/5" data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center h-full">
            <FontAwesomeIcon icon={faRunning} className="text-green-700 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">Kegiatan Ekstrakurikuler</h3>
            <p className="text-gray-700 text-center flex-grow">Sekolah ini menawarkan berbagai kegiatan ekstrakurikuler yang mendukung pengembangan bakat dan minat siswa, mulai dari olahraga, seni, hingga organisasi kemasyarakatan. Kegiatan-kegiatan ini membantu siswa untuk mengembangkan keterampilan non-akademik dan memperluas jaringan sosial.</p>
          </div>
        </div>
        <div className="w-full md:w-1/5" data-aos="zoom-in" data-aos-delay="400">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center h-full">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-green-700 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">Kepemimpinan yang Inspiratif</h3>
            <p className="text-gray-700 text-center flex-grow">Dipimpin oleh Kepala Sekolah <span className="font-semibold text-gray-900">Mohammad Akyas</span>, SMA Islam Ahmad Yani Batang berusaha terus meningkatkan standar pendidikan dan memberikan yang terbaik untuk siswanya. Dukungan dan kebijakan dari manajemen sekolah yang inovatif dan visioner membantu menciptakan suasana belajar yang inspiratif dan dinamis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
