import Image from 'next/image';
import Logo from './Logo';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MainAboutSertif = ({ img, judul, desc, category, link }) => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <div className="flex flex-col w-full gap-3 p-0 border sm:flex-row sm:p-4 border-slate-300 rounded-xl">
      <div className="relative w-full h-full sm:w-32 sm:h-24 group">
        <Link href={link}>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 font-semibold text-white transition-all duration-300 opacity-0 bg-black/70 sm:rounded-xl rounded-t-xl group-hover:opacity-100">
            <h1 className="text-lg sm:text-xs">View Certificate</h1>
            <div className="block sm:hidden">
              <Logo name={'arrowright'} size={24} />
            </div>
          </div>
        </Link>
        <Image
          src={`/${img}.png`}
          alt="image"
          width={500}
          height={500}
          priority
          className="object-cover w-full h-full rounded-t-xl"
        />
      </div>
      <div className="flex flex-col flex-1 gap-3 p-4 sm:p-0">
        <div className="flex flex-col">
          <Link
            href={link}
            className={`text-lg font-semibold ${
              theme ? 'hover:text-blue-500' : 'hover:text-orange-500'
            }`}
          >
            {judul}
          </Link>
          <i className="text-sm">{category}</i>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default MainAboutSertif;
