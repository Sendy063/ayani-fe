import React from 'react';

const Banner = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center bg-no-repeat text-white text-center w-full h-screen"
        style={{ backgroundImage: "url('/assets/images/gb1.jpeg')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold font-merriweather" data-aos="zoom-in">SMA ISLAM AHMAD YANI BATANG</h1>
          <h2 className="text-5xl font-bold text-yellow-500 font-merriweather mt-1" data-aos="zoom-in">
            Islamic Senior High School
          </h2>
          <p className="text-xl mt-4 font-roboto px-2" data-aos="fade-up" data-aos-delay="300">
            Sekolah menengah atas dengan balutan ilmu islami dan dzikir yang bisa mengantarkan masa depan dengan gemilang, dengan pondasi agama yang kuat
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
