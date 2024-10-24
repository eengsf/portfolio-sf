'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const logo = [
  {
    name: 'HTML5',
    size: 40,
  },
  {
    name: 'CSS3',
    size: 40,
  },
  {
    name: 'JavaScript',
    size: 40,
  },
  {
    name: 'TypeScript',
    size: 40,
  },
  {
    name: 'PHP',
    size: 40,
  },
  {
    name: 'TailwindCSS',
    size: 40,
  },
  {
    name: 'Shadcn UI',
    size: 40,
  },
  {
    name: 'Reactjs',
    size: 40,
  },
  {
    name: 'Nextjs',
    size: 40,
  },
  {
    name: 'Laravel',
    size: 40,
  },
  {
    name: 'Firebase',
    size: 40,
  },
  {
    name: 'MySQL',
    size: 40,
  },
];

const logo2 = [
  {
    name: 'C Lang',
    size: 40,
  },
  {
    name: 'C++',
    size: 40,
  },
  {
    name: 'Arduino',
    size: 40,
  },
  {
    name: 'Eagle',
    size: 33,
    img: '/eagle.png',
  },
  {
    name: 'Inventor',
    size: 33,
    img: '/inventor.png',
  },
];

const MainHome = () => {
  const { theme } = useSelector((state) => state.counterSlice);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexx, setHoveredIndexx] = useState(null);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full pb-12 overflow-y-auto custom-scrollbar"
    >
      <div className="flex flex-col gap-5 pb-5 border-b border-b-slate-300">
        <div className="flex flex-col gap-2">
          <h1 className="flex text-2xl font-semibold 2md:text-3xl">
            Hi, Iam Shofiyul Fuad
            <span className="shake">👋</span>
          </h1>
          <div className="flex flex-col gap-5 xs:flex-row">
            <li className="whitespace-nowrap">IT Programming</li>
            <li className="whitespace-nowrap">Robotic Programming</li>
          </div>
        </div>
        <p className="text-justify">
          I am a graduate of Electrical Engineering from Trunojoyo University. I
          have a strong interest in web programming, and I am currently focusing
          on improving my skills in front-end development.
        </p>
      </div>
      <div className="flex flex-col gap-6 pb-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Logo name="code" size={20} />
            <h1 className="text-sm font-semibold">Skills IT</h1>
          </div>
          <ul className="grid justify-between grid-cols-4 gap-5 2lg:grid-cols-5">
            {logo.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex flex-col items-center gap-2 pb-2 cursor-pointer"
              >
                <Logo name={item.name} size={item.size} className="z-10" />
                <h1
                  className={`absolute text-xs whitespace-nowrap transition-all duration-300 top-10 ${
                    hoveredIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-full'
                  }`}
                >
                  {item.name}
                </h1>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Logo name="code" size={20} />
            <h1 className="text-sm font-semibold">Skills Robotic </h1>
          </div>
          <ul className="grid justify-between grid-cols-4 gap-5 2lg:grid-cols-5">
            {logo2.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndexx(index)}
                onMouseLeave={() => setHoveredIndexx(null)}
                className="relative flex flex-col items-center gap-2 pb-2 cursor-pointer"
              >
                {item.name === 'Eagle' || item.name === 'Inventor' ? (
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={item.size}
                    height={item.size}
                    priority
                    className="z-10"
                  />
                ) : (
                  <Logo name={item.name} size={item.size} className="z-10" />
                )}
                <h1
                  className={`absolute text-xs whitespace-nowrap transition-all duration-300 top-10 ${
                    hoveredIndexx === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-full'
                  }`}
                >
                  {item.name}
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 border 2md:p-8 border-slate-300 rounded-xl">
        <div className="flex items-center gap-2 text-xl 2md:text-2xl ">
          <Logo name={'rocket'} size={25} />
          <h1 className="font-semibold">Let{"'"}s explore</h1>
        </div>
        <div>
          <p className="text-justify">
            Discover more about what I offer by exploring this portfolio or
            check out my resume
          </p>
          <Link
            href={
              'https://drive.google.com/file/d/1TxHxtWc_0wdnuoyw1mn_q-hp-dsl0vRP/view?usp=sharing'
            }
            target="_blank"
            className={`inline-flex gap-2 items-center mt-4 ${
              theme
                ? 'bg-gradient-to-r from-blue-500 to-blue-200'
                : 'bg-orange-500'
            } py-2 px-5 rounded-lg hover:scale-105`}
          >
            <Logo name={'arrowright'} size={20} />
            My Resume
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MainHome;
