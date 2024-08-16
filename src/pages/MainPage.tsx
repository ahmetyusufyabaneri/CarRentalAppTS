import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils";
import { CarTypes } from "../types";
import CarList from "../components/CarList";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../components/ShowMore";
import FilterInput from "../components/FilterInput";
import { fuels, years } from "../constants";

const MainPage = () => {
  const [cars, setCars] = useState<CarTypes[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const [params] = useSearchParams();

  useEffect(() => {
    const paramsObject = Object.fromEntries(params.entries());

    fetchCars(paramsObject)
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [params]);
  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Cars Catalogue</h1>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <FilterInput
              options={fuels}
              placeholder="Fuel Type"
              parameter={"fuel_type"}
            />
            <FilterInput
              options={years}
              placeholder="Year"
              parameter={"year"}
            />
          </div>
        </div>
        <CarList cars={cars} isError={isError} />
      </div>
      <ShowMore />
    </div>
  );
};

export default MainPage;
