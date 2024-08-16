import { CarTypes } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4fdfb21df2msh315f6b893c14984p1b2e81jsnb4e59f3f8e76",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type FiltersType = {
  make?: string;
  model?: string;
};

export const fetchCars = async (filters: FiltersType): Promise<CarTypes[]> => {
  const { make = "BMW", model = "" } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}`,
    options
  );

  const data = await res.json();

  return data;
};
