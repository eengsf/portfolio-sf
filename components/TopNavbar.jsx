'use client';

import Image from 'next/image';
import Hamburger from './Hamburger';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import AsideNavbar from './AsideNavbar';
import AsideFooter from './AsideFooter';
import { useEffect } from 'react';
import { setBurger, setTheme } from '@/store/slice/counterSlice';

const TopNavbar = () => {
  const { burger, navbar, theme } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBurger());
  }, [navbar, dispatch]);

  return (
    <div
      className={`fixed w-full ${
        theme ? 'bg-white text-black' : 'bg-black text-white'
      } z-20 ${burger ? 'h-full' : 'h-auto'}`}
    >
      <nav
        className={`flex justify-between items-center 2md:hidden p-5 shadow-md z-10 w-full ${
          theme ? 'shadow-slate-300' : 'shadow-slate-500'
        }`}
      >
        <div
          className={`flex gap-4 w-full transition-all duration-700 ${
            burger ? 'flex-col items-start' : 'flex-row items-center '
          }`}
        >
          <div
            className={` rounded-full transition-all duration-700 ${
              burger ? 'w-[85px] h-[85px] ' : 'w-12 h-12 animate-fadeIn'
            }`}
          >
            <Image
              src={`${theme ? '/eengbiru.jpg' : '/eengmerah.jpg'}`}
              alt="logo"
              width={100}
              height={100}
              priority
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <h1
            className={`flex gap-2 text-xl font-semibold transition-all duration-700 ${
              burger ? '' : 'animate-fadeIn'
            }`}
          >
            Shofiyul Fuad{' '}
            <span className="hidden 2md:inline-block">
              <Logo name={'centangbiru'} size={24} />
            </span>
          </h1>
        </div>
        <div
          className={`flex items-center h-full transition-all duration-700 ${
            burger ? 'flex-col-reverse gap-12' : 'flex-row gap-4'
          }`}
        >
          <button onClick={() => dispatch(setTheme())}>
            {theme ? (
              <Logo name={'dark'} size={24} />
            ) : (
              <Logo name={'light'} size={24} color={'no'} />
            )}
          </button>
          <div className="ps-1">
            <Hamburger />
          </div>
        </div>
      </nav>
      <div
        className={`2md:hidden block p-5 ${
          burger
            ? 'block translate-y-0 transition-all duration-1000'
            : 'hidden -translate-y-full transition-all duration-1000'
        }`}
      >
        <AsideNavbar />
      </div>
      <div
        className={`${
          burger ? 'fixed' : 'hidden'
        } bottom-0 left-1/2 -translate-x-1/2`}
      >
        <AsideFooter />
      </div>
    </div>
  );
};

export default TopNavbar;
