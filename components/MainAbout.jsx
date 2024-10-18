import Logo from "./Logo";
import MainAboutSertif from "./MainAboutSertif";
import { motion } from "framer-motion";

const obj = {
  js: {
    img: "sertifjs",
    judul: "Learn Basic JavaScript Programming",
    category: "Dicoding Certificate",
    desc: "JavaScript Fundamentals, Object-Oriented Programming, Functional Programming...",
    link: "https://www.dicoding.com/certificates/07Z6VEEV2XQR",
  },
  frontend: {
    img: "sertiffrontend",
    judul: "Learn Front-End Web Development for Beginners",
    category: "Dicoding Certificate",
    desc: "Document Object Model, Interactive with Events, Data Storage with Web Storage...",
    link: "https://www.dicoding.com/certificates/0LZ0Q5YQKZ65",
  },
  react: {
    img: "sertifreact",
    judul: "Learn to Build Web Applications with React",
    category: "Dicoding Certificate",
    desc: "Basic Concepts of React, React UI Component, Stateful Component...",
    link: "https://www.dicoding.com/certificates/1RXY03GK9ZVM",
  },
  sql: {
    img: "sertifsql",
    judul: "Learn Basic Structured Query Language (SQL)",
    category: "Dicoding Certificate",
    desc: "Database Management Systems, Structured Query Language, Basic Query...",
    link: "https://www.dicoding.com/certificates/JLX1DJ8NGZ72",
  },
  web: {
    img: "sertifweb",
    judul: "Learn Basic Web Programming",
    category: "Dicoding Certificate",
    desc: "Learning HTML, Learning CSS, Responsive Layout with Flexbox...",
    link: "https://www.dicoding.com/certificates/81P27VEJNZOY",
  },
  krpai: {
    img: "sertifkrpai",
    judul: "Indonesian Robot Contest",
    category: "PusPresNas Certificate",
    desc: "KRPAI (Kontes Robot Pemadam Api Indonesia) Division",
    link: "https://drive.google.com/file/d/1TghpMrddlVeCVSE0pvj47eZt81ks4yft/view?usp=sharing",
  },
  krsri: {
    img: "sertifkrsri",
    judul: "Indonesian Robot Contest",
    category: "PusPresNas Certificate",
    desc: "KRSRI (Kontes Robot SAR Indonesia) Division",
    link: "https://drive.google.com/file/d/1Vur_ILEfd45r_cKMPVyISVtRCViVFaAf/view?usp=sharing",
  },
  asprak: {
    img: "sertifasprak",
    judul: "Prakticum Assistant",
    category: "Electronic Laboratory",
    desc: "Database Management Practicum Assistant (S1 Electrical Engineering)",
    link: "https://drive.google.com/file/d/1U5gvuVfmr0on-WH7FvlKPO9BNHP2m-BP/view?usp=sharing",
  },
};

const MainAbout = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full pb-12 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col gap-5 pb-5 border-b border-b-slate-300">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold 2md:text-3xl">About Me </h1>
        </div>
        <p className="text-justify">
          Hello! My name is Shofiyul Fuad. I am a graduate of Trunojoyo
          University actively involved in the organization UKMFT SOKET, which
          focuses on robotics. In UKMFT SOKET, I am part of the robot team and
          have learned a lot, especially in robotics programming, leading me to
          participate in Indonesian robot contests
        </p>
        <p className="text-justify">
          Fast-forward to my final semester in 2022, I began to develop an
          interest in web programming, particularly in front-end web
          development. I started learning a lot about front-end web development
          from various social media platforms and took part in several online
          training sessions
        </p>
      </div>
      <div className="flex flex-col gap-3 py-5 ">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xl">
            <Logo name={"sertificate"} size={24} />

            <h1 className="font-semibold"> Certificates</h1>
          </div>
          <p className="text-sm">My current certificates</p>
        </div>
        <MainAboutSertif
          img={obj.krpai.img}
          judul={obj.krpai.judul}
          category={obj.krpai.category}
          desc={obj.krpai.desc}
          link={obj.krpai.link}
        />
        <MainAboutSertif
          img={obj.krsri.img}
          judul={obj.krsri.judul}
          category={obj.krsri.category}
          desc={obj.krsri.desc}
          link={obj.krsri.link}
        />
        <MainAboutSertif
          img={obj.asprak.img}
          judul={obj.asprak.judul}
          category={obj.asprak.category}
          desc={obj.asprak.desc}
          link={obj.asprak.link}
        />
        <MainAboutSertif
          img={obj.js.img}
          judul={obj.js.judul}
          category={obj.js.category}
          desc={obj.js.desc}
          link={obj.js.link}
        />
        <MainAboutSertif
          img={obj.sql.img}
          judul={obj.sql.judul}
          category={obj.sql.category}
          desc={obj.sql.desc}
          link={obj.sql.link}
        />
        <MainAboutSertif
          img={obj.frontend.img}
          judul={obj.frontend.judul}
          category={obj.frontend.category}
          desc={obj.frontend.desc}
          link={obj.frontend.link}
        />
        <MainAboutSertif
          img={obj.react.img}
          judul={obj.react.judul}
          category={obj.react.category}
          desc={obj.react.desc}
          link={obj.react.link}
        />
        <MainAboutSertif
          img={obj.web.img}
          judul={obj.web.judul}
          category={obj.web.category}
          desc={obj.web.desc}
          link={obj.web.link}
        />
        
      </div>
    </motion.div>
  );
};

export default MainAbout;
