import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const MainProjectRoboticDetail = ({ img, name, desc, linkDemo }) => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: [0.3, 1], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="p-2"
    >
      <div className="w-full md:h-[450px] sm:h-[420px] h-full rounded-lg border border-slate-300 group/project transform transition-all duration-300 hover:scale-[102%] pb-2">
        <div className="w-full md:h-[55%] sm:h-[65%] h-[50%] relative">
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-5 text-white transition-all duration-300 rounded-t-lg opacity-0 bg-black/70 group-hover/project:opacity-100">
            <Link
              href={linkDemo}
              className={`flex gap-3 px-4 py-2 rounded-lg hover:scale-110 ${
                theme ? 'bg-blue-300 text-black' : 'bg-orange-500 text-white'
              }`}
            >
              <h1 className="text-sm font-bold">Watch</h1>
              <Logo name={'arrowright'} size={20} />
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
        <div className="flex flex-col gap-2 justify-between w-full md:h-[45%] sm:h-[35%] h-[50%] p-5 ">
          <div>
            <Link
              href={linkDemo}
              className={`font-semibold text-xl ${
                theme
                  ? 'group-hover/project:text-blue-500'
                  : 'group-hover/project:text-orange-500'
              } `}
            >
              {name}
            </Link>
          </div>
          <div className="flex flex-1 overflow-y-auto custom-scrollbar">
            <p className="text-sm text-justify ">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainProjectRoboticDetail;
