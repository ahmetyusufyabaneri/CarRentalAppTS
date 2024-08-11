import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <Link to={"/"}>
          <img src="/bmw.png" width={48} />
        </Link>
        <CustomButton title="Sign Up" styles="min-w-32" />
      </nav>
    </header>
  );
};

export default Header;
