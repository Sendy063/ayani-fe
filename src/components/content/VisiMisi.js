import React from 'react';

const VisiMisi = () => {
  return (
    <section className="bg-gray-800 bg-opacity-50 backdrop-blur-lg py-11">
      <div id="vision-mission" className="container mx-auto px-4 py-8" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Visi dan Misi</h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="/assets/images/gb3.jpg"
              alt="Gambar Visi dan Misi"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              data-aos="fade-right"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-semibold mb-4 text-white flex flex-col justify-center items-center">Visi</h2>
            <p className="mb-6 text-white leading-relaxed pl-5">
              Unggul dalam Disiplin untuk Meraih Prestasi dan Bertaqwa kepada Allah SWT
            </p>
            <h2 className="text-3xl font-semibold mb-4 text-white flex flex-col justify-center items-center">Misi</h2>
            <ul className="list-disc list-outside pl-5 text-white leading-relaxed">
              <li className="mb-2">
                Menciptakan kedisiplinan secara utuh dengan menanamkan nilai-nilai disiplin dalam segala aspek kehidupan siswa.
              </li>
              <li className="mb-2">
                Mengembangkan potensi siswa dengan meningkatkan kemampuan siswa dalam memahami materi kurikulum.
              </li>
              <li className="mb-2">
                Menyiapkan siswa menguasai teknologi berdasarkan Imtaq dengan mengintegrasikan teknologi dengan nilai-nilai Islami dalam proses pembelajaran.
              </li>
              <li className="mb-2">
                Mencetak siswa yang berakhlakul karimah dengan membentuk karakter siswa yang berakhlak baik dalam berperilaku dan bertindak.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
