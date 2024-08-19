import PropTypes from "prop-types";

const Buttons1 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid ${className}`}
    >
      <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
        View Details
      </div>
    </div>
  );
};

Buttons1.propTypes = {
  className: PropTypes.string,
};

export default Buttons1;
