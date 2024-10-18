import Aside from "@/components/Aside";
import Main from "@/components/Main";
import TopNavbar from "./TopNavbar";

const Pages = () => {
  return (
    <>
      <div className="block 2md:hidden">
        <TopNavbar />
      </div>
      <div className="flex flex-col h-full max-w-6xl gap-12 px-5 pb-5 mx-auto 2md:flex-row 2md:h-screen 2md:py-12 pt-28 2lg:px-0 2md:px-10">
        <aside className="hidden h-full w-60 2md:flex">
          <Aside />
        </aside>
        <main className="flex flex-1">
          <Main />
        </main>
      </div>
    </>
  );
};

export default Pages;
