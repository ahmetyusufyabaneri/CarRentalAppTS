import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="">
        <Link to={"/"}>
          <img src="/bmw.png" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
