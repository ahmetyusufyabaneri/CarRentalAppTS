import { CarTypes } from "../../types";
import CarCard from "../CarCard";

type CarListProps = {
  cars: CarTypes[];
  isError: boolean;
};

const CarList = ({ cars, isError }: CarListProps) => {
  return (
    <>
      {!cars ? (
        <div className="warn-container">
          <h2>Loading...</h2>
        </div>
      ) : isError ? (
        <div className="warn-container">
          <h2>Sorry an error occurred!</h2>
        </div>
      ) : cars.length < 1 ? (
        <div className="warn-container">
          <h2>No car was found that meets your criteria.</h2>
        </div>
      ) : (
        <section>
          <div className="home__cars-wrapper">
            {cars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CarList;
