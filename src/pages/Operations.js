import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Operations = () => {
  const navigate = useNavigate();

  const onTabsHorizontalVerticalClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabsHorizontalVerticalClick1 = useCallback(() => {
    navigate("/esg");
  }, [navigate]);

  const onContainerClick = useCallback(() => {
    // Please sync "Water Ops - Water Pressure 1.0" to the project
  }, []);

  return (
    <div className="w-[1024px] relative shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[60px] box-border gap-5 leading-[normal] tracking-[normal] h-auto hover:bg-whitesmoke hover:flex hover:w-[1024px] hover:h-auto hover:flex-col gap-5 hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[60px] hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:leading-[normal] hover:tracking-[normal]">
      <img
        className="w-[1024px] h-[1092px] absolute !m-[0] right-[0px] bottom-[53px] left-[0px] max-w-full overflow-hidden shrink-0 bg-nds-refresh-neutrals-00white flex border-main-grey-200 border-[1px] border-solid box-border hover:bg-nds-refresh-neutrals-00white hover:flex hover:w-[1024px] hover:h-[1092px] hover:border-main-grey-200 hover:border-[1px] hover:border-solid hover:box-border"
        alt=""
        src="/union1.svg"
      />
      <Header domusIqBlack1="/domus-iqblack-1.svg" />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full w-auto h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[41px] hover:box-border hover:max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start relative gap-10 max-w-full h-auto z-[1] text-left text-5xl text-black font-nds-typography-library-body-text-small hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-10 hover:items-start hover:justify-start hover:max-w-full gap-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full w-auto h-auto text-13xl text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 flex gap-0 hover:flex hover:w-6 hover:h-6 gap-0"
              loading="lazy"
              alt=""
              src="/keyboard-backspace.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-start max-w-full w-auto h-auto gap-2 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start max-w-full h-auto gap-10 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-10 hover:items-start hover:justify-start hover:max-w-full gap-5">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-start hover:max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start pt-0.5 px-0 pb-[3px] box-border max-w-full w-auto h-auto gap-[587px] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-[587px] hover:items-start hover:justify-start hover:pt-0.5 hover:px-0 hover:pb-[3px] hover:box-border hover:max-w-full gap-[147px] gap-[293px]">
                    <div className="w-[640px] flex flex-row items-start justify-start max-w-full h-auto gap-2.5 hover:flex hover:w-[640px] hover:h-auto hover:flex-row gap-2.5 hover:items-start hover:justify-start hover:max-w-full">
                      <h1 className="m-0 flex-1 relative text-inherit tracking-[-1px] leading-[39px] font-normal font-[inherit] whitespace-pre-wrap flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-13xl hover:tracking-[-1px] hover:leading-[39px] hover:text-left hover:text-black hover:flex hover:flex-1 hover:h-auto hover:max-w-full mq975:text-7xl mq975:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                        One Manhattan West Overview
                      </h1>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start w-auto h-auto gap-2 text-base text-darkgray hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start">
                    <div className="w-[214px] relative tracking-[-0.2px] leading-[20px] flex h-auto hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-left hover:text-darkgray hover:flex hover:w-[214px] hover:h-auto">
                      <b>Last Updated:</b>
                      <span className="font-light"> 10 Minutes Ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full w-auto h-auto gap-6 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-6 hover:items-start hover:justify-start hover:max-w-full">
            <div className="flex-1 shadow-[0px_0px_10px_rgba(42,_63,_77,_0.08)] rounded-lg bg-nds-refresh-neutrals-00white flex flex-col items-start justify-start py-6 px-8 box-border gap-[22px] max-w-full h-auto hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-[22px] hover:items-start hover:justify-start hover:rounded-lg hover:py-6 hover:px-8 hover:box-border hover:shadow-[0px_0px_10px_rgba(42,_63,_77,_0.08)] hover:max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-6 hover:items-start hover:justify-start hover:max-w-full mq975:flex-wrap">
                <div className="w-[234px] flex flex-col items-start justify-start pt-[86px] px-0 pb-0 box-border min-w-[234] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[234px] hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[86px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[234] mq975:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-start w-auto h-auto gap-2 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start">
                    <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:flex-1 hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                      Overall Building Score
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-2 pl-[286px] pr-2 box-border gap-2 min-w-[403] max-w-full h-auto text-29xl hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-start hover:py-2 hover:pl-[286px] hover:pr-2 hover:box-border hover:min-w-[403] hover:max-w-full mq450:pl-5 mq450:box-border mq725:pl-[143px] mq725:box-border mq725:min-w-full">
                  <div className="self-stretch h-[163px] flex flex-row items-start justify-start w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[163px] hover:flex-row hover:items-start hover:justify-start">
                    <div className="h-[163px] w-[326px] relative flex gap-0 items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[326px] hover:h-[163px] gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full flex hover:flex hover:w-full hover:h-full"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                      <div className="absolute top-[58.5px] left-[106px] w-[113px] h-[97px] flex flex-col items-start justify-start gap-1 z-[1] hover:flex hover:w-[113px] hover:h-[97px] hover:flex-col gap-1 hover:items-start hover:justify-start">
                        <div className="w-[113px] h-[68px] flex flex-row items-start justify-start py-0 px-5 box-border gap-0 [transform:rotate(0deg)] hover:flex hover:w-[113px] hover:h-[68px] hover:flex-row gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border">
                          <div className="h-[68px] w-[72px] flex flex-row items-start justify-start p-2.5 box-border gap-2.5 hover:flex hover:w-[72px] hover:h-[68px] hover:flex-row gap-2.5 hover:items-start hover:justify-start hover:p-2.5 hover:box-border">
                            <div className="h-auto w-[52px] relative tracking-[-1.5px] leading-[48px] font-light flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-[52px] hover:h-auto mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                              75
                            </div>
                          </div>
                        </div>
                        <div className="w-[113px] h-[] rounded-mini bg-secondary-colors-warning-yellow-300 flex flex-row items-start justify-start py-1 px-[30px] box-border whitespace-nowrap gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-secondary-colors-warning-yellow-300 hover:flex hover:w-[113px] hover:flex-row gap-2.5 hover:items-start hover:justify-start hover:rounded-mini hover:py-1 hover:px-[30px] hover:box-border hover:whitespace-nowrap">
                          <div className="h-auto w-[53px] relative tracking-[-0.15px] leading-[17px] font-light flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:w-[53px] hover:h-auto">{`Average `}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-4 w-auto h-auto text-xs text-main-grey-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-start hover:justify-start mq450:flex-wrap">
                    <div className="flex-1 relative leading-[14px] flex min-w-[101] h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-left hover:text-main-grey-700 hover:flex hover:flex-1 hover:h-auto hover:min-w-[101]">
                      POOR
                    </div>
                    <div className="flex-1 relative leading-[14px] text-right flex min-w-[101] h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-right hover:text-main-grey-700 hover:flex hover:flex-1 hover:h-auto hover:min-w-[101]">
                      EXCELLENT
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end w-auto h-auto gap-6 text-xs text-nds-colors-library-primary-main-grey600 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-6 hover:items-start hover:justify-end">
                <div className="w-[136px] flex flex-row items-start justify-start gap-spacing-space-sm h-auto hover:flex hover:w-[136px] hover:h-auto hover:flex-row gap-spacing-space-sm hover:items-start hover:justify-start">
                  <div className="flex flex-row items-start justify-start gap-1.5 w-auto [align-self:unset] h-auto hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-1.5 hover:items-start hover:justify-start">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                      <div className="relative leading-[14px] flex min-w-[8] w-auto [align-self:unset] h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[8]">
                        0
                      </div>
                    </div>
                    <div className="h-4 w-4 relative rounded-spacing-space-sm bg-orangered flex hover:bg-orangered hover:flex hover:w-4 hover:h-4 hover:rounded-spacing-space-sm" />
                  </div>
                  <div className="h-4 w-4 rounded bg-chocolate flex flex-row items-center justify-start gap-1.5 hover:bg-chocolate hover:flex hover:w-4 hover:h-4 hover:flex-row gap-1.5 hover:items-center hover:justify-start hover:rounded" />
                  <div className="h-4 w-4 rounded bg-goldenrod flex flex-row items-center justify-start gap-1.5 hover:bg-goldenrod hover:flex hover:w-4 hover:h-4 hover:flex-row gap-1.5 hover:items-center hover:justify-start hover:rounded" />
                  <div className="h-4 w-4 rounded bg-khaki flex flex-row items-center justify-start gap-1.5 hover:bg-khaki hover:flex hover:w-4 hover:h-4 hover:flex-row gap-1.5 hover:items-center hover:justify-start hover:rounded" />
                  <div className="flex-1 flex flex-row items-start justify-start gap-1.5 h-auto text-right hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-1.5 hover:items-start hover:justify-start">
                    <div className="h-4 w-4 relative rounded-spacing-space-sm bg-lightgreen flex hover:bg-lightgreen hover:flex hover:w-4 hover:h-4 hover:rounded-spacing-space-sm" />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                      <div className="self-stretch relative leading-[14px] flex min-w-[20] w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-right hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:min-w-[20]">
                        100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[342px] box-border [row-gap:20px] w-auto h-auto gap-0 text-lg text-nds-colors-library-primary-main-grey600 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-0 hover:items-start hover:justify-start hover:py-0 hover:pl-0 hover:pr-[342px] hover:box-border hover:[row-gap:20px] mq975:pr-[171px] mq975:box-border mq725:pr-[85px] mq725:box-border">
            <div
              className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]"
              onClick={onTabsHorizontalVerticalClick}
            >
              <div className="self-stretch h-2 rounded-t rounded-b-none bg-nds-refresh-neutrals-00white overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
              <div className="self-stretch h-[72px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[72px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
                <div className="w-[175px] flex flex-row items-center justify-start py-0 px-5 box-border gap-2 h-auto hover:flex hover:w-[175px] hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-5 hover:box-border">
                  <img
                    className="h-6 w-6 relative min-h-[24] flex hover:flex hover:w-6 hover:h-6 hover:min-h-[24]"
                    loading="lazy"
                    alt=""
                    src="/ic-demography-24px.svg"
                  />
                  <div className="flex-1 relative leading-[22px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:flex-1 hover:h-auto">
                    INSURANCE
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-800 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-800 hover:flex hover:flex-1 hover:h-auto" />
                </div>
              </div>
            </div>
            <div
              className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-t-[1px] border-solid border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]"
              onClick={onTabsHorizontalVerticalClick1}
            >
              <div className="self-stretch h-2 rounded-t rounded-b-none overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
              <div className="self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[70px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
                <div className="self-stretch flex flex-row items-center justify-start py-0 px-[15px] box-border gap-2 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-[15px] hover:box-border">
                  <img
                    className="h-4 w-4 relative bg-slategray flex hover:bg-slategray hover:flex hover:w-4 hover:h-4"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="flex-1 relative leading-[22px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:flex-1 hover:h-auto">
                    SUSTAINABILITY
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-400 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:flex-1 hover:h-auto" />
                </div>
              </div>
            </div>
            <div className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-t-[1px] border-solid border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] text-nds-colors-library-secondary-accent-blue600 hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]">
              <div className="self-stretch h-2 rounded-t rounded-b-none bg-nds-colors-library-secondary-accent-blue600 overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-nds-colors-library-secondary-accent-blue600 hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
              <div className="self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[70px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
                <div className="w-[178px] flex flex-row items-center justify-start py-0 px-5 box-border gap-2 h-auto hover:flex hover:w-[178px] hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-5 hover:box-border">
                  <img
                    className="h-[17.5px] w-[17.5px] relative bg-nds-colors-library-secondary-accent-blue600 flex hover:bg-nds-colors-library-secondary-accent-blue600 hover:flex hover:w-[17.5px] hover:h-[17.5px]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className="flex-1 relative leading-[22px] flex shrink-0 h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-secondary-accent-blue600 hover:flex hover:flex-1 hover:h-auto hover:shrink-0">
                    OPERATIONS
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-400 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:flex-1 hover:h-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nds-refresh-neutrals-00white flex flex-col items-start justify-start w-auto h-auto gap-6 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-6 hover:items-start hover:justify-start">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-10 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-10 hover:items-start hover:justify-start gap-5">
              <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
                <div className="self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start">
                  <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                    <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                      <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                        HVAC
                      </h2>
                    </div>
                  </div>
                  <div className="w-[116px] flex flex-col items-center justify-center gap-1 h-auto text-29xl hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                    <div className="flex flex-row items-center justify-center py-2.5 px-[31px] box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-[31px] hover:box-border">
                      <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[54] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[54] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                        70
                      </div>
                    </div>
                    <div className="self-stretch rounded-mini bg-primary-accent-orange-300 flex flex-row items-center justify-center py-1 px-3 box-border whitespace-nowrap w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-primary-accent-orange-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-3 hover:box-border hover:whitespace-nowrap">
                      <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
                        Below Average
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                  <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                    <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
                <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:py-0 hover:px-0 hover:box-border">
                  <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                    <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                      <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">{`Fire `}</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 w-auto [align-self:unset] h-auto text-29xl hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                    <div className="flex flex-row items-center justify-center py-2.5 px-8 box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-8 hover:box-border">
                      <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[59] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[59] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                        90
                      </div>
                    </div>
                    <div className="rounded-mini bg-secondary-colors-success-green-200 flex flex-row items-center justify-center py-1 px-[33px] box-border w-auto [align-self:unset] h-auto gap-2.5 text-sm text-secondary-colors-success-green-900 hover:bg-secondary-colors-success-green-200 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-[33px] hover:box-border">
                      <div className="relative tracking-[-0.15px] leading-[17px] font-light flex min-w-[56] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-secondary-colors-success-green-900 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[56]">
                        Excellent
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                  <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                    <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
                <div className="self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start">
                  <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                    <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                      <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                        Electric
                      </h2>
                    </div>
                  </div>
                  <div className="w-[116px] flex flex-col items-center justify-center gap-1 h-auto text-29xl hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                    <div className="flex flex-row items-center justify-center py-2.5 px-[31px] box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-[31px] hover:box-border">
                      <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[54] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[54] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                        70
                      </div>
                    </div>
                    <div className="self-stretch rounded-mini bg-secondary-colors-warning-yellow-300 flex flex-row items-center justify-center py-1 px-8 box-border w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-secondary-colors-warning-yellow-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-8 hover:box-border">
                      <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
                        Average
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                  <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                    <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nds-refresh-neutrals-00white flex flex-row flex-wrap items-start justify-start gap-10 w-auto h-auto hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-10 hover:items-start hover:justify-start gap-5">
            <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:py-0 hover:px-0 hover:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                  <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                      Lighting
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 w-auto [align-self:unset] h-auto text-29xl hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                  <div className="flex flex-row items-center justify-center py-2.5 px-8 box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-8 hover:box-border">
                    <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[59] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[59] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                      98
                    </div>
                  </div>
                  <div className="rounded-mini bg-secondary-colors-success-green-200 flex flex-row items-center justify-center py-1 px-[33px] box-border w-auto [align-self:unset] h-auto gap-2.5 text-sm text-secondary-colors-success-green-900 hover:bg-secondary-colors-success-green-200 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-[33px] hover:box-border">
                    <div className="relative tracking-[-0.15px] leading-[17px] font-light flex min-w-[56] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-secondary-colors-success-green-900 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[56]">
                      Excellent
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                  <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                    View Details
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:py-0 hover:px-0 hover:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                  <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                      Security
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 w-auto [align-self:unset] h-auto text-29xl hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                  <div className="flex flex-row items-center justify-center py-2.5 px-8 box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-8 hover:box-border">
                    <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[52] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[52] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                      32
                    </div>
                  </div>
                  <div className="rounded-mini bg-secondary-colors-danger-red-300 flex flex-row items-center justify-center py-1 px-[43px] box-border w-auto [align-self:unset] h-auto gap-2.5 text-sm text-secondary-colors-danger-red-900 hover:bg-secondary-colors-danger-red-300 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-[43px] hover:box-border">
                    <div className="relative tracking-[-0.15px] leading-[17px] font-light flex min-w-[30] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-secondary-colors-danger-red-900 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[30]">
                      Poor
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                  <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                    View Details
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
              <div className="self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start">
                <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                  <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                      Water
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 w-auto [align-self:unset] h-auto text-29xl hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                  <div className="flex flex-row items-center justify-center py-2.5 px-8 box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-8 hover:box-border">
                    <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[52] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[52] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                      32
                    </div>
                  </div>
                  <div className="rounded-mini bg-secondary-colors-danger-red-300 flex flex-row items-center justify-center py-1 px-[43px] box-border w-auto [align-self:unset] h-auto gap-2.5 text-sm text-secondary-colors-danger-red-900 hover:bg-secondary-colors-danger-red-300 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-[43px] hover:box-border">
                    <div className="relative tracking-[-0.15px] leading-[17px] font-light flex min-w-[30] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-secondary-colors-danger-red-900 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[30]">
                      Poor
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 cursor-pointer text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center"
                onClick={onContainerClick}
              >
                <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                  <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                    View Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start p-6 box-border max-w-full w-auto h-auto gap-0 text-left text-lg text-nds-refresh-neutrals-500 font-nds-typography-library-body-text-small hover:bg-whitesmoke hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:rounded-lg hover:p-6 hover:box-border hover:max-w-full mq725:pt-5 mq725:pb-5 mq725:box-border">
            <div className="self-stretch bg-nds-refresh-neutrals-00white overflow-hidden flex flex-row items-center justify-start p-4 box-border max-w-full w-auto h-auto gap-4 text-5xl text-black hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:p-4 hover:box-border hover:max-w-full">
              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-5 hover:items-center hover:justify-between hover:max-w-full mq450:flex-wrap">
                <div className="w-[90px] flex flex-col items-start justify-center gap-1 h-auto hover:flex hover:w-[90px] hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-center">
                  <h2 className="m-0 w-[85px] relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:w-[85px] hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                    Insights
                  </h2>
                  <div className="self-stretch relative text-sm tracking-[-0.5px] leading-[17px] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                    Priority Events
                  </div>
                </div>
                <div className="rounded overflow-hidden flex flex-row items-center justify-center w-auto [align-self:unset] h-auto gap-1 text-base text-steelblue font-nexus-theme-title-medium hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-1 hover:items-center hover:justify-center hover:rounded">
                  <div className="relative leading-[24px] font-medium flex min-w-[82] w-auto [align-self:unset] h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-base hover:leading-[24px] hover:text-left hover:text-steelblue hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[82]">
                    Dismiss all
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48]">
              <div className="self-stretch h-[99px] flex flex-row items-start justify-end gap-4 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[99px] hover:flex-row gap-4 hover:items-start hover:justify-end">
                <img
                  className="h-[17.5px] w-[17.5px] relative bg-nds-colors-library-secondary-accent-blue600 flex hover:bg-nds-colors-library-secondary-accent-blue600 hover:flex hover:w-[17.5px] hover:h-[17.5px]"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="h-[99px] flex-1 flex flex-row flex-wrap items-center justify-end gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end">
                  <div className="h-[99px] flex-1 flex flex-row items-start justify-start min-w-[200] gap-2 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200]">
                    <div className="h-[99px] flex-1 flex flex-col items-start justify-start gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-col gap-4 hover:items-start hover:justify-start">
                      <div className="w-auto h-[43px] flex flex-col items-start justify-start gap-1 self-stretch hover:flex hover:self-stretch hover:w-auto hover:h-[43px] hover:flex-col gap-1 hover:items-start hover:justify-start">
                        <div className="w-auto h-[22px] flex flex-row items-start justify-between self-stretch gap-0 hover:flex hover:self-stretch hover:w-auto hover:h-[22px] hover:flex-row gap-0 hover:items-start hover:justify-between">
                          <div className="h-auto flex-1 relative leading-[21.6px] flex hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[21.6px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:flex-1 hover:h-auto">
                            High Domestic Water Flow
                          </div>
                          <div className="h-auto w-32 relative text-sm tracking-[-0.5px] leading-[16.8px] text-gray-100 flex whitespace-nowrap hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[16.8px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                            Yesterday, 08:00 AM
                          </div>
                        </div>
                        <div className="w-[828.5px] h-auto relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:w-[828.5px] hover:h-auto">
                          Increased water flow outside of normal range detected
                          may indicating potential water leak.
                        </div>
                      </div>
                      <div className="w-[138px] h-10 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2.5 px-[23px] gap-2.5 text-center text-base text-gray-200 hover:flex hover:w-[138px] hover:h-10 hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2.5 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                        <div className="h-auto w-[90px] relative tracking-[-0.2px] leading-[19.2px] font-light flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[19.2px] hover:text-center hover:text-gray-200 hover:flex hover:w-[90px] hover:h-auto">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-y-auto flex flex-col items-start justify-center p-4 box-border min-h-[48] w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48]">
              <div className="self-stretch h-[99px] shrink-0 flex flex-row items-start justify-end gap-4 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[99px] hover:flex-row gap-4 hover:items-start hover:justify-end">
                <img
                  className="h-[17.5px] w-[17.5px] relative bg-nds-colors-library-secondary-accent-blue600 flex hover:bg-nds-colors-library-secondary-accent-blue600 hover:flex hover:w-[17.5px] hover:h-[17.5px]"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="h-[99px] flex-1 flex flex-row flex-wrap items-center justify-end gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end">
                  <div className="h-[99px] flex-1 flex flex-row items-start justify-start min-w-[200] gap-2 hover:flex hover:flex-1 hover:h-[99px] hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200]">
                    <div className="h-[99px] flex-1 flex flex-col items-start justify-start gap-4 hover:flex hover:flex-1 hover:h-[99px] hover:flex-col gap-4 hover:items-start hover:justify-start">
                      <div className="w-auto h-[43px] flex flex-col items-start justify-start gap-1 self-stretch hover:flex hover:self-stretch hover:w-auto hover:h-[43px] hover:flex-col gap-1 hover:items-start hover:justify-start">
                        <div className="w-auto h-[22px] flex flex-row items-start justify-between self-stretch gap-0 hover:flex hover:self-stretch hover:w-auto hover:h-[22px] hover:flex-row gap-0 hover:items-start hover:justify-between">
                          <div className="h-auto flex-1 relative leading-[21.6px] flex hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[21.6px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:flex-1 hover:h-auto">
                            Excessive Co2 Levels in Zone
                          </div>
                          <div className="h-auto w-32 relative text-sm tracking-[-0.5px] leading-[16.8px] text-gray-100 flex whitespace-nowrap hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[16.8px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                            Yesterday, 08:00 AM
                          </div>
                        </div>
                        <div className="w-[828.5px] h-auto relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:w-[828.5px] hover:h-auto">
                          This could indicate insufficient outside airflow into
                          zones impacted.
                        </div>
                      </div>
                      <div className="w-[138px] h-10 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2.5 px-[23px] gap-2.5 text-center text-base text-gray-200 hover:flex hover:w-[138px] hover:h-10 hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2.5 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                        <div className="h-auto w-[90px] relative tracking-[-0.2px] leading-[19.2px] font-light flex hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[19.2px] hover:text-center hover:text-gray-200 hover:flex hover:w-[90px] hover:h-auto">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] max-w-full w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] hover:max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-end gap-4 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-start hover:justify-end hover:max-w-full">
                <img
                  className="h-[17.5px] w-[17.5px] relative bg-nds-colors-library-secondary-accent-blue600 flex hover:bg-nds-colors-library-secondary-accent-blue600 hover:flex hover:w-[17.5px] hover:h-[17.5px]"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="flex-1 flex flex-row flex-wrap items-center justify-end min-w-[538] max-w-full h-auto gap-4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end hover:min-w-[538] hover:max-w-full mq975:min-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[200] max-w-full h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start hover:max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-between hover:[row-gap:20px] hover:max-w-full mq1000:flex-wrap">
                          <div className="w-[700.5px] relative leading-[22px] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:w-[700.5px] hover:h-auto hover:max-w-full">
                            High Humidity Condition
                          </div>
                          <div className="w-32 relative text-sm tracking-[-0.5px] leading-[17px] text-gray-100 flex whitespace-nowrap h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                            Yesterday, 08:00 AM
                          </div>
                        </div>
                        <div className="self-stretch relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex w-auto h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:self-stretch hover:w-auto hover:h-auto">{`Excessive humidity sensed across 2 zones resulting in 240 indicating potential mechanical failure. `}</div>
                      </div>
                      <div className="w-[138px] rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[23px] h-auto gap-2.5 text-center text-base text-gray-200 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                        <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="w-[41px] h-10 absolute !m-[0] right-[-20px] bottom-[663px] flex gap-0 items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[41px] hover:h-10 gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <img
              className="absolute top-[12px] left-[0px] w-6 h-6 flex gap-0 z-[2] hover:flex hover:w-6 hover:h-6 gap-0"
              alt=""
              src="/ic-forum-24px.svg"
            />
            <img
              className="absolute top-[0px] left-[1px] w-10 h-10 flex z-[3] hover:flex hover:w-10 hover:h-10"
              loading="lazy"
              alt=""
              src="/group-626418.svg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Operations;
