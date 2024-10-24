import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const MainProjectWebDetail = ({
  img,
  name,
  desc,
  tech,
  linkCode,
  linkDemo,
}) => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: [0.3, 1], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="p-2"
    >
      <div className="w-full border 2lg:aspect-square lg:aspect-[7/8] 2md:aspect-[5/3] md:aspect-[7/8] sm:aspect-[3/4] xs:aspect-[7/6] aspect-square group/project border-slate-300 rounded-lg transform transition-all duration-300 hover:scale-[102%]">
        <div className="relative w-full overflow-hidden h-1/2">
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-5 text-white transition-all duration-300 rounded-t-lg opacity-0 bg-black/70 group-hover/project:opacity-100">
            <Link
              href={linkCode}
              target="_blank"
              className="px-4 py-2 rounded-full bg-slate-400 hover:scale-110"
            >
              <h1 className="text-sm font-bold">Code</h1>
            </Link>
            <Link
              href={linkDemo}
              target="_blank"
              className="px-4 py-2 rounded-full bg-slate-400 hover:scale-110"
            >
              <h1 className="text-sm font-bold">Demo</h1>
            </Link>
          </div>
          <Image
            src={`/${img}`}
            alt="image"
            width={500}
            height={500}
            priority
            className="object-cover object-top w-full h-full rounded-t-lg"
          />
        </div>
        <div className="flex flex-col justify-between w-full gap-2 p-4 h-1/2">
          <Link
            href={linkDemo}
            target="_blank"
            className={`font-semibold text-[clamp(0.5rem, 2vw, 3rem)] hover:text-blue-500`}
          >
            {name}
          </Link>
          <div className="h-[70%] overflow-y-auto">
            <p className="text-sm text-justify md:text-sm sm:text-xs ">
              {desc}
            </p>
          </div>
          <div className="relative flex gap-3">
            {tech.map((item, index) => (
              <div
                key={index}
                className="overflow-x-hidden cursor-pointer group/tech"
              >
                <Logo name={item} size={24} />
                <div className="absolute top-0 right-0 block text-sm transition-all duration-300 opacity-0 sm:hidden -z-10 group-hover/tech:opacity-100 group-hover/tech:z-0 md:block">
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainProjectWebDetail;
