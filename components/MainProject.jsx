import { useState } from 'react';
import MainProjectWeb from './MainProjectWeb';
import { motion } from 'framer-motion';
import MainProjectRobotic from './MainProjectRobotic';
import { useSelector } from 'react-redux';

const MainProject = () => {
  const { theme } = useSelector((state) => state.counterSlice);
  const [project, setProject] = useState('web');
  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full pb-12 overflow-y-auto custom-scrollbar"
    >
      <div className="flex flex-col gap-2 pb-5 border-b border-b-slate-300">
        <h1 className="text-2xl font-semibold 2md:text-3xl">Projects</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setProject('web')}
            className={`px-4 py-2 border-2 rounded-lg border-slate-300 ${
              project === 'web'
                ? 'bg-transparent'
                : theme
                ? 'bg-gradient-to-r from-blue-500 to-blue-200'
                : 'bg-orange-500'
            }`}
          >
            Web Project
          </button>
          <button
            onClick={() => setProject('robotic')}
            className={`px-4 py-2 border-2 rounded-lg border-slate-30 ${
              project === 'robotic'
                ? 'bg-transparent'
                : theme
                ? 'bg-gradient-to-r from-blue-500 to-blue-200'
                : 'bg-orange-500'
            }`}
          >
            Robotic Project
          </button>
        </div>
      </div>
      {project === 'web' && <MainProjectWeb />}
      {project === 'robotic' && <MainProjectRobotic />}
    </motion.main>
  );
};

export default MainProject;
