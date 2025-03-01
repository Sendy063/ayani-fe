import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  return (
    <nav className={`fixed w-full top-0 z-20 transition-all duration-300 ${
      isScrolled ? 'blurred-nav text-green-700' : 'transparent-nav text-white'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/images/logoayani1.png" alt="Logo" className="w-10 rounded-full shadow-lg" />
          <a href="/" className="text-xl font-bold ml-2">SMAYANI BATANG</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base">
          <a href="/" className="hover:underline transition">Beranda</a>

          {/* Dropdown Informasi */}
          <div className="relative">
            <button onClick={() => toggleDropdown('info')} className="hover:underline flex items-center">
              Informasi <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isDropdownOpen === 'info' && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <a href="#about" className="block px-4 py-2 hover:bg-gray-100 text-hijau">Tentang Kami</a>
                <a href="#pendaftaran" className="block px-4 py-2 hover:bg-gray-100 text-hijau">Pendaftaran</a>
                <a href="#gallery" className="block px-4 py-2 hover:bg-gray-100 text-hijau">Galeri</a>
              </div>
            )}
          </div>

          {/* Dropdown Program */}
          <div className="relative">
            <button onClick={() => toggleDropdown('program')} className="hover:underline flex items-center">
              Program <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isDropdownOpen === 'program' && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <a href="#program" className="block px-4 py-2 hover:bg-gray-100 text-hijau">Program</a>
                <a href="#why-choose-us" className="block px-4 py-2 hover:bg-gray-100 text-hijau">Keunggulan</a>
                <a href="#visi-misi" className="block px-4 py-2 hover:bg-gray-100 text-hijau">Visi Misi</a>
              </div>
            )}
          </div>

          {/* Artikel */}
          <a href="#article" className="hover:underline transition">Artikel</a>
        </div>

        {/* Button Toggle Mobile Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-auto bg-white rounded-lg shadow-lg p-4 z-30">
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-600">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>

          <ul className="mt-6 space-y-3 text-hijau">
            <li><a href="/" className="hover:underline">Beranda</a></li>

            {/* Mobile Dropdown Informasi */}
            <li>
              <button onClick={() => toggleDropdown('info')} className="flex justify-between w-full hover:underline">
                Informasi <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {isDropdownOpen === 'info' && (
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  <li><a href="#about" className="hover:text-green-600">Tentang Kami</a></li>
                  <li><a href="#pendaftaran" className="hover:text-green-600">Pendaftaran</a></li>
                  <li><a href="#gallery" className="hover:text-green-600">Galeri</a></li>
                </ul>
              )}
            </li>

            {/* Mobile Dropdown Program */}
            <li>
              <button onClick={() => toggleDropdown('program')} className="flex justify-between w-full hover:underline">
                Program <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {isDropdownOpen === 'program' && (
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  <li><a href="#program" className="hover:text-green-600">Program</a></li>
                  <li><a href="#why-choose-us" className="hover:text-green-600">Keunggulan</a></li>
                  <li><a href="#visi-misi" className="hover:text-green-600">Visi Misi</a></li>
                </ul>
              )}
            </li>

            {/* Artikel */}
            <li><a href="#article" className="hover:underline">Artikel</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
