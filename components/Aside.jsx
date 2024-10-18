import AsideFooter from "./AsideFooter";
import AsideHeader from "./AsideHeader";
import AsideNavbar from "./AsideNavbar";

const Aside = () => {
  return (
    <aside className="flex flex-col w-full h-full">
      <AsideHeader />
      <AsideNavbar />
      <AsideFooter />
    </aside>
  );
};

export default Aside;
