import MainExperienceDetail from './MainExperienceDetail';
import { motion } from 'framer-motion';

const obj = {
  soket: {
    img: 'logo-soket.jpg',
    judul: 'Head of Programming Division',
    category: 'UKM-FT SOKET, 2020',
    desc: [
      'Lead the programming division, responsible for managing members, organizing work programs, and ensuring the smooth running of division activities',
      'Developed and tested microcontroller projects to serve as references for supporting organizational activities',
      'Conducted regular training sessions for division members, covering topics such as robotics programming introduction and control algorithm practices',
      'Coordinated and collaborated with other divisions to establish partnerships with external parties, including inter-campus robotics benchmarking and public training sessions',
    ],
  },
  robotic: {
    img: 'logo-tim-robot.png',
    judul: 'Head of Programming Division (Hexapod Legged Robot)',
    category: 'Trunojoyo Robotic Team, 2020 - 2021',
    desc: [
      'Lead the technical development of legged robots, from motion algorithm planning, robot stability, to system implementation and debugging',
      "Contributed to the team's success in national competitions, achieving a top 10 national ranking",
      "Developed innovative algorithms, enhancing the robot's performance on complex tracks with up to 30% more stability on uneven surfaces",
      'Coordinated with mechanical and electronics teams, ensuring smooth integration between systems',
      'Conducted post-competition analysis, providing strategic feedback for system improvements in future competitions',
      'Mentored junior members, facilitating knowledge transfer on control algorithms and robotics programming',
    ],
  },
  elektro: {
    img: 'logo-elektro.jpg',
    judul: 'Practical Assistant (Database Management)',
    category: 'Electronic Laboratory, 2022',
    desc: [
      'Guided practical sessions for students, teaching fundamentals of database management, including database design and SQL query implementation',
      'Developed practical module materials used by 75+ students, receiving positive feedback from lecturers',
      'Performed technical troubleshooting, providing solutions for issues encountered by students during practical sessions',
      'Assessed 75+ student reports and final practical projects based on standard criteria',
    ],
  },
};

const MainExperience = () => {
  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full pb-12 overflow-y-auto custom-scrollbar"
    >
      <div className="flex flex-col gap-2 pb-5">
        <h1 className="text-2xl font-semibold 2md:text-3xl">Experiences</h1>
      </div>
      <div className="flex flex-col gap-3">
        <MainExperienceDetail
          img={obj.soket.img}
          judul={obj.soket.judul}
          category={obj.soket.category}
          desc={obj.soket.desc}
        />
        <MainExperienceDetail
          img={obj.robotic.img}
          judul={obj.robotic.judul}
          category={obj.robotic.category}
          desc={obj.robotic.desc}
        />
        <MainExperienceDetail
          img={obj.elektro.img}
          judul={obj.elektro.judul}
          category={obj.elektro.category}
          desc={obj.elektro.desc}
        />
      </div>
    </motion.main>
  );
};

export default MainExperience;
