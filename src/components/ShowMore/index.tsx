import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

const ShowMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const limitParam = Number(searchParams.get("limit")) || 5;

  const handleLimit = () => {
    const newLimit = limitParam + 5;
    console.log(newLimit);
  };
  return (
    <div className="w-full flex-center gap-4 my-8">
      <CustomButton handleClick={handleLimit} title="Show More" />
    </div>
  );
};

export default ShowMore;
