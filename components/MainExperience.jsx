import MainExperienceDetail from './MainExperienceDetail';
import { motion } from 'framer-motion';

const obj = {
  soket: {
    img: 'logo-soket.jpg',
    judul: 'Head of Programming Division',
    category: 'UKM-FT SOKET, 2020',
    desc: [
      'Leading the programming division, responsible for managing members, organizing work programs, and ensuring the smooth running of division activities.',
      'Monitoring the development and testing of microcontroller projects.',
      'Conducting regular training sessions for division members, covering topics from the introduction of robotics programming to control algorithm practices.',
      'Coordinating and collaborating with other divisions for partnerships with external parties, such as inter-campus robot study visits and public training sessions.',
    ],
  },
  robotic: {
    img: 'logo-tim-robot.png',
    judul: 'Legged Robot Programmer (Hexapod Legged Robot)',
    category: 'Trunojoyo Robotic Team, 2020 - 2021',
    desc: [
      "Contributed to the team's success in a national competition, achieving a top 10 national ranking.",
      "Developed innovative algorithms, improving the robot's performance on complex tracks to be up to 30% more stable on uneven surfaces.",
      'Coordinated with the mechanics and electronics teams to ensure seamless system integration.',
      'Mentored junior members, facilitating knowledge transfer on control algorithms and robotics programming.',
    ],
  },
  elektro: {
    img: 'logo-elektro.jpg',
    judul: 'Practical Assistant (Database Management)',
    category: 'Electronic Laboratory, 2022',
    desc: [
      'Guided students during practical sessions, teaching the fundamentals of database management, such as database design and SQL query implementation.',
      'Performed technical troubleshooting, providing solutions for errors encountered by students during practical sessions.',
      "Assessed over 50 reports and final projects of students' practical sessions based on standard criteria.",
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
