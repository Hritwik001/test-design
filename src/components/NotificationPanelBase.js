import PropTypes from "prop-types";

const NotificationPanelBase = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] max-w-full w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] hover:max-w-full self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] max-w-full w-auto h-auto gap-0 text-sm text-gray-100 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] hover:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-end gap-4 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-start hover:justify-end hover:max-w-full self-stretch flex flex-row flex-wrap items-start justify-end gap-4 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-start hover:justify-end hover:max-w-full">
        <img
          className="h-6 w-6 relative flex hover:flex hover:w-6 hover:h-6 h-6 w-6 relative flex hover:flex hover:w-6 hover:h-6"
          alt=""
          src="/ic-demography-24px1.svg"
        />
        <div className="flex-1 flex flex-row flex-wrap items-center justify-end min-w-[534] max-w-full h-auto gap-4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end hover:min-w-[534] hover:max-w-full mq975:min-w-full flex-1 flex flex-row flex-wrap items-center justify-end min-w-[534] max-w-full h-auto gap-4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end hover:min-w-[534] hover:max-w-full mq975:min-w-full">
          <div className="flex-1 flex flex-row items-start justify-start min-w-[200] max-w-full h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] hover:max-w-full flex-1 flex flex-row items-start justify-start min-w-[200] max-w-full h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] hover:max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full flex-1 flex flex-col items-start justify-start gap-4 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start hover:max-w-full self-stretch flex flex-col items-start justify-start gap-1 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start hover:max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-between hover:[row-gap:20px] hover:max-w-full mq975:flex-wrap self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-between hover:[row-gap:20px] hover:max-w-full mq975:flex-wrap">
                  <div className="w-[694px] relative leading-[22px] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:w-[694px] hover:h-auto hover:max-w-full w-[694px] relative leading-[22px] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:w-[694px] hover:h-auto hover:max-w-full">
                    Fire Detection System Alarm Muted
                  </div>
                  <div className="w-32 relative text-sm tracking-[-0.5px] leading-[17px] text-gray-100 flex whitespace-nowrap h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap w-32 relative tracking-[-0.5px] leading-[17px] flex whitespace-nowrap h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                    Yesterday, 08:00 AM
                  </div>
                </div>
                <div className="self-stretch relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 whitespace-pre-wrap flex w-auto h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:self-stretch hover:w-auto hover:h-auto self-stretch relative tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 whitespace-pre-wrap flex w-auto h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                  Year to date, there have been 6 incidents resulting in 48 hrs
                  of increased Fire Suppression risk.
                </div>
              </div>
              <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                <div className="flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                  View Details
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NotificationPanelBase.propTypes = {
  className: PropTypes.string,
};

export default NotificationPanelBase;
