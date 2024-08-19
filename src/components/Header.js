import { useCallback } from "react";
import PropTypes from "prop-types";

const Header = ({ className = "", rectangle3463101, domusIqBlack1 }) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Buildings" to the project
  }, []);

  return (
    <header
      className={`self-stretch h-20 bg-nds-refresh-neutrals-00white flex flex-col items-start justify-start pt-5 px-0 pb-4 box-border gap-4 w-auto hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-20 hover:flex-col gap-4 hover:items-start hover:justify-start hover:pt-5 hover:px-0 hover:pb-4 hover:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-6 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-6 hover:box-border">
        <div
          className="flex flex-row items-start justify-start w-auto [align-self:unset] h-auto gap-[13px] cursor-pointer z-[1] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-[13px] hover:items-start hover:justify-start"
          onClick={onFrameContainerClick}
        >
          <img
            className="h-11 w-[158px] relative overflow-hidden shrink-0 flex gap-0 hover:flex hover:w-[158px] hover:h-11 gap-0"
            loading="lazy"
            alt=""
            src={domusIqBlack1}
          />
        </div>
      </div>
      <div className="self-stretch h-px relative border-gray-200 border-t-[1px] border-solid box-border shrink-0 flex w-auto border-gray-200 border-[1px] border-solid hover:flex hover:self-stretch hover:w-auto hover:h-px hover:border-gray-200 hover:border-[1px] hover:border-solid hover:box-border hover:shrink-0" />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  rectangle3463101: PropTypes.string,
  domusIqBlack1: PropTypes.string,
};

export default Header;
