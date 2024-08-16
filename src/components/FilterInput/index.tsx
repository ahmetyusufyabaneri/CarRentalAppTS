import ReactSelect from "react-select";
import { OptionsType } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type FilterInputProps = {
  options: OptionsType[];
  placeholder: string;
  parameter: string;
};

const FilterInput = ({ options, placeholder, parameter }: FilterInputProps) => {
  const [selected, setSelected] = useState<OptionsType | null>(null);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (selected?.value) {
      params.set(parameter, selected?.value.toLowerCase());
    } else {
      params.delete(parameter);
    }

    setParams(params);
  }, [selected]);

  return (
    <ReactSelect
      onChange={(e) => setSelected(e)}
      options={options}
      placeholder={placeholder}
      className="min-w-24 text-blue-950"
    />
  );
};

export default FilterInput;
