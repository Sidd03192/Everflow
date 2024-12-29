'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { StartButton } from './ui/StartButton';
import { NavMenu } from './ui/NavMenu';
import { Divide } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card } from './ui/card';

// import { IoJournalSharp } from "react-icons/io5";

const Nav = () => {


  
  const ExampleComponent = () => {
    return (
      <div className={mainFont.className}>
        <h1 className="font-bold">This is a bold heading with Nunito</h1>
        <p>This is a normal paragraph using Nunito font.</p>
      </div>
    );
  };
  
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
      className={`w-full h-[7vh] flex items-center px-4 sticky top-0 z-10 transition-all duration-75 ease-in-out ${
        isScrolled ? 'border-b' : ''
      }`}
    > 
        <div className="max-w-fit items-center flex justtify-between gap-2 cursor-pointer border-0">
        <img src="/icon.ico" alt="Logo" className="h-12 w-12" />
        <h1 className="font-extrabold text-3xl mr-4 green_blue_gradient">Everflow</h1>
        </div>
        {/* Logo and Brand */}
        
      <div className="ml-auto">
        <div className='flex gap-4'>
          {/* Login Button */}
          <NavMenu/>
          <StartButton/>
        </div>
      </div>
      
      
    </div>
  );
};

export default Nav;
