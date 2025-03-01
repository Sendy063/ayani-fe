/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    { src: '/assets/images/gb1.jpeg', caption: 'Kegiatan ' },
    { src: '/assets/images/gb2.jpeg', caption: 'Pemilihan Ketus OSIS' },
    { src: '/assets/images/gb3.jpg', caption: 'Kegiatan MPLS' },
    { src: '/assets/images/gb3.jpg', caption: 'Kegiatan MPLS' },
    { src: '/assets/images/gb3.jpg', caption: 'Kegiatan MPLS' },
    { src: '/assets/images/gb3.jpg', caption: 'Kegiatan MPLS' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '40px', // Menambahkan padding di tengah untuk konsistensi
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '20px', // Menambahkan padding di tengah untuk 2 slide
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-11 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-700">Gallery</h1>
        <Slider {...settings} className="gallery-slider">
          {images.map((image, index) => (
            <div key={index} className="slide-item" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="relative overflow-hidden rounded-lg shadow-lg mx-2"> {/* Menambahkan margin horizontal */}
                <img
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <p className="text-center mt-2 mb-2 text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
