import { useSelector } from 'react-redux';
import MainHome from './MainHome';
import MainAbout from './MainAbout';
import MainExperience from './MainExperience';
import MainProject from './MainProject';
import MainContact from './MainContact';

const Main = () => {
  const { navbar, theme } = useSelector((state) => state.counterSlice);
  return (
    <main className={`w-full h-full ${theme ? 'text-black' : 'text-white'}`}>
      {navbar === 'Home' && <MainHome />}
      {navbar === 'About' && <MainAbout />}
      {navbar === 'Experience' && <MainExperience />}
      {navbar === 'Project' && <MainProject />}
      {navbar === 'Contact' && <MainContact />}
    </main>
  );
};

export default Main;
