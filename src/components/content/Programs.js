import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran, faSchool, faCampground } from '@fortawesome/free-solid-svg-icons';

const Programs = () => {
  return (
    <section className="bg-gray-800 bg-opacity-50 backdrop-blur-lg py-11">
      <div  className="container mx-auto px-4 text-center" data-aos="zoom-in">
        <h1 className="text-3xl font-bold mb-2 text-white text-center">Program Unggulan</h1>
        <p className="text-white text-lg mb-6 text-center">Pendidikan Berbasis Tauhid</p>

        <div className="grid md:grid-cols-3 gap-6 px-2">
          <div data-aos="fade-right" className="flex">
            <div className="bg-white p-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300 flex-1 flex flex-col">
              <FontAwesomeIcon icon={faCampground} size="3x" />
              <h2 className="text-xl font-bold text-green-700 mb-2">Boarding School</h2>
              <p className="text-gray-700 mb-4 mt-7 flex-grow">
                Program yang diperuntukkan bagi santri yang ingin fokus pendidikan formal serta mendapatkan hafalan Quran dengan model belajar full day school. Target hafalan 8 juz dalam 3 tahun.
              </p>
              <a href="#boarding-school" className="text-blue-500">Info Detail</a>
            </div>
          </div>

          <div data-aos="fade-up" className="flex">
            <div className="bg-white p-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300 flex-1 flex flex-col">
              <FontAwesomeIcon icon={faBookQuran} size="3x" />
              <h2 className="text-xl font-bold text-green-700 mb-2">Takhassus</h2>
              <p className="text-gray-700 mb-4 mt-7 flex-grow">
                Program khusus tahfidz Quran sebagai program unggulan. Belajar Quran langsung bersama Syeikh dari Timur Tengah dengan target hafalan 20-30 juz dalam 3 tahun.
              </p>
              <a href="#takhassus" className="text-blue-500">Info Detail</a>
            </div>
          </div>

          <div data-aos="fade-left" className="flex">
            <div className="bg-white p-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300 flex-1 flex flex-col">
              <FontAwesomeIcon icon={faSchool} size="3x" />
              <h2 className="text-xl font-bold text-green-700 mb-2">Full Day School</h2>
              <p className="text-gray-700 mb-4 mt-7 flex-grow">
                Program kelas regular tidak berasrama dan tetap mendapatkan muatan keilmuan Tsaqofah Islamiyah. Hari efektif senin - jumat. Target hafalan 4 juz dalam 3 tahun.
              </p>
              <a href="#full-day-school" className="text-blue-500">Info Detail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
