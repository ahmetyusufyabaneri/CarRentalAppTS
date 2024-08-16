import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  buttonType?: "button" | "reset" | "submit";
  styles?: string;
  title: string;
  isDisabled?: boolean;
  icon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type CarTypes = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "automatic" | "manual";
  year: number;
};

export type OptionsType = {
  value: string;
  label: string;
};
