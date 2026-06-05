import { TextAlignJustify } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function Navbar() {

  const [isScroll, setIsScroll] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 30) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className="">
      <nav className={`flex justify-between fixed left-0 right-0 items-center py-5 px-5 md:px-4 md:py-2 bg-blue-50 z-10 ${isScroll ? 'bg-blue-100' : ''}`}>
        <div className='md:hidden'>
          <span className="text-xl font-bold max-w-[20ch]">Vektora</span>
        </div>
        <div
          className={`absolute opacity-0 w-full transition-all duration-150 bg-blue-50 left-0 px-6 py-5 right-0 md:static md:opacity-100 md:flex md:justify-between md:items-center md:gap-5 top-16 ${isScroll ? 'bg-blue-100' : ''} ${isActive ? 'opacity-100' : ''}`}
        >
          <div className='hidden md:block'>
            <div>
              <span className="text-xl font-bold max-w-[20ch]">Vektora</span>
            </div>
          </div>
          <ul className="flex flex-col justify-center items-center md:flex-row gap-10">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-5 mt-10 md:mt-0 opacity-100">
            <button className="bg-gray-50 py-2 px-5 rounded-md">Masuk</button>
            <button className="border py-2 px-5 rounded-md">Daftar</button>
          </div>
        </div>
        <div className="md:hidden" onClick={() => setIsActive(!isActive)}>
          <TextAlignJustify size={30} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
