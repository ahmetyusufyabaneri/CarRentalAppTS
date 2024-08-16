import ReactSelect from "react-select";
import { makes } from "../../constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchButton = ({ styles }: { styles: string }) => (
  <button className={`ml-3 z-10 ${styles}`}>
    <img src="/magnifying-glass.svg" width={40} height={40} />
  </button>
);
const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  type OptionsType = {
    value: string;
    label: string;
  };

  const options: OptionsType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchParams({ make, model });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          defaultInputValue={searchParams.get("make")!}
          options={options}
          onChange={(e) => e && setMake(e.value)}
          placeholder="example: Toyota"
          className="w-full text-black"
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img src="/model-icon.png" width={25} className="absolute ml-4" />
        <input
          onChange={(e) => setModel(e.target.value)}
          type="text"
          placeholder="example: Corolla"
          className="searchbar__input rounded text-black"
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <SearchButton styles="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
