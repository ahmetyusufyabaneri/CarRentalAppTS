import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

const ShowMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const limitParam = Number(searchParams.get("limit")) || 4;

  const handleLimit = () => {
    const newLimit = String(limitParam + 4);

    searchParams.set("limit", newLimit);
    setSearchParams(searchParams);
  };
  return (
    <div className="w-full flex-center gap-4 my-8">
      {limitParam < 32 && (
        <CustomButton handleClick={handleLimit} title="Show More" />
      )}
    </div>
  );
};

export default ShowMore;
