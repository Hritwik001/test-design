import PropTypes from "prop-types";

const NotificationPanelBase3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-y-auto flex flex-col items-start justify-center p-4 box-border min-h-[48] w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-y-auto flex flex-col items-start justify-center p-4 box-border min-h-[48] w-auto h-auto gap-0 text-center text-sm text-gray-100 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] ${className}`}
    >
      <div className="self-stretch h-[99px] shrink-0 flex flex-row items-start justify-end gap-4 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[99px] hover:flex-row gap-4 hover:items-start hover:justify-end self-stretch h-[99px] shrink-0 flex flex-row items-start justify-end gap-4 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[99px] hover:flex-row gap-4 hover:items-start hover:justify-end">
        <img
          className="h-[17.5px] w-[17.5px] relative bg-nds-colors-library-secondary-accent-blue600 flex hover:bg-nds-colors-library-secondary-accent-blue600 hover:flex hover:w-[17.5px] hover:h-[17.5px] h-[17.5px] w-[17.5px] relative bg-nds-colors-library-secondary-accent-blue600 flex hover:bg-nds-colors-library-secondary-accent-blue600 hover:flex hover:w-[17.5px] hover:h-[17.5px]"
          alt=""
          src="/vector-3.svg"
        />
        <div className="h-[99px] flex-1 flex flex-row flex-wrap items-center justify-end gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end h-[99px] flex-1 flex flex-row flex-wrap items-center justify-end gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end">
          <div className="h-[99px] flex-1 flex flex-row items-start justify-start min-w-[200] gap-2 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] h-[99px] flex-1 flex flex-row items-start justify-start min-w-[200] gap-2 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200]">
            <div className="h-[99px] flex-1 flex flex-col items-start justify-start gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-col gap-4 hover:items-start hover:justify-start h-[99px] flex-1 flex flex-col items-start justify-start gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-col gap-4 hover:items-start hover:justify-start">
              <div className="w-auto h-[43px] flex flex-col items-start justify-start gap-1 self-stretch hover:flex hover:self-stretch hover:w-auto hover:h-[43px] hover:flex-col gap-1 hover:items-start hover:justify-start w-auto h-[43px] flex flex-col items-start justify-start gap-1 self-stretch hover:flex hover:self-stretch hover:w-auto hover:h-[43px] hover:flex-col gap-1 hover:items-start hover:justify-start">
                <div className="w-auto h-[22px] flex flex-row items-start justify-between self-stretch gap-0 hover:flex hover:self-stretch hover:w-auto hover:h-[22px] hover:flex-row gap-0 hover:items-start hover:justify-between w-auto h-[22px] flex flex-row items-start justify-between self-stretch gap-0 hover:flex hover:self-stretch hover:w-auto hover:h-[22px] hover:flex-row gap-0 hover:items-start hover:justify-between">
                  <div className="h-auto flex-1 relative leading-[21.6px] flex hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[21.6px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:flex-1 hover:h-auto h-auto flex-1 relative leading-[21.6px] flex hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[21.6px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:flex-1 hover:h-auto">
                    Excessive Co2 Levels in Zone
                  </div>
                  <div className="h-auto w-32 relative text-sm tracking-[-0.5px] leading-[16.8px] text-gray-100 flex whitespace-nowrap hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[16.8px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap h-auto w-32 relative tracking-[-0.5px] leading-[16.8px] flex whitespace-nowrap hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[16.8px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                    Yesterday, 08:00 AM
                  </div>
                </div>
                <div className="w-[828.5px] h-auto relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:w-[828.5px] hover:h-auto w-[828.5px] h-auto relative tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:w-[828.5px] hover:h-auto">
                  This could indicate insufficient outside airflow into zones
                  impacted.
                </div>
              </div>
              <div className="w-[138px] h-10 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2.5 px-[23px] gap-2.5 text-center text-base text-gray-200 hover:flex hover:w-[138px] hover:h-10 hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2.5 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid w-[138px] h-10 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2.5 px-[23px] gap-2.5 text-base text-gray-200 hover:flex hover:w-[138px] hover:h-10 hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2.5 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                <div className="h-auto w-[90px] relative tracking-[-0.2px] leading-[19.2px] font-light flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[19.2px] hover:text-center hover:text-gray-200 hover:flex hover:w-[90px] hover:h-auto h-auto w-[90px] relative tracking-[-0.2px] leading-[19.2px] font-light flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[19.2px] hover:text-center hover:text-gray-200 hover:flex hover:w-[90px] hover:h-auto">
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NotificationPanelBase3.propTypes = {
  className: PropTypes.string,
};

export default NotificationPanelBase3;
