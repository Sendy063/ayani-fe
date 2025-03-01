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
    <nav className={`fixed w-full top-0 z-20 ${
      isScrolled ? 'blurred-nav text-green-700' : 'transparent-nav text-white'} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/images/logoayani1.png" alt="Logo" className="w-10 rounded-full shadow-lg" />
          <a href="/" className="text-xl font-bold ml-2">SMAYANI BATANG</a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 text-base">
          <a href="/" className="hover:text-green-700 transition">Beranda</a>
          <div className="relative">
            <button onClick={() => toggleDropdown('info')} className="hover:text-green-700 transition flex items-center">
              Informasi <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isDropdownOpen === 'info' && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all">
                <a href="#about" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Tentang Kami</a>
                <a href="#pendaftaran" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Pendaftaran</a>
                <a href="#gallery" className="block px-4 py-2 hover:underline text-hijau transition">Galeri</a>
              </div>
            )}
          </div>
        </div>

        {/* Button Toggle Mobile Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 focus:outline-none">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        {/* Sidebar Mobile */}
        <div className={`fixed top-0 right-0 h-screen bg-white shadow-lg p-4 z-30 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}>
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-600">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <ul className="mt-10 space-y-4 text-gray-800">
            <li><a href="/" className="block hover:text-green-700">Beranda</a></li>
            <li>
              <button onClick={() => toggleDropdown('info')} className="w-full text-left flex justify-between hover:text-green-700">
                Informasi <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {isDropdownOpen === 'info' && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><a href="#about" className="block hover:text-green-600">Tentang Kami</a></li>
                  <li><a href="#pendaftaran" className="block hover:text-green-600">Pendaftaran</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
