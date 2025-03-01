import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-50 backdrop-filter-lg text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Address and Contact Info */}
          <div className="mb-4">
            <h2 className="text-lg font-bold">SMA ISLAM AHMAD YANI BATANG</h2>
            <p><b>Alamat:</b> Jl. Kyai Surgi, Dracik Kembang, Proyonanggan Sel., Kec. Batang, Kabupaten Batang, Jawa Tengah 51211</p>
            <br/>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:ahmadyanismaislam@gmail.com">ahmadyanismaislam@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faPhone} /> Telepon: <a href="tel:(0285)7928075">(0285) 7928075</a></p>
            <p><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp: <a href="https://wa.me/6285370005231">+62 853-7000-5231</a></p>
          </div>

          {/* Social Media Icons */}
          <div className="mb-4">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex flex-col space-y-2">
              <a href="# " className="text-white hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </a>
              <a href="# " className="text-white hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </div>

          
          <div className="mb-4">
            <h2 className="text-lg font-bold">Informasi Tambahan</h2>
            <p>Konten tambahan bisa diletakkan di sini jika diperlukan.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>&copy; 2025 SMAYANI BATANG. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="# " className="hover:text-blue-500">Privacy Policy</a>
            <a href="# " className="hover:text-blue-500">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
