import { useCallback } from "react";
import PropTypes from "prop-types";

const TabContentItem = ({ className = "" }) => {
  const onFrameContainerClick1 = useCallback(() => {
    // Please sync "Fire Risk" to the project
  }, []);

  return (
    <div
      className={`flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215] flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto text-center text-sm text-primary-accent-orange-900 hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215] ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start">
        <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
          <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px] m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">{`Fire `}</h2>
          </div>
        </div>
        <div className="w-[116px] flex flex-col items-center justify-center gap-1 h-auto text-29xl hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center w-[116px] flex flex-col items-center justify-center gap-1 h-auto hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
          <div className="flex flex-row items-center justify-center py-2.5 px-[31px] box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-[31px] hover:box-border flex flex-row items-center justify-center py-2.5 px-[31px] box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-[31px] hover:box-border">
            <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[54] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[54] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px] relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[54] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[54] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
              70
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-primary-accent-orange-300 flex flex-row items-center justify-center py-1 px-3 box-border whitespace-nowrap w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-primary-accent-orange-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-3 hover:box-border hover:whitespace-nowrap self-stretch rounded-mini bg-primary-accent-orange-300 flex flex-row items-center justify-center py-1 px-3 box-border whitespace-nowrap w-auto h-auto gap-2.5 hover:bg-primary-accent-orange-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-3 hover:box-border hover:whitespace-nowrap">
            <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
              Below Average
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 cursor-pointer text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 cursor-pointer text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center"
        onClick={onFrameContainerClick1}
      >
        <div
          className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 cursor-pointer hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 cursor-pointer hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid"
          onClick={onFrameContainerClick1}
        >
          <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

TabContentItem.propTypes = {
  className: PropTypes.string,
};

export default TabContentItem;
