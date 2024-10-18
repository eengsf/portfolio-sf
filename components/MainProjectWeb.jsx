import MainProjectWebDetail from './MainProjectWebDetail';

const obj = {
  cloneTokped: {
    img: 'projectweb/tokped1.png',
    name: 'Clone Tokopedia',
    desc: 'A project to clone the interface of Tokopedia with interactive and responsive web implementation using the ShadCN UI component library.',
    tech: ['TypeScript', 'Nextjs', 'TailwindCSS', 'Shadcn UI', 'Redux Toolkit'],
    linkDemo: 'https://clone-tokped.vercel.app/',
    linkCode: 'https://github.com/eengsf/clone-tokped',
  },

  carrental: {
    img: 'projectweb/carental1.png',
    name: 'Car Rental App',
    desc: 'The car rental application provides a list of car options with a booking system and user authentication.',
    tech: [
      'TypeScript',
      'Nextjs',
      'TailwindCSS',
      'Shadcn UI',
      'Redux Toolkit',
      'Firebase',
    ],
    linkDemo: 'https://car-rental-dun-nine.vercel.app/',
    linkCode: 'https://github.com/eengsf/car-rental',
  },

  dashboardRental: {
    img: 'projectweb/dashboard-rental1.png',
    name: 'Admin Dashboard Car Rental',
    desc: 'The car rental admin dashboard features a CRUD management system for rental car products, sorting, and filtering, as well as displaying all customer data and their booking history.',
    tech: [
      'TypeScript',
      'Nextjs',
      'TailwindCSS',
      'Shadcn UI',
      'Redux Toolkit',
      'Firebase',
    ],
    linkDemo: 'https://dashboard-rental-rust.vercel.app/',
    linkCode: 'https://github.com/eengsf/dashboard-rental',
  },

  animeListApp: {
    img: 'projectweb/animelist1.png',
    name: 'Anime List App',
    desc: 'This application is a project that utilizes an API to display a list of popular anime. It includes a feature to search for anime titles and a pagination system.',
    tech: ['Nextjs', 'TailwindCSS'],
    linkDemo: 'https://anime-list-app-seven.vercel.app/',
    linkCode: 'https://github.com/eengsf/anime-list-app',
  },

  portfolio: {
    img: 'projectweb/portfolio.png',
    name: 'Portfolio',
    desc: 'Personal Website and portfolio built with Nextjs and Tailwind CSS.',
    tech: ['Nextjs', 'TailwindCSS', 'Redux Toolkit', 'Framer Motion'],
    linkDemo: 'https://portfolio-sf-seven.vercel.app/',
    linkCode: 'https://github.com/eengsf/portfolio-v2',
  },
};

const MainProjectWeb = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-0 py-8 md:grid-cols-2">
      <MainProjectWebDetail
        img={obj.dashboardRental.img}
        name={obj.dashboardRental.name}
        desc={obj.dashboardRental.desc}
        tech={obj.dashboardRental.tech}
        linkCode={obj.dashboardRental.linkCode}
        linkDemo={obj.dashboardRental.linkDemo}
      />

      <MainProjectWebDetail
        img={obj.carrental.img}
        name={obj.carrental.name}
        desc={obj.carrental.desc}
        tech={obj.carrental.tech}
        linkCode={obj.carrental.linkCode}
        linkDemo={obj.carrental.linkDemo}
      />
      <MainProjectWebDetail
        img={obj.cloneTokped.img}
        name={obj.cloneTokped.name}
        desc={obj.cloneTokped.desc}
        tech={obj.cloneTokped.tech}
        linkCode={obj.cloneTokped.linkCode}
        linkDemo={obj.cloneTokped.linkDemo}
      />
      <MainProjectWebDetail
        img={obj.portfolio.img}
        name={obj.portfolio.name}
        desc={obj.portfolio.desc}
        tech={obj.portfolio.tech}
        linkCode={obj.portfolio.linkCode}
        linkDemo={obj.portfolio.linkDemo}
      />

      <MainProjectWebDetail
        img={obj.animeListApp.img}
        name={obj.animeListApp.name}
        desc={obj.animeListApp.desc}
        tech={obj.animeListApp.tech}
        linkCode={obj.animeListApp.linkCode}
        linkDemo={obj.animeListApp.linkDemo}
      />
    </div>
  );
};
export default MainProjectWeb;
