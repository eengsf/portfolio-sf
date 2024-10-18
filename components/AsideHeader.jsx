import Image from 'next/image';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/slice/counterSlice';
import { motion } from 'framer-motion';

const AsideHeader = () => {
  const { theme } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex flex-col w-full min-h-64 relative ${
        theme ? 'text-black' : 'text-white'
      }`}
    >
      <div
        className={`w-full h-[50%] rounded-2xl relative ${
          theme ? 'bg-image-light' : 'bg-image-dark'
        }`}
      >
        <motion.button
          initial={{ scale: 0.5, opacity: 0, onBlur: 0 }}
          animate={{ scale: [0.5, 1], opacity: [0, 1], onBlur: [0, 1] }}
          transition={{ duration: 0.7 }}
          onClick={() => dispatch(setTheme())}
          className={`absolute bottom-3 right-3  p-2 rounded-lg ${
            theme
              ? 'shadow-[0px_0px_3px_1px_rgba(255,255,255,255.4)] bg-blue-300'
              : 'shadow-[0px_0px_3px_1px_rgba(0,0,0,0.4)] bg-orange-400'
          } `}
        >
          {theme ? (
            <Logo name={'dark'} size={16} />
          ) : (
            <Logo name={'light'} size={16} />
          )}
        </motion.button>
        <div
          className={`absolute left-0 top-0 py-3 pe-3 rounded-br-2xl ${
            theme
              ? 'bg-white inverted-border-radius-light'
              : 'bg-black inverted-border-radius-dark'
          } `}
        >
          <motion.span
            initial={{ scale: 0.5, opacity: 0, onBlur: 0 }}
            animate={{ scale: [0.5, 1], opacity: [0, 1], onBlur: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-1 px-3 py-1 text-sm border rounded-lg"
          >
            <span className="relative flex w-3 h-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  theme ? 'bg-blue-400' : 'bg-orange-400'
                } opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  theme ? 'bg-blue-500' : 'bg-orange-500'
                }`}
              ></span>
            </span>
            <h1>Hire me</h1>
          </motion.span>
          <div
            className={`absolute left-full top-0 ${
              theme ? 'bg-white' : 'bg-black'
            } w-[30px] h-[20px]`}
          ></div>
          <div
            className={`absolute left-0 top-full ${
              theme ? 'bg-white' : 'bg-black'
            } w-[30px] h-[20px]`}
          ></div>
        </div>
      </div>
      <div
        className={`absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 ${
          theme ? 'bg-white' : 'bg-black'
        } rounded-full w-[100px] h-[100px] p-0.5`}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, onBlur: 0 }}
          animate={{ scale: [0.5, 1], opacity: [0, 1], onBlur: [0, 1] }}
          transition={{ duration: 0.7 }}
          className={`w-full h-full rounded-full ${
            theme ? 'bg-white' : 'bg-black'
          } `}
        >
          <Image
            src={`/${theme ? 'eengbiru' : 'eengmerah'}.jpg`}
            alt="pp"
            width={500}
            height={500}
            priority
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-end items-center w-full h-[50%] pb-2 border-b border-b-slate-300">
        <div className="flex items-center gap-1 text-lg font-bold">
          <h1>Shofiyul Fuad </h1>
          <Logo name={'centangbiru'} size={20} />
        </div>
        <h1 className="text-base">@eengsf</h1>
      </div>
    </div>
  );
};

export default AsideHeader;
