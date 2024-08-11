import { useEffect, useState } from "react";
import FilterArea from "../components/FilterArea";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils/fetchCars";
import { CarTypes } from "../types";
import CarList from "../components/CarList";

const MainPage = () => {
  const [cars, setCars] = useState<CarTypes[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);
  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Cars Catalogue</h1>
          <p>Discover Cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <FilterArea />
            <FilterArea />
          </div>
        </div>
        <CarList cars={cars} isError={isError} />
      </div>
    </div>
  );
};

export default MainPage;
