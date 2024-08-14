import ReactSelect from "react-select";
import { makes } from "../../constants";

const SearchBar = () => {
  const options = makes.map((make) => ({
    value: make.toLowerCase(),
    label: make,
  }));
  console.log(options);
  return (
    <form>
      <div className="searchbar__item">
        <ReactSelect options={options} className="w-full text-black" />
      </div>
    </form>
  );
};

export default SearchBar;
