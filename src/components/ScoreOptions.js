import PropTypes from "prop-types";

const ScoreOptions = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-mini bg-secondary-colors-warning-yellow-300 flex flex-row items-center justify-center py-1 px-8 box-border w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-secondary-colors-warning-yellow-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-8 hover:box-border self-stretch rounded-mini bg-secondary-colors-warning-yellow-300 flex flex-row items-center justify-center py-1 px-8 box-border w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-secondary-colors-warning-yellow-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-8 hover:box-border ${className}`}
    >
      <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
        Average
      </div>
    </div>
  );
};

ScoreOptions.propTypes = {
  className: PropTypes.string,
};

export default ScoreOptions;
