import Link from 'next/link';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import MainContactForm from './MainContactForm';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const sosmed = [
  {
    name: 'Github',
    icon: <FaGithub size={20} />,
    link: 'https://github.com/eengsf',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin size={20} />,
    link: 'https://www.linkedin.com/in/shofiyul-fuad-b8836628b/',
  },
  {
    name: 'Tiktok',
    icon: <FaTiktok size={20} />,
    link: 'https://www.tiktok.com/@eengsf_?_t=8ia5kTpOlQf&_r=1',
  },
  {
    name: 'Youtube',
    icon: <FaYoutube size={20} />,
    link: 'https://www.youtube.com/channel/UC0vqQM71BwT-blOJ2deI4bw',
  },
];

const MainContact = () => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full pb-12 overflow-y-auto custom-scrollbar"
    >
      <div className="flex flex-col gap-2 pb-5 border-b border-b-slate-300">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p>Lets get in touch.</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col py-5">
          <h1>Find me on</h1>
          <div className="flex gap-4">
            {sosmed.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className={`py-2 px-5 rounded-lg border border-blue-500 bg-white hover:bg-gradient-to-r from-blue-500 to-blue-200 transition-all duration-300 ease-in-out  text-blue-500  hover:text-black`}
              >
                <div className="flex justify-center gap-1 font-semibold ">
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-5">
          <h1>Send me a message</h1>
          <MainContactForm />
        </div>
      </div>
    </motion.main>
  );
};

export default MainContact;
