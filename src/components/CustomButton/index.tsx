import { CustomButtonProps } from "../../types";

const CustomButton = ({
  buttonType,
  styles,
  title,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      type={buttonType}
      disabled={isDisabled}
      className={`${styles} custom-btn bg-primary-blue text-white rounded-full hover:bg-blue-800`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
