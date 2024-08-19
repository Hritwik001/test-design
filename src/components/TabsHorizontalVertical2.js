import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TabsHorizontalVertical2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTabsHorizontalVerticalClick = useCallback(() => {
    navigate("/esg");
  }, [navigate]);

  return (
    <div
      className={`h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-t-[1px] border-solid border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer text-nds-colors-library-secondary-success-green700 hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150] h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-t-[1px] border-solid border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer text-nds-refresh-neutrals-400 text-xs font-nexus-theme-title-medium hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150] ${className}`}
      onClick={onTabsHorizontalVerticalClick}
    >
      <div className="self-stretch h-2 rounded-t rounded-b-none bg-nds-colors-library-secondary-success-green700 overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-nds-colors-library-secondary-success-green700 hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0 self-stretch h-2 rounded-t rounded-b-none bg-nds-colors-library-secondary-success-green700 overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-nds-colors-library-secondary-success-green700 hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
      <div className="self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[70px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0 self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[70px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[15px] box-border gap-2 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-[15px] hover:box-border self-stretch flex flex-row items-center justify-start py-0 px-[15px] box-border gap-2 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-[15px] hover:box-border">
          <img
            className="h-4 w-4 relative bg-green-600 flex hover:bg-green-600 hover:flex hover:w-4 hover:h-4 h-4 w-4 relative bg-green-600 flex hover:bg-green-600 hover:flex hover:w-4 hover:h-4"
            alt=""
            src="/vector-11.svg"
          />
          <div className="flex-1 relative leading-[22px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-secondary-success-green700 hover:flex hover:flex-1 hover:h-auto flex-1 relative leading-[22px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-secondary-success-green700 hover:flex hover:flex-1 hover:h-auto">
            SUSTAINABILITY
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-400 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
          <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:flex-1 hover:h-auto self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:flex-1 hover:h-auto" />
        </div>
      </div>
    </div>
  );
};

TabsHorizontalVertical2.propTypes = {
  className: PropTypes.string,
};

export default TabsHorizontalVertical2;
