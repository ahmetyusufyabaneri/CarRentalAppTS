import { CarTypes } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4fdfb21df2msh315f6b893c14984p1b2e81jsnb4e59f3f8e76",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchCars = async (): Promise<CarTypes[]> => {
  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    options
  );

  const data = await res.json();

  return data;
};
