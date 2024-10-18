'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setNavbar } from '@/store/slice/counterSlice';
import Logo from './Logo';

const AsideNavbar = () => {
  const { navbar, theme } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <nav
      className={`flex flex-1 flex-col gap-2 py-4 border-b border-b-slate-300 ${
        theme ? 'text-black' : 'text-white'
      }`}
    >
      <button
        className={`flex gap-2 py-3 px-5 font-semibold rounded-lg transition-all duration-300 ${
          theme
            ? 'hover:bg-gradient-to-r from-blue-500 to-blue-200'
            : 'hover:bg-orange-500'
        } 2md:hover:scale-105 hover:scale-[102%] ${
          navbar === 'Home'
            ? theme
              ? 'bg-gradient-to-r from-blue-500 to-blue-200'
              : 'bg-orange-500'
            : ''
        }`}
        onClick={() => dispatch(setNavbar('Home'))}
      >
        <Logo name={'home'} size={21} />
        <h1>Home</h1>
      </button>
      <button
        className={`flex gap-2 py-3 px-5 font-semibold rounded-lg transition-all duration-300 ${
          theme
            ? 'hover:bg-gradient-to-r from-blue-500 to-blue-200'
            : 'hover:bg-orange-500'
        } 2md:hover:scale-105 hover:scale-[102%]   ${
          navbar === 'About'
            ? theme
              ? 'bg-gradient-to-r from-blue-500 to-blue-200'
              : 'bg-orange-500'
            : ''
        }`}
        onClick={() => dispatch(setNavbar('About'))}
      >
        <Logo name={'about'} size={21} />
        <h1>About</h1>
      </button>
      <button
        className={`flex gap-2 py-3 px-5 font-semibold rounded-lg transition-all duration-300  ${
          theme
            ? 'hover:bg-gradient-to-r from-blue-500 to-blue-200'
            : 'hover:bg-orange-500'
        } 2md:hover:scale-105 hover:scale-[102%]  ${
          navbar === 'Experience'
            ? theme
              ? 'bg-gradient-to-r from-blue-500 to-blue-200'
              : 'bg-orange-500'
            : ''
        }`}
        onClick={() => dispatch(setNavbar('Experience'))}
      >
        <Logo name={'experience'} size={21} />
        <h1>Experience</h1>
      </button>
      <button
        className={`flex gap-2 py-3 px-5 font-semibold rounded-lg transition-all duration-300 ${
          theme
            ? 'hover:bg-gradient-to-r from-blue-500 to-blue-200'
            : 'hover:bg-orange-500'
        } 2md:hover:scale-105 hover:scale-[102%]  ${
          navbar === 'Project'
            ? theme
              ? 'bg-gradient-to-r from-blue-500 to-blue-200'
              : 'bg-orange-500'
            : ''
        }`}
        onClick={() => dispatch(setNavbar('Project'))}
      >
        <Logo name={'project'} size={21} />
        <h1>Project</h1>
      </button>
      <button
        className={`flex gap-2 py-3 px-5 font-semibold rounded-lg transition-all duration-300 ${
          theme
            ? 'hover:bg-gradient-to-r from-blue-500 to-blue-200'
            : 'hover:bg-orange-500'
        } 2md:hover:scale-105 hover:scale-[102%]  ${
          navbar === 'Contact'
            ? theme
              ? 'bg-gradient-to-r from-blue-500 to-blue-200'
              : 'bg-orange-500'
            : ''
        }`}
        onClick={() => dispatch(setNavbar('Contact'))}
      >
        <Logo name={'contact'} size={21} />
        <h1>Contact</h1>
      </button>
    </nav>
  );
};
export default AsideNavbar;
