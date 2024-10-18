import MainExperienceDetail from "./MainExperienceDetail";
import { motion } from "framer-motion";

const obj = {
  soket: {
    img: "logo-soket.jpg",
    judul: "Head of Programming Division",
    category: "UKM-FT SOKET, Jan 2020 - Dec 2020",
    desc: [
      // "Bertanggung jawab membuat dan mengembangkan code untuk mengontrol robot dan integrasi sensor",
      // "Bertanggung jawab dalam pengujian, debugging, dan pemeliharaan perangkat lunak robot serta melakukan pembaruan sesuai kebutuhan",
      // "Kolaborasi dengan divisi lainya dalam melaksanakan program kerja",
      // "Memberikan pelatihan dan bimbingan kepada anggoata tim organisasi",
      // "Membuat dokumentasi perangkat lunak dan perangkat keras untuk memudahkan pemahaman dan penggunaan",
      "Creating and developing code to control robots and integrate sensors",
      "Testing, debugging, and maintaining robot software, as well as updating as needed",
      "Collaborating with other divisions to implement work programs",
      "Providing training and guidance to team members",
      "Creating documentation for software and hardware to facilitate understanding and use",
    ],
  },
  robotic: {
    img: "logo-tim-robot.png",
    judul: "Programmer for the legged Robot Division",
    category: "Trunojoyo Robotic Team, Jan 2020 - Dec 2021",
    desc: [
      // "Membuat dan mengembangkan code robot pemadam api dan robot SAR",
      // "Melakukan pengujian, debugging, dan pemeliharaan perangkat lunak robot serta melakukan pembaruan sesuai kebutuhan",
      // "Melakukan riset terhadap rule baru dalam setiap ajang kontes robot indonesia",
      "Developing code for firefighting robots and Search and Rescue (SAR) robots",
      "Testing, debugging, and maintaining robot software, as well as updating as needed",
      "Researching new rules in each Indonesian robot contest",
    ],
  },
  elektro: {
    img: "logo-elektro.jpg",
    judul: "Assistant for Database Management Practicum",
    category: "Electronic Laboratory, Mar 2022 - May 2022",
    desc: [
      // "Menyiapkan materi praktikum dan memberi arahan bimbingan ke peserta praktikum saat praktikum berlangsung",
      // "Membantu dalam penilaian tugas-tugas yang dikerjakan peserta praktikum dan membantu dalam penyelenggaraan ujian praktikum",
      // "Membantu pemeliharaan lingkungan praktikum",
      "Preparing practicum materials and providing guidance to practicum participants during the practicum",
      "Assisting in the assessment of tasks completed by practicum participants and helping in the conduct of practicum exams",
      "Assisting in the maintenance of the practicum environment",
    ],
  },
};

const MainExperience = () => {
  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full pb-12 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col gap-2 pb-5">
        <h1 className="text-2xl font-semibold 2md:text-3xl">
          College Experiences
        </h1>
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
