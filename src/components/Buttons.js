import PropTypes from "prop-types";

const Buttons = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid ${className}`}
    >
      <div className="flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
        View Details
      </div>
    </button>
  );
};

Buttons.propTypes = {
  className: PropTypes.string,
};

export default Buttons;
