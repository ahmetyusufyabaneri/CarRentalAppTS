import { CustomButtonProps } from "../../types";

const CustomButton = ({
  buttonType,
  styles,
  title,
  isDisabled,
  icon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={buttonType}
      disabled={isDisabled}
      className={`${styles} custom-btn bg-primary-blue text-white rounded-full hover:bg-blue-800`}
    >
      <span className="flex-1">{title}</span>
      {icon && (
        <div>
          <img src={icon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
