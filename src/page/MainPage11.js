import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ArticleList from "../components/ArticleList";

const MainPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <header
        className="bg-cover bg-center text-white text-center w-full h-screen"
        style={{ backgroundImage: "url('/assets/images/bg2.png')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold" data-aos="fade-up">
            Selamat Datang di SMAYANI BATANG
          </h1>
          <p className="text-xl mt-4" data-aos="fade-up" data-aos-delay="300">
            Tempat untuk belajar, tumbuh, dan berprestasi
          </p>
        </div>
      </header>
      {/* Tentang Kami */}
      <div
        className="container mx-auto px-4 py-8 flex flex-wrap"
        data-aos="fade-up"
        id="about"
      >
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mb-4 text-green-700">
            Tentang Kami
          </h1>
          <p>
            SMAYANI BATANG adalah institusi pendidikan yang berdedikasi untuk
            memberikan pendidikan berkualitas tinggi kepada siswa-siswi kami.
            Dengan sejarah yang panjang dan visi yang kuat, kami berkomitmen
            untuk menciptakan lingkungan belajar yang positif dan mendukung.
          </p>
          <p>
            Kami menawarkan berbagai program pendidikan yang mencakup studi
            Islam, akademik, olahraga, dan seni. Kami berfokus pada pengembangan
            karakter dan kemampuan akademik siswa kami untuk mempersiapkan
            mereka menjadi pemimpin masa depan.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/assets/images/bg2.png"
            alt="Gambar Tentang Kami"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>

      {/* Galeri */}
      <section
        className="container mx-auto px-4 py-8"
        data-aos="fade-up"
        id="gallery"
      >
        <h1 className="text-2xl font-bold mb-4 text-green-700">Galeri</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-40">
            <img
              src="/assets/images/bg2.png"
              alt="Gambar 1"
              className="w-full h-full object-cover rounded shadow-lg"
            />
          </div>
          <div className="h-40">
            <img
              src="/assets/images/bg2.png"
              alt="Gambar 2"
              className="w-full h-full object-cover rounded shadow-lg"
            />
          </div>
          <div className="h-40">
            <img
              src="/assets/images/bg2.png"
              alt="Gambar 3"
              className="w-full h-full object-cover rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="bg-green-500 py-8">
        <div
          id="program"
          className="container mx-auto px-4 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-2xl font-bold mb-2 text-white text-center">
            Program Unggulan
          </h1>
          <p className="text-white text-lg mb-6 text-center">
            Pendidikan Berbasis Tauhid
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold text-green-700 mb-2">
                Boarding School
              </h2>
              <p className="text-gray-700 mb-4">
                Program yang diperuntukkan bagi santri yang ingin fokus
                pendidikan formal serta mendapatkan hafalan Quran dengan model
                belajar full day school. Target hafalan 8 juz dalam 3 tahun.
              </p>
              <a href="#boarding-school" className="text-blue-500">
                Info Detail
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold text-green-700 mb-2">
                Takhassus
              </h2>
              <p className="text-gray-700 mb-4">
                Program khusus tahfidz Quran sebagai program unggulan. Belajar
                Quran langsung bersama Syeikh dari Timur Tengah dengan target
                hafalan 20-30 juz dalam 3 tahun.
              </p>
              <a href="#takhassus" className="text-blue-500">
                Info Detail
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold text-green-700 mb-2">
                Full Day School
              </h2>
              <p className="text-gray-700 mb-4">
                Program kelas regular tidak berasrama dan tetap mendapatkan
                muatan keilmuan Tsaqofah Islamiyah. Hari efektif senin - jumat.
                Target hafalan 4 juz dalam 3 tahun.
              </p>
              <a href="#full-day-school" className="text-blue-500">
                Info Detail
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" text-center py-8 px-4  rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Mengapa Memilih SMA ISLAM AHMAD YANI?
          </h2>

          <div className="flex flex-col md:flex-row justify-around items-center md:space-x-4 space-y-4 md:space-y-0">
            {/* Feature 1 */}
            <div className="bg-white-100 p-4 rounded-lg shadow-lg max-w-sm">
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                Tahfizh 30 Juz Bersanad
              </h3>
              <p>
                Program Takhassus yang membantu siswa menghafal 20-30 juz dengan
                sanad Riwayat Hafs an Ashim dan riwayat lainnya.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white-100 p-4 rounded-lg shadow-lg max-w-sm">
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                Dibimbing langsung Syeikh Timur Tengah
              </h3>
              <p>
                Program Takhassus dengan bimbingan langsung dari Syeikh Muhammad
                Mahdi Al-Yamani.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white-100 p-4 rounded-lg shadow-lg max-w-sm">
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                Kurikulum Integral
              </h3>
              <p>
                Pendidikan berbasis Tauhid yang mengintegrasikan kurikulum
                nasional dengan nilai-nilai spiritual Islami.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleList />

      {/* Visi dan Misi */}
      <section>
        <div
          id="vision-mission"
          className="container mx-auto px-4 py-8 "
          data-aos="fade-up"
        >
          <h1 className="text-2xl font-bold mb-4 text-green-700">
            Visi dan Misi
          </h1>
          <p>
            Visi kami adalah menjadi sekolah yang unggul dalam memberikan
            pendidikan Islami yang berkualitas. Misi kami adalah mendidik
            siswa-siswi dengan nilai-nilai Islami, ilmu pengetahuan yang
            komprehensif, dan keterampilan hidup yang memadai untuk menghadapi
            tantangan masa depan.
          </p>
        </div>
        <div
          className="container mx-auto px-4 py-8 flex flex-wrap"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="/assets/images/bg2.png"
              alt="Gambar Visi dan Misi"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
