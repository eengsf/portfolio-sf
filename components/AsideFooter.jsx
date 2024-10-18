import { useSelector } from "react-redux";
import Logo from "./Logo";

const AsideFooter = () => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <footer>
      <p
        className={`text-sm flex items-center justify-center gap-1 py-5 ${
          theme ? "text-black" : "text-white"
        }`}>
        &copy; 2024 with
        <Logo name={"heart"} size={16} />
        by Eengsf
      </p>
    </footer>
  );
};

export default AsideFooter;
