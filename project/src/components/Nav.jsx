'use client'

import React from 'react';
import { StartButton } from './ui/StartButton';
import { NavMenu } from './ui/NavMenu';
import { useState, useEffect } from 'react';
import { Separator } from './ui/separator';
import { Link } from 'next/link';
// import { IoJournalSharp } from "react-icons/io5";

const Nav = () => {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[7vh] flex bg-white dark:bg-slate-800 items-center px-4 sticky top-0 z-10 transition-all duration-75 ease-in-out ${
        isScrolled ? 'border-b' : ''
      }`}
    > 
      <a href="/">
        <div className="max-w-fit items-center flex justify-between gap-2 cursor-pointer border-0">
           <img src="/icon.ico" alt="Logo" className="h-12 w-12" />
          <h1 className="font-extrabold text-3xl mr-4 green_blue_gradient">Everflow</h1>
        </div>
      </a>
        
        {/* Logo and Brand */}
        
      <div className="ml-auto">
        <div className='flex gap-4'>
          {/* Login Button */}
          <NavMenu />
          <StartButton />
        </div>
      </div>
      
      
    </div>
  );
};

export default Nav;
