"use client";
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo/color.png';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

// Define navigation links
const navLinks = [
  {
    href: '/',
    label: 'WHO ARE WE',
  },
  {
    href: '/highlights',
    label: 'HIGHLIGHTS',
  },
  {
    href: '/projects',
    label: 'OUR PROJECTS',
  },
  {
    href: '/contact',
    label: 'CONTACT US',
  },
];

// Header component
const Header = () => {
  // State for toggling navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle navbar state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-5">
      {/* Logo */}
      <Image src={logo} alt="Logo" priority />

      {/* Navbar */}
      <nav className="w-75">
        {/* Hamburger icon */}
        <span
          className="lg:hidden md:block sm:block px-5 text-2xl text-green cursor-pointer"
          onClick={toggleNav}
        >
          <FaBars />
        </span>
        
        {/* Navigation links */}
        <ul className={`lg:flex gap-x-5 text-[16px]   ${isNavOpen ? 'hidden' : 'block '} sm:absolute lg:relative sm:left-0 lg:bg-white sm:bg-green  md:w-42 sm:w-full sm:p-2 sm:mt-5 lg:m-0`}>
          {navLinks.map((link) => (
            <li key={link.href} className='sm:text-center sm:m-4 md:m-0 lg:m-0'>
              <Link href={link.href} className="text-[15px] lg:text-green sm:text-white   " onClick={toggleNav}>
                
                  {link.label}
                
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
