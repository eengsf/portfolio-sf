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
      <div className="w-full md:h-[450px] sm:h-[420px] h-full rounded-lg border border-slate-300 group/project transform transition-all duration-300 hover:scale-[102%] pb-4">
        <div className="w-full md:h-[55%] sm:h-[65%] h-[50%] relative">
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
            className="object-cover object-top w-full rounded-t-lg"
          />
        </div>
        <div className="flex flex-col gap-2 justify-between w-full md:h-[45%] sm:h-[35%] h-[50%] p-5">
          <div className="flex flex-col gap-1">
            <Link
              href={linkDemo}
              target="_blank"
              className={`font-semibold text-xl hover:text-blue-500`}
            >
              {name}
            </Link>
            <p className="text-sm text-justify ">{desc}</p>
          </div>
          <div className="relative flex gap-3">
            {tech.map((item, index) => (
              <div
                key={index}
                className="overflow-x-hidden cursor-pointer group/tech"
              >
                <Logo name={item} size={24} />
                <div className="absolute top-0 right-0 transition-all duration-300 opacity-0 -z-10 group-hover/tech:opacity-100 group-hover/tech:z-0">
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
